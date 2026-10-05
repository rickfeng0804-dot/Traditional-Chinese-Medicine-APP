import React, { useState } from 'react';
import { 
  FORMULA_ROLES_EXPLANATION, 
  CLASSIC_FORMULAS, 
  FORMULA_LAB_CHALLENGES 
} from '../../data/formularyData';
import { FormulaItem } from '../../types/tcm';
import { 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  BookOpen,
  RotateCcw,
  Award
} from 'lucide-react';

interface FormularyViewProps {
  onMarkLearned: () => void;
  isLearned: boolean;
  onOpenNoteForTopic: (topic: string) => void;
}

export const FormularyView: React.FC<FormularyViewProps> = ({
  onMarkLearned,
  isLearned,
  onOpenNoteForTopic
}) => {
  const [activeTab, setActiveTab] = useState<'formulas' | 'principles' | 'lab'>('formulas');
  const [selectedFormulaId, setSelectedFormulaId] = useState<string>(CLASSIC_FORMULAS[0].id);

  // Formulary Lab Interactive State
  const [selectedChallengeIdx, setSelectedChallengeIdx] = useState<number>(0);
  const currentChallenge = FORMULA_LAB_CHALLENGES[selectedChallengeIdx];
  const [assignedRoles, setAssignedRoles] = useState<{ [key: string]: '君' | '臣' | '佐' | '使' | '' }>({});
  const [labSubmitted, setLabSubmitted] = useState<boolean>(false);

  const selectedFormula = CLASSIC_FORMULAS.find(f => f.id === selectedFormulaId) || CLASSIC_FORMULAS[0];

  const handleAssignRole = (optionId: string, role: '君' | '臣' | '佐' | '使') => {
    setAssignedRoles(prev => ({
      ...prev,
      [optionId]: role
    }));
    setLabSubmitted(false);
  };

  const handleCheckLab = () => {
    setLabSubmitted(true);
  };

  const handleResetLab = () => {
    setAssignedRoles({});
    setLabSubmitted(false);
  };

  const getRoleBadgeColor = (role: '君' | '臣' | '佐' | '使') => {
    switch (role) {
      case '君': return 'bg-amber-900 text-amber-50 border-amber-950';
      case '臣': return 'bg-blue-800 text-blue-50 border-blue-900';
      case '佐': return 'bg-emerald-800 text-emerald-50 border-emerald-900';
      case '使': return 'bg-purple-800 text-purple-50 border-purple-900';
      default: return 'bg-stone-800 text-white';
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-medium mb-2">
            <span>第四門戶 · 兵陣神機</span>
            <span aria-hidden="true">·</span>
            <span>群藥配伍協同之最高智慧</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-tc font-bold tracking-tight text-white mb-3">
            方劑學
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5">
            用藥如用兵，立意如布陣。探究「君臣佐使」的配伍綱領，了解主藥、輔助藥、解毒佐制藥與引經使藥如何凝聚為精妙團隊，化裁萬千經典名方。
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onMarkLearned}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                isLearned
                  ? 'bg-emerald-800 text-emerald-100 hover:bg-emerald-700'
                  : 'bg-amber-600 text-white hover:bg-amber-500'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isLearned ? '已完成方劑學修煉' : '標記此篇為已研習'}</span>
            </button>
            <button
              onClick={() => onOpenNoteForTopic('方劑學研讀心得')}
              className="px-4 py-2 rounded-lg text-xs font-medium bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700 transition-colors"
            >
              隨手記筆記
            </button>
          </div>
        </div>

        <div className="absolute right-6 -bottom-6 font-serif-tc text-8xl text-stone-800/40 select-none pointer-events-none font-bold">
          方
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-stone-200/50 rounded-xl overflow-x-auto">
        <button
          onClick={() => setActiveTab('formulas')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'formulas'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Layers className="w-4 h-4 text-rose-700" />
          <span>千古名方深度拆解</span>
        </button>
        <button
          onClick={() => setActiveTab('principles')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'principles'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-700" />
          <span>君臣佐使配伍心法</span>
        </button>
        <button
          onClick={() => setActiveTab('lab')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'lab'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Sparkles className="w-4 h-4 text-purple-700" />
          <span>組方實驗室 (配伍實戰)</span>
        </button>
      </div>

      {/* TAB 1: 名方拆解 */}
      {activeTab === 'formulas' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left formula picker */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[11px] font-semibold text-stone-600 uppercase tracking-wider block px-1">
              經典名方名冊
            </span>
            {CLASSIC_FORMULAS.map(formula => {
              const isSelected = formula.id === selectedFormulaId;
              return (
                <button
                  key={formula.id}
                  onClick={() => setSelectedFormulaId(formula.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-white border-amber-800/40 shadow-xs ring-1 ring-amber-800/20'
                      : 'bg-white/80 border-stone-200/80 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <span className="text-xs text-amber-900 font-serif-tc font-semibold block mb-0.5">
                    {formula.category}
                  </span>
                  <h4 className="font-serif-tc font-bold text-stone-900 text-sm mb-1">
                    {formula.name}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-mono truncate">
                    {formula.source}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right formula detail */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-6">
            <div className="pb-4 border-b border-stone-200">
              <span className="text-xs text-amber-900 font-semibold block mb-0.5">
                {selectedFormula.category} · {selectedFormula.source}
              </span>
              <h3 className="text-2xl font-serif-tc font-bold text-stone-900 mb-2">
                {selectedFormula.name}
              </h3>
              <div className="flex flex-wrap gap-3 text-xs text-stone-700">
                <span className="bg-stone-100 px-2.5 py-1 rounded">
                  <strong className="text-stone-900">功用：</strong>{selectedFormula.actions}
                </span>
                <span className="bg-stone-100 px-2.5 py-1 rounded">
                  <strong className="text-stone-900">主治：</strong>{selectedFormula.indications}
                </span>
              </div>
            </div>

            {/* Jun-Chen-Zuo-Shi Composition Grid */}
            <div>
              <h4 className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-3">
                方劑結構 · 君臣佐使配伍剖析
              </h4>
              <div className="space-y-3">
                {selectedFormula.composition.map((comp, idx) => (
                  <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:items-start gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-serif-tc font-bold text-sm shrink-0 shadow-2xs ${getRoleBadgeColor(comp.role)}`}>
                      {comp.role}
                    </span>
                    <div className="flex-1 text-xs">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-serif-tc font-bold text-stone-900 text-sm">
                          {comp.herbs.join('、')}
                        </span>
                        <span className="text-[11px] text-stone-500 font-serif-tc">
                          ({comp.role === '君' ? '主病核心' : comp.role === '臣' ? '輔助增效' : comp.role === '佐' ? '佐制佐助' : '引經調和'})
                        </span>
                      </div>
                      <p className="text-stone-700 leading-relaxed">
                        {comp.purpose}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Synergy & Clinical Application */}
            <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/70 text-xs space-y-2">
              <span className="font-serif-tc font-bold text-amber-950 block text-sm">
                組方配伍精義
              </span>
              <p className="text-stone-800 leading-relaxed">
                {selectedFormula.synergyAnalysis}
              </p>
              <div className="pt-2 border-t border-amber-200/60 text-stone-700">
                <strong className="text-amber-950">舌脈徵象：</strong>{selectedFormula.tongueAndPulse}
              </div>
            </div>

            <div className="text-xs text-stone-600 p-3 bg-stone-50 rounded-lg border border-stone-200">
              <strong className="text-stone-900">現代臨床擴展：</strong>{selectedFormula.clinicalApplication}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 君臣佐使心法 */}
      {activeTab === 'principles' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-6">
            <div>
              <h3 className="text-xl font-serif-tc font-bold text-stone-900 mb-1">
                「君臣佐使」組方原則心法
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                《素問 · 至真要大論》云：「主病之謂君，佐君之謂臣，應臣之謂使。」中藥方劑絕非藥材的隨意堆疊，而是分工嚴密、相互牽制協同的生命矩陣。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FORMULA_ROLES_EXPLANATION.map((role, idx) => (
                <div key={idx} className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-serif-tc font-bold text-sm text-white ${
                      role.symbol === '君' ? 'bg-amber-900' :
                      role.symbol === '臣' ? 'bg-blue-800' :
                      role.symbol === '佐' ? 'bg-emerald-800' : 'bg-purple-800'
                    }`}>
                      {role.symbol}
                    </span>
                    <h4 className="font-serif-tc font-bold text-stone-900 text-sm">
                      {role.role}
                    </h4>
                  </div>

                  <p className="text-xs text-stone-800 font-medium">
                    {role.meaning}
                  </p>

                  {role.subtypes && (
                    <div className="space-y-1.5 p-3 bg-white rounded-lg border border-stone-200 text-xs">
                      {role.subtypes.map((st, i) => (
                        <div key={i} className="text-[11px] text-stone-700">
                          <strong className="text-stone-900">{st.name}：</strong>{st.desc}
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-[11px] text-stone-600">
                    特性：{role.characteristics}
                  </p>

                  <div className="text-[11px] text-amber-900 font-medium pt-2 border-t border-stone-200">
                    典範實例：{role.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 組方實驗室 */}
      {activeTab === 'lab' && (
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-2">
            <div>
              <h3 className="text-xl font-serif-tc font-bold text-stone-900">
                組方實驗室 · 君臣佐使配伍演練
              </h3>
              <p className="text-xs text-stone-500">
                審視病患證候，為候選藥物分配相應的「君、臣、佐、使」角色
              </p>
            </div>

            {/* Scenario toggle */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg self-start sm:self-auto">
              {FORMULA_LAB_CHALLENGES.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setSelectedChallengeIdx(idx);
                    handleResetLab();
                  }}
                  className={`px-3 py-1.5 text-xs font-serif-tc rounded-md transition-all ${
                    selectedChallengeIdx === idx
                      ? 'bg-white text-stone-900 shadow-xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  演練 {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Scenario Case Card */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2">
            <span className="font-serif-tc font-bold text-stone-900 text-sm block">
              {currentChallenge.scenarioTitle}
            </span>
            <p className="text-stone-700 leading-relaxed">
              {currentChallenge.patientSummary}
            </p>
            <div className="text-amber-900 font-medium">
              目標：{currentChallenge.goal}
            </div>
          </div>

          {/* Interactive Assignment Workbench */}
          <div className="space-y-4">
            <span className="text-xs font-semibold text-stone-600 uppercase tracking-wider block">
              待指派藥物隊伍
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentChallenge.options.map(opt => {
                const assigned = assignedRoles[opt.id] || '';
                const isCorrect = assigned === opt.correctRole;

                return (
                  <div key={opt.id} className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-serif-tc font-bold text-stone-900 text-base">
                        {opt.name}
                      </span>
                      {labSubmitted && (
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                          isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {isCorrect ? '配伍正確' : `應為「${opt.correctRole}」`}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-stone-500">
                      藥性指引：{opt.tip}
                    </p>

                    {/* Role Buttons */}
                    <div className="flex items-center gap-1.5 pt-1">
                      {(['君', '臣', '佐', '使'] as const).map(role => (
                        <button
                          key={role}
                          onClick={() => handleAssignRole(opt.id, role)}
                          className={`flex-1 py-1.5 text-xs font-serif-tc font-bold rounded-lg border transition-all ${
                            assigned === role
                              ? `${getRoleBadgeColor(role)} ring-1 ring-stone-900/10`
                              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200">
            <button
              onClick={handleResetLab}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>重新分配</span>
            </button>

            <button
              onClick={handleCheckLab}
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-medium bg-amber-800 text-white hover:bg-amber-700 shadow-2xs transition-colors"
            >
              <Award className="w-4 h-4" />
              <span>驗證配伍成果</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
