import { Product } from '../types';
import frontImg from '../assets/images/vesa_tshirt_front_1791658312750.jpg';
import backImg from '../assets/images/vesa_tshirt_back_1791658324631.jpg';
import bacLookbookImg from '../assets/images/vesa_bac_collection_1791658335428.jpg';
import detailImg from '../assets/images/vesa_instagram_detail_1791658346411.jpg';
import lifestyleImg from '../assets/images/vesa_instagram_lifestyle_1791658357791.jpg';

export { frontImg, backImg, bacLookbookImg, detailImg, lifestyleImg };

export const PRODUCTS: Product[] = [
  {
    id: 'vesa-come-back-tee',
    name: "T-SHIRT OVERSIZE « COME BACK »",
    subtitle: 'Capsule BAC 2026 · Édition Limitée',
    price: 69,
    frontImage: frontImg,
    backImage: backImg,
    detailImages: [
      frontImg,
      backImg,
      detailImg,
      bacLookbookImg,
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    tag: 'NOUVEAU',
    description: "Le t-shirt signature de la marque. Coupe boxy lourde et tombé impeccable pensé pour affronter la pression. Au dos, l'inscription percutante « I CAN'T DO IT » barrée d'un trait noir net, symbolisant le retour en force.",
    material: '100% Coton peigné lourd 280 g/m². Col montant 3.2 cm en bord-côte renforcé. Coutures d’épaules décalées avec surpiqûres contrastées au fil anthracite. Prélavé au silicone pour éviter tout rétrécissement.',
    delivery: 'Livraison express partout en Tunisie (24h à 48h). Frais de port : 7 TND (offert à partir de 150 TND d\'achat). Paiement en espèces à la livraison. Possibilité d\'échange de taille sous 7 jours ouvrés.',
    inStock: true,
  },
  {
    id: 'vesa-session-controle-tee',
    name: "T-SHIRT OVERSIZE « CONTRÔLE »",
    subtitle: 'Capsule Résilience · Blanc Brut',
    price: 75,
    frontImage: frontImg,
    backImage: backImg,
    detailImages: [
      frontImg,
      backImg,
      lifestyleImg,
      detailImg,
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    tag: 'BEST-SELLER',
    description: "Dédié à ceux que l'on n'attendait pas. La session de contrôle n'est qu'un virage avant la trajectoire finale. Coupe décontractée oversize, épaules tombantes naturelles et grammage ultra-dense.",
    material: '100% Coton peigné 290 g/m² filé en Tunisie. Teinture minérale certifiée sans produits toxiques. Sérigraphie haute résistance au lavage.',
    delivery: 'Livraison express partout en Tunisie (24h à 48h). Frais : 7 TND. Paiement à la réception.',
    inStock: true,
  },
  {
    id: 'vesa-monogram-heavy-tee',
    name: "T-SHIRT HEAVYWEIGHT « B. LOGO »",
    subtitle: 'Monogramme Géométrique Minimaliste',
    price: 69,
    frontImage: frontImg,
    backImage: backImg,
    detailImages: [
      frontImg,
      backImg,
      detailImg,
      lifestyleImg,
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    tag: 'ESSENTIEL',
    description: "L'épure brute du streetwear tunisien. Broderie ton sur ton et lettrage compact. Conçu pour durer des années sans perdre son maintien rigide.",
    material: '100% Coton épais haute densité 280 g/m². Finition peignée douce au toucher, col rond resserré doublé.',
    delivery: 'Livraison 24h à 48h dans tous les gouvernorats tunisiens. Paiement cash à la livraison.',
    inStock: true,
  },
  {
    id: 'vesa-boxy-craft-tee',
    name: "T-SHIRT OVERSIZE « PERSÉVÉRANCE »",
    subtitle: 'Série Limitée Atelier Tunis',
    price: 79,
    frontImage: frontImg,
    backImage: backImg,
    detailImages: [
      frontImg,
      backImg,
      bacLookbookImg,
      detailImg,
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    tag: 'ÉDITION LIMITÉE',
    description: "Confection artisanale dans notre atelier partenaire en Tunisie. Finition premium avec coutures plates décoratives et étiquette tissée signature VESA en bleu royal.",
    material: '100% Coton naturel 280 g/m². Assemblage double aiguille, résistance mécanique testée.',
    delivery: 'Expédition sous 24h avec suivi par SMS. Paiement à la livraison.',
    inStock: true,
  },
];

export const TUNISIAN_GOVERNORATES = [
  'Ariana',
  'Béja',
  'Ben Arous',
  'Bizerte',
  'Gabès',
  'Gafsa',
  'Jendouba',
  'Kairouan',
  'Kasserine',
  'Kébili',
  'Le Kef',
  'Mahdia',
  'Manouba',
  'Médenine',
  'Monastir',
  'Nabeul',
  'Sfax',
  'Sidi Bouzid',
  'Siliana',
  'Sousse',
  'Tataouine',
  'Tozeur',
  'Tunis',
  'Zaghouan',
];

export const SIZE_CHART = [
  { size: 'S', chest: '58 cm', length: '71 cm', shoulder: '54 cm' },
  { size: 'M', chest: '61 cm', length: '74 cm', shoulder: '57 cm' },
  { size: 'L', chest: '64 cm', length: '77 cm', shoulder: '60 cm' },
  { size: 'XL', chest: '67 cm', length: '80 cm', shoulder: '63 cm' },
];
