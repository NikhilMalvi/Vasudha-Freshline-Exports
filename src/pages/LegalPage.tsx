import React, { useState } from 'react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  const [activeSection, setActiveSection] = useState<string>('intro');

  const privacySections = [
    { id: 'intro', title: '1. Information We Collect' },
    { id: 'usage', title: '2. Commercial Use of Data' },
    { id: 'retention', title: '3. Data Retention & Security' },
    { id: 'statutory', title: '4. Statutory Disclosures' },
    { id: 'contact', title: '5. Contact Officer' },
  ];

  const termsSections = [
    { id: 'intro', title: '1. Wholesale B2B Scope' },
    { id: 'incoterms', title: '2. Incoterms & Delivery' },
    { id: 'tolerances', title: '3. Inspection & Tolerances' },
    { id: 'payment', title: '4. Commercial Payment Terms' },
    { id: 'jurisdiction', title: '5. Arbitration & Governing Law' },
  ];

  const sections = isPrivacy ? privacySections : termsSections;

  return (
    <main style={{ backgroundColor: '#F7F5EF', paddingTop: '64px', paddingBottom: '96px', color: '#353535' }}>
      <div className="container">
        <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
          <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
            Legal Documentation
          </span>
          <h1 style={{ marginBottom: '16px' }}>
            {isPrivacy ? 'Privacy Policy' : 'Terms of International Trade'}
          </h1>
          <p style={{ color: '#5F5D55', fontSize: '15px' }}>
            Vasudha Freshline Exports LLP · LLPIN: [CONFIRM: LLPIN]
          </p>
        </div>

        {/* 2-Column: Left Sticky Anchors, Right 680px Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '64px', alignItems: 'start' }} className="legal-layout-grid">
          {/* Left Anchors */}
          <nav
            style={{
              position: 'sticky',
              top: '110px',
              borderLeft: '1px solid #D9D5C8',
              paddingLeft: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
            className="legal-nav"
            aria-label="Document Sections"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setActiveSection(s.id)}
                style={{
                  textDecoration: 'none',
                  fontSize: '14px',
                  color: activeSection === s.id ? '#10104F' : '#5F5D55',
                  fontWeight: activeSection === s.id ? 600 : 400,
                  transition: 'color 150ms ease',
                }}
              >
                {s.title}
              </a>
            ))}
          </nav>

          {/* Right Reading Column */}
          <article style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {isPrivacy ? (
              <>
                <section id="intro" style={{ borderBottom: '1px solid #D9D5C8', paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '26px', marginBottom: '16px' }}>1. Information We Collect</h2>
                  <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', marginBottom: '16px' }}>
                    Vasudha Freshline Exports LLP collects corporate commercial information provided by wholesale buyers, importers, and brokers when requesting quotations or container specifications.
                  </p>
                  <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535' }}>
                    Data collected includes corporate legal names, contact coordinates, business emails, phone numbers, target discharge ports, and commodity volume preferences.
                  </p>
                </section>

                <section id="usage" style={{ borderBottom: '1px solid #D9D5C8', paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '26px', marginBottom: '16px' }}>2. Commercial Use of Data</h2>
                  <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535' }}>
                    Commercial buyer data is used strictly for calculating shipping quotations, issuing proforma invoices, filing shipping bills with Indian export authorities, and coordinating freight logistics.
                  </p>
                </section>

                <section id="retention" style={{ borderBottom: '1px solid #D9D5C8', paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '26px', marginBottom: '16px' }}>3. Data Retention & Security</h2>
                  <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535' }}>
                    Trade records and customs documentation are retained in secure corporate systems as mandated by applicable Indian export regulations.
                  </p>
                </section>

                <section id="statutory" style={{ borderBottom: '1px solid #D9D5C8', paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '26px', marginBottom: '16px' }}>4. Statutory Disclosures</h2>
                  <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535' }}>
                    Documentation is disclosed only to designated authorized parties including Indian Customs, Plant Quarantine Organization, shipping carriers, and corresponding commercial banking institutions.
                  </p>
                </section>

                <section id="contact">
                  <h2 style={{ fontSize: '26px', marginBottom: '16px' }}>5. Contact Officer</h2>
                  <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535' }}>
                    For privacy inquiries or corporate record updates, contact our compliance desk at: [CONFIRM: email].
                  </p>
                </section>
              </>
            ) : (
              <>
                <section id="intro" style={{ borderBottom: '1px solid #D9D5C8', paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '26px', marginBottom: '16px' }}>1. Wholesale B2B Scope</h2>
                  <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535' }}>
                    All contracts concluded by Vasudha Freshline Exports LLP govern commercial container-load sales exclusively to verified importers, wholesalers, and corporate entities.
                  </p>
                </section>

                <section id="incoterms" style={{ borderBottom: '1px solid #D9D5C8', paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '26px', marginBottom: '16px' }}>2. Incoterms & Delivery</h2>
                  <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535' }}>
                    Quotations adhere to agreed Incoterms [CONFIRM: Incoterms]. Risk of cargo transfers according to the contractually agreed commercial terms and bill of lading issuance.
                  </p>
                </section>

                <section id="tolerances" style={{ borderBottom: '1px solid #D9D5C8', paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '26px', marginBottom: '16px' }}>3. Inspection & Tolerances</h2>
                  <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535' }}>
                    Agricultural produce is subject to natural transit shrinkage [CONFIRM: tolerance limits]. Joint surveyor inspection must be requested according to agreed trade procedure.
                  </p>
                </section>

                <section id="payment" style={{ borderBottom: '1px solid #D9D5C8', paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '26px', marginBottom: '16px' }}>4. Commercial Payment Terms</h2>
                  <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535' }}>
                    Payment instruments must be issued in freely convertible currency [CONFIRM: payment terms and letters of credit].
                  </p>
                </section>

                <section id="jurisdiction">
                  <h2 style={{ fontSize: '26px', marginBottom: '16px' }}>5. Arbitration & Governing Law</h2>
                  <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535' }}>
                    Contracts are governed by the commercial laws of India. Dispute resolution takes place under Indian Arbitration and Conciliation statutes [CONFIRM: legal seat].
                  </p>
                </section>
              </>
            )}
          </article>
        </div>
      </div>
    </main>
  );
};
