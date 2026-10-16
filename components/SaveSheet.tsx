"use client";

import { useState } from "react";
import Sheet from "./Sheet";

type Provider = "kakao" | "google";

type Props = {
  onLogin: (p: Provider) => void;
  onLater: () => void;
  onClose: () => void;
};

export default function SaveSheet({ onLogin, onLater, onClose }: Props) {
  const [pending, setPending] = useState<Provider | null>(null);

  // 흉내: 카카오·Google 로그인 — 누르면 바로 로그인된 것으로 처리 (SETUP)
  const login = (p: Provider) => {
    setPending(p);
    setTimeout(() => onLogin(p), 600);
  };

  return (
    <Sheet label="저장하기" onClose={onClose}>
      <h2 className="text-title text-ink">
        오늘 세 가지,
        <br />
        저장해 둘까요?
      </h2>

      <div className="mt-6 flex flex-col gap-2.5">
        <button
          onClick={() => login("kakao")}
          disabled={pending !== null}
          className="flex h-12 items-center justify-center gap-2 rounded-login bg-kakao text-[16px] text-black/85"
        >
          <KakaoSymbol />
          {pending === "kakao" ? "잠시만요…" : "카카오로 계속하기"}
        </button>
        <button
          onClick={() => login("google")}
          disabled={pending !== null}
          className="flex h-12 items-center justify-center gap-2 rounded-login border border-line bg-canvas text-[16px] text-fg"
        >
          <GoogleSymbol />
          {pending === "google" ? "잠시만요…" : "Google로 계속하기"}
        </button>
      </div>

      <p className="mt-3 text-center text-caption text-muted">계속하면 약관과 개인정보 처리에 동의해요.</p>

      <button
        onClick={onLater}
        className="mx-auto mt-5 block text-readable text-fg hover:text-ink"
      >
        나중에 할게요
      </button>
    </Sheet>
  );
}

function KakaoSymbol() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#000"
        d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.7 6.7l-1 3.6c-.1.3.3.6.6.4l4.3-2.8c.5.1.9.1 1.4.1 5.5 0 10-3.6 10-8S17.5 3 12 3z"
      />
    </svg>
  );
}

function GoogleSymbol() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.5 30.3 0 24 0 14.6 0 6.6 5.4 2.7 13.3l7.9 6.1C12.5 13.6 17.8 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.7c4.3-4 6.9-9.9 6.9-17.1z" />
      <path fill="#FBBC05" d="M10.6 28.6c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C1 16.6 0 20.2 0 24s1 7.4 2.7 10.7l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2.1 1.4-4.8 2.3-8.5 2.3-6.2 0-11.5-4.1-13.4-9.9l-7.9 6.1C6.6 42.6 14.6 48 24 48z" />
    </svg>
  );
}
