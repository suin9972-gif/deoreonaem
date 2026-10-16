import PrimaryButton from "./PrimaryButton";

type Props = {
  draft: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
};

export default function Dump({ draft, onChange, onSubmit }: Props) {
  const empty = draft.trim() === "";
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
      <PrimaryButton className="mt-5" disabled={empty} onClick={onSubmit}>
        정리해 주세요
      </PrimaryButton>
    </main>
  );
}
