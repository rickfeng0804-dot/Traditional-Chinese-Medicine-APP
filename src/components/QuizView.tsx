import React, { useState } from 'react';
import { TCM_QUIZZES } from '../data/quizData';
import { DisciplineId } from '../types/tcm';
import { DISCIPLINES } from '../data/disciplinesMeta';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';

interface QuizViewProps {
  initialDiscipline?: DisciplineId;
}

export const QuizView: React.FC<QuizViewProps> = ({ initialDiscipline }) => {
  const [filterDiscipline, setFilterDiscipline] = useState<string>(initialDiscipline || 'all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const filteredQuestions = TCM_QUIZZES.filter(q => 
    filterDiscipline === 'all' || q.discipline === filterDiscipline
  );

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQ.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
  };

  const getDisciplineName = (id: DisciplineId) => {
    return DISCIPLINES.find(d => d.id === id)?.name || id;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Quiz Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
          <div>
            <h3 className="text-xl font-serif-tc font-bold text-stone-900">
              中醫通考 · 五門基本功自測
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              檢驗中醫五大核心學科之理論掌握度與臨床思維
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-600 font-medium">答對：</span>
            <span className="text-sm font-mono font-bold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              {score} / {filteredQuestions.length} 題
            </span>
          </div>
        </div>

        {/* Discipline filter chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            onClick={() => {
              setFilterDiscipline('all');
              handleReset();
            }}
            className={`px-3 py-1.5 text-xs font-serif-tc rounded-lg whitespace-nowrap transition-all ${
              filterDiscipline === 'all'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            全學科綜合
          </button>
          {DISCIPLINES.map(d => (
            <button
              key={d.id}
              onClick={() => {
                setFilterDiscipline(d.id);
                handleReset();
              }}
              className={`px-3 py-1.5 text-xs font-serif-tc rounded-lg whitespace-nowrap transition-all ${
                filterDiscipline === d.id
                  ? 'bg-amber-800 text-white font-semibold'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>
      </div>

      {/* Question Card */}
      {currentQ ? (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
          <div className="flex items-center justify-between text-xs text-stone-500 pb-3 border-b border-stone-200">
            <span className="font-serif-tc text-amber-900 font-semibold">
              【{getDisciplineName(currentQ.discipline)}】
            </span>
            <span className="font-mono">
              第 {currentIndex + 1} / {filteredQuestions.length} 題
            </span>
          </div>

          {/* Question text */}
          <h4 className="text-base sm:text-lg font-serif-tc font-bold text-stone-900 leading-relaxed">
            {currentQ.question}
          </h4>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = 'bg-stone-50/80 border-stone-200 text-stone-800 hover:bg-stone-100 hover:border-stone-300';

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-50 border-rose-300 text-rose-950';
                } else {
                  btnStyle = 'bg-stone-50/40 border-stone-200 text-stone-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white border border-stone-300 flex items-center justify-center font-mono font-semibold text-xs text-stone-700 shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer Explanation */}
          {isAnswered && (
            <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/80 text-xs space-y-1.5 animate-fadeIn">
              <span className="font-serif-tc font-bold text-amber-950 block text-sm">
                經典考點深入解析
              </span>
              <p className="text-stone-800 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>重新開始</span>
            </button>

            {isAnswered && currentIndex < filteredQuestions.length - 1 && (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-medium bg-stone-900 text-white hover:bg-stone-800 shadow-2xs transition-colors"
              >
                <span>下一題</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {isAnswered && currentIndex === filteredQuestions.length - 1 && (
              <div className="text-xs text-amber-900 font-bold font-serif-tc">
                已完成本組測驗！得分率：{Math.round((score / filteredQuestions.length) * 100)}%
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-xs text-stone-500 bg-white rounded-xl border border-stone-200">
          目前分類無考題。
        </div>
      )}
    </div>
  );
};
