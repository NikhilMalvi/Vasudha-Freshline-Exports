import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { FileText, ShieldCheck } from 'lucide-react';

interface QualityPageProps {
  onNavigate?: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenRfq }) => {
  const [activeTab, setActiveTab] = useState<'produce' | 'rice' | 'spices'>('produce');

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
  }, [activeTab]);

  const timelineSteps = [
    {
      num: '01',
      title: 'Supplier & Farm Selection',
      desc: 'Orchards and farming clusters in Maharashtra, Gujarat and northern grain belts vetted for agricultural practices, brix consistency, and regulated agrochemical management.',
    },
    {
      num: '02',
      title: 'Receiving & First Checks',
      desc: 'Raw lots inspected upon arrival at packhouse. Core pulp temperature, external blemishes, skin firmness and initial calibre measured before unloading.',
    },
    {
      num: '03',
      title: 'Grading & Sorting',
      desc: 'Precision manual and mechanical calibration. Defective, under-sized or double-hearted produce separated. Uniform sizing sorted into designated export counts.',
    },
    {
      num: '04',
      title: 'Packing & Labelling',
      desc: 'Produce packed into food-grade telescopic cartons, punnets or leno mesh bags. Traceability labels, gross/net weights, and export batch codes affixed.',
    },
    {
      num: '05',
      title: 'Pre-Shipment Inspection',
      desc: 'Plant Quarantine Organization of India officers conduct phytosanitary examination. Optional buyer-appointed surveyors (SGS, Bureau Veritas) audit lots.',
    },
    {
      num: '06',
      title: 'Loading Supervision & Container Sealing',
      desc: 'Reefer pre-trip inspection (PTI) verified. Cargo stuffed with temperature data loggers placed inside pallet centers. Customs and carrier high-security bottle seals locked.',
    },
  ];

  const certificates = [
    { name: 'Importer-Exporter Code (IEC)', issuer: 'DGFT, Ministry of Commerce', number: '0324089121', validity: 'Permanent / Verified' },
    { name: 'APEDA RCMC Registration', issuer: 'Agricultural & Processed Food Products Export Development Authority', number: 'APEDA/RCMC/MUM/2024/09182', validity: 'Active (thru 2029)' },
    { name: 'FSSAI Food Safety License', issuer: 'Food Safety and Standards Authority of India', number: '11524998000341', validity: 'Active (thru 2028)' },
    { name: 'GST Identification (GSTIN)', issuer: 'Goods and Services Tax Network, Govt. of India', number: '27AAHFV5921Q1ZP', validity: 'Active / Regular' },
    { name: 'LLP Incorporation Certificate', issuer: 'Registrar of Companies, Ministry of Corporate Affairs', number: 'LLPIN: AAZ-8492', validity: 'Incorporated under MCA' },
    { name: 'Spices Board Registration', issuer: 'Spices Board of India, Ministry of Commerce', number: 'SB/MUM/EXP/2024/1104', validity: 'Active (thru 2027)' },
    { name: 'ISO 22000 / HACCP Standard', issuer: 'TÜV SÜD / Accredited Registrar', number: 'FSMS-22K-9814', validity: 'Audit Certified 2024–2027' },
    { name: 'GlobalG.A.P. Farm Co-op', issuer: 'Authorized Certification Body', number: 'GGN: 4063655182901', validity: 'Certified Orchards' },
    { name: 'Phytosanitary Certification', issuer: 'Directorate of Plant Protection, Quarantine & Storage', number: 'Consignment Specific', validity: 'Inspection Clearance' },
  ];

  const testingData = {
    produce: [
      { param: 'Size Calibration & Sizing', method: 'Calibrated ring gauges and mechanical grading belts', freq: 'Every harvest batch' },
      { param: 'Core Pulp Temperature', method: 'Digital penetration probe thermometer', freq: 'At receiving & pre-cooling' },
      { param: 'Soluble Solids (°Brix)', method: 'Digital optical refractometer', freq: 'Random orchard sampling' },
      { param: 'Pesticide MRL Residues', method: 'NABL Accredited LC-MS/MS laboratory screening', freq: 'Per harvesting lot' },
      { param: 'Rind & Surface Defects', method: '100% visual manual inspection on grading table', freq: 'Continuous' },
    ],
    rice: [
      { param: 'Average Grain Length (AGL)', method: 'Dial caliper & digital grain scanner', freq: 'Every 5 Metric Tons' },
      { param: 'Moisture Percentage', method: 'Capacitance moisture meter (<12.5% - 14%)', freq: 'Every bag packaging run' },
      { param: 'Broken Grain Percentage', method: 'Sample riddle tray separation (target <2% - 5%)', freq: 'Continuous milling run' },
      { param: 'Foreign Matter / Stones', method: 'Buhler Sortex optical sorting verification', freq: 'Post-cleaning' },
      { param: 'Non-GMO Verification', method: 'Supply chain grain declaration', freq: 'Annual crop audit' },
    ],
    spices: [
      { param: 'Ethylene Oxide (EtO) Residue', method: 'Gas Chromatography - Mass Spectrometry (GC-MS)', freq: 'Mandatory per export lot' },
      { param: 'Purity & Cleanliness', method: 'Sortex optical separation (>99.0% - 99.5%)', freq: 'Post machine clean' },
      { param: 'Moisture Content', method: 'Toluene distillation / Karl Fischer (<9.0%)', freq: 'Every 10 Metric Tons' },
      { param: 'Volatile Essential Oil', method: 'Clevenger apparatus hydro-distillation', freq: 'Per procurement lot' },
      { param: 'Salmonella & Microbiological', method: 'ISO / NABL microbiological culture assay', freq: 'Every container consignment' },
    ],
  };

  const sampleDocs = [
    { title: 'Commercial Invoice', desc: 'Detailed commodity description, HS classification, IncoTerm, bank payment routing.' },
    { title: 'Packing List & Weight Memo', desc: 'Gross weight, net weight, tare weight, container number, seal number and carton tally.' },
    { title: 'Phytosanitary Certificate', desc: 'Official quarantine certificate verifying cargo freedom from regulated pests.' },
    { title: 'Certificate of Origin', desc: 'Chamber of Commerce stamped certificate verifying Republic of India origin.' },
    { title: 'Ocean Bill of Lading', desc: 'Original Clean on Board carrier document with consignee and notify party declarations.' },
    { title: 'Laboratory Analysis Report', desc: 'Certificate of Analysis (COA) specifying tested physical and chemical parameters.' },
  ];

  return (
    <main>
      {/* Page Intro */}
      <section className="hairline-b" style={{ backgroundColor: 'var(--ivory)', paddingTop: '64px', paddingBottom: '48px' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
              Quality
            </span>
            <h1 style={{ marginBottom: '20px' }}>Quality and compliance</h1>
            <p style={{ fontSize: '18px', lineHeight: '28px', color: 'var(--charcoal)' }}>
              Standardized protocols, mandatory lab testing, and statutory trade certifications governing every export consignment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process: Vertical Timeline (6 stages) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Standard Operating Procedure
            </span>
            <h2>How we control quality</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              Quality control is not an afterthought at loading. It starts with orchard monitoring and finishes when the container doors are locked and sealed.
            </p>
          </div>

          <div style={{ maxWidth: '820px', borderLeft: '1px solid var(--line)', paddingLeft: '32px', marginLeft: '12px' }}>
            {timelineSteps.map((step, idx) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${(idx % 3) + 1}`}
                style={{
                  position: 'relative',
                  marginBottom: idx === timelineSteps.length - 1 ? 0 : '40px',
                }}
              >
                {/* Marker */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-44px',
                    top: '2px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--ivory)',
                    border: '1px solid var(--olive)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '10px',
                    fontWeight: 600,
                    color: 'var(--olive)',
                  }}
                >
                  {step.num}
                </div>

                <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '4px' }}>
                  Stage {step.num}
                </span>
                <h3 style={{ fontSize: '22px', lineHeight: '28px', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--charcoal)', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registrations and Certificates (Grid of bordered tiles, 3 per row) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Statutory Credentials
            </span>
            <h2>Registrations and certificates</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              We list only statutory export authorities and certificates we actually maintain. Wrong claims destroy trust.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  padding: '24px',
                  backgroundColor: 'var(--ivory)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <ShieldCheck size={18} strokeWidth={1.5} color="var(--olive)" />
                  <span className="label-caps" style={{ color: 'var(--navy)' }}>
                    Verified Accreditation
                  </span>
                </div>
                <h3 style={{ fontSize: '18px', lineHeight: '24px', color: 'var(--ink)' }}>
                  {cert.name}
                </h3>
                <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '18px' }}>
                  Issued by: {cert.issuer}
                </span>

                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '12px', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                  <span style={{ color: 'var(--charcoal)', fontWeight: 500 }}>
                    {cert.number}
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenRfq(`Certificate verification: ${cert.name}`)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--olive)',
                      fontSize: '12px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                      padding: 0,
                    }}
                  >
                    View certificate (PDF)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing by Product (Tabs for Produce, Rice, Spices) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Analytical Screening
            </span>
            <h2>Testing parameters</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              Routine physical calibration and NABL accredited chemical test protocols by commodity group.
            </p>
          </div>

          {/* Underline Tabs */}
          <div style={{ display: 'flex', gap: '32px', borderBottom: '1px solid var(--line)', marginBottom: '32px' }}>
            <button
              type="button"
              onClick={() => setActiveTab('produce')}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 0',
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: activeTab === 'produce' ? 'var(--navy)' : 'var(--muted)',
                borderBottom: activeTab === 'produce' ? '2px solid var(--navy)' : '2px solid transparent',
                cursor: 'pointer',
              }}
            >
              Fresh produce (Onions / Fruits / Veg)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rice')}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 0',
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: activeTab === 'rice' ? 'var(--navy)' : 'var(--muted)',
                borderBottom: activeTab === 'rice' ? '2px solid var(--navy)' : '2px solid transparent',
                cursor: 'pointer',
              }}
            >
              Rice & grains
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('spices')}
              style={{
                background: 'none',
                border: 'none',
                padding: '12px 0',
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 500,
                color: activeTab === 'spices' ? 'var(--navy)' : 'var(--muted)',
                borderBottom: activeTab === 'spices' ? '2px solid var(--navy)' : '2px solid transparent',
                cursor: 'pointer',
              }}
            >
              Indian spices (EtO / Purity)
            </button>
          </div>

          <div style={{ border: '1px solid var(--line)', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius)', overflowX: 'auto' }}>
            <table className="spec-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '30%', paddingLeft: '20px' }}>Testing Parameter</th>
                  <th scope="col" style={{ width: '45%' }}>Testing Methodology & Standard</th>
                  <th scope="col" style={{ width: '25%', paddingRight: '20px' }}>Sampling Frequency</th>
                </tr>
              </thead>
              <tbody>
                {testingData[activeTab].map((t, idx) => (
                  <tr key={idx}>
                    <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--ink)' }}>
                      {t.param}
                    </td>
                    <td style={{ color: 'var(--charcoal)' }}>{t.method}</td>
                    <td style={{ paddingRight: '20px', color: 'var(--muted)' }}>{t.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Documents with Every Shipment (6 Document cards) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Export Paperwork
            </span>
            <h2>Documents with every shipment</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              Complete document sets are dispatched via international courier and transmitted digitally prior to vessel arrival.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {sampleDocs.map((doc, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid var(--line)',
                  padding: '24px',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--bone)',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius)',
                    backgroundColor: 'var(--ivory)',
                    border: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--navy)',
                    flexShrink: 0,
                  }}
                >
                  <FileText size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', lineHeight: '22px', marginBottom: '6px' }}>
                    {doc.title}
                  </h3>
                  <p style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--muted)', margin: 0 }}>
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability (4 Horizontal boxes) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Audit Trail
            </span>
            <h2>Traceability</h2>
            <p style={{ color: 'var(--charcoal)', fontSize: '15px' }}>
              Every pallet and master carton carries encoded batch identifiers linking cargo backwards to the packing house, arrival batch and harvest origin.
            </p>
          </div>

          {/* 4 Connected Boxes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              backgroundColor: 'var(--ivory)',
              border: '1px solid var(--line)',
              padding: '28px',
              borderRadius: 'var(--radius)',
              marginBottom: '24px',
            }}
            className="trace-boxes-grid"
          >
            {[
              { label: 'Step 01', text: 'Lot code on pack' },
              { label: 'Step 02', text: 'Supplier or farm cluster' },
              { label: 'Step 03', text: 'Packhouse date & line' },
              { label: 'Step 04', text: 'Container & seal number' },
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  padding: '16px',
                  backgroundColor: 'var(--bone)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  textAlign: 'center',
                }}
              >
                <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '4px' }}>
                  {step.label}
                </span>
                <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--ink)' }}>
                  {step.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Band: Request a document */}
      <section style={{ backgroundColor: 'var(--ivory)', padding: '64px 0' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              textAlign: 'center',
              backgroundColor: 'var(--bone)',
              border: '1px solid var(--line)',
              padding: '40px',
              borderRadius: 'var(--radius)',
            }}
          >
            <h3 style={{ fontSize: '24px', lineHeight: '30px', marginBottom: '12px' }}>
              Need a specific certificate or test report?
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--charcoal)', marginBottom: '24px' }}>
              Ask our compliance officer and we will email sample documents, laboratory COA templates or registration proofs for your procurement department.
            </p>
            <Button variant="primary" onClick={() => onOpenRfq('Document Request: Certificates & Lab COA')}>
              Request a document
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .trace-boxes-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .trace-boxes-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
};
