import React, { useState } from 'react';
import { CartItem, OrderData } from '../types';
import { TUNISIAN_GOVERNORATES } from '../data/products';
import { X, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderPlaced: (order: OrderData) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderPlaced,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [governorate, setGovernorate] = useState('Tunis');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [completedOrder, setCompletedOrder] = useState<OrderData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = subtotal >= 150 || items.length === 0 ? 0 : 7;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address || !city) return;

    setIsSubmitting(true);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const order: OrderData = {
      orderId: `VESA-TN-${randomSuffix}`,
      fullName,
      phone,
      governorate,
      city,
      address,
      notes,
      items: [...items],
      subtotal,
      deliveryFee,
      total,
      createdAt: new Date().toLocaleDateString('fr-TN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setCompletedOrder(order);
      onOrderPlaced(order);
    }, 400);
  };

  const handleFinish = () => {
    setCompletedOrder(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1c1d21]/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#e0e1dd] text-[#1c1d21] w-full max-w-2xl border border-[#1c1d21]/20 shadow-2xl relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:text-[#023e8a] transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {completedOrder ? (
          /* SUCCESS ORDER SCREEN */
          <div className="p-6 sm:p-10 space-y-6 animate-fadeIn">
            <div className="text-center space-y-2">
              <CheckCircle2 className="w-12 h-12 text-[#023e8a] mx-auto" />
              <span className="text-xs font-bold tracking-widest text-[#023e8a] uppercase">
                COMMANDE ENREGISTRÉE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                MERCI POUR VOTRE COMMANDE !
              </h2>
              <p className="text-xs text-[#1c1d21]/70 max-w-md mx-auto">
                Votre colis est en cours de préparation dans notre atelier. Notre livreur vous contactera par téléphone avant la livraison.
              </p>
            </div>

            {/* Order Card */}
            <div className="bg-white p-6 border border-[#1c1d21]/15 space-y-4">
              <div className="flex justify-between items-center border-b border-[#1c1d21]/10 pb-3 text-xs">
                <span className="font-bold text-[#1c1d21]/60 uppercase">RÉFÉRENCE COMMANDE</span>
                <span className="font-mono font-bold text-[#023e8a]">{completedOrder.orderId}</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-[#1c1d21]/75">
                  <span>Destinataire :</span>
                  <span className="font-bold text-[#1c1d21]">{completedOrder.fullName}</span>
                </div>
                <div className="flex justify-between text-[#1c1d21]/75">
                  <span>Téléphone :</span>
                  <span className="font-bold text-[#1c1d21]">{completedOrder.phone}</span>
                </div>
                <div className="flex justify-between text-[#1c1d21]/75">
                  <span>Adresse :</span>
                  <span className="font-bold text-[#1c1d21] text-right">
                    {completedOrder.address}, {completedOrder.city} ({completedOrder.governorate})
                  </span>
                </div>
                <div className="flex justify-between text-[#1c1d21]/75">
                  <span>Mode de règlement :</span>
                  <span className="font-bold text-[#023e8a]">Paiement à la livraison (Espèces)</span>
                </div>
              </div>

              {/* Items summary */}
              <div className="border-t border-[#1c1d21]/10 pt-3 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1c1d21]/60 block">
                  ARTICLES COMMANDÉS :
                </span>
                {completedOrder.items.map((it, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
                    <span>
                      {it.quantity}x {it.product.name} ({it.size})
                    </span>
                    <span className="font-bold tabular-nums">
                      {it.product.price * it.quantity} TND
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1c1d21]/15 pt-3 flex justify-between items-baseline font-black text-base text-[#1c1d21]">
                <span>TOTAL À PAYER AU LIVREUR :</span>
                <span className="text-[#023e8a] tabular-nums text-lg">
                  {completedOrder.total} TND
                </span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-4 bg-[#1c1d21] hover:bg-[#023e8a] text-white font-bold tracking-widest text-xs uppercase italic transition-colors"
            >
              RETOURNER À L'ACCUEIL &gt;
            </button>
          </div>
        ) : (
          /* CHECKOUT FORM */
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#023e8a] uppercase block">
                PAIEMENT SÉCURISÉ À LA LIVRAISON
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-[#1c1d21]">
                FINALISER LA COMMANDE
              </h2>
              <p className="text-xs text-[#1c1d21]/70 mt-1">
                Aucune carte bancaire requise. Vous réglez directement le livreur à la réception de votre colis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1c1d21] mb-1">
                    NOM ET PRÉNOM *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex: Yassine Ben Ali"
                    className="w-full px-3 py-2.5 bg-white border border-[#1c1d21]/30 text-xs text-[#1c1d21] focus:outline-none focus:border-[#023e8a]"
                  />
                </div>

                {/* Phone number */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1c1d21] mb-1">
                    NUMÉRO DE TÉLÉPHONE (TUNISIE) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: 29 123 456"
                    className="w-full px-3 py-2.5 bg-white border border-[#1c1d21]/30 text-xs text-[#1c1d21] focus:outline-none focus:border-[#023e8a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Governorate */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1c1d21] mb-1">
                    GOUVERNORAT *
                  </label>
                  <select
                    value={governorate}
                    onChange={(e) => setGovernorate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#1c1d21]/30 text-xs text-[#1c1d21] focus:outline-none focus:border-[#023e8a]"
                  >
                    {TUNISIAN_GOVERNORATES.map((gov) => (
                      <option key={gov} value={gov}>
                        {gov}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1c1d21] mb-1">
                    VILLE / DÉLÉGATION *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: Marsa, Ennasr, Menzah..."
                    className="w-full px-3 py-2.5 bg-white border border-[#1c1d21]/30 text-xs text-[#1c1d21] focus:outline-none focus:border-[#023e8a]"
                  />
                </div>
              </div>

              {/* Exact Address */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1c1d21] mb-1">
                  ADRESSE DE LIVRAISON COMPLÈTE *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Rue, numéro de porte, étage, point de repère..."
                  className="w-full px-3 py-2.5 bg-white border border-[#1c1d21]/30 text-xs text-[#1c1d21] focus:outline-none focus:border-[#023e8a]"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1c1d21] mb-1">
                  INSTRUCTIONS POUR LE LIVREUR (OPTIONNEL)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Appeler avant d'arriver, livraison après 14h..."
                  className="w-full px-3 py-2.5 bg-white border border-[#1c1d21]/30 text-xs text-[#1c1d21] focus:outline-none focus:border-[#023e8a]"
                />
              </div>

              {/* Payment details box */}
              <div className="p-3 bg-[#d5d7d1] border border-[#1c1d21]/15 flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#023e8a] shrink-0" />
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-[#1c1d21] block">PAIEMENT CASH À LA LIVRAISON</span>
                  <span className="text-[#1c1d21]/70">
                    Sous-total : {subtotal} TND · Livraison : {deliveryFee === 0 ? '0 TND (Offerte)' : `${deliveryFee} TND`} ·{' '}
                    <strong className="text-[#023e8a]">Total : {total} TND</strong>
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#023e8a] hover:bg-[#023e8a]/90 text-white font-bold tracking-widest text-xs sm:text-sm uppercase italic transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'VALIDATION...' : 'CONFIRMER LA COMMANDE &gt;'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
