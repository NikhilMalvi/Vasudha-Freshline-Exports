import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate = () => {} }) => {
  return (
    <footer
      style={{
        backgroundColor: '#10104F',
        color: '#DAD8E8',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(247, 245, 239, 0.20)',
      }}
      className="dark-section"
    >
      <div className="container">
        {/* Brand Header & 3-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '40px',
            paddingBottom: '56px',
            borderBottom: '1px solid rgba(247, 245, 239, 0.15)',
          }}
        >
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Logo variant="navy" width={220} />
            <p
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                color: '#DAD8E8',
                maxWidth: '280px',
                marginTop: '4px',
              }}
            >
              Indian produce, exported with precision. Container loads to importers and wholesalers worldwide.
            </p>
            <div style={{ fontSize: '13px', color: '#B9B8D6' }}>
              Vasudha Freshline Exports LLP
            </div>
          </div>

          {/* Column 1: Products */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#F7F5EF',
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
                color: '#DAD8E8',
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

          {/* Column 2: Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#F7F5EF',
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
                color: '#DAD8E8',
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

          {/* Column 3: Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#F7F5EF',
                fontWeight: 600,
              }}
            >
              Contact
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#DAD8E8' }}>
              <div>
                <span style={{ color: '#B9B8D6', display: 'block', fontSize: '11px', textTransform: 'uppercase' }}>Address</span>
                <span>Street, City, State, PIN</span>
              </div>
              <div>
                <span style={{ color: '#B9B8D6', display: 'block', fontSize: '11px', textTransform: 'uppercase' }}>Phone</span>
                <span>+91 00000 00000</span>
              </div>
              <div>
                <span style={{ color: '#B9B8D6', display: 'block', fontSize: '11px', textTransform: 'uppercase' }}>Email</span>
                <span>name@example.com</span>
              </div>
              <div>
                <span style={{ color: '#B9B8D6', display: 'block', fontSize: '11px', textTransform: 'uppercase' }}>Hours</span>
                <span>Monday – Saturday, 09:00 – 18:00 IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Footer Link: Brochure & Statutory */}
        <div
          style={{
            padding: '20px 0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '13px',
            color: '#B9B8D6',
            borderBottom: '1px solid rgba(247, 245, 239, 0.10)',
          }}
        >
          <div>
            <span>Brochure: </span>
            <span style={{ color: '#F7F5EF' }}>Available upon request (PDF)</span>
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
            color: '#B9B8D6',
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
