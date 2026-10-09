import React, { useState } from 'react';
import {
  ArrowRight,
  Boxes,
  Scale,
  Globe,
} from 'lucide-react';
import { QuoteFormSection } from '../components/QuoteFormSection';

interface CalculatorPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

const PRODUCTS = [
  'Pomegranates',
  'Onions',
  'Rice',
  'Spices',
  'Fresh fruits',
  'Fresh vegetables',
];

export const CalculatorPage: React.FC<CalculatorPageProps> = ({
  onNavigate,
  onOpenRfq,
}) => {
  const [product, setProduct] = useState<string>('Pomegranates');
  const [quantity, setQuantity] = useState<number>(100);
  const [containerType, setContainerType] = useState<'20ft' | '40ft'>('40ft');

  // Sample payload figures: 20 ft = 20 tonnes; 40 ft = 26 tonnes
  const payloadPerContainer = containerType === '20ft' ? 20 : 26;
  const containerCount = Math.max(1, Math.ceil(quantity / payloadPerContainer));

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setQuantity(isNaN(val) ? 1 : Math.max(1, Math.min(500, val)));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setQuantity(Math.max(1, Math.min(500, val)));
    } else {
      setQuantity(1);
    }
  };

  const handleRequestQuote = () => {
    // Scroll smoothly to the quote form section or open RFQ modal
    const quoteEl = document.getElementById('quote-section');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenRfq(product);
    }
  };

  return (
    <div className="calculator-page" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. INNER PAGE HERO (compact 280px navy gradient banner with watermark) */}
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
            <span style={{ color: '#FFFFFF' }}>Tools</span>
            <span>/</span>
            <span style={{ color: '#FFFFFF' }}>Container calculator</span>
          </nav>
          <span
            className="eyebrow"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              color: '#FFFFFF',
            }}
          >
            Tools
          </span>
          <h1>Container load calculator.</h1>
          <p className="sub-line">
            Estimate how many 20ft or 40ft containers you need for your order volume.
          </p>
        </div>
      </section>

      {/* 2. CALCULATOR SECTION (Mist with two glows, 2 Columns) */}
      <section className="section-mist has-glows" style={{ paddingTop: '72px', paddingBottom: '88px', position: 'relative' }}>
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '40px',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Form Controls */}
            <div
              className="card"
              style={{
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                border: '1px solid rgba(16, 16, 79, 0.08)',
              }}
            >
              {/* Product Selector */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    marginBottom: '12px',
                  }}
                >
                  Select produce commodity
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {PRODUCTS.map((p) => {
                    const isActive = product === p;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setProduct(p)}
                        className={`chip ${isActive ? 'active' : ''}`}
                        style={{
                          cursor: 'pointer',
                          padding: '8px 16px',
                          fontSize: '14px',
                          fontWeight: isActive ? 600 : 500,
                          borderRadius: 'var(--radius-pill)',
                          border: isActive ? '1px solid var(--navy)' : '1px solid var(--line)',
                          backgroundColor: isActive ? 'var(--navy)' : 'var(--white)',
                          color: isActive ? 'var(--white)' : 'var(--charcoal)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Input & Slider (1 to 500 tonnes) */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px',
                  }}
                >
                  <label
                    htmlFor="calc-quantity-input"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: 'var(--navy)',
                    }}
                  >
                    Target volume (Metric Tonnes)
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      id="calc-quantity-input"
                      type="number"
                      min={1}
                      max={500}
                      step={1}
                      value={quantity}
                      onChange={handleNumberChange}
                      style={{
                        width: '90px',
                        height: '42px',
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: '16px',
                        color: 'var(--navy)',
                        borderRadius: '8px',
                        border: '1.5px solid var(--line)',
                        padding: '0 8px',
                      }}
                    />
                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--muted)' }}>MT</span>
                  </div>
                </div>

                <input
                  type="range"
                  min={1}
                  max={500}
                  step={1}
                  value={quantity}
                  onChange={handleSliderChange}
                  aria-label="Volume slider in metric tonnes"
                  style={{
                    width: '100%',
                    accentColor: 'var(--navy)',
                    cursor: 'pointer',
                    height: '8px',
                    borderRadius: '4px',
                    marginTop: '8px',
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: 'var(--muted)',
                    marginTop: '8px',
                  }}
                >
                  <span>1 MT (Min)</span>
                  <span>100 MT</span>
                  <span>250 MT</span>
                  <span>500 MT</span>
                </div>
              </div>

              {/* Container Size Selector Chips */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    marginBottom: '12px',
                  }}
                >
                  Container specification
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setContainerType('40ft')}
                    style={{
                      textAlign: 'left',
                      padding: '16px 20px',
                      borderRadius: '14px',
                      cursor: 'pointer',
                      border: containerType === '40ft' ? '2px solid var(--navy)' : '1px solid var(--line)',
                      backgroundColor: containerType === '40ft' ? 'rgba(16, 16, 79, 0.04)' : 'var(--white)',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '15px' }}>
                        40 ft High-cube / Reefer
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>
                        Sample payload: 26 metric tonnes per container
                      </div>
                    </div>
                    {containerType === '40ft' && (
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--navy)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                        }}
                      >
                        ✓
                      </div>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setContainerType('20ft')}
                    style={{
                      textAlign: 'left',
                      padding: '16px 20px',
                      borderRadius: '14px',
                      cursor: 'pointer',
                      border: containerType === '20ft' ? '2px solid var(--navy)' : '1px solid var(--line)',
                      backgroundColor: containerType === '20ft' ? 'rgba(16, 16, 79, 0.04)' : 'var(--white)',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '15px' }}>
                        20 ft Standard Dry / Reefer
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>
                        Sample payload: 20 metric tonnes per container
                      </div>
                    </div>
                    {containerType === '20ft' && (
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--navy)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                        }}
                      >
                        ✓
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Navy Card (Matches Stats Strip) with Live Results */}
            <div
              style={{
                backgroundColor: 'var(--navy)',
                borderRadius: 'var(--radius-card)',
                padding: '48px 40px',
                color: 'var(--white)',
                boxShadow: '0 20px 48px rgba(16, 16, 79, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                position: 'sticky',
                top: '100px',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--olive-light)',
                    marginBottom: '8px',
                  }}
                >
                  ESTIMATED SHIPMENT REQUIREMENT
                </span>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '56px',
                    lineHeight: '1.1',
                    fontWeight: 800,
                    color: 'var(--white)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {containerCount} {containerCount === 1 ? 'container' : 'containers'}
                </div>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginTop: '8px',
                  }}
                >
                  {quantity} tonnes total weight · {product}
                </div>
              </div>

              {/* Specification Breakdown */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px' }}>
                  <span>Container specification:</span>
                  <strong style={{ color: 'var(--white)' }}>
                    {containerType === '40ft' ? '40 ft High-cube' : '20 ft Standard'}
                  </strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px' }}>
                  <span>Calculated payload per unit:</span>
                  <strong style={{ color: 'var(--white)' }}>{payloadPerContainer} MT / FCL</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Estimated cargo volume:</span>
                  <strong style={{ color: 'var(--white)' }}>{(containerCount * payloadPerContainer)} MT nominal capacity</strong>
                </div>
              </div>

              {/* Soft Note */}
              <p
                style={{
                  margin: 0,
                  fontSize: '13px',
                  lineHeight: '20px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontStyle: 'italic',
                }}
              >
                Sample calculation. Final container payload depends on product grade, packing format, and port weight regulations.
              </p>

              {/* Primary CTA */}
              <button
                type="button"
                className="btn-light"
                onClick={handleRequestQuote}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Request a quote for this order</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW WE CALCULATE (White, 3 Cards) */}
      <section className="section-white has-glows" style={{ paddingTop: '88px', paddingBottom: '88px' }}>
        <div className="glow-orb glow-plum-tr" aria-hidden="true" />
        <div className="glow-orb glow-teal-bl" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro" style={{ maxWidth: '640px', marginBottom: '48px' }}>
            <span className="eyebrow">Calculations</span>
            <h2>How we calculate <span className="text-highlight-leaf">payloads</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">
              Standard commercial payload guidelines applied by our export logistics operations.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '32px',
            }}
          >
            {/* Card 1: Reefer vs Dry Payload */}
            <div className="card">
              <div
                className="icon-circle"
                style={{
                  backgroundColor: 'var(--leaf-tint)',
                  color: 'var(--leaf)',
                  marginBottom: '20px',
                }}
              >
                <Boxes size={24} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Reefer vs Dry payload</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: '24px', color: 'var(--muted)' }}>
                Refrigerated containers (reefers) dedicate internal volume to airflow ducts and refrigeration machinery, typically yielding 20–26 MT net produce. Standard dry containers for non-perishables maximize structural tare weight allowances.
              </p>
            </div>

            {/* Card 2: Packing Weight Overhead */}
            <div className="card">
              <div
                className="icon-circle"
                style={{
                  backgroundColor: 'var(--blue-tint)',
                  color: 'var(--blue)',
                  marginBottom: '20px',
                }}
              >
                <Scale size={24} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Packing weight overhead</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: '24px', color: 'var(--muted)' }}>
                Master cartons, corrugated dividers, wooden pallets, corner boards, and moisture absorbers contribute approximately 5% to 8% tare to total gross container weight. Specifications account for this buffer.
              </p>
            </div>

            {/* Card 3: Weight Limits by Destination Country */}
            <div className="card">
              <div
                className="icon-circle"
                style={{
                  backgroundColor: 'var(--teal-tint)',
                  color: 'var(--teal)',
                  marginBottom: '20px',
                }}
              >
                <Globe size={24} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Destination country limits</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: '24px', color: 'var(--muted)' }}>
                Road axle weight regulations vary by country. Middle East and GCC ports generally permit up to 26–28 MT gross container mass, whereas specific European and North American overland routes impose stricter 20–22 MT limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUOTE FORM BAND (Navy) */}
      <QuoteFormSection initialProduct={product} />
    </div>
  );
};
