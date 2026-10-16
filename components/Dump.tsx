"use client";

import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";

type Props = {
  draft: string;
  onChange: (v: string) => void;
  onSubmit: () => Promise<void>;
};

const LOADING_LINES = ["정리하는 중이에요", "덜어냄이 정리를 도와줘요", "오늘 할 것부터 골라둘게요"];

export default function Dump({ draft, onChange, onSubmit }: Props) {
  const [loading, setLoading] = useState(false);
  const [line, setLine] = useState(0);
  const empty = draft.trim() === "";

  useEffect(() => {
    if (!loading) return;
    const tick = setInterval(() => setLine((n) => (n + 1) % LOADING_LINES.length), 900);
    return () => clearInterval(tick);
  }, [loading]);

  const submit = async () => {
    setLine(0);
    setLoading(true);
    try {
      await onSubmit();
    } catch {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-dvh flex-col px-5 pb-8 pt-6" aria-busy="true">
        <p className="text-title text-ink">{LOADING_LINES[line]}</p>
        <div className="mt-8 flex flex-col gap-5">
          {[88, 74, 60].map((w) => (
            <div key={w} className="h-8 rounded-pill bg-surface" style={{ width: `${w}%` }} />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-dvh flex-col px-5 pb-8 pt-6">
      <h1 className="text-title text-ink">
        머릿속에 있는 거,
        <br />
        순서 없이 쏟아내 주세요.
      </h1>
      <textarea
        value={draft}
        onChange={(e) => onChange(e.target.value)}
        placeholder="주간보고 작성, 운동, 엄마 생신 선물, 결혼식, 병원, 출장 준비…"
        aria-label="머릿속에 있는 것"
        className="mt-5 min-h-[50dvh] w-full flex-1 resize-none rounded-pill border border-line p-4 text-[16px] leading-[26px] text-fg outline-none placeholder:text-muted focus:border-fg"
      />
      <PrimaryButton className="mt-5" disabled={empty} onClick={submit}>
        정리해 주세요
      </PrimaryButton>
    </main>
  );
}
