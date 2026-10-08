import React from 'react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';

interface GalleryPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate: _onNavigate,
  onOpenRfq,
}) => {
  const whatsappUrl =
    'https://wa.me/?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  return (
    <main style={{ backgroundColor: '#F7F5EF', color: '#353535' }}>
      {/* 1. HERO */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="label-caps">Field documentation</span>
          <h1 style={{ margin: '8px 0 16px 0' }}>Export operations gallery</h1>
          <p style={{ fontSize: '18px', lineHeight: '28px', color: '#353535', margin: '0 0 24px 0' }}>
            Visual records documenting harvest collection, packhouse grading, and container dispatch. Photographed on site during export packing.
          </p>
          <button type="button" className="btn-primary" onClick={() => onOpenRfq()}>
            Request shipment records
          </button>
        </div>
      </section>

      {/* 2. SOURCING & PACKHOUSE */}
      <section style={{ padding: '64px 0', backgroundColor: '#ECE8DC', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <span className="label-caps">Step 1</span>
            <h2 style={{ margin: '4px 0 8px 0' }}>Sourcing & grading</h2>
            <p style={{ margin: 0, fontSize: '16px', color: '#5F5D55' }}>
              Direct harvest sorting and calibrated grading at source packhouses.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px',
            }}
          >
            <PhotoPlaceholder label="PHOTO NEEDED: farm harvest collection" aspectRatio="3:2" />
            <PhotoPlaceholder label="PHOTO NEEDED: manual grading and sorting line" aspectRatio="3:2" />
            <PhotoPlaceholder label="PHOTO NEEDED: export carton packing" aspectRatio="3:2" />
          </div>
        </div>
      </section>

      {/* 3. CONTAINER LOADING */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <span className="label-caps">Step 2</span>
            <h2 style={{ margin: '4px 0 8px 0' }}>Container loading & cold chain</h2>
            <p style={{ margin: 0, fontSize: '16px', color: '#5F5D55' }}>
              Pallet loading into reefer containers with calibrated temperature management.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px',
            }}
          >
            <PhotoPlaceholder label="PHOTO NEEDED: container loading at packhouse" aspectRatio="3:2" />
            <PhotoPlaceholder label="PHOTO NEEDED: temperature logger placement" aspectRatio="3:2" />
            <PhotoPlaceholder label="PHOTO NEEDED: customs container bolt sealing" aspectRatio="3:2" />
          </div>
        </div>
      </section>

      {/* 4. VIDEO DOCUMENTATION */}
      <section style={{ padding: '64px 0', backgroundColor: '#ECE8DC', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <span className="label-caps">Step 3</span>
            <h2 style={{ margin: '4px 0 8px 0' }}>Video records</h2>
            <p style={{ margin: 0, fontSize: '16px', color: '#5F5D55' }}>
              Packhouse sorting and loading clips recorded on site.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '28px',
            }}
          >
            <div>
              <div
                style={{
                  border: '1px solid #D9D5C8',
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                  backgroundColor: '#000',
                  aspectRatio: '16/9',
                }}
              >
                <video
                  controls
                  preload="metadata"
                  style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }}
                >
                  <source src="/videos/IMG_9085.MP4" type="video/mp4" />
                </video>
              </div>
              <p className="photo-placeholder-caption" style={{ marginTop: '8px' }}>
                VIDEO RECORD: produce sorting line
              </p>
            </div>

            <div>
              <div
                style={{
                  border: '1px solid #D9D5C8',
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                  backgroundColor: '#000',
                  aspectRatio: '16/9',
                }}
              >
                <video
                  controls
                  preload="metadata"
                  style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }}
                >
                  <source src="/videos/IMG_9078.MP4" type="video/mp4" />
                </video>
              </div>
              <p className="photo-placeholder-caption" style={{ marginTop: '8px' }}>
                VIDEO RECORD: container inspection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING BAND (navy #10104F) */}
      <section style={{ backgroundColor: '#10104F', color: '#F7F5EF', padding: '72px 0' }} className="dark-section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ color: '#F7F5EF', margin: '0 0 16px 0' }}>Tell us what you need.</h2>
          <p style={{ fontSize: '16px', lineHeight: '26px', color: '#DAD8E8', margin: '0 auto 32px auto' }}>
            Inquire about current packhouse schedules or container shipments.
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
