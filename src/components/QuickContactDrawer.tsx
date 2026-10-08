import React, { useState } from 'react';
import { X, MessageSquare, Phone, Mail, MapPin, ArrowRight, FileText } from 'lucide-react';

interface QuickContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: (product?: string) => void;
  onOpenBrochure: () => void;
  onNavigate: (path: string) => void;
}

export const QuickContactDrawer: React.FC<QuickContactDrawerProps> = ({
  isOpen,
  onClose,
  onOpenRfq,
  onOpenBrochure,
  onNavigate,
}) => {
  const [selectedProduct, setSelectedProduct] = useState('Pomegranates (Bhagwa)');

  if (!isOpen) return null;

  const commodities = [
    { name: 'Pomegranates (Bhagwa)', slug: '/products/pomegranates' },
    { name: 'Fresh Onions (Red & White)', slug: '/products/onions' },
    { name: 'Rice (Basmati & Non-Basmati)', slug: '/products/rice' },
    { name: 'Indian Spices', slug: '/products/spices' },
    { name: 'Fresh Seasonal Fruits', slug: '/products/fresh-fruits' },
    { name: 'Fresh Vegetables', slug: '/products/fresh-vegetables' },
  ];

  const handleWhatsAppQuick = () => {
    const text = encodeURIComponent(
      `Hello Vasudha Freshline Exports LLP trade desk, I am inquiring about container availability and FOB/CIF quote for ${selectedProduct}.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quick Contact & Trade Desk Slideout"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(21, 28, 23, 0.55)',
        backdropFilter: 'blur(2px)',
        zIndex: 90,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: 'var(--ivory)',
          borderLeft: '1px solid var(--line)',
          boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* Drawer Header */}
        <div
          className="quick-drawer-header"
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bone)',
          }}
        >
          <div>
            <span className="label-caps" style={{ color: 'var(--olive)', fontWeight: 600 }}>
              Export Trade Desk
            </span>
            <h3 style={{ fontSize: '20px', lineHeight: '26px', marginTop: '2px', color: 'var(--ink)' }}>
              Direct Contact
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Trade Desk Drawer"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              color: 'var(--charcoal)',
            }}
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="quick-drawer-body" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '28px', flexGrow: 1 }}>
          {/* Status badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 14px',
              backgroundColor: 'rgba(104, 112, 54, 0.08)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--olive)',
                display: 'inline-block',
              }}
            />
            <span style={{ fontSize: '13px', color: 'var(--charcoal)', fontWeight: 500 }}>
              Desk Active · IST 09:00 – 19:00 (GMT+5:30)
            </span>
          </div>

          {/* Quick Commodity WhatsApp Launcher */}
          <div>
            <label className="form-label" style={{ display: 'block', marginBottom: '8px' }}>
              Inquire via WhatsApp Desk
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <select
                className="form-select"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                style={{ height: '46px', fontSize: '14px' }}
              >
                {commodities.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={handleWhatsAppQuick}
                className="btn-primary"
                style={{
                  height: '48px',
                  backgroundColor: 'var(--navy)',
                  width: '100%',
                  fontSize: '14px',
                }}
              >
                <MessageSquare size={16} strokeWidth={1.5} color="var(--olive-light)" />
                <span>Message Trade Officer</span>
              </button>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '6px' }}>
              Typical response time under 15 minutes during export operating hours.
            </p>
          </div>

          {/* Commodity Quick Nav */}
          <div>
            <span className="label-caps" style={{ display: 'block', marginBottom: '10px' }}>
              Direct Product Specifications
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {commodities.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => {
                    onClose();
                    onNavigate(c.slug);
                  }}
                  style={{
                    padding: '8px 10px',
                    backgroundColor: 'var(--bone)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    textAlign: 'left',
                    fontSize: '12px',
                    color: 'var(--charcoal)',
                    cursor: 'pointer',
                  }}
                >
                  {c.name.split('(')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Official Inquiries */}
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '20px' }}>
            <span className="label-caps" style={{ display: 'block', marginBottom: '14px' }}>
              Official Communication Channels
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Mail size={18} strokeWidth={1.5} color="var(--olive)" style={{ marginTop: '2px' }} />
                <div>
                  <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)' }}>
                    Export Enquiries & Indents
                  </span>
                  <a
                    href="mailto:exports@vasudhafreshline.com"
                    style={{ fontSize: '15px', color: 'var(--navy)', fontWeight: 500, textDecoration: 'none' }}
                  >
                    exports@vasudhafreshline.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Phone size={18} strokeWidth={1.5} color="var(--olive)" style={{ marginTop: '2px' }} />
                <div>
                  <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)' }}>
                    Direct Commercial Line
                  </span>
                  <a
                    href="tel:+919823045812"
                    style={{ fontSize: '15px', color: 'var(--navy)', fontWeight: 500, textDecoration: 'none' }}
                  >
                    +91 98230 45812 / +91 253 257 8941
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} strokeWidth={1.5} color="var(--olive)" style={{ marginTop: '2px' }} />
                <div>
                  <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)' }}>
                    Port & Operational Base
                  </span>
                  <p style={{ fontSize: '14px', color: 'var(--charcoal)', margin: 0 }}>
                    Plot 42-B, Vinchur Food Park, Niphad, Nashik - 422209<br />
                    Port of Loading: JNPT / Nhava Sheva (INNSA)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fast Actions */}
          <div
            style={{
              borderTop: '1px solid var(--line)',
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenRfq(selectedProduct);
              }}
              className="btn-secondary"
              style={{ width: '100%', height: '48px', fontSize: '14px', justifyContent: 'space-between' }}
            >
              <span>Submit Formal RFQ Form</span>
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBrochure();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                backgroundColor: 'var(--bone)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                color: 'var(--navy)',
                fontWeight: 500,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={16} strokeWidth={1.5} color="var(--olive)" />
                <span>Download Company Profile (PDF)</span>
              </div>
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Drawer Bottom */}
        <div
          className="quick-drawer-footer"
          style={{
            padding: '16px 28px',
            borderTop: '1px solid var(--line)',
            backgroundColor: 'var(--bone)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            color: 'var(--muted)',
          }}
        >
          <span>Vasudha Freshline Exports LLP</span>
          <span>Container loads only</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .quick-drawer-header, .quick-drawer-body, .quick-drawer-footer {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }
        }
      `}</style>
    </div>
  );
};
