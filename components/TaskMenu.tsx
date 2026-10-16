"use client";

import { useState } from "react";
import type { Task } from "@/lib/organize";

type Props = {
  folded: Task[];
  onSwap: (foldedId: string) => void;
  onLater: () => void;
  onClose: () => void;
};

export default function TaskMenu({ folded, onSwap, onLater, onClose }: Props) {
  const [picking, setPicking] = useState(false);

  return (
    <>
      <div className="fixed inset-0 z-10" onClick={onClose} aria-hidden="true" />
      <div
        role="menu"
        className="absolute right-0 top-full z-20 mt-1 w-60 rounded-pill border border-line bg-canvas p-2"
      >
        {!picking ? (
          <>
            <button
              role="menuitem"
              onClick={() => setPicking(true)}
              className="block w-full rounded-icon px-3 py-2.5 text-left text-readable text-fg hover:bg-surface"
            >
              다른 걸로 바꾸기
            </button>
            <button
              role="menuitem"
              onClick={onLater}
              className="block w-full rounded-icon px-3 py-2.5 text-left text-readable text-fg hover:bg-surface"
            >
              나중에 할게요
            </button>
          </>
        ) : folded.length === 0 ? (
          <p className="px-3 py-2.5 text-caption text-muted">접어둔 할 일이 없어요.</p>
        ) : (
          <>
            <p className="px-3 pb-1 pt-2 text-caption text-muted">어떤 걸로 바꿀까요?</p>
            {folded.map((t) => (
              <button
                key={t.id}
                role="menuitem"
                onClick={() => onSwap(t.id)}
                className="flex w-full items-baseline justify-between gap-3 rounded-icon px-3 py-2.5 text-left text-readable text-fg hover:bg-surface"
              >
                <span>{t.text}</span>
                <span className="shrink-0 text-caption text-muted">{t.category}</span>
              </button>
            ))}
          </>
        )}
      </div>
    </>
  );
}
