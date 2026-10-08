import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Menu, X, ChevronDown, Download, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/images';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenRfq: (initialProduct?: string) => void;
  onOpenBrochure?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenRfq,
  onOpenBrochure,
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

  const productCategories = [
    { name: 'Pomegranates', path: '/products/pomegranates', sub: 'Calibrated export cartons', img: IMAGES.pomegranates },
    { name: 'Onions', path: '/products/onions', sub: 'Red & white mesh bags', img: IMAGES.onions },
    { name: 'Rice', path: '/products/rice', sub: 'Basmati & non-basmati FCL', img: IMAGES.rice },
    { name: 'Spices', path: '/products/spices', sub: 'Whole & ground export spice', img: IMAGES.spices },
    { name: 'Fresh fruits', path: '/products/fresh-fruits', sub: 'Table grapes, bananas', img: IMAGES.fruits },
    { name: 'Fresh vegetables', path: '/products/fresh-vegetables', sub: 'Cold-chain green veg', img: IMAGES.vegetables },
  ];

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products', hasDropdown: true },
    { label: 'Certificates', path: '/certificates' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
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
    <header
      style={{
        backgroundColor: isScrolled ? 'var(--white)' : 'var(--ivory)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: isScrolled ? '68px' : '84px',
        borderBottom: isScrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'height 240ms cubic-bezier(0.22, 1, 0.36, 1), background-color 240ms ease, border-color 240ms ease',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Logo Left */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => handleLinkClick('/')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Vasudha Freshline Exports LLP Home"
          >
            <div className="header-logo-desktop">
              <Logo variant="default" width={220} />
            </div>
            <div className="header-logo-mobile" style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
              <Logo variant="swoosh" width={34} />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '17px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: 'var(--ink)',
                }}
              >
                Vasudha
              </span>
            </div>
          </button>
        </div>

        {/* Center Nav: About, Products, Certificates, Gallery, Blog, Contact */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.path);

            if (link.hasDropdown) {
              return (
                <div key={link.path} ref={dropdownRef} style={{ position: 'relative' }}>
                  <button
                    type="button"
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '8px 0',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: active ? 'var(--ink)' : 'var(--charcoal)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      borderBottom: active ? '2px solid var(--olive)' : '2px solid transparent',
                      paddingBottom: '2px',
                    }}
                    aria-expanded={productsDropdownOpen}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={14}
                      style={{
                        transform: productsDropdownOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 180ms ease',
                        color: 'var(--muted)',
                      }}
                    />
                  </button>

                  {/* Dropdown with 6 products + thumbnails */}
                  {productsDropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-40px',
                        width: '320px',
                        backgroundColor: 'var(--white)',
                        border: '1px solid var(--line)',
                        borderRadius: 'var(--radius-card)',
                        boxShadow: 'var(--shadow-floating)',
                        padding: '12px',
                        marginTop: '12px',
                        zIndex: 100,
                      }}
                    >
                      <div
                        style={{
                          padding: '6px 10px 10px 10px',
                          borderBottom: '1px solid var(--line)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '6px',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--muted)',
                          }}
                        >
                          6 Export Categories
                        </span>
                        <button
                          type="button"
                          onClick={() => handleLinkClick('/products')}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--olive-deep)',
                            fontSize: '12px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            padding: 0,
                          }}
                        >
                          All &rarr;
                        </button>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {productCategories.map((item) => (
                          <button
                            key={item.path}
                            type="button"
                            onClick={() => handleLinkClick(item.path)}
                            style={{
                              width: '100%',
                              textAlign: 'left',
                              background: 'none',
                              border: 'none',
                              padding: '8px 10px',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              transition: 'background-color 150ms ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--bone)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <img
                              src={item.img}
                              alt={item.name}
                              style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '6px',
                                objectFit: 'cover',
                                flexShrink: 0,
                              }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>
                                {item.name}
                              </span>
                              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                                {item.sub}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.path}
                type="button"
                onClick={() => handleLinkClick(link.path)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 0',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: active ? 'var(--ink)' : 'var(--charcoal)',
                  borderBottom: active ? '2px solid var(--olive)' : '2px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Ghost "Brochure" + Primary "Request a quote" */}
        <div
          className="desktop-actions"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <button
            type="button"
            className="btn-ghost-brochure"
            onClick={onOpenBrochure}
            title="Download company profile"
          >
            <Download size={15} />
            <span>Brochure</span>
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={() => onOpenRfq()}
            style={{ height: '48px', padding: '0 22px', fontSize: '14px' }}
          >
            <span>Request a quote</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="mobile-toggle" style={{ display: 'flex', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--ink)',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (full screen panel) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: isScrolled ? '68px' : '84px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--ivory)',
            borderTop: '1px solid var(--line)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 99,
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span className="eyebrow" style={{ marginBottom: '12px' }}>
              Navigation
            </span>

            {navLinks.map((link) => (
              <button
                key={link.path}
                type="button"
                onClick={() => handleLinkClick(link.path)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  padding: '12px 0',
                  fontSize: '18px',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--ink)',
                  borderBottom: '1px solid var(--line)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontSize: '14px', color: 'var(--muted)' }}>&rarr;</span>
              </button>
            ))}
          </div>

          <div style={{ paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              type="button"
              className="btn-ghost-brochure"
              style={{ width: '100%', height: '48px' }}
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBrochure) onOpenBrochure();
              }}
            >
              <Download size={16} />
              <span>Download Brochure</span>
            </button>
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

      {/* Responsive media query hooks */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 480px) {
          .header-logo-desktop { display: none !important; }
          .header-logo-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
