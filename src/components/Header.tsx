import React from 'react';
import { BookOpen, Award, Bookmark, Sparkles, CheckCircle2 } from 'lucide-react';
import { DisciplineId } from '../types/tcm';
import { DISCIPLINES } from '../data/disciplinesMeta';

interface HeaderProps {
  activeDiscipline: DisciplineId;
  activeMode: 'study' | 'quiz' | 'practice';
  setActiveMode: (mode: 'study' | 'quiz' | 'practice') => void;
  openNotes: () => void;
  savedNotesCount: number;
  completedDisciplines: DisciplineId[];
  onSelectDiscipline: (id: DisciplineId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeDiscipline,
  activeMode,
  setActiveMode,
  openNotes,
  savedNotesCount,
  completedDisciplines,
  onSelectDiscipline
}) => {
  const totalDisciplines = DISCIPLINES.length;
  const completedCount = completedDisciplines.length;
  const percentage = Math.round((completedCount / totalDisciplines) * 100);

  const getMotivationalMessage = (count: number) => {
    switch (count) {
      case 0:
        return '初入杏林 · 請點選學科開始修煉！';
      case 1:
        return '初悟門徑！已攻克第 1 門學科，持之以恆！';
      case 2:
        return '漸入佳境！已完成 2 門學科，理法融會貫通！';
      case 3:
        return '功力深厚！已掌握 3 門核心學科，向大醫精誠邁進！';
      case 4:
        return '通達精湛！即將圓滿五大門戶，僅差最後一躍！';
      case 5:
        return '🎉 大成圓滿！恭喜全面貫通中醫五大核心學科！';
      default:
        return '博極醫源，精勤不倦！';
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/90 transition-all shadow-2xs">
      {/* Top Nav Row */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-stone-800 text-amber-50 flex items-center justify-center font-serif-tc font-bold text-base shadow-sm shrink-0">
            醫
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-serif-tc font-bold tracking-wide text-stone-900 leading-tight">
              台北市立成功高中 馮柏翔作品
            </span>
            <span className="text-[10px] text-stone-500 font-serif-tc hidden sm:block">
              中醫五大核心學科修煉體系
            </span>
          </div>
        </div>

        {/* Zone 2: Clean segmented mode tabs */}
        <div className="hidden md:flex items-center p-1 bg-stone-200/60 rounded-lg">
          <button
            onClick={() => setActiveMode('study')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeMode === 'study'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>理法研讀</span>
          </button>
          <button
            onClick={() => setActiveMode('practice')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeMode === 'practice'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>互動實踐</span>
          </button>
          <button
            onClick={() => setActiveMode('quiz')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeMode === 'quiz'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>功力測驗</span>
          </button>
        </div>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={openNotes}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-stone-900 transition-colors shadow-2xs"
            title="查看研習筆記與心得"
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-700" />
            <span>研習筆記</span>
            {savedNotesCount > 0 && (
              <span className="text-[10px] bg-amber-100 text-amber-800 font-mono px-1.5 py-0.2 rounded-full">
                {savedNotesCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Dynamic Learning Progress Bar Area (應用程式上方學習進度條) */}
      <div className="border-t border-stone-200/80 bg-gradient-to-r from-amber-50/60 via-stone-50 to-stone-100/80 px-4 sm:px-6 py-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
          {/* Progress stats & encouragement */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-xs font-semibold text-stone-700">學習進度</span>
              <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200 tabular-nums">
                {percentage}%
              </span>
            </div>

            <span className="hidden sm:inline text-stone-300 text-xs" aria-hidden="true">|</span>

            {/* Motivational message */}
            <span className="text-xs text-stone-600 font-serif-tc truncate">
              {getMotivationalMessage(completedCount)}
            </span>
          </div>

          {/* 5 Discipline Milestone Steps */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-0.5 sm:pb-0">
            {DISCIPLINES.map((d, index) => {
              const isCompleted = completedDisciplines.includes(d.id);
              const isActive = activeDiscipline === d.id;

              return (
                <button
                  key={d.id}
                  onClick={() => onSelectDiscipline(d.id)}
                  title={`點擊切換至：${d.name} (${isCompleted ? '已完成' : '研習中'})`}
                  className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-serif-tc whitespace-nowrap transition-all ${
                    isCompleted
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 font-medium'
                      : isActive
                      ? 'bg-amber-100 text-amber-950 border border-amber-300 font-bold shadow-2xs'
                      : 'bg-white/90 text-stone-500 border border-stone-200 hover:text-stone-800 hover:bg-white'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
                  )}
                  <span className="truncate">
                    {index + 1}. {d.name.replace('中醫', '')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Continuous Progress Bar Line */}
        <div className="w-full h-1.5 bg-stone-200/90 rounded-full mt-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 rounded-full transition-all duration-500 ease-out shadow-xs"
            style={{ width: `${Math.max(percentage, 2)}%` }}
          />
        </div>
      </div>
    </header>
  );
};
