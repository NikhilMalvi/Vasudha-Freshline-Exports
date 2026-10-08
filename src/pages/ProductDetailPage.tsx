import React from 'react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { PRODUCTS_DATA, type ProductDetailData } from '../data/commodities';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
  onOpenBrochure?: () => void;
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenRfq,
}) => {
  // Normalize slug
  const normalizedSlug = slug.replace(/^fresh-/, '').replace(/s$/, '');
  const foundKey = Object.keys(PRODUCTS_DATA).find(
    (k) => k === slug || k.startsWith(normalizedSlug) || slug.startsWith(k)
  );

  const product: ProductDetailData = foundKey ? PRODUCTS_DATA[foundKey] : PRODUCTS_DATA.pomegranates;

  const isOnion = product.slug.includes('onion') || slug.includes('onion');

  const whatsappUrl = `https://wa.me/?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(product.name)}.`;

  return (
    <main style={{ backgroundColor: '#F7F5EF', color: '#353535' }}>
      {/* 1. HERO */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#5F5D55' }}>
              <button
                type="button"
                onClick={() => onNavigate('/products')}
                style={{ background: 'none', border: 'none', color: '#5F5D55', cursor: 'pointer', padding: 0 }}
              >
                Products
              </button>
              <span>/</span>
              <span style={{ color: '#16161A', fontWeight: 500 }}>{product.name}</span>
            </div>
          </nav>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="label-caps">{product.category}</span>
              <h1 style={{ margin: '8px 0 16px 0' }}>{product.name}</h1>
              <p style={{ fontSize: '18px', lineHeight: '28px', color: '#353535', margin: '0 0 24px 0' }}>
                Indian produce, exported with precision. Sourced from verified Indian growers and shipped by container load.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onOpenRfq(product.name)}
                >
                  Request a quote
                </button>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => onNavigate('/products')}
                >
                  &larr; All commodities
                </button>
              </div>
            </div>

            <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
              <PhotoPlaceholder
                label={`PHOTO NEEDED: ${product.name} export packing`}
                aspectRatio="4:5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATIONS */}
      <section style={{ padding: '64px 0', backgroundColor: '#ECE8DC', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="label-caps">Grading</span>
          <h2 style={{ margin: '4px 0 12px 0' }}>Product specifications</h2>
          <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: '0 0 24px 0' }}>
            Graded and sorted according to international export specifications [CONFIRM]. Available in standard commercial packing.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            <div style={{ backgroundColor: '#F7F5EF', border: '1px solid #D9D5C8', padding: '16px', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', color: '#5F5D55', textTransform: 'uppercase', display: 'block' }}>Variety</span>
              <strong style={{ fontSize: '15px', color: '#16161A', display: 'block', marginTop: '4px' }}>[CONFIRM: variety]</strong>
            </div>
            <div style={{ backgroundColor: '#F7F5EF', border: '1px solid #D9D5C8', padding: '16px', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', color: '#5F5D55', textTransform: 'uppercase', display: 'block' }}>Origin</span>
              <strong style={{ fontSize: '15px', color: '#16161A', display: 'block', marginTop: '4px' }}>[CONFIRM: Indian origin]</strong>
            </div>
            <div style={{ backgroundColor: '#F7F5EF', border: '1px solid #D9D5C8', padding: '16px', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', color: '#5F5D55', textTransform: 'uppercase', display: 'block' }}>Packaging</span>
              <strong style={{ fontSize: '15px', color: '#16161A', display: 'block', marginTop: '4px' }}>[CONFIRM: packaging format]</strong>
            </div>
            <div style={{ backgroundColor: '#F7F5EF', border: '1px solid #D9D5C8', padding: '16px', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', color: '#5F5D55', textTransform: 'uppercase', display: 'block' }}>Minimum Order</span>
              <strong style={{ fontSize: '15px', color: '#16161A', display: 'block', marginTop: '4px' }}>Container load (FCL)</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEASONALITY */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="label-caps">Calendar</span>
          <h2 style={{ margin: '4px 0 12px 0' }}>Seasonal availability</h2>
          {isOnion ? (
            <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: '0 0 24px 0' }}>
              Red onions are available from October to April, with peak harvest from December to February.
            </p>
          ) : (
            <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: '0 0 24px 0' }}>
              Commercial export availability depends on seasonal harvests. [CONFIRM: harvest months and sailing windows].
            </p>
          )}

          <div
            style={{
              backgroundColor: '#ECE8DC',
              border: '1px solid #D9D5C8',
              borderRadius: 'var(--radius)',
              padding: '20px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '4px',
                textAlign: 'center',
              }}
            >
              {MONTH_NAMES.map((m, idx) => {
                const isAvail = isOnion && [9, 10, 11, 0, 1, 2, 3].includes(idx);
                const isPeak = isOnion && [11, 0, 1].includes(idx);

                return (
                  <div key={m} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '11px', color: '#5F5D55' }}>{m}</span>
                    <div
                      style={{
                        height: '24px',
                        backgroundColor: isPeak
                          ? '#687036'
                          : isAvail
                          ? 'rgba(104, 112, 54, 0.4)'
                          : '#F7F5EF',
                        border: '1px solid #D9D5C8',
                        borderRadius: '1px',
                      }}
                    />
                  </div>
                );
              })}
            </div>
            {!isOnion && (
              <p style={{ fontSize: '12px', color: '#5F5D55', marginTop: '12px', margin: '12px 0 0 0' }}>
                [CONFIRM: specific harvest and export calendar months]
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 4. CONTAINER LOGISTICS */}
      <section style={{ padding: '64px 0', backgroundColor: '#ECE8DC', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '36px',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="label-caps">Logistics</span>
              <h2 style={{ margin: '4px 0 12px 0' }}>Container logistics</h2>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: 0 }}>
                Dispatched by full container load with temperature management [CONFIRM]. Accompanied by statutory phytosanitary certification.
              </p>
            </div>
            <div>
              <PhotoPlaceholder
                label={`PHOTO NEEDED: container loading for ${product.name}`}
                aspectRatio="3:2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING BAND (navy #10104F) */}
      <section style={{ backgroundColor: '#10104F', color: '#F7F5EF', padding: '72px 0' }} className="dark-section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ color: '#F7F5EF', margin: '0 0 16px 0' }}>Tell us what you need.</h2>
          <p style={{ fontSize: '16px', lineHeight: '26px', color: '#DAD8E8', margin: '0 auto 32px auto' }}>
            Request container quotes, sizing specifications, or current harvest availability.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => onOpenRfq(product.name)}
            >
              Request a quote
            </button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
