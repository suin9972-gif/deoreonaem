import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";
import { mockOrganize } from "@/lib/mockOrganize";

// 서버에서만 실행됨 — 키(ANTHROPIC_API_KEY)는 .env.local에만 있고 브라우저로 가지 않음
const hasKey = () => (process.env.ANTHROPIC_API_KEY ?? "").trim().startsWith("sk-ant-");

const TaskSchema = z.object({
  text: z.string(),
  category: z.enum(["업무", "개인", "자기 계발"]),
  today: z.boolean(),
});
const ResultSchema = z.object({ tasks: z.array(TaskSchema) });

const SYSTEM = `너는 "덜어냄"의 정리 담당이야. 사용자가 머릿속에 있는 걸 순서 없이 쏟아낸 글을 받아, 오늘 무엇부터 하면 되는지 대신 정해 준다.

할 일:
1. 글에서 할 일만 뽑는다. 잡담·감정·할 일이 아닌 말("ㅋㅋㅋ", "배고프다")은 버린다. 할 일이 하나도 없으면 빈 목록을 돌려준다.
2. 뜻이 같은 일은 하나로 합친다. 표현이 달라도 같은 일이면 합친다("엄마 생신 선물"과 "엄마 생일 선물 사기"는 하나).
3. 각 할 일의 text는 사용자가 쓴 말을 살려 짧게 쓴다. 새 내용을 지어내지 않는다.
4. category는 셋 중 하나: 업무(회사·일·직장 관련), 개인(가족·집안일·병원·약속·경조사 등), 자기 계발(운동·공부·취미 연습·독서 등).
5. today는 오늘 꼭 해야 하는 일일 때만 true: 오늘이 마감이거나, 오늘 시각이 정해진 일(예: "오후 3시", "저녁 7시", "6시까지", "퇴근 전")이거나, "오늘"이라고 적은 일. 그 밖에는 false.
6. tasks는 우선순위 순서로 정렬한다: today가 true인 일 → 마감이 가까운 일("내일 마감" 등) → 중요하지만 미루기 쉬운 일 → 나머지. 비슷하면 업무·개인·자기 계발이 한쪽에 몰리지 않게 섞는다.`;

export async function POST(request: Request) {
  const { draft } = (await request.json().catch(() => ({}))) as { draft?: string };
  if (!draft || !draft.trim()) {
    return Response.json({ error: "empty" }, { status: 400 });
  }

  // 흉내: 키가 아직 없으면 낱말 규칙으로 대신 정리 (SETUP)
  if (!hasKey()) {
    await new Promise((r) => setTimeout(r, 1500));
    return Response.json({ tasks: mockOrganize(draft) });
  }
  const client = new Anthropic();

  const today = new Date().toLocaleDateString("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  try {
    const response = await client.beta.messages.parse({
      model: "claude-opus-5-5",
      max_tokens: 4096,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low", format: betaZodOutputFormat(ResultSchema) },
      system: SYSTEM,
      messages: [{ role: "user", content: `오늘은 ${today}.\n\n쏟아낸 글:\n${draft}` }],
    });

    if (response.stop_reason === "refusal" || !response.parsed_output) {
      return Response.json({ error: "not_organized" }, { status: 502 });
    }
    return Response.json(response.parsed_output);
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      console.error("[organize] API 키가 없거나 맞지 않아요 (.env.local의 ANTHROPIC_API_KEY)");
    } else if (error instanceof Anthropic.RateLimitError) {
      console.error("[organize] 요청이 너무 많아요 — 잠시 뒤 다시");
    } else if (error instanceof Anthropic.APIError) {
      console.error(`[organize] API 오류 ${error.status}:`, error.message);
    } else {
      console.error("[organize]", error);
    }
    return Response.json({ error: "failed" }, { status: 502 });
  }
}
