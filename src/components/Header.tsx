import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#e0e1dd] border-b border-[#1c1d21]/15 transition-colors">
      {/* 1. Fine Announcement Bar */}
      <div className="w-full bg-[#1c1d21] text-[#e0e1dd] text-xs py-2 px-4 text-center font-medium tracking-wide">
        <span>Livraison partout en Tunisie · Paiement à la livraison</span>
      </div>

      {/* 2. Minimal Sticky Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group flex items-baseline focus-visible:outline-2 focus-visible:outline-[#023e8a] text-left"
          aria-label="Accueil VESA"
        >
          <span className="text-2xl sm:text-3xl font-black tracking-tighter text-[#023e8a] lowercase">
            vesa
          </span>
          <span className="text-xs font-semibold text-[#023e8a] ml-0.5 relative -top-2">
            ®
          </span>
        </button>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-widest text-[#1c1d21]">
          <button
            onClick={() => handleNavClick('shop')}
            className="hover:text-[#023e8a] transition-colors py-1 uppercase"
          >
            SHOP
          </button>
          <button
            onClick={() => handleNavClick('collections')}
            className="hover:text-[#023e8a] transition-colors py-1 uppercase"
          >
            COLLECTIONS
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-[#023e8a] transition-colors py-1 uppercase"
          >
            À PROPOS
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-[#023e8a] transition-colors py-1 uppercase"
          >
            CONTACT
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#1c1d21] hover:text-[#023e8a] transition-colors focus-visible:outline-2 focus-visible:outline-[#023e8a]"
            aria-label="Rechercher un produit"
          >
            <Search className="w-5 h-5" strokeWidth={1.75} />
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#1c1d21] hover:text-[#023e8a] transition-colors focus-visible:outline-2 focus-visible:outline-[#023e8a]"
            aria-label={`Panier (${cartCount} articles)`}
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.75} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#023e8a] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile burger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1c1d21] hover:text-[#023e8a] transition-colors"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#e0e1dd] border-b border-[#1c1d21]/20 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col space-y-4 text-sm font-bold tracking-widest text-[#1c1d21]">
            <button
              onClick={() => handleNavClick('shop')}
              className="text-left py-2 border-b border-[#1c1d21]/10 hover:text-[#023e8a] uppercase"
            >
              SHOP
            </button>
            <button
              onClick={() => handleNavClick('collections')}
              className="text-left py-2 border-b border-[#1c1d21]/10 hover:text-[#023e8a] uppercase"
            >
              COLLECTIONS
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 border-b border-[#1c1d21]/10 hover:text-[#023e8a] uppercase"
            >
              À PROPOS
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 border-b border-[#1c1d21]/10 hover:text-[#023e8a] uppercase"
            >
              CONTACT
            </button>
            <div className="pt-2 flex items-center justify-between text-xs text-[#1c1d21]/70">
              <span>Instagram : @vesa.tn</span>
              <span className="text-[#023e8a] font-semibold">Tunis, TN</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
