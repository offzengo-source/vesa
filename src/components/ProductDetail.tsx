import React, { useState } from 'react';
import { Product } from '../types';
import { ChevronDown, ArrowLeft, Ruler, ShoppingBag, Check } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, size: 'S' | 'M' | 'L' | 'XL', quantity: number) => void;
  onOpenSizeGuide: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  onAddToCart,
  onOpenSizeGuide,
}) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL'>('M');
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  // Accordion state
  const [openSection, setOpenSection] = useState<'desc' | 'mat' | 'deliv' | null>('desc');

  const images = product.detailImages.length > 0 ? product.detailImages : [product.frontImage, product.backImage];

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2400);
  };

  return (
    <div className="w-full bg-[#e0e1dd] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Breadcrumb / Return */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#1c1d21] hover:text-[#023e8a] transition-colors mb-8 focus-visible:outline-2 focus-visible:outline-[#023e8a]"
        >
          <ArrowLeft className="w-4 h-4" />
          RETOUR AU SHOP
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* LEFT: GALLERY (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnail Strip */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible shrink-0 pb-2 sm:pb-0">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-[#d5d7d1] overflow-hidden border-2 transition-all ${
                    selectedImgIndex === idx
                      ? 'border-[#023e8a]'
                      : 'border-transparent hover:border-[#1c1d21]/30'
                  }`}
                  aria-label={`Vue ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} miniature ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Active Image */}
            <div className="flex-1 relative aspect-square bg-[#d5d7d1] overflow-hidden border border-[#1c1d21]/15">
              <img
                src={images[selectedImgIndex]}
                alt={`${product.name} vue principale`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute top-3 right-3 bg-[#1c1d21] text-[#e0e1dd] text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                VUE {selectedImgIndex + 1} / {images.length}
              </div>
            </div>
          </div>

          {/* RIGHT: INFO & CONTIGUOUS PURCHASE MODULE (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#023e8a] uppercase block mb-1">
                {product.subtitle}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#1c1d21] leading-tight">
                {product.name}
              </h1>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl font-black tabular-nums text-[#023e8a]">
                  {product.price} TND
                </span>
                <span className="text-xs text-[#1c1d21]/60 font-semibold tracking-wide">
                  TTC · Paiement à la livraison
                </span>
              </div>
            </div>

            {/* Size Selector in Sharp Squares */}
            <div className="space-y-3 pt-2 border-t border-[#1c1d21]/15">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                <span>CHOIX DE LA TAILLE : {selectedSize}</span>
                <button
                  onClick={onOpenSizeGuide}
                  className="text-[#023e8a] hover:underline inline-flex items-center gap-1 normal-case text-xs font-semibold"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  Guide des tailles
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 border font-bold text-sm tracking-wider uppercase transition-colors flex items-center justify-center ${
                      selectedSize === size
                        ? 'bg-[#1c1d21] text-white border-[#1c1d21]'
                        : 'bg-white text-[#1c1d21] border-[#1c1d21]/30 hover:border-[#1c1d21]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#1c1d21]/60">
                Coupe streetwear boxy oversize. Si vous préférez un porté ajusté, prenez une taille en dessous.
              </p>
            </div>

            {/* Quantity and Add to Cart Action */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#1c1d21]/30 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-12 flex items-center justify-center font-bold text-base hover:bg-neutral-100 transition-colors"
                    aria-label="Diminuer la quantité"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-black tabular-nums text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-12 flex items-center justify-center font-bold text-base hover:bg-neutral-100 transition-colors"
                    aria-label="Augmenter la quantité"
                  >
                    +
                  </button>
                </div>

                {/* Primary Buy CTA */}
                <button
                  onClick={handleAdd}
                  className="flex-1 h-12 bg-[#023e8a] hover:bg-[#023e8a]/90 text-white font-bold tracking-widest text-xs sm:text-sm uppercase italic transition-colors flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#1c1d21]"
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4" />
                      AJOUTÉ AU PANIER !
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      AJOUTER AU PANIER &gt;
                    </>
                  )}
                </button>
              </div>

              {addedNotice && (
                <div className="p-2 bg-[#1c1d21] text-white text-[11px] font-bold text-center tracking-wider uppercase animate-fadeIn">
                  Article ajouté avec succès. Paiement à la livraison disponible.
                </div>
              )}
            </div>

            {/* Accordions */}
            <div className="border-t border-[#1c1d21]/15 divide-y divide-[#1c1d21]/15 pt-2">
              {/* Accordion 1: Description */}
              <div className="py-3">
                <button
                  onClick={() => setOpenSection(openSection === 'desc' ? null : 'desc')}
                  className="w-full flex justify-between items-center text-xs font-bold uppercase tracking-wider text-left"
                >
                  <span>DESCRIPTION</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openSection === 'desc' ? 'rotate-180 text-[#023e8a]' : ''
                    }`}
                  />
                </button>
                {openSection === 'desc' && (
                  <p className="mt-3 text-xs sm:text-sm text-[#1c1d21]/80 leading-relaxed font-normal">
                    {product.description}
                  </p>
                )}
              </div>

              {/* Accordion 2: Matière */}
              <div className="py-3">
                <button
                  onClick={() => setOpenSection(openSection === 'mat' ? null : 'mat')}
                  className="w-full flex justify-between items-center text-xs font-bold uppercase tracking-wider text-left"
                >
                  <span>MATIÈRE &amp; CONFECTION</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openSection === 'mat' ? 'rotate-180 text-[#023e8a]' : ''
                    }`}
                  />
                </button>
                {openSection === 'mat' && (
                  <p className="mt-3 text-xs sm:text-sm text-[#1c1d21]/80 leading-relaxed font-normal">
                    {product.material}
                  </p>
                )}
              </div>

              {/* Accordion 3: Livraison & Retours */}
              <div className="py-3">
                <button
                  onClick={() => setOpenSection(openSection === 'deliv' ? null : 'deliv')}
                  className="w-full flex justify-between items-center text-xs font-bold uppercase tracking-wider text-left"
                >
                  <span>LIVRAISON &amp; RETOURS</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openSection === 'deliv' ? 'rotate-180 text-[#023e8a]' : ''
                    }`}
                  />
                </button>
                {openSection === 'deliv' && (
                  <p className="mt-3 text-xs sm:text-sm text-[#1c1d21]/80 leading-relaxed font-normal">
                    {product.delivery}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
