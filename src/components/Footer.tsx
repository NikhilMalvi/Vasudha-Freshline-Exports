import React from 'react';
import { Logo } from './Logo';
import { ConfirmTag } from './ConfirmTag';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate = () => {} }) => {
  return (
    <footer
      className="dark-section"
      style={{
        backgroundColor: 'var(--navy)',
        color: 'var(--ivory)',
        paddingTop: '120px',
        paddingBottom: '48px',
      }}
    >
      <div className="container">
        {/* Main 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            paddingBottom: '64px',
            borderBottom: '1px solid rgba(217, 213, 200, 0.2)',
          }}
        >
          {/* Column 1: Brand & Identity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Logo variant="navy" width={220} />
            <p
              style={{
                fontSize: '15px',
                lineHeight: '24px',
                color: 'var(--bone)',
                maxWidth: '320px',
              }}
            >
              Indian agricultural exports. Container loads to importers and wholesalers. Documented from farm to port.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px' }}>
              <span style={{ color: 'var(--olive-light)', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '11px', fontWeight: 500 }}>
                Constitution
              </span>
              <span style={{ color: 'var(--ivory)' }}>
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
                color: 'var(--olive-light)',
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
                color: 'var(--bone)',
              }}
            >
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/pomegranates')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Pomegranates (Bhagwa)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/onions')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Fresh Red & White Onions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/rice')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Rice (Basmati & Non-Basmati)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/spices')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Indian Export Spices
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/fresh-fruits')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Fresh Seasonal Fruits
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products/fresh-vegetables')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                >
                  Cold-Chain Fresh Vegetables
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
                color: 'var(--olive-light)',
                fontWeight: 500,
              }}
            >
              Company & Standards
            </span>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '14px',
                color: 'var(--bone)',
              }}
            >
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  About Us
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

          {/* Column 4: Contact & Operations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--olive-light)',
                fontWeight: 500,
              }}
            >
              Trade Desk & Office
            </span>
            <div style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--bone)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>
                <strong style={{ display: 'block', color: 'var(--ivory)', fontSize: '12px', textTransform: 'uppercase' }}>
                  Registered Office:
                </strong>
                <ConfirmTag label="CONFIRM: registered office address" />
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--ivory)', fontSize: '12px', textTransform: 'uppercase' }}>
                  Telephone:
                </strong>
                <ConfirmTag label="CONFIRM: phone" />
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--ivory)', fontSize: '12px', textTransform: 'uppercase' }}>
                  WhatsApp:
                </strong>
                <ConfirmTag label="CONFIRM: WhatsApp" />
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--ivory)', fontSize: '12px', textTransform: 'uppercase' }}>
                  Sales Email:
                </strong>
                <ConfirmTag label="CONFIRM: email" />
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--ivory)', fontSize: '12px', textTransform: 'uppercase' }}>
                  Operating Hours:
                </strong>
                <ConfirmTag label="CONFIRM: office hours in IST" />
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
            color: 'rgba(236, 232, 220, 0.7)',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <span>Vasudha Freshline Exports LLP</span>
            <span>·</span>
            <span>LLPIN: <ConfirmTag label="CONFIRM: LLPIN" /></span>
            <span>·</span>
            <span>IEC: <ConfirmTag label="CONFIRM: IEC" /></span>
            <span>·</span>
            <span>GST: <ConfirmTag label="CONFIRM: GST" /></span>
            <span>·</span>
            <span>APEDA RCMC: <ConfirmTag label="CONFIRM: APEDA RCMC" /></span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', borderTop: '1px solid rgba(247, 245, 239, 0.1)', paddingTop: '16px' }}>
            <div>
              © 2026 Vasudha Freshline Exports LLP. All rights reserved. Sells exclusively by container to importers and wholesalers.
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button
                type="button"
                onClick={() => onNavigate('/privacy')}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px', font: 'inherit' }}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/terms')}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px', font: 'inherit' }}
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
