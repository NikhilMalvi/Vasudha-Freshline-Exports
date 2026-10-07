import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface BuyerFaqProps {
  onOpenRfq: (product?: string) => void;
}

export const BuyerFaq: React.FC<BuyerFaqProps> = ({ onOpenRfq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ)?',
      a: 'We sell strictly wholesale commercial volumes by full container load (FCL). Our minimum order is one 20ft dry GP container for non-perishables (milled rice, whole spices, pulses) or one 40ft High Cube Reefer container for temperature-managed fresh produce (pomegranates, onions, table grapes, fresh vegetables). We do not supply loose retail parcels or LCL consolidation.',
    },
    {
      q: 'Which Incoterms do you support?',
      a: 'Our standard quotations are issued on FOB (Free on Board) JNPT / Nhava Sheva (INNSA) basis, or CFR (Cost & Freight) and CIF (Cost, Insurance & Freight) to your named port of discharge. For buyers with their own global ocean freight contracts, FOB allows you to nominate your preferred shipping liner.',
    },
    {
      q: 'What payment terms are accepted for overseas shipments?',
      a: 'We accept Irrevocable Letter of Credit (L/C at sight) issued by a prime international commercial bank, or Telegraphic Transfer (T/T wire transfer: 30% advance on order confirmation, and 70% balance against scan copy of original shipping documents and Clean on Board Bill of Lading).',
    },
    {
      q: 'Can third-party inspection agencies verify our consignment before dispatch?',
      a: 'Yes. In addition to official Government of India Plant Quarantine inspection, buyers are welcome to appoint independent surveyors such as SGS, Geo-Chem, Bureau Veritas, or Cotecna to conduct pre-shipment quality grading, count checks, and container stuffing supervision at our packhouses or at the port terminal.',
    },
    {
      q: 'How is cold-chain temperature guaranteed during long sea voyages?',
      a: 'Produce is pre-cooled to its specific carriage temperature prior to loading. Containers are plugged into marine reefer sockets at JNPT with verified pre-trip inspection (PTI) certificates. We place dual calibrated USB temperature data loggers (TempTale) inside the container pallets so buyers can download the complete temperature curve upon discharge.',
    },
    {
      q: 'What statutory export documents accompany each container?',
      a: 'Every export consignment is shipped with: (1) Signed Commercial Invoice with HS Code classification, (2) Detailed Packing List, (3) Official Phytosanitary Certificate issued by Plant Quarantine Authorities, (4) Certificate of Origin from the Indian Chamber of Commerce, and (5) 3 Original / 3 Non-Negotiable Clean on Board Ocean Bills of Lading.',
    },
    {
      q: 'Do you offer private labeling or customized importer branding?',
      a: 'Yes. We provide custom carton artwork printing, bilingual labels (Arabic, English, French), EAN/GS1 barcodes, and customized mesh bag tags for supermarket chains and institutional importers for orders of 2 FCL containers and above.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        backgroundColor: 'var(--bone)',
        borderBottom: '1px solid var(--line)',
      }}
      className="section-padding"
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            alignItems: 'start',
          }}
          className="faq-container-grid"
        >
          {/* Left Column: Heading and Contact CTA */}
          <div style={{ gridColumn: 'span 5' }}>
            <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '12px' }}>
              Importer FAQ
            </span>
            <h2 style={{ marginBottom: '16px' }}>
              Common commercial and shipping questions.
            </h2>
            <p style={{ color: 'var(--charcoal)', fontSize: '15px', lineHeight: '24px', marginBottom: '28px' }}>
              Clear specifications, transparent payment terms, and documented logistics. If your question is not listed here, connect directly with our trade desk.
            </p>

            <div
              style={{
                backgroundColor: 'var(--ivory)',
                border: '1px solid var(--line)',
                padding: '24px',
                borderRadius: 'var(--radius)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <HelpCircle size={18} strokeWidth={1.5} color="var(--olive)" />
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
                  Have custom specifications?
                </span>
              </div>
              <p style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--muted)', marginBottom: '16px' }}>
                Send us your required sizing, count calibration, target discharge port and packing format.
              </p>
              <button
                type="button"
                onClick={() => onOpenRfq()}
                className="btn-primary"
                style={{ height: '44px', width: '100%', fontSize: '14px' }}
              >
                <span>Request Custom Quote</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Right Column: FAQ Accordion items */}
          <div
            style={{
              gridColumn: 'span 7',
              borderTop: '1px solid var(--line)',
            }}
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderBottom: '1px solid var(--line)',
                    backgroundColor: isOpen ? 'var(--ivory)' : 'transparent',
                    transition: 'background-color 180ms ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: isOpen ? 'var(--navy)' : 'var(--ink)',
                        lineHeight: '22px',
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 200ms ease',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'var(--muted)',
                      }}
                    >
                      <ChevronDown size={18} strokeWidth={1.5} />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="animate-fade-in"
                      style={{
                        padding: '0 24px 22px 24px',
                        fontSize: '14px',
                        lineHeight: '23px',
                        color: 'var(--charcoal)',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-container-grid div {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
