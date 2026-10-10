import React from 'react';

interface FooterProps {
  onOpenSizeGuide: () => void;
  onOpenInfoModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSizeGuide,
  onOpenInfoModal,
}) => {
  const openLivraison = () => {
    onOpenInfoModal(
      'Livraison & Délais en Tunisie',
      `Toutes nos commandes sont expédiées sous 24h à 48h ouvrées vers l'ensemble des 24 gouvernorats tunisiens (Grand Tunis, Sousse, Sfax, Bizerte, Nabeul, etc.).
      
Frais de livraison : 7 TND forfaitaires.
Livraison offerte dès 150 TND d'achat.
Paiement : En espèces directement auprès du livreur à la réception de votre colis. Vous pouvez vérifier l'état du colis avant encaissement.`
    );
  };

  const openRetours = () => {
    onOpenInfoModal(
      'Échanges & Retours',
      `Vous avez le droit de changer d'avis ou d'échanger votre taille dans un délai de 7 jours après la réception.
      
Conditions : L'article ne doit avoir été ni porté ni lavé, et doit être renvoyé dans son emballage d'origine avec l'étiquette VESA intacte.
Pour initier un échange rapide, contactez notre équipe via Instagram @vesa.tn ou par WhatsApp avec votre numéro de commande.`
    );
  };

  const openCGV = () => {
    onOpenInfoModal(
      'Conditions Générales de Vente (CGV)',
      `VESA est une marque indépendante enregistrée en Tunisie.
      
1. Commandes : Toute validation de commande via notre formulaire vaut engagement d'achat ferme avec paiement à la livraison.
2. Tarifs : Les prix indiqués sur le site sont en Dinars Tunisiens (TND) toutes taxes comprises.
3. Données personnelles : Vos coordonnées (nom, numéro de téléphone, adresse) sont uniquement utilisées pour l'acheminement de votre colis par le transporteur.`
    );
  };

  return (
    <footer id="contact" className="w-full bg-[#1c1d21] text-[#e0e1dd] pt-16 pb-12 border-t border-[#e0e1dd]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#e0e1dd]/15">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-baseline">
              <span className="text-3xl font-black tracking-tighter text-[#023e8a] lowercase">
                vesa
              </span>
              <span className="text-xs font-semibold text-[#023e8a] ml-0.5 relative -top-2">
                ®
              </span>
            </div>
            <p className="text-xs text-[#e0e1dd]/70 leading-relaxed">
              Streetwear tunisien minimaliste, modeste et résistant. Pensé et fabriqué en Tunisie pour ceux qui transforment la pression en élan.
            </p>
            <div className="text-xs font-mono text-[#023e8a] tracking-wider">
              TUNIS · STREETWEAR 280 GSM
            </div>
          </div>

          {/* Col 2: Service Client & Aide */}
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#023e8a] uppercase block">
              SERVICE CLIENT
            </span>
            <ul className="space-y-2 text-xs font-medium tracking-wide">
              <li>
                <button
                  onClick={openLivraison}
                  className="hover:text-[#023e8a] transition-colors text-left uppercase"
                >
                  Livraison &amp; Délais
                </button>
              </li>
              <li>
                <button
                  onClick={openRetours}
                  className="hover:text-[#023e8a] transition-colors text-left uppercase"
                >
                  Retours &amp; Échanges
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSizeGuide}
                  className="hover:text-[#023e8a] transition-colors text-left uppercase"
                >
                  Guide des tailles
                </button>
              </li>
              <li>
                <button
                  onClick={openCGV}
                  className="hover:text-[#023e8a] transition-colors text-left uppercase"
                >
                  Conditions Générales (CGV)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Réseaux Sociaux */}
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#023e8a] uppercase block">
              COMMUNAUTÉ
            </span>
            <ul className="space-y-2 text-xs font-medium tracking-wide">
              <li>
                <a
                  href="https://instagram.com/vesa.tn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#023e8a] transition-colors block uppercase"
                >
                  Instagram : @vesa.tn
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@vesa.tn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#023e8a] transition-colors block uppercase"
                >
                  TikTok : @vesa.tn
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@vesa.tn"
                  className="hover:text-[#023e8a] transition-colors block uppercase"
                >
                  Email : contact@vesa.tn
                </a>
              </li>
              <li>
                <span className="text-[#e0e1dd]/50 uppercase">
                  Service WhatsApp : +216 29 111 222
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Paiement & Sécurité */}
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#023e8a] uppercase block">
              CONFIANCE
            </span>
            <div className="bg-[#e0e1dd]/5 p-4 border border-[#e0e1dd]/10 space-y-2">
              <p className="text-xs font-bold text-[#e0e1dd] uppercase">
                PAIEMENT À LA LIVRAISON (COD)
              </p>
              <p className="text-[11px] text-[#e0e1dd]/70 leading-relaxed">
                Réglez en liquide à la réception partout sur le territoire tunisien. Zéro risque, transparence totale.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#e0e1dd]/50 tracking-wider">
          <p>© {new Date().getFullYear()} VESA®. TOUS DROITS RÉSERVÉS.</p>
          <p className="uppercase font-semibold text-[#023e8a]">
            MADE WITH CARE IN TUNISIA
          </p>
        </div>
      </div>
    </footer>
  );
};
