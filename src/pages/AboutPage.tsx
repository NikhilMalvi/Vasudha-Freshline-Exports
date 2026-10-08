import React from 'react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate: _onNavigate,
  onOpenRfq,
}) => {
  const whatsappUrl =
    'https://wa.me/?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20learn%20more%20about%20your%20company.';

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
              <span className="label-caps">Company</span>
              <h1 style={{ margin: '8px 0 16px 0' }}>About Vasudha Freshline Exports</h1>
              <p style={{ fontSize: '18px', lineHeight: '28px', color: '#353535', margin: '0 0 24px 0' }}>
                Vasudha Freshline Exports LLP is an Indian agricultural export partnership shipping produce by container. We supply commercial importers and wholesalers worldwide.
              </p>
              <button type="button" className="btn-primary" onClick={() => onOpenRfq()}>
                Request a quote
              </button>
            </div>
            <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
              <PhotoPlaceholder label="PHOTO NEEDED: packhouse operations" aspectRatio="4:5" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONSTITUTION & GOVERNANCE */}
      <section style={{ padding: '64px 0', backgroundColor: '#ECE8DC', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="label-caps">Structure</span>
          <h2 style={{ margin: '4px 0 12px 0' }}>Constitution & trade model</h2>
          <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: '0 0 24px 0' }}>
            Registered as a Limited Liability Partnership under Indian law. We operate on direct commercial container contracts with established international buyers.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            <div style={{ backgroundColor: '#F7F5EF', border: '1px solid #D9D5C8', padding: '16px', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', color: '#5F5D55', textTransform: 'uppercase', display: 'block' }}>Legal name</span>
              <strong style={{ fontSize: '15px', color: '#16161A', display: 'block', marginTop: '4px' }}>Vasudha Freshline Exports LLP</strong>
            </div>
            <div style={{ backgroundColor: '#F7F5EF', border: '1px solid #D9D5C8', padding: '16px', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', color: '#5F5D55', textTransform: 'uppercase', display: 'block' }}>Export model</span>
              <strong style={{ fontSize: '15px', color: '#16161A', display: 'block', marginTop: '4px' }}>Container loads (FCL)</strong>
            </div>
            <div style={{ backgroundColor: '#F7F5EF', border: '1px solid #D9D5C8', padding: '16px', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', color: '#5F5D55', textTransform: 'uppercase', display: 'block' }}>Commercial terms</span>
              <strong style={{ fontSize: '15px', color: '#16161A', display: 'block', marginTop: '4px' }}>[CONFIRM: trade terms]</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FARM SOURCING */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid #D9D5C8' }}>
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
              <span className="label-caps">Procurement</span>
              <h2 style={{ margin: '4px 0 12px 0' }}>Direct farm sourcing</h2>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: 0 }}>
                [CONFIRM: sourcing partnerships across primary Indian growing regions]. Produce is harvested and moved directly to local packing facilities.
              </p>
            </div>
            <div>
              <PhotoPlaceholder label="PHOTO NEEDED: farm harvest collection" aspectRatio="3:2" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. INSPECTION & QUALITY CHECKS */}
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
              <PhotoPlaceholder label="PHOTO NEEDED: produce inspection before loading" aspectRatio="3:2" />
            </div>
            <div>
              <span className="label-caps">Operations</span>
              <h2 style={{ margin: '4px 0 12px 0' }}>Inspection & documentation</h2>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: 0 }}>
                Every consignment is inspected for size, grading, and packaging integrity. Shipments travel with complete statutory documentation [CONFIRM].
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
            Speak directly with our trade desk regarding supply capabilities and container schedules.
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
