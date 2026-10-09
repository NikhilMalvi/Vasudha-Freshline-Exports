import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

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
    <footer className="site-footer">
      {/* Subtle Outlined Logo Swoosh Watermark at 6% opacity */}
      <img
        src="/vasudha-mark-light-for-navy.svg"
        alt=""
        aria-hidden="true"
        className="site-footer-swoosh"
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Columns Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '48px',
            paddingBottom: '56px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Logo variant="navy" width={220} />
            <p
              style={{
                fontSize: '15px',
                lineHeight: '24px',
                color: 'rgba(255, 255, 255, 0.82)',
                margin: '4px 0 12px 0',
                maxWidth: '320px',
              }}
            >
              Indian produce, exported with precision by container to importers worldwide.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="#" aria-label="LinkedIn" className="footer-social-link">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="Facebook" className="footer-social-link">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="footer-social-link">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="YouTube" className="footer-social-link">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Col 1: Products */}
          <div>
            <div className="footer-col-title">Products</div>
            <ul>
              <li>
                <button type="button" onClick={() => onNavigate('/products/pomegranates')}>
                  Pomegranates
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/products/onions')}>
                  Onions
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/products/rice')}>
                  Rice
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/products/spices')}>
                  Spices
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/products/fresh-fruits')}>
                  Fresh fruits
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/products/fresh-vegetables')}>
                  Fresh vegetables
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <div className="footer-col-title">Quick links</div>
            <ul>
              <li>
                <button type="button" onClick={() => onNavigate('/about')}>
                  About Us
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/certificates')}>
                  Certificates
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/gallery')}>
                  Gallery
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/faqs')}>
                  FAQs
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/calculator')}>
                  Container Calculator
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/contact')}>
                  Contact
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/privacy')}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('/terms')}>
                  Terms of Sale
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <div className="footer-col-title">Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.82)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={17} style={{ color: 'var(--olive-light)', flexShrink: 0, marginTop: '3px' }} />
                <span>Street, City, State, PIN</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={17} style={{ color: 'var(--olive-light)', flexShrink: 0 }} />
                <a href="tel:+910000000000" style={{ color: 'inherit' }}>+91 00000 00000</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={17} style={{ color: 'var(--olive-light)', flexShrink: 0 }} />
                <a href="mailto:name@example.com" style={{ color: 'inherit' }}>name@example.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Clock size={17} style={{ color: 'var(--olive-light)', flexShrink: 0, marginTop: '3px' }} />
                <span>Mon – Sat: 9:00 AM – 6:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Print Statutory Bar */}
        <div
          style={{
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.65)',
          }}
        >
          <div>
            (c) 2026 Vasudha Freshline Exports LLP · LLPIN: AAA-0000 · IEC: 0000000000 · APEDA: AAA-0000 · GST: 0000000000
          </div>
          <div>
            All rights reserved. B2B Produce Exportation.
          </div>
        </div>
      </div>
    </footer>
  );
};
