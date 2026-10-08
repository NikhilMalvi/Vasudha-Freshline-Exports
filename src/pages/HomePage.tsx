import React, { useEffect } from 'react';
import { Button } from '../components/Button';
import { SeasonalityGrid } from '../components/SeasonalityGrid';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
  onOpenBrochure?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenRfq }) => {
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

  const exportCommodities = [
    {
      name: 'Pomegranates',
      category: 'Fresh Fruits',
      slug: 'pomegranates',
      specs: '[CONFIRM: varieties, counts and packing]',
      season: '[CONFIRM: season]',
      placeholderLabel: 'PHOTO: Pomegranates [CONFIRM]',
    },
    {
      name: 'Fresh Onions',
      category: 'Fresh Vegetables',
      slug: 'onions',
      specs: '[CONFIRM: varieties, size calibration and packing]',
      season: 'October to April (peak December to February)',
      placeholderLabel: 'PHOTO: Red onions in leno mesh bags [CONFIRM]',
    },
    {
      name: 'Rice',
      category: 'Grains & Cereals',
      slug: 'rice',
      specs: '[CONFIRM: varieties, milling and packing]',
      season: '[CONFIRM: season]',
      placeholderLabel: 'PHOTO: Milled rice [CONFIRM]',
    },
    {
      name: 'Spices',
      category: 'Spices',
      slug: 'spices',
      specs: '[CONFIRM: varieties, grades and packing]',
      season: '[CONFIRM: season]',
      placeholderLabel: 'PHOTO: Spices [CONFIRM]',
    },
    {
      name: 'Fresh Fruits',
      category: 'Fresh Fruits',
      slug: 'fresh-fruits',
      specs: '[CONFIRM: fruit varieties and packing]',
      season: '[CONFIRM: season]',
      placeholderLabel: 'PHOTO: Fresh fruits [CONFIRM]',
    },
    {
      name: 'Fresh Vegetables',
      category: 'Fresh Vegetables',
      slug: 'fresh-vegetables',
      specs: '[CONFIRM: vegetable varieties and packing]',
      season: '[CONFIRM: season]',
      placeholderLabel: 'PHOTO: Fresh vegetables [CONFIRM]',
    },
  ];

  return (
    <main style={{ backgroundColor: '#10104F', color: '#DAD8E8' }}>
      {/* ===================================================================
          1. HERO SECTION
          Slightly shorter so all four trust-strip columns are visible in the
          first screen at 1440px.
          Left: text + buttons. Right: 4:5 placeholder block (#1A1A66, 1px line
          frame offset 16px behind it) with label under it.
          =================================================================== */}
      <section
        style={{
          backgroundColor: '#10104F',
          paddingTop: '36px',
          paddingBottom: '36px',
          borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
          overflow: 'hidden',
        }}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span className="label-caps" style={{ color: '#A9B070', fontWeight: 600 }}>
                  Indian Agricultural Exports
                </span>
                <span style={{ color: 'rgba(247, 245, 239, 0.20)' }}>•</span>
                <span style={{ fontSize: '12px', color: '#B9B8D6', letterSpacing: '0.04em' }}>
                  Container Loads to Global Wholesalers & Importers
                </span>
              </div>

              <h1 style={{ color: '#F7F5EF', marginBottom: '18px', fontSize: '56px', lineHeight: '64px' }}>
                Indian produce, exported with precision.
              </h1>

              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: '#DAD8E8',
                  maxWidth: '560px',
                  marginBottom: '28px',
                }}
              >
                Pomegranates, onions, rice, spices, fruits and vegetables, sourced, graded, packed and shipped by container to importers and wholesalers.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '20px',
                }}
              >
                <Button variant="primary" onClick={() => onOpenRfq()}>
                  Request a quote
                </Button>

                <button
                  type="button"
                  onClick={() => onNavigate('/products')}
                  className="text-link"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    font: 'inherit',
                    fontSize: '15px',
                  }}
                >
                  <span>View products</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>

              {/* Two small lines under buttons as required */}
              <div
                style={{
                  marginTop: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '13px',
                  color: '#B9B8D6',
                  flexWrap: 'wrap',
                }}
              >
                <span>[CONFIRM: registrations, e.g. IEC · APEDA · FSSAI]</span>
                <span style={{ color: 'rgba(247, 245, 239, 0.30)' }}>•</span>
                <span>[CONFIRM: port of loading]</span>
              </div>
            </div>

            {/* Right 5 Columns: 4:5 placeholder block (#1A1A66, 1px line frame offset 16px behind it) */}
            <div style={{ gridColumn: 'span 5', position: 'relative' }} className="hero-image-col reveal reveal-delay-1">
              {/* 1px offset line frame behind */}
              <div
                className="hero-offset-frame"
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  right: '-16px',
                  bottom: '16px',
                  border: '1px solid rgba(247, 245, 239, 0.20)',
                  borderRadius: 'var(--radius)',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              />

              {/* Main 4:5 Placeholder Block */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 5',
                    backgroundColor: '#1A1A66',
                    border: '1px solid rgba(247, 245, 239, 0.20)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
                {/* Label under it, not on top */}
                <p
                  style={{
                    marginTop: '10px',
                    fontSize: '12px',
                    color: '#B9B8D6',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    textAlign: 'left',
                  }}
                >
                  HERO PHOTO: pomegranate cut open on stone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. TRUST STRIP
          Products "6 categories" | Shipping "Container loads [CONFIRM: sea / air]"
          | Registered exporter "[CONFIRM: IEC · APEDA · FSSAI]"
          | Documents "Provided with every shipment [CONFIRM]"
          =================================================================== */}
      <section
        style={{
          backgroundColor: '#0A0A38',
          borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            }}
            className="trust-strip-grid"
          >
            <div style={{ padding: '20px', borderRight: '1px solid rgba(247, 245, 239, 0.20)' }} className="trust-col reveal">
              <span className="label-caps" style={{ display: 'block', marginBottom: '6px', color: '#B9B8D6' }}>
                Products
              </span>
              <span style={{ fontSize: '15px', fontWeight: 500, color: '#F7F5EF' }}>
                6 categories
              </span>
            </div>

            <div style={{ padding: '20px', borderRight: '1px solid rgba(247, 245, 239, 0.20)' }} className="trust-col reveal reveal-delay-1">
              <span className="label-caps" style={{ display: 'block', marginBottom: '6px', color: '#B9B8D6' }}>
                Shipping
              </span>
              <span style={{ fontSize: '15px', fontWeight: 500, color: '#F7F5EF' }}>
                Container loads [CONFIRM: sea / air]
              </span>
            </div>

            <div style={{ padding: '20px', borderRight: '1px solid rgba(247, 245, 239, 0.20)' }} className="trust-col reveal reveal-delay-2">
              <span className="label-caps" style={{ display: 'block', marginBottom: '6px', color: '#B9B8D6' }}>
                Registered exporter
              </span>
              <span style={{ fontSize: '15px', fontWeight: 500, color: '#F7F5EF' }}>
                [CONFIRM: IEC · APEDA · FSSAI]
              </span>
            </div>

            <div style={{ padding: '20px' }} className="trust-col reveal reveal-delay-3">
              <span className="label-caps" style={{ display: 'block', marginBottom: '6px', color: '#B9B8D6' }}>
                Documents
              </span>
              <span style={{ fontSize: '15px', fontWeight: 500, color: '#F7F5EF' }}>
                Provided with every shipment [CONFIRM]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. WHAT WE EXPORT
          Six tiles; image placeholders where no photo exists;
          any unconfirmed detail line as [CONFIRM].
          =================================================================== */}
      <section
        id="products"
        className="section-padding"
        style={{
          backgroundColor: '#10104F',
          borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '10px', color: '#A9B070' }}>
              Products
            </span>
            <h2 style={{ color: '#F7F5EF', marginBottom: '12px' }}>What we export</h2>
            <p style={{ color: '#DAD8E8', fontSize: '16px' }}>
              We export exclusively by container to overseas importers, retail distributors and food processing enterprises.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '1px solid rgba(247, 245, 239, 0.20)',
              borderLeft: '1px solid rgba(247, 245, 239, 0.20)',
            }}
            className="products-grid-3x2"
          >
            {exportCommodities.map((item, idx) => (
              <article
                key={item.slug}
                className={`reveal reveal-delay-${(idx % 3) + 1}`}
                style={{
                  borderRight: '1px solid rgba(247, 245, 239, 0.20)',
                  borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
                  padding: '28px 22px',
                  backgroundColor: '#10104F',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* 3:2 Placeholder block (#1A1A66) with label under it */}
                <div style={{ marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '3 / 2',
                      backgroundColor: '#1A1A66',
                      border: '1px solid rgba(247, 245, 239, 0.20)',
                      borderRadius: 'var(--radius)',
                    }}
                  />
                  <div style={{ marginTop: '8px', fontSize: '11px', color: '#B9B8D6', letterSpacing: '0.02em' }}>
                    {item.placeholderLabel}
                  </div>
                </div>

                <span className="label-caps" style={{ display: 'block', marginBottom: '6px', color: '#B9B8D6' }}>
                  {item.category}
                </span>

                <h3 style={{ fontSize: '22px', lineHeight: '28px', color: '#F7F5EF', marginBottom: '8px' }}>
                  {item.name}
                </h3>

                <p style={{ fontSize: '14px', lineHeight: '22px', color: '#DAD8E8', marginBottom: '18px', flexGrow: 1 }}>
                  Specifications: {item.specs} · Season: {item.season}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid rgba(247, 245, 239, 0.20)',
                    paddingTop: '16px',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => onNavigate(`/products/${item.slug}`)}
                    className="text-link"
                    style={{ background: 'none', border: 'none', font: 'inherit', padding: 0 }}
                  >
                    <span>View specification</span>
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenRfq(item.name)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#F7F5EF',
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
          4. FROM ENQUIRY TO ARRIVAL (Five steps, kept as they are)
          =================================================================== */}
      <section
        className="section-padding"
        style={{
          backgroundColor: '#0A0A38',
          borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '10px', color: '#A9B070' }}>
              How we work
            </span>
            <h2 style={{ color: '#F7F5EF', marginBottom: '12px' }}>From enquiry to arrival</h2>
            <p style={{ color: '#DAD8E8', fontSize: '16px' }}>
              Clear stages for every shipment. You always know what is happening with your container.
            </p>
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
              {
                num: '01',
                title: 'Specifications and quote',
                text: 'Tell us the commodity, grade, packaging and destination port. We confirm availability and give a FOB or CIF price.',
              },
              {
                num: '02',
                title: 'Contract and advance',
                text: 'We sign a proforma invoice and agree payment terms (Letter of Credit or advance T/T). Container space is booked.',
              },
              {
                num: '03',
                title: 'Sourcing and packing',
                text: 'Produce is selected, graded and packed according to your specification. Core temperature is brought to transit level.',
              },
              {
                num: '04',
                title: 'Inspection and loading',
                text: 'Government phytosanitary inspection at port. Container is loaded, sealed and temperature recorder activated.',
              },
              {
                num: '05',
                title: 'Sailing and documents',
                text: 'Vessel departs [CONFIRM: port of loading]. Bill of Lading, phytosanitary certificate and full document set sent to your bank.',
              },
            ].map((step, idx) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${idx + 1}`}
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(247, 245, 239, 0.20)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#A9B070',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  {step.num}
                </span>
                <h3 style={{ fontSize: '17px', lineHeight: '24px', color: '#F7F5EF', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '22px', color: '#DAD8E8' }}>
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
          5. QUALITY AND DOCUMENTS
          Keep the list of documents with "Provided" tags;
          Remove named inspection companies.
          =================================================================== */}
      <section
        className="section-padding"
        style={{
          backgroundColor: '#10104F',
          borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
        }}
      >
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
              <span className="label-caps" style={{ display: 'block', marginBottom: '10px', color: '#A9B070' }}>
                Quality
              </span>
              <h2 style={{ color: '#F7F5EF', marginBottom: '18px' }}>
                Every shipment leaves with its paperwork in order.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: '#DAD8E8', marginBottom: '24px' }}>
                Export compliance is built on verification. We inspect calibration, core temperature and outer packing integrity before stuffing containers for export. [CONFIRM: packhouse and port inspection procedures].
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

            {/* Right 6 cols: Document rows with "Provided" tag (Inspection companies removed) */}
            <div
              style={{
                gridColumn: 'span 6',
                borderTop: '1px solid rgba(247, 245, 239, 0.20)',
              }}
              className="quality-list-col reveal reveal-delay-1"
            >
              {[
                { title: 'Commercial invoice', detail: '[CONFIRM: invoice details]' },
                { title: 'Packing list', detail: '[CONFIRM: packing sheet details]' },
                { title: 'Phytosanitary certificate', detail: 'Plant Quarantine department certification' },
                { title: 'Certificate of origin', detail: 'Export chamber certification' },
                { title: 'Bill of Lading', detail: 'Clean on-board ocean carrier release' },
                { title: 'Pre-shipment inspection certificate', detail: '[CONFIRM: inspection agency]' },
                { title: 'Temperature logger chart', detail: '[CONFIRM: logger type]' },
              ].map((doc) => (
                <div
                  key={doc.title}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
                    gap: '16px',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '15px', fontWeight: 500, color: '#F7F5EF', display: 'block' }}>
                      {doc.title}
                    </span>
                    <span style={{ fontSize: '12px', color: '#B9B8D6' }}>
                      {doc.detail}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 500,
                      padding: '4px 10px',
                      border: '1px solid rgba(247, 245, 239, 0.20)',
                      borderRadius: 'var(--radius)',
                      color: '#DAD8E8',
                      backgroundColor: '#1A1A66',
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
          6. AVAILABILITY
          12-month calendar grid
          =================================================================== */}
      <section
        className="section-padding"
        style={{
          backgroundColor: '#0A0A38',
          borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '36px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '10px', color: '#A9B070' }}>
              Crop Cycles
            </span>
            <h2 style={{ color: '#F7F5EF', marginBottom: '12px' }}>When each product is available</h2>
            <p style={{ color: '#DAD8E8', fontSize: '15px' }}>
              Red onions export October to April (peak December to February). For other crops, harvest timing is confirmed per enquiry.
            </p>
          </div>

          <div className="reveal">
            <SeasonalityGrid onSelectProduct={(slug) => onNavigate(`/products/${slug}`)} />
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. FROM THE FIELD TO THE MARKET
          Three empty video frames and their captions as placeholders.
          =================================================================== */}
      <section
        className="section-padding"
        style={{
          backgroundColor: '#10104F',
          borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }} className="reveal">
            <span className="label-caps" style={{ color: '#A9B070', display: 'block', marginBottom: '10px' }}>
              Documentary Proof
            </span>
            <h2 style={{ color: '#F7F5EF', marginBottom: '14px' }}>
              From the field to the market
            </h2>
            <p style={{ color: '#DAD8E8', fontSize: '16px' }}>
              We document our consignments from packing and container stuffing in India to discharge at destination wholesale markets.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '28px',
            }}
            className="field-market-grid"
          >
            {/* Frame 1 placeholder */}
            <div className="reveal">
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  backgroundColor: '#1A1A66',
                  border: '1px solid rgba(247, 245, 239, 0.20)',
                  borderRadius: 'var(--radius)',
                }}
              />
              <div style={{ marginTop: '12px' }}>
                <span style={{ fontSize: '15px', fontWeight: 500, color: '#F7F5EF', display: 'block' }}>
                  Loading at source
                </span>
                <span style={{ fontSize: '13px', color: '#B9B8D6', display: 'block', marginTop: '2px' }}>
                  Covered packhouse facility: [CONFIRM: sorting, bag stacking and loading details].
                </span>
              </div>
            </div>

            {/* Frame 2 placeholder */}
            <div className="reveal reveal-delay-1">
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  backgroundColor: '#1A1A66',
                  border: '1px solid rgba(247, 245, 239, 0.20)',
                  borderRadius: 'var(--radius)',
                }}
              />
              <div style={{ marginTop: '12px' }}>
                <span style={{ fontSize: '15px', fontWeight: 500, color: '#F7F5EF', display: 'block' }}>
                  Container yard inspection
                </span>
                <span style={{ fontSize: '13px', color: '#B9B8D6', display: 'block', marginTop: '2px' }}>
                  Logistics yard: [CONFIRM: container stuffing, inspection and high-security seal details].
                </span>
              </div>
            </div>

            {/* Frame 3 placeholder */}
            <div className="reveal reveal-delay-2">
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  backgroundColor: '#1A1A66',
                  border: '1px solid rgba(247, 245, 239, 0.20)',
                  borderRadius: 'var(--radius)',
                }}
              />
              <div style={{ marginTop: '12px' }}>
                <span style={{ fontSize: '15px', fontWeight: 500, color: '#F7F5EF', display: 'block' }}>
                  Arrival at wholesale market
                </span>
                <span style={{ fontSize: '13px', color: '#B9B8D6', display: 'block', marginTop: '2px' }}>
                  Overseas destination: [CONFIRM: container de-stuffing and arrival verification details].
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          8. MARKETS ("Where we ship")
          Three columns with [CONFIRM: countries] only.
          =================================================================== */}
      <section
        className="section-padding"
        style={{
          backgroundColor: '#0A0A38',
          borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '44px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '10px', color: '#A9B070' }}>
              Markets
            </span>
            <h2 style={{ color: '#F7F5EF', marginBottom: '12px' }}>Where we ship</h2>
            <p style={{ color: '#DAD8E8', fontSize: '15px' }}>
              Direct maritime container departures from [CONFIRM: port of loading] to commercial discharge terminals.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              borderTop: '1px solid rgba(247, 245, 239, 0.20)',
              paddingTop: '28px',
              marginBottom: '32px',
            }}
            className="markets-3col"
          >
            <div className="reveal">
              <span className="label-caps" style={{ display: 'block', marginBottom: '8px', color: '#B9B8D6' }}>
                Arabian Gulf
              </span>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: '#F7F5EF' }}>
                [CONFIRM: countries]
              </p>
            </div>

            <div className="reveal reveal-delay-1">
              <span className="label-caps" style={{ display: 'block', marginBottom: '8px', color: '#B9B8D6' }}>
                South & South-East Asia
              </span>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: '#F7F5EF' }}>
                [CONFIRM: countries]
              </p>
            </div>

            <div className="reveal reveal-delay-2">
              <span className="label-caps" style={{ display: 'block', marginBottom: '8px', color: '#B9B8D6' }}>
                African Distribution Hubs
              </span>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: '#F7F5EF' }}>
                [CONFIRM: countries]
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
          Two columns: Left 3:2 placeholder block (#1A1A66) with label under it,
          Right text + link
          =================================================================== */}
      <section
        className="section-padding"
        style={{
          backgroundColor: '#10104F',
          borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
        }}
      >
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
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3 / 2',
                  backgroundColor: '#1A1A66',
                  border: '1px solid rgba(247, 245, 239, 0.20)',
                  borderRadius: 'var(--radius)',
                }}
              />
              <p
                style={{
                  marginTop: '10px',
                  fontSize: '12px',
                  color: '#B9B8D6',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  textAlign: 'left',
                }}
              >
                PHOTO: Packhouse sorting and inspection [CONFIRM]
              </p>
            </div>

            <div style={{ gridColumn: 'span 6' }} className="about-text-col reveal reveal-delay-1">
              <span className="label-caps" style={{ display: 'block', marginBottom: '10px', color: '#A9B070' }}>
                About
              </span>
              <h2 style={{ color: '#F7F5EF', marginBottom: '18px' }}>
                A direct line to the people who ship your order.
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: '#DAD8E8', marginBottom: '24px' }}>
                Vasudha Freshline Exports LLP operates with full operational transparency. Importers speak directly with trade officers who oversee sourcing, grading calibration, and port stuffing. [CONFIRM: packhouse location, facility details and operational team].
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
          10. CLOSING CALL TO ACTION
          "Tell us what you need." with "Request a quote" and "Chat on WhatsApp".
          =================================================================== */}
      <section
        className="section-padding"
        style={{
          backgroundColor: '#0A0A38',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              textAlign: 'center',
            }}
            className="reveal"
          >
            <span className="label-caps" style={{ color: '#A9B070', display: 'block', marginBottom: '12px' }}>
              Enquiries
            </span>

            <h2 style={{ color: '#F7F5EF', marginBottom: '16px', fontSize: '38px', lineHeight: '46px' }}>
              Tell us what you need.
            </h2>

            <p style={{ color: '#DAD8E8', fontSize: '17px', lineHeight: '28px', marginBottom: '32px' }}>
              Container loads of fresh produce, rice and spices. Send specifications for a quote, or message our trade desk.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button
                type="button"
                onClick={() => onOpenRfq()}
                className="btn-primary"
              >
                Request a quote
              </button>

              <a
                href="https://wa.me/?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat on WhatsApp
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
            border-bottom: 1px solid rgba(247, 245, 239, 0.20) !important;
          }
        }
      `}</style>
    </main>
  );
};
