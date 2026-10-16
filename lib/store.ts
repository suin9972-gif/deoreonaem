"use client";

import { useEffect, useState } from "react";
import type { Organized } from "./organize";

// 브라우저에 저장 (SETUP: 진짜 저장소는 나중에)
const KEY = "deoreonaem:v1";

export type Step = "intro" | "dump" | "today";

export type AppState = {
  step: Step;
  draft: string;
  result: Organized | null;
};

const initial: AppState = { step: "intro", draft: "", result: null };

function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initial;
    return { ...initial, ...JSON.parse(raw) };
  } catch {
    return initial;
  }
}

export function useAppState() {
  const [state, setState] = useState<AppState | null>(null);

  useEffect(() => {
    // 브라우저 저장소는 화면이 뜬 뒤에만 읽을 수 있어서 여기서 한 번 불러옴
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(load());
  }, []);

  useEffect(() => {
    if (!state) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const update = (patch: Partial<AppState>) =>
    setState((s) => (s ? { ...s, ...patch } : s));

  return [state, update] as const;
}
