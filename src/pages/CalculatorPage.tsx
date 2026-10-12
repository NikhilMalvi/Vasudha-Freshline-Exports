import React, { useState } from 'react';
import {
  ArrowRight,
  Ship,
  Sparkles,
  Info,
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { CallStrip } from '../components/CallStrip';
import { ClosingCtaBand } from '../components/ClosingCtaBand';

interface CalculatorPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

interface ProductItem {
  id: string;
  name: string;
  color: string;
  colorHex: string;
  tint: string;
  category: string;
  typicalContainer: '20 ft' | '40 ft';
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'pomegranates',
    name: 'Pomegranates',
    color: 'var(--crimson)',
    colorHex: '#B3263E',
    tint: 'var(--crimson-tint)',
    category: 'Fresh fruit',
    typicalContainer: '40 ft',
  },
  {
    id: 'onions',
    name: 'Onions',
    color: 'var(--plum)',
    colorHex: '#7B3F86',
    tint: 'var(--plum-tint)',
    category: 'Fresh vegetable',
    typicalContainer: '40 ft',
  },
  {
    id: 'rice',
    name: 'Rice',
    color: 'var(--saffron)',
    colorHex: '#B05A06',
    tint: 'var(--saffron-tint)',
    category: 'Grain',
    typicalContainer: '20 ft',
  },
  {
    id: 'spices',
    name: 'Spices',
    color: 'var(--blue)',
    colorHex: '#2F55C2',
    tint: 'var(--blue-tint)',
    category: 'Spice',
    typicalContainer: '20 ft',
  },
  {
    id: 'fresh-fruits',
    name: 'Fresh fruits',
    color: 'var(--teal)',
    colorHex: '#0D7377',
    tint: 'var(--teal-tint)',
    category: 'Fresh fruit',
    typicalContainer: '40 ft',
  },
  {
    id: 'fresh-vegetables',
    name: 'Fresh vegetables',
    color: 'var(--leaf)',
    colorHex: '#5B7A1F',
    tint: 'var(--leaf-tint)',
    category: 'Fresh vegetable',
    typicalContainer: '40 ft',
  },
];

export const CalculatorPage: React.FC<CalculatorPageProps> = ({
  onNavigate,
  onOpenRfq,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<string>('Pomegranates');
  const [quantity, setQuantity] = useState<number>(100);
  const [containerSize, setContainerSize] = useState<'20 ft' | '40 ft'>('40 ft');

  const currentProduct =
    PRODUCTS_DATA.find((p) => p.name === selectedProduct) || PRODUCTS_DATA[0];

  // Payloads: 20 ft = 20 tonnes, 40 ft = 26 tonnes
  const payloadPerContainer = containerSize === '20 ft' ? 20 : 26;
  const containersNeeded = Math.max(1, Math.ceil(quantity / payloadPerContainer));
  const sliderPercent = Math.min(100, Math.max(0, ((quantity - 1) / (500 - 1)) * 100));

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newName = e.target.value;
    setSelectedProduct(newName);
    const prod = PRODUCTS_DATA.find((p) => p.name === newName);
    if (prod) {
      setContainerSize(prod.typicalContainer);
    }
  };

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

  return (
    <div className="calculator-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. INNER BANNER (Pattern A)
          ===================================================================== */}
      <InnerBanner
        pill="Calculator"
        title="Container load estimator"
        subtitle="Estimate how many containers your order needs."
      />

      {/* =====================================================================
          2. TWO COLUMNS (White with two glows)
          Left: Large white card titled "Your order"
          Right: Result card with banner gradient background
          ===================================================================== */}
      <section className="section section-white has-glows">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '40px',
              alignItems: 'stretch',
            }}
          >
            {/* LEFT COLUMN: Input Card */}
            <div
              className="card"
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '24px',
                padding: '40px 36px',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-subtle)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* 4px Gradient Top Bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--leaf) 0%, var(--blue) 100%)',
                }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                  <h2 style={{ fontSize: '24px', color: 'var(--navy)', margin: 0 }}>
                    Your order
                  </h2>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: currentProduct.color,
                      backgroundColor: currentProduct.tint,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    <Sparkles size={13} />
                    {currentProduct.category}
                  </span>
                </div>

                {/* 1. Product (Styled Select, six products) */}
                <div style={{ marginBottom: '28px' }}>
                  <label
                    htmlFor="calc-product-select"
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: '8px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Product
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      id="calc-product-select"
                      value={selectedProduct}
                      onChange={handleProductChange}
                      className="input"
                      style={{
                        width: '100%',
                        height: '52px',
                        padding: '0 16px',
                        borderRadius: 'var(--radius-input)',
                        border: '1.5px solid var(--line)',
                        backgroundColor: 'var(--white)',
                        color: 'var(--navy)',
                        fontSize: '16px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        outline: 'none',
                      }}
                    >
                      {PRODUCTS_DATA.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 2. Quantity in Tonnes (Slider 1 to 500 with number field) */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <label
                      htmlFor="calc-quantity-number"
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: 'var(--navy)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      Quantity in tonnes
                    </label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input
                        id="calc-quantity-number"
                        type="number"
                        min="1"
                        max="500"
                        value={quantity}
                        onChange={handleNumberChange}
                        style={{
                          width: '90px',
                          height: '42px',
                          padding: '0 10px',
                          textAlign: 'center',
                          borderRadius: '10px',
                          border: '1.5px solid var(--line)',
                          fontSize: '16px',
                          fontWeight: 700,
                          color: 'var(--navy)',
                          outline: 'none',
                        }}
                      />
                      <span style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 600 }}>tonnes</span>
                    </div>
                  </div>

                  {/* Slider with filled part in product color */}
                  <div style={{ padding: '8px 0' }}>
                    <input
                      type="range"
                      min="1"
                      max="500"
                      value={quantity}
                      onChange={handleSliderChange}
                      aria-label="Order quantity in tonnes"
                      style={{
                        width: '100%',
                        height: '8px',
                        borderRadius: '4px',
                        outline: 'none',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        cursor: 'pointer',
                        background: `linear-gradient(to right, ${currentProduct.colorHex} 0%, ${currentProduct.colorHex} ${sliderPercent}%, #E2E6D8 ${sliderPercent}%, #E2E6D8 100%)`,
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '8px',
                        fontSize: '12px',
                        color: 'var(--muted)',
                        fontWeight: 500,
                      }}
                    >
                      <span>1 tonne (Min FCL)</span>
                      <span>250 tonnes</span>
                      <span>500 tonnes</span>
                    </div>
                  </div>
                </div>

                {/* 3. Container size (.chip: 20 ft, 40 ft) */}
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: '10px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Container size
                  </span>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className={`chip ${containerSize === '20 ft' ? 'selected' : ''}`}
                      onClick={() => setContainerSize('20 ft')}
                      style={{
                        padding: '10px 24px',
                        borderRadius: 'var(--radius-pill)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>20 ft container</span>
                    </button>
                    <button
                      type="button"
                      className={`chip ${containerSize === '40 ft' ? 'selected' : ''}`}
                      onClick={() => setContainerSize('40 ft')}
                      style={{
                        padding: '10px 24px',
                        borderRadius: 'var(--radius-pill)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>40 ft container</span>
                    </button>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: '32px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  color: 'var(--muted)',
                }}
              >
                <Info size={15} style={{ flexShrink: 0, color: 'var(--olive)' }} />
                <span>
                  Slider color matches fixed produce tone for <strong>{currentProduct.name}</strong>.
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: Result Card with Banner Gradient Background */}
            <div
              className="card"
              style={{
                background: 'linear-gradient(100deg, #10104F 0%, #1A2A7C 55%, #0D6B72 100%)',
                borderRadius: '24px',
                padding: '40px 36px',
                boxShadow: 'var(--shadow-lg)',
                color: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Swoosh watermark background */}
              <img
                src="/vasudha-mark-light-for-navy.svg"
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  right: '-60px',
                  bottom: '-60px',
                  width: '320px',
                  height: '320px',
                  opacity: 0.08,
                  pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(255, 255, 255, 0.16)',
                    color: '#FFFFFF',
                    padding: '6px 16px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                  }}
                >
                  ESTIMATE SUMMARY
                </span>

                <div style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 600 }}>
                  Approx. containers needed
                </div>

                {/* Very large live number */}
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(64px, 10vw, 88px)',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: '#FFFFFF',
                    margin: '8px 0 24px 0',
                    transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  {containersNeeded}
                  <span
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'rgba(255, 255, 255, 0.75)',
                      marginLeft: '12px',
                      letterSpacing: 'normal',
                    }}
                  >
                    {containersNeeded === 1 ? 'container' : 'containers'}
                  </span>
                </div>

                {/* Specification breakdown */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '28px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '15px' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Approx. total weight:</span>
                    <strong style={{ color: '#FFFFFF', fontSize: '16px' }}>{quantity} tonnes</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '15px' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Product:</span>
                    <strong style={{ color: '#FFFFFF', fontSize: '16px' }}>{currentProduct.name}</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '15px' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Container size:</span>
                    <strong style={{ color: '#FFFFFF', fontSize: '16px' }}>{containerSize} ({containerSize === '20 ft' ? 'Dry Box' : 'Reefer / HC'})</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '15px' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Payload factor:</span>
                    <strong style={{ color: '#FFFFFF', fontSize: '16px' }}>{payloadPerContainer} tonnes / box</strong>
                  </div>
                </div>

                {/* Small Note */}
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '20px',
                    color: 'rgba(255, 255, 255, 0.75)',
                    margin: '0 0 28px 0',
                  }}
                >
                  Sample payloads only. Final loading is confirmed in your quote.
                </p>
              </div>

              {/* White .btn-light button opening Contact */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <button
                  type="button"
                  className="btn-light"
                  onClick={() => onNavigate('/contact')}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <span>Request a quote for this order</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. HOW WE CALCULATE (Mist section)
          White card with two general sentences and a small table of sample payloads
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div
            className="card"
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              backgroundColor: 'var(--white)',
              borderRadius: '24px',
              padding: '44px 40px',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span className="eyebrow">Calculations</span>
              <h3 style={{ fontSize: '26px', color: 'var(--navy)', margin: '8px 0 12px 0' }}>
                How we calculate container payload
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: 'var(--body)',
                  maxWidth: '720px',
                  margin: '0 auto',
                }}
              >
                We calculate container capacity based on standard ocean carrier payload limits for dry freight and temperature-controlled reefer boxes. Final stowage volume depends on packaging specifications, gross tare weight, pallet configuration, and destination port weight regulations.
              </p>
            </div>

            {/* Small Table of Sample Payloads */}
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '14px',
                  textAlign: 'left',
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: '#F4F6EF', borderBottom: '2px solid var(--line)' }}>
                    <th style={{ padding: '14px 18px', fontWeight: 700, color: 'var(--navy)' }}>
                      Container Size
                    </th>
                    <th style={{ padding: '14px 18px', fontWeight: 700, color: 'var(--navy)' }}>
                      Sample Payload
                    </th>
                    <th style={{ padding: '14px 18px', fontWeight: 700, color: 'var(--navy)' }}>
                      Commodity Suitability
                    </th>
                    <th style={{ padding: '14px 18px', fontWeight: 700, color: 'var(--navy)' }}>
                      Container Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '16px 18px', fontWeight: 700, color: 'var(--navy)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Ship size={16} style={{ color: 'var(--blue)' }} />
                        <span>20 ft Container</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 18px', color: 'var(--body)', fontWeight: 600 }}>
                      20 tonnes
                    </td>
                    <td style={{ padding: '16px 18px', color: 'var(--muted)' }}>
                      Basmati rice, non-Basmati rice, whole & ground spices in sacks
                    </td>
                    <td style={{ padding: '16px 18px', color: 'var(--muted)' }}>
                      Standard Dry Van (General Purpose)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '16px 18px', fontWeight: 700, color: 'var(--navy)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Ship size={16} style={{ color: 'var(--teal)' }} />
                        <span>40 ft High-Cube Reefer</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 18px', color: 'var(--body)', fontWeight: 600 }}>
                      26 tonnes
                    </td>
                    <td style={{ padding: '16px 18px', color: 'var(--muted)' }}>
                      Bhagwa pomegranates, Nashik red onions, fresh seasonal fruits & vegetables
                    </td>
                    <td style={{ padding: '16px 18px', color: 'var(--muted)' }}>
                      Temperature-Controlled Reefer (-0.5°C to +14°C)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                Sample payloads. Exact loading is confirmed with carton dimensions, pallet weights, and destination road limits.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CALL STRIP (Pattern D)
          ===================================================================== */}
      <section className="section section-white" style={{ paddingTop: 0, paddingBottom: '64px' }}>
        <div className="container">
          <CallStrip />
        </div>
      </section>

      {/* =====================================================================
          5. CLOSING CTA BAND (Pattern E)
          ===================================================================== */}
      <ClosingCtaBand
        onOpenRfq={() => onOpenRfq(selectedProduct)}
        onRequestQuote={() => onNavigate('/contact')}
      />
    </div>
  );
};
