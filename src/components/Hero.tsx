import React, { useState, useEffect } from 'react';
import skyImg from '../assets/images/hero_sky_clouds_1791658299859.jpg';
import tshirtImg from '../assets/images/vesa_tshirt_front_1791658312750.jpg';

interface HeroProps {
  onDiscoverClick: () => void;
  onProductClick: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, onProductClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-[calc(100vh-6rem)] flex flex-col justify-between overflow-hidden bg-[#e0e1dd] select-none">
      {/* Background: Sky and Clouds image with subtle blend */}
      <div className="absolute inset-0 z-0">
        <img
          src={skyImg}
          alt="Ciel et nuages d'été en Tunisie"
          className="w-full h-full object-cover object-center opacity-70 filter contrast-105"
        />
        {/* Soft subtle gradient scrim for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e0e1dd]/40 via-transparent to-[#e0e1dd]" />
      </div>

      {/* Top Banner Tagline */}
      <div className="relative z-10 pt-6 px-6 max-w-7xl mx-auto w-full flex justify-between items-center text-xs font-bold tracking-widest text-[#1c1d21]/80 uppercase">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#023e8a]" />
          COLLECTION 01 — STREETWEAR
        </span>
        <a
          href="https://instagram.com/vesa.tn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#023e8a] transition-colors tracking-widest"
        >
          @VESA.TN
        </a>
      </div>

      {/* Center Composition: Slogan + Floating T-shirt */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-5xl mx-auto w-full text-center">
        {/* Editorial Slogan Behind/Above */}
        <div className="relative mb-2">
          <p className="text-xs font-bold tracking-[0.25em] text-[#023e8a] uppercase mb-1">
            Capsule BAC 2026
          </p>
          <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#1c1d21] tracking-tight leading-none drop-shadow-sm">
            Come Back
          </h1>
        </div>

        {/* Floating T-shirt with responsive parallax */}
        <div
          className="relative group cursor-pointer my-2 sm:my-4 transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          }}
          onClick={() => onProductClick('vesa-come-back-tee')}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
            <img
              src={tshirtImg}
              alt="T-shirt Oversize VESA Come Back"
              className="w-full h-full object-contain filter drop-shadow-2xl transition-all duration-300 group-hover:scale-105"
            />
            {/* Minimalist Floating Card Tag */}
            <div className="absolute -bottom-2 right-4 bg-[#1c1d21] text-[#e0e1dd] px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase border border-[#e0e1dd]/20">
              69 TND · 280 GSM
            </div>
          </div>
        </div>

        {/* Action Button & Subtext */}
        <div className="mt-4 flex flex-col items-center gap-4">
          <button
            onClick={onDiscoverClick}
            className="group px-8 py-4 bg-[#1c1d21] text-[#e0e1dd] hover:bg-[#023e8a] transition-colors text-sm font-bold tracking-wider uppercase italic focus-visible:outline-2 focus-visible:outline-[#023e8a]"
          >
            DÉCOUVRIR &gt;
          </button>
          <p className="text-xs text-[#1c1d21]/75 max-w-sm tracking-normal">
            Pour tous ceux qui ont douté. Conçu et confectionné en Tunisie.
          </p>
        </div>
      </div>

      {/* Bottom bar of Hero */}
      <div className="relative z-10 pb-6 px-6 max-w-7xl mx-auto w-full flex justify-between items-end text-[11px] text-[#1c1d21]/60 font-semibold tracking-wider uppercase">
        <span>COTON LOURD · COUTURES CONTRASTÉES</span>
        <span>TUNIS · SFAX · SOUSSE · BIZERTE</span>
      </div>
    </section>
  );
};
