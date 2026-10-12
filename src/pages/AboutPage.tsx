import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  Eye,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  Lock,
  FileText,
  Download,
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { DarkStatsBand } from '../components/DarkStatsBand';
import { CallStrip } from '../components/CallStrip';
import { ClosingCtaBand } from '../components/ClosingCtaBand';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenRfq }) => {
  // Timeline scroll highlight effect
  const [activeMilestone, setActiveMilestone] = useState<number>(0);
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.65;
      milestoneRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY) {
            setActiveMilestone(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '10+', label: 'Years in export' },
    { number: '100+', label: 'Containers shipped' },
    { number: '15+', label: 'Countries served' },
    { number: '50+', label: 'Buyers' },
  ];

  const values = [
    {
      title: 'Clarity',
      gradient: 'linear-gradient(135deg, var(--leaf) 0%, #3B5314 100%)',
      icon: CheckCircle2,
      lines: [
        'Specifications and terms in writing.',
        'Clear tolerance parameters, Brix measurements and carton weights agreed before invoice.',
        'Zero ambiguous clauses or unexpected demurrage costs.',
      ],
    },
    {
      title: 'Reliability',
      gradient: 'linear-gradient(135deg, var(--blue) 0%, #1A3480 100%)',
      icon: ShieldCheck,
      lines: [
        'Scheduled container departures from Nhava Sheva and Mundra ports.',
        'Calibrated packhouse cold-chain controls maintaining pulp temperatures throughout.',
        'Consistent produce grade and count from the first carton to the last pallet.',
      ],
    },
    {
      title: 'Personal service',
      gradient: 'linear-gradient(135deg, var(--teal) 0%, #064447 100%)',
      icon: UserCheck,
      lines: [
        'One dedicated point of contact for every contract.',
        'Direct updates from farm sorting, container stuffing and port gate-in.',
        'Immediate responses across WhatsApp, email and phone throughout transit.',
      ],
    },
    {
      title: 'Privacy',
      gradient: 'linear-gradient(135deg, var(--saffron) 0%, #7A3D03 100%)',
      icon: Lock,
      lines: [
        'Your trade details and volumes stay strictly confidential.',
        'Discreet commercial documentation aligned with your customs and buyer preferences.',
        'Full compliance with international anti-disclosure and KYC norms.',
      ],
    },
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Founded',
      desc: 'Established in Maharashtra with a clear charter: supplying verified fresh agricultural commodities directly from regional packhouses to global buyers.',
    },
    {
      year: '2017',
      title: 'First containers shipped',
      desc: 'Dispatched our first commercial reefer containers of Bhagwa pomegranates to the Gulf Cooperation Council (GCC) with 100% arrival compliance.',
    },
    {
      year: '2019',
      title: 'New products added',
      desc: 'Expanded export portfolio to include Nashik export-grade red onions, traditional aged Basmati rice, and sorted Indian spices in customized packing.',
    },
    {
      year: '2021',
      title: 'Registrations completed',
      desc: 'Obtained comprehensive export licenses and accreditations including APEDA, FSSAI, Spices Board, and international phytosanitary clearing codes.',
    },
    {
      year: '2023',
      title: 'New markets opened',
      desc: 'Established scheduled delivery corridors to Southeast Asian distribution hubs and select European importers through dedicated freight partner agreements.',
    },
    {
      year: '2025',
      title: 'Today',
      desc: 'A trusted container-volume supplier serving over 50 recurring buyers across 15+ countries, upholding transparent export standards on every bill of lading.',
    },
  ];

  const founders = [
    {
      initials: 'NM',
      name: 'Nikhil Malvi',
      title: 'Managing Partner & Export Operations',
      bio: 'Leads packhouse grading infrastructure, container stuffing protocols, and cold-chain compliance across Western India.',
      gradient: 'linear-gradient(135deg, var(--leaf) 0%, #2E400E 100%)',
    },
    {
      initials: 'RP',
      name: 'Ramesh Patel',
      title: 'Head of Procurement & Grower Relations',
      bio: 'Maintains direct ties with certified orchard and farm clusters, ensuring consistent harvest quality and strict residue compliance.',
      gradient: 'linear-gradient(135deg, var(--blue) 0%, #152B6B 100%)',
    },
    {
      initials: 'AS',
      name: 'Anand Sharma',
      title: 'Director of Global Trade & Documentation',
      bio: 'Manages international buyer relationships, phytosanitary clearance, letters of credit, and swift BL dispatch.',
      gradient: 'linear-gradient(135deg, var(--teal) 0%, #064043 100%)',
    },
  ];

  return (
    <div className="about-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. INNER BANNER (Pattern A)
          ===================================================================== */}
      <InnerBanner
        pill="About us"
        title="From Indian farms to your port."
        subtitle="Vasudha Freshline Exports LLP ships pomegranates, onions, rice, spices, fruits and vegetables by the container to importers and wholesalers."
      />

      {/* =====================================================================
          2. DARK STATS BAND (Pattern B)
          ===================================================================== */}
      <DarkStatsBand stats={stats} caption="Sample figures" />

      {/* =====================================================================
          3. MISSION AND VISION (white section)
          Two large white cards side by side (--shadow-md, radius 24px, padding 40px)
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '32px',
            }}
          >
            {/* Mission Card */}
            <div
              className="card"
              style={{
                borderRadius: '24px',
                padding: '40px',
                boxShadow: 'var(--shadow-md)',
                backgroundColor: 'var(--white)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  className="icon-circle"
                  style={{
                    backgroundColor: 'var(--leaf-tint)',
                    color: 'var(--leaf)',
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                  }}
                >
                  <Compass size={24} />
                </div>
                <div>
                  <span
                    className="eyebrow"
                    style={{
                      fontSize: '11px',
                      padding: '4px 10px',
                      backgroundColor: 'var(--leaf-tint)',
                      color: 'var(--leaf)',
                    }}
                  >
                    Our mission
                  </span>
                </div>
              </div>

              <h3 style={{ fontSize: '24px', lineHeight: '1.3', color: 'var(--navy)', margin: 0 }}>
                Make importing Indian produce simple and clear for every buyer.
              </h3>

              <p style={{ fontSize: '15px', lineHeight: '26px', color: 'var(--muted)', margin: 0 }}>
                We bridge certified growers and packhouses directly with global importers, eliminating intermediary delays and guaranteeing produce integrity from harvest to port.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '26px', color: 'var(--muted)', margin: 0 }}>
                Every consignment is packed to calibrated international size grades, inspected for phytosanitary clearance, and backed by prompt commercial documentation.
              </p>
            </div>

            {/* Vision Card */}
            <div
              className="card"
              style={{
                borderRadius: '24px',
                padding: '40px',
                boxShadow: 'var(--shadow-md)',
                backgroundColor: 'var(--white)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  className="icon-circle"
                  style={{
                    backgroundColor: 'var(--blue-tint)',
                    color: 'var(--blue)',
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                  }}
                >
                  <Eye size={24} />
                </div>
                <div>
                  <span
                    className="eyebrow"
                    style={{
                      fontSize: '11px',
                      padding: '4px 10px',
                      backgroundColor: 'var(--blue-tint)',
                      color: 'var(--blue)',
                    }}
                  >
                    Our vision
                  </span>
                </div>
              </div>

              <h3 style={{ fontSize: '24px', lineHeight: '1.3', color: 'var(--navy)', margin: 0 }}>
                Be the Indian exporter importers come back to, order after order.
              </h3>

              <p style={{ fontSize: '15px', lineHeight: '26px', color: 'var(--muted)', margin: 0 }}>
                Building long-term global trade partnerships grounded in total contract reliability, transparent communication, and uncompromised cargo quality.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '26px', color: 'var(--muted)', margin: 0 }}>
                We envision a global produce supply chain where Indian agricultural excellence is recognized for consistent sizing, pristine packaging, and dependable arrival standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. OUR VALUES (mist with two glows)
          Intro (C) + Four equal white cards (centred content)
          ===================================================================== */}
      <section className="section section-mist has-glows">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-teal-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">Our values</span>
            <h2>What we <span className="text-highlight-leaf">stand for</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Core principles guiding every contract, harvest selection, and container shipment.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '24px',
              marginTop: '48px',
            }}
          >
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div
                  key={idx}
                  className="card"
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: '20px',
                    padding: '36px 28px',
                    textAlign: 'center',
                    alignItems: 'center',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: v.gradient,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: 'var(--shadow-md)',
                      border: '3px solid #FFFFFF',
                    }}
                  >
                    <IconComp size={28} />
                  </div>

                  <h3 style={{ fontSize: '20px', margin: '0 0 12px 0', color: 'var(--navy)' }}>{v.title}</h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                    {v.lines.map((line, lIdx) => (
                      <p
                        key={lIdx}
                        style={{
                          fontSize: '14px',
                          lineHeight: '22px',
                          color: lIdx === 0 ? 'var(--navy)' : 'var(--muted)',
                          fontWeight: lIdx === 0 ? 600 : 400,
                          margin: 0,
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. OUR JOURNEY (white section)
          Intro (C) + Vertical timeline (narrow centred column, 760px)
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Our journey</span>
            <h2>How we <span className="text-highlight-blue">got here</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">From a regional produce exporter to an international trade partner.</p>
          </div>

          <div
            style={{
              maxWidth: '760px',
              margin: '56px auto 0 auto',
              position: 'relative',
              paddingLeft: '32px',
            }}
          >
            {/* Timeline Line */}
            <div
              style={{
                position: 'absolute',
                left: '20px',
                top: '20px',
                bottom: '20px',
                width: '2px',
                backgroundColor: 'var(--line)',
                zIndex: 0,
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {milestones.map((item, idx) => {
                const isActive = activeMilestone >= idx;
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      milestoneRefs.current[idx] = el;
                    }}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '24px',
                    }}
                  >
                    {/* Circle Year Marker */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-32px',
                        top: '0',
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: isActive
                          ? 'linear-gradient(135deg, var(--leaf) 0%, var(--blue) 100%)'
                          : 'var(--mist)',
                        color: isActive ? '#FFFFFF' : 'var(--muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 700,
                        border: '3px solid #FFFFFF',
                        boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                        zIndex: 1,
                        transition: 'all 0.4s ease',
                      }}
                    >
                      {item.year.slice(-2)}'
                    </div>

                    {/* Content Box */}
                    <div
                      style={{
                        marginLeft: '36px',
                        backgroundColor: 'var(--white)',
                        borderRadius: '16px',
                        padding: '24px 28px',
                        border: '1px solid var(--border-subtle)',
                        boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                        width: '100%',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        transform: isActive ? 'translateX(4px)' : 'none',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            color: 'var(--leaf)',
                            backgroundColor: 'var(--leaf-tint)',
                            padding: '2px 8px',
                            borderRadius: '12px',
                          }}
                        >
                          {item.year}
                        </span>
                        <h3 style={{ fontSize: '18px', color: 'var(--navy)', margin: 0 }}>{item.title}</h3>
                      </div>
                      <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--muted)', margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.04em' }}>
                Sample timeline
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. MEET THE FOUNDERS (mist section)
          Intro (C) + Three white cards
          ===================================================================== */}
      <section className="section section-mist has-glows">
        <div className="glow-orb glow-plum-tr" aria-hidden="true" />
        <div className="glow-orb glow-leaf-bl" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">The team</span>
            <h2>Meet the <span className="text-highlight-leaf">founders</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Experienced trade leadership dedicated to direct grower relationships and precise ocean logistics.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '32px',
              marginTop: '48px',
            }}
          >
            {founders.map((f, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: '24px',
                  padding: '36px 30px',
                  textAlign: 'center',
                  alignItems: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {/* 80px gradient circle initials avatar */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: f.gradient,
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    boxShadow: 'var(--shadow-md)',
                    border: '4px solid #FFFFFF',
                    marginBottom: '20px',
                  }}
                >
                  {f.initials}
                </div>

                <h3 style={{ fontSize: '20px', margin: '0 0 4px 0', color: 'var(--navy)' }}>{f.name}</h3>

                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--leaf)',
                    marginBottom: '14px',
                  }}
                >
                  {f.title}
                </div>

                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: '22px',
                    color: 'var(--muted)',
                    margin: '0 0 20px 0',
                    flexGrow: 1,
                  }}
                >
                  {f.bio}
                </p>

                <div style={{ marginTop: 'auto' }}>
                  <span
                    className="eyebrow"
                    style={{
                      fontSize: '11px',
                      padding: '3px 10px',
                      backgroundColor: 'var(--mist)',
                      color: 'var(--body)',
                      border: '1px solid var(--line)',
                    }}
                  >
                    Sample
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. COMPANY DETAILS (white section)
          Two-column layout: white table card + leaf-tint action card
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Credentials</span>
            <h2>Company <span className="text-highlight-blue">details</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Statutory compliance and registered Indian trade identity.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
              gap: '32px',
              marginTop: '48px',
              alignItems: 'stretch',
            }}
          >
            {/* White card with two-column table */}
            <div
              className="card"
              style={{
                borderRadius: '24px',
                padding: '36px',
                boxShadow: 'var(--shadow-md)',
                backgroundColor: 'var(--white)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <h3 style={{ fontSize: '20px', color: 'var(--navy)', marginBottom: '20px' }}>
                Statutory Registration
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '14px', color: 'var(--muted)' }}>Legal name:</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)' }}>Vasudha Freshline Exports LLP</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '14px', color: 'var(--muted)' }}>Constitution:</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--body)' }}>Limited Liability Partnership (India)</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '14px', color: 'var(--muted)' }}>LLPIN:</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--body)' }}>AAA-0000</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '14px', color: 'var(--muted)' }}>IEC:</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--body)' }}>0000000000</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '14px', color: 'var(--muted)' }}>GST:</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--body)' }}>0000000000</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '14px', color: 'var(--muted)' }}>APEDA:</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--body)' }}>AAA-0000</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '4px' }}>
                  <span style={{ fontSize: '14px', color: 'var(--muted)' }}>Registered office:</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--body)', textAlign: 'right' }}>Street, City, State, PIN</span>
                </div>
              </div>
            </div>

            {/* Leaf-tint card */}
            <div
              className="card"
              style={{
                borderRadius: '24px',
                padding: '36px',
                backgroundColor: 'var(--leaf-tint)',
                border: '1px solid rgba(91, 122, 31, 0.18)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '20px',
              }}
            >
              <div
                className="icon-circle"
                style={{
                  backgroundColor: 'var(--white)',
                  color: 'var(--leaf)',
                  width: '56px',
                  height: '56px',
                  minWidth: '56px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <FileText size={26} />
              </div>

              <div>
                <h3 style={{ fontSize: '22px', color: 'var(--navy)', marginBottom: '8px' }}>
                  Need documents for your records? Ask us.
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--body)', margin: 0 }}>
                  We provide verified copies of our statutory export licenses, APEDA registration, GST certificates, and sample test certificates upon formal buyer inquiry.
                </p>
              </div>

              <div style={{ marginTop: '8px' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => onNavigate('/contact')}
                  style={{
                    backgroundColor: 'var(--white)',
                    borderColor: 'var(--navy)',
                    color: 'var(--navy)',
                  }}
                >
                  <Download size={16} />
                  <span>Request documents</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. CALL STRIP (Pattern D)
          ===================================================================== */}
      <section className="section section-white" style={{ paddingTop: '80px', paddingBottom: '104px' }}>
        <div className="container">
          <CallStrip />
        </div>
      </section>

      {/* =====================================================================
          9. CLOSING CTA BAND (Pattern E)
          ===================================================================== */}
      <ClosingCtaBand onOpenRfq={() => onOpenRfq()} onRequestQuote={() => onOpenRfq()} />
    </div>
  );
};
