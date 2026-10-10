import React from 'react';
import { X } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1c1d21]/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#e0e1dd] text-[#1c1d21] w-full max-w-lg border border-[#1c1d21]/20 shadow-2xl relative p-6 sm:p-8 space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:text-[#023e8a] transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-bold tracking-widest text-[#023e8a] uppercase block">
          INFORMATIONS VESA
        </span>
        <h3 className="text-xl font-black uppercase tracking-tight text-[#1c1d21]">
          {title}
        </h3>

        <div className="text-xs sm:text-sm text-[#1c1d21]/80 leading-relaxed whitespace-pre-line font-normal bg-white p-4 border border-[#1c1d21]/10">
          {content}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#1c1d21] text-white hover:bg-[#023e8a] text-xs font-bold tracking-widest uppercase italic transition-colors"
        >
          FERMER &gt;
        </button>
      </div>
    </div>
  );
};
