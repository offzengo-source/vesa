import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem, OrderData } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CollectionSpotlight } from './components/CollectionSpotlight';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { InstagramGrid } from './components/InstagramGrid';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductDetail } from './components/ProductDetail';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { InfoModal } from './components/InfoModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('vesa_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [infoModalData, setInfoModalData] = useState<{ title: string; content: string } | null>(null);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('vesa_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Scroll to top when selecting product
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProduct]);

  const handleAddToCart = (product: Product, size: 'S' | 'M' | 'L' | 'XL', quantity: number = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const next = [...prevCart];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      } else {
        return [...prevCart, { product, size, quantity }];
      }
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], quantity: newQty };
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleOrderPlaced = (order: OrderData) => {
    // Clear cart upon order completion
    setCart([]);
  };

  const handleNavigate = (sectionId: string) => {
    if (selectedProduct) {
      setSelectedProduct(null);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#e0e1dd] text-[#1c1d21] font-sans selection:bg-[#023e8a] selection:text-white">
      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedProduct ? (
          /* PRODUCT DETAIL VIEW */
          <ProductDetail
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            onAddToCart={(product, size, qty) => handleAddToCart(product, size, qty)}
            onOpenSizeGuide={() => setSizeGuideOpen(true)}
          />
        ) : (
          /* ONE-PAGE HOME STOREFRONT */
          <>
            {/* 3. Hero Section */}
            <Hero
              onDiscoverClick={() => handleNavigate('shop')}
              onProductClick={(id) => {
                const found = PRODUCTS.find((p) => p.id === id);
                if (found) setSelectedProduct(found);
              }}
            />

            {/* 4. Grille Nouveautés */}
            <section id="shop" className="w-full bg-[#e0e1dd] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto space-y-8">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 border-b border-[#1c1d21]/15 pb-4">
                  <div>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#023e8a] uppercase">
                      COLLECTION DISPONIBLE
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#1c1d21]">
                      NOUVEAUTÉS · STREETWEAR 2026
                    </h2>
                  </div>
                  <div className="text-xs font-semibold text-[#1c1d21]/60 uppercase tracking-widest">
                    4 ARTICLES EN SÉRIE LIMITÉE
                  </div>
                </div>

                {/* 4-Column Grid (2 on mobile) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {PRODUCTS.map((prod) => (
                    <ProductCard
                      key={prod.id}
                      product={prod}
                      onSelect={(p) => setSelectedProduct(p)}
                      onQuickAdd={(p, size) => handleAddToCart(p, size, 1)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Section Collection mise en avant */}
            <CollectionSpotlight
              onExploreClick={() => {
                const found = PRODUCTS[0];
                if (found) setSelectedProduct(found);
              }}
            />

            {/* 6. Marquee Défilant */}
            <Marquee />

            {/* 7. Section À propos */}
            <AboutSection />

            {/* 8. Bloc Instagram @vesa.tn */}
            <InstagramGrid />

            {/* 9. Newsletter */}
            <Newsletter />
          </>
        )}
      </main>

      {/* 10. Footer Sombre */}
      <Footer
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
        onOpenInfoModal={(title, content) => setInfoModalData({ title, content })}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal (Paiement à la livraison) */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cart}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      {/* Information Modal (Livraison, Retours, CGV) */}
      <InfoModal
        isOpen={!!infoModalData}
        onClose={() => setInfoModalData(null)}
        title={infoModalData?.title || ''}
        content={infoModalData?.content || ''}
      />
    </div>
  );
}
