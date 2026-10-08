import React, { useState } from 'react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';
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
      <section className="section" style={{ paddingTop: '56px', paddingBottom: '88px' }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: 'var(--muted)',
              marginBottom: '24px',
            }}
          >
            <button
              type="button"
              onClick={() => onNavigate('/')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--charcoal)', cursor: 'pointer', font: 'inherit' }}
            >
              Home
            </button>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>
              {isPrivacy ? 'Privacy Policy' : 'Terms of Trade'}
            </span>
          </nav>

          {/* Heading */}
          <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
            <span className="eyebrow">LEGAL DOCUMENTATION</span>
            <h1 style={{ margin: '12px 0 12px 0' }}>
              {isPrivacy ? 'Privacy Policy' : 'Terms of Trade'}
            </h1>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)' }}>
              Last updated [Sample] date · Vasudha Freshline Exports LLP · LLPIN: AAA-0000
            </p>
          </div>

          {/* Reading Layout with Sticky Left List on Desktop */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '56px',
              alignItems: 'start',
            }}
          >
            {/* Sticky Section List Left */}
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
              <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--olive-deep)' }}>
                SECTIONS
              </span>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setActiveSection(s.id)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '14px',
                    color: activeSection === s.id ? 'var(--navy)' : 'var(--muted)',
                    fontWeight: activeSection === s.id ? 600 : 400,
                    transition: 'color 150ms ease',
                  }}
                >
                  {s.title}
                </a>
              ))}
            </aside>

            {/* 680px Reading Column Right */}
            <article style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '36px' }}>
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
                      For privacy documentation requests, contact Vasudha Freshline Exports LLP at name@example.com, Street, City, State, PIN.
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
