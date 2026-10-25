import React from 'react';
import { PLAYBOOK_CHAPTERS } from '../data/playbookContent';

interface PlaybookNavProps {
  activeChapter: string;
  setActiveChapter: (ch: string) => void;
}

export const PlaybookNav: React.FC<PlaybookNavProps> = ({
  activeChapter,
  setActiveChapter
}) => {
  return (
    <nav className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-medium">
      <button
        onClick={() => setActiveChapter('all')}
        className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
          activeChapter === 'all'
            ? 'bg-white text-slate-950 font-bold'
            : 'bg-[#0d121f] text-slate-400 hover:text-white border border-slate-800'
        }`}
      >
        All Chapters
      </button>

      {PLAYBOOK_CHAPTERS.map((ch) => (
        <button
          key={ch.id}
          onClick={() => setActiveChapter(ch.id)}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center space-x-1.5 ${
            activeChapter === ch.id
              ? 'bg-white text-slate-950 font-bold'
              : 'bg-[#0d121f] text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <span className="font-mono text-[10px] opacity-70">{ch.number}.</span>
          <span>{ch.title}</span>
        </button>
      ))}
    </nav>
  );
};
