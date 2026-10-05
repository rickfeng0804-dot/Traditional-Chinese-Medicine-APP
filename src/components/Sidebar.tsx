import React from 'react';
import { 
  Compass, 
  Eye, 
  Droplets, 
  Layers, 
  Activity,
  CheckCircle,
  Menu,
  X,
  Search
} from 'lucide-react';
import { DisciplineId } from '../types/tcm';
import { DISCIPLINES } from '../data/disciplinesMeta';

interface SidebarProps {
  activeDiscipline: DisciplineId;
  onSelectDiscipline: (id: DisciplineId) => void;
  completedDisciplines: DisciplineId[];
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeDiscipline,
  onSelectDiscipline,
  completedDisciplines,
  isMobileOpen,
  setIsMobileOpen,
  searchQuery,
  setSearchQuery
}) => {
  const getIcon = (id: DisciplineId) => {
    switch (id) {
      case 'basic-theory':
        return <Compass className="w-5 h-5" />;
      case 'diagnostics':
        return <Eye className="w-5 h-5" />;
      case 'materia-medica':
        return <Droplets className="w-5 h-5" />;
      case 'formulary':
        return <Layers className="w-5 h-5" />;
      case 'acupuncture':
        return <Activity className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  const getDisciplineIndex = (index: number) => {
    const chineseNumbers = ['壹', '貳', '參', '肆', '伍'];
    return chineseNumbers[index] || `0${index + 1}`;
  };

  const progressPercentage = Math.round((completedDisciplines.length / DISCIPLINES.length) * 100);

  const filteredDisciplines = DISCIPLINES.filter(d => 
    d.name.includes(searchQuery) || 
    d.tagline.includes(searchQuery) ||
    d.topics.some(t => t.title.includes(searchQuery) || t.desc.includes(searchQuery))
  );

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Main Sidebar Element */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 z-40 w-72 sm:w-80 bg-[#FAF8F5] border-r border-stone-200 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200/90 bg-stone-100/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-amber-800 text-amber-50 font-serif-tc font-bold text-sm">
                醫
              </span>
              <div>
                <h1 className="font-serif-tc font-bold text-stone-900 text-sm sm:text-base tracking-wide leading-tight">
                  中醫核心五大門戶
                </h1>
                <p className="text-[11px] text-amber-900 font-medium mt-0.5">
                  台北市立成功高中 馮柏翔作品
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-1.5 text-stone-500 hover:text-stone-800 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cultivation Progress */}
          <div className="mt-4 pt-3 border-t border-stone-200/70">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-stone-600 font-medium">修煉進程</span>
              <span className="text-amber-900 font-mono font-semibold">
                {completedDisciplines.length} / {DISCIPLINES.length} 門 ({progressPercentage}%)
              </span>
            </div>
            <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-800 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Quick Search */}
          <div className="mt-3 relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="text"
              placeholder="檢索學科或概念 (如：陰陽、舌診)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded-md text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-700"
            />
          </div>
        </div>

        {/* Navigation List of 5 Disciplines */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          <div className="px-2 pt-1 pb-2">
            <span className="text-[11px] font-semibold text-stone-600 uppercase tracking-wider">
              五大修煉門徑
            </span>
          </div>

          {filteredDisciplines.map((discipline, index) => {
            const isActive = activeDiscipline === discipline.id;
            const isCompleted = completedDisciplines.includes(discipline.id);

            return (
              <button
                key={discipline.id}
                onClick={() => {
                  onSelectDiscipline(discipline.id);
                  setIsMobileOpen(false);
                }}
                className={`w-full text-left p-3 rounded-xl border transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-white border-amber-800/40 shadow-xs ring-1 ring-amber-800/10'
                    : 'bg-transparent border-transparent hover:bg-stone-200/40 text-stone-700'
                }`}
              >
                {/* Active left indicator strip */}
                {isActive && (
                  <div className="absolute left-0 top-2 bottom-2 w-1 bg-amber-800 rounded-r-md" />
                )}

                <div className="flex items-start gap-3">
                  <div 
                    className={`p-2 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-amber-800 text-amber-50' 
                        : 'bg-stone-200/60 text-stone-600 group-hover:text-stone-900 group-hover:bg-stone-200'
                    }`}
                  >
                    {getIcon(discipline.id)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-mono text-stone-600 font-bold">
                        第{getDisciplineIndex(index)}篇
                      </span>
                      {isCompleted && (
                        <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                          <CheckCircle className="w-3 h-3 text-emerald-600" />
                          <span>已悟</span>
                        </div>
                      )}
                    </div>

                    <h3 className={`font-serif-tc text-sm font-semibold truncate ${
                      isActive ? 'text-stone-950 font-bold' : 'text-stone-800'
                    }`}>
                      {discipline.name}
                    </h3>

                    <p className="text-[11px] text-stone-500 truncate mt-0.5">
                      {discipline.tagline}
                    </p>

                    {/* Sub-topics quick preview */}
                    <div className="flex items-center gap-1 mt-2 text-[10px] text-stone-600">
                      {discipline.topics.slice(0, 2).map((t, idx) => (
                        <span key={t.id} className="truncate">
                          {idx > 0 && <span className="mx-1 text-stone-300">/</span>}
                          {t.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}

          {filteredDisciplines.length === 0 && (
            <div className="p-4 text-center text-xs text-stone-500">
              無相符學科，請嘗試其他關鍵字。
            </div>
          )}
        </div>

        {/* Sidebar Footer Quote */}
        <div className="p-4 border-t border-stone-200/80 bg-stone-100/30 text-[11px] text-stone-500">
          <p className="font-serif-tc text-stone-600 italic leading-relaxed">
            「大醫精誠，博極醫源，精勤不倦。」
          </p>
          <div className="mt-1 text-stone-600 font-serif-tc text-[10px] text-right">
            —— 唐 · 孫思邈《千金要方》
          </div>
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-5 left-5 z-30 p-3 rounded-full bg-stone-900 text-amber-50 shadow-lg hover:bg-stone-800 transition-all flex items-center justify-center"
        aria-label="開啟中醫學科導航"
      >
        <Menu className="w-5 h-5" />
      </button>
    </>
  );
};
