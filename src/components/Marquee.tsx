import React from 'react';

export const Marquee: React.FC = () => {
  const repeatedText = "VESA · MADE IN TUNISIA · COME BACK · VESA · 280 GSM · OVERSIZED FIT · COTON PEIGNÉ · ";

  return (
    <div className="w-full bg-[#023e8a] text-white py-3.5 overflow-hidden select-none border-y border-[#023e8a]">
      <div className="flex w-full whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex items-center text-xs sm:text-sm font-black tracking-[0.2em] uppercase">
          <span>{repeatedText.repeat(4)}</span>
          <span aria-hidden="true">{repeatedText.repeat(4)}</span>
        </div>
      </div>
    </div>
  );
};
