"use client";
/* 우하단 행동버튼 */
import "@/styles/components.css";

type Props = {
  isTranslatorOpen: boolean;
  onToggleTranslator: () => void;
  onOpenHospital: () => void;
  onOpenReport: () => void;
};

export function RightActions({ isTranslatorOpen, onToggleTranslator, onOpenHospital, onOpenReport }: Props) {
  return (
    <div className="flex items-center gap-2">
      <button         className="btn-rounded-navy">
        MIC
      </button>

      <button
        onClick={onToggleTranslator}
        className="btn-rounded-navy"
      >
        번역기
      </button>

      <button    
      onClick={onOpenHospital}
      className="btn-rounded-navy">
        응급실 찾기
      </button>

      <button
      onClick={onOpenReport}
      className="btn-rounded-navy">
        구급일지
      </button>
    </div>
  );
}
