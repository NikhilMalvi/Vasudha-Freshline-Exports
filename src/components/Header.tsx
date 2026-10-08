import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenRfq: (initialProduct?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenRfq,
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

  // Close dropdown on outside click
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
    { name: 'Pomegranates', path: '/products/pomegranates', sub: 'Calibrated export cartons' },
    { name: 'Onions', path: '/products/onions', sub: 'Red & white mesh bags' },
    { name: 'Rice', path: '/products/rice', sub: 'Basmati & non-basmati FCL' },
    { name: 'Spices', path: '/products/spices', sub: 'Whole & ground export spice' },
    { name: 'Fresh fruits', path: '/products/fresh-fruits', sub: 'Table grapes, bananas' },
    { name: 'Fresh vegetables', path: '/products/fresh-vegetables', sub: 'Temperature-controlled green veg' },
  ];

  const isActive = (path: string) => {
    if (path === '/products' && currentPath.startsWith('/products')) return true;
    return currentPath === path;
  };

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products', hasDropdown: true },
    { label: 'Certificates', path: '/certificates' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <header
      style={{
        backgroundColor: '#F7F5EF',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: isScrolled ? '1px solid #D9D5C8' : '1px solid transparent',
        transition: 'border-color 200ms ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Brand Logo (Original for light background) */}
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
              <Logo variant="swoosh" width={32} />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '17px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: '#16161A',
                }}
              >
                Vasudha
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
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
                      color: active ? '#16161A' : '#353535',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      borderBottom: active ? '2px solid #687036' : '2px solid transparent',
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
                        color: '#5F5D55',
                      }}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {productsDropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-20px',
                        width: '280px',
                        backgroundColor: '#F7F5EF',
                        border: '1px solid #D9D5C8',
                        borderRadius: 'var(--radius)',
                        padding: '8px 0',
                        marginTop: '8px',
                        zIndex: 100,
                      }}
                    >
                      <div
                        style={{
                          padding: '8px 16px',
                          borderBottom: '1px solid #D9D5C8',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#5F5D55',
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
                            color: '#687036',
                            fontSize: '12px',
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            padding: 0,
                          }}
                        >
                          All &rarr;
                        </button>
                      </div>

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
                            padding: '10px 16px',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2px',
                            transition: 'background-color 150ms ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#ECE8DC';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <span style={{ fontSize: '14px', fontWeight: 500, color: '#16161A' }}>
                            {item.name}
                          </span>
                          <span style={{ fontSize: '12px', color: '#5F5D55' }}>
                            {item.sub}
                          </span>
                        </button>
                      ))}
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
                  color: active ? '#16161A' : '#353535',
                  borderBottom: active ? '2px solid #687036' : '2px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Desktop: Request a Quote Button */}
        <div
          className="desktop-actions"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <button
            type="button"
            className="btn-primary"
            onClick={() => onOpenRfq()}
            style={{ height: '44px', padding: '0 20px', fontSize: '14px' }}
          >
            Request a quote
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
              color: '#16161A',
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '76px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#F7F5EF',
            borderTop: '1px solid #D9D5C8',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 99,
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#5F5D55',
                marginBottom: '8px',
                fontWeight: 600,
              }}
            >
              Navigation
            </span>

            <button
              type="button"
              onClick={() => handleLinkClick('/about')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '12px 0',
                fontSize: '18px',
                fontFamily: 'var(--font-serif)',
                color: '#16161A',
                borderBottom: '1px solid #D9D5C8',
                cursor: 'pointer',
              }}
            >
              About
            </button>

            {/* Products Sub-list */}
            <div style={{ borderBottom: '1px solid #D9D5C8', paddingBottom: '12px' }}>
              <button
                type="button"
                onClick={() => handleLinkClick('/products')}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  padding: '12px 0 6px 0',
                  fontSize: '18px',
                  fontFamily: 'var(--font-serif)',
                  color: '#16161A',
                  cursor: 'pointer',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>Products</span>
                <span style={{ fontSize: '13px', color: '#687036', fontFamily: 'var(--font-sans)' }}>View all &rarr;</span>
              </button>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', paddingTop: '8px' }}>
                {productCategories.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleLinkClick(item.path)}
                    style={{
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      fontSize: '14px',
                      color: '#353535',
                      padding: '4px 0',
                      cursor: 'pointer',
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleLinkClick('/certificates')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '12px 0',
                fontSize: '18px',
                fontFamily: 'var(--font-serif)',
                color: '#16161A',
                borderBottom: '1px solid #D9D5C8',
                cursor: 'pointer',
              }}
            >
              Certificates
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('/gallery')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '12px 0',
                fontSize: '18px',
                fontFamily: 'var(--font-serif)',
                color: '#16161A',
                borderBottom: '1px solid #D9D5C8',
                cursor: 'pointer',
              }}
            >
              Gallery
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('/contact')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '12px 0',
                fontSize: '18px',
                fontFamily: 'var(--font-serif)',
                color: '#16161A',
                borderBottom: '1px solid #D9D5C8',
                cursor: 'pointer',
              }}
            >
              Contact
            </button>
          </div>

          <div style={{ paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              type="button"
              className="btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
            >
              Request a quote
            </button>
          </div>
        </div>
      )}

      {/* Media Queries for Desktop vs Mobile Header */}
      <style>{`
        @media (min-width: 900px) {
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
