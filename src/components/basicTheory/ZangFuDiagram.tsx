import React, { useState } from 'react';
import { 
  BIAO_LI_PAIRS, 
  ZANG_INTERRELATIONS, 
  FU_TRANSMISSION_STEPS 
} from '../../data/zangfuDiagramData';
import { 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  Layers, 
  Activity, 
  ShieldAlert, 
  BookOpen, 
  CheckCircle2,
  ChevronRight,
  Workflow
} from 'lucide-react';

interface ZangFuDiagramProps {
  onOpenNoteForTopic?: (topic: string) => void;
}

export const ZangFuDiagram: React.FC<ZangFuDiagramProps> = ({ onOpenNoteForTopic }) => {
  const [diagramMode, setDiagramMode] = useState<'biao-li' | 'inter-zang' | 'fu-transmission'>('biao-li');
  
  // State for Mode 1: 表裡相合
  const [selectedPairId, setSelectedPairId] = useState<string>(BIAO_LI_PAIRS[0].id);
  const [pathologyDirection, setPathologyDirection] = useState<'zangToFu' | 'fuToZang'>('zangToFu');

  // State for Mode 2: 五臟生克互濟
  const [selectedInterrelationId, setSelectedInterrelationId] = useState<string>(ZANG_INTERRELATIONS[0].id);
  const [activeZangFilter, setActiveZangFilter] = useState<string>('all');

  // State for Mode 3: 六腑傳化
  const [activeStepId, setActiveStepId] = useState<string>(FU_TRANSMISSION_STEPS[0].id);

  const selectedPair = BIAO_LI_PAIRS.find(p => p.id === selectedPairId) || BIAO_LI_PAIRS[0];
  const selectedInterrelation = ZANG_INTERRELATIONS.find(i => i.id === selectedInterrelationId) || ZANG_INTERRELATIONS[0];
  const currentStep = FU_TRANSMISSION_STEPS.find(s => s.id === activeStepId) || FU_TRANSMISSION_STEPS[0];

  // Element color map
  const getElementBadgeColor = (element: string) => {
    switch (element) {
      case 'wood': return 'bg-emerald-50 text-emerald-900 border-emerald-200';
      case 'fire': return 'bg-rose-50 text-rose-900 border-rose-200';
      case 'earth': return 'bg-amber-50 text-amber-900 border-amber-200';
      case 'metal': return 'bg-slate-100 text-slate-800 border-slate-300';
      case 'water': return 'bg-blue-50 text-blue-900 border-blue-200';
      default: return 'bg-purple-50 text-purple-900 border-purple-200';
    }
  };

  const currentPathology = pathologyDirection === 'zangToFu' 
    ? selectedPair.pathologyTransmission.zangToFu 
    : selectedPair.pathologyTransmission.fuToZang;

  const filteredInterrelations = activeZangFilter === 'all'
    ? ZANG_INTERRELATIONS
    : ZANG_INTERRELATIONS.filter(item => item.organs.includes(activeZangFilter));

  return (
    <div className="space-y-6">
      {/* Introduction Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1 text-xs text-amber-900 font-semibold">
              <Workflow className="w-4 h-4" />
              <span>藏象學說核心維度 · 五臟六腑生命網絡</span>
            </div>
            <h3 className="text-xl font-serif-tc font-bold text-stone-900">
              五臟六腑關聯全景互動圖解
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              《素問》：「五臟受氣於其所生，傳之於其所勝，氣舍於其所生，死於其所不勝。」臟與腑、臟與臟彼此相通互濟。
            </p>
          </div>

          {/* Sub-modes Toggle */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg self-start sm:self-auto overflow-x-auto">
            <button
              onClick={() => setDiagramMode('biao-li')}
              className={`px-3 py-1.5 text-xs font-serif-tc rounded-md whitespace-nowrap transition-all ${
                diagramMode === 'biao-li'
                  ? 'bg-white text-stone-900 font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              一、臟腑表裡相合
            </button>
            <button
              onClick={() => setDiagramMode('inter-zang')}
              className={`px-3 py-1.5 text-xs font-serif-tc rounded-md whitespace-nowrap transition-all ${
                diagramMode === 'inter-zang'
                  ? 'bg-white text-stone-900 font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              二、五臟互濟網絡
            </button>
            <button
              onClick={() => setDiagramMode('fu-transmission')}
              className={`px-3 py-1.5 text-xs font-serif-tc rounded-md whitespace-nowrap transition-all ${
                diagramMode === 'fu-transmission'
                  ? 'bg-white text-stone-900 font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              三、六腑傳化路徑
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SUB-MODE 1: 臟腑表裡相合圖解 */}
        {/* ============================================================== */}
        {diagramMode === 'biao-li' && (
          <div className="mt-5 space-y-6">
            {/* Pairs Horizontal Switcher */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {BIAO_LI_PAIRS.map(pair => {
                const isSelected = pair.id === selectedPairId;
                return (
                  <button
                    key={pair.id}
                    onClick={() => setSelectedPairId(pair.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      isSelected
                        ? 'bg-amber-50/80 border-amber-800 text-amber-950 font-bold shadow-xs ring-1 ring-amber-800/20'
                        : 'bg-stone-50 border-stone-200/80 hover:bg-stone-100 text-stone-700'
                    }`}
                  >
                    <span className="text-[10px] font-mono block text-stone-500 mb-0.5">
                      {pair.elementName}行配屬
                    </span>
                    <span className="text-xs font-serif-tc block">
                      {pair.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Visual Dual-Node Graphic & Synergy */}
            <div className="p-5 sm:p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border font-serif-tc font-semibold ${getElementBadgeColor(selectedPair.element)}`}>
                    {selectedPair.elementName}行 · 表裡同氣
                  </span>
                  <h4 className="text-lg font-serif-tc font-bold text-stone-900">
                    {selectedPair.name} 深度剖析
                  </h4>
                </div>

                <div className="text-xs text-stone-500 font-serif-tc bg-white px-3 py-1 rounded-md border border-stone-200">
                  一臟（主陰·藏精）配一腑（主陽·傳化）
                </div>
              </div>

              {/* Dual Nodes Interactive Cards */}
              <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
                {/* Zang Card (Left) */}
                <div className="md:col-span-5 bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-900 font-bold">五臟之位 · 陰</span>
                    <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">藏而不瀉</span>
                  </div>
                  <h5 className="text-base font-serif-tc font-bold text-stone-900">
                    {selectedPair.zang.name}
                  </h5>
                  <p className="text-xs text-amber-950 font-serif-tc font-medium">
                    官職：{selectedPair.zang.role}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    特性：{selectedPair.zang.nature}
                  </p>
                </div>

                {/* Center Channel Connection Hub */}
                <div className="md:col-span-1 flex flex-col items-center justify-center text-center py-2">
                  <div className="w-8 h-8 rounded-full bg-stone-800 text-amber-50 flex items-center justify-center shadow-xs">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-serif-tc text-stone-500 mt-1 whitespace-nowrap">
                    經絡絡屬
                  </span>
                </div>

                {/* Fu Card (Right) */}
                <div className="md:col-span-5 bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-blue-900 font-bold">六腑之位 · 陽</span>
                    <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">瀉而不藏</span>
                  </div>
                  <h5 className="text-base font-serif-tc font-bold text-stone-900">
                    {selectedPair.fu.name}
                  </h5>
                  <p className="text-xs text-blue-950 font-serif-tc font-medium">
                    官職：{selectedPair.fu.role}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    特性：{selectedPair.fu.nature}
                  </p>
                </div>
              </div>

              {/* Meridian & Physiological Synergy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1">
                  <span className="font-serif-tc font-bold text-stone-900 block">
                    【經脈循行絡屬通道】
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {selectedPair.meridianLink}
                  </p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200 space-y-1">
                  <span className="font-serif-tc font-bold text-stone-900 block">
                    【生理協同運作機制】
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {selectedPair.physiologicalSynergy}
                  </p>
                </div>
              </div>

              {/* Bilateral Pathology Interactive Transmission Simulator */}
              <div className="p-4 sm:p-5 bg-amber-50/60 rounded-xl border border-amber-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-800" />
                    <span className="font-serif-tc font-bold text-stone-900 text-sm">
                      病理相互傳變模擬
                    </span>
                  </div>

                  {/* Direction Switcher */}
                  <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-amber-200 self-start sm:self-auto">
                    <button
                      onClick={() => setPathologyDirection('zangToFu')}
                      className={`px-2.5 py-1 text-xs rounded font-medium transition-all ${
                        pathologyDirection === 'zangToFu'
                          ? 'bg-amber-800 text-white'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      臟病及腑 (內及外)
                    </button>
                    <button
                      onClick={() => setPathologyDirection('fuToZang')}
                      className={`px-2.5 py-1 text-xs rounded font-medium transition-all ${
                        pathologyDirection === 'fuToZang'
                          ? 'bg-amber-800 text-white'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      腑病及臟 (外及內)
                    </button>
                  </div>
                </div>

                <div className="p-3.5 bg-white rounded-lg border border-amber-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-tc font-bold text-amber-950 text-sm">
                      {currentPathology.title}
                    </span>
                    <span className="text-[11px] text-amber-900 font-medium">
                      代表名方：{currentPathology.classicFormula}
                    </span>
                  </div>

                  <p className="text-stone-700 leading-relaxed">
                    <strong className="text-stone-900">傳變病機：</strong>
                    {currentPathology.mechanism}
                  </p>

                  <div>
                    <strong className="text-stone-900 block mb-1">典型四診表現：</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {currentPathology.symptoms.map((s, i) => (
                        <span key={i} className="bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded text-[11px]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-amber-900 font-serif-tc pt-1 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                  <span><strong>臨床啟發：</strong>{selectedPair.clinicalKey}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* SUB-MODE 2: 五臟生克互濟網絡圖解 */}
        {/* ============================================================== */}
        {diagramMode === 'inter-zang' && (
          <div className="mt-5 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-200">
              <div>
                <h4 className="text-sm font-serif-tc font-bold text-stone-900">
                  五臟互濟與生剋制化關係網絡
                </h4>
                <p className="text-xs text-stone-500">
                  心、肝、脾、肺、腎五臟在精氣血、神志與升降出入中構成了多維生命網絡
                </p>
              </div>

              {/* Filter by primary Zang */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                <span className="text-[11px] text-stone-500 whitespace-nowrap">聚焦單臟：</span>
                {['all', '心', '肝', '脾', '肺', '腎'].map(z => (
                  <button
                    key={z}
                    onClick={() => setActiveZangFilter(z)}
                    className={`px-2.5 py-1 text-xs rounded-md font-serif-tc transition-all ${
                      activeZangFilter === z
                        ? 'bg-stone-900 text-white font-bold'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {z === 'all' ? '全部關係 (10對)' : z}
                  </button>
                ))}
              </div>
            </div>

            {/* Split Screen: Left Network SVG Graph / List, Right Deep Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Visual Interconnection Nodes & List */}
              <div className="lg:col-span-5 space-y-3">
                {/* Visual Zang Graph Badge Preview */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center">
                  <div className="relative w-56 h-56 flex items-center justify-center my-2">
                    {/* SVG Connector Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 224 224">
                      {/* Pentagram web lines */}
                      <polygon points="112,28 192,86 162,178 62,178 32,86" fill="none" stroke="#d6d3d1" strokeWidth="1.5" />
                      <line x1="112" y1="28" x2="162" y2="178" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                      <line x1="112" y1="28" x2="62" y2="178" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                      <line x1="192" y1="86" x2="62" y2="178" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                      <line x1="192" y1="86" x2="32" y2="86" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                      <line x1="162" y1="178" x2="32" y2="86" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                    </svg>

                    {/* Organ Nodes */}
                    {[
                      { name: '心', top: '15px', left: '96px', color: 'bg-rose-700 text-white' },
                      { name: '脾', top: '72px', left: '176px', color: 'bg-amber-700 text-white' },
                      { name: '肺', top: '162px', left: '146px', color: 'bg-slate-700 text-white' },
                      { name: '腎', top: '162px', left: '46px', color: 'bg-blue-800 text-white' },
                      { name: '肝', top: '72px', left: '16px', color: 'bg-emerald-800 text-white' },
                    ].map(node => (
                      <button
                        key={node.name}
                        onClick={() => setActiveZangFilter(node.name === activeZangFilter ? 'all' : node.name)}
                        style={{ top: node.top, left: node.left }}
                        className={`absolute w-8 h-8 rounded-full font-serif-tc font-bold text-xs flex items-center justify-center shadow-xs transition-transform hover:scale-110 ${node.color} ${
                          activeZangFilter === node.name ? 'ring-2 ring-amber-400 scale-110' : ''
                        }`}
                        title={`點擊篩選與【${node.name}】相關的所有關聯`}
                      >
                        {node.name}
                      </button>
                    ))}

                    <div className="text-[10px] text-stone-400 font-serif-tc text-center">
                      五臟互濟<br/>生克制化
                    </div>
                  </div>
                  <span className="text-[11px] text-stone-500">
                    點擊節點篩選單臟關聯，或從下方選擇具體關係
                  </span>
                </div>

                {/* Relationship Item Buttons List */}
                <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                  {filteredInterrelations.map(rel => {
                    const isSelected = rel.id === selectedInterrelationId;
                    return (
                      <button
                        key={rel.id}
                        onClick={() => setSelectedInterrelationId(rel.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-white border-amber-800/40 shadow-xs ring-1 ring-amber-800/20'
                            : 'bg-white/80 border-stone-200/80 hover:bg-stone-50 text-stone-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-serif-tc font-bold text-stone-900 text-xs">
                            {rel.title}
                          </span>
                          <span className="text-[10px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded font-mono">
                            {rel.organs[0]} ⇄ {rel.organs[1]}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-500 line-clamp-1">
                          {rel.mechanism}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Deep Relationship Card */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs space-y-5">
                <div className="pb-4 border-b border-stone-200">
                  <div className="flex items-center gap-2 text-xs text-amber-900 font-medium mb-1">
                    <span>【{selectedInterrelation.organs[0]}】與【{selectedInterrelation.organs[1]}】協同樞機</span>
                  </div>
                  <h4 className="text-xl font-serif-tc font-bold text-stone-900">
                    {selectedInterrelation.title}
                  </h4>
                </div>

                {/* Normal Physiology */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1.5">
                  <span className="font-serif-tc font-bold text-stone-900 block text-xs">
                    一、正常生理協作機制
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {selectedInterrelation.mechanism}
                  </p>
                </div>

                {/* Pathology & Imbalance */}
                <div className="p-4 bg-rose-50/60 rounded-xl border border-rose-200/70 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-tc font-bold text-rose-950 text-sm">
                      二、失調常見病理：{selectedInterrelation.pathologyTitle}
                    </span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">
                    {selectedInterrelation.pathologyDesc}
                  </p>
                  <div>
                    <span className="font-semibold text-rose-950 block mb-1 text-[11px]">臨床典型證候：</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedInterrelation.symptoms.map((sym, idx) => (
                        <span key={idx} className="bg-white text-rose-900 border border-rose-200 px-2 py-0.5 rounded text-[11px]">
                          {sym}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Classic Treatment & Formulas */}
                <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 text-xs space-y-1">
                  <span className="font-serif-tc font-bold text-amber-950 block">
                    三、治則治法與古今名方
                  </span>
                  <p className="text-stone-800 leading-relaxed">
                    {selectedInterrelation.classicPrinciple}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* SUB-MODE 3: 六腑傳化路徑圖解 */}
        {/* ============================================================== */}
        {diagramMode === 'fu-transmission' && (
          <div className="mt-5 space-y-6">
            <div className="pb-3 border-b border-stone-200">
              <h4 className="text-sm font-serif-tc font-bold text-stone-900">
                六腑水穀受納與津液排泄傳導流向圖
              </h4>
              <p className="text-xs text-stone-500 mt-0.5">
                《靈樞·本輸》：「六腑者，所以化水穀而行津液者也。」六腑以通為順，以降為和。
              </p>
            </div>

            {/* Stepper Pipeline Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {FU_TRANSMISSION_STEPS.map((step) => {
                const isActive = step.id === activeStepId;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    className={`p-3 rounded-xl border text-left transition-all relative ${
                      isActive
                        ? 'bg-amber-800 text-white border-amber-800 shadow-xs'
                        : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] mb-1 opacity-80 font-mono">
                      <span>第 0{step.stepNumber} 環節</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <span className="font-serif-tc font-bold text-xs block truncate">
                      {step.organName}
                    </span>
                    <span className={`text-[10px] block truncate mt-0.5 ${isActive ? 'text-amber-100' : 'text-stone-500'}`}>
                      {step.fuCategory}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Details */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-200 gap-2">
                <div>
                  <span className="text-[10px] font-mono text-amber-900 font-bold block mb-0.5">
                    傳化樞紐 · 步驟 {currentStep.stepNumber} / 6
                  </span>
                  <h4 className="text-lg font-serif-tc font-bold text-stone-900">
                    {currentStep.organName} —— {currentStep.tcmConcept}
                  </h4>
                </div>
                <span className="text-xs text-stone-600 bg-white px-3 py-1 rounded-md border border-stone-200 self-start sm:self-auto font-mono">
                  比喻：{currentStep.modernAnalogy}
                </span>
              </div>

              {/* Function Detail */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1.5">
                  <span className="font-serif-tc font-bold text-stone-900 block">
                    【生理傳化作用】
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {currentStep.functionDetail}
                  </p>
                  <p className="text-amber-900 pt-1">
                    {currentStep.clinicalSignificance}
                  </p>
                </div>

                <div className="p-4 bg-rose-50/60 rounded-xl border border-rose-200/80 space-y-1.5">
                  <span className="font-serif-tc font-bold text-rose-950 block">
                    【失通失降常見病機】
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {currentStep.pathologyIfBlocked}
                  </p>
                </div>
              </div>

              {/* Canonical Law Banner */}
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200/80 flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-950 leading-relaxed">
                  <span className="font-bold block mb-0.5 font-serif-tc">
                    六腑臨床總治則：六腑以通為用，降為順
                  </span>
                  <p className="text-stone-800">
                    六腑屬陽，主要功能是受納、腐熟、消化、傳導水穀與排泄糟粕。「實而不能滿」，隨時需要排空與疏通。因此臨床治療六腑病變，極少用純補滯澀之品，而以「通府瀉濁、清降疏利」為大法，即「六腑以通為補」。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
