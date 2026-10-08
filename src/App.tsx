import { useState, useEffect } from 'react';
import { DraftNoticeBar } from './components/DraftNoticeBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ScrollToTop } from './components/ScrollToTop';
import { RfqModal } from './components/RfqModal';
import { BrochureModal } from './components/BrochureModal';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { GalleryPage } from './pages/GalleryPage';
import { QuotePage } from './pages/QuotePage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const getInitialPath = () => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState<boolean>(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);
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

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

  const renderCurrentPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={navigateTo}
          onOpenRfq={handleOpenRfq}
          onOpenBrochure={handleOpenBrochure}
        />
      );
    }

    if (currentPath === '/products') {
      return <ProductsPage onNavigate={navigateTo} onOpenRfq={handleOpenRfq} />;
    }

    if (currentPath.startsWith('/products/')) {
      const slug = currentPath.replace('/products/', '');
      return (
        <ProductDetailPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenRfq={handleOpenRfq}
          onOpenBrochure={handleOpenBrochure}
        />
      );
    }

    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigateTo} onOpenRfq={handleOpenRfq} />;
    }

    if (currentPath === '/certificates' || currentPath === '/quality') {
      return <CertificatesPage onNavigate={navigateTo} onOpenRfq={handleOpenRfq} />;
    }

    if (currentPath === '/gallery') {
      return <GalleryPage onNavigate={navigateTo} onOpenRfq={handleOpenRfq} />;
    }

    if (currentPath === '/blog') {
      // Blog / Market Insights route
      return <AboutPage onNavigate={navigateTo} onOpenRfq={handleOpenRfq} />;
    }

    if (currentPath === '/export') {
      return <ProductsPage onNavigate={navigateTo} onOpenRfq={handleOpenRfq} />;
    }

    if (currentPath === '/quote' || currentPath === '/contact') {
      return <QuotePage initialProduct={selectedProduct} onNavigate={navigateTo} />;
    }

    if (currentPath === '/privacy') {
      return <LegalPage type="privacy" onNavigate={navigateTo} />;
    }

    if (currentPath === '/terms') {
      return <LegalPage type="terms" onNavigate={navigateTo} />;
    }

    return <NotFoundPage onNavigate={navigateTo} />;
  };

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--ivory)' }}>
      {/* 0. Presentation Draft Bar (Strictly ONLY this bar at the top) */}
      <DraftNoticeBar />

      {/* 1. Global Sticky Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenRfq={handleOpenRfq}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* 2. Main Page Content */}
      <div style={{ flexGrow: 1 }}>
        {renderCurrentPage()}
      </div>

      {/* 3. Global Dark Navy Footer */}
      <Footer onNavigate={navigateTo} />

      {/* 4. Floating Interactive Actions */}
      <ScrollToTop />
      <WhatsAppFloating />

      {/* 5. Quick RFQ Modal */}
      <RfqModal
        isOpen={isRfqModalOpen}
        onClose={() => setIsRfqModalOpen(false)}
        initialProduct={selectedProduct}
      />

      {/* 6. Company Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onOpenRfq={handleOpenRfq}
      />
    </div>
  );
}

export default App;
