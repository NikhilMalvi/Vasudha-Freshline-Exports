import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  Award,
  Ship,
  FileCheck,
  CheckCircle2,
  X,
  Download,
  ArrowRight,
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { CallStrip } from '../components/CallStrip';
import { ClosingCtaBand } from '../components/ClosingCtaBand';

interface CertificatesPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

interface RegistrationItem {
  name: string;
  desc: string;
  number: string;
  gradient: string;
  icon: React.ElementType;
}

export const CertificatesPage: React.FC<CertificatesPageProps> = ({
  onNavigate,
  onOpenRfq,
}) => {
  const [activeModalReg, setActiveModalReg] = useState<RegistrationItem | null>(null);

  const registrationsList: RegistrationItem[] = [
    {
      name: 'IEC (Importer Exporter Code)',
      desc: 'Statutory foreign trade authorization issued by Directorate General of Foreign Trade (DGFT).',
      number: '0000000000',
      gradient: 'linear-gradient(135deg, var(--leaf) 0%, #354E0E 100%)',
      icon: FileText,
    },
    {
      name: 'APEDA registration',
      desc: 'Agricultural and Processed Food Products Export Development Authority certified exporter member.',
      number: '0000000000',
      gradient: 'linear-gradient(135deg, var(--blue) 0%, #17327D 100%)',
      icon: Award,
    },
    {
      name: 'FSSAI license',
      desc: 'Food Safety and Standards Authority of India export establishment compliance license.',
      number: '0000000000',
      gradient: 'linear-gradient(135deg, var(--teal) 0%, #064043 100%)',
      icon: ShieldCheck,
    },
    {
      name: 'GST registration',
      desc: 'Goods and Services Tax statutory identification and export tax compliance record.',
      number: '0000000000',
      gradient: 'linear-gradient(135deg, var(--saffron) 0%, #7E3E03 100%)',
      icon: FileCheck,
    },
    {
      name: 'LLP registration',
      desc: 'Ministry of Corporate Affairs incorporation certificate under Limited Liability Partnership Act.',
      number: '0000000000',
      gradient: 'linear-gradient(135deg, var(--plum) 0%, #56275E 100%)',
      icon: FileText,
    },
    {
      name: 'Spices Board Registration',
      desc: 'Registration-cum-Membership Certificate (RCMC) for spices sorting, handling and export trade.',
      number: '0000000000',
      gradient: 'linear-gradient(135deg, var(--crimson) 0%, #7D1526 100%)',
      icon: Award,
    },
  ];

  const qualitySteps = [
    {
      step: 1,
      title: 'Receiving',
      desc: 'Raw produce checked for farm temperature, Brix levels, and absence of physical defects.',
      time: 'Hour 0',
      seqClass: 'step-seq-1',
    },
    {
      step: 2,
      title: 'Grading and sorting',
      desc: 'Mechanized & manual caliber sizing, weight grouping, and culling of sub-standard units.',
      time: 'Day 1',
      seqClass: 'step-seq-2',
    },
    {
      step: 3,
      title: 'Packing and labelling',
      desc: 'Packed in export cartons/sacks with protective liners and destination traceability labels.',
      time: 'Day 2',
      seqClass: 'step-seq-3',
    },
    {
      step: 4,
      title: 'Pre-shipment check',
      desc: 'Final container pre-cooling check, phytosanitary quarantine clearance, and seal logging.',
      time: 'Pre-loading',
      seqClass: 'step-seq-4',
    },
  ];

  const documentsList = [
    {
      name: 'Commercial invoice',
      desc: 'Attested export invoice detailing buyer, consignee, terms (FOB/CIF), and container amounts.',
      icon: FileText,
      tint: 'var(--leaf-tint)',
      color: 'var(--leaf)',
    },
    {
      name: 'Packing list',
      desc: 'Comprehensive itemization of carton counts, gross weights, net weights, and pallet measurements.',
      icon: FileCheck,
      tint: 'var(--blue-tint)',
      color: 'var(--blue)',
    },
    {
      name: 'Phytosanitary certificate',
      desc: 'Official quarantine clearance by Indian authorities verifying disease- and pest-free cargo.',
      icon: ShieldCheck,
      tint: 'var(--teal-tint)',
      color: 'var(--teal)',
    },
    {
      name: 'Certificate of origin',
      desc: 'Authorized chamber of commerce certification confirming produce origin from India.',
      icon: Award,
      tint: 'var(--saffron-tint)',
      color: 'var(--saffron)',
    },
    {
      name: 'Bill of lading (BL)',
      desc: 'Negotiable ocean bill of lading issued by carrier upon container vessel departure.',
      icon: Ship,
      tint: 'var(--plum-tint)',
      color: 'var(--plum)',
    },
    {
      name: 'Quality report on request',
      desc: 'Pre-shipment inspection certificates and laboratory pesticide/moisture test reports.',
      icon: CheckCircle2,
      tint: 'var(--crimson-tint)',
      color: 'var(--crimson)',
    },
  ];

  return (
    <div className="certificates-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. INNER BANNER (Pattern A)
          ===================================================================== */}
      <InnerBanner
        pill="Certificates"
        title="Registrations and documents"
        subtitle="The registrations we hold and the documents that travel with every shipment."
      />

      {/* =====================================================================
          2. REGISTRATIONS (white with two glows)
          Intro (C) + 3x2 grid of equal white cards (--shadow-md)
          ===================================================================== */}
      <section className="section section-white has-glows">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">Registrations</span>
            <h2>Our <span className="text-highlight-leaf">registrations</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Statutory compliance and registered Indian trade identity.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
              marginTop: '48px',
              alignItems: 'stretch',
            }}
          >
            {registrationsList.map((reg, idx) => {
              const RegIcon = reg.icon;
              return (
                <div
                  key={idx}
                  className="card"
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: '20px',
                    padding: '36px 30px',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Icon Circle (64px, gradient, document icon) */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: reg.gradient,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: 'var(--shadow-md)',
                      border: '3px solid #FFFFFF',
                      flexShrink: 0,
                    }}
                  >
                    <RegIcon size={28} />
                  </div>

                  <h3 style={{ fontSize: '20px', color: 'var(--navy)', margin: '0 0 10px 0' }}>
                    {reg.name}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--muted)', margin: '0 0 20px 0', flexGrow: 1 }}>
                    {reg.desc}
                  </p>

                  <div style={{ marginBottom: '20px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#F4F6EF',
                        color: 'var(--navy)',
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize: '14px',
                        letterSpacing: '0.08em',
                        padding: '6px 16px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--line)',
                      }}
                    >
                      {reg.number}
                    </span>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="link"
                      onClick={() => setActiveModalReg(reg)}
                      style={{ background: 'none', border: 'none', padding: 0 }}
                    >
                      <span>View copy</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.04em' }}>
              Sample numbers
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. QUALITY CHECKS (mist section)
          Intro (C) + Four step cards in sequence colours with dashed connector
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Quality</span>
            <h2>How we <span className="text-highlight-blue">check quality</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Step-by-step verification from packhouse receiving to pre-shipment gate-in.</p>
          </div>

          <div className="steps-track" style={{ marginTop: '48px', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))' }}>
            <div className="step-dashed-connector" />

            {qualitySteps.map((step) => (
              <div key={step.step} className="step">
                <div className="step-header">
                  <div className={`step-number ${step.seqClass}`}>{step.step}</div>
                  <span className="step-time-badge">{step.time}</span>
                </div>
                <div className="step-title">{step.title}</div>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. DOCUMENTS (white section)
          Intro (C) + Two columns of six rows
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Documents</span>
            <h2>Documents with <span className="text-highlight-leaf">every shipment</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">All standard foreign trade and customs clearing files dispatched promptly.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '24px',
              maxWidth: '1040px',
              margin: '48px auto 0 auto',
            }}
          >
            {documentsList.map((doc, idx) => {
              const IconComp = doc.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: '18px',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-xs)',
                  }}
                >
                  {/* Icon Tile (tint) */}
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      minWidth: '52px',
                      borderRadius: '14px',
                      backgroundColor: doc.tint,
                      color: doc.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={24} />
                  </div>

                  <div>
                    <h3 style={{ fontSize: '18px', color: 'var(--navy)', margin: '0 0 6px 0' }}>
                      {doc.name}
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--muted)', margin: 0 }}>
                      {doc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. REQUEST CARD (mist section)
          Wide white card (--shadow-md, radius 24px)
          ===================================================================== */}
      <section className="section section-mist" style={{ paddingTop: '88px', paddingBottom: '88px' }}>
        <div className="container">
          <div
            className="card"
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              backgroundColor: 'var(--white)',
              borderRadius: '24px',
              padding: '52px 40px',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div
              className="icon-circle"
              style={{
                width: '60px',
                height: '60px',
                minWidth: '60px',
                backgroundColor: 'var(--leaf-tint)',
                color: 'var(--leaf)',
              }}
            >
              <Download size={28} />
            </div>

            <h3 style={{ fontSize: '26px', color: 'var(--navy)', margin: 0 }}>
              Need a copy of a certificate or a test report?
            </h3>

            <p style={{ fontSize: '16px', color: 'var(--body)', margin: 0, maxWidth: '600px', lineHeight: '26px' }}>
              We share statutory certificates and accredited lab test reports with verified buyers upon inquiry.
            </p>

            <div style={{ marginTop: '16px' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={() => onNavigate('/contact')}
              >
                <span>Request documents</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. CALL STRIP (Pattern D)
          ===================================================================== */}
      <section className="section section-white" style={{ paddingTop: '80px', paddingBottom: '104px' }}>
        <div className="container">
          <CallStrip />
        </div>
      </section>

      {/* =====================================================================
          7. CLOSING CTA BAND (Pattern E)
          ===================================================================== */}
      <ClosingCtaBand onOpenRfq={() => onOpenRfq()} onRequestQuote={() => onOpenRfq()} />

      {/* Certificate Copy Modal */}
      {activeModalReg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 10, 56, 0.7)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            zIndex: 9999,
          }}
          onClick={() => setActiveModalReg(null)}
        >
          <div
            style={{
              backgroundColor: 'var(--white)',
              borderRadius: '24px',
              padding: '40px 32px',
              maxWidth: '520px',
              width: '100%',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalReg(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--muted)',
              }}
            >
              <X size={24} />
            </button>

            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: activeModalReg.gradient,
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
              }}
            >
              <activeModalReg.icon size={28} />
            </div>

            <h3 style={{ fontSize: '22px', color: 'var(--navy)', marginBottom: '8px' }}>
              {activeModalReg.name}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>
              {activeModalReg.desc}
            </p>

            <div
              style={{
                backgroundColor: 'var(--mist)',
                padding: '12px 20px',
                borderRadius: '12px',
                marginBottom: '28px',
                fontFamily: 'monospace',
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--navy)',
                letterSpacing: '0.08em',
              }}
            >
              Registration No: {activeModalReg.number}
            </div>

            <p style={{ fontSize: '14px', color: 'var(--body)', marginBottom: '24px' }}>
              Verified copies of official government registration certificates are provided directly to authorized trading partners during compliance onboarding.
            </p>

            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setActiveModalReg(null);
                onNavigate('/contact');
              }}
              style={{ width: '100%' }}
            >
              <span>Contact to request official copy</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
