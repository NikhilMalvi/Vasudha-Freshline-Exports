import React, { useState, useEffect } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

interface SectionItem {
  id: string;
  title: string;
  content: string[];
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(type);
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-1');

  useEffect(() => {
    setActiveTab(type);
  }, [type]);

  const isPrivacy = activeTab === 'privacy';
  const pageTitle = isPrivacy ? 'Privacy Policy' : 'Terms of Trade';
  const subLine = 'Last updated October 2026.';

  const privacySections: SectionItem[] = [
    {
      id: 'sec-1',
      title: 'Information we collect',
      content: [
        'Vasudha Freshline Exports LLP collects commercial identity and contact information provided voluntarily by wholesale importers, overseas buyers, and freight partners when requesting price quotations, product specifications, or export agreements.',
        'This information typically includes your name, company registration name, corporate email address, WhatsApp or direct telephone numbers, destination sea port, and prospective container cargo requirements.',
      ],
    },
    {
      id: 'sec-2',
      title: 'Commercial use of data',
      content: [
        'All information gathered through this website or direct communication channels is utilized exclusively for B2B trade coordination, drafting accurate proforma invoices, calculating freight estimations, and fulfilling regulatory export customs compliance.',
        'We do not sell, license, or monetize any corporate or personal data to third-party marketing services under any circumstances.',
      ],
    },
    {
      id: 'sec-3',
      title: 'Data security & storage',
      content: [
        'We deploy strict technical and organizational safeguards to protect trade communications, pricing quotations, and commercial bills from unauthorized access, alteration, or disclosure.',
        'Digital inquiries and shipment logs are retained for statutory accounting, foreign trade auditing, and DGFT/Customs compliance periods in accordance with applicable Indian legislation.',
      ],
    },
    {
      id: 'sec-4',
      title: 'Sharing with trade authorities & carriers',
      content: [
        'To execute international ocean shipments, essential buyer and consignee details must be shared with statutory authorities (such as Indian Customs, APEDA, Plant Quarantine officials) and operational service providers (shipping lines, chamber of commerce, port authorities).',
        'These transmissions are strictly confined to the documentation necessary to clear port gate-in, phytosanitary inspection, and generate valid bills of lading.',
      ],
    },
    {
      id: 'sec-5',
      title: 'Buyer rights and contact coordinates',
      content: [
        'Commercial partners and prospective buyers have the right to review, update, or request the deletion of their registered contact information at any time.',
        'For queries concerning data management or compliance, please reach our administrative desk through our official communication channels.',
      ],
    },
  ];

  const termsSections: SectionItem[] = [
    {
      id: 'sec-1',
      title: 'Scope of commercial wholesale',
      content: [
        'All quotations, proforma contracts, and shipments issued by Vasudha Freshline Exports LLP are governed by these Terms of Trade. Our sales are conducted strictly on a wholesale, full container load (FCL) basis.',
        'Acceptance of our proforma invoice or issuance of a purchase order confirms the buyer’s unconditional acceptance of these terms.',
      ],
    },
    {
      id: 'sec-2',
      title: 'Specifications, grading & tolerance',
      content: [
        'Agricultural produce (including Bhagwa pomegranates, Nashik red onions, Basmati rice, and spices) is graded in conformity with mutually agreed specifications and statutory APEDA / Agmark export standards.',
        'Due to the natural organic characteristics of perishable cargo, slight natural tolerances in caliber diameter, weight variance (+/- 5%), and minor natural skin shading are recognized within standard international commerce conventions.',
      ],
    },
    {
      id: 'sec-3',
      title: 'Incoterms & ocean freight',
      content: [
        'Unless expressly stated otherwise in written contracts, all sales terms follow Incoterms 2020 rules (principally FOB Nhava Sheva/Mundra or CIF destination port).',
        'Risk of loss or damage transfers in accordance with the specified Incoterm once the sealed shipping container crosses the ocean vessel’s rail at the Indian loading terminal.',
      ],
    },
    {
      id: 'sec-4',
      title: 'Inspection & phytosanitary clearance',
      content: [
        'All consignments undergo statutory pre-shipment phytosanitary quarantine clearance and packhouse grading inspection prior to container sealing.',
        'Independent third-party inspection (e.g., SGS, Bureau Veritas) may be arranged at the loading port upon the buyer’s written request and expense prior to dispatch.',
      ],
    },
    {
      id: 'sec-5',
      title: 'Payment terms & documents release',
      content: [
        'Standard accepted payment terms include confirmed irrevocable Letter of Credit (L/C) at sight or 30% advance Telegraphic Transfer (T/T) with remaining balance payable upon presentation of scanned shipping documents (draft BL, invoice, packing list, phytosanitary certificate).',
        'Original negotiable documents or electronic telex release will only be executed upon receipt of cleared funds.',
      ],
    },
    {
      id: 'sec-6',
      title: 'Governing law & dispute resolution',
      content: [
        'These trade terms and all underlying export contracts are governed by and construed in accordance with the laws of India.',
        'Any disputes arising in connection with trade contracts that cannot be resolved amicably shall be submitted to arbitration under Indian arbitration procedures in Maharashtra, India.',
      ],
    },
  ];

  const activeSections = isPrivacy ? privacySections : termsSections;

  return (
    <div className="legal-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. INNER BANNER (Pattern A)
          ===================================================================== */}
      <InnerBanner
        pill="Legal & Compliance"
        title={pageTitle}
        subtitle={subLine}
      />

      {/* Switcher Pill Tabs for Convenient Toggling */}
      <div style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--line)', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button
            type="button"
            className={`chip ${isPrivacy ? 'selected' : ''}`}
            onClick={() => {
              setActiveTab('privacy');
              setActiveSectionId('sec-1');
            }}
            style={{
              padding: '8px 24px',
              borderRadius: 'var(--radius-pill)',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            className={`chip ${!isPrivacy ? 'selected' : ''}`}
            onClick={() => {
              setActiveTab('terms');
              setActiveSectionId('sec-1');
            }}
            style={{
              padding: '8px 24px',
              borderRadius: 'var(--radius-pill)',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Terms of Trade
          </button>
        </div>
      </div>

      {/* =====================================================================
          2. READING LAYOUT (White section, 720px column + sticky desktop index)
          ===================================================================== */}
      <section className="section section-white" style={{ paddingTop: '56px', paddingBottom: '96px' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: '56px',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            {/* Desktop Sticky Section List (Left Column) */}
            <aside
              style={{
                width: '240px',
                minWidth: '240px',
                position: 'sticky',
                top: '110px',
                display: 'none',
              }}
              className="legal-desktop-sidebar"
            >
              <div
                style={{
                  padding: '24px',
                  backgroundColor: '#F8F9F5',
                  borderRadius: '16px',
                  border: '1px solid var(--line)',
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--navy)',
                    marginBottom: '16px',
                  }}
                >
                  SECTIONS
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeSections.map((sec, idx) => {
                    const isActive = activeSectionId === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSectionId(sec.id);
                          const el = document.getElementById(sec.id);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          color: isActive ? 'var(--navy)' : 'var(--muted)',
                          fontWeight: isActive ? 700 : 500,
                          textDecoration: 'none',
                          paddingBottom: '4px',
                          borderBottom: isActive ? '2px solid var(--leaf)' : '2px solid transparent',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {idx + 1}. {sec.title}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Reading Column (720px) */}
            <main
              style={{
                maxWidth: '720px',
                width: '100%',
                flex: '1 1 auto',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                {activeSections.map((sec, idx) => (
                  <article
                    key={sec.id}
                    id={sec.id}
                    style={{
                      scrollMarginTop: '120px',
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '24px',
                        fontWeight: 800,
                        color: 'var(--navy)',
                        marginBottom: '16px',
                        lineHeight: '1.3',
                      }}
                    >
                      {idx + 1}. {sec.title}
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {sec.content.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          style={{
                            fontSize: '16px',
                            lineHeight: '28px',
                            color: 'var(--body)',
                            margin: 0,
                          }}
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}

                {/* Small Card at the End: "Questions about this page? Contact us." */}
                <div
                  className="card"
                  style={{
                    backgroundColor: '#F8F9F5',
                    borderRadius: '20px',
                    padding: '32px',
                    border: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '24px',
                    flexWrap: 'wrap',
                    marginTop: '24px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        minWidth: '48px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--leaf-tint)',
                        color: 'var(--leaf)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', color: 'var(--navy)', margin: '0 0 4px 0' }}>
                        Questions about this page?
                      </h3>
                      <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                        Speak with our export legal and compliance desk for clarifications.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => onNavigate('/contact')}
                    style={{ padding: '0 24px' }}
                  >
                    <span>Contact us</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Responsive CSS for desktop sidebar */}
      <style>{`
        @media (min-width: 992px) {
          .legal-desktop-sidebar {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
