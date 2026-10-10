import React from 'react';
import { Instagram } from 'lucide-react';
import detailImg from '../assets/images/vesa_instagram_detail_1791658346411.jpg';
import lifestyleImg from '../assets/images/vesa_instagram_lifestyle_1791658357791.jpg';
import bacLookbookImg from '../assets/images/vesa_bac_collection_1791658335428.jpg';
import backImg from '../assets/images/vesa_tshirt_back_1791658324631.jpg';

export const InstagramGrid: React.FC = () => {
  const posts = [
    {
      img: bacLookbookImg,
      tag: '01 / LOOKBOOK BAC',
      caption: 'Session de contrôle. On revient plus forts. 280 GSM.',
    },
    {
      img: detailImg,
      tag: '02 / DÉTAIL MATIÈRE',
      caption: 'Étiquette tissée bleu VESA. Coton peigné brut.',
    },
    {
      img: backImg,
      tag: '03 / TYPOGRAPHIE DOS',
      caption: 'I CAN\'T DO IT. Le trait qui change tout.',
    },
    {
      img: lifestyleImg,
      tag: '04 / RUE DE TUNIS',
      caption: 'Coupe boxy dans la ville. Minimalisme au soleil.',
    },
  ];

  return (
    <section className="w-full bg-[#e0e1dd] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#1c1d21]/15">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 border-b border-[#1c1d21]/15 pb-4">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#023e8a] uppercase">
              COMMUNAUTÉ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1c1d21]">
              SUR LE TERRAIN @VESA.TN
            </h2>
          </div>
          <a
            href="https://instagram.com/vesa.tn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#023e8a] hover:text-[#1c1d21] uppercase transition-colors"
          >
            <Instagram className="w-4 h-4" />
            REJOINDRE SUR INSTAGRAM &gt;
          </a>
        </div>

        {/* 4-column Instagram photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="https://instagram.com/vesa.tn"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-[#d5d7d1] overflow-hidden border border-[#1c1d21]/15 block"
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover filter contrast-102 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              {/* Minimal Dark Hover Overlay */}
              <div className="absolute inset-0 bg-[#1c1d21]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-between text-[#e0e1dd]">
                <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-[#023e8a]">
                  <span>{post.tag}</span>
                  <Instagram className="w-4 h-4 text-[#e0e1dd]" />
                </div>
                <p className="text-xs font-medium leading-snug line-clamp-3 text-[#e0e1dd]">
                  {post.caption}
                </p>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#e0e1dd]/70">
                  @vesa.tn
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
