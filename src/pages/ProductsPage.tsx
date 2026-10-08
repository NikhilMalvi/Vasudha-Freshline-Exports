import React from 'react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { IMAGES } from '../data/images';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onOpenRfq,
}) => {
  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  const productsList = [
    {
      name: 'Pomegranates',
      path: '/products/pomegranates',
      src: IMAGES.pomegranates,
      label: 'Bhagwa export pomegranates',
      spec: 'Bhagwa variety calibrated in counts 9 to 15, packed in 3.5kg export cartons.',
    },
    {
      name: 'Onions',
      path: '/products/onions',
      src: IMAGES.onions,
      label: 'Fresh red export onions',
      spec: 'Red onion season October to April, peak December to February. Sizes 45mm to 65mm [Sample].',
    },
    {
      name: 'Rice',
      path: '/products/rice',
      src: IMAGES.rice,
      label: 'Basmati and non-basmati rice',
      spec: 'Traditional basmati and premium non-basmati varieties in 20ft dry containers.',
    },
    {
      name: 'Spices',
      path: '/products/spices',
      src: IMAGES.spices,
      label: 'Indian export spices',
      spec: 'Whole and ground turmeric, cumin, and chilli in multiwall export bags.',
    },
    {
      name: 'Fresh fruits',
      path: '/products/fresh-fruits',
      src: IMAGES.fruits,
      label: 'Fresh seasonal fruits',
      spec: 'Table grapes, bananas, and seasonal varieties in pre-cooled reefer containers.',
    },
    {
      name: 'Fresh vegetables',
      path: '/products/fresh-vegetables',
      src: IMAGES.vegetables,
      label: 'Fresh Indian vegetables',
      spec: 'Green chillies, okra, and seasonal produce handled under temperature management.',
    },
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const isAvailable = (mIdx: number) => [9, 10, 11, 0, 1, 2, 3].includes(mIdx);
  const isPeak = (mIdx: number) => [11, 0, 1].includes(mIdx);

  return (
    <main style={{ backgroundColor: '#F7F5EF', color: '#353535' }}>
      {/* 1. HERO */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="label-caps">Commodity catalog</span>
              <h1 style={{ margin: '8px 0 16px 0' }}>Export commodities</h1>
              <p style={{ fontSize: '18px', lineHeight: '28px', color: '#353535', margin: '0 0 24px 0' }}>
                Six core agricultural categories sourced in India. We supply container loads to commercial importers and wholesalers worldwide.
              </p>
              <button type="button" className="btn-primary" onClick={() => onOpenRfq()}>
                Request commodity quote
              </button>
            </div>
            <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
              <PhotoPlaceholder
                src={IMAGES.pomegranatesCut}
                label="PHOTO NEEDED: commodity collection"
                aspectRatio="4:5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATALOG GRID */}
      <section style={{ padding: '64px 0', backgroundColor: '#ECE8DC', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <span className="label-caps">Portfolio</span>
            <h2 style={{ margin: '4px 0 8px 0' }}>Six export categories</h2>
            <p style={{ margin: 0, fontSize: '16px', color: '#5F5D55' }}>
              Shipped by container load under agreed commercial specifications.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '24px',
            }}
          >
            {productsList.map((p) => (
              <div
                key={p.name}
                style={{
                  backgroundColor: '#F7F5EF',
                  border: '1px solid #D9D5C8',
                  borderRadius: 'var(--radius)',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <PhotoPlaceholder src={p.src} label={p.label} aspectRatio="3:2" />
                <div>
                  <h3 style={{ margin: '4px 0 6px 0', fontSize: '20px' }}>{p.name}</h3>
                  <p style={{ fontSize: '14px', lineHeight: '20px', color: '#5F5D55', margin: 0 }}>
                    {p.spec}
                  </p>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                  <button
                    type="button"
                    className="text-link"
                    style={{ fontSize: '14px' }}
                    onClick={() => onNavigate(p.path)}
                  >
                    View specifications &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ONION SEASONALITY */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="label-caps">Harvest calendar</span>
          <h2 style={{ margin: '4px 0 12px 0' }}>Fresh onion seasonality</h2>
          <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: '0 0 24px 0' }}>
            Red onion harvest spans October to April, with peak export volume December to February. Shipments are packed in ventilated mesh bags.
          </p>

          <div
            style={{
              backgroundColor: '#ECE8DC',
              border: '1px solid #D9D5C8',
              borderRadius: 'var(--radius)',
              padding: '20px',
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#16161A', marginBottom: '12px' }}>
              Red Onions (Nashik / Maharashtra)
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '4px',
                textAlign: 'center',
              }}
            >
              {months.map((m, idx) => {
                const avail = isAvailable(idx);
                const peak = isPeak(idx);
                return (
                  <div key={m} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '11px', color: '#5F5D55' }}>{m}</span>
                    <div
                      style={{
                        height: '24px',
                        backgroundColor: peak ? '#687036' : avail ? 'rgba(104, 112, 54, 0.4)' : '#F7F5EF',
                        border: '1px solid #D9D5C8',
                        borderRadius: '1px',
                      }}
                      title={peak ? 'Peak harvest' : avail ? 'Available' : 'Off season'}
                    />
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', gap: '20px', marginTop: '12px', fontSize: '12px', color: '#5F5D55' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', backgroundColor: '#687036', display: 'inline-block' }} /> Peak (Dec–Feb)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', backgroundColor: 'rgba(104, 112, 54, 0.4)', display: 'inline-block' }} /> Available (Oct–Apr)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTAINER & PACKAGING */}
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
              <h2 style={{ margin: '4px 0 12px 0' }}>Container packing</h2>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: 0 }}>
                We pack produce in export-grade cartons and mesh bags. Goods are loaded into 20ft dry or 40ft reefer containers for sea transit.
              </p>
            </div>
            <div>
              <PhotoPlaceholder
                src={IMAGES.portContainers}
                label="PHOTO NEEDED: containerized pallet cargo"
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
            Request container pricing, harvest schedules, or commodity specifications.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button type="button" className="btn-primary" onClick={() => onOpenRfq()}>
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
