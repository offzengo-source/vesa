import React, { useState } from 'react';
import { Product } from '../types';
import { X, Search } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1c1d21]/70 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
      <div className="bg-[#e0e1dd] text-[#1c1d21] w-full max-w-xl border border-[#1c1d21]/20 shadow-2xl relative">
        <div className="p-4 border-b border-[#1c1d21]/15 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#023e8a]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="RECHERCHER UN T-SHIRT, UNE TAILLE..."
            className="w-full bg-transparent text-sm font-bold uppercase tracking-wider text-[#1c1d21] placeholder:text-[#1c1d21]/40 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 hover:text-[#023e8a] transition-colors"
            aria-label="Fermer la recherche"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto divide-y divide-[#1c1d21]/10 p-2">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#1c1d21]/60 font-semibold uppercase">
              Aucun résultat pour « {query} »
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="p-3 flex items-center gap-4 hover:bg-[#d5d7d1] cursor-pointer transition-colors"
              >
                <img
                  src={product.frontImage}
                  alt={product.name}
                  className="w-12 h-12 object-cover bg-white border border-[#1c1d21]/10"
                />
                <div className="flex-1">
                  <h4 className="text-xs font-black uppercase">{product.name}</h4>
                  <p className="text-[11px] text-[#1c1d21]/60">{product.subtitle}</p>
                </div>
                <span className="text-xs font-black tabular-nums text-[#023e8a]">
                  {product.price} TND
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
