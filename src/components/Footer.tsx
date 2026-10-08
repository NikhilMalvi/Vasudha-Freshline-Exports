import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

// Clean inline social icons
const LinkedInIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YouTubeIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate = () => {} }) => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--navy)',
        color: 'var(--ivory)',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(247, 245, 239, 0.15)',
      }}
      className="dark-section"
    >
      <div className="container">
        {/* Main 5-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '40px',
            paddingBottom: '56px',
            borderBottom: '1px solid rgba(247, 245, 239, 0.15)',
          }}
        >
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', gridColumn: 'span 1' }}>
            <Logo variant="navy" width={220} />
            <div
              style={{
                width: '32px',
                height: '1.5px',
                backgroundColor: 'var(--olive-light)',
                margin: '4px 0',
              }}
            />
            <p
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                color: 'rgba(247, 245, 239, 0.85)',
                margin: 0,
              }}
            >
              Indian produce, exported with precision. Container loads to importers and wholesalers worldwide.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <a
                href="#"
                aria-label="LinkedIn"
                style={{
                  color: 'var(--ivory)',
                  opacity: 0.8,
                  transition: 'opacity 150ms ease',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                style={{
                  color: 'var(--ivory)',
                  opacity: 0.8,
                  transition: 'opacity 150ms ease',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                style={{
                  color: 'var(--ivory)',
                  opacity: 0.8,
                  transition: 'opacity 150ms ease',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                style={{
                  color: 'var(--ivory)',
                  opacity: 0.8,
                  transition: 'opacity 150ms ease',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Col 1: Products */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ivory)',
                fontWeight: 600,
              }}
            >
              Products
            </span>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '14px',
                color: 'rgba(247, 245, 239, 0.85)',
              }}
            >
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/pomegranates')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Pomegranates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/onions')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Onions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/rice')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Rice
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/spices')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Spices
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/fresh-fruits')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Fresh fruits
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/fresh-vegetables')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Fresh vegetables
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ivory)',
                fontWeight: 600,
              }}
            >
              Company
            </span>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '14px',
                color: 'rgba(247, 245, 239, 0.85)',
              }}
            >
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/certificates')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Certificates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/gallery')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/privacy')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Privacy policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/terms')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Terms of trade
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact with Icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ivory)',
                fontWeight: 600,
              }}
            >
              Contact
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'rgba(247, 245, 239, 0.85)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} style={{ color: 'var(--olive-light)', flexShrink: 0, marginTop: '2px' }} />
                <span>Street, City, State, PIN</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} style={{ color: 'var(--olive-light)', flexShrink: 0 }} />
                <span>+91 00000 00000</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} style={{ color: 'var(--olive-light)', flexShrink: 0 }} />
                <span>name@example.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Clock size={16} style={{ color: 'var(--olive-light)', flexShrink: 0, marginTop: '2px' }} />
                <span>[Sample] hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Print & Statutory Bar */}
        <div
          style={{
            padding: '20px 0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '13px',
            color: 'rgba(247, 245, 239, 0.70)',
            borderBottom: '1px solid rgba(247, 245, 239, 0.10)',
          }}
        >
          <div>
            <span>Brochure: </span>
            <span style={{ color: 'var(--ivory)' }}>Available upon request (PDF)</span>
          </div>
          <div>
            <span>Statutory: LLPIN: AAA-0000 · IEC: 0000000000 · APEDA: AAA-0000 · GST: 0000000000</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '12px',
            color: 'rgba(247, 245, 239, 0.65)',
          }}
        >
          <span>
            &copy; {new Date().getFullYear()} Vasudha Freshline Exports LLP. All rights reserved.
          </span>
          <span>
            Registered in India · Agricultural produce export by container
          </span>
        </div>
      </div>
    </footer>
  );
};
