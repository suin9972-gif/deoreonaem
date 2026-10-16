// 흉내: AI 정리 — 쉼표·줄바꿈으로 나누고 낱말 규칙으로 분류·우선순위 (SETUP)

export type Category = "업무" | "개인" | "자기 계발";

export type Task = {
  id: string;
  text: string;
  category: Category;
  today: boolean;
};

export type Organized = {
  today: Task[];
  folded: Task[];
};

const WORK = ["보고", "회의", "메일", "출장", "업무", "기획", "발표", "미팅", "결재", "자료", "회사", "팀", "계약", "견적"];
const GROWTH = ["운동", "공부", "대학원", "독서", "영어", "강의", "헬스", "요가", "러닝", "논문", "과제", "수업", "필라테스", "산책"];
const URGENT = ["오늘", "마감", "급", "제출", "내일"];
const PERSONAL_EVENT = ["생신", "생일", "결혼식", "병원", "약속", "선물", "예약"];

const has = (text: string, words: string[]) => words.some((w) => text.includes(w));

function categorize(text: string): Category {
  if (has(text, WORK)) return "업무";
  if (has(text, GROWTH)) return "자기 계발";
  return "개인";
}

function score(t: Task): number {
  let s = 0;
  if (t.today) s += 100;
  if (has(t.text, URGENT)) s += 20;
  if (t.category === "업무") s += 30;
  if (t.category === "개인" && has(t.text, PERSONAL_EVENT)) s += 15;
  if (t.category === "자기 계발") s += 10;
  return s;
}

// 할 일로 보기 어려운 조각 (ㅋㅋ, …, 물음표만 있는 것)
const NOT_A_TASK = /^[ㄱ-ㅎㅏ-ㅣ.\s…!?~·-]*$/;

export function organize(raw: string): Organized {
  const seen = new Set<string>();
  const tasks: Task[] = [];

  raw
    .split(/[,\n，、]+/)
    .map((s) => s.trim().replace(/(…|\.{2,})$/, "").trim())
    .forEach((text, i) => {
      if (!text || NOT_A_TASK.test(text)) return;
      const key = text.replace(/\s+/g, "");
      if (seen.has(key)) return; // 같은 일을 두 번 적으면 하나로 합침
      seen.add(key);
      tasks.push({ id: `t${i}-${key}`, text, category: categorize(text), today: text.includes("오늘") });
    });

  const sorted = tasks
    .map((t, i) => ({ t, i }))
    .sort((a, b) => score(b.t) - score(a.t) || a.i - b.i)
    .map(({ t }) => t);

  const mustToday = sorted.filter((t) => t.today).length;
  const count = Math.max(3, mustToday);
  return { today: sorted.slice(0, count), folded: sorted.slice(count) };
}

export const titleFor = (n: number) =>
  n === 3 ? "오늘은 이 세 가지만 하면 돼요." : "오늘은 이것만 하면 돼요.";
