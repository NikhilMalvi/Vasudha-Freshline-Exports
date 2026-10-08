import React, { useState } from 'react';
import { Box, CheckCircle2, ArrowRight } from 'lucide-react';

interface PackagingFormatsProps {
  onOpenRfq: (product?: string) => void;
}

export const PackagingFormats: React.FC<PackagingFormatsProps> = ({ onOpenRfq }) => {
  const [activeTab, setActiveTab] = useState<'cartons' | 'mesh' | 'bopp' | 'punnets' | 'private'>('cartons');

  const packages = {
    cartons: {
      title: '5-Ply Corrugated Fiberboard (CFB) Cartons',
      target: 'Bhagwa Pomegranates · Table Grapes · Fresh Mangoes',
      specs: [
        { label: 'Carton Construction', value: '5-ply heavy virgin kraft paper with moisture-resistant sizing' },
        { label: 'Net Weight Options', value: '3.5 kg / 4.5 kg / 5.0 kg net per box' },
        { label: 'Ventilation', value: 'Side-wall die-cut ventilation slots for uniform cool airflow' },
        { label: 'Internal Cushioning', value: 'Individual food-grade foam netting / bubble lining' },
        { label: 'Pallet Stacking', value: '180 to 200 boxes per Euro/standard heat-treated wooden pallet' },
        { label: 'Container Capacity', value: '40ft High Cube Reefer holds ~4,400 to 5,000 cartons (~18–20 MT)' },
      ],
      note: 'Meets European & Gulf supermarket strength standards with zero box collapse during 24-day voyage.',
    },
    mesh: {
      title: 'Heavy-Duty Leno Ventilated Mesh Bags',
      target: 'Nashik Red & White Onions · Garlic Bulbs · Potatoes',
      specs: [
        { label: 'Material', value: '100% Virgin Polypropylene (PP) circular woven breathable leno mesh' },
        { label: 'Net Weight Formats', value: '5 kg, 10 kg, 25 kg, and 50 kg bag capacities' },
        { label: 'Closure Mechanism', value: 'Heavy polypropylene drawstring with stitched thermal seal' },
        { label: 'Air Permeability', value: 'Maximum airflow to prevent sweating, sprouting, or moisture buildup' },
        { label: 'Reefer Container', value: '40ft Reefer container loaded with 1,160 bags of 25 kg (~29.0 MT)' },
        { label: 'Dry Container', value: '20ft Dry GP container loaded with 500 bags of 25 kg (~12.5 MT)' },
      ],
      note: 'Color-coded mesh (red for red onions, white for white onions) enhances retail shelf display upon arrival.',
    },
    bopp: {
      title: 'Multi-Color Laminated BOPP & Non-Woven Poly Bags',
      target: '1121 Basmati Rice · Non-Basmati Milled Rice · Grain Seeds',
      specs: [
        { label: 'Bag Material', value: 'Biaxially Oriented Polypropylene (BOPP) laminated with HDPE liner' },
        { label: 'Net Weight Formats', value: '10 kg, 20 kg, 25 kg, and 50 kg export packing' },
        { label: 'Moisture Barrier', value: 'Hermetically stitched with moisture-proof inner PE coating' },
        { label: 'Handle Options', value: 'D-cut plastic handle available for 10kg/20kg consumer packs' },
        { label: 'Container Loading', value: '25 Metric Tons per 20ft Dry GP container (bagged & floor-stuffed)' },
        { label: 'Fumigation', value: 'Phosphine / Methyl Bromide fumigation certificate provided' },
      ],
      note: 'Guarantees aroma retention and prevents insect infestation across long ocean transits.',
    },
    punnets: {
      title: 'Ventilated Clamshell Punnets & Poly-Lined Crates',
      target: 'Table Grapes · Green Chillies · Okra (Ladyfinger) · Ginger',
      specs: [
        { label: 'Format', value: 'Food-grade clear PET punnets with snap-locking ventilation lids' },
        { label: 'Grammage', value: '500g punnets packed 10 per carton (5.0 kg master carton)' },
        { label: 'Bulk Poly-Lined', value: '4.0 kg & 5.0 kg corrugated boxes with micro-perforated liners' },
        { label: 'Sulfur Sheets', value: 'Food-grade sodium metabisulfite sheets inserted for table grapes' },
        { label: 'Air Freight Option', value: 'ULD air-cargo palletized for green chillies and fresh okra' },
        { label: 'Reefer Stowage', value: 'Reefer container stowage with high floor air-delivery' },
      ],
      note: 'Designed for direct transfer to retail refrigerated display shelves without intermediate handling.',
    },
    private: {
      title: 'Private Label & Customized Importer Stenciling',
      target: 'Overseas Supermarket Chains · Wholesaler Brands · Institutional Buyers',
      specs: [
        { label: 'Brand Printing', value: 'Up to 6-color flexographic or gravure printing with client artwork' },
        { label: 'Barcoding & EAN', value: 'GS1-standard EAN-13, ITF-14 and QR traceability barcodes applied' },
        { label: 'Bilingual Labels', value: 'Arabic, English, French, and destination-mandated statutory text' },
        { label: 'Batch Coding', value: 'Production date, expiry/best before, lot number, packhouse ID' },
        { label: 'Master Outer Box', value: 'Custom outer carton dimensions to match buyer warehouse rack heights' },
        { label: 'Minimum Volume', value: 'Available from 2 FCL container orders (artwork plate fees apply)' },
      ],
      note: 'Full compliance with UAE ESMA, Saudi SFDA, and EU Regulation labelling requirements.',
    },
  };

  const current = packages[activeTab];

  return (
    <section
      style={{
        backgroundColor: 'var(--ivory)',
        borderBottom: '1px solid var(--line)',
      }}
      className="section-padding"
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
          <span className="label-caps" style={{ display: 'block', marginBottom: '12px', color: 'var(--olive)' }}>
            Export Packing Formats
          </span>
          <h2 style={{ marginBottom: '14px' }}>
            Engineered for rough sea voyages and cold storage.
          </h2>
          <p style={{ color: 'var(--charcoal)', fontSize: '16px', lineHeight: '26px' }}>
            Export produce is only as good as its packaging. We supply containers packed in standardized international formats with strict tare weight control and ventilation.
          </p>
        </div>

        {/* Tab Controls */}
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            borderBottom: '1px solid var(--line)',
            marginBottom: '32px',
          }}
        >
          {[
            { key: 'cartons', label: 'CFB Cartons (Fruits)' },
            { key: 'mesh', label: 'Leno Mesh Bags (Onions)' },
            { key: 'bopp', label: 'BOPP Sacks (Rice & Grains)' },
            { key: 'punnets', label: 'Punnets & Poly Crates' },
            { key: 'private', label: 'Private Label / OEM' },
          ].map((tab) => {
            const isSelected = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key as any)}
                style={{
                  padding: '14px 22px',
                  background: 'none',
                  border: 'none',
                  borderBottom: isSelected ? '2px solid var(--navy)' : '2px solid transparent',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: isSelected ? 600 : 400,
                  color: isSelected ? 'var(--ink)' : 'var(--muted)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 180ms ease',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Content Box */}
        <div
          style={{
            border: '1px solid var(--line)',
            backgroundColor: 'var(--bone)',
            padding: '36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
          }}
          className="packaging-content-grid"
        >
          {/* Left Column: Heading and Specs */}
          <div className="packaging-col-specs" style={{ gridColumn: 'span 8' }}>
            <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '8px' }}>
              Suitable Commodities: {current.target}
            </span>
            <h3 style={{ fontSize: '24px', lineHeight: '32px', marginBottom: '20px', color: 'var(--ink)' }}>
              {current.title}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
              {current.specs.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    gap: '16px',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(217, 213, 200, 0.7)',
                    fontSize: '14px',
                  }}
                  className="spec-row-2col"
                >
                  <span style={{ fontWeight: 500, color: 'var(--muted)' }}>{item.label}</span>
                  <span style={{ color: 'var(--ink)' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Trust callout and Quote Trigger */}
          <div
            className="packaging-col-sidebar"
            style={{
              gridColumn: 'span 4',
              backgroundColor: 'var(--ivory)',
              border: '1px solid var(--line)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <Box size={20} strokeWidth={1.5} color="var(--olive)" />
                <span className="label-caps" style={{ color: 'var(--navy)', fontWeight: 600 }}>
                  Quality Guarantee
                </span>
              </div>
              <p style={{ fontSize: '13px', lineHeight: '21px', color: 'var(--charcoal)', marginBottom: '20px' }}>
                {current.note}
              </p>

              <div style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="var(--olive)" />
                  <span>Stenciled with HS Code & Tare Weight</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="var(--olive)" />
                  <span>ISPM-15 Heat-treated pallets on request</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="var(--olive)" />
                  <span>Custom bag branding & private label available</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <button
                type="button"
                onClick={() => onOpenRfq(current.title)}
                className="btn-primary"
                style={{ width: '100%', height: '48px', fontSize: '14px' }}
              >
                <span>Request Quotation with this pack</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .packaging-content-grid {
            display: flex !important;
            flex-direction: column !important;
            padding: 20px !important;
            gap: 24px !important;
          }
          .packaging-col-specs, .packaging-col-sidebar {
            width: 100% !important;
            max-width: 100% !important;
          }
          .spec-row-2col {
            grid-template-columns: 1fr !important;
            gap: 4px !important;
          }
        }
      `}</style>
    </section>
  );
};
