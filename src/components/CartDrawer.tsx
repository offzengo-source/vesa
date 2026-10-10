import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 150;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const deliveryFee = subtotal >= freeShippingThreshold || items.length === 0 ? 0 : 7;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1c1d21]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#e0e1dd] text-[#1c1d21] shadow-2xl flex flex-col border-l border-[#1c1d21]/20">
          {/* Header */}
          <div className="p-5 border-b border-[#1c1d21]/15 flex justify-between items-center bg-[#e0e1dd]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#023e8a]" />
              <h2 className="text-base font-black tracking-tight uppercase">
                VOTRE PANIER ({items.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:text-[#023e8a] transition-colors focus-visible:outline-2 focus-visible:outline-[#023e8a]"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          {items.length > 0 && (
            <div className="px-5 py-2.5 bg-[#1c1d21] text-[#e0e1dd] text-xs font-semibold">
              {remainingForFreeShipping > 0 ? (
                <p>
                  Ajoutez encore{' '}
                  <span className="text-[#023e8a] font-bold text-white bg-[#023e8a] px-1.5 py-0.5">
                    {remainingForFreeShipping} TND
                  </span>{' '}
                  pour la livraison gratuite !
                </p>
              ) : (
                <p className="text-emerald-400 font-bold uppercase tracking-wider">
                  ✓ LIVRAISON OFFERTE PARTOUT EN TUNISIE
                </p>
              )}
            </div>
          )}

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-[#1c1d21]/15">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-[#1c1d21]/5 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-[#1c1d21]/40" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold uppercase tracking-tight text-sm">
                    VOTRE PANIER EST VIDE
                  </p>
                  <p className="text-xs text-[#1c1d21]/60">
                    Découvrez nos nouveautés en coton lourd 280 GSM.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#1c1d21] text-white hover:bg-[#023e8a] text-xs font-bold uppercase italic tracking-wider transition-colors"
                >
                  VOIR LA COLLECTION &gt;
                </button>
              </div>
            ) : (
              items.map((item, index) => (
                <div key={`${item.product.id}-${item.size}-${index}`} className="py-4 flex gap-4">
                  {/* Thumbnail */}
                  <img
                    src={item.product.frontImage}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover bg-[#d5d7d1] border border-[#1c1d21]/15 shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-extrabold uppercase tracking-tight leading-snug line-clamp-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-[#1c1d21]/40 hover:text-red-700 transition-colors p-0.5"
                          title="Supprimer l'article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] font-semibold text-[#023e8a] uppercase mt-0.5">
                        Taille : {item.size}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#1c1d21]/20 bg-white">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-xs font-bold hover:bg-neutral-100"
                        >
                          -
                        </button>
                        <span className="w-7 text-center text-xs font-bold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-xs font-bold hover:bg-neutral-100"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-black tabular-nums text-[#1c1d21]">
                        {item.product.price * item.quantity} TND
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#1c1d21]/20 bg-[#d9dad6] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#1c1d21]/75">
                  <span>Sous-total</span>
                  <span className="font-bold tabular-nums text-[#1c1d21]">{subtotal} TND</span>
                </div>
                <div className="flex justify-between text-[#1c1d21]/75">
                  <span>Livraison Tunisie</span>
                  <span className="font-bold tabular-nums text-[#1c1d21]">
                    {deliveryFee === 0 ? 'OFFERTE' : `${deliveryFee} TND`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black pt-2 border-t border-[#1c1d21]/15 text-[#1c1d21]">
                  <span>TOTAL ESTIMÉ</span>
                  <span className="tabular-nums text-[#023e8a]">{total} TND</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onProceedToCheckout}
                  className="w-full py-4 bg-[#023e8a] hover:bg-[#023e8a]/90 text-white font-bold tracking-widest text-xs uppercase italic transition-colors flex items-center justify-center gap-2"
                >
                  COMMANDER (PAIEMENT À LA LIVRAISON) &gt;
                </button>
              </div>

              <p className="text-[10px] text-center text-[#1c1d21]/60 font-medium">
                Paiement en espèces lors de la réception du colis partout en Tunisie.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
