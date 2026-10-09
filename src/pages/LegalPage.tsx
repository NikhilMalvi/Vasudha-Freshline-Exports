import React, { useState } from 'react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';
  const pageTitle = isPrivacy ? 'Privacy Policy' : 'Terms of Sale';
  const [activeSection, setActiveSection] = useState<string>('sec1');

  const privacySections = [
    { id: 'sec1', title: '1. Information collected' },
    { id: 'sec2', title: '2. Purpose of processing' },
    { id: 'sec3', title: '3. Data security & retention' },
    { id: 'sec4', title: '4. International trade partners' },
    { id: 'sec5', title: '5. Contact coordinates' },
  ];

  const termsSections = [
    { id: 'sec1', title: '1. Wholesale export scope' },
    { id: 'sec2', title: '2. Container specifications & tolerance' },
    { id: 'sec3', title: '3. Pricing, shipping & Incoterms' },
    { id: 'sec4', title: '4. Documentation & inspection' },
    { id: 'sec5', title: '5. Governing law & arbitration' },
  ];

  const sections = isPrivacy ? privacySections : termsSections;

  return (
    <div className="legal-page-content" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. INNER PAGE HERO (compact 280px navy gradient banner with watermark) */}
      <section className="inner-page-hero">
        <img
          src="/vasudha-mark-light-for-navy.svg"
          alt=""
          aria-hidden="true"
          className="inner-page-hero-swoosh"
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav className="inner-page-hero-breadcrumb" aria-label="Breadcrumb">
            <button type="button" onClick={() => onNavigate('/')}>
              Home
            </button>
            <span>/</span>
            <span style={{ color: '#FFFFFF' }}>Legal</span>
            <span>/</span>
            <span style={{ color: '#FFFFFF' }}>{pageTitle}</span>
          </nav>
          <span
            className="eyebrow"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              color: '#FFFFFF',
            }}
          >
            Legal
          </span>
          <h1>{pageTitle}</h1>
          <p className="sub-line">
            Last updated January 2026 · Vasudha Freshline Exports LLP statutory compliance policies.
          </p>
        </div>
      </section>

      {/* 2. Reading Layout (Two columns on desktop) */}
      <section className="section-white" style={{ paddingTop: '16px', paddingBottom: '96px' }}>
        <div className="container">
          <div className="legal-grid-layout">
            {/* Left Column: Sticky Sidebar with section anchors */}
            <aside
              style={{
                position: 'sticky',
                top: '100px',
                paddingLeft: '16px',
                borderLeft: '2px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--olive-deep)',
                }}
              >
                CONTENTS
              </span>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(s.id);
                    const el = document.getElementById(s.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    textDecoration: 'none',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: activeSection === s.id ? 'var(--navy)' : 'var(--muted)',
                    fontWeight: activeSection === s.id ? 700 : 500,
                    transition: 'color 150ms ease',
                  }}
                >
                  {s.title}
                </a>
              ))}
            </aside>

            {/* Right Column: Max-width 680px Reading Column */}
            <article style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {/* Draft badge at top */}
              <div>
                <span
                  className="chip"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    backgroundColor: 'var(--mist)',
                    borderColor: 'var(--line)',
                    color: 'var(--olive-deep)',
                    padding: '4px 12px',
                  }}
                >
                  Draft version for review
                </span>
              </div>

              {isPrivacy ? (
                <>
                  <div id="sec1">
                    <h2 style={{ fontSize: '24px', margin: '0 0 12px 0' }}>1. Information collected</h2>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)' }}>
                      We collect business contact information, commercial company names, delivery requirements and communication coordinates submitted via quotation and contact requests.
                    </p>
                  </div>

                  <div id="sec2">
                    <h2 style={{ fontSize: '24px', margin: '0 0 12px 0' }}>2. Purpose of processing</h2>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)' }}>
                      Information is processed strictly to prepare export specifications, evaluate container logistics routes, arrange phytosanitary inspections and communicate trade contract details.
                    </p>
                  </div>

                  <div id="sec3">
                    <h2 style={{ fontSize: '24px', margin: '0 0 12px 0' }}>3. Data security & retention</h2>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)' }}>
                      All commercial customer records and export customs filings are maintained securely in compliance with applicable statutory recordkeeping standards.
                    </p>
                  </div>

                  <div id="sec4">
                    <h2 style={{ fontSize: '24px', margin: '0 0 12px 0' }}>4. International trade partners</h2>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)' }}>
                      Necessary shipment details are shared solely with authorized customs brokers, port authorities and ocean carriers required to complete container transport.
                    </p>
                  </div>

                  <div id="sec5">
                    <h2 style={{ fontSize: '24px', margin: '0 0 12px 0' }}>5. Contact coordinates</h2>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)' }}>
                      For privacy documentation requests, contact Vasudha Freshline Exports LLP at exports@vasudhafreshline.com, Pune, Maharashtra, India.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div id="sec1">
                    <h2 style={{ fontSize: '24px', margin: '0 0 12px 0' }}>1. Wholesale export scope</h2>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)' }}>
                      All transactions are conducted on a business-to-business basis for full container loads (FCL). Orders are subject to confirmed commercial invoices and sales contracts.
                    </p>
                  </div>

                  <div id="sec2">
                    <h2 style={{ fontSize: '24px', margin: '0 0 12px 0' }}>2. Container specifications & tolerance</h2>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)' }}>
                      Agricultural produce is graded to agreed caliber parameters at the packhouse. Natural transit moisture loss is accounted for in agreed packaging allowances.
                    </p>
                  </div>

                  <div id="sec3">
                    <h2 style={{ fontSize: '24px', margin: '0 0 12px 0' }}>3. Pricing, shipping & Incoterms</h2>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)' }}>
                      Prices are quoted in agreed foreign currency under Incoterms (FOB, CFR, or CIF). Vessel departure schedules and ocean freight rates are confirmed upon booking.
                    </p>
                  </div>

                  <div id="sec4">
                    <h2 style={{ fontSize: '24px', margin: '0 0 12px 0' }}>4. Documentation & inspection</h2>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)' }}>
                      Each container is accompanied by commercial invoice, packing list, bill of lading, certificate of origin and phytosanitary certificate.
                    </p>
                  </div>

                  <div id="sec5">
                    <h2 style={{ fontSize: '24px', margin: '0 0 12px 0' }}>5. Governing law & arbitration</h2>
                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)' }}>
                      Commercial contracts are governed by Indian law. Disputes are resolved under standard commercial arbitration protocols in India.
                    </p>
                  </div>
                </>
              )}
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};
