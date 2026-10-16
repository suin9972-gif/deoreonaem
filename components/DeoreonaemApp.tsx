"use client";

import { useCallback } from "react";
import { useAppState } from "@/lib/store";
import { organize } from "@/lib/organize";
import Intro from "./Intro";
import Dump from "./Dump";
import Today from "./Today";

export default function DeoreonaemApp() {
  const [state, update] = useAppState();
  const draft = state?.draft ?? "";

  const finishOrganize = useCallback(
    () => update({ step: "today", result: organize(draft) }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draft],
  );

  if (!state) return null;

  return (
    <div className="mx-auto w-full max-w-[480px]">
      {state.step === "intro" && <Intro onStart={() => update({ step: "dump" })} />}
      {state.step === "dump" && (
        <Dump draft={state.draft} onChange={(d) => update({ draft: d })} onSubmit={finishOrganize} />
      )}
      {state.step === "today" && state.result && (
        <Today result={state.result} onRedump={() => update({ step: "dump" })} onSave={() => {}} />
      )}
    </div>
  );
}
