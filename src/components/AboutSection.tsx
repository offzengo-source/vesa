import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#e0e1dd] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1c1d21]/15">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs font-bold tracking-[0.25em] text-[#023e8a] uppercase">
          MANIFESTE · ATELIER TUNIS
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1c1d21] leading-tight">
          MOINS DE PAROLES. PLUS DE MATIÈRE.
        </h2>

        <div className="space-y-4 text-sm sm:text-base text-[#1c1d21]/80 leading-relaxed max-w-2xl mx-auto font-normal">
          <p>
            VESA est née à Tunis avec une certitude simple : le streetwear local mérite une exigence sans compromis.
          </p>
          <p>
            Nous refusons les toiles légères et les slogans éphémères. Chaque pièce est coupée dans un coton lourd de 280 g/m², assemblée avec modestie et patience dans nos ateliers partenaires.
          </p>
          <p>
            Pas de faux semblants, pas d'artifices. Juste des coupes droites, un tombé net et le respect de ceux qui les portent au quotidien.
          </p>
        </div>

        <div className="pt-4 flex justify-center items-center gap-8 text-xs font-bold tracking-widest text-[#1c1d21]/60 uppercase">
          <span>COTON 100% TUNISIEN</span>
          <span>·</span>
          <span>ATELIER INDÉPENDANT</span>
          <span>·</span>
          <span>DISTRIBUTION DIRECTE</span>
        </div>
      </div>
    </section>
  );
};
