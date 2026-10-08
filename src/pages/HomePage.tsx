import React, { useEffect } from 'react';
import { Button } from '../components/Button';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { SeasonalityGrid } from '../components/SeasonalityGrid';
import { DocumentaryVideoPlayer } from '../components/DocumentaryVideoPlayer';
import { AccreditationRibbon } from '../components/AccreditationRibbon';
import { LogisticsCorridor } from '../components/LogisticsCorridor';
import { PackagingFormats } from '../components/PackagingFormats';
import { BuyerFaq } from '../components/BuyerFaq';
import { PRODUCTS_DATA } from '../data/commodities';
import { IMAGES, VIDEOS } from '../data/images';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
  onOpenBrochure?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenRfq, onOpenBrochure }) => {
  const products = Object.values(PRODUCTS_DATA);

  // Initialize scroll reveal observer
  useEffect(() => {
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
  }, []);

  return (
    <main>
      {/* ===================================================================
          1. HERO SECTION (85vh on desktop, auto on mobile)
          Left: text + buttons. Right: 4:5 image with 1px offset frame.
          =================================================================== */}
      <section
        style={{
          backgroundColor: 'var(--ivory)',
          paddingTop: '64px',
          paddingBottom: '88px',
          overflow: 'hidden',
        }}
        className="hairline-b"
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '32px',
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            {/* Left 7 Columns */}
            <div style={{ gridColumn: 'span 7' }} className="hero-text-col reveal">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span className="label-caps" style={{ color: 'var(--olive)', fontWeight: 600 }}>
                  Indian Agricultural Exports
                </span>
                <span style={{ color: 'var(--line)' }}>•</span>
                <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.04em' }}>
                  Container Loads to Global Wholesalers & Importers
                </span>
              </div>

              <h1 style={{ marginBottom: '24px' }}>
                Indian produce, exported with precision.
              </h1>

              <p
                style={{
                  fontSize: '19px',
                  lineHeight: '30px',
                  color: 'var(--charcoal)',
                  maxWidth: '580px',
                  marginBottom: '36px',
                }}
              >
                Pomegranates, onions, rice, spices, fruits and vegetables, sourced, graded, packed and shipped by container to importers and wholesalers.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <Button variant="primary" onClick={() => onOpenRfq()} icon>
                  Request a quote
                </Button>

                <button
                  type="button"
                  onClick={() => onNavigate('/products')}
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>View products</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>

                {onOpenBrochure && (
                  <button
                    type="button"
                    onClick={onOpenBrochure}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--navy)',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textUnderlineOffset: '4px',
                      padding: '8px 4px',
                    }}
                  >
                    Download Profile (PDF)
                  </button>
                )}
              </div>

              <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: 'var(--muted)', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} strokeWidth={1.5} color="var(--olive)" />
                  <span>APEDA & Phytosanitary inspection</span>
                </div>
                <span>•</span>
                <span>JNPT Nhava Sheva departures (~4.5h from Nashik)</span>
              </div>
            </div>

            {/* Right 5 Columns: 4:5 image with 1px line offset frame (no shadow) */}
            <div style={{ gridColumn: 'span 5', position: 'relative' }} className="hero-image-col reveal reveal-delay-1">
              {/* 1px offset frame */}
              <div
                className="hero-offset-frame"
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  right: '-16px',
                  bottom: '-16px',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  pointerEvents: 'none',
                }}
              />

              {/* Main 4:5 Image */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <PhotoPlaceholder
                  label="HERO: Bhagwa pomegranate cut open on natural stone"
                  subtext="Documentary photograph · Natural studio lighting · Neutral surface · 4:5"
                  aspectRatio="4:5"
                  src={IMAGES.heroPomegranate}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. TRUST STRIP (visible in first screen on large monitors)
          Four columns separated by 1px vertical lines
          =================================================================== */}
      <section className="hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            }}
            className="trust-strip-grid"
          >
            <div style={{ padding: '24px 20px', borderRight: '1px solid var(--line)' }} className="trust-col reveal">
              <span className="label-caps" style={{ display: 'block', marginBottom: '6px' }}>
                Products
              </span>
              <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--ink)' }}>
                6 core categories
              </span>
            </div>

            <div style={{ padding: '24px 20px', borderRight: '1px solid var(--line)' }} className="trust-col reveal reveal-delay-1">
              <span className="label-caps" style={{ display: 'block', marginBottom: '6px' }}>
                Shipping
              </span>
              <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--ink)' }}>
                FCL Ocean Freight & Air Cargo
              </span>
            </div>

            <div style={{ padding: '24px 20px', borderRight: '1px solid var(--line)' }} className="trust-col reveal reveal-delay-2">
              <span className="label-caps" style={{ display: 'block', marginBottom: '6px' }}>
                Registered exporter
              </span>
              <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--ink)' }}>
                IEC: 0324089121 · APEDA · FSSAI
              </span>
            </div>

            <div style={{ padding: '24px 20px' }} className="trust-col reveal reveal-delay-3">
              <span className="label-caps" style={{ display: 'block', marginBottom: '6px' }}>
                Documents
              </span>
              <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--ink)' }}>
                Full Phytosanitary & Trade Sets
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2.5 ACCREDITATIONS & STATUTORY COMPLIANCE RIBBON (DMK Agro / Savaliya Pattern)
          =================================================================== */}
      <AccreditationRibbon onNavigateToQuality={() => onNavigate('/quality')} />

      {/* ===================================================================
          3. WHAT WE EXPORT
          Eyebrow "PRODUCTS", H2 "What we export", 3x2 grid of 6 tiles separated by 1px lines
          =================================================================== */}
      <section id="products" className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '56px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
              Products
            </span>
            <h2 style={{ marginBottom: '12px' }}>What we export</h2>
            <p style={{ color: 'var(--muted)', fontSize: '16px' }}>
              We export exclusively by container to overseas importers, retail distributors and food processing enterprises.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '1px solid var(--line)',
              borderLeft: '1px solid var(--line)',
            }}
            className="products-grid-3x2"
          >
            {products.map((p, idx) => (
              <article
                key={p.slug}
                className={`reveal reveal-delay-${(idx % 3) + 1}`}
                style={{
                  borderRight: '1px solid var(--line)',
                  borderBottom: '1px solid var(--line)',
                  padding: '28px 24px',
                  backgroundColor: 'var(--ivory)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'background-color 200ms ease',
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <PhotoPlaceholder
                    label={p.packingPhotos[0].label}
                    subtext={p.packingPhotos[0].subtext}
                    aspectRatio="4:5"
                    src={p.packingPhotos[0].src}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '26px', lineHeight: '32px' }}>
                    {p.name}
                  </h3>
                  <span className="text-small" style={{ color: 'var(--muted)', fontSize: '12px' }}>
                    1 FCL MOQ
                  </span>
                </div>

                <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)', marginBottom: '20px', flexGrow: 1 }}>
                  {p.slug === 'pomegranates' && 'Bhagwa variety · Counts 9–15 · 3.5kg / 5.0kg telescopic cartons'}
                  {p.slug === 'onions' && 'Red & White onions · Season Oct to Apr · 10/25kg leno mesh bags'}
                  {p.slug === 'rice' && '1121 Basmati & Non-Basmati · 25 MT per 20ft dry FCL'}
                  {p.slug === 'spices' && 'Whole & ground Cumin, Turmeric, Chilli · EtO tested'}
                  {p.slug === 'fresh-fruits' && 'Table grapes, bananas, mangoes · Pre-cooled cold chain'}
                  {p.slug === 'fresh-vegetables' && 'Green chillies, okra, ginger, lemon · Cold-chain packed'}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/products/${p.slug}`)}
                    className="text-link"
                    style={{ background: 'none', border: 'none', padding: 0, font: 'inherit' }}
                  >
                    <span>Specification</span>
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenRfq(p.name)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--navy)',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      padding: '4px 0',
                    }}
                  >
                    Request quote
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. HOW AN ORDER MOVES (Bone background)
          Five numbered steps in horizontal line (vertical mobile)
          =================================================================== */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '56px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
              Execution
            </span>
            <h2>From enquiry to arrival</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '24px',
              marginBottom: '40px',
            }}
            className="order-steps-grid"
          >
            {[
              { num: '01', title: 'Enquiry', text: 'Tell us the product, quantity and destination.' },
              { num: '02', title: 'Specification', text: 'We confirm grade, size and packing and send a spec sheet.' },
              { num: '03', title: 'Sourcing & grading', text: 'Produce is selected and graded to your specification.' },
              { num: '04', title: 'Packing & loading', text: 'Packed, labelled and loaded into the container.' },
              { num: '05', title: 'Documents & shipping', text: 'Export documents prepared; the shipment is followed until arrival.' },
            ].map((step, idx) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${idx + 1}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--line)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--olive)',
                    marginBottom: '8px',
                  }}
                >
                  {step.num}
                </span>
                <h3 style={{ fontSize: '18px', lineHeight: '24px', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal">
            <button
              type="button"
              onClick={() => onNavigate('/export')}
              className="text-link"
              style={{ background: 'none', border: 'none', font: 'inherit', padding: 0 }}
            >
              <span>See the full export process</span>
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4.5 PACKAGING FORMATS SHOWCASE (Horizon Exim / DMK Agro Pattern)
          =================================================================== */}
      <PackagingFormats onOpenRfq={onOpenRfq} />

      {/* ===================================================================
          5. QUALITY AND DOCUMENTS
          Two columns: Left text, right list of documents with "Provided" tag
          =================================================================== */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '48px',
              alignItems: 'start',
            }}
            className="quality-home-grid"
          >
            {/* Left 6 cols */}
            <div style={{ gridColumn: 'span 6' }} className="quality-text-col reveal">
              <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
                Quality
              </span>
              <h2 style={{ marginBottom: '20px' }}>
                Every shipment leaves with its paperwork in order.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)', marginBottom: '24px' }}>
                Export compliance is built on verification. We inspect calibration, core pulp temperature and outer packing integrity at the Nashik packhouse before booking reefer container stuffing at JNPT / Nhava Sheva.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/quality')}
                className="text-link"
                style={{ background: 'none', border: 'none', font: 'inherit', padding: 0 }}
              >
                <span>Quality and compliance</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </div>

            {/* Right 6 cols: Document rows with "Provided" tag */}
            <div
              style={{
                gridColumn: 'span 6',
                borderTop: '1px solid var(--line)',
              }}
              className="quality-list-col reveal reveal-delay-1"
            >
              {[
                { name: 'Commercial Invoice with HS codes', note: 'Standard' },
                { name: 'Detailed Packing List & Weight Certificate', note: 'Standard' },
                { name: 'Official Phytosanitary Certificate (PSC)', note: 'Mandatory' },
                { name: 'Certificate of Origin (Chamber of Commerce)', note: 'Standard' },
                { name: 'Clean on Board Ocean Bill of Lading (B/L)', note: 'Standard' },
                { name: 'Independent Surveyor Lab Report (SGS/Bureau Veritas)', note: 'On Request' },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span style={{ fontSize: '15px', color: 'var(--ink)' }}>
                    {doc.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--line)',
                      color: 'var(--charcoal)',
                      backgroundColor: 'var(--bone)',
                    }}
                  >
                    Provided
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. SEASONAL AVAILABILITY
          12-month calendar grid
          =================================================================== */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '40px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
              Crop Cycles
            </span>
            <h2 style={{ marginBottom: '12px' }}>When each product is available</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              Red onions export October to April (peak December to February). Other crop harvest timings calibrated below.
            </p>
          </div>

          <div className="reveal">
            <SeasonalityGrid onSelectProduct={(slug) => onNavigate(`/products/${slug}`)} />
          </div>
        </div>
      </section>

      {/* ===================================================================
          6.5 LOGISTICS & COLD-CHAIN HIGHWAY CORRIDOR (Nashik to JNPT in 4.5h)
          =================================================================== */}
      <LogisticsCorridor onOpenRfq={onOpenRfq} onNavigateToExport={() => onNavigate('/export')} />

      {/* ===================================================================
          7. FROM THE FIELD TO THE MARKET (Navy background)
          Three portrait 9:16 media frames: real client video proof!
          =================================================================== */}
      <section
        className="dark-section"
        style={{
          backgroundColor: 'var(--navy)',
          color: 'var(--ivory)',
          paddingTop: '100px',
          paddingBottom: '100px',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '56px' }} className="reveal">
            <span className="label-caps" style={{ color: 'var(--olive-light)', display: 'block', marginBottom: '12px' }}>
              Documentary Proof
            </span>
            <h2 style={{ color: 'var(--ivory)', marginBottom: '16px' }}>
              From the field to the market
            </h2>
            <p style={{ color: 'var(--bone)', fontSize: '16px' }}>
              We document our consignments from packing and container stuffing in India to discharge at destination wholesale markets.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
            }}
            className="field-market-grid"
          >
            {/* Frame 1: Real client video IMG_8996 */}
            <div className="reveal">
              <DocumentaryVideoPlayer
                src={VIDEOS.loadingSource}
                title="Loading at source"
                caption="Covered packhouse facility: onion sorting, leno mesh bag stacks, and container doorway."
              />
            </div>

            {/* Frame 2: Real client video IMG_9086 */}
            <div className="reveal reveal-delay-1">
              <DocumentaryVideoPlayer
                src={VIDEOS.containerYard}
                title="Container yard inspection"
                caption="Logistics yard: container stuffing, PTI pre-trip inspection, and high-security seal application."
              />
            </div>

            {/* Frame 3: Real client video IMG_9078 */}
            <div className="reveal reveal-delay-2">
              <DocumentaryVideoPlayer
                src={VIDEOS.wholesaleMarket}
                title="Arrival at wholesale market"
                caption="Overseas wholesale market lane: container de-stuffing, trolleys, and arrival grading check."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          7.5 COMMERCIAL BUYER FAQ ACCORDION (Horizon Exim Pattern)
          =================================================================== */}
      <BuyerFaq onOpenRfq={onOpenRfq} />

      {/* ===================================================================
          8. MARKETS
          Eyebrow "MARKETS", H2 "Where we ship", three-column text list
          =================================================================== */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
              Markets
            </span>
            <h2 style={{ marginBottom: '12px' }}>Where we ship</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              Direct maritime container departures from JNPT / Nhava Sheva (INNSA) to major commercial discharge terminals.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              borderTop: '1px solid var(--line)',
              paddingTop: '32px',
              marginBottom: '32px',
            }}
            className="markets-3col"
          >
            <div className="reveal">
              <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
                Arabian Gulf
              </span>
              <p style={{ fontSize: '16px', lineHeight: '24px', color: 'var(--ink)' }}>
                United Arab Emirates (Jebel Ali), Saudi Arabia (Dammam, Jeddah), Oman, Qatar, Kuwait.
              </p>
            </div>

            <div className="reveal reveal-delay-1">
              <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
                South & South-East Asia
              </span>
              <p style={{ fontSize: '16px', lineHeight: '24px', color: 'var(--ink)' }}>
                Malaysia (Port Klang), Singapore, Sri Lanka (Colombo), Bangladesh (Chittagong).
              </p>
            </div>

            <div className="reveal reveal-delay-2">
              <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
                African Distribution Hubs
              </span>
              <p style={{ fontSize: '16px', lineHeight: '24px', color: 'var(--ink)' }}>
                East and West African commercial grain and commodity import gateways (Mombasa, Dar es Salaam).
              </p>
            </div>
          </div>

          <div className="reveal">
            <button
              type="button"
              onClick={() => onNavigate('/export')}
              className="text-link"
              style={{ background: 'none', border: 'none', font: 'inherit', padding: 0 }}
            >
              <span>Shipping and logistics</span>
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================================
          9. ABOUT SNIPPET
          Two columns: Left 3:2 photo, Right text + link
          =================================================================== */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '48px',
              alignItems: 'center',
            }}
            className="about-home-grid"
          >
            <div style={{ gridColumn: 'span 6' }} className="about-photo-col reveal">
              <PhotoPlaceholder
                label="Team operations: Sorting & grading inspection at loading dock"
                subtext="Documentary photograph · Neutral surface · 3:2"
                aspectRatio="3:2"
                src={IMAGES.packhouseInspection}
              />
            </div>

            <div style={{ gridColumn: 'span 6' }} className="about-text-col reveal reveal-delay-1">
              <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
                About
              </span>
              <h2 style={{ marginBottom: '20px' }}>
                A direct line to the people who ship your order.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)', marginBottom: '24px' }}>
                Vasudha Freshline Exports LLP operates with full operational transparency. Importers speak directly with trade officers who oversee sourcing, grading calibration, and port stuffing.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/about')}
                className="text-link"
                style={{ background: 'none', border: 'none', font: 'inherit', padding: 0 }}
              >
                <span>About us</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          10. CLOSING CALL TO ACTION (Navy Band)
          "Tell us what you need." Buttons: primary (ivory fill, navy text)
          =================================================================== */}
      <section
        className="dark-section"
        style={{
          backgroundColor: 'var(--navy)',
          color: 'var(--ivory)',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '32px',
            }}
            className="reveal"
          >
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ color: 'var(--ivory)', marginBottom: '12px' }}>
                Tell us what you need.
              </h2>
              <p style={{ color: 'var(--bone)', fontSize: '16px' }}>
                Share the product, quantity and destination. We reply with specification and indicative pricing within 24 hours.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <button
                type="button"
                onClick={() => onOpenRfq()}
                style={{
                  height: '52px',
                  padding: '0 28px',
                  backgroundColor: 'var(--ivory)',
                  color: 'var(--navy)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 500,
                  border: '1px solid var(--ivory)',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Request a quote
              </button>

              <a
                href="https://wa.me/?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  borderColor: 'var(--ivory)',
                  color: 'var(--ivory)',
                  textDecoration: 'none',
                }}
              >
                <MessageSquare size={16} strokeWidth={1.5} color="var(--olive-light)" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid,
          .quality-home-grid,
          .about-home-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
          }
          .hero-text-col, .hero-image-col,
          .quality-text-col, .quality-list-col,
          .about-photo-col, .about-text-col {
            width: 100% !important;
            max-width: 100% !important;
          }
          .hero-offset-frame {
            display: none !important;
          }
          .products-grid-3x2 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .order-steps-grid {
            grid-template-columns: 1fr !important;
          }
          .trust-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .field-market-grid, .markets-3col {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .products-grid-3x2, .trust-strip-grid {
            grid-template-columns: 1fr !important;
          }
          .trust-col {
            border-right: none !important;
            border-bottom: 1px solid var(--line) !important;
          }
        }
      `}</style>
    </main>
  );
};
