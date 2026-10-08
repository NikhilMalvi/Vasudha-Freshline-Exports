import React, { useState } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { IMAGES } from '../data/images';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

// Sample Image Corner Tag
const SampleImageTag: React.FC = () => (
  <span
    style={{
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      backgroundColor: 'rgba(22, 22, 26, 0.6)',
      color: '#FFFFFF',
      fontSize: '10px',
      fontWeight: 500,
      padding: '2px 6px',
      borderRadius: '4px',
      letterSpacing: '0.04em',
      pointerEvents: 'none',
      zIndex: 3,
      fontFamily: 'var(--font-sans)',
    }}
  >
    SAMPLE IMAGE
  </span>
);

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onOpenRfq,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Fresh fruit',
    'Fresh vegetable',
    'Grain',
    'Spice',
  ];

  const allProducts = [
    {
      id: 'pomegranates',
      name: 'Pomegranates',
      category: 'Fresh fruit',
      path: '/products/pomegranates',
      img: IMAGES.pomegranates,
      desc: 'Export-grade fruit packed in cartons.',
    },
    {
      id: 'onions',
      name: 'Onions',
      category: 'Fresh vegetable',
      path: '/products/onions',
      img: IMAGES.onions,
      desc: 'Red onions in mesh bags, October to April.',
    },
    {
      id: 'rice',
      name: 'Rice',
      category: 'Grain',
      path: '/products/rice',
      img: IMAGES.rice,
      desc: 'Basmati and non-basmati [Sample].',
    },
    {
      id: 'spices',
      name: 'Spices',
      category: 'Spice',
      path: '/products/spices',
      img: IMAGES.spices,
      desc: 'Whole and ground spices [Sample].',
    },
    {
      id: 'fresh-fruits',
      name: 'Fresh fruits',
      category: 'Fresh fruit',
      path: '/products/fresh-fruits',
      img: IMAGES.fruits,
      desc: 'Seasonal fruit for export [Sample].',
    },
    {
      id: 'fresh-vegetables',
      name: 'Fresh vegetables',
      category: 'Fresh vegetable',
      path: '/products/fresh-vegetables',
      img: IMAGES.vegetables,
      desc: 'Seasonal vegetables for export [Sample].',
    },
  ];

  const filteredProducts =
    selectedFilter === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === selectedFilter);

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  return (
    <div className="products-page-content" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* =========================================================================
          1. HERO (.section ivory). Breadcrumb, eyebrow, H1, sentence.
          ========================================================================= */}
      <section className="section" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
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
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Products</span>
          </nav>

          <div style={{ maxWidth: '720px' }}>
            <span className="eyebrow">PRODUCTS</span>
            <h1 style={{ margin: '12px 0 16px 0' }}>Our products</h1>
            <p style={{ margin: 0, fontSize: '18px', lineHeight: '28px', color: 'var(--charcoal)' }}>
              Specifications, packing and seasonality for everything we export.
            </p>
          </div>

          {/* =========================================================================
              2. FILTER CHIPS. Styled pills with soft transition.
              ========================================================================= */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '40px',
              alignItems: 'center',
            }}
          >
            {filterOptions.map((chip) => {
              const isSelected = selectedFilter === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setSelectedFilter(chip)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    border: isSelected ? '1px solid var(--navy)' : '1px solid var(--line)',
                    backgroundColor: isSelected ? 'var(--navy)' : 'var(--white)',
                    color: isSelected ? 'var(--white)' : 'var(--charcoal)',
                    transition: 'all 240ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. GRID OF PRODUCTS + 7TH DASHED CARD
          ========================================================================= */}
      <section className="section-white" style={{ paddingTop: '56px', paddingBottom: '88px' }}>
        <div className="container">
          <div
            className="grid-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
            }}
          >
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="card"
                style={{
                  gap: '16px',
                  transition: 'opacity 240ms ease, transform 240ms ease',
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="card-img"
                  />
                  <SampleImageTag />
                  <button
                    type="button"
                    className="pill"
                    onClick={() => onOpenRfq(p.name)}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'var(--navy)',
                      color: 'var(--white)',
                      cursor: 'pointer',
                      border: 'none',
                    }}
                  >
                    Request quote
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="pill">{p.category}</span>
                </div>

                <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '26px' }}>
                  {p.name}
                </h3>

                <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', flexGrow: 1 }}>
                  {p.desc}
                </p>

                <button
                  type="button"
                  className="link"
                  onClick={() => onNavigate(p.path)}
                  style={{ alignSelf: 'flex-start' }}
                >
                  View specification &rarr;
                </button>
              </div>
            ))}

            {/* 7th Card with Dashed Outline */}
            <div
              style={{
                borderRadius: 'var(--radius-card)',
                border: '2px dashed var(--line)',
                backgroundColor: 'transparent',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: '16px',
                minHeight: '360px',
              }}
            >
              <div className="icon-circle" style={{ backgroundColor: 'var(--bone)', color: 'var(--muted)' }}>
                <HelpCircle size={26} />
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--ink)' }}>
                Looking for something else? Ask us.
              </h3>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--muted)', maxWidth: '280px' }}>
                We review specialised agricultural container requirements across Indian production zones.
              </p>
              <div style={{ paddingTop: '8px' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => onNavigate('/contact')}
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BONE INFO PANEL
          ========================================================================= */}
      <section className="section-bone" style={{ padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div
            className="card"
            style={{
              padding: '40px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <h3 style={{ margin: 0, fontSize: '26px', fontFamily: 'var(--font-serif)' }}>
              Not sure which grade or packing you need?
            </h3>
            <p style={{ margin: 0, color: 'var(--charcoal)', fontSize: '15px', lineHeight: '24px', maxWidth: '540px' }}>
              Tell us your target destination port and import standards. We will advise on suitable export calibrations and seasonal schedules.
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
        </div>
      </section>

      {/* =========================================================================
          5. CLOSING BAND (.band-navy)
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
