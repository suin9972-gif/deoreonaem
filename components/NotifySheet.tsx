"use client";

import PrimaryButton from "./PrimaryButton";
import Sheet from "./Sheet";

type Props = {
  onDone: () => void;
};

export default function NotifySheet({ onDone }: Props) {
  // 흉내: 아침 알림 — 권한만 실제로 묻고, 보내는 알림은 없음 (SETUP)
  const allow = async () => {
    try {
      await Notification.requestPermission();
    } catch {}
    onDone();
  };

  return (
    <Sheet label="아침 알림" onClose={onDone}>
      <h2 className="text-title text-ink">
        내일 아침에
        <br />
        세 가지 알려드릴까요?
      </h2>
      <PrimaryButton className="mt-6" onClick={allow}>
        알려주세요
      </PrimaryButton>
      <button onClick={onDone} className="mx-auto mt-5 block text-readable text-fg hover:text-ink">
        괜찮아요
      </button>
    </Sheet>
  );
}
