// 정리는 서버(app/api/organize)에서 Claude가 함. 여기는 받은 결과를 화면용으로 나누는 곳

export type Category = "업무" | "개인" | "자기 계발";

export type Task = {
  id: string;
  text: string;
  category: Category;
  today: boolean;
  later?: boolean; // "나중에 할게요"로 내린 일 — 빈자리 채우기에 다시 쓰지 않음
};

export type Organized = {
  today: Task[];
  folded: Task[];
};

type RawTask = Pick<Task, "text" | "category" | "today">;

/** 우선순위 순서로 받은 할 일을 오늘 할 것(보통 셋, 오늘 꼭 할 일이 더 많으면 그만큼)과 접어둘 것으로 나눔 */
export function arrange(tasks: RawTask[]): Organized {
  const withIds: Task[] = tasks.map((t, i) => ({ ...t, id: `t${i}-${t.text.replace(/\s+/g, "")}` }));
  const count = Math.max(3, withIds.filter((t) => t.today).length);
  return { today: withIds.slice(0, count), folded: withIds.slice(count) };
}

/** 서버에 정리를 맡김. 실패하면 오류를 던짐 */
export async function requestOrganize(draft: string): Promise<Organized> {
  const res = await fetch("/api/organize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ draft }),
  });
  if (!res.ok) throw new Error(`organize failed: ${res.status}`);
  const data = (await res.json()) as { tasks: RawTask[] };
  return arrange(data.tasks);
}


/** 접어둔 일 중 하나와 자리를 바꿈 */
export function swap(r: Organized, index: number, foldedId: string): Organized {
  const pick = r.folded.find((t) => t.id === foldedId);
  if (!pick) return r;
  const out = r.today[index];
  const today = r.today.map((t, i) => (i === index ? { ...pick, later: false } : t));
  const folded = [out, ...r.folded.filter((t) => t.id !== foldedId)];
  return { today, folded };
}

/** 나중으로 내리고, 빈자리는 다음 할 일로 채움. 채운 일을 함께 돌려줌 */
export function postpone(r: Organized, index: number): { result: Organized; filled: Task | null } {
  const out = { ...r.today[index], later: true };
  const next = r.folded.find((t) => !t.later) ?? null;
  const today = next
    ? r.today.map((t, i) => (i === index ? next : t))
    : r.today.filter((_, i) => i !== index);
  const folded = [...r.folded.filter((t) => t.id !== next?.id), out];
  return { result: { today, folded }, filled: next };
}

export const titleFor = (n: number) =>
  n === 3 ? "오늘은 이 세 가지만 하면 돼요." : "오늘은 이것만 하면 돼요.";

/** 받침에 따라 을/를 */
export function objectParticle(word: string): string {
  const code = word.charCodeAt(word.length - 1) - 0xac00;
  if (code < 0 || code > 11171) return "를";
  return code % 28 === 0 ? "를" : "을";
}
