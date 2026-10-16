import PrimaryButton from "./PrimaryButton";

export default function Intro({ onStart }: { onStart: () => void }) {
  return (
    <main className="flex min-h-dvh flex-col px-5 pb-8 pt-6">
      <p className="text-nav font-bold text-ink">덜어냄</p>
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="text-heading text-ink">
          머릿속에 있는 거,
          <br />
          순서 없이 쏟아내 주세요.
        </h1>
        <p className="mt-3 text-readable text-fg">정리는 제가 할게요.</p>
      </div>
      <PrimaryButton onClick={onStart}>쏟아내기 시작</PrimaryButton>
    </main>
  );
}
