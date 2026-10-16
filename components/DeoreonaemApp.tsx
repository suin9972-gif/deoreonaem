"use client";

import { useCallback, useState } from "react";
import { useAppState } from "@/lib/store";
import { organize } from "@/lib/organize";
import Intro from "./Intro";
import Dump from "./Dump";
import Today from "./Today";
import SaveSheet from "./SaveSheet";
import NotifySheet from "./NotifySheet";

const canNotify = () => typeof window !== "undefined" && "Notification" in window;

export default function DeoreonaemApp() {
  const [state, update] = useAppState();
  const [sheet, setSheet] = useState<"save" | "notify" | null>(null);
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
        <Today
          result={state.result}
          saved={state.account !== null}
          onChange={(result) => update({ result })}
          onRedump={() => update({ step: "dump" })}
          onSave={() => setSheet("save")}
        />
      )}

      {sheet === "save" && (
        <SaveSheet
          onClose={() => setSheet(null)}
          // 건너뛰면 이 기기에만 저장 (이미 브라우저에 저장돼 있음)
          onLater={() => setSheet(null)}
          onLogin={(account) => {
            update({ account });
            // 알림을 지원하지 않는 브라우저(아이폰 Safari 등)는 이 단계를 건너뜀
            setSheet(!state.notifyAsked && canNotify() ? "notify" : null);
          }}
        />
      )}
      {sheet === "notify" && (
        <NotifySheet
          onDone={() => {
            update({ notifyAsked: true });
            setSheet(null);
          }}
        />
      )}
    </div>
  );
}
