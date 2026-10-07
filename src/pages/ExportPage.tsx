import React, { useState, useEffect } from 'react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { ConfirmTag } from '../components/ConfirmTag';
import { IMAGES } from '../data/images';
import { Plus, Minus, MessageSquare } from 'lucide-react';

interface ExportPageProps {
  onNavigate?: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const ExportPage: React.FC<ExportPageProps> = ({ onOpenRfq }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const steps = [
    { num: '01', name: 'Order Confirmed', text: 'Contract signed, commercial proforma agreed, LC opened or advance payment confirmed.', time: 'Day 1' },
    { num: '02', name: 'Specification & Sample Approved', text: 'Exact grading calibre, carton brand text and packing material locked in writing.', time: 'Day 2 – 3' },
    { num: '03', name: 'Grading, Packing & Stuffing', text: 'Produce sorted at packing house, pre-cooled, and loaded into inspected containers.', time: 'Day 4 – 7' },
    { num: '04', name: 'Documents & Port Clearance', text: 'Phytosanitary inspection, customs clearance, and container gate-in at JNPT / Nhava Sheva.', time: 'Day 7 – 9' },
    { num: '05', name: 'Vessel Departure & Transit', text: 'Container loaded on board ocean vessel. OBL and full document set dispatched.', time: 'Day 10+' },
  ];

  const faqs = [
    { question: 'What is the minimum order quantity?', answer: 'Our standard export MOQ is 1 Full Container Load (FCL). For dry goods like rice and spices, 1 x 20ft container (approx. 18-26 MT). For fresh produce and onions, 1 x 40ft High Cube Reefer (approx. 20-29 MT).' },
    { question: 'Can I mix products in one container?', answer: 'Yes, provided the commodities share identical temperature and humidity requirements (for example, mixed fresh vegetables, or multiple spice varieties in a 20ft dry container). Pomegranates and onions cannot be mixed due to differing ventilation and moisture needs.' },
    { question: 'What happens if there is a shipping or port delay?', answer: 'We maintain daily vessel tracking with shipping lines (Maersk, MSC, Hapag-Lloyd, CMA CGM). If vessel blank sailings occur, we notify the buyer immediately with revised feeder schedules and ensure pre-cooling holding at JNPT cold storage.' },
    { question: 'What if the cargo arrives damaged?', answer: 'Every reefer container carries dual NIST-calibrated temperature data loggers. Importers conduct a joint surveyor audit (e.g. Lloyd’s agent) upon de-stuffing. Claims are settled under maritime cargo insurance according to Incoterm coverage.' },
    { question: 'Can you send physical samples before ordering?', answer: 'Yes. Courier sample parcels of rice and spices (500g – 1kg) or sample fruit cartons are dispatched via DHL/FedEx to corporate buyers upon verified RFQ submission.' },
    { question: 'Do you arrange cargo marine insurance?', answer: 'On CIF terms, we secure Institute Cargo Clauses (A) all-risk maritime insurance including reefer breakdown coverage. On FOB/CFR terms, insurance is arranged directly by the buyer.' },
  ];

  return (
    <main>
      {/* Page Intro */}
      <section className="hairline-b" style={{ backgroundColor: 'var(--ivory)', paddingTop: '64px', paddingBottom: '48px' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
              Export
            </span>
            <h1 style={{ marginBottom: '20px' }}>Export and logistics</h1>
            <p style={{ fontSize: '18px', lineHeight: '28px', color: 'var(--charcoal)' }}>
              How an order moves from confirmation to your port. <ConfirmTag label="CONFIRM" />
            </p>
          </div>
        </div>
      </section>

      {/* Current Shipping Notice (Editable component, navy border, bone background) */}
      <section style={{ backgroundColor: 'var(--ivory)', paddingBottom: '40px' }} className="hairline-b">
        <div className="container">
          <div
            className="reveal"
            style={{
              backgroundColor: 'var(--bone)',
              border: '1px solid var(--navy)',
              borderRadius: 'var(--radius)',
              padding: '24px 28px',
              maxWidth: '880px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="label-caps" style={{ color: 'var(--navy)' }}>
                Current Shipping Notice
              </span>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                Updated October 2026 <ConfirmTag label="CONFIRM: date" />
              </span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--charcoal)', margin: 0 }}>
              Arabian Gulf and Southeast Asian reefer container routes from JNPT (Nhava Sheva) are operating under active feeder schedules. Freight rates and terminal handling costs are confirmed on spot quotation to ensure landed cost accuracy. <ConfirmTag label="CONFIRM: short note about freight or schedules" />
            </p>
          </div>
        </div>
      </section>

      {/* How Shipping Works (Step by step table-like layout) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Execution Timeline
            </span>
            <h2>Step by step</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              From initial purchase order execution to vessel departure from JNPT.
            </p>
          </div>

          <div style={{ border: '1px solid var(--line)', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius)', overflowX: 'auto' }} className="reveal">
            <table className="spec-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '15%', paddingLeft: '20px' }}>Step</th>
                  <th scope="col" style={{ width: '25%' }}>Stage Name</th>
                  <th scope="col" style={{ width: '45%' }}>Action & Milestone</th>
                  <th scope="col" style={{ width: '15%', paddingRight: '20px' }}>Typical Time</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((s) => (
                  <tr key={s.num}>
                    <td style={{ paddingLeft: '20px', color: 'var(--olive)', fontWeight: 600 }}>{s.num}</td>
                    <td style={{ fontWeight: 500, color: 'var(--ink)' }}>{s.name}</td>
                    <td style={{ color: 'var(--charcoal)' }}>{s.text} <ConfirmTag label="CONFIRM" /></td>
                    <td style={{ paddingRight: '20px', color: 'var(--muted)' }}>{s.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Container Options */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Equipment
            </span>
            <h2>Containers</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              Container specifications deployed for dry commodities and temperature-controlled produce.
            </p>
          </div>

          <div style={{ border: '1px solid var(--line)', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius)', overflowX: 'auto' }} className="reveal">
            <table className="spec-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '15%', paddingLeft: '20px' }}>Container</th>
                  <th scope="col" style={{ width: '25%' }}>Equipment Type</th>
                  <th scope="col" style={{ width: '30%' }}>Typical Payload</th>
                  <th scope="col" style={{ width: '30%', paddingRight: '20px' }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--ink)' }}>20 ft Dry</td>
                  <td>General Purpose (GP) Heavy Density</td>
                  <td>25.0 – 26.0 Metric Tons net</td>
                  <td style={{ paddingRight: '20px' }}>Milled rice (Basmati / Non-Basmati) & bulk export spices</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--ink)' }}>40 ft High Cube</td>
                  <td>Reefer (Refrigerated + Dehumidified)</td>
                  <td>18.0 – 22.0 Metric Tons net</td>
                  <td style={{ paddingRight: '20px' }}>Pomegranates (+5°C), Grapes (-0.5°C), Fresh Veg (+8°C)</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--ink)' }}>40 ft Ventilated / Reefer</td>
                  <td>Reefer or Forced-Air Ventilated</td>
                  <td>28.0 – 29.5 Metric Tons net</td>
                  <td style={{ paddingRight: '20px' }}>Fresh Red & White Onions (mesh bags)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trade Terms (Incoterms) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Commercial Terms
            </span>
            <h2>Trade terms (Incoterms 2020)</h2>
          </div>

          <div style={{ border: '1px solid var(--line)', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius)', overflowX: 'auto', marginBottom: '24px' }} className="reveal">
            <table className="spec-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '15%', paddingLeft: '20px' }}>Term</th>
                  <th scope="col" style={{ width: '45%' }}>What We Arrange & Pay</th>
                  <th scope="col" style={{ width: '40%', paddingRight: '20px' }}>What You Arrange & Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ paddingLeft: '20px', fontWeight: 600, color: 'var(--navy)' }}>FOB (JNPT)</td>
                  <td>Produce sourcing, grading, packing, export customs, port terminal THC, loading on vessel.</td>
                  <td style={{ paddingRight: '20px' }}>Ocean freight, destination marine insurance, import duty & customs clearance.</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '20px', fontWeight: 600, color: 'var(--navy)' }}>CFR</td>
                  <td>All FOB costs PLUS international ocean freight prepaid to your destination discharge port.</td>
                  <td style={{ paddingRight: '20px' }}>Marine transit insurance, destination port clearance, discharge terminal handling.</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: '20px', fontWeight: 600, color: 'var(--navy)' }}>CIF</td>
                  <td>All CFR costs PLUS marine cargo insurance (Institute Cargo Clauses A / Reefer breakdown).</td>
                  <td style={{ paddingRight: '20px' }}>Destination port clearance, local import taxes & inland transport.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '13px', color: 'var(--muted)' }} className="reveal">
            Terms we offer: FOB JNPT, CFR, CIF. <ConfirmTag label="CONFIRM" />
          </p>
        </div>
      </section>

      {/* Payment Terms & Ports */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }} className="pay-ports-grid">
            {/* Payment Terms */}
            <div className="reveal">
              <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
                Financial Instruments
              </span>
              <h2 style={{ marginBottom: '20px' }}>Payment</h2>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--charcoal)', marginBottom: '16px' }}>
                We accept commercial banking instruments through prime international financial institutions:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--charcoal)' }}>
                <li style={{ borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                  <strong>100% Irrevocable Letter of Credit (LC) at sight</strong> issued by top-tier international bank.
                </li>
                <li style={{ borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                  <strong>Cash Against Documents (CAD)</strong> via approved commercial banking channels.
                </li>
                <li style={{ borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                  <strong>Advance TT (Telegraphic Transfer)</strong> with balance payable upon transmission of non-negotiable Bill of Lading. <ConfirmTag label="CONFIRM: banking terms" />
                </li>
              </ul>
            </div>

            {/* Ports and Lead Times */}
            <div className="reveal reveal-delay-1">
              <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
                Ocean Gateways
              </span>
              <h2 style={{ marginBottom: '20px' }}>Ports and lead times</h2>
              <div style={{ border: '1px solid var(--line)', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius)', overflowX: 'auto', marginBottom: '16px' }}>
                <table className="spec-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th scope="col" style={{ paddingLeft: '16px' }}>Destination Region</th>
                      <th scope="col">Typical Transit</th>
                      <th scope="col" style={{ paddingRight: '16px' }}>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ paddingLeft: '16px', fontWeight: 500 }}>Arabian Gulf (UAE/KSA)</td>
                      <td>3 – 6 days</td>
                      <td style={{ paddingRight: '16px' }}>Direct sailings from JNPT</td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '16px', fontWeight: 500 }}>Southeast Asia (MY/SG)</td>
                      <td>8 – 12 days</td>
                      <td style={{ paddingRight: '16px' }}>Direct reefer feeders</td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '16px', fontWeight: 500 }}>East / West Africa</td>
                      <td>14 – 22 days</td>
                      <td style={{ paddingRight: '16px' }}>Container liner services</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                Port of loading: JNPT / Nhava Sheva (INNSA) <ConfirmTag label="CONFIRM" /> · Lead time from confirmed order to loading: 4 to 7 days <ConfirmTag label="CONFIRM" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets We Serve (3-Column Text List, No Map) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '36px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Global Reach
            </span>
            <h2>Markets</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="export-markets-3col">
            <div className="reveal" style={{ backgroundColor: 'var(--ivory)', border: '1px solid var(--line)', padding: '24px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Arabian Gulf</h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '22px', margin: 0 }}>
                United Arab Emirates, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait. Frequent direct sailings from JNPT with fast turnarounds. <ConfirmTag label="CONFIRM: countries" />
              </p>
            </div>

            <div className="reveal reveal-delay-1" style={{ backgroundColor: 'var(--ivory)', border: '1px solid var(--line)', padding: '24px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>South & Southeast Asia</h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '22px', margin: 0 }}>
                Malaysia, Singapore, Sri Lanka, Bangladesh, Indonesia. Scheduled dry and reefer liner connections. <ConfirmTag label="CONFIRM" />
              </p>
            </div>

            <div className="reveal reveal-delay-2" style={{ backgroundColor: 'var(--ivory)', border: '1px solid var(--line)', padding: '24px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>African Continent</h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '22px', margin: 0 }}>
                Commercial grain and non-basmati rice import terminals across Eastern and Western Africa. <ConfirmTag label="CONFIRM" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packing and Labelling (3 Photos with Real Imagery) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Packaging Standards
            </span>
            <h2>Packing</h2>
            <p style={{ color: 'var(--charcoal)', fontSize: '15px' }}>
              We deploy heavy 5-ply export craft corrugated cartons, ventilated leno mesh sacks, and shrink-wrapped pallet stowage. Private label branding available for recurring contract importers. <ConfirmTag label="CONFIRM: private label" />
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div className="reveal">
              <PhotoPlaceholder
                label="Red mesh bags: palletized red onions ready for reefer stuffing"
                subtext="Documentary photograph · Packhouse yard · 3:2"
                aspectRatio="3:2"
                src={IMAGES.onionsMesh}
              />
            </div>
            <div className="reveal reveal-delay-1">
              <PhotoPlaceholder
                label="Corrugated cartons: heavy 5-ply ventilated fruit master boxes"
                subtext="Documentary photograph · Neutral background · 3:2"
                aspectRatio="3:2"
                src={IMAGES.pomegranatesBox}
              />
            </div>
            <div className="reveal reveal-delay-2">
              <PhotoPlaceholder
                label="Palletized load: strapped, corner-guarded export pallet"
                subtext="Documentary photograph · Loading dock · 3:2"
                aspectRatio="3:2"
                src={IMAGES.portContainers}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Questions (Accordion) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Clarifications
            </span>
            <h2>Shipping questions</h2>
          </div>

          <div style={{ borderTop: '1px solid var(--line)', maxWidth: '820px' }} className="reveal">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} style={{ borderBottom: '1px solid var(--line)' }}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '20px 0',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '20px',
                      color: 'var(--ink)',
                      cursor: 'pointer',
                    }}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <Minus size={18} strokeWidth={1.5} color="var(--olive)" /> : <Plus size={18} strokeWidth={1.5} color="var(--muted)" />}
                  </button>
                  {isOpen && (
                    <div className="animate-fade-in" style={{ paddingBottom: '20px', fontSize: '15px', lineHeight: '24px', color: 'var(--charcoal)' }}>
                      <p style={{ margin: 0 }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="dark-section" style={{ backgroundColor: 'var(--navy)', color: 'var(--ivory)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }} className="reveal">
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ color: 'var(--ivory)', marginBottom: '12px' }}>
                Plan your container delivery.
              </h2>
              <p style={{ color: 'var(--bone)', fontSize: '16px', margin: 0 }}>
                Inquire with your discharge port and volume requirements. We calculate freight, transit window and proforma price.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => onOpenRfq()}
                style={{
                  height: '52px',
                  padding: '0 28px',
                  backgroundColor: 'var(--ivory)',
                  color: 'var(--navy)',
                  borderRadius: 'var(--radius)',
                  fontWeight: 500,
                  fontSize: '15px',
                  border: '1px solid var(--ivory)',
                  cursor: 'pointer',
                }}
              >
                Request a quote
              </button>
              <a
                href="https://wa.me/?text=Inquiry%20regarding%20container%20shipping%20and%20logistics."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ borderColor: 'var(--ivory)', color: 'var(--ivory)', textDecoration: 'none' }}
              >
                <MessageSquare size={16} strokeWidth={1.5} color="var(--olive-light)" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .pay-ports-grid, .export-markets-3col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
};
