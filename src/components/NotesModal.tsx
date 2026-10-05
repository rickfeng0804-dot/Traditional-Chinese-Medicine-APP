import React, { useState } from 'react';
import { X, Plus, Trash2, Bookmark } from 'lucide-react';

export interface NoteItem {
  id: string;
  topic: string;
  content: string;
  createdAt: string;
}

interface NotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  notes: NoteItem[];
  onAddNote: (topic: string, content: string) => void;
  onDeleteNote: (id: string) => void;
  initialTopic?: string;
}

export const NotesModal: React.FC<NotesModalProps> = ({
  isOpen,
  onClose,
  notes,
  onAddNote,
  onDeleteNote,
  initialTopic = ''
}) => {
  const [topic, setTopic] = useState(initialTopic);
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    onAddNote(topic.trim() || '中醫研習筆記', content.trim());
    setContent('');
    setTopic('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col shadow-xl border border-stone-200 overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-800" />
            <h3 className="font-serif-tc font-bold text-stone-900 text-base">
              研習心得與隨手筆記
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-500 hover:text-stone-800 hover:bg-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notes Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {/* Add form */}
          <form onSubmit={handleSubmit} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
            <div className="text-xs font-semibold text-stone-700">
              撰寫新心得筆記
            </div>
            <input
              type="text"
              placeholder="主題 (例如：五行相生相剋體悟、桂枝湯配伍要旨)"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-700"
            />
            <textarea
              placeholder="記錄您的學習心得、病機分析或背誦口訣..."
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-700 resize-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!content.trim()}
                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-lg bg-amber-800 text-white hover:bg-amber-700 disabled:opacity-50 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>儲存筆記</span>
              </button>
            </div>
          </form>

          {/* List of saved notes */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              已記錄筆記 ({notes.length})
            </div>

            {notes.length === 0 ? (
              <div className="p-6 text-center text-xs text-stone-400 bg-stone-50/50 rounded-xl border border-stone-200">
                尚未記錄任何筆記，在研讀各篇章時可隨時記錄心得。
              </div>
            ) : (
              notes.map(note => (
                <div key={note.id} className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-tc font-bold text-stone-900 text-xs">
                      {note.topic}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-stone-400 font-mono">
                        {note.createdAt}
                      </span>
                      <button
                        onClick={() => onDeleteNote(note.id)}
                        className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                        title="刪除筆記"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-stone-700 whitespace-pre-wrap leading-relaxed">
                    {note.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
