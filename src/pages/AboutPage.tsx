import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Sprout,
  Package,
  Ship,
  Award,
  Globe,
  Users,
} from 'lucide-react';
import { IMAGES } from '../data/images';
import { QuoteFormSection } from '../components/QuoteFormSection';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

const LinkedInIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenRfq }) => {
  // Stats counter count-up
  const [statsCounted, setStatsCounted] = useState(false);
  const [statYears, setStatYears] = useState(0);
  const [statContainers, setStatContainers] = useState(0);
  const [statCountries, setStatCountries] = useState(0);
  const [statBuyers, setStatBuyers] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsCounted) {
          setStatsCounted(true);
          const duration = 1500;
          const startTime = performance.now();

          const updateNumbers = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            setStatYears(Math.floor(ease * 10));
            setStatContainers(Math.floor(ease * 100));
            setStatCountries(Math.floor(ease * 15));
            setStatBuyers(Math.floor(ease * 50));

            if (progress < 1) {
              requestAnimationFrame(updateNumbers);
            } else {
              setStatYears(10);
              setStatContainers(100);
              setStatCountries(15);
              setStatBuyers(50);
            }
          };

          requestAnimationFrame(updateNumbers);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsCounted]);

  return (
    <div className="about-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
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
            <span style={{ color: '#FFFFFF' }}>About</span>
          </nav>
          <span
            className="eyebrow"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              color: '#FFFFFF',
            }}
          >
            About us
          </span>
          <h1>Exporting Indian produce to importers worldwide.</h1>
          <p className="sub-line">
            We supply agricultural produce by the container to importers and wholesalers worldwide. Sourced directly from verified packhouses and handled with strict export standards.
          </p>
        </div>
      </section>

      {/* =====================================================================
          2. STORY (mist with two glows)
          Left: H2 "Our story." and 3 short paragraphs
          Right: rounded image of stacked crates in clean warehouse + quote card
          ===================================================================== */}
      <section className="section section-mist has-glows">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-plum-tr" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '56px',
              alignItems: 'center',
            }}
          >
            {/* Left Story copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="section-intro left" style={{ marginBottom: '8px' }}>
                <span className="eyebrow">Our history</span>
                <h2>Our <span className="text-highlight-leaf">story</span>.</h2>
                <div className="section-intro-bar" />
              </div>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: 'var(--body)' }}>
                Vasudha Freshline Exports was established to bridge the gap between Indian packhouses and international commodity markets.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: 'var(--body)' }}>
                We specialize in full container load (FCL) shipments of fresh pomegranates, red onions, rice, and whole spices.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: 'var(--body)' }}>
                Every shipment is supervised from post-harvest grading through to port stuffing, ensuring consistent commercial arrivals.
              </p>
              <div style={{ marginTop: '8px' }}>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onOpenRfq()}
                >
                  <span>Request a quote</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            {/* Right Warehouse Image + Quote Card */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderRadius: 'var(--radius-img)',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'var(--white)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <img
                  src={IMAGES.portContainers}
                  alt="Stacked produce crates in clean warehouse"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Quote card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  right: '-16px',
                  backgroundColor: 'var(--white)',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--line)',
                  padding: '20px 24px',
                  maxWidth: '280px',
                  zIndex: 10,
                }}
              >
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: '22px' }}>
                  “A direct line from farm to port.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. WHAT WE DO (white with two glows)
          Intro; three .card items with .icon-circle: Source, Pack, Ship
          ===================================================================== */}
      <section className="section section-white has-glows">
        <div className="glow-orb glow-blue-br" aria-hidden="true" />
        <div className="glow-orb glow-teal-bl" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">Capabilities</span>
            <h2>What we <span className="text-highlight-blue">do</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">End-to-end export execution across the Indian supply corridor.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '32px',
            }}
          >
            {/* Card 1: Source (Leaf accent) */}
            <div className="card">
              <div className="icon-circle" style={{ backgroundColor: 'var(--leaf-tint)', color: 'var(--leaf)', marginBottom: '18px' }}>
                <Sprout size={24} />
              </div>
              <h3 style={{ marginBottom: '8px' }}>Source</h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)' }}>
                Farm-level aggregation from certified Indian agricultural clusters. Continuous quality inspection before procurement.
              </p>
            </div>

            {/* Card 2: Pack (Blue accent) */}
            <div className="card">
              <div className="icon-circle" style={{ backgroundColor: 'var(--blue-tint)', color: 'var(--blue)', marginBottom: '18px' }}>
                <Package size={24} />
              </div>
              <h3 style={{ marginBottom: '8px' }}>Pack</h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)' }}>
                Calibrated sorting, protective liners and export-grade corrugated cartons. Reefer pre-cooling for perishable fruit.
              </p>
            </div>

            {/* Card 3: Ship (Teal accent) */}
            <div className="card">
              <div className="icon-circle" style={{ backgroundColor: 'var(--teal-tint)', color: 'var(--teal)', marginBottom: '18px' }}>
                <Ship size={24} />
              </div>
              <h3 style={{ marginBottom: '8px' }}>Ship</h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)' }}>
                End-to-end container logistics from packhouse to Indian maritime ports. Accurate documentation and vessel tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. NUMBERS: Gradient STATS STRIP as on Home
          ===================================================================== */}
      <section className="band-stats" ref={statsRef} style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              alignItems: 'center',
            }}
          >
            <div
              className="stat"
              style={{
                padding: '16px 24px',
                borderRight: '1px solid rgba(255, 255, 255, 0.14)',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <div className="stat-number">
                <span>{statYears}</span>
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">
                <Award className="stat-icon" />
                <span>Years in export</span>
              </div>
            </div>

            <div
              className="stat"
              style={{
                padding: '16px 24px',
                borderRight: '1px solid rgba(255, 255, 255, 0.14)',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <div className="stat-number">
                <span>{statContainers}</span>
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">
                <Ship className="stat-icon" />
                <span>Containers shipped</span>
              </div>
            </div>

            <div
              className="stat"
              style={{
                padding: '16px 24px',
                borderRight: '1px solid rgba(255, 255, 255, 0.14)',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <div className="stat-number">
                <span>{statCountries}</span>
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">
                <Globe className="stat-icon" />
                <span>Countries served</span>
              </div>
            </div>

            <div
              className="stat"
              style={{
                padding: '16px 24px',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <div className="stat-number">
                <span>{statBuyers}</span>
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">
                <Users className="stat-icon" />
                <span>Buyers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. HOW WE WORK (white with two glows)
          The five .step items in V4 sequence
          ===================================================================== */}
      <section className="section section-white has-glows">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">Process</span>
            <h2>How we <span className="text-highlight-leaf">work</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">From first enquiry to arrival, exactly what to expect.</p>
          </div>

          <div className="steps-track" style={{ marginTop: '48px' }}>
            {/* Dashed connector line */}
            <div className="step-dashed-connector" />

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-1">1</div>
                <span className="step-time-badge">1 min</span>
              </div>
              <div className="step-title">Enquiry</div>
              <p className="step-desc">Share your requirements, destination port and requested schedule.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-2">2</div>
                <span className="step-time-badge">Same day</span>
              </div>
              <div className="step-title">Specification</div>
              <p className="step-desc">Receive commercial specs, packing options and indicative rates.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-3">3</div>
                <span className="step-time-badge">[Sample] days</span>
              </div>
              <div className="step-title">Packing and loading</div>
              <p className="step-desc">Produce sorted, calibrated and loaded into reefer containers.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-4">4</div>
                <span className="step-time-badge">[Sample] days</span>
              </div>
              <div className="step-title">Documents</div>
              <p className="step-desc">Phytosanitary, certificate of origin and invoice drafts prepared.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-5">5</div>
                <span className="step-time-badge">[Sample] days</span>
              </div>
              <div className="step-title">Shipping and arrival</div>
              <p className="step-desc">Container tracked continuously from Indian port to discharge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. TEAM (mist with two glows)
          H2 "The team."; 3 .card items with rounded #F4F6EF portrait placeholder
          ===================================================================== */}
      <section className="section section-mist has-glows">
        <div className="glow-orb glow-saffron-tr" aria-hidden="true" />
        <div className="glow-orb glow-teal-bl" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">Leadership</span>
            <h2>The <span className="text-highlight-blue">team</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Experienced trade specialists supervising procurement and port logistics.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '32px',
            }}
          >
            {[
              { initials: 'TM', role: 'Director - Exports', desc: 'Oversees commercial partnerships and overseas buyer relationships.' },
              { initials: 'TM', role: 'Head of Sourcing', desc: 'Manages farmer aggregation and packhouse grading protocols.' },
              { initials: 'TM', role: 'Logistics Lead', desc: 'Coordinates cold chain reefers, customs documentation and vessel booking.' },
            ].map((member, idx) => (
              <div key={idx} className="card" style={{ textAlign: 'center', alignItems: 'center' }}>
                {/* Rounded portrait placeholder */}
                <div
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    backgroundColor: '#F4F6EF',
                    color: 'var(--olive-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '28px',
                    marginBottom: '16px',
                    border: '1px solid var(--line)',
                  }}
                >
                  {member.initials}
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>Team Member Name</h3>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--olive)', marginBottom: '8px' }}>
                  {member.role}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '16px', flexGrow: 1 }}>
                  {member.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <a href="#" aria-label="LinkedIn profile" style={{ color: 'var(--navy)', opacity: 0.8 }}>
                    <LinkedInIcon />
                  </a>
                  <span className="eyebrow" style={{ fontSize: '11px', padding: '3px 8px' }}>
                    Sample
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. COMPANY DETAILS (white)
          White .card with 2-column table + olive-tint card
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro left">
            <span className="eyebrow">Corporate Registration</span>
            <h2>Company details.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Statutory registration and registered office particulars.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '32px',
              alignItems: 'stretch',
            }}
          >
            {/* White card with 2-column table */}
            <div className="card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { label: 'Legal name', value: 'Vasudha Freshline Exports LLP' },
                  { label: 'Constitution', value: 'Limited Liability Partnership (India)' },
                  { label: 'LLPIN', value: 'AAA-0000' },
                  { label: 'IEC', value: '0000000000' },
                  { label: 'GST', value: '0000000000' },
                  { label: 'APEDA', value: 'AAA-0000' },
                  { label: 'Registered office', value: 'Street, City, State, PIN' },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingBottom: '10px',
                      borderBottom: '1px solid var(--line)',
                      fontSize: '14px',
                    }}
                  >
                    <span style={{ color: 'var(--muted)' }}>{row.label}</span>
                    <strong style={{ color: 'var(--navy)', textAlign: 'right' }}>{row.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Beside it: Olive-tint card */}
            <div
              className="card"
              style={{
                backgroundColor: 'var(--olive-tint)',
                border: '1px solid rgba(104, 112, 54, 0.2)',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '16px',
              }}
            >
              <div className="icon-circle" style={{ backgroundColor: 'var(--white)' }}>
                <Award size={24} style={{ color: 'var(--olive-deep)' }} />
              </div>
              <h3 style={{ fontSize: '24px', color: 'var(--navy)', margin: 0 }}>
                Need documents for your records? Ask us.
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--body)', margin: 0 }}>
                We provide copies of our LLP incorporation, IEC certificate, APEDA registration and GST certificates for overseas KYC compliance.
              </p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => onOpenRfq()}
                style={{ backgroundColor: 'var(--white)' }}
              >
                <span>Request documents</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. QUOTE FORM (Light mist with white card + glows)
          ===================================================================== */}
      <QuoteFormSection />
    </div>
  );
};
