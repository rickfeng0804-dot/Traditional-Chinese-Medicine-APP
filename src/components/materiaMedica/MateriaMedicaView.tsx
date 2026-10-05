import React, { useState } from 'react';
import { 
  HERB_NATURE_THEORY, 
  HERBS_CATALOG 
} from '../../data/herbalMateriaData';
import { HerbItem, HerbNature, HerbFlavor } from '../../types/tcm';
import { 
  Droplets, 
  Search, 
  CheckCircle2, 
  Filter, 
  ArrowUpRight, 
  ArrowDownRight,
  ShieldAlert,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface MateriaMedicaViewProps {
  onMarkLearned: () => void;
  isLearned: boolean;
  onOpenNoteForTopic: (topic: string) => void;
}

export const MateriaMedicaView: React.FC<MateriaMedicaViewProps> = ({
  onMarkLearned,
  isLearned,
  onOpenNoteForTopic
}) => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'theory'>('catalog');
  const [searchHerb, setSearchHerb] = useState<string>('');
  const [natureFilter, setNatureFilter] = useState<string>('all');
  const [flavorFilter, setFlavorFilter] = useState<string>('all');
  const [selectedHerbId, setSelectedHerbId] = useState<string>(HERBS_CATALOG[0].id);

  const selectedHerb = HERBS_CATALOG.find(h => h.id === selectedHerbId) || HERBS_CATALOG[0];

  const filteredHerbs = HERBS_CATALOG.filter(herb => {
    const matchesSearch = 
      herb.name.includes(searchHerb) || 
      herb.pinyin.toLowerCase().includes(searchHerb.toLowerCase()) ||
      herb.actions.some(a => a.includes(searchHerb)) ||
      herb.channels.some(c => c.includes(searchHerb));

    const matchesNature = natureFilter === 'all' || herb.nature.includes(natureFilter);
    const matchesFlavor = flavorFilter === 'all' || herb.flavors.includes(flavorFilter as HerbFlavor);

    return matchesSearch && matchesNature && matchesFlavor;
  });

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Banner */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-medium mb-2">
            <span>第三門戶 · 草木神功</span>
            <span aria-hidden="true">·</span>
            <span>單味藥材之性味歸經</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-tc font-bold tracking-tight text-white mb-3">
            中藥學
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-5">
            天地賦形，草木有性。掌握藥物之「四氣五味」（寒熱溫涼、辛甘酸苦鹹）、「升降浮沉」趨向與「臟腑歸經」靶向，參透單味藥之生剋制化與配伍神機。
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
              <span>{isLearned ? '已完成中藥學修煉' : '標記此篇為已研習'}</span>
            </button>
            <button
              onClick={() => onOpenNoteForTopic('中藥學研讀心得')}
              className="px-4 py-2 rounded-lg text-xs font-medium bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700 transition-colors"
            >
              隨手記筆記
            </button>
          </div>
        </div>

        <div className="absolute right-6 -bottom-6 font-serif-tc text-8xl text-stone-800/40 select-none pointer-events-none font-bold">
          藥
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-stone-200/50 rounded-xl">
        <button
          onClick={() => setActiveTab('catalog')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'catalog'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Droplets className="w-4 h-4 text-teal-700" />
          <span>本草精萃圖鑑 (藥物庫)</span>
        </button>
        <button
          onClick={() => setActiveTab('theory')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'theory'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-700" />
          <span>性味·升降·歸經 理法全解</span>
        </button>
      </div>

      {/* TAB 1: 藥物庫 Catalog */}
      {activeTab === 'catalog' && (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="bg-white rounded-xl p-4 border border-stone-200/90 shadow-2xs space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="搜尋藥名、拼音、功效或歸經 (如：黃耆、補氣、脾經)..."
                  value={searchHerb}
                  onChange={(e) => setSearchHerb(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-700"
                />
              </div>

              {/* Nature Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                <span className="text-[11px] text-stone-500 whitespace-nowrap">四氣：</span>
                {['all', '寒', '熱', '溫', '涼', '平'].map(nature => (
                  <button
                    key={nature}
                    onClick={() => setNatureFilter(nature)}
                    className={`px-2.5 py-1 text-xs rounded-md whitespace-nowrap transition-all ${
                      natureFilter === nature
                        ? 'bg-stone-800 text-white font-medium'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {nature === 'all' ? '全部' : nature}
                  </button>
                ))}
              </div>

              {/* Flavor Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                <span className="text-[11px] text-stone-500 whitespace-nowrap">五味：</span>
                {['all', '辛', '甘', '酸', '苦', '鹹'].map(flavor => (
                  <button
                    key={flavor}
                    onClick={() => setFlavorFilter(flavor)}
                    className={`px-2.5 py-1 text-xs rounded-md whitespace-nowrap transition-all ${
                      flavorFilter === flavor
                        ? 'bg-stone-800 text-white font-medium'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {flavor === 'all' ? '全部' : flavor}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Master-Detail Split Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left list (Herb Cards) */}
            <div className="lg:col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-1">
              {filteredHerbs.map(herb => {
                const isSelected = herb.id === selectedHerbId;
                return (
                  <button
                    key={herb.id}
                    onClick={() => setSelectedHerbId(herb.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-white border-amber-800/40 shadow-xs ring-1 ring-amber-800/20'
                        : 'bg-white/80 border-stone-200/80 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif-tc font-bold text-stone-900 text-base">
                          {herb.name}
                        </span>
                        <span className="text-[10px] text-stone-500 font-mono">
                          {herb.pinyin}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-stone-500 font-serif-tc">
                        <span>{herb.nature}</span>
                        <span>·</span>
                        <span>{herb.flavors.join('')}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-stone-500 line-clamp-1 mb-2">
                      {herb.category}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {herb.actions.slice(0, 3).map((act, i) => (
                        <span key={i} className="text-[10px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded">
                          {act}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}

              {filteredHerbs.length === 0 && (
                <div className="p-8 text-center text-xs text-stone-400 bg-white rounded-xl border border-stone-200">
                  查無相符藥材，請放寬篩選條件。
                </div>
              )}
            </div>

            {/* Right details */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-2">
                <div>
                  <span className="text-xs text-amber-900 font-semibold block mb-0.5">
                    {selectedHerb.category}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-serif-tc font-bold text-stone-900">
                      {selectedHerb.name}
                    </h3>
                    <span className="text-xs text-stone-400 font-mono">
                      {selectedHerb.pinyin}
                    </span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-1.5 self-start sm:self-auto">
                  <span className="text-xs font-serif-tc px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-200 font-medium">
                    氣味：{selectedHerb.nature} · {selectedHerb.flavors.join('/')}
                  </span>
                  <span className="text-xs font-serif-tc px-2.5 py-1 rounded bg-stone-100 text-stone-700 border border-stone-200">
                    趨向：{selectedHerb.direction === '升' ? '升浮' : '沉降'}
                  </span>
                </div>
              </div>

              {/* Channels (歸經) */}
              <div>
                <span className="text-xs font-semibold text-stone-600 uppercase tracking-wider block mb-2">
                  臟腑歸經
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedHerb.channels.map((ch, idx) => (
                    <span key={idx} className="text-xs bg-stone-100 text-stone-800 px-3 py-1 rounded-md border border-stone-200 font-serif-tc font-medium">
                      入{ch}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions & Indications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-xs font-bold text-stone-900 block mb-2 font-serif-tc">
                    核心功效
                  </span>
                  <ul className="space-y-1 text-xs text-stone-700">
                    {selectedHerb.actions.map((act, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-700 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-xs font-bold text-stone-900 block mb-2 font-serif-tc">
                    臨床主治
                  </span>
                  <ul className="space-y-1 text-xs text-stone-700">
                    {selectedHerb.indications.map((ind, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-800 shrink-0" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Pairing */}
              <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80">
                <span className="text-xs font-bold text-amber-950 block mb-1 font-serif-tc">
                  經典配伍金鑰
                </span>
                <p className="text-xs text-stone-800 leading-relaxed">
                  {selectedHerb.keyPairing}
                </p>
              </div>

              {/* Cautions */}
              <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-200/60 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-rose-950 font-serif-tc block mb-0.5">用藥注意與禁忌</span>
                  <p className="text-stone-700 leading-relaxed">{selectedHerb.cautions}</p>
                </div>
              </div>

              {/* Classical Quote */}
              {selectedHerb.classicalQuote && (
                <div className="p-3 bg-stone-100/70 rounded-lg text-[11px] text-stone-600 font-serif-tc italic border-l-2 border-amber-800">
                  {selectedHerb.classicalQuote}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 理法全解 Theory */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          {/* 四氣 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-4">
            <h3 className="text-lg font-serif-tc font-bold text-stone-900 pb-2 border-b border-stone-200">
              一、四氣學說 (寒、熱、溫、涼、平)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              四氣又稱「四性」，反映藥物對人體寒熱陰陽偏頗的調節作用。《神農本草經》云：「療寒以熱藥，療熱以寒藥。」寒涼屬陰，能清熱瀉火；溫熱屬陽，能溫裡散寒。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {HERB_NATURE_THEORY.fourNatures.map((item, idx) => (
                <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-tc font-bold text-stone-900 text-sm">
                      {item.name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-stone-200 text-stone-700">
                      屬{item.property}
                    </span>
                  </div>
                  <p className="text-xs text-stone-700">
                    <span className="font-semibold text-stone-900">功效：</span>{item.action}
                  </p>
                  <p className="text-xs text-stone-600">
                    <span className="font-semibold text-stone-900">適應：</span>{item.indication}
                  </p>
                  <p className="text-[11px] text-amber-900 font-medium">
                    代表藥：{item.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 五味 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs space-y-4">
            <h3 className="text-lg font-serif-tc font-bold text-stone-900 pb-2 border-b border-stone-200">
              二、五味學說 (辛、甘、酸、苦、鹹)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              五味是古人在長期的實踐中口嘗所得真實滋味，並總結出各味所具有的生理治療功效。《素問》曰：「辛散、酸收、甘緩、苦堅、鹹耎。」
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {HERB_NATURE_THEORY.fiveFlavors.map((flv, idx) => (
                <div key={idx} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5 text-xs">
                  <span className="font-serif-tc font-bold text-amber-900 text-base block">
                    {flv.name}味
                  </span>
                  <span className="font-semibold text-stone-900 block text-xs">
                    {flv.action}
                  </span>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    {flv.mechanism}
                  </p>
                  <p className="text-stone-800 text-[11px] pt-1 border-t border-stone-200">
                    代表：{flv.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 升降浮沉與歸經 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-3">
              <h3 className="text-base font-serif-tc font-bold text-stone-900">
                三、升降浮沉 (趨向運動)
              </h3>
              <div className="space-y-3">
                {HERB_NATURE_THEORY.directions.map((dir, i) => (
                  <div key={i} className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs">
                    <span className="font-serif-tc font-bold text-stone-900 block mb-1">
                      {dir.name}
                    </span>
                    <p className="text-stone-700 mb-1">{dir.role}</p>
                    <span className="text-[11px] text-amber-900">代表藥：{dir.examples}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs space-y-3">
              <h3 className="text-base font-serif-tc font-bold text-stone-900">
                四、臟腑歸經 (精準靶向)
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                {HERB_NATURE_THEORY.channelTropism.definition}
              </p>
              <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-200/70 text-xs text-teal-950 leading-relaxed">
                <span className="font-bold block mb-1 font-serif-tc">臨床實用舉隅：</span>
                {HERB_NATURE_THEORY.channelTropism.clinicalSignificance}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
