import React from 'react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { IMAGES } from '../data/images';

interface CertificatesPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const CertificatesPage: React.FC<CertificatesPageProps> = ({
  onNavigate: _onNavigate,
  onOpenRfq,
}) => {
  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20inquire%20about%20export%20certifications.';

  const certCards = [
    { name: 'APEDA Registration', desc: 'Agricultural produce export license and registration certificate.', reg: 'AAA-0000' },
    { name: 'FSSAI License', desc: 'Food safety and standards compliance certificate for export operations.', reg: '0000000000' },
    { name: 'IEC Registration', desc: 'Importer Exporter Code issued under foreign trade authority.', reg: '0000000000' },
    { name: 'Certificate name', desc: 'Standard phytosanitary and export compliance inspection documentation.', reg: '0000000000' },
  ];

  const shippingDocs = [
    'Commercial Invoice & Packing List',
    'Phytosanitary Certificate issued by plant quarantine authorities',
    'Certificate of Origin issued by authorized chamber',
    'Bill of Lading / Ocean Sea Waybill for [Sample] ports',
    'Certificate name issued under reference 0000000000',
  ];

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
              <span className="label-caps">Compliance</span>
              <h1 style={{ margin: '8px 0 16px 0' }}>Certificates & registrations</h1>
              <p style={{ fontSize: '18px', lineHeight: '28px', color: '#353535', margin: '0 0 24px 0' }}>
                Vasudha Freshline Exports LLP complies with Indian agricultural trade statutes. Full documentation is provided with every container shipment.
              </p>
              <button type="button" className="btn-primary" onClick={() => onOpenRfq()}>
                Request certificate copies
              </button>
            </div>
            <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
              <PhotoPlaceholder
                src={IMAGES.packhouseInspection}
                label="PHOTO NEEDED: export registration certificates"
                aspectRatio="4:5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY LICENSES */}
      <section style={{ padding: '64px 0', backgroundColor: '#ECE8DC', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <span className="label-caps">Statutory</span>
            <h2 style={{ margin: '4px 0 8px 0' }}>Trade registrations</h2>
            <p style={{ margin: 0, fontSize: '16px', color: '#5F5D55' }}>
              Statutory trade registrations maintained for commercial produce export.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '20px',
            }}
          >
            {certCards.map((c) => (
              <div
                key={c.name}
                style={{
                  backgroundColor: '#F7F5EF',
                  border: '1px solid #D9D5C8',
                  borderRadius: 'var(--radius)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <span style={{ fontSize: '18px', fontWeight: 600, color: '#16161A' }}>{c.name}</span>
                <p style={{ fontSize: '14px', lineHeight: '20px', color: '#353535', margin: 0 }}>{c.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                  <span className="confirm-tag" style={{ borderStyle: 'solid' }}>Number: {c.reg}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SHIPPING DOCUMENTATION SET */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="label-caps">Documentation</span>
          <h2 style={{ margin: '4px 0 12px 0' }}>Shipment document set</h2>
          <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: '0 0 24px 0' }}>
            Every container shipment is accompanied by complete commercial and regulatory clearance documents.
          </p>
          <div style={{ borderTop: '1px solid #D9D5C8' }}>
            {shippingDocs.map((doc) => (
              <div
                key={doc}
                style={{
                  padding: '16px 0',
                  borderBottom: '1px solid #D9D5C8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}
              >
                <span style={{ fontSize: '15px', color: '#16161A', fontWeight: 500 }}>{doc}</span>
                <span style={{ fontSize: '13px', color: '#687036', fontWeight: 500 }}>Standard Set</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRE-SHIPMENT INSPECTION */}
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
              <span className="label-caps">Protocol</span>
              <h2 style={{ margin: '4px 0 12px 0' }}>Pre-shipment inspection</h2>
              <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: 0 }}>
                Consignments undergo cargo grading and phytosanitary verification prior to container sealing. Official inspection reports accompany shipping bills.
              </p>
            </div>
            <div>
              <PhotoPlaceholder
                src={IMAGES.containerLoading}
                label="PHOTO NEEDED: phytosanitary inspection and loading"
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
            Request certification copies or discuss commercial compliance requirements.
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
