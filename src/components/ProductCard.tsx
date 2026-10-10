import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product, size: 'S' | 'M' | 'L' | 'XL') => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickAdd,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedQuickSize, setSelectedQuickSize] = useState<'S' | 'M' | 'L' | 'XL'>('L');

  return (
    <div
      className="group relative flex flex-col bg-[#e0e1dd] text-[#1c1d21] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Square Image Box with Front/Back hover transition */}
      <div
        onClick={() => onSelect(product)}
        className="relative w-full aspect-square bg-[#d5d7d1] overflow-hidden cursor-pointer border border-[#1c1d21]/10"
      >
        {/* Front Image */}
        <img
          src={product.frontImage}
          alt={`${product.name} - Face avant`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />

        {/* Back Image (Revealed on hover) */}
        <img
          src={product.backImage}
          alt={`${product.name} - Face arrière`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />

        {/* Tag Indicator */}
        {product.tag && (
          <div className="absolute top-2 left-2 bg-[#1c1d21] text-[#e0e1dd] text-[10px] font-bold px-2 py-0.5 tracking-wider uppercase">
            {product.tag}
          </div>
        )}

        {/* Quick Add Overlay on desktop hover */}
        <div className="absolute inset-x-0 bottom-0 bg-[#1c1d21]/90 backdrop-blur-xs p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 hidden sm:flex flex-col gap-1.5 z-10">
          <div className="flex justify-between items-center text-[10px] text-[#e0e1dd] font-semibold uppercase">
            <span>Taille rapide :</span>
            <div className="flex gap-1">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedQuickSize(size);
                  }}
                  className={`w-6 h-6 text-[10px] font-bold transition-colors ${
                    selectedQuickSize === size
                      ? 'bg-[#023e8a] text-white'
                      : 'bg-transparent text-[#e0e1dd] hover:bg-white/10'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(product, selectedQuickSize);
            }}
            className="w-full py-1.5 bg-[#023e8a] text-white hover:bg-[#023e8a]/90 text-[11px] font-bold tracking-wider uppercase italic flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            + AJOUTER ({selectedQuickSize})
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="pt-3 pb-2 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-2">
          <h3
            onClick={() => onSelect(product)}
            className="text-xs sm:text-sm font-extrabold uppercase tracking-tight text-[#1c1d21] cursor-pointer hover:text-[#023e8a] transition-colors leading-snug line-clamp-2"
          >
            {product.name}
          </h3>
          <span className="text-xs sm:text-sm font-black tabular-nums text-[#023e8a] shrink-0">
            {product.price} TND
          </span>
        </div>

        <p className="text-[11px] text-[#1c1d21]/70 tracking-normal mt-0.5 line-clamp-1">
          {product.subtitle}
        </p>

        {/* Mobile View CTA */}
        <div className="sm:hidden mt-2 pt-2 border-t border-[#1c1d21]/10 flex justify-between items-center">
          <span className="text-[10px] font-semibold text-[#1c1d21]/60 uppercase">
            S · M · L · XL
          </span>
          <button
            onClick={() => onSelect(product)}
            className="text-[10px] font-black text-[#023e8a] uppercase italic"
          >
            VOIR &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
