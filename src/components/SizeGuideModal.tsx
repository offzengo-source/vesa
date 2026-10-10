import React from 'react';
import { SIZE_CHART } from '../data/products';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1c1d21]/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#e0e1dd] text-[#1c1d21] w-full max-w-lg border border-[#1c1d21]/20 shadow-2xl relative p-6 sm:p-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:text-[#023e8a] transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <Ruler className="w-6 h-6 text-[#023e8a]" />
          <div>
            <span className="text-xs font-bold tracking-widest text-[#023e8a] uppercase block">
              COUPE STREETWEAR OVERSIZE
            </span>
            <h3 className="text-xl font-black uppercase tracking-tight">GUIDE DES TAILLES VESA</h3>
          </div>
        </div>

        <p className="text-xs text-[#1c1d21]/75 leading-relaxed">
          Toutes nos pièces sont conçues avec une coupe boxy décontractée (épaules tombantes et buste élargi). Mesures prises à plat en centimètres.
        </p>

        {/* Measurement Table */}
        <div className="overflow-x-auto border border-[#1c1d21]/20 bg-white">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-[#1c1d21] text-[#e0e1dd] font-bold uppercase tracking-wider">
                <th className="py-2.5 px-3">Taille</th>
                <th className="py-2.5 px-3">Largeur Buste</th>
                <th className="py-2.5 px-3">Longueur Totale</th>
                <th className="py-2.5 px-3">Largeur Épaules</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1c1d21]/10 font-semibold tabular-nums text-[#1c1d21]">
              {SIZE_CHART.map((row) => (
                <tr key={row.size} className="hover:bg-neutral-50">
                  <td className="py-2.5 px-3 font-black text-[#023e8a]">{row.size}</td>
                  <td className="py-2.5 px-3">{row.chest}</td>
                  <td className="py-2.5 px-3">{row.length}</td>
                  <td className="py-2.5 px-3">{row.shoulder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-[#d5d7d1] border border-[#1c1d21]/15 text-[11px] space-y-1">
          <p className="font-bold text-[#1c1d21]">CONSEIL MORPHOLOGIQUE :</p>
          <p className="text-[#1c1d21]/80">
            • Prenez votre taille habituelle pour un tombé streetwear oversize authentique.<br />
            • Prenez une taille en dessous si vous souhaitez un tombé plus droit et ajusté.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#1c1d21] text-white hover:bg-[#023e8a] text-xs font-bold tracking-widest uppercase italic transition-colors"
        >
          COMPRIS &gt;
        </button>
      </div>
    </div>
  );
};
