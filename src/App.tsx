import { useState, useEffect } from 'react';
import { DraftNoticeBar } from './components/DraftNoticeBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { RfqModal } from './components/RfqModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { GalleryPage } from './pages/GalleryPage';
import { FaqsPage } from './pages/FaqsPage';
import { QuotePage } from './pages/QuotePage';
import { CalculatorPage } from './pages/CalculatorPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const getInitialPath = () => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('Pomegranates');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setCurrentPath(hash || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRfq = (product?: string) => {
    if (product) {
      setSelectedProduct(product);
    }
    setIsRfqModalOpen(true);
  };

  const renderContent = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={navigateTo}
          onOpenRfq={handleOpenRfq}
        />
      );
    }

    if (currentPath === '/products') {
      return (
        <ProductsPage
          onNavigate={navigateTo}
          onOpenRfq={handleOpenRfq}
        />
      );
    }

    if (currentPath.startsWith('/products/')) {
      const slug = currentPath.replace('/products/', '');
      return (
        <ProductDetailPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenRfq={handleOpenRfq}
        />
      );
    }

    if (currentPath === '/about') {
      return (
        <AboutPage
          onNavigate={navigateTo}
          onOpenRfq={handleOpenRfq}
        />
      );
    }

    if (currentPath === '/certificates' || currentPath === '/quality') {
      return (
        <CertificatesPage
          onNavigate={navigateTo}
          onOpenRfq={handleOpenRfq}
        />
      );
    }

    if (currentPath === '/gallery') {
      return (
        <GalleryPage
          onNavigate={navigateTo}
          onOpenRfq={handleOpenRfq}
        />
      );
    }

    if (currentPath === '/faqs') {
      return (
        <FaqsPage
          onNavigate={navigateTo}
          onOpenRfq={handleOpenRfq}
        />
      );
    }

    if (currentPath === '/contact' || currentPath === '/quote') {
      return (
        <QuotePage
          initialProduct={selectedProduct}
          onNavigate={navigateTo}
        />
      );
    }

    if (currentPath === '/calculator') {
      return (
        <CalculatorPage
          onNavigate={navigateTo}
          onOpenRfq={handleOpenRfq}
        />
      );
    }

    if (currentPath === '/privacy') {
      return (
        <LegalPage
          type="privacy"
          onNavigate={navigateTo}
        />
      );
    }

    if (currentPath === '/terms' || currentPath === '/terms-of-sale') {
      return (
        <LegalPage
          type="terms"
          onNavigate={navigateTo}
        />
      );
    }

    // 404 Fallback for unmapped routes
    return (
      <NotFoundPage
        onNavigate={navigateTo}
      />
    );
  };

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--white)' }}>
      {/* 0. Top Bar: 28px draft notice */}
      <DraftNoticeBar />

      {/* 1. Shared Sticky Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenRfq={handleOpenRfq}
      />

      {/* 2. Main Page Content */}
      <div style={{ flexGrow: 1 }}>
        {renderContent()}
      </div>

      {/* 3. Shared Navy Footer */}
      <Footer onNavigate={navigateTo} />

      {/* 4. Shared Floating Actions (WhatsApp circle + Mobile sticky bar) */}
      <WhatsAppFloating onOpenRfq={handleOpenRfq} />

      {/* 5. RFQ Modal */}
      <RfqModal
        isOpen={isRfqModalOpen}
        onClose={() => setIsRfqModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </div>
  );
}

export default App;
