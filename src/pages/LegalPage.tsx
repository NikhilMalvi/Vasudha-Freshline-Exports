import React, { useState } from 'react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  const [activeSection, setActiveSection] = useState<string>('intro');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [type]);

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
    <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '64px', paddingBottom: '96px' }}>
      <div className="container">
        <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
          <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
            Legal Documentation
          </span>
          <h1 style={{ marginBottom: '16px' }}>
            {isPrivacy ? 'Privacy Policy' : 'Terms of International Trade'}
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
            Last updated: October 2026 · Vasudha Freshline Exports LLP (LLPIN: AAZ-8492)
          </p>
        </div>

        {/* 2-Column: Left Sticky Anchors, Right 680px Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '64px', alignItems: 'start' }} className="legal-layout-grid">
          {/* Left Anchors */}
          <nav
            style={{
              position: 'sticky',
              top: '110px',
              borderLeft: '1px solid var(--line)',
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
                  color: activeSection === s.id ? 'var(--navy)' : 'var(--muted)',
                  fontWeight: activeSection === s.id ? 600 : 400,
                  transition: 'color 150ms ease',
                }}
              >
                {s.title}
              </a>
            ))}
          </nav>

          {/* Right Reading Column (680px) */}
          <article style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {isPrivacy ? (
              <>
                <section id="intro" className="hairline-b" style={{ paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>1. Information We Collect</h2>
                  <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                    Vasudha Freshline Exports LLP collects corporate commercial information provided by wholesale buyers, importers, and brokers when requesting proforma quotations, container specifications, or trade credit reviews.
                  </p>
                  <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
                    Data collected includes corporate legal names, authorized contact names, business email addresses, telephone and WhatsApp coordinates, destination discharge ports, and commodity volume preferences.
                  </p>
                </section>

                <section id="usage" className="hairline-b" style={{ paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>2. Commercial Use of Data</h2>
                  <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
                    Corporate buyer data is used strictly for calculating shipping quotations, issuing proforma invoices, filing shipping bills and customs declarations with Indian export authorities, and coordinating ocean freight logistics. We never sell commercial buyer registries to third parties.
                  </p>
                </section>

                <section id="retention" className="hairline-b" style={{ paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>3. Data Retention & Security</h2>
                  <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
                    Trade records and customs documentation are retained in secure corporate systems as mandated by the Directorate General of Foreign Trade (DGFT) and the Reserve Bank of India (RBI) export monitoring regulations.
                  </p>
                </section>

                <section id="statutory" className="hairline-b" style={{ paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>4. Statutory Disclosures</h2>
                  <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
                    Documentation is disclosed only to designated authorized parties including Indian Customs at JNPT, Plant Quarantine Organization, shipping carriers, and corresponding commercial banking institutions for letter of credit negotiation.
                  </p>
                </section>

                <section id="contact">
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>5. Contact Officer</h2>
                  <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
                    For privacy inquiries or corporate record updates, contact our designated compliance officer at: <a href="mailto:compliance@vasudhafreshline.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>compliance@vasudhafreshline.com</a>.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section id="intro" className="hairline-b" style={{ paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>1. Wholesale B2B Scope</h2>
                  <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
                    All contracts concluded by Vasudha Freshline Exports LLP govern commercial container-load sales exclusively to verified importers, wholesalers, and corporate entities. Individual retail transactions are not accepted.
                  </p>
                </section>

                <section id="incoterms" className="hairline-b" style={{ paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>2. Incoterms & Delivery</h2>
                  <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
                    Quotations adhere to ICC Incoterms 2020 (FOB JNPT, CFR, CIF). Risk of cargo transfers according to the agreed Incoterm. On FOB terms, risk transfers to buyer once goods pass over the vessel rail at JNPT / Nhava Sheva. On CIF terms, carrier insurance applies under Institute Cargo Clauses (A).
                  </p>
                </section>

                <section id="tolerances" className="hairline-b" style={{ paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>3. Inspection & Tolerances</h2>
                  <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
                    Agricultural commodities are subject to natural weight loss during maritime transit. Standard moisture shrinkage tolerances (1% to 2% dependent on crop) are recognized under international trade customs. Joint surveyor reports must be requested within 24 hours of container seal breaking.
                  </p>
                </section>

                <section id="payment" className="hairline-b" style={{ paddingBottom: '32px' }}>
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>4. Commercial Payment Terms</h2>
                  <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
                    Payment instruments must be issued in agreed freely convertible foreign currencies (USD, EUR, AED). Letters of credit must be confirmed, irrevocable, and unrestricted for negotiation by Indian banks.
                  </p>
                </section>

                <section id="jurisdiction">
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>5. Arbitration & Governing Law</h2>
                  <p style={{ fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
                    Contracts are governed by the commercial laws of the Republic of India. Disputes shall be resolved through arbitration under Indian Arbitration and Conciliation Act at Mumbai, Maharashtra.
                  </p>
                </section>
              </>
            )}
          </article>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .legal-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .legal-nav {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
};
