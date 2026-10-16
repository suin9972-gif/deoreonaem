"use client";

import { useAppState } from "@/lib/store";
import Intro from "./Intro";
import Dump from "./Dump";

export default function DeoreonaemApp() {
  const [state, update] = useAppState();
  if (!state) return null;

  return (
    <div className="mx-auto w-full max-w-[480px]">
      {state.step === "intro" && <Intro onStart={() => update({ step: "dump" })} />}
      {state.step === "dump" && (
        <Dump
          draft={state.draft}
          onChange={(draft) => update({ draft })}
          onSubmit={() => {}}
        />
      )}
    </div>
  );
}
