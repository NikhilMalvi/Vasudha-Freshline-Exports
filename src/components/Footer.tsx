import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate = () => {} }) => {
  return (
    <footer
      style={{
        backgroundColor: '#0A0A38',
        color: '#DAD8E8',
        paddingTop: '96px',
        paddingBottom: '48px',
        borderTop: '1px solid rgba(247, 245, 239, 0.20)',
      }}
    >
      <div className="container">
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '48px',
            paddingBottom: '64px',
            borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
          }}
        >
          {/* Column 1: Brand & Identity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Logo variant="navy" width={220} />
            <p
              style={{
                fontSize: '15px',
                lineHeight: '24px',
                color: '#DAD8E8',
                maxWidth: '320px',
              }}
            >
              Indian agricultural exports. Container loads to importers and wholesalers. Documented from farm to port.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px' }}>
              <span style={{ color: '#A9B070', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '11px', fontWeight: 500 }}>
                Constitution
              </span>
              <span style={{ color: '#F7F5EF' }}>
                Vasudha Freshline Exports LLP · Registered in India
              </span>
            </div>
          </div>

          {/* Column 2: Products */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#A9B070',
                fontWeight: 500,
              }}
            >
              Export Commodities
            </span>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '14px',
                color: '#DAD8E8',
              }}
            >
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/pomegranates')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Pomegranates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/onions')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Fresh Onions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/rice')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Rice
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/spices')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Spices
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/fresh-fruits')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Fresh Fruits
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/fresh-vegetables')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Fresh Vegetables
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#A9B070',
                fontWeight: 500,
              }}
            >
              Export Company
            </span>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
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
                  About Vasudha Freshline
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Commodities & Specifications
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/quality')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Quality & Compliance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/export')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Export & Logistics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/quote')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Request a Quote / Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations (Placeholders as per Rule F) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#A9B070',
                fontWeight: 500,
              }}
            >
              Trade Desk & Office
            </span>
            <div style={{ fontSize: '13px', lineHeight: '20px', color: '#DAD8E8', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <strong style={{ display: 'block', color: '#F7F5EF', fontSize: '12px', textTransform: 'uppercase' }}>
                  Packhouse & Processing:
                </strong>
                [CONFIRM: packhouse address]
              </div>
              <div>
                <strong style={{ display: 'block', color: '#F7F5EF', fontSize: '12px', textTransform: 'uppercase' }}>
                  Port Dispatch Desk:
                </strong>
                [CONFIRM: port desk address]
              </div>
              <div>
                <strong style={{ display: 'block', color: '#F7F5EF', fontSize: '12px', textTransform: 'uppercase' }}>
                  Commercial Phone:
                </strong>
                [CONFIRM: phone number]
              </div>
              <div>
                <strong style={{ display: 'block', color: '#F7F5EF', fontSize: '12px', textTransform: 'uppercase' }}>
                  Trade Desk WhatsApp:
                </strong>
                [CONFIRM: WhatsApp number]
              </div>
              <div>
                <strong style={{ display: 'block', color: '#F7F5EF', fontSize: '12px', textTransform: 'uppercase' }}>
                  Export Sales Email:
                </strong>
                [CONFIRM: email address]
              </div>
              <div>
                <strong style={{ display: 'block', color: '#F7F5EF', fontSize: '12px', textTransform: 'uppercase' }}>
                  Operating Desk Hours:
                </strong>
                [CONFIRM: operating hours]
              </div>
            </div>
          </div>
        </div>

        {/* Statutory & Legal Line */}
        <div
          style={{
            paddingTop: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            fontSize: '12px',
            color: '#B9B8D6',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <span style={{ color: '#F7F5EF', fontWeight: 500 }}>Vasudha Freshline Exports LLP</span>
            <span>·</span>
            <span>LLPIN: <strong style={{ color: '#F7F5EF' }}>[CONFIRM: LLPIN]</strong></span>
            <span>·</span>
            <span>IEC: <strong style={{ color: '#F7F5EF' }}>[CONFIRM: IEC]</strong></span>
            <span>·</span>
            <span>GSTIN: <strong style={{ color: '#F7F5EF' }}>[CONFIRM: GSTIN]</strong></span>
            <span>·</span>
            <span>APEDA: <strong style={{ color: '#F7F5EF' }}>[CONFIRM: APEDA]</strong></span>
            <span>·</span>
            <span>FSSAI: <strong style={{ color: '#F7F5EF' }}>[CONFIRM: FSSAI]</strong></span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', borderTop: '1px solid rgba(247, 245, 239, 0.20)', paddingTop: '16px' }}>
            <div>
              © 2026 Vasudha Freshline Exports LLP. All rights reserved. Sells exclusively by container to importers and wholesalers.
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button
                type="button"
                onClick={() => onNavigate('/privacy')}
                style={{ background: 'none', border: 'none', color: '#DAD8E8', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px', font: 'inherit' }}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/terms')}
                style={{ background: 'none', border: 'none', color: '#DAD8E8', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px', font: 'inherit' }}
              >
                Terms of Trade
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
