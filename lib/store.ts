"use client";

import { useEffect, useState } from "react";

// 브라우저에 저장 (SETUP: 진짜 저장소는 나중에)
const KEY = "deoreonaem:v1";

export type Step = "intro" | "dump";

export type AppState = {
  step: Step;
  draft: string;
};

const initial: AppState = { step: "intro", draft: "" };

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
