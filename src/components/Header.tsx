import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  Package,
  CircleDot,
  Layers,
  Sparkles,
  Apple,
  Carrot
} from 'lucide-react';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
  onOpenRfq?: (initialProduct?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath = '/',
  onNavigate = () => {},
  onOpenRfq = () => {},
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const productsList = [
    {
      name: 'Pomegranates',
      path: '/products/pomegranates',
      desc: 'Bhagwa variety fresh whole pomegranates',
      icon: Sparkles,
    },
    {
      name: 'Onions',
      path: '/products/onions',
      desc: 'Fresh red and white onions by container',
      icon: CircleDot,
    },
    {
      name: 'Rice',
      path: '/products/rice',
      desc: 'Traditional Basmati and non-Basmati grades',
      icon: Layers,
    },
    {
      name: 'Spices',
      path: '/products/spices',
      desc: 'Export-grade whole and ground Indian spices',
      icon: Package,
    },
    {
      name: 'Fresh fruits',
      path: '/products/fresh-fruits',
      desc: 'Table grapes, bananas and seasonal fruits',
      icon: Apple,
    },
    {
      name: 'Fresh vegetables',
      path: '/products/fresh-vegetables',
      desc: 'Cold-chain green and root vegetables',
      icon: Carrot,
    },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/products' && currentPath.startsWith('/products')) return true;
    return currentPath === path;
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo Left */}
        <button
          type="button"
          onClick={() => handleLinkClick('/')}
          className="header-logo-link"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          aria-label="Vasudha Freshline Exports LLP Home"
        >
          <Logo variant="default" width={220} />
        </button>

        {/* Desktop Navigation: Products (dropdown), About, Certificates, Gallery, FAQs, Contact */}
        <nav className="header-nav" aria-label="Main Navigation">
          {/* Products Dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              type="button"
              className={`header-nav-link ${currentPath.startsWith('/products') ? 'active' : ''}`}
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              aria-expanded={productsDropdownOpen}
              aria-haspopup="true"
            >
              <span>Products</span>
              <ChevronDown
                size={14}
                style={{
                  transition: 'transform 0.2s ease',
                  transform: productsDropdownOpen ? 'rotate(180deg)' : 'none',
                }}
              />
            </button>

            {productsDropdownOpen && (
              <div className="products-dropdown-menu" role="menu">
                {productsList.map((prod) => {
                  const Icon = prod.icon;
                  return (
                    <button
                      key={prod.name}
                      type="button"
                      className="dropdown-item"
                      role="menuitem"
                      onClick={() => handleLinkClick(prod.path)}
                    >
                      <div className="icon-circle" style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="dropdown-item-title">{prod.name}</div>
                        <div className="dropdown-item-desc">{prod.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            className={`header-nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </button>

          <button
            type="button"
            className={`header-nav-link ${isActive('/certificates') ? 'active' : ''}`}
            onClick={() => handleLinkClick('/certificates')}
          >
            Certificates
          </button>

          <button
            type="button"
            className={`header-nav-link ${isActive('/gallery') ? 'active' : ''}`}
            onClick={() => handleLinkClick('/gallery')}
          >
            Gallery
          </button>

          <button
            type="button"
            className={`header-nav-link ${isActive('/faqs') ? 'active' : ''}`}
            onClick={() => handleLinkClick('/faqs')}
          >
            FAQs
          </button>

          <button
            type="button"
            className={`header-nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => handleLinkClick('/contact')}
          >
            Contact
          </button>
        </nav>

        {/* Right: Phone (hidden on tablet/mobile) + Request a quote button */}
        <div className="header-actions">
          <a href="tel:+910000000000" className="header-phone" aria-label="Call +91 00000 00000">
            <Phone size={16} style={{ color: 'var(--olive)' }} />
            <span>+91 00000 00000</span>
          </a>

          <button
            type="button"
            className="btn-primary"
            onClick={() => onOpenRfq()}
            style={{ display: 'none' }} /* Desktop display handled by responsive CSS */
          >
            <span>Request a quote</span>
            <ArrowRight size={16} />
          </button>

          {/* Desktop request a quote button visible on >= 768px */}
          <div className="hide-mobile">
            <button
              type="button"
              className="btn-primary"
              onClick={() => onOpenRfq()}
            >
              <span>Request a quote</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Panel */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
            <Logo variant="default" width={190} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--navy)',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={28} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--muted)',
                  marginBottom: '12px',
                }}
              >
                Products
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', paddingLeft: '8px' }}>
                {productsList.map((prod) => (
                  <button
                    key={prod.name}
                    type="button"
                    onClick={() => handleLinkClick(prod.path)}
                    style={{
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: 'var(--navy)',
                      cursor: 'pointer',
                      padding: '8px 0',
                    }}
                  >
                    {prod.name}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--line)', margin: '8px 0' }} />

            <button
              type="button"
              onClick={() => handleLinkClick('/about')}
              style={{ background: 'none', border: 'none', textAlign: 'left', fontSize: '18px', fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }}
            >
              About
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('/certificates')}
              style={{ background: 'none', border: 'none', textAlign: 'left', fontSize: '18px', fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }}
            >
              Certificates
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('/gallery')}
              style={{ background: 'none', border: 'none', textAlign: 'left', fontSize: '18px', fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }}
            >
              Gallery
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('/faqs')}
              style={{ background: 'none', border: 'none', textAlign: 'left', fontSize: '18px', fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }}
            >
              FAQs
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('/contact')}
              style={{ background: 'none', border: 'none', textAlign: 'left', fontSize: '18px', fontWeight: 700, color: 'var(--navy)', cursor: 'pointer' }}
            >
              Contact
            </button>
          </div>

          <div style={{ paddingTop: '24px', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <a
              href="tel:+910000000000"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--navy)',
                textDecoration: 'none',
              }}
            >
              <Phone size={18} style={{ color: 'var(--olive)' }} />
              <span>+91 00000 00000</span>
            </a>

            <button
              type="button"
              className="btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
            >
              <span>Request a quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
