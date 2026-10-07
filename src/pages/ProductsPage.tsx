import React, { useState, useEffect } from 'react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { Button } from '../components/Button';
import { PRODUCTS_DATA } from '../data/commodities';
import { ArrowRight } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onOpenRfq }) => {
  const [filter, setFilter] = useState<'All' | 'Fresh fruits' | 'Fresh vegetables' | 'Rice' | 'Spices'>('All');

  const allProducts = Object.values(PRODUCTS_DATA);

  const filtered = filter === 'All'
    ? allProducts
    : allProducts.filter((p) => {
        if (filter === 'Fresh fruits') return p.category === 'Fresh Fruits';
        if (filter === 'Fresh vegetables') return p.category === 'Fresh Vegetables';
        if (filter === 'Rice') return p.category === 'Grains & Cereals';
        if (filter === 'Spices') return p.category === 'Spices';
        return true;
      });

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
  }, [filter]);

  return (
    <main>
      {/* Page Intro */}
      <section className="hairline-b" style={{ backgroundColor: 'var(--ivory)', paddingTop: '64px', paddingBottom: '48px' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
              Products
            </span>
            <h1 style={{ marginBottom: '20px' }}>Products</h1>
            <p style={{ fontSize: '18px', lineHeight: '28px', color: 'var(--charcoal)' }}>
              Specifications, packing and seasonality for everything we export. Prices are given per enquiry because they change with the crop and with freight.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Row Chips */}
      <section className="hairline-b" style={{ backgroundColor: 'var(--bone)', padding: '20px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              paddingBottom: '4px',
            }}
            className="reveal"
          >
            {(['All', 'Fresh fruits', 'Fresh vegetables', 'Rice', 'Spices'] as const).map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`chip ${isSelected ? 'active' : ''}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '1px solid var(--line)',
              borderLeft: '1px solid var(--line)',
            }}
            className="products-index-grid"
          >
            {filtered.map((p, idx) => (
              <article
                key={p.slug}
                className={`reveal reveal-delay-${(idx % 3) + 1}`}
                style={{
                  borderRight: '1px solid var(--line)',
                  borderBottom: '1px solid var(--line)',
                  padding: '32px 24px',
                  backgroundColor: 'var(--ivory)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'background-color 200ms ease',
                }}
              >
                <div style={{ marginBottom: '24px' }}>
                  <PhotoPlaceholder
                    label={p.packingPhotos[0].label}
                    subtext={p.packingPhotos[0].subtext}
                    aspectRatio="4:5"
                    src={p.packingPhotos[0].src}
                  />
                </div>

                <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
                  {p.category}
                </span>

                <h2 style={{ fontSize: '28px', lineHeight: '34px', marginBottom: '12px' }}>
                  {p.name}
                </h2>

                <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--muted)', marginBottom: '20px', flexGrow: 1 }}>
                  Origin: {p.origin} · Season: {p.seasonSummary} · Packing: {p.specs[1]?.rows[0]?.value || 'Export cartons/bags'}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--line)',
                    paddingTop: '20px',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => onNavigate(`/products/${p.slug}`)}
                    className="text-link"
                    style={{ background: 'none', border: 'none', font: 'inherit', padding: 0 }}
                  >
                    <span>View specification</span>
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

      {/* "Can't find it?" Band */}
      <section style={{ backgroundColor: 'var(--bone)', padding: '64px 0' }} className="hairline-b">
        <div className="container">
          <div
            style={{
              maxWidth: '640px',
              margin: '0 auto',
              textAlign: 'center',
            }}
            className="reveal"
          >
            <h3 style={{ fontSize: '24px', lineHeight: '32px', marginBottom: '12px' }}>
              Looking for something else?
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)', marginBottom: '24px' }}>
              We can source other Indian agricultural commodities and fresh produce varieties on contract request.
            </p>
            <Button variant="secondary" onClick={() => onOpenRfq('Other Agri Commodity')}>
              Ask us for custom sourcing
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .products-index-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .products-index-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
};
