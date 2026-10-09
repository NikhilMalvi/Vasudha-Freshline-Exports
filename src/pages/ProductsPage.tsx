import React, { useState } from 'react';
import {
  ArrowRight,
  HelpCircle,
  Sparkles,
  CircleDot,
  Layers,
  Package,
  Apple,
  Carrot,
} from 'lucide-react';
import { IMAGES } from '../data/images';
import { QuoteFormSection } from '../components/QuoteFormSection';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onOpenRfq,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterChips = [
    'All',
    'Fresh fruit',
    'Fresh vegetable',
    'Grain',
    'Spice',
  ];

  const productsList = [
    {
      id: 'pomegranates',
      name: 'Pomegranates',
      category: 'Fresh fruit',
      path: '/products/pomegranates',
      img: IMAGES.pomegranatesCut,
      desc: 'Export-grade fruit packed in cartons.',
      badgeClass: 'badge-crimson',
      icon: Sparkles,
    },
    {
      id: 'onions',
      name: 'Onions',
      category: 'Fresh vegetable',
      path: '/products/onions',
      img: IMAGES.onionsMesh,
      desc: 'Red onions in mesh bags, October to April.',
      badgeClass: 'badge-plum',
      icon: CircleDot,
    },
    {
      id: 'rice',
      name: 'Rice',
      category: 'Grain',
      path: '/products/rice',
      img: IMAGES.riceGrains,
      desc: 'Basmati and non-basmati grades.',
      badgeClass: 'badge-saffron',
      icon: Layers,
    },
    {
      id: 'spices',
      name: 'Spices',
      category: 'Spice',
      path: '/products/spices',
      img: IMAGES.spices,
      desc: 'Whole and ground spices.',
      badgeClass: 'badge-blue',
      icon: Package,
    },
    {
      id: 'fresh-fruits',
      name: 'Fresh fruits',
      category: 'Fresh fruit',
      path: '/products/fresh-fruits',
      img: IMAGES.fruits,
      desc: 'Seasonal fresh fruit for export.',
      badgeClass: 'badge-teal',
      icon: Apple,
    },
    {
      id: 'fresh-vegetables',
      name: 'Fresh vegetables',
      category: 'Fresh vegetable',
      path: '/products/fresh-vegetables',
      img: IMAGES.vegetables,
      desc: 'Seasonal fresh vegetables for export.',
      badgeClass: 'badge-leaf',
      icon: Carrot,
    },
  ];

  const filteredProducts =
    selectedFilter === 'All'
      ? productsList
      : productsList.filter((p) => p.category === selectedFilter);

  return (
    <div className="products-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
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
            <span style={{ color: '#FFFFFF' }}>Products</span>
          </nav>
          <span
            className="eyebrow"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              color: '#FFFFFF',
            }}
          >
            Products
          </span>
          <h1>Our products</h1>
          <p className="sub-line">
            Specifications, packing and seasonality for everything we export.
          </p>
        </div>
      </section>

      {/* =====================================================================
          2. GRID (mist section with two soft glows)
          Filter chips + 6 .card items + 7th inquiry card
          ===================================================================== */}
      <section className="section section-mist has-glows">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-plum-tr" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Filter chips (.chip) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            {filterChips.map((chip) => (
              <button
                key={chip}
                type="button"
                className={`chip ${selectedFilter === chip ? 'selected' : ''}`}
                onClick={() => setSelectedFilter(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
            }}
          >
            {filteredProducts.map((prod) => {
              const IconComp = prod.icon;
              return (
                <div key={prod.id} className="card" style={{ transition: 'opacity 0.3s ease' }}>
                  <div className="card-img-wrap" style={{ position: 'relative', overflow: 'visible' }}>
                    <img src={prod.img} alt={prod.name} className="card-img" />
                    <div className={`card-icon-badge ${prod.badgeClass}`} title={prod.name}>
                      <IconComp />
                    </div>
                  </div>
                  <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                    <div>
                      <span className="eyebrow" style={{ fontSize: '11px', padding: '4px 10px' }}>
                        {prod.category}
                      </span>
                    </div>
                    <h3>{prod.name}</h3>
                    <p style={{ fontSize: '15px', color: 'var(--muted)', flexGrow: 1 }}>
                      {prod.desc}
                    </p>
                    <div style={{ marginTop: '12px' }}>
                      <button
                        type="button"
                        className="link"
                        onClick={() => onNavigate(prod.path)}
                        style={{ background: 'none', border: 'none', padding: 0 }}
                      >
                        <span>Explore</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 7th Card with dashed outline */}
            <div
              className="card"
              style={{
                backgroundColor: 'var(--white)',
                border: '2px dashed var(--line)',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '40px 32px',
              }}
            >
              <div className="icon-circle" style={{ marginBottom: '18px' }}>
                <HelpCircle size={24} />
              </div>
              <h3 style={{ marginBottom: '8px' }}>Looking for something else?</h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '24px', maxWidth: '280px' }}>
                Ask us for customized grades, packaging or commodities from India.
              </p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => onOpenRfq()}
              >
                <span>Contact us</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. QUOTE FORM (Light mist with white card + glows)
          ===================================================================== */}
      <QuoteFormSection />
    </div>
  );
};
