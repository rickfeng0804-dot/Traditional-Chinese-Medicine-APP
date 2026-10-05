import React, { useState, useEffect } from 'react';
import { DisciplineId } from './types/tcm';
import { DISCIPLINES } from './data/disciplinesMeta';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { BasicTheoryView } from './components/basicTheory/BasicTheoryView';
import { DiagnosticsView } from './components/diagnostics/DiagnosticsView';
import { MateriaMedicaView } from './components/materiaMedica/MateriaMedicaView';
import { FormularyView } from './components/formulary/FormularyView';
import { AcupunctureView } from './components/acupuncture/AcupunctureView';
import { QuizView } from './components/QuizView';
import { NotesModal, NoteItem } from './components/NotesModal';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineId>('basic-theory');
  const [activeMode, setActiveMode] = useState<'study' | 'quiz' | 'practice'>('study');
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Persisted state
  const [completedDisciplines, setCompletedDisciplines] = useState<DisciplineId[]>(() => {
    try {
      const saved = localStorage.getItem('tcm_completed_disciplines');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [notes, setNotes] = useState<NoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('tcm_user_notes');
      return saved ? JSON.parse(saved) : [
        {
          id: 'note-1',
          topic: '初入中醫門徑體悟',
          content: '「陰平陽秘，精神乃治；陰陽離決，精氣乃絕。」中醫的核心在於動態平衡與整體觀念，治病必求於本。',
          createdAt: '2026/09/28'
        }
      ];
    } catch {
      return [];
    }
  });

  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [noteInitialTopic, setNoteInitialTopic] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem('tcm_completed_disciplines', JSON.stringify(completedDisciplines));
    } catch (e) {
      console.error(e);
    }
  }, [completedDisciplines]);

  useEffect(() => {
    try {
      localStorage.setItem('tcm_user_notes', JSON.stringify(notes));
    } catch (e) {
      console.error(e);
    }
  }, [notes]);

  const toggleDisciplineLearned = (id: DisciplineId) => {
    setCompletedDisciplines(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleOpenNoteForTopic = (topic: string) => {
    setNoteInitialTopic(topic);
    setIsNotesOpen(true);
  };

  const handleAddNote = (topic: string, content: string) => {
    const newNote: NoteItem = {
      id: Date.now().toString(),
      topic,
      content,
      createdAt: new Date().toLocaleDateString('zh-TW')
    };
    setNotes(prev => [newNote, ...prev]);
  };

  const handleDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  // Find index for next / previous discipline
  const currentDisciplineIdx = DISCIPLINES.findIndex(d => d.id === activeDiscipline);
  const prevDiscipline = currentDisciplineIdx > 0 ? DISCIPLINES[currentDisciplineIdx - 1] : null;
  const nextDiscipline = currentDisciplineIdx < DISCIPLINES.length - 1 ? DISCIPLINES[currentDisciplineIdx + 1] : null;

  const renderDisciplineContent = () => {
    if (activeMode === 'quiz') {
      return <QuizView initialDiscipline={activeDiscipline} />;
    }

    const isLearned = completedDisciplines.includes(activeDiscipline);
    const markLearned = () => toggleDisciplineLearned(activeDiscipline);

    switch (activeDiscipline) {
      case 'basic-theory':
        return (
          <BasicTheoryView
            isLearned={isLearned}
            onMarkLearned={markLearned}
            onOpenNoteForTopic={handleOpenNoteForTopic}
          />
        );
      case 'diagnostics':
        return (
          <DiagnosticsView
            isLearned={isLearned}
            onMarkLearned={markLearned}
            onOpenNoteForTopic={handleOpenNoteForTopic}
          />
        );
      case 'materia-medica':
        return (
          <MateriaMedicaView
            isLearned={isLearned}
            onMarkLearned={markLearned}
            onOpenNoteForTopic={handleOpenNoteForTopic}
          />
        );
      case 'formulary':
        return (
          <FormularyView
            isLearned={isLearned}
            onMarkLearned={markLearned}
            onOpenNoteForTopic={handleOpenNoteForTopic}
          />
        );
      case 'acupuncture':
        return (
          <AcupunctureView
            isLearned={isLearned}
            onMarkLearned={markLearned}
            onOpenNoteForTopic={handleOpenNoteForTopic}
          />
        );
      default:
        return (
          <BasicTheoryView
            isLearned={isLearned}
            onMarkLearned={markLearned}
            onOpenNoteForTopic={handleOpenNoteForTopic}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-stone-800 flex">
      {/* Left Sidebar (Displayed on the left side as requested) */}
      <Sidebar
        activeDiscipline={activeDiscipline}
        onSelectDiscipline={(id) => {
          setActiveDiscipline(id);
          if (activeMode === 'quiz') setActiveMode('study');
        }}
        completedDisciplines={completedDisciplines}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Pane */}
      <div className="flex-1 lg:pl-72 sm:lg:pl-80 flex flex-col min-w-0">
        {/* Top Header Contract */}
        <Header
          activeDiscipline={activeDiscipline}
          activeMode={activeMode}
          setActiveMode={setActiveMode}
          openNotes={() => {
            setNoteInitialTopic(`${DISCIPLINES.find(d => d.id === activeDiscipline)?.name} 心得`);
            setIsNotesOpen(true);
          }}
          savedNotesCount={notes.length}
          completedDisciplines={completedDisciplines}
          onSelectDiscipline={(id) => {
            setActiveDiscipline(id);
            if (activeMode === 'quiz') setActiveMode('study');
          }}
        />

        {/* Page Content Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {renderDisciplineContent()}

          {/* Bottom Module Step Pagination */}
          {activeMode !== 'quiz' && (
            <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
              {prevDiscipline ? (
                <button
                  onClick={() => {
                    setActiveDiscipline(prevDiscipline.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 hover:text-stone-900 transition-all text-left"
                >
                  <ChevronLeft className="w-4 h-4 text-stone-400" />
                  <div>
                    <span className="text-[10px] text-stone-400 block font-mono">上一學科</span>
                    <span className="font-serif-tc font-semibold text-stone-800">{prevDiscipline.name}</span>
                  </div>
                </button>
              ) : <div />}

              {nextDiscipline && (
                <button
                  onClick={() => {
                    setActiveDiscipline(nextDiscipline.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 hover:text-stone-900 transition-all text-right"
                >
                  <div>
                    <span className="text-[10px] text-stone-400 block font-mono">下一學科</span>
                    <span className="font-serif-tc font-semibold text-stone-800">{nextDiscipline.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </button>
              )}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="px-6 py-4 border-t border-stone-200 text-center text-xs text-stone-500 bg-stone-100/40">
          <p className="font-serif-tc">
            中醫基本知識養成體系 · 台北市立成功高中 馮柏翔作品
          </p>
        </footer>
      </div>

      {/* Notes Modal */}
      <NotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        notes={notes}
        onAddNote={handleAddNote}
        onDeleteNote={handleDeleteNote}
        initialTopic={noteInitialTopic}
      />
    </div>
  );
}
