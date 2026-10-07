import { useState, useEffect } from 'react';
import { NoticeBar } from './components/NoticeBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ScrollToTop } from './components/ScrollToTop';
import { RfqModal } from './components/RfqModal';
import { BrochureModal } from './components/BrochureModal';
import { QuickContactDrawer } from './components/QuickContactDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { QualityPage } from './pages/QualityPage';
import { ExportPage } from './pages/ExportPage';
import { QuotePage } from './pages/QuotePage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  // Hash-based routing to work seamlessly on any static/server host
  const getInitialPath = () => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState<boolean>(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);
  const [isQuickContactOpen, setIsQuickContactOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('Pomegranates (Bhagwa)');

  // Sync route on hash changes (back/forward buttons)
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

  const handleOpenQuickContact = () => {
    setIsQuickContactOpen(true);
  };

  // Determine active view based on currentPath
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

    if (currentPath === '/quality') {
      return <QualityPage onNavigate={navigateTo} onOpenRfq={handleOpenRfq} />;
    }

    if (currentPath === '/export') {
      return <ExportPage onNavigate={navigateTo} onOpenRfq={handleOpenRfq} />;
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
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Global Dismissible Notice Bar */}
      <NoticeBar onNavigateToQuote={() => navigateTo('/quote')} />

      {/* 2. Global Sticky Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenRfq={handleOpenRfq}
        onOpenBrochure={handleOpenBrochure}
        onOpenQuickContact={handleOpenQuickContact}
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

      {/* 7. Official Export Profile & Brochure Modal (like Horizon Exim) */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onOpenRfq={handleOpenRfq}
      />

      {/* 8. Quick Contact & Direct Trade Desk Slideout Drawer (like Horizon Exim extra-wrap) */}
      <QuickContactDrawer
        isOpen={isQuickContactOpen}
        onClose={() => setIsQuickContactOpen(false)}
        onOpenRfq={handleOpenRfq}
        onOpenBrochure={handleOpenBrochure}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export default App;
