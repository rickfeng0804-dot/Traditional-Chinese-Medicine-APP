import React, { useState } from 'react';
import { 
  MERIDIANS_LIST, 
  ACUPOINTS_LIST, 
  NEEDLING_AND_MOXIBUSTION_METHODS 
} from '../../data/acupunctureData';
import { AcupointItem, MeridianDetail } from '../../types/tcm';
import { 
  Activity, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert, 
  Compass, 
  MapPin, 
  Clock, 
  Flame,
  Search
} from 'lucide-react';

interface AcupunctureViewProps {
  onMarkLearned: () => void;
  isLearned: boolean;
  onOpenNoteForTopic: (topic: string) => void;
}

export const AcupunctureView: React.FC<AcupunctureViewProps> = ({
  onMarkLearned,
  isLearned,
  onOpenNoteForTopic
}) => {
  const [activeTab, setActiveTab] = useState<'acupoints' | 'meridians' | 'techniques'>('acupoints');
  const [selectedPointId, setSelectedPointId] = useState<string>(ACUPOINTS_LIST[0].id);
  const [selectedMeridianId, setSelectedMeridianId] = useState<string>(MERIDIANS_LIST[0].id);
  const [areaFilter, setAreaFilter] = useState<string>('all');
  const [searchPoint, setSearchPoint] = useState<string>('');

  const selectedPoint = ACUPOINTS_LIST.find(p => p.id === selectedPointId) || ACUPOINTS_LIST[0];
  const selectedMeridian = MERIDIANS_LIST.find(m => m.id === selectedMeridianId) || MERIDIANS_LIST[0];

  const filteredPoints = ACUPOINTS_LIST.filter(p => {
    const matchesSearch = 
      p.name.includes(searchPoint) || 
      p.pinyin.toLowerCase().includes(searchPoint.toLowerCase()) ||
      p.indications.some(i => i.includes(searchPoint)) ||
      p.meridian.includes(searchPoint);

    const matchesArea = areaFilter === 'all' || p.bodyArea === areaFilter;
    return matchesSearch && matchesArea;
  });

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-medium mb-2">
            <span>第五門戶 · 經絡樞機</span>
            <span aria-hidden="true">·</span>
            <span>人體實體通道與穴位玄機</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-tc font-bold tracking-tight text-white mb-3">
            針灸學
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5">
            經脈所過，主治所及。掌握人體十二正經與奇經八脈之循行網絡，通曉臨床要穴之精準定位與主治功能，傳承毫針刺法與艾灸手法。
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
              <span>{isLearned ? '已完成針灸學修煉' : '標記此篇為已研習'}</span>
            </button>
            <button
              onClick={() => onOpenNoteForTopic('針灸學研讀心得')}
              className="px-4 py-2 rounded-lg text-xs font-medium bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700 transition-colors"
            >
              隨手記筆記
            </button>
          </div>
        </div>

        <div className="absolute right-6 -bottom-6 font-serif-tc text-8xl text-stone-800/40 select-none pointer-events-none font-bold">
          針
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-stone-200/50 rounded-xl overflow-x-auto">
        <button
          onClick={() => setActiveTab('acupoints')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'acupoints'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <MapPin className="w-4 h-4 text-indigo-700" />
          <span>臨床要穴精萃圖譜</span>
        </button>
        <button
          onClick={() => setActiveTab('meridians')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'meridians'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Activity className="w-4 h-4 text-amber-700" />
          <span>經絡走向與奇經八脈</span>
        </button>
        <button
          onClick={() => setActiveTab('techniques')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
            activeTab === 'techniques'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Flame className="w-4 h-4 text-rose-700" />
          <span>刺法與艾灸操作法</span>
        </button>
      </div>

      {/* TAB 1: 穴位圖譜 */}
      {activeTab === 'acupoints' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-white rounded-xl p-4 border border-stone-200/90 shadow-2xs space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="搜尋穴位、拼音或主治 (如：合谷、胃痛、頭痛)..."
                  value={searchPoint}
                  onChange={(e) => setSearchPoint(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-700"
                />
              </div>

              {/* Area filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                <span className="text-[11px] text-stone-500 whitespace-nowrap">分區：</span>
                {['all', '頭頸部', '胸腹部', '背腰部', '上肢部', '下肢部'].map(area => (
                  <button
                    key={area}
                    onClick={() => setAreaFilter(area)}
                    className={`px-2.5 py-1 text-xs rounded-md whitespace-nowrap transition-all ${
                      areaFilter === area
                        ? 'bg-stone-800 text-white font-medium'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {area === 'all' ? '全部穴位' : area}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Master Detail Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* List */}
            <div className="lg:col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-1">
              {filteredPoints.map(point => {
                const isSelected = point.id === selectedPointId;
                return (
                  <button
                    key={point.id}
                    onClick={() => setSelectedPointId(point.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-white border-amber-800/40 shadow-xs ring-1 ring-amber-800/20'
                        : 'bg-white/80 border-stone-200/80 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif-tc font-bold text-stone-900 text-base">
                          {point.name}
                        </span>
                        <span className="text-[10px] text-stone-500 font-mono">
                          {point.pinyin}
                        </span>
                      </div>
                      <span className="text-[10px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                        {point.bodyArea}
                      </span>
                    </div>

                    <p className="text-[11px] text-stone-600 line-clamp-1 mb-2 font-serif-tc">
                      {point.meridian}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {point.actions.slice(0, 3).map((act, i) => (
                        <span key={i} className="text-[10px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded">
                          {act}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detail */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-2">
                <div>
                  <span className="text-xs text-indigo-900 font-serif-tc font-semibold block mb-0.5">
                    {selectedPoint.meridian}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-serif-tc font-bold text-stone-900">
                      {selectedPoint.name}
                    </h3>
                    <span className="text-xs text-stone-400 font-mono">
                      {selectedPoint.pinyin}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-serif-tc px-3 py-1 rounded bg-stone-100 text-stone-700 self-start sm:self-auto">
                  {selectedPoint.bodyArea}
                </span>
              </div>

              {/* Location & Finding method */}
              <div className="space-y-3">
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1 font-serif-tc">
                    標準解剖定位：
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {selectedPoint.location}
                  </p>
                </div>

                <div className="p-3.5 bg-indigo-50/50 rounded-xl border border-indigo-200/60 text-xs text-indigo-950">
                  <span className="font-bold block mb-1 font-serif-tc">
                    簡易取穴訣竅：
                  </span>
                  <p className="leading-relaxed">
                    {selectedPoint.findingMethod}
                  </p>
                </div>
              </div>

              {/* Actions & Indications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-2 font-serif-tc">
                    穴位功效
                  </span>
                  <ul className="space-y-1 text-stone-700">
                    {selectedPoint.actions.map((act, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-700 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-2 font-serif-tc">
                    臨床適應證
                  </span>
                  <ul className="space-y-1 text-stone-700">
                    {selectedPoint.indications.map((ind, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-800 shrink-0" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Needling guide & cautions */}
              <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs space-y-1">
                <span className="font-bold text-amber-950 block font-serif-tc">
                  針刺操作與手法指引
                </span>
                <p className="text-stone-800 leading-relaxed">
                  {selectedPoint.needlingGuide}
                </p>
              </div>

              {/* Mnemonic / Song quote */}
              {selectedPoint.mnemonic && (
                <div className="p-3 bg-stone-100 rounded-lg text-xs font-serif-tc text-stone-700 border-l-2 border-indigo-700">
                  <strong className="text-stone-900">經穴歌訣：</strong> {selectedPoint.mnemonic}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 經絡走向 */}
      {activeTab === 'meridians' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-5">
            <div>
              <h3 className="text-xl font-serif-tc font-bold text-stone-900 mb-1">
                十二正經循行與奇經八脈
              </h3>
              <p className="text-xs text-stone-500">
                經脈者，所以決死生，處百病，調虛實，不可不通。
              </p>
            </div>

            {/* Meridian Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {MERIDIANS_LIST.map(m => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMeridianId(m.id)}
                  className={`px-3 py-1.5 text-xs font-serif-tc rounded-lg whitespace-nowrap transition-all ${
                    selectedMeridianId === m.id
                      ? 'bg-stone-900 text-white font-semibold shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>

            {/* Detail card of meridian */}
            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-200 gap-2">
                <div>
                  <span className="text-xs text-stone-500 font-mono">
                    代號：{selectedMeridian.abbreviation} · 屬性：{selectedMeridian.category}
                  </span>
                  <h4 className="text-lg font-serif-tc font-bold text-stone-900">
                    {selectedMeridian.name}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-xs text-amber-900 font-medium bg-amber-50 px-3 py-1 rounded-md border border-amber-200 self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedMeridian.activeTime}</span>
                </div>
              </div>

              <div className="text-xs space-y-3">
                <div>
                  <span className="font-bold text-stone-900 block mb-1">經脈循行走向：</span>
                  <p className="text-stone-700 leading-relaxed bg-white p-3 rounded-lg border border-stone-200">
                    {selectedMeridian.pathway}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-stone-900 block mb-1">臟腑屬絡關聯：</span>
                  <p className="text-stone-700">{selectedMeridian.organRelation}</p>
                </div>

                <div>
                  <span className="font-bold text-stone-900 block mb-1.5">經絡核心代表要穴：</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedMeridian.keyPoints.map((pt, i) => (
                      <span key={i} className="text-xs bg-white text-stone-800 px-2.5 py-1 rounded border border-stone-200 font-serif-tc">
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 刺灸手法與安全 */}
      {activeTab === 'techniques' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-6">
            <div>
              <h3 className="text-xl font-serif-tc font-bold text-stone-900 mb-1">
                針刺與艾灸操作法
              </h3>
              <p className="text-xs text-stone-500">
                掌握進針、得氣、補瀉心法，與艾火溫通經絡之法
              </p>
            </div>

            {/* Needling techniques */}
            <div>
              <h4 className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-3">
                毫針操作精要
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {NEEDLING_AND_MOXIBUSTION_METHODS.needlingTechniques.map((item, idx) => (
                  <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                    <span className="font-serif-tc font-bold text-stone-900 text-sm block">
                      {item.name}
                    </span>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Moxibustion techniques */}
            <div>
              <h4 className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-3">
                艾灸溫通手法
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {NEEDLING_AND_MOXIBUSTION_METHODS.moxibustionTechniques.map((item, idx) => (
                  <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                    <span className="font-serif-tc font-bold text-stone-900 text-sm block">
                      {item.name}
                    </span>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cautions */}
            <div className="p-5 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2">
              <div className="flex items-center gap-2 text-rose-950 font-bold text-sm font-serif-tc">
                <ShieldAlert className="w-4 h-4 text-rose-700" />
                <span>針灸臨床安全規程與禁忌要領</span>
              </div>
              <ul className="space-y-1.5 text-xs text-rose-950">
                {NEEDLING_AND_MOXIBUSTION_METHODS.safetyCautions.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-700 mt-1.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
