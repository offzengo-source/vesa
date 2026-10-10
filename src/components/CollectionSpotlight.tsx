import React from 'react';
import bacLookbookImg from '../assets/images/vesa_bac_collection_1791658335428.jpg';

interface CollectionSpotlightProps {
  onExploreClick: () => void;
}

export const CollectionSpotlight: React.FC<CollectionSpotlightProps> = ({
  onExploreClick,
}) => {
  return (
    <section id="collections" className="w-full bg-[#1c1d21] text-[#e0e1dd] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Lookbook image */}
          <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full overflow-hidden bg-black/40 border border-[#e0e1dd]/10">
            <img
              src={bacLookbookImg}
              alt="VESA Lookbook Capsule BAC - Tunis"
              className="w-full h-full object-cover object-center filter contrast-105 hover:scale-102 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 bg-[#1c1d21]/90 text-[#e0e1dd] px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
              TUNIS · ARCHITECTURE BRUTE
            </div>
          </div>

          {/* Right: Narrative & CTA */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-4">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-[0.2em] text-[#023e8a] uppercase">
                CAPSULE THÉMATIQUE · BAC &amp; PERSÉVÉRANCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#e0e1dd] leading-tight">
                POUR TOUS CEUX QUI ONT DOUTÉ.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#e0e1dd]/80 leading-relaxed font-normal">
              La session de contrôle n'est qu'un virage. La pression monte, l'attente est longue, mais le retour se prépare en silence.
            </p>

            <p className="text-xs sm:text-sm text-[#e0e1dd]/60 leading-relaxed">
              Nous avons pensé cette pièce avec un coton peigné lourd de 280 g/m² et des coutures décalées : une silhouette droite et solide pour affronter la chaleur de juin et garder la tête haute.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="px-8 py-4 bg-[#023e8a] text-white hover:bg-[#023e8a]/85 transition-colors text-xs sm:text-sm font-bold tracking-widest uppercase italic inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-white"
              >
                DÉCOUVRIR LA SÉRIE &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
