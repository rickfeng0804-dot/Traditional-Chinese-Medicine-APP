import React, { useState } from 'react';
import { 
  FIVE_ELEMENTS, 
  ZANG_ORGANS, 
  VITAL_SUBSTANCES 
} from '../../data/basicTheoryData';
import { FiveElement } from '../../types/tcm';
import { 
  Flame, 
  Wind, 
  Droplets, 
  Layers, 
  Activity, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface BasicTheoryViewProps {
  onMarkLearned: () => void;
  isLearned: boolean;
  onOpenNoteForTopic: (topic: string) => void;
}

export const BasicTheoryView: React.FC<BasicTheoryViewProps> = ({
  onMarkLearned,
  isLearned,
  onOpenNoteForTopic
}) => {
  const [activeTab, setActiveTab] = useState<'wuxing' | 'zangfu' | 'qixue'>('wuxing');
  const [selectedElement, setSelectedElement] = useState<FiveElement>('wood');
  const [selectedOrganId, setSelectedOrganId] = useState<string>('heart');
  const [yinYangBalance, setYinYangBalance] = useState<number>(50); // 0 = 陰盛/陽衰, 50 = 平衡, 100 = 陽盛/陰衰
  const [vitalSubstanceId, setVitalSubstanceId] = useState<string>('qi');

  const currentElement = FIVE_ELEMENTS.find(e => e.id === selectedElement) || FIVE_ELEMENTS[0];
  const generatingElement = FIVE_ELEMENTS.find(e => e.id === currentElement.generates);
  const controllingElement = FIVE_ELEMENTS.find(e => e.id === currentElement.controls);

  const currentOrgan = ZANG_ORGANS.find(o => o.id === selectedOrganId) || ZANG_ORGANS[0];
  const currentSubstance = VITAL_SUBSTANCES.find(s => s.id === vitalSubstanceId) || VITAL_SUBSTANCES[0];

  const getYinYangState = (val: number) => {
    if (val < 25) {
      return {
        title: '陰盛格陽 / 陰寒偏盛',
        state: '寒象顯著',
        desc: '陰邪偏盛，體內寒盛。表現為畏寒肢冷、腹痛泄瀉、小便清長、面色蒼白、脈沉遲。治則「寒者熱之」，宜溫陽散寒。'
      };
    } else if (val < 45) {
      return {
        title: '陽虛 / 虛寒證',
        state: '陽氣不足',
        desc: '陽氣虛衰無力溫煦。表現為神疲乏力、自汗畏冷、四肢欠溫、腰膝冷痛、脈沉無力。治則「益火之源，以消陰翳」，宜溫補陽氣。'
      };
    } else if (val <= 55) {
      return {
        title: '陰平陽秘 · 精神乃治',
        state: '陰陽和調',
        desc: '陰陽相互協調平衡，氣血充盛，臟腑機能正常。此乃《黃帝內經》所追求之健康最高境界。'
      };
    } else if (val <= 75) {
      return {
        title: '陰虛 / 虛熱證',
        state: '陰液虧虛',
        desc: '陰液不足，無法制約陽氣。表現為五心煩熱、午後潮熱、盜汗、咽乾口燥、舌紅少苔、脈細數。治則「壯水之主，以制陽光」，宜滋陰降火。'
      };
    } else {
      return {
        title: '陽盛 / 實熱證',
        state: '火熱亢盛',
        desc: '陽熱之邪亢盛。表現為壯熱口渴、面紅目赤、煩躁便秘、舌紅苔黃厚燥、脈洪大或滑數。治則「熱者寒之」，宜清熱瀉火。'
      };
    }
  };

  const yinYangInfo = getYinYangState(yinYangBalance);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-medium mb-2">
            <span>第一門戶 · 醫道總綱</span>
            <span aria-hidden="true">·</span>
            <span>中醫世界觀之基石</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-tc font-bold tracking-tight text-white mb-3">
            中醫基礎理論
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5">
            探究天人相應之宏觀哲理。從「陰陽五行」的動態消長，到人體「五臟六腑」的運作邏輯，乃至維持生命的「氣、血、津液」微觀物質，構築中醫認識人體與疾病的完整體系。
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
              <span>{isLearned ? '已完成基礎理論修煉' : '標記此篇為已研習'}</span>
            </button>
            <button
              onClick={() => onOpenNoteForTopic('中醫基礎理論研讀心得')}
              className="px-4 py-2 rounded-lg text-xs font-medium bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700 transition-colors"
            >
              隨手記筆記
            </button>
          </div>
        </div>

        {/* Decorative background calligraphy stamp */}
        <div className="absolute right-6 -bottom-6 font-serif-tc text-8xl text-stone-800/40 select-none pointer-events-none font-bold">
          理
        </div>
      </div>

      {/* Sub-module Navigation Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-stone-200/50 rounded-xl overflow-x-auto">
        <button
          onClick={() => setActiveTab('wuxing')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'wuxing'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-700" />
          <span>陰陽五行學說</span>
        </button>
        <button
          onClick={() => setActiveTab('zangfu')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'zangfu'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Activity className="w-4 h-4 text-rose-700" />
          <span>五臟六腑藏象</span>
        </button>
        <button
          onClick={() => setActiveTab('qixue')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'qixue'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Droplets className="w-4 h-4 text-teal-700" />
          <span>氣血津液理論</span>
        </button>
      </div>

      {/* TAB 1: 陰陽五行學說 */}
      {activeTab === 'wuxing' && (
        <div className="space-y-8">
          {/* Section A: 五行生剋矩陣與互動 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-stone-200/80 gap-3">
              <div>
                <h3 className="text-lg font-serif-tc font-bold text-stone-900">
                  五行生剋互動矩陣
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  點擊五行元素，探究五臟、五季、五味、五官之對應及相生相剋關係
                </p>
              </div>

              {/* Element Selector Buttons */}
              <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg">
                {FIVE_ELEMENTS.map(el => (
                  <button
                    key={el.id}
                    onClick={() => setSelectedElement(el.id)}
                    className={`px-3 py-1.5 text-xs font-serif-tc font-semibold rounded-md transition-all ${
                      selectedElement === el.id
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {el.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Two-zone interactive element details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
              {/* Left Column: Visual Five Elements Wheel & Relations */}
              <div className="lg:col-span-5 bg-stone-50 rounded-xl p-5 border border-stone-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                      五行生剋視圖
                    </span>
                    <span className="text-xs font-serif-tc px-2 py-0.5 rounded bg-stone-200 text-stone-700">
                      {currentElement.chinese}
                    </span>
                  </div>

                  {/* Five element visual ring */}
                  <div className="relative w-48 h-48 mx-auto my-3 flex items-center justify-center">
                    {/* Center title */}
                    <div className="w-16 h-16 rounded-full bg-white border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs">
                      <span className="text-[10px] text-stone-400">目前焦點</span>
                      <span className="text-xl font-serif-tc font-bold text-stone-900">
                        {currentElement.name}
                      </span>
                    </div>

                    {/* Circular positioned buttons */}
                    {FIVE_ELEMENTS.map((el, i) => {
                      const angle = (i * 72 - 90) * (Math.PI / 180);
                      const radius = 76;
                      const x = Math.round(Math.cos(angle) * radius);
                      const y = Math.round(Math.sin(angle) * radius);
                      const isCurrent = el.id === selectedElement;

                      return (
                        <button
                          key={el.id}
                          onClick={() => setSelectedElement(el.id)}
                          style={{
                            transform: `translate(${x}px, ${y}px)`
                          }}
                          className={`absolute w-10 h-10 rounded-full font-serif-tc font-bold text-xs flex items-center justify-center transition-transform hover:scale-110 shadow-xs ${
                            isCurrent
                              ? 'bg-stone-900 text-white ring-2 ring-amber-500 scale-110'
                              : 'bg-white text-stone-700 border border-stone-300 hover:border-stone-500'
                          }`}
                        >
                          {el.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Generation & Control arrows explanation */}
                <div className="space-y-2 mt-4 pt-3 border-t border-stone-200 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-white border border-stone-200">
                    <span className="text-stone-500 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      相生關係 (生我/我生)
                    </span>
                    <span className="font-semibold text-stone-800">
                      {currentElement.name} 生 {generatingElement?.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white border border-stone-200">
                    <span className="text-stone-500 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-600" />
                      相剋關係 (剋我/我剋)
                    </span>
                    <span className="font-semibold text-stone-800">
                      {currentElement.name} 剋 {controllingElement?.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Complete Matrix Breakdown */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-stone-50/70 p-4 rounded-xl border border-stone-200">
                  <span className="text-xs font-semibold text-amber-900 block mb-1">
                    特性與本質
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {currentElement.characteristics}
                  </p>
                </div>

                {/* Attribute Matrix Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="text-stone-600 text-[11px] block">對應臟腑</span>
                    <span className="font-serif-tc font-bold text-stone-900 text-sm">
                      {currentElement.organZang} (臟) · {currentElement.organFu} (腑)
                    </span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="text-stone-600 text-[11px] block">自然季節</span>
                    <span className="font-serif-tc font-bold text-stone-900 text-sm">
                      {currentElement.season}
                    </span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="text-stone-600 text-[11px] block">五味五色</span>
                    <span className="font-serif-tc font-bold text-stone-900 text-sm">
                      {currentElement.flavor}味 · {currentElement.colorWord}
                    </span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="text-stone-600 text-[11px] block">五志與官竅</span>
                    <span className="font-serif-tc font-bold text-stone-900 text-sm">
                      志在{currentElement.emotion} · 竅於{currentElement.senseOrgan}
                    </span>
                  </div>
                </div>

                {/* Clinical Significance */}
                <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/80">
                  <span className="text-xs font-semibold text-amber-950 block mb-1">
                    臨床病理推演與啟示
                  </span>
                  <p className="text-xs text-stone-800 leading-relaxed">
                    {currentElement.clinicalSignificance}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section B: 陰陽平衡調節器 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-serif-tc font-bold text-stone-900">
                  陰陽動態平衡調節器
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  拖動滑桿，模擬人體陰陽盛衰的動態變化，觀察病理表徵與治則
                </p>
              </div>
              <span className="text-xs font-serif-tc text-stone-600 px-3 py-1 rounded-full bg-stone-100 border border-stone-200">
                當前狀態：{yinYangInfo.state}
              </span>
            </div>

            {/* Slider */}
            <div className="py-4">
              <div className="flex justify-between text-xs text-stone-500 mb-2">
                <span className="text-blue-700 font-medium">◀ 陰盛 / 寒極</span>
                <span className="font-medium text-stone-800 font-serif-tc">陰陽平秘 (平衡)</span>
                <span className="text-rose-700 font-medium">陽盛 / 熱極 ▶</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={yinYangBalance}
                onChange={(e) => setYinYangBalance(Number(e.target.value))}
                className="w-full h-2.5 bg-gradient-to-r from-blue-300 via-stone-200 to-rose-300 rounded-lg appearance-none cursor-pointer accent-stone-900"
              />
            </div>

            {/* Dynamic result panel */}
            <div className="mt-2 p-5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif-tc font-bold text-stone-900 text-sm">
                  {yinYangInfo.title}
                </span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {yinYangInfo.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 五臟六腑藏象學說 */}
      {activeTab === 'zangfu' && (
        <div className="space-y-6">
          {/* Organ selector buttons */}
          <div className="flex items-center gap-2 p-1.5 bg-stone-100 rounded-xl overflow-x-auto">
            {ZANG_ORGANS.map(organ => (
              <button
                key={organ.id}
                onClick={() => setSelectedOrganId(organ.id)}
                className={`px-4 py-2 text-xs font-serif-tc font-semibold rounded-lg whitespace-nowrap transition-all ${
                  selectedOrganId === organ.id
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {organ.name}
              </button>
            ))}
          </div>

          {/* Organ Detail Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-2">
              <div>
                <span className="text-xs font-serif-tc text-amber-800 font-semibold block mb-0.5">
                  官職定名 · {currentOrgan.officialRole}
                </span>
                <h3 className="text-xl font-serif-tc font-bold text-stone-900">
                  {currentOrgan.name} 生理與病理全解
                </h3>
              </div>
              <div className="text-xs text-stone-500 font-mono bg-stone-100 px-3 py-1 rounded-md self-start sm:self-auto">
                表裡配偶：{currentOrgan.pairedOrgan}
              </div>
            </div>

            {/* Core Functions */}
            <div>
              <h4 className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-3">
                主要生理功能 (藏象核心)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentOrgan.mainFunctions.map((func, i) => (
                  <div key={i} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-800 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-800 mt-1.5 shrink-0" />
                    <span>{func}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Physiological & Manifestations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-stone-50/80 rounded-xl border border-stone-200">
                <span className="text-xs font-semibold text-stone-900 block mb-1">
                  生理特性
                </span>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {currentOrgan.physiologicalCharacteristics}
                </p>
              </div>

              <div className="p-4 bg-stone-50/80 rounded-xl border border-stone-200">
                <span className="text-xs font-semibold text-stone-900 block mb-1">
                  體表外在榮華與開竅
                </span>
                <p className="text-xs text-stone-700 leading-relaxed font-serif-tc font-medium">
                  {currentOrgan.manifestation}
                </p>
              </div>
            </div>

            {/* Pathology Alert */}
            <div className="p-4 bg-rose-50/60 rounded-xl border border-rose-200/80">
              <span className="text-xs font-semibold text-rose-950 block mb-1.5">
                失調常見病理證候
              </span>
              <div className="flex flex-wrap gap-2">
                {currentOrgan.pathologySymptoms.map((symptom, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white text-rose-900 border border-rose-200 px-2.5 py-1 rounded-md"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 氣血津液理論 */}
      {activeTab === 'qixue' && (
        <div className="space-y-6">
          {/* Substance selector */}
          <div className="flex items-center gap-2 p-1.5 bg-stone-100 rounded-xl">
            {VITAL_SUBSTANCES.map(sub => (
              <button
                key={sub.id}
                onClick={() => setVitalSubstanceId(sub.id)}
                className={`flex-1 py-2 text-xs font-serif-tc font-semibold rounded-lg transition-all ${
                  vitalSubstanceId === sub.id
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>

          {/* Substance Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-6">
            <div>
              <h3 className="text-xl font-serif-tc font-bold text-stone-900 mb-1">
                {currentSubstance.name}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentSubstance.definition}
              </p>
            </div>

            {/* Classifications (if available, e.g. 元氣/宗氣/營氣/衛氣) */}
            {currentSubstance.classification && (
              <div>
                <h4 className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-3">
                  類別與生成走向
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSubstance.classification.map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                      <span className="font-serif-tc font-bold text-stone-900 text-xs block mb-1">
                        {item.name}
                      </span>
                      <p className="text-[11px] text-stone-500 mb-1">
                        來源：{item.source}
                      </p>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        功能：{item.function}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Functions */}
            <div>
              <h4 className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-2">
                核心生理作用
              </h4>
              <div className="space-y-2">
                {currentSubstance.functions.map((func, i) => (
                  <div key={i} className="text-xs text-stone-800 p-2.5 bg-stone-50 rounded-lg border border-stone-200">
                    {func}
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Clinical Patterns & Principles */}
            <div>
              <h4 className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-3">
                臨床常見失常證候與對治原則
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {currentSubstance.clinicalPatterns.map((pat, idx) => (
                  <div key={idx} className="p-3.5 bg-amber-50/40 rounded-xl border border-amber-200 text-xs">
                    <span className="font-serif-tc font-bold text-amber-950 block mb-1 text-sm">
                      {pat.name}
                    </span>
                    <p className="text-stone-700 mb-2 leading-relaxed">
                      表現：{pat.symptoms}
                    </p>
                    <p className="text-amber-900 font-medium pt-2 border-t border-amber-200/60">
                      治則：{pat.principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
