import React, { useState } from 'react';
import { 
  DIAGNOSTIC_METHODS, 
  TONGUE_SAMPLES, 
  PULSE_SAMPLES, 
  EIGHT_PRINCIPLES_CASES 
} from '../../data/diagnosticsData';
import { 
  Eye, 
  Volume2, 
  MessageSquare, 
  Hand, 
  CheckCircle2, 
  ArrowRight,
  Filter,
  Sparkles
} from 'lucide-react';

interface DiagnosticsViewProps {
  onMarkLearned: () => void;
  isLearned: boolean;
  onOpenNoteForTopic: (topic: string) => void;
}

export const DiagnosticsView: React.FC<DiagnosticsViewProps> = ({
  onMarkLearned,
  isLearned,
  onOpenNoteForTopic
}) => {
  const [activeTab, setActiveTab] = useState<'four' | 'eight' | 'cases'>('four');
  const [selectedMethodId, setSelectedMethodId] = useState<string>('wang');
  const [selectedTongueId, setSelectedTongueId] = useState<string>('normal');
  const [selectedPulseId, setSelectedPulseId] = useState<string>('fu');

  // Interactive 8-Principles interactive workbench state
  const [customBiaoLi, setCustomBiaoLi] = useState<'表' | '裡'>('表');
  const [customHanRe, setCustomHanRe] = useState<'寒' | '熱'>('寒');
  const [customXuShi, setCustomXuShi] = useState<'虛' | '實'>('實');

  const currentMethod = DIAGNOSTIC_METHODS.find(m => m.id === selectedMethodId) || DIAGNOSTIC_METHODS[0];
  const currentTongue = TONGUE_SAMPLES.find(t => t.id === selectedTongueId) || TONGUE_SAMPLES[0];
  const currentPulse = PULSE_SAMPLES.find(p => p.id === selectedPulseId) || PULSE_SAMPLES[0];

  // Derived Eight-Principles diagnosis
  const getEightPrinciplesVerdict = () => {
    const isYang = (customBiaoLi === '表' && customHanRe === '熱') || (customHanRe === '熱' && customXuShi === '實');
    const conclusion = `${customBiaoLi}${customHanRe}${customXuShi}證 (${isYang ? '屬陽證' : '屬陰證'})`;
    
    let symptoms = '';
    let principle = '';

    if (customBiaoLi === '表' && customHanRe === '寒' && customXuShi === '實') {
      symptoms = '惡寒重發熱輕、無汗身痛、鼻塞清涕、苔薄白、脈浮緊。';
      principle = '辛溫解表、宣肺散寒 (如麻黃湯)。';
    } else if (customBiaoLi === '表' && customHanRe === '熱' && customXuShi === '實') {
      symptoms = '發熱重惡寒輕、微汗、咽痛口渴、舌邊尖紅苔薄黃、脈浮數。';
      principle = '辛涼解表、清熱宣肺 (如銀翹散)。';
    } else if (customBiaoLi === '裡' && customHanRe === '寒' && customXuShi === '虛') {
      symptoms = '畏寒肢冷、面色白、脘腹冷痛喜溫喜按、便溏、舌淡嫩苔白滑、脈沉遲無力。';
      principle = '溫中祛寒、健脾益氣 (如理中丸、附子理中湯)。';
    } else if (customBiaoLi === '裡' && customHanRe === '熱' && customXuShi === '實') {
      symptoms = '高熱不退、口渴喜冷飲、腹滿硬痛拒按、大便燥結、舌紅苔黃燥、脈沉實有力。';
      principle = '清熱通便、瀉火解毒 (如大承氣湯)。';
    } else if (customBiaoLi === '裡' && customHanRe === '熱' && customXuShi === '虛') {
      symptoms = '五心煩熱、午後潮熱、盜汗咽乾、舌紅少苔、脈細數。';
      principle = '滋陰清熱、育陰潛陽 (如六味地黃丸)。';
    } else {
      symptoms = `以${customBiaoLi}證為位、${customHanRe}證為性、${customXuShi}證為勢，正邪交爭。`;
      principle = `${customHanRe === '寒' ? '溫散' : '清瀉'}並調治${customXuShi === '虛' ? '扶正' : '祛邪'}。`;
    }

    return { conclusion, symptoms, principle };
  };

  const verdict = getEightPrinciplesVerdict();

  const getMethodIcon = (id: string) => {
    switch (id) {
      case 'wang': return <Eye className="w-4 h-4" />;
      case 'wen': return <Volume2 className="w-4 h-4" />;
      case 'wen_ask': return <MessageSquare className="w-4 h-4" />;
      case 'qie': return <Hand className="w-4 h-4" />;
      default: return <Eye className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-medium mb-2">
            <span>第二門戶 · 臨證津梁</span>
            <span aria-hidden="true">·</span>
            <span>理論化為臨床之樞紐</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-tc font-bold tracking-tight text-white mb-3">
            中醫診斷學
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5">
            司外揣內，以神馭巧。掌握「望、聞、問、切」四診收集病患之形色脈候，並以「八綱辨證」剖析陰陽、表裡、寒熱、虛實，方能審證求因、立法處方。
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
              <span>{isLearned ? '已完成診斷學修煉' : '標記此篇為已研習'}</span>
            </button>
            <button
              onClick={() => onOpenNoteForTopic('中醫診斷學研讀心得')}
              className="px-4 py-2 rounded-lg text-xs font-medium bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700 transition-colors"
            >
              隨手記筆記
            </button>
          </div>
        </div>

        <div className="absolute right-6 -bottom-6 font-serif-tc text-8xl text-stone-800/40 select-none pointer-events-none font-bold">
          診
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-stone-200/50 rounded-xl overflow-x-auto">
        <button
          onClick={() => setActiveTab('four')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'four'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Eye className="w-4 h-4 text-amber-700" />
          <span>四診心傳 (望聞問切)</span>
        </button>
        <button
          onClick={() => setActiveTab('eight')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'eight'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Sparkles className="w-4 h-4 text-rose-700" />
          <span>八綱辨證推演</span>
        </button>
        <button
          onClick={() => setActiveTab('cases')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'cases'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Filter className="w-4 h-4 text-teal-700" />
          <span>臨床辨證案例庫</span>
        </button>
      </div>

      {/* TAB 1: 四診心傳 */}
      {activeTab === 'four' && (
        <div className="space-y-6">
          {/* Method selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {DIAGNOSTIC_METHODS.map(method => (
              <button
                key={method.id}
                onClick={() => setSelectedMethodId(method.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedMethodId === method.id
                    ? 'bg-white border-amber-800/40 shadow-xs ring-1 ring-amber-800/20'
                    : 'bg-stone-50 border-stone-200/80 hover:bg-stone-100 text-stone-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-1 text-stone-900 font-serif-tc font-bold text-xs">
                  {getMethodIcon(method.id)}
                  <span>{method.name.slice(0, 2)}</span>
                </div>
                <p className="text-[11px] text-stone-500 truncate">
                  {method.title}
                </p>
              </button>
            ))}
          </div>

          {/* Current Method Content */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-6">
            <div className="pb-4 border-b border-stone-200">
              <h3 className="text-xl font-serif-tc font-bold text-stone-900">
                {currentMethod.name}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                {currentMethod.meaning}
              </p>
            </div>

            {/* Core Concepts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentMethod.coreConcepts.map((item, idx) => (
                <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="font-serif-tc font-bold text-stone-900 text-sm block mb-1.5">
                    {item.title}
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Feature: If WANG selected, show Tongue Simulator */}
            {selectedMethodId === 'wang' && (
              <div className="mt-6 pt-6 border-t border-stone-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-sm font-serif-tc font-bold text-stone-900">
                      舌診互動圖鑑 · 臟腑反射與舌象剖析
                    </h4>
                    <p className="text-xs text-stone-500">
                      切換典型臨床舌象，體悟「舌為心之苗、又為脾之外候」
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {TONGUE_SAMPLES.map(sample => (
                      <button
                        key={sample.id}
                        onClick={() => setSelectedTongueId(sample.id)}
                        className={`px-2.5 py-1 text-xs rounded-md font-serif-tc transition-all ${
                          selectedTongueId === sample.id
                            ? 'bg-amber-800 text-white font-semibold'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {sample.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Tongue card */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-5 bg-stone-50 rounded-xl border border-stone-200">
                  {/* Left: SVG Diagram of Tongue & Organ Zones */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-stone-200">
                    <svg className="w-40 h-52" viewBox="0 0 160 200" fill="none">
                      {/* Tongue outline */}
                      <path
                        d="M30 40 C30 140, 50 190, 80 195 C110 190, 130 140, 130 40 C130 15, 30 15, 30 40 Z"
                        fill={
                          selectedTongueId === 'pale-white' ? '#fed7aa' :
                          selectedTongueId === 'red-yellow' ? '#dc2626' :
                          selectedTongueId === 'purplish' ? '#701a75' :
                          selectedTongueId === 'mirror' ? '#ef4444' : '#fb7185'
                        }
                        stroke="#78350f"
                        strokeWidth="2"
                      />
                      {/* Tongue coating texture */}
                      {selectedTongueId !== 'mirror' && (
                        <ellipse
                          cx="80"
                          cy="95"
                          rx="35"
                          ry="60"
                          fill={
                            selectedTongueId === 'red-yellow' ? '#fef08a' :
                            selectedTongueId === 'pale-white' ? '#f8fafc' : '#ffffff'
                          }
                          opacity={selectedTongueId === 'red-yellow' ? '0.9' : '0.6'}
                        />
                      )}
                      {/* Organ zones markings */}
                      <line x1="45" y1="70" x2="115" y2="70" stroke="#78350f" strokeDasharray="3 3" opacity="0.4" />
                      <line x1="50" y1="130" x2="110" y2="130" stroke="#78350f" strokeDasharray="3 3" opacity="0.4" />
                      <line x1="60" y1="160" x2="100" y2="160" stroke="#78350f" strokeDasharray="3 3" opacity="0.4" />

                      <text x="80" y="55" textAnchor="middle" fontSize="10" fill="#451a03" fontWeight="bold">舌根 (腎)</text>
                      <text x="80" y="105" textAnchor="middle" fontSize="10" fill="#451a03" fontWeight="bold">舌中 (脾胃)</text>
                      <text x="35" y="105" textAnchor="middle" fontSize="9" fill="#451a03">肝膽</text>
                      <text x="125" y="105" textAnchor="middle" fontSize="9" fill="#451a03">肝膽</text>
                      <text x="80" y="180" textAnchor="middle" fontSize="10" fill="#451a03" fontWeight="bold">舌尖 (心肺)</text>
                    </svg>
                    <span className="text-[11px] text-stone-500 mt-2">
                      舌面臟腑投影全息示意圖
                    </span>
                  </div>

                  {/* Right: Analysis */}
                  <div className="md:col-span-7 space-y-3">
                    <span className="text-base font-serif-tc font-bold text-stone-900 block">
                      {currentTongue.name}
                    </span>
                    <div className="text-xs space-y-1.5">
                      <p className="text-stone-700">
                        <span className="font-semibold text-stone-900">舌質特徵：</span>
                        {currentTongue.tongueBody}
                      </p>
                      <p className="text-stone-700">
                        <span className="font-semibold text-stone-900">舌苔特徵：</span>
                        {currentTongue.tongueCoating}
                      </p>
                      <p className="text-stone-800 bg-white p-2.5 rounded-lg border border-stone-200">
                        <span className="font-semibold text-amber-900">主病機理：</span>
                        {currentTongue.clinicalMeaning}
                      </p>
                    </div>

                    <div className="pt-2 text-xs">
                      <span className="font-semibold text-emerald-800">對治法則：</span>
                      <span className="text-stone-700 ml-1">{currentTongue.recommendedPrinciple}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Interactive Feature: If QIE selected, show Pulse and Cun-Guan-Chi */}
            {selectedMethodId === 'qie' && (
              <div className="mt-6 pt-6 border-t border-stone-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-sm font-serif-tc font-bold text-stone-900">
                      寸關尺切脈定位與代表脈象
                    </h4>
                    <p className="text-xs text-stone-500">
                      「浮沉遲數滑澀弦細」，體驗手指下的脈動世界
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {PULSE_SAMPLES.slice(0, 6).map(sample => (
                      <button
                        key={sample.id}
                        onClick={() => setSelectedPulseId(sample.id)}
                        className={`px-2.5 py-1 text-xs rounded-md font-serif-tc transition-all ${
                          selectedPulseId === sample.id
                            ? 'bg-amber-800 text-white font-semibold'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {sample.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left: Cun-Guan-Chi Diagram */}
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="text-xs font-bold text-stone-900 font-serif-tc block mb-2">
                      寸關尺三部臟腑定位
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <span className="font-semibold text-amber-900 block mb-1">左手 (候心肝腎)</span>
                        <p className="text-stone-600 text-[11px] leading-relaxed">
                          寸部：候心與膻中<br/>
                          關部：候肝膽<br/>
                          尺部：候腎與小腹
                        </p>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <span className="font-semibold text-amber-900 block mb-1">右手 (候肺脾命門)</span>
                        <p className="text-stone-600 text-[11px] leading-relaxed">
                          寸部：候肺與胸中<br/>
                          關部：候脾胃<br/>
                          尺部：候命門/腎與少腹
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Selected Pulse Info */}
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif-tc font-bold text-stone-900">
                        {currentPulse.name}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-stone-200 text-stone-700">
                        {currentPulse.category}
                      </span>
                    </div>
                    <p className="text-xs text-stone-800 bg-white p-2.5 rounded-lg border border-stone-200">
                      <span className="font-semibold text-amber-900">指下感覺：</span>
                      {currentPulse.feelDescription}
                    </p>
                    <p className="text-xs text-stone-700">
                      <span className="font-semibold text-stone-900">主病範疇：</span>
                      {currentPulse.clinicalMeaning}
                    </p>
                    <p className="text-[11px] text-stone-500">
                      機理：{currentPulse.mechanism}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: 八綱辨證推演實驗室 */}
      {activeTab === 'eight' && (
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-6">
          <div>
            <h3 className="text-xl font-serif-tc font-bold text-stone-900 mb-1">
              八綱辨證推演實驗室
            </h3>
            <p className="text-xs text-stone-500">
              八綱為陰陽、表裡、寒熱、虛實。陰陽為總綱，表裡辨病位，寒熱辨病性，虛實辨正邪。
            </p>
          </div>

          {/* Interactive Tri-selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* 表裡 */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <span className="text-xs font-semibold text-stone-700 block mb-2">
                1. 病位深淺 (表裡)
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCustomBiaoLi('表')}
                  className={`flex-1 py-2 text-xs font-serif-tc font-bold rounded-lg border transition-all ${
                    customBiaoLi === '表'
                      ? 'bg-amber-800 text-white border-amber-800'
                      : 'bg-white text-stone-700 border-stone-200'
                  }`}
                >
                  表證 (皮毛經絡)
                </button>
                <button
                  onClick={() => setCustomBiaoLi('裡')}
                  className={`flex-1 py-2 text-xs font-serif-tc font-bold rounded-lg border transition-all ${
                    customBiaoLi === '裡'
                      ? 'bg-amber-800 text-white border-amber-800'
                      : 'bg-white text-stone-700 border-stone-200'
                  }`}
                >
                  裡證 (臟腑氣血)
                </button>
              </div>
            </div>

            {/* 寒熱 */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <span className="text-xs font-semibold text-stone-700 block mb-2">
                2. 疾病性質 (寒熱)
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCustomHanRe('寒')}
                  className={`flex-1 py-2 text-xs font-serif-tc font-bold rounded-lg border transition-all ${
                    customHanRe === '寒'
                      ? 'bg-blue-800 text-white border-blue-800'
                      : 'bg-white text-stone-700 border-stone-200'
                  }`}
                >
                  寒證 (陰盛陽衰)
                </button>
                <button
                  onClick={() => setCustomHanRe('熱')}
                  className={`flex-1 py-2 text-xs font-serif-tc font-bold rounded-lg border transition-all ${
                    customHanRe === '熱'
                      ? 'bg-rose-800 text-white border-rose-800'
                      : 'bg-white text-stone-700 border-stone-200'
                  }`}
                >
                  熱證 (陽盛陰虛)
                </button>
              </div>
            </div>

            {/* 虛實 */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <span className="text-xs font-semibold text-stone-700 block mb-2">
                3. 正邪力量 (虛實)
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCustomXuShi('虛')}
                  className={`flex-1 py-2 text-xs font-serif-tc font-bold rounded-lg border transition-all ${
                    customXuShi === '虛'
                      ? 'bg-emerald-800 text-white border-emerald-800'
                      : 'bg-white text-stone-700 border-stone-200'
                  }`}
                >
                  虛證 (正氣不足)
                </button>
                <button
                  onClick={() => setCustomXuShi('實')}
                  className={`flex-1 py-2 text-xs font-serif-tc font-bold rounded-lg border transition-all ${
                    customXuShi === '實'
                      ? 'bg-emerald-800 text-white border-emerald-800'
                      : 'bg-white text-stone-700 border-stone-200'
                  }`}
                >
                  實證 (邪氣亢盛)
                </button>
              </div>
            </div>
          </div>

          {/* Real-time deduction result */}
          <div className="p-5 bg-amber-50/50 rounded-xl border border-amber-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-amber-900 font-semibold uppercase tracking-wider">
                辨證推演結論
              </span>
              <span className="font-serif-tc font-bold text-amber-950 text-base">
                {verdict.conclusion}
              </span>
            </div>

            <div className="text-xs text-stone-800 bg-white p-3.5 rounded-lg border border-amber-100">
              <span className="font-semibold text-stone-900 block mb-1">典型四診臨床表徵：</span>
              <p className="leading-relaxed">{verdict.symptoms}</p>
            </div>

            <div className="text-xs text-stone-800 bg-white p-3.5 rounded-lg border border-amber-100">
              <span className="font-semibold text-emerald-900 block mb-1">基本治療原則與方藥思路：</span>
              <p className="leading-relaxed">{verdict.principle}</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 臨床辨證案例庫 */}
      {activeTab === 'cases' && (
        <div className="space-y-4">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <h4 className="text-sm font-serif-tc font-bold text-stone-900 mb-1">
              經典綜合病案辨證示範
            </h4>
            <p className="text-xs text-stone-600">
              仔細體察病患四診資訊，比對八綱辨證之推演步驟與遣方用藥方針
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EIGHT_PRINCIPLES_CASES.map(caseItem => (
              <div key={caseItem.id} className="bg-white rounded-xl p-5 border border-stone-200/90 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-serif-tc font-bold text-stone-900 text-sm">
                    {caseItem.title}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {caseItem.conclusion}
                  </span>
                </div>

                <div className="text-xs space-y-1.5">
                  <div>
                    <span className="text-stone-500 block text-[11px]">症狀收集：</span>
                    <ul className="list-disc list-inside text-stone-700 pl-1">
                      {caseItem.symptoms.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-1 text-stone-700">
                    <span className="font-semibold text-stone-900">舌脈：</span>
                    {caseItem.tongue}；{caseItem.pulse}
                  </div>

                  <div className="p-2.5 bg-stone-50 rounded-lg text-stone-700 text-[11px] leading-relaxed">
                    <span className="font-semibold text-stone-900">病機推演：</span>
                    {caseItem.analysis}
                  </div>

                  <div className="text-[11px] text-emerald-800 font-medium pt-1">
                    治法方藥：{caseItem.treatmentPrinciple}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
