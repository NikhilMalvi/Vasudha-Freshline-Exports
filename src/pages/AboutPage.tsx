import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Sprout,
  Package,
  Truck,
  FileText,
} from 'lucide-react';
import { IMAGES } from '../data/images';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

// Inline LinkedIn Icon
const LinkedInIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenRfq }) => {
  // Counters count-up trigger
  const [hasCounted, setHasCounted] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);
          const duration = 1200;
          const steps = 30;
          const stepTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCount1(Math.round(10 * progress));
            setCount2(Math.round(100 * progress));
            setCount3(Math.round(15 * progress));
            setCount4(Math.round(50 * progress));

            if (step >= steps) {
              clearInterval(timer);
              setCount1(10);
              setCount2(100);
              setCount3(15);
              setCount4(50);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20learn%20more%20about%20your%20company.';

  return (
    <div className="about-page-content" style={{ width: '100%', overflowX: 'hidden' }}>
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
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>About</span>
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
              <span className="eyebrow">ABOUT US</span>

              <h1 style={{ margin: 0 }}>
                Indian produce, exported worldwide.
              </h1>

              <p style={{ margin: 0, fontSize: '18px', lineHeight: '30px', color: 'var(--charcoal)' }}>
                Vasudha Freshline Exports LLP is an Indian agricultural export partnership shipping fresh produce and grains by container load.
              </p>

              <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--muted)' }}>
                We coordinate seasonal farm harvesting, packhouse grading and ocean freight to meet buyer arrival schedules.
              </p>

              <div style={{ paddingTop: '8px' }}>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onOpenRfq()}
                >
                  <span>Request a quote</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Column: Rounded image (4:3) with floating badge */}
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
                  src={IMAGES.packhouseInspection}
                  alt="Hands packing fresh produce in export cartons"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Floating Badge Card Top-Left: "10+" / "Years in export" */}
              <div
                className="card"
                style={{
                  position: 'absolute',
                  top: '-18px',
                  left: '-18px',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-floating)',
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '32px',
                    lineHeight: '36px',
                    color: 'var(--ink)',
                  }}
                >
                  10+
                </span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--charcoal)', marginTop: '2px' }}>
                  Years in export
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STORY (.section-white). Left paragraphs, Right image + quote card.
          ========================================================================= */}
      <section className="section-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '56px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: H2 & Three short paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span className="eyebrow">OUR BACKGROUND</span>

              <h2 style={{ margin: 0 }}>Our story</h2>

              <p style={{ margin: 0 }}>
                Vasudha Freshline Exports was established to bridge the gap between primary Indian growers and international produce markets.
              </p>

              <p style={{ margin: 0 }}>
                We operate from regional sourcing belts across western and central India, securing produce during prime harvest windows.
              </p>

              <p style={{ margin: 0 }}>
                Every container is handled with clear physical inspections, calibrated count grading and temperature management from loading to port departure.
              </p>
            </div>

            {/* Right Column: Rounded image + quote card */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px', margin: '0 auto' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bone)',
                }}
              >
                <img
                  src={IMAGES.portContainers}
                  alt="Stacked produce crates in clean warehouse"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Quote Card (no name) */}
              <div
                className="card"
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  right: '-16px',
                  padding: '18px 24px',
                  borderRadius: '12px',
                  maxWidth: '320px',
                  boxShadow: 'var(--shadow-floating)',
                  zIndex: 2,
                  borderLeft: '4px solid var(--olive)',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    lineHeight: '26px',
                    color: 'var(--ink)',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;A direct line from farm to port.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT WE DO (.section ivory). Three .card items: Source, Pack, Ship.
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px auto' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>OPERATIONS</span>
            <h2 style={{ margin: '10px 0 0 0' }}>What we do</h2>
          </div>

          <div
            className="grid-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '32px',
            }}
          >
            {/* Card 1: Source */}
            <div className="card" style={{ gap: '16px' }}>
              <div className="icon-circle">
                <Sprout size={24} />
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '24px' }}>
                Source
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', lineHeight: '24px' }}>
                Procurement directly from partner farms and certified regional aggregators in Maharashtra and Gujarat.
              </p>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--muted)', lineHeight: '24px' }}>
                Strict crop selection based on export calibration, colour uniformity and fruit skin health.
              </p>
            </div>

            {/* Card 2: Pack */}
            <div className="card" style={{ gap: '16px' }}>
              <div className="icon-circle">
                <Package size={24} />
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '24px' }}>
                Pack
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', lineHeight: '24px' }}>
                Grading and packaging performed in ventilated facilities using export-strength corrugated cartons and mesh bags.
              </p>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--muted)', lineHeight: '24px' }}>
                Individual weight sorting and protective liners applied to prevent transit bruising.
              </p>
            </div>

            {/* Card 3: Ship */}
            <div className="card" style={{ gap: '16px' }}>
              <div className="icon-circle">
                <Truck size={24} />
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '24px' }}>
                Ship
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', lineHeight: '24px' }}>
                Transport in calibrated refrigerated reefer containers through Nhava Sheva (JNPT) and Mundra ports.
              </p>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--muted)', lineHeight: '24px' }}>
                Pre-departure customs sealing, phytosanitary inspection and direct ocean line bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. COUNTERS (.band-navy). Four .stat items.
          ========================================================================= */}
      <section className="band-navy" ref={counterRef} style={{ padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            <div className="stat" style={{ alignItems: 'center', padding: '0 16px' }}>
              <div className="stat-number">
                {count1}<span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Years in export</div>
            </div>

            <div
              className="stat"
              style={{
                alignItems: 'center',
                padding: '0 16px',
                borderLeft: '1px solid rgba(247, 245, 239, 0.15)',
              }}
            >
              <div className="stat-number">
                {count2}<span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Containers shipped</div>
            </div>

            <div
              className="stat"
              style={{
                alignItems: 'center',
                padding: '0 16px',
                borderLeft: '1px solid rgba(247, 245, 239, 0.15)',
              }}
            >
              <div className="stat-number">
                {count3}<span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Countries served</div>
            </div>

            <div
              className="stat"
              style={{
                alignItems: 'center',
                padding: '0 16px',
                borderLeft: '1px solid rgba(247, 245, 239, 0.15)',
              }}
            >
              <div className="stat-number">
                {count4}<span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Buyers</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PROCESS (.section-white). Four .step items.
          ========================================================================= */}
      <section className="section-white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px auto' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>PROCESS</span>
            <h2 style={{ margin: '10px 0 0 0' }}>How an order moves</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '32px',
            }}
          >
            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">01</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Enquiry
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Submit commodity specifications, quantity and required destination port.
                </p>
              </div>
            </div>

            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">02</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Specification
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Agree on size grading, packaging cartons and departure schedule.
                </p>
              </div>
            </div>

            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">03</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Packing and loading
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Harvested produce sorted, packaged and loaded into export containers.
                </p>
              </div>
            </div>

            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">04</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Documents and shipping
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Clearance certificates, bill of lading and tracking records issued.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. TEAM (.section ivory). Three cards with #ECE8DC portrait placeholder.
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px auto' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>PEOPLE</span>
            <h2 style={{ margin: '10px 0 0 0' }}>The team</h2>
          </div>

          <div
            className="grid-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '32px',
            }}
          >
            {/* Member 1 */}
            <div className="card" style={{ gap: '20px', alignItems: 'center', textAlign: 'center' }}>
              {/* Rounded #ECE8DC portrait placeholder showing initials */}
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bone)',
                  color: 'var(--muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '28px',
                  border: '1px solid var(--line)',
                }}
              >
                TM
              </div>

              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Team Member Name
                </h3>
                <div style={{ fontSize: '14px', color: 'var(--olive-deep)', fontWeight: 500 }}>
                  Managing Partner
                </div>
              </div>

              <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                Oversees overseas trade coordination, buyer agreements and contract fulfilment.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                <a
                  href="#"
                  aria-label="LinkedIn profile"
                  style={{
                    color: 'var(--navy)',
                    opacity: 0.7,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '6px',
                  }}
                >
                  <LinkedInIcon />
                </a>
                <span className="pill">Sample</span>
              </div>
            </div>

            {/* Member 2 */}
            <div className="card" style={{ gap: '20px', alignItems: 'center', textAlign: 'center' }}>
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bone)',
                  color: 'var(--muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '28px',
                  border: '1px solid var(--line)',
                }}
              >
                TM
              </div>

              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Team Member Name
                </h3>
                <div style={{ fontSize: '14px', color: 'var(--olive-deep)', fontWeight: 500 }}>
                  Head of Sourcing & Packhouse
                </div>
              </div>

              <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                Directs procurement across agricultural clusters and oversees packhouse grading.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                <a
                  href="#"
                  aria-label="LinkedIn profile"
                  style={{
                    color: 'var(--navy)',
                    opacity: 0.7,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '6px',
                  }}
                >
                  <LinkedInIcon />
                </a>
                <span className="pill">Sample</span>
              </div>
            </div>

            {/* Member 3 */}
            <div className="card" style={{ gap: '20px', alignItems: 'center', textAlign: 'center' }}>
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bone)',
                  color: 'var(--muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '28px',
                  border: '1px solid var(--line)',
                }}
              >
                TM
              </div>

              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Team Member Name
                </h3>
                <div style={{ fontSize: '14px', color: 'var(--olive-deep)', fontWeight: 500 }}>
                  Logistics & Documentation
                </div>
              </div>

              <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                Manages port dispatch, reefer temperature records and export trade paperwork.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                <a
                  href="#"
                  aria-label="LinkedIn profile"
                  style={{
                    color: 'var(--navy)',
                    opacity: 0.7,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '6px',
                  }}
                >
                  <LinkedInIcon />
                </a>
                <span className="pill">Sample</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. COMPANY DETAILS (.section-white). Rounded card with 2-col table + bone panel.
          ========================================================================= */}
      <section className="section-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '40px',
              alignItems: 'stretch',
            }}
          >
            {/* Left: Rounded card with two-column table */}
            <div className="card" style={{ padding: '36px', gap: '24px' }}>
              <div>
                <span className="eyebrow">STATUTORY PROFILE</span>
                <h3 style={{ margin: '8px 0 0 0', fontSize: '24px' }}>Company details</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Legal name</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 600 }}>Vasudha Freshline Exports LLP</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Constitution</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Limited Liability Partnership (India)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>LLPIN</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>AAA-0000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>IEC</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>0000000000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>GST</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>0000000000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>APEDA</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>AAA-0000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Registered office</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Street, City, State, PIN</span>
                </div>
              </div>
            </div>

            {/* Right: Bone Info Panel */}
            <div
              style={{
                backgroundColor: 'var(--bone)',
                borderRadius: 'var(--radius-card)',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '20px',
                border: '1px solid var(--line)',
              }}
            >
              <div className="icon-circle" style={{ backgroundColor: 'var(--white)' }}>
                <FileText size={24} />
              </div>
              <h3 style={{ margin: 0, fontSize: '24px' }}>
                Need documents for your records? Ask us.
              </h3>
              <p style={{ margin: 0, color: 'var(--charcoal)', fontSize: '15px', lineHeight: '24px' }}>
                We provide registration certificates, tax identifiers and compliance records to commercial trading partners upon enquiry.
              </p>
              <div>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => onOpenRfq('Company Documents')}
                  style={{ backgroundColor: 'var(--white)' }}
                >
                  Request documents
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CLOSING BAND (.band-navy). H2 + one-sentence + buttons.
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
    </div>
  );
};
