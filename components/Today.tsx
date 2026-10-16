"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, MoreHorizontal } from "lucide-react";
import { objectParticle, postpone, swap, titleFor, type Organized } from "@/lib/organize";
import PrimaryButton from "./PrimaryButton";
import TaskMenu from "./TaskMenu";

type Props = {
  result: Organized;
  onChange: (r: Organized) => void;
  onRedump: () => void;
  onSave: () => void;
};

export default function Today({ result, onChange, onRedump, onSave }: Props) {
  const [open, setOpen] = useState(false);
  const [menuAt, setMenuAt] = useState<number | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const press = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { today, folded } = result;

  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(null), 3000);
    return () => clearTimeout(t);
  }, [notice]);

  // 항목 길게 누르기 → ⋯ 메뉴
  const startPress = (i: number) => {
    press.current = setTimeout(() => setMenuAt(i), 500);
  };
  const endPress = () => {
    if (press.current) clearTimeout(press.current);
  };

  if (today.length === 0) {
    return (
      <main className="flex min-h-dvh flex-col justify-center px-5 pb-8 pt-6">
        <h1 className="text-heading text-ink">
          오늘은 일정이 없어요!
          <br />
          오늘 완전히 머리를 비워봐요
        </h1>
        <button
          onClick={onRedump}
          className="mt-6 self-start text-readable text-fg underline underline-offset-4 hover:text-ink"
        >
          다시 쏟아내기
        </button>
      </main>
    );
  }

  return (
    <main className="flex min-h-dvh flex-col px-5 pb-8 pt-6">
      <h1 className="text-heading text-ink">{titleFor(today.length)}</h1>

      <ol className="mt-8 flex flex-col gap-6">
        {today.map((t, i) => (
          <li
            key={t.id}
            className="relative flex select-none items-center gap-4"
            onPointerDown={() => startPress(i)}
            onPointerUp={endPress}
            onPointerLeave={endPress}
            onContextMenu={(e) => e.preventDefault()}
          >
            <span className="w-5 shrink-0 text-[22px] font-bold text-ink">{i + 1}</span>
            <span className="flex-1 text-[22px] font-bold leading-[30px] text-ink">{t.text}</span>
            <span className="shrink-0 text-caption text-muted">{t.category}</span>
            <button
              aria-label={`${t.text} 메뉴`}
              onClick={() => setMenuAt(i)}
              className="-mr-2 flex size-9 shrink-0 items-center justify-center rounded-icon text-fg hover:bg-surface active:bg-surface"
            >
              <MoreHorizontal size={20} />
            </button>
            {menuAt === i && (
              <TaskMenu
                folded={folded}
                onClose={() => setMenuAt(null)}
                onSwap={(id) => {
                  onChange(swap(result, i, id));
                  setMenuAt(null);
                }}
                onLater={() => {
                  const { result: next, filled } = postpone(result, i);
                  onChange(next);
                  setMenuAt(null);
                  if (filled) setNotice(`${filled.text}${objectParticle(filled.text)} 넣어뒀어요`);
                }}
              />
            )}
          </li>
        ))}
      </ol>

      {notice && (
        <p role="status" className="mt-5 text-readable text-fg">
          {notice}
        </p>
      )}

      {folded.length > 0 && (
        <div className="mt-8">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="flex h-10 items-center gap-1 rounded-fold bg-surface pl-4 pr-5 text-caption text-black"
          >
            {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            나머지 {folded.length}개는 잠깐 접어둘게요
          </button>
          {open && (
            <ul className="mt-4 flex flex-col gap-3 pl-1">
              {folded.map((t) => (
                <li key={t.id} className="flex items-baseline justify-between gap-4">
                  <span className="text-readable text-fg">{t.text}</span>
                  <span className="shrink-0 text-caption text-muted">{t.category}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="flex-1" />
      <PrimaryButton className="mt-8" onClick={onSave}>
        저장해 둘게요
      </PrimaryButton>
    </main>
  );
}
