import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  FileText,
  Package,
  ShieldCheck,
  CheckCircle2,
  Ship,
  ClipboardCheck,
  Calendar,
} from 'lucide-react';
import { IMAGES } from '../data/images';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
  onOpenBrochure?: () => void;
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

interface ProductConfig {
  id: string;
  name: string;
  category: string;
  tag: string;
  heroSentence: string;
  images: {
    main: string;
    thumb1: string;
    thumb2: string;
    thumb3: string;
  };
  packingPhotos: {
    packing: string;
    palletising: string;
    loading: string;
  };
  isFruitCategory?: boolean;
  isVegetableCategory?: boolean;
  isOnion?: boolean;
  supplyItems?: { name: string; img: string }[];
  related: {
    id: string;
    name: string;
    category: string;
    path: string;
    img: string;
    desc: string;
  }[];
}

const PRODUCTS_MAP: Record<string, ProductConfig> = {
  pomegranates: {
    id: 'pomegranates',
    name: 'Pomegranates',
    category: 'Fresh fruit',
    tag: 'Fresh fruit',
    heroSentence: 'Export-grade Bhagwa pomegranates packed in calibrated corrugated cartons.',
    images: {
      main: IMAGES.pomegranatesCut,
      thumb1: IMAGES.pomegranates,
      thumb2: IMAGES.pomegranatesCut,
      thumb3: IMAGES.pomegranatesBox,
    },
    packingPhotos: {
      packing: IMAGES.pomegranatesBox,
      palletising: IMAGES.portContainers,
      loading: IMAGES.containerLoading,
    },
    related: [
      {
        id: 'onions',
        name: 'Onions',
        category: 'Fresh vegetable',
        path: '/products/onions',
        img: IMAGES.onions,
        desc: 'Red onions in mesh bags, October to April.',
      },
      {
        id: 'fresh-fruits',
        name: 'Fresh fruits',
        category: 'Fresh fruit',
        path: '/products/fresh-fruits',
        img: IMAGES.fruits,
        desc: 'Seasonal fruit for export [Sample].',
      },
    ],
  },
  onions: {
    id: 'onions',
    name: 'Onions',
    category: 'Fresh vegetable',
    tag: 'Fresh vegetable',
    heroSentence: 'Export red onions packed in ventilated mesh bags for ocean container transit.',
    isOnion: true,
    images: {
      main: IMAGES.onions,
      thumb1: IMAGES.onions,
      thumb2: IMAGES.onionsMesh,
      thumb3: IMAGES.packhouseInspection,
    },
    packingPhotos: {
      packing: IMAGES.onionsMesh,
      palletising: IMAGES.portContainers,
      loading: IMAGES.containerLoading,
    },
    related: [
      {
        id: 'pomegranates',
        name: 'Pomegranates',
        category: 'Fresh fruit',
        path: '/products/pomegranates',
        img: IMAGES.pomegranates,
        desc: 'Export-grade fruit packed in cartons.',
      },
      {
        id: 'fresh-vegetables',
        name: 'Fresh vegetables',
        category: 'Fresh vegetable',
        path: '/products/fresh-vegetables',
        img: IMAGES.vegetables,
        desc: 'Seasonal vegetables for export [Sample].',
      },
    ],
  },
  rice: {
    id: 'rice',
    name: 'Rice',
    category: 'Grain',
    tag: 'Grain',
    heroSentence: 'Basmati and non-basmati rice shipped in food-grade export bags by full container.',
    images: {
      main: IMAGES.riceGrains,
      thumb1: IMAGES.riceGrains,
      thumb2: IMAGES.riceSack,
      thumb3: IMAGES.rice,
    },
    packingPhotos: {
      packing: IMAGES.riceSack,
      palletising: IMAGES.portContainers,
      loading: IMAGES.containerLoading,
    },
    related: [
      {
        id: 'spices',
        name: 'Spices',
        category: 'Spice',
        path: '/products/spices',
        img: IMAGES.spices,
        desc: 'Whole and ground spices [Sample].',
      },
      {
        id: 'onions',
        name: 'Onions',
        category: 'Fresh vegetable',
        path: '/products/onions',
        img: IMAGES.onions,
        desc: 'Red onions in mesh bags, October to April.',
      },
    ],
  },
  spices: {
    id: 'spices',
    name: 'Spices',
    category: 'Spice',
    tag: 'Spice',
    heroSentence: 'Whole and ground spices sourced directly from established Indian agricultural centres.',
    images: {
      main: IMAGES.spices,
      thumb1: IMAGES.spices,
      thumb2: IMAGES.spicesTurmeric,
      thumb3: IMAGES.spicesCumin,
    },
    packingPhotos: {
      packing: IMAGES.spices,
      palletising: IMAGES.portContainers,
      loading: IMAGES.containerLoading,
    },
    related: [
      {
        id: 'rice',
        name: 'Rice',
        category: 'Grain',
        path: '/products/rice',
        img: IMAGES.rice,
        desc: 'Basmati and non-basmati [Sample].',
      },
      {
        id: 'pomegranates',
        name: 'Pomegranates',
        category: 'Fresh fruit',
        path: '/products/pomegranates',
        img: IMAGES.pomegranates,
        desc: 'Export-grade fruit packed in cartons.',
      },
    ],
  },
  'fresh-fruits': {
    id: 'fresh-fruits',
    name: 'Fresh fruits',
    category: 'Fresh fruit',
    tag: 'Fresh fruit',
    heroSentence: 'Seasonal Indian table fruits graded, pre-cooled and shipped under managed temperatures.',
    isFruitCategory: true,
    images: {
      main: IMAGES.fruits,
      thumb1: IMAGES.fruits,
      thumb2: IMAGES.fruitsGrapes,
      thumb3: IMAGES.fruitsBananas,
    },
    packingPhotos: {
      packing: IMAGES.fruits,
      palletising: IMAGES.portContainers,
      loading: IMAGES.containerLoading,
    },
    supplyItems: [
      { name: 'Table grapes [Sample item]', img: IMAGES.fruitsGrapes },
      { name: 'Cavendish bananas [Sample item]', img: IMAGES.fruitsBananas },
      { name: 'Bhagwa pomegranates [Sample item]', img: IMAGES.pomegranates },
      { name: 'Export mangoes [Sample item]', img: IMAGES.fruits },
      { name: 'Fresh papayas [Sample item]', img: IMAGES.fruitsGrapes },
      { name: 'Fresh guavas [Sample item]', img: IMAGES.pomegranatesBox },
    ],
    related: [
      {
        id: 'pomegranates',
        name: 'Pomegranates',
        category: 'Fresh fruit',
        path: '/products/pomegranates',
        img: IMAGES.pomegranates,
        desc: 'Export-grade fruit packed in cartons.',
      },
      {
        id: 'fresh-vegetables',
        name: 'Fresh vegetables',
        category: 'Fresh vegetable',
        path: '/products/fresh-vegetables',
        img: IMAGES.vegetables,
        desc: 'Seasonal vegetables for export [Sample].',
      },
    ],
  },
  'fresh-vegetables': {
    id: 'fresh-vegetables',
    name: 'Fresh vegetables',
    category: 'Fresh vegetable',
    tag: 'Fresh vegetable',
    heroSentence: 'Seasonal vegetables harvested and graded for container export under cold chain protocol.',
    isVegetableCategory: true,
    images: {
      main: IMAGES.vegetables,
      thumb1: IMAGES.vegetables,
      thumb2: IMAGES.vegetablesOkra,
      thumb3: IMAGES.vegetablesGinger,
    },
    packingPhotos: {
      packing: IMAGES.vegetables,
      palletising: IMAGES.portContainers,
      loading: IMAGES.containerLoading,
    },
    supplyItems: [
      { name: 'Red onions [Sample item]', img: IMAGES.onions },
      { name: 'Green chillies [Sample item]', img: IMAGES.vegetables },
      { name: 'Fresh okra [Sample item]', img: IMAGES.vegetablesOkra },
      { name: 'Fresh ginger [Sample item]', img: IMAGES.vegetablesGinger },
      { name: 'Bitter gourd [Sample item]', img: IMAGES.onionsMesh },
      { name: 'Drumsticks [Sample item]', img: IMAGES.packhouseInspection },
    ],
    related: [
      {
        id: 'onions',
        name: 'Onions',
        category: 'Fresh vegetable',
        path: '/products/onions',
        img: IMAGES.onions,
        desc: 'Red onions in mesh bags, October to April.',
      },
      {
        id: 'fresh-fruits',
        name: 'Fresh fruits',
        category: 'Fresh fruit',
        path: '/products/fresh-fruits',
        img: IMAGES.fruits,
        desc: 'Seasonal fruit for export [Sample].',
      },
    ],
  },
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenRfq,
  onOpenBrochure,
}) => {
  // Normalize slug to match keys
  const cleanSlug = slug.toLowerCase().trim();
  const configKey =
    cleanSlug === 'fruits'
      ? 'fresh-fruits'
      : cleanSlug === 'vegetables'
      ? 'fresh-vegetables'
      : PRODUCTS_MAP[cleanSlug]
      ? cleanSlug
      : Object.keys(PRODUCTS_MAP).find((k) => cleanSlug.includes(k) || k.includes(cleanSlug)) ||
        'pomegranates';

  const product = PRODUCTS_MAP[configKey];

  // Image Gallery State: Left 4:5 main image + 3 thumbnails
  const initialImages = [product.images.thumb1, product.images.thumb2, product.images.thumb3];
  const [activeImage, setActiveImage] = useState<string>(product.images.main);

  const whatsappUrl = `https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation%20for%20${encodeURIComponent(
    product.name
  )}.`;

  // Onions 12-month calendar: October to April (peak Dec to Feb)
  // Other products: Sample calendar
  const getMonthState = (monthIndex: number): 'peak' | 'available' | 'none' => {
    if (product.isOnion) {
      // 0: Jan (peak), 1: Feb (peak), 2: Mar (avail), 3: Apr (avail), 9: Oct (avail), 10: Nov (avail), 11: Dec (peak)
      if (monthIndex === 11 || monthIndex === 0 || monthIndex === 1) return 'peak';
      if (monthIndex === 9 || monthIndex === 10 || monthIndex === 2 || monthIndex === 3) return 'available';
      return 'none';
    }
    // Sample pattern for other commodities
    if (monthIndex >= 8 && monthIndex <= 11) return 'peak';
    if (monthIndex >= 0 && monthIndex <= 3) return 'available';
    return 'none';
  };

  return (
    <div className="product-detail-page-content" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* =========================================================================
          1. BREADCRUMB & 2. PRODUCT HERO (.section ivory)
          ========================================================================= */}
      <section className="section" style={{ paddingTop: '56px', paddingBottom: '88px' }}>
        <div className="container">
          {/* 1. Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: 'var(--muted)',
              marginBottom: '28px',
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
            <button
              type="button"
              onClick={() => onNavigate('/products')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'var(--charcoal)',
                cursor: 'pointer',
                font: 'inherit',
              }}
            >
              Products
            </button>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{product.name}</span>
          </nav>

          {/* 2. Product Hero Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '48px',
              alignItems: 'start',
            }}
          >
            {/* Left: Main Rounded Image (4:5) + 3 Thumbnails */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '480px', margin: '0 auto', width: '100%' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  minHeight: '440px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bone)',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'all 300ms ease',
                  }}
                />
                <SampleImageTag />
              </div>

              {/* Three Thumbnails */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {initialImages.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(imgSrc)}
                    style={{
                      position: 'relative',
                      aspectRatio: '4 / 3',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: activeImage === imgSrc ? '2px solid var(--olive)' : '1px solid var(--line)',
                      padding: 0,
                      cursor: 'pointer',
                      backgroundColor: 'var(--bone)',
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Pill, H1, sentence, 2x2 fact cards, buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <span className="pill">{product.tag}</span>
              </div>

              <h1 style={{ margin: 0 }}>{product.name}</h1>

              <p style={{ margin: 0, fontSize: '18px', lineHeight: '28px', color: 'var(--charcoal)' }}>
                {product.heroSentence}
              </p>

              {/* 4 Mini Fact Cards in 2 x 2 Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '14px',
                  marginTop: '8px',
                }}
              >
                <div className="card" style={{ padding: '14px 18px', gap: '4px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Variety
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>
                    [Sample]
                  </span>
                </div>

                <div className="card" style={{ padding: '14px 18px', gap: '4px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Origin
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>
                    India [Sample]
                  </span>
                </div>

                <div className="card" style={{ padding: '14px 18px', gap: '4px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Packing
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>
                    [Sample]
                  </span>
                </div>

                <div className="card" style={{ padding: '14px 18px', gap: '4px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Minimum order
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>
                    1 container load (FCL)
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginTop: '12px' }}>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onOpenRfq(product.name)}
                >
                  <span>Request a quote for {product.name.toLowerCase()}</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    if (onOpenBrochure) onOpenBrochure();
                    else onOpenRfq(product.name);
                  }}
                >
                  <Download size={15} />
                  <span>Download spec sheet</span>
                </button>
              </div>

              <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>
                We reply within [Sample] hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SPECIFICATION (.section-white)
          ========================================================================= */}
      <section className="section-white">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ marginBottom: '32px' }}>
            <span className="eyebrow">COMMODITY STANDARDS</span>
            <h2 style={{ margin: '8px 0 0 0' }}>Specification</h2>
          </div>

          {/* Rounded card with two-column table in 4 groups */}
          <div className="card" style={{ padding: '36px', gap: '32px' }}>
            {/* Group 1: PRODUCT */}
            <div>
              <h3
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--olive-deep)',
                  marginBottom: '16px',
                }}
              >
                PRODUCT
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Variety</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Origin</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>India [Sample]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Size or grade</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Colour</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
              </div>
            </div>

            {/* Group 2: PACKING */}
            <div>
              <h3
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--olive-deep)',
                  marginBottom: '16px',
                }}
              >
                PACKING
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Packing type</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Net weight</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Labelling</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
              </div>
            </div>

            {/* Group 3: SHIPPING */}
            <div>
              <h3
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--olive-deep)',
                  marginBottom: '16px',
                }}
              >
                SHIPPING
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Container type</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Quantity per container</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Port of loading</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Trade terms</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
              </div>
            </div>

            {/* Group 4: TERMS */}
            <div>
              <h3
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--olive-deep)',
                  marginBottom: '16px',
                }}
              >
                TERMS
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Minimum order</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 600 }}>1 container load (FCL)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Payment terms</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>Samples</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>[Sample]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRODUCT SPECIFIC: ITEMS WE SUPPLY (Fresh Fruits and Fresh Vegetables only)
          ========================================================================= */}
      {(product.isFruitCategory || product.isVegetableCategory) && product.supplyItems && (
        <section className="section-white" style={{ paddingTop: 0, paddingBottom: '88px' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <div style={{ marginBottom: '28px' }}>
              <span className="eyebrow">ASSORTMENT</span>
              <h2 style={{ margin: '8px 0 0 0' }}>Items we supply</h2>
            </div>

            <div
              className="grid-stretch"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '20px',
              }}
            >
              {product.supplyItems.map((item, idx) => (
                <div
                  key={idx}
                  className="card"
                  style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '8px',
                      objectFit: 'cover',
                      flexShrink: 0,
                      backgroundColor: 'var(--bone)',
                    }}
                  />
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          4. AVAILABILITY (.section ivory)
          ========================================================================= */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ marginBottom: '28px' }}>
            <span className="eyebrow">HARVEST TIMELINE</span>
            <h2 style={{ margin: '8px 0 0 0' }}>Availability</h2>
          </div>

          {/* Onions info panel */}
          {product.isOnion && (
            <div
              className="card"
              style={{
                marginBottom: '24px',
                padding: '16px 20px',
                backgroundColor: 'var(--white)',
                borderLeft: '4px solid var(--olive)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Calendar size={18} style={{ color: 'var(--olive)', flexShrink: 0 }} />
              <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>
                Season: October to April, peak December to February
              </span>
            </div>
          )}

          {/* 12-Month Calendar Bar Card */}
          <div className="card" style={{ padding: '36px', gap: '28px' }}>
            {/* 12 Months Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '8px',
              }}
            >
              {MONTHS.map((m, idx) => {
                const state = getMonthState(idx);
                let bg = 'transparent';
                let border = '1px solid var(--line)';
                let textColor = 'var(--muted)';

                if (state === 'peak') {
                  bg = 'var(--olive-deep)';
                  border = '1px solid var(--olive-deep)';
                  textColor = 'var(--white)';
                } else if (state === 'available') {
                  bg = 'var(--olive)';
                  border = '1px solid var(--olive)';
                  textColor = 'var(--white)';
                }

                return (
                  <div
                    key={m}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '36px',
                        borderRadius: '6px',
                        backgroundColor: bg,
                        border: border,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: textColor,
                      }}
                    >
                      {m}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend & Note */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                paddingTop: '16px',
                borderTop: '1px solid var(--line)',
                fontSize: '13px',
              }}
            >
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '3px', backgroundColor: 'var(--olive-deep)' }} />
                  <span style={{ color: 'var(--charcoal)' }}>Peak</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '3px', backgroundColor: 'var(--olive)' }} />
                  <span style={{ color: 'var(--charcoal)' }}>Available</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '3px', border: '1px solid var(--line)', backgroundColor: 'transparent' }} />
                  <span style={{ color: 'var(--muted)' }}>Off season</span>
                </div>
              </div>

              {!product.isOnion && (
                <span style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
                  Sample months
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PACKING AND LOADING (.section-white)
          ========================================================================= */}
      <section className="section-white">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ marginBottom: '32px' }}>
            <span className="eyebrow">HANDLING</span>
            <h2 style={{ margin: '8px 0 0 0' }}>Packing and loading</h2>
          </div>

          <div
            className="grid-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '28px',
            }}
          >
            {/* Card 1: Packing */}
            <div className="card" style={{ gap: '16px', padding: '16px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img
                  src={product.packingPhotos.packing}
                  alt="Carton and bag packing"
                  className="card-img"
                />
                <SampleImageTag />
              </div>
              <h3 style={{ margin: 0, fontSize: '18px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                Packing
              </h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--charcoal)', lineHeight: '22px' }}>
                Export-grade grading, protective liners and labelled containers.
              </p>
            </div>

            {/* Card 2: Palletising */}
            <div className="card" style={{ gap: '16px', padding: '16px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img
                  src={product.packingPhotos.palletising}
                  alt="Palletised produce"
                  className="card-img"
                />
                <SampleImageTag />
              </div>
              <h3 style={{ margin: 0, fontSize: '18px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                Palletising
              </h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--charcoal)', lineHeight: '22px' }}>
                Uniform stacking with corner protection and strap securing.
              </p>
            </div>

            {/* Card 3: Loading */}
            <div className="card" style={{ gap: '16px', padding: '16px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img
                  src={product.packingPhotos.loading}
                  alt="Container loading"
                  className="card-img"
                />
                <SampleImageTag />
              </div>
              <h3 style={{ margin: 0, fontSize: '18px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                Loading
              </h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--charcoal)', lineHeight: '22px' }}>
                Reefer pre-cooling check and customs wire seal affixing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. DOCUMENTS (.section ivory)
          ========================================================================= */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ marginBottom: '28px' }}>
            <span className="eyebrow">COMPLIANCE</span>
            <h2 style={{ margin: '8px 0 0 0' }}>Documents with every shipment</h2>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div className="pill" style={{ padding: '8px 16px', gap: '8px', fontSize: '13px' }}>
              <FileText size={15} />
              <span>Commercial invoice</span>
            </div>
            <div className="pill" style={{ padding: '8px 16px', gap: '8px', fontSize: '13px' }}>
              <Package size={15} />
              <span>Packing list</span>
            </div>
            <div className="pill" style={{ padding: '8px 16px', gap: '8px', fontSize: '13px' }}>
              <ShieldCheck size={15} />
              <span>Phytosanitary certificate</span>
            </div>
            <div className="pill" style={{ padding: '8px 16px', gap: '8px', fontSize: '13px' }}>
              <CheckCircle2 size={15} />
              <span>Certificate of origin</span>
            </div>
            <div className="pill" style={{ padding: '8px 16px', gap: '8px', fontSize: '13px' }}>
              <Ship size={15} />
              <span>Bill of lading</span>
            </div>
            <div className="pill" style={{ padding: '8px 16px', gap: '8px', fontSize: '13px' }}>
              <ClipboardCheck size={15} />
              <span>Quality report on request</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. QUESTIONS (.section-white)
          ========================================================================= */}
      <section className="section-white">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ marginBottom: '28px' }}>
            <span className="eyebrow">FAQ</span>
            <h2 style={{ margin: '8px 0 0 0' }}>Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <details className="accordion" open>
              <summary>Which varieties are available?</summary>
              <div className="accordion-body">
                We export standard commercial varieties graded by size count, colour profile and skin finish according to destination market standards.
              </div>
            </details>

            <details className="accordion">
              <summary>What packing options do you support?</summary>
              <div className="accordion-body">
                Shipments are packed in ventilated corrugated boxes, telescopic export cartons or mesh bags with gross tare weight marks.
              </div>
            </details>

            <details className="accordion">
              <summary>What is the minimum order quantity?</summary>
              <div className="accordion-body">
                Our minimum order quantity is 1 container load (FCL) to maintain proper reefer temperature integrity and ocean shipping logistics.
              </div>
            </details>

            <details className="accordion">
              <summary>Can we request pre-shipment samples?</summary>
              <div className="accordion-body">
                Product samples and packing photographs can be dispatched via international courier for verified commercial buyers [Sample].
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. RELATED PRODUCTS (.section ivory)
          ========================================================================= */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ marginBottom: '28px' }}>
            <span className="eyebrow">EXPLORE MORE</span>
            <h2 style={{ margin: '8px 0 0 0' }}>Related products</h2>
          </div>

          <div
            className="grid-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
            }}
          >
            {product.related.map((rel) => (
              <div key={rel.id} className="card" style={{ gap: '16px' }}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                  <img
                    src={rel.img}
                    alt={rel.name}
                    className="card-img"
                  />
                  <SampleImageTag />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="pill">{rel.category}</span>
                </div>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '24px' }}>
                  {rel.name}
                </h3>
                <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', flexGrow: 1 }}>
                  {rel.desc}
                </p>
                <button
                  type="button"
                  className="link"
                  onClick={() => onNavigate(rel.path)}
                  style={{ alignSelf: 'flex-start' }}
                >
                  View specification &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. CLOSING BAND (.band-navy)
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
              onClick={() => onOpenRfq(product.name)}
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
