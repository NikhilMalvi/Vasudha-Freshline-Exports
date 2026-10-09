import React, { useState } from 'react';
import {
  ArrowRight,
  FileText,
  PackageCheck,
  ShieldCheck,
  Award,
  Ship,
  FileCheck,
  X,
  Lock,
} from 'lucide-react';
import { QuoteFormSection } from '../components/QuoteFormSection';

interface CertificatesPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const CertificatesPage: React.FC<CertificatesPageProps> = ({
  onNavigate,
  onOpenRfq,
}) => {
  const [activeModalCertificate, setActiveModalCertificate] = useState<string | null>(null);

  const registrationsList = [
    {
      name: 'IEC',
      desc: 'Importer Exporter Code issued under foreign trade authority.',
      number: '0000000000',
    },
    {
      name: 'APEDA registration',
      desc: 'Agricultural and Processed Food Products Export Development Authority.',
      number: '0000000000',
    },
    {
      name: 'FSSAI license',
      desc: 'Food Safety and Standards Authority of India establishment license.',
      number: '0000000000',
    },
    {
      name: 'GST registration',
      desc: 'Goods and Services Tax statutory identification certificate.',
      number: '0000000000',
    },
    {
      name: 'LLP registration',
      desc: 'Ministry of Corporate Affairs incorporation certificate.',
      number: '0000000000',
    },
    {
      name: 'Phytosanitary registration',
      desc: 'Directorate of Plant Protection and quarantine compliance record.',
      number: '0000000000',
    },
  ];

  const documentsList = [
    {
      title: 'Commercial invoice',
      desc: 'Itemized commercial values, harmonized system (HS) codes and consignee details.',
      icon: FileText,
      tint: 'var(--leaf-tint)',
      color: 'var(--leaf)',
    },
    {
      title: 'Packing list',
      desc: 'Detailed gross, net, and tare container weights with carton breakdown.',
      icon: PackageCheck,
      tint: 'var(--blue-tint)',
      color: 'var(--blue)',
    },
    {
      title: 'Phytosanitary certificate',
      desc: 'Plant Quarantine regulatory inspection certificate verifying pest-free status.',
      icon: ShieldCheck,
      tint: 'var(--teal-tint)',
      color: 'var(--teal)',
    },
    {
      title: 'Certificate of origin',
      desc: 'Chamber of Commerce non-preferential certificate authenticating Indian origin.',
      icon: Award,
      tint: 'var(--saffron-tint)',
      color: 'var(--saffron)',
    },
    {
      title: 'Bill of lading',
      desc: 'Original carrier ocean bill of lading or sea waybill issued upon vessel loading.',
      icon: Ship,
      tint: 'var(--plum-tint)',
      color: 'var(--plum)',
    },
    {
      title: 'Quality report on request',
      desc: 'Independent pre-shipment surveyor testing and grading report upon request.',
      icon: FileCheck,
      tint: 'var(--crimson-tint)',
      color: 'var(--crimson)',
    },
  ];

  return (
    <div className="certificates-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. INNER PAGE HERO (compact 280px navy gradient banner with watermark)
          ===================================================================== */}
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
            <span style={{ color: '#FFFFFF' }}>Certificates</span>
          </nav>
          <span
            className="eyebrow"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              color: '#FFFFFF',
            }}
          >
            Certificates
          </span>
          <h1>Registrations and documents.</h1>
          <p className="sub-line">
            The statutory registrations we hold and the export compliance paperwork accompanying every container shipment.
          </p>
        </div>
      </section>

      {/* =====================================================================
          2. REGISTRATIONS (mist with two glows)
          H2 "Our registrations."; 3 x 2 grid of equal .card items
          ===================================================================== */}
      <section className="section section-mist has-glows">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-plum-tr" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">Trade Credentials</span>
            <h2>Our <span className="text-highlight-leaf">registrations</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Statutory licences maintaining compliance for cross-border export shipments.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
            }}
          >
            {registrationsList.map((reg, idx) => (
              <div key={idx} className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div className="icon-circle" style={{ backgroundColor: 'var(--leaf-tint)', color: 'var(--leaf)' }}>
                    <FileText size={22} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '13px',
                      fontWeight: 700,
                      backgroundColor: 'var(--white)',
                      color: 'var(--navy)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--line)',
                    }}
                  >
                    {reg.number}
                  </span>
                </div>

                <h3 style={{ fontSize: '20px', marginBottom: '6px' }}>{reg.name}</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', flexGrow: 1, marginBottom: '16px' }}>
                  {reg.desc}
                </p>

                <div>
                  <button
                    type="button"
                    className="link"
                    onClick={() => setActiveModalCertificate(reg.name)}
                    style={{ background: 'none', border: 'none', padding: 0 }}
                  >
                    <span>View copy</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. QUALITY CHECKS (white with two glows)
          H2 "How we check quality."; 4 .step items
          ===================================================================== */}
      <section className="section section-white has-glows">
        <div className="glow-orb glow-blue-br" aria-hidden="true" />
        <div className="glow-orb glow-teal-bl" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">Quality Protocol</span>
            <h2>How we check <span className="text-highlight-blue">quality</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Standard inspection gates applied to every outward container consignment.</p>
          </div>

          <div
            className="steps-track"
            style={{
              marginTop: '44px',
            }}
          >
            <div className="step-dashed-connector" />

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-1">1</div>
              </div>
              <div className="step-title">Receiving</div>
              <p className="step-desc">Inward inspection of harvest crates at packhouse sorting stations.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-2">2</div>
              </div>
              <div className="step-title">Grading and sorting</div>
              <p className="step-desc">Mechanical calibration by size, brix, crown integrity and color.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-3">3</div>
              </div>
              <div className="step-title">Packing and labelling</div>
              <p className="step-desc">Telescopic boxes and mesh bags packed according to buyer specs.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-4">4</div>
              </div>
              <div className="step-title">Pre-shipment check</div>
              <p className="step-desc">Container temperature logging and final phytosanitary clearance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. DOCUMENTS (mist with two glows)
          H2 "Documents with every shipment."; 2 columns of 6 rows
          ===================================================================== */}
      <section className="section section-mist has-glows">
        <div className="glow-orb glow-saffron-tr" aria-hidden="true" />
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">Shipping Documentation</span>
            <h2>Documents with every <span className="text-highlight-leaf">shipment</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Standard paperwork submitted promptly to expedite customs discharge.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '24px',
              marginTop: '20px',
            }}
          >
            {documentsList.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <div
                  key={idx}
                  className="card"
                  style={{
                    padding: '24px 28px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <div
                    className="icon-circle"
                    style={{
                      backgroundColor: doc.tint,
                      color: doc.color,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{doc.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>{doc.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. REQUEST CARD (white)
          ===================================================================== */}
      <section className="section section-white">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div
            className="card"
            style={{
              border: '2px solid var(--navy)',
              boxShadow: 'var(--shadow-md)',
              padding: '48px',
              textAlign: 'center',
              alignItems: 'center',
            }}
          >
            <div className="icon-circle" style={{ backgroundColor: 'var(--teal-tint)', color: 'var(--teal)', marginBottom: '20px' }}>
              <ShieldCheck size={28} />
            </div>
            <h3 style={{ fontSize: '26px', marginBottom: '12px', color: 'var(--navy)' }}>
              Need a copy of a certificate or a test report?
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 28px auto' }}>
              Our documentation desk shares copies with registered importers upon request.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => onOpenRfq()}
            >
              <span>Request documents</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. QUOTE FORM (Light mist with white card + glows)
          ===================================================================== */}
      <QuoteFormSection />

      {/* Certificate Preview Modal */}
      {activeModalCertificate && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 10, 56, 0.7)',
            zIndex: 2500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            className="card"
            style={{
              maxWidth: '520px',
              width: '100%',
              padding: '36px',
              position: 'relative',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveModalCertificate(null)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--navy)',
              }}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            <div className="icon-circle" style={{ backgroundColor: 'var(--blue-tint)', color: 'var(--blue)', marginBottom: '16px' }}>
              <Lock size={22} />
            </div>
            <h3 style={{ marginBottom: '8px' }}>{activeModalCertificate}</h3>
            <p style={{ fontSize: '15px', color: 'var(--body)', marginBottom: '20px' }}>
              Full certificate sheets and inspection records are confidential trade credentials issued to registered buyers during commercial order booking.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setActiveModalCertificate(null);
                  onOpenRfq();
                }}
              >
                <span>Request verified copy</span>
                <ArrowRight size={15} />
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setActiveModalCertificate(null)}
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
