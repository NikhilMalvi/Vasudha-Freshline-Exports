import React from 'react';
import { Logo } from './Logo';
import { X, Printer, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: (product?: string) => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, onOpenRfq }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Vasudha Freshline Exports LLP Company Profile and Export Brochure"
      className="animate-fade-in"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(21, 28, 23, 0.65)',
        backdropFilter: 'blur(2px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        overflowY: 'auto',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '92vh',
          backgroundColor: 'var(--ivory)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.22)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 28px',
            borderBottom: '1px solid var(--line)',
            backgroundColor: 'var(--bone)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="label-caps" style={{ color: 'var(--olive)', fontWeight: 600 }}>
              Official Export Document
            </span>
            <span style={{ color: 'var(--line)' }}>•</span>
            <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
              Ref: VF-PROFILE-2026
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={handlePrint}
              title="Print / Save as PDF"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                height: '36px',
                padding: '0 14px',
                backgroundColor: 'var(--ivory)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--navy)',
                cursor: 'pointer',
              }}
            >
              <Printer size={14} strokeWidth={1.5} />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close Brochure Modal"
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                color: 'var(--charcoal)',
              }}
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area */}
        <div
          id="printable-brochure"
          style={{
            padding: '36px 40px',
            overflowY: 'auto',
            backgroundColor: 'var(--ivory)',
          }}
        >
          {/* Header of Profile */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderBottom: '1px solid var(--line)',
              paddingBottom: '28px',
              marginBottom: '32px',
            }}
          >
            <div>
              <Logo variant="default" width={220} />
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '8px' }}>
                Indian B2B Exporter of Agricultural Commodities & Fresh Produce
              </p>
            </div>
            <div style={{ textAlign: 'right', fontSize: '12px', color: 'var(--muted)', lineHeight: '20px' }}>
              <div><strong>Port of Loading:</strong> JNPT / Nhava Sheva (INNSA)</div>
              <div><strong>Primary Packhouse:</strong> Vinchur Food Park, Niphad, Nashik - 422209</div>
              <div><strong>Registration:</strong> IEC: 0324089121 · APEDA · FSSAI</div>
            </div>
          </div>

          {/* Section: Overview */}
          <div style={{ marginBottom: '32px' }}>
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Company Profile & Trade Scope
            </span>
            <h2 style={{ fontSize: '26px', lineHeight: '34px', marginBottom: '12px' }}>
              Vasudha Freshline Exports LLP
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--charcoal)', marginBottom: '16px' }}>
              Vasudha Freshline Exports LLP is an Indian agricultural export partnership dedicated to delivering farm-gate produce to international importers, wholesale markets, and food distributors. We specialise in full container load (FCL) shipments of fresh fruits, field vegetables, premium milled rice, and Indian spices.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                backgroundColor: 'var(--bone)',
                padding: '16px 20px',
                border: '1px solid var(--line)',
              }}
            >
              <div>
                <span className="label-caps" style={{ display: 'block', fontSize: '11px', marginBottom: '4px' }}>
                  Minimum Order (MOQ)
                </span>
                <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>
                  1 FCL (20ft / 40ft Reefer)
                </span>
              </div>
              <div>
                <span className="label-caps" style={{ display: 'block', fontSize: '11px', marginBottom: '4px' }}>
                  Trade IncoTerms
                </span>
                <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>
                  FOB JNPT, CFR, CIF Ports
                </span>
              </div>
              <div>
                <span className="label-caps" style={{ display: 'block', fontSize: '11px', marginBottom: '4px' }}>
                  Payment Modalities
                </span>
                <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>
                  Irrevocable L/C at Sight, T/T
                </span>
              </div>
            </div>
          </div>

          {/* Section: Product Range & Technical Specs Table */}
          <div style={{ marginBottom: '32px' }}>
            <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
              Export Commodity Portfolio & Specifications
            </span>
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Commodity</th>
                  <th>Key Varieties / Grades</th>
                  <th>Packing Formats</th>
                  <th>Container Capacity</th>
                  <th>Export Window</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Pomegranates</strong></td>
                  <td>Bhagwa, ruby arils, counts 9–15</td>
                  <td>3.5kg / 5.0kg 5-ply CFB cartons</td>
                  <td>40ft Reefer (~18–20 MT)</td>
                  <td>Oct – Apr (Peak Dec–Feb)</td>
                </tr>
                <tr>
                  <td><strong>Fresh Onions</strong></td>
                  <td>Nashik Red, Pink & White, 45–60mm</td>
                  <td>10kg / 25kg / 50kg Leno mesh bags</td>
                  <td>40ft Reefer / 20ft (~29 MT)</td>
                  <td>Oct – Apr (Year-round stock)</td>
                </tr>
                <tr>
                  <td><strong>Milled Rice</strong></td>
                  <td>1121 Basmati, Sella, Non-Basmati</td>
                  <td>20kg / 25kg / 50kg BOPP woven bags</td>
                  <td>20ft Dry GP (~25 MT)</td>
                  <td>Year-round</td>
                </tr>
                <tr>
                  <td><strong>Whole Spices</strong></td>
                  <td>Cumin (Jeera), Turmeric, Dried Chilli</td>
                  <td>25kg multiwall kraft / jute bags</td>
                  <td>20ft Dry GP (~18 MT)</td>
                  <td>Year-round</td>
                </tr>
                <tr>
                  <td><strong>Fresh Fruits</strong></td>
                  <td>Thompson Table Grapes, Cavendish Bananas</td>
                  <td>4.5kg / 5.0kg punnet & carton pack</td>
                  <td>40ft Reefer (~20 MT)</td>
                  <td>Jan – Apr (Grapes)</td>
                </tr>
                <tr>
                  <td><strong>Fresh Vegetables</strong></td>
                  <td>G4 Green Chilli, Okra (Bhindi), Ginger</td>
                  <td>4.0kg / 5.0kg ventilated boxes</td>
                  <td>40ft Reefer / Air Cargo</td>
                  <td>Year-round</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section: Quality & Inspection Verification */}
          <div
            style={{
              border: '1px solid var(--line)',
              backgroundColor: 'var(--bone)',
              padding: '20px 24px',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <ShieldCheck size={18} strokeWidth={1.5} color="var(--olive)" />
              <h3 style={{ fontSize: '18px', fontWeight: 500, margin: 0 }}>
                Quality Assurance & Cold-Chain Protocol
              </h3>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)', margin: 0 }}>
              All consignments undergo pre-cooling to target core temperature, sorting and sizing against export caliper rings, and phytosanitary inspection by Government of India Plant Quarantine officers at JNPT Port. Independent inspection by SGS, Geo-Chem, or Cotecna is accommodated prior to container stuffing.
            </p>
          </div>

          {/* Section: Export Documents Provided */}
          <div style={{ marginBottom: '32px' }}>
            <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
              Standard Documentation Package Provided
            </span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                fontSize: '13px',
                color: 'var(--ink)',
              }}
            >
              {[
                'Signed Commercial Invoice with HS Code breakdown',
                'Detailed Packing List & Container Stenciling Sheet',
                'Official Phytosanitary Certificate (Plant Quarantine)',
                'Certificate of Origin (Indian Chamber of Commerce)',
                'Clean On-Board Ocean Bill of Lading (3 Original / 3 Non-negotiable)',
                'Pre-Shipment SGS / Geo-Chem Inspection Certificate (on request)',
                'Temperature Data Logger Graphs (TempTale USB download)',
                'FSSAI & APEDA Export Health Conformity Certificate',
              ].map((doc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} strokeWidth={1.5} color="var(--olive)" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Contact & Action */}
          <div
            style={{
              borderTop: '1px solid var(--line)',
              paddingTop: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>
                Vasudha Freshline Exports LLP — Trade Enquiries
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>
                Email: trade@vasudhafreshline.com · Phone/WhatsApp: +91 98230 45812 / +91 253 257 8941
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenRfq();
                }}
                className="btn-primary"
                style={{ height: '44px', padding: '0 20px', fontSize: '14px' }}
              >
                <span>Request Quotation</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-brochure, #printable-brochure * {
            visibility: visible;
          }
          #printable-brochure {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
            background: white !important;
          }
        }
      `}</style>
    </div>
  );
};
