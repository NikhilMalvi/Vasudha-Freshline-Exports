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
import { InnerBanner } from '../components/InnerBanner';
import { ClosingCtaBand } from '../components/ClosingCtaBand';

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
      colorVar: 'var(--crimson)',
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
      colorVar: 'var(--plum)',
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
      colorVar: 'var(--saffron)',
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
      colorVar: 'var(--blue)',
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
      colorVar: 'var(--teal)',
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
      colorVar: 'var(--leaf)',
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
          1. INNER BANNER (Pattern A)
          ===================================================================== */}
      <InnerBanner
        pill="Products"
        title="Our products"
        subtitle="Specifications, packing and seasonality for everything we export."
      />

      {/* =====================================================================
          2. FILTER CHIPS (White section)
          Selected = navy. They filter the grid with a soft fade.
          ===================================================================== */}
      <section className="section section-white" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            {filterChips.map((chip) => {
              const isSelected = selectedFilter === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  className={`chip ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedFilter(chip)}
                  style={{
                    backgroundColor: isSelected ? 'var(--navy)' : 'var(--white)',
                    color: isSelected ? '#FFFFFF' : 'var(--body)',
                    border: isSelected ? '1px solid var(--navy)' : '1px solid var(--border-subtle)',
                    padding: '10px 22px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                  }}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. GRID (Mist with two glows)
          6 product cards + 7th card with dashed outline: equal heights
          ===================================================================== */}
      <section className="section section-mist has-glows" style={{ paddingTop: '48px', paddingBottom: '88px' }}>
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-plum-tr" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
              alignItems: 'stretch',
            }}
          >
            {filteredProducts.map((prod) => {
              const IconComp = prod.icon;
              return (
                <div
                  key={prod.id}
                  className="card"
                  style={{
                    transition: 'opacity 0.3s ease, transform 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <div className="card-img-wrap" style={{ position: 'relative', overflow: 'visible' }}>
                    <img src={prod.img} alt={prod.name} className="card-img" />
                    <div className={`card-icon-badge ${prod.badgeClass}`} title={prod.name}>
                      <IconComp size={22} />
                    </div>
                  </div>

                  <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                    <div>
                      <span className="eyebrow" style={{ fontSize: '11px', padding: '4px 10px' }}>
                        {prod.category}
                      </span>
                    </div>
                    <h3 style={{ margin: 0, fontSize: '22px' }}>{prod.name}</h3>
                    <p style={{ fontSize: '15px', color: 'var(--muted)', flexGrow: 1, margin: 0 }}>
                      {prod.desc}
                    </p>
                    <div style={{ marginTop: '16px' }}>
                      <button
                        type="button"
                        className="link"
                        onClick={() => onNavigate(prod.path)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          color: prod.colorVar,
                          cursor: 'pointer',
                        }}
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
                padding: '48px 32px',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div
                className="icon-circle"
                style={{
                  width: '56px',
                  height: '56px',
                  minWidth: '56px',
                  backgroundColor: 'var(--mist)',
                  color: 'var(--navy)',
                  marginBottom: '20px',
                }}
              >
                <HelpCircle size={28} />
              </div>
              <h3 style={{ marginBottom: '8px', fontSize: '22px' }}>Looking for something else? Ask us.</h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '28px', maxWidth: '300px' }}>
                Ask us for customized agricultural commodities, special sizing parameters, or private label packing from India.
              </p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => onNavigate('/contact')}
              >
                <span>Contact us</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CLOSING CTA BAND (Pattern E)
          ===================================================================== */}
      <ClosingCtaBand onOpenRfq={() => onOpenRfq()} onRequestQuote={() => onOpenRfq()} />
    </div>
  );
};
