import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';
import { Menu, X, ChevronDown, Download, PhoneCall, FileText } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenRfq: (initialProduct?: string) => void;
  onOpenBrochure?: () => void;
  onOpenQuickContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenRfq,
  onOpenBrochure,
  onOpenQuickContact,
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

  const productNavItems = [
    { name: 'Pomegranates (Bhagwa)', path: '/products/pomegranates', sub: 'Calibrated export cartons' },
    { name: 'Fresh Onions (Red & White)', path: '/products/onions', sub: 'Nashik leno mesh bags' },
    { name: 'Rice (Basmati & Non-Basmati)', path: '/products/rice', sub: '20ft dry container FCL' },
    { name: 'Indian Spices', path: '/products/spices', sub: 'Cumin, Turmeric, Chilli' },
    { name: 'Fresh Seasonal Fruits', path: '/products/fresh-fruits', sub: 'Table grapes, bananas' },
    { name: 'Fresh Vegetables', path: '/products/fresh-vegetables', sub: 'Cold-chain green chillies, okra' },
  ];

  const isActive = (path: string) => {
    if (path === '/products' && currentPath.startsWith('/products')) return true;
    return currentPath === path;
  };

  const navLinks = [
    { label: 'Products', path: '/products', hasDropdown: true },
    { label: 'About', path: '/about' },
    { label: 'Quality', path: '/quality' },
    { label: 'Export', path: '/export' },
    { label: 'Contact', path: '/quote' },
  ];

  return (
    <header
      style={{
        backgroundColor: 'var(--ivory)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: isScrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'border-color 200ms ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}
      >
        {/* Left: Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => onNavigate('/')}
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
            {/* Desktop and Tablet full logo */}
            <div className="header-logo-desktop">
              <Logo variant="default" width={220} />
            </div>
            {/* Below 480px: swoosh-only mark plus the word Vasudha */}
            <div className="header-logo-mobile" style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
              <Logo variant="swoosh" width={36} />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--navy)',
                  textTransform: 'uppercase',
                }}
              >
                Vasudha
              </span>
            </div>
          </button>
        </div>

        {/* Center / Desktop Navigation */}
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
                      borderBottom: active ? '1px solid var(--olive)' : '1px solid transparent',
                      paddingBottom: '4px',
                      textUnderlineOffset: '6px',
                    }}
                    aria-expanded={productsDropdownOpen}
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={14} strokeWidth={1.5} color="var(--muted)" />
                  </button>

                  {/* Products 2-Column Dropdown (no images, 1px dividers) */}
                  {productsDropdownOpen && (
                    <div
                      className="animate-fade-in"
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-20px',
                        width: '520px',
                        backgroundColor: 'var(--ivory)',
                        border: '1px solid var(--line)',
                        borderRadius: 'var(--radius)',
                        padding: '16px',
                        boxShadow: '0 8px 24px rgba(16, 16, 79, 0.08)',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '12px',
                        zIndex: 60,
                      }}
                    >
                      {productNavItems.map((prod, idx) => (
                        <button
                          key={prod.path}
                          type="button"
                          onClick={() => {
                            setProductsDropdownOpen(false);
                            onNavigate(prod.path);
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            textAlign: 'left',
                            padding: '10px 12px',
                            cursor: 'pointer',
                            borderRadius: 'var(--radius)',
                            borderBottom: idx < 4 ? '1px solid var(--line)' : 'none',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--bone)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <span style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>
                            {prod.name}
                          </span>
                          <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
                            {prod.sub}
                          </span>
                        </button>
                      ))}

                      <div
                        style={{
                          gridColumn: '1 / -1',
                          borderTop: '1px solid var(--line)',
                          paddingTop: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setProductsDropdownOpen(false);
                            onNavigate('/products');
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--olive)',
                            fontSize: '13px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            textUnderlineOffset: '3px',
                          }}
                        >
                          View complete products index
                        </button>
                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                          Sells exclusively by container
                        </span>
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
                onClick={() => onNavigate(link.path)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 0',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: active ? 'var(--ink)' : 'var(--charcoal)',
                  borderBottom: active ? '1px solid var(--olive)' : '1px solid transparent',
                  paddingBottom: '4px',
                  textUnderlineOffset: '6px',
                  transition: 'color 150ms ease',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Far Right: Brochure Button, Trade Desk Button, RFQ CTA & Mobile Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Download Brochure CTA (like Horizon Exim) */}
          {onOpenBrochure && (
            <button
              type="button"
              onClick={onOpenBrochure}
              className="brochure-header-btn"
              title="Download Export Profile & Specifications PDF"
              style={{
                height: '44px',
                padding: '0 16px',
                backgroundColor: 'transparent',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                color: 'var(--navy)',
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 180ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bone)';
                e.currentTarget.style.borderColor = 'var(--navy)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--line)';
              }}
            >
              <Download size={14} strokeWidth={1.5} color="var(--olive)" />
              <span>Brochure</span>
            </button>
          )}

          {/* Quick Trade Desk Drawer Trigger (like Horizon Exim extra-wrap) */}
          {onOpenQuickContact && (
            <button
              type="button"
              onClick={onOpenQuickContact}
              className="trade-desk-header-btn"
              title="Open Trade Desk Contact Panel"
              style={{
                height: '44px',
                width: '44px',
                backgroundColor: 'transparent',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                color: 'var(--navy)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 180ms ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bone)';
                e.currentTarget.style.borderColor = 'var(--navy)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--line)';
              }}
              aria-label="Open trade desk direct contact"
            >
              <PhoneCall size={16} strokeWidth={1.5} color="var(--olive)" />
              <span
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--olive)',
                }}
              />
            </button>
          )}

          {/* Request a Quote Button */}
          <Button
            variant="primary"
            onClick={() => onOpenRfq()}
            className="rfq-header-btn"
          >
            Request a quote
          </Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              background: 'transparent',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              color: 'var(--ink)',
              cursor: 'pointer',
            }}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer (Ivory panel with 28px Newsreader links) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="animate-fade-in"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'var(--ivory)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            overflowY: 'auto',
          }}
        >
          {/* Mobile Drawer Top */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <Logo variant="default" width={180} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation"
              style={{
                width: '44px',
                height: '44px',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Large Newsreader Links (28px) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
            {[
              { label: 'Home', path: '/' },
              { label: 'Products & Commodities', path: '/products' },
              { label: 'About Vasudha', path: '/about' },
              { label: 'Quality & Compliance', path: '/quality' },
              { label: 'Export & Logistics', path: '/export' },
              { label: 'Contact & Trade Desk', path: '/quote' },
            ].map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate(item.path);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '26px',
                  fontWeight: 300,
                  color: 'var(--ink)',
                  cursor: 'pointer',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Drawer Bottom Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px' }}>
            <Button
              variant="primary"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              style={{ width: '100%' }}
            >
              Request a quote
            </Button>

            {onOpenBrochure && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <FileText size={16} strokeWidth={1.5} />
                <span>Download Export Profile (PDF)</span>
              </button>
            )}

            <a
              href="https://wa.me/?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20am%20inquiring%20about%20container%20exports."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '100%', textAlign: 'center', textDecoration: 'none', justifyContent: 'center' }}
            >
              Chat on WhatsApp Trade Desk
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: inline-flex !important;
          }
          .brochure-header-btn {
            display: none !important;
          }
        }
        @media (max-width: 580px) {
          .trade-desk-header-btn {
            display: none !important;
          }
          .rfq-header-btn {
            height: 44px !important;
            padding: 0 16px !important;
            font-size: 13px !important;
          }
        }
        @media (max-width: 480px) {
          .header-logo-desktop {
            display: none !important;
          }
          .header-logo-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
