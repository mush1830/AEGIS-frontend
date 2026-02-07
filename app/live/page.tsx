// app/live/page.tsx
"use client";

import { useState } from "react";

import { AppHeader } from "@/components/layout/AppHeader"; // 너 프로젝트에 있는 AppHeader가 있다면
import { AssessmentPanel } from "@/components/live/AssessmentPanel";
import { ActivityLogPanel } from "@/components/live/ActivityLogPanel";
import { ChatInputBar } from "@/components/live/ChatInputBar";
import { RightActions } from "@/components/live/RightActions";
import { useRouter } from "next/navigation";
import MedicalTranslatorPanel from "@/components/live/MedicalTranslatorPanel";

export default function LivePage() {
  const router = useRouter();
  const [isTranslatorOpen, setIsTranslatorOpen] = useState(false);

  return (
    <div className="min-h-dvh flex flex-col bg-[var(--bg)] text-[var(--fg)]">
      {/* ✅ TopBar 대신: 필요한 경우 AppHeader를 sticky로 */}
      <div className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]">
        <AppHeader title="LIVE" />
      </div>

  {/* 본문 */}
<main className="flex-1 min-h-0 overflow-hidden p-4">
  <div className="grid h-full grid-rows-[1fr] grid-cols-1 gap-4 lg:grid-cols-2 items-start">
    {/* LEFT: 내용만큼 */}
    <div className="min-h-0">
      <AssessmentPanel />
    </div>

    {/* RIGHT: 화면 끝까지 */}
    <div className="min-h-0 h-full flex flex-col gap-3">
      {/* 번역기 슬롯 */}
      <div
        className={[
          "transition-all duration-300 ease-in-out",
          isTranslatorOpen ? "max-h-[260px] opacity-100" : "max-h-0 opacity-0",
          "overflow-hidden",
          isTranslatorOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <MedicalTranslatorPanel onClose={() => setIsTranslatorOpen(false)} />
      </div>

      {/* 로그: 남은 공간 먹기 */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <ActivityLogPanel />
      </div>
    </div>
  </div>
</main>



      {/* 하단 고정: STT 입력 + 버튼 */}
      <footer className="shrink-0 border-t border-[var(--border)] bg-[var(--bg)] p-3">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <ChatInputBar />
          </div>
          <RightActions
            isTranslatorOpen={isTranslatorOpen}
            onToggleTranslator={() => setIsTranslatorOpen((v) => !v)}
            onOpenHospital={() => router.push("/emergency-center-search")}
            onOpenReport={() => router.push("/triage-report")}
          />
        </div>
      </footer>
    </div>
  );
}
