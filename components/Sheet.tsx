"use client";

import { useEffect, type ReactNode } from "react";

type Props = {
  label: string;
  onClose: () => void;
  children: ReactNode;
};

// 아래에서 올라오는 시트. 뒤 화면은 흐리게 그대로 보임
export default function Sheet({ label, onClose, children }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-30">
      <div className="absolute inset-0 bg-white/60" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[480px] rounded-t-fold border-t border-line bg-canvas px-5 pb-8 pt-7"
      >
        {children}
      </div>
    </div>
  );
}
