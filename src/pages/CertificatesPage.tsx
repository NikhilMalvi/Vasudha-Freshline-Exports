import React, { useState } from 'react';
import {
  ArrowRight,
  FileText,
  Package,
  ShieldCheck,
  CheckCircle2,
  Ship,
  ClipboardCheck,
  X,
} from 'lucide-react';

interface CertificatesPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const CertificatesPage: React.FC<CertificatesPageProps> = ({
  onNavigate,
  onOpenRfq,
}) => {
  const [modalItem, setModalItem] = useState<string | null>(null);

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20certificate%20and%20document%20copies.';

  // 6 Statutory Registrations
  const registrations = [
    {
      name: 'IEC',
      desc: 'Importer Exporter Code issued under foreign trade authority for global export operations.',
      number: '0000000000',
    },
    {
      name: 'APEDA registration',
      desc: 'Agricultural and Processed Food Products Export Development Authority statutory registration.',
      number: '0000000000',
    },
    {
      name: 'FSSAI license',
      desc: 'Food Safety and Standards Authority of India export establishment certificate.',
      number: '0000000000',
    },
    {
      name: 'GST registration',
      desc: 'Goods and Services Tax statutory identification certificate for Indian export commerce.',
      number: '0000000000',
    },
    {
      name: 'LLP registration',
      desc: 'Ministry of Corporate Affairs incorporation certificate for Limited Liability Partnership.',
      number: '0000000000',
    },
    {
      name: 'Certificate name',
      desc: 'General export inspection compliance documentation and phytosanitary protocol records.',
      number: '0000000000',
    },
  ];

  // 6 Shipment Documents with Icons
  const documents = [
    {
      title: 'Commercial invoice',
      desc: 'Itemised container weights, certified value, commercial trade terms and bank coordinates.',
      icon: <FileText size={20} />,
    },
    {
      title: 'Packing list',
      desc: 'Carton and bag counts, tare weights, gross weights and individual pallet serials.',
      icon: <Package size={20} />,
    },
    {
      title: 'Phytosanitary certificate',
      desc: 'Plant quarantine clearance certifying pest-free produce inspection prior to container loading.',
      icon: <ShieldCheck size={20} />,
    },
    {
      title: 'Certificate of origin',
      desc: 'Authorised chamber of commerce documentation confirming Indian agricultural origin.',
      icon: <CheckCircle2 size={20} />,
    },
    {
      title: 'Bill of lading',
      desc: 'Original negotiable ocean bill of lading or sea waybill issued by ocean shipping lines.',
      icon: <Ship size={20} />,
    },
    {
      title: 'Quality report on request',
      desc: 'Batch inspection analysis and moisture/residue parameters provided upon buyer order request [Sample].',
      icon: <ClipboardCheck size={20} />,
    },
  ];

  return (
    <div className="certificates-page-content" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* =========================================================================
          1. HERO (.section ivory). Two columns.
          ========================================================================= */}
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
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'var(--charcoal)',
                cursor: 'pointer',
                font: 'inherit',
              }}
            >
              Home
            </button>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Certificates</span>
          </nav>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span className="eyebrow">CERTIFICATES</span>

              <h1 style={{ margin: 0 }}>Registrations and documents</h1>

              <p style={{ margin: 0, fontSize: '18px', lineHeight: '30px', color: 'var(--charcoal)' }}>
                The registrations we hold and the documents that travel with every shipment.
              </p>

              <p style={{ margin: 0, fontSize: '15px', lineHeight: '24px', color: 'var(--muted)' }}>
                We operate within established Indian trade frameworks and ensure complete documentation before container arrival.
              </p>

              <div style={{ paddingTop: '8px' }}>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onOpenRfq('Certificates')}
                >
                  <span>Request documents</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Column: Neatly stacked paper documents and a pen on a desk (fixed 4:3) */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px', margin: '0 auto' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bone)',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80"
                  alt="Neatly stacked paper documents and a pen on a desk with no readable text"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. REGISTRATIONS (.section-white). 3 x 2 grid of equal .card items.
          ========================================================================= */}
      <section className="section-white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px auto' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>STATUTORY RECOGNITION</span>
            <h2 style={{ margin: '10px 0 0 0' }}>Registrations</h2>
          </div>

          <div
            className="grid-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
            }}
          >
            {registrations.map((item, idx) => (
              <div key={idx} className="card" style={{ gap: '16px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="icon-circle">
                      <FileText size={24} />
                    </div>
                    {/* Styled Pill with number "0000000000" */}
                    <span className="pill" style={{ letterSpacing: '0.08em', fontVariantNumeric: 'tabular-nums' }}>
                      {item.number}
                    </span>
                  </div>

                  <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '24px' }}>
                    {item.name}
                  </h3>

                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', lineHeight: '24px' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ paddingTop: '8px' }}>
                  <button
                    type="button"
                    className="link"
                    onClick={() => setModalItem(item.name)}
                  >
                    View copy &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. QUALITY CHECKS (.section ivory). Four .step items.
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px auto' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>INSPECTION PROTOCOL</span>
            <h2 style={{ margin: '10px 0 0 0' }}>How we check quality</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '32px',
            }}
          >
            {/* Step 1: Receiving */}
            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">01</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Receiving
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Fresh farm produce received at the packhouse and checked for harvest temperature and skin firmness.
                </p>
              </div>
            </div>

            {/* Step 2: Grading and sorting */}
            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">02</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Grading and sorting
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Produce calibrated by diameter, count per box, colour intensity and surface defects.
                </p>
              </div>
            </div>

            {/* Step 3: Packing and labelling */}
            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">03</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Packing and labelling
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Cartons or mesh bags packed with gross tare verification and export trace labels.
                </p>
              </div>
            </div>

            {/* Step 4: Pre-shipment check */}
            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">04</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Pre-shipment check
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Final reefer container pre-cooling check and customs wire seal affixing before gate-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. DOCUMENTS (.section-white). Two columns of six rows with icons.
          ========================================================================= */}
      <section className="section-white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px auto' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>EXPORT PAPERWORK</span>
            <h2 style={{ margin: '10px 0 0 0' }}>Documents with every shipment</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '24px 48px',
            }}
          >
            {documents.map((doc, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '20px 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <div
                  className="icon-circle"
                  style={{ width: '44px', height: '44px', color: 'var(--olive-deep)' }}
                >
                  {doc.icon}
                </div>
                <div>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    {doc.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. REQUEST PANEL (.section-bone). Rounded white card.
          ========================================================================= */}
      <section className="section-bone">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div
            className="card"
            style={{
              padding: '48px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div className="icon-circle" style={{ width: '60px', height: '60px' }}>
              <FileText size={26} />
            </div>

            <h3 style={{ margin: 0, fontSize: '28px', fontFamily: 'var(--font-serif)' }}>
              Need a copy of a certificate or a test report?
            </h3>

            <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)', maxWidth: '580px' }}>
              We share registration copies, statutory certificates and sample inspection reports upon buyer enquiry.
            </p>

            <div style={{ paddingTop: '8px' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={() => onOpenRfq('Certificates & Test Reports')}
              >
                <span>Request documents</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CLOSING BAND (.band-navy).
          ========================================================================= */}
      <section className="band-navy" style={{ padding: '88px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ color: 'var(--white)', margin: '0 0 16px 0' }}>
            Tell us what you need.
          </h2>

          <p
            style={{
              color: 'rgba(247, 245, 239, 0.9)',
              margin: '0 auto 36px auto',
              fontSize: '18px',
              lineHeight: '28px',
            }}
          >
            We supply calibrated produce with planned vessel departures and transparent export handling.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <button
              type="button"
              className="btn-light"
              onClick={() => onOpenRfq()}
            >
              <span>Request a quote</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                height: '52px',
                padding: '0 28px',
                backgroundColor: 'transparent',
                color: 'var(--white)',
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                border: '1px solid var(--white)',
                borderRadius: 'var(--radius-btn)',
                cursor: 'pointer',
                transition: 'transform 200ms ease, background-color 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Document Copy Modal */}
      {modalItem && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(16, 16, 79, 0.7)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setModalItem(null)}
        >
          <div
            className="card"
            style={{
              maxWidth: '480px',
              width: '100%',
              padding: '36px',
              textAlign: 'center',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalItem(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--muted)',
              }}
            >
              <X size={20} />
            </button>

            <div className="icon-circle" style={{ margin: '0 auto 16px auto' }}>
              <FileText size={24} />
            </div>

            <h3 style={{ margin: '0 0 8px 0', fontSize: '22px' }}>{modalItem}</h3>
            <p style={{ margin: '0 0 20px 0', color: 'var(--charcoal)', fontSize: '15px' }}>
              Registration copy reference: 0000000000 [Sample]. Full statutory copy available upon trade request.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setModalItem(null);
                  onOpenRfq(modalItem);
                }}
              >
                Request copy
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setModalItem(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
