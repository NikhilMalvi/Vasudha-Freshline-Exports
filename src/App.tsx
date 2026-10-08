import { useState, useEffect } from 'react';
import { NoticeBar } from './components/NoticeBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ScrollToTop } from './components/ScrollToTop';
import { RfqModal } from './components/RfqModal';

// Pages
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

  const renderCurrentPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={navigateTo}
          onOpenRfq={handleOpenRfq}
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
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F7F5EF' }}>
      {/* 1. Global Notice Bar */}
      <NoticeBar onNavigateToQuote={() => navigateTo('/contact')} />

      {/* 2. Global Sticky Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenRfq={handleOpenRfq}
      />

      {/* 3. Main Page Content */}
      <div style={{ flexGrow: 1 }}>
        {renderCurrentPage()}
      </div>

      {/* 4. Global Dark Navy Footer */}
      <Footer onNavigate={navigateTo} />

      {/* 5. Floating Interactive Actions */}
      <ScrollToTop />
      <WhatsAppFloating />

      {/* 6. Quick RFQ Modal */}
      <RfqModal
        isOpen={isRfqModalOpen}
        onClose={() => setIsRfqModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </div>
  );
}

export default App;
