import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { CallStrip } from '../components/CallStrip';
import { ClosingCtaBand } from '../components/ClosingCtaBand';

interface FaqsPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

interface FaqItem {
  id: number;
  category: 'Ordering' | 'Shipping' | 'Documents' | 'Payment';
  q: string;
  a: string;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onOpenRfq }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqIds, setOpenFaqIds] = useState<number[]>([1]); // First FAQ open by default

  const categoryChips = ['All', 'Ordering', 'Shipping', 'Documents', 'Payment'];

  const allFaqs: FaqItem[] = [
    // Ordering (4 questions)
    {
      id: 1,
      category: 'Ordering',
      q: 'What do you export?',
      a: 'We export fresh pomegranates, red onions, Basmati and non-Basmati rice, whole and ground spices, seasonal fresh fruits, and fresh vegetables by full container load (FCL).',
    },
    {
      id: 2,
      category: 'Ordering',
      q: 'How do I request a quote?',
      a: 'Submit our online quote form with your product, desired volume, and destination port, or reach our trade desk directly on WhatsApp for indicative pricing within 4 hours.',
    },
    {
      id: 3,
      category: 'Ordering',
      q: 'What is the minimum order?',
      a: 'Our minimum order quantity for all sea shipments is 1 container (FCL)—either a 20ft box for dense grains/spices or a 40ft reefer for temperature-sensitive perishables.',
    },
    {
      id: 4,
      category: 'Ordering',
      q: 'Can I mix products in one container?',
      a: 'Subject to commodity temperature compatibility and destination quarantine regulations, we can consolidate mixed produce or assorted spice pallets within a single container.',
    },

    // Shipping (3 questions)
    {
      id: 5,
      category: 'Shipping',
      q: 'Which ports do you ship from?',
      a: 'We ship primarily from Nhava Sheva (JNPT, Mumbai) and Mundra port (Gujarat), providing direct access to major global shipping corridors.',
    },
    {
      id: 6,
      category: 'Shipping',
      q: 'How long does shipping take?',
      a: 'Ocean transit times typically range from 4–7 days to the Middle East (Jebel Ali/Dammam), 14–18 days to Southeast Asia, and 20–26 days to Western Europe, depending on carrier schedules.',
    },
    {
      id: 7,
      category: 'Shipping',
      q: 'What happens if there is a delay?',
      a: 'We monitor vessel ETA continuously and notify you immediately of transshipment updates; all perishables are packed in pre-cooled reefer containers maintaining continuous temperature stability.',
    },

    // Documents (2 questions)
    {
      id: 8,
      category: 'Documents',
      q: 'Which documents come with a shipment?',
      a: 'Every export consignment includes a commercial invoice, packing list, official phytosanitary certificate, certificate of origin, ocean bill of lading (BL), and pre-shipment lab reports.',
    },
    {
      id: 9,
      category: 'Documents',
      q: 'Can I get a certificate copy?',
      a: 'Yes. Draft copies of the bill of lading, certificate of origin, and phytosanitary certificates are emailed to you for verification before the vessel sails.',
    },

    // Payment (3 questions)
    {
      id: 10,
      category: 'Payment',
      q: 'Which payment terms do you accept?',
      a: 'We accept standard international trade terms including 30% advance T/T with balance against copy of shipping documents, as well as confirmed irrevocable Letter of Credit (L/C) at sight.',
    },
    {
      id: 11,
      category: 'Payment',
      q: 'Do you offer private labelling?',
      a: 'Yes. For container volumes of rice, onions, and spices, we provide customized retail bagging, master cartons, and barcoded private brand printing per your design specifications.',
    },
    {
      id: 12,
      category: 'Payment',
      q: 'Can I see a sample first?',
      a: 'Yes. Commercial commodity samples and comprehensive packhouse sorting videos can be dispatched via international courier/air freight upon receipt of a qualified trade inquiry.',
    },
  ];

  const filteredFaqs =
    selectedCategory === 'All'
      ? allFaqs
      : allFaqs.filter((f) => f.category === selectedCategory);

  const toggleFaq = (id: number) => {
    if (openFaqIds.includes(id)) {
      setOpenFaqIds(openFaqIds.filter((item) => item !== id));
    } else {
      setOpenFaqIds([...openFaqIds, id]);
    }
  };

  return (
    <div className="faqs-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. INNER BANNER (Pattern A)
          ===================================================================== */}
      <InnerBanner
        pill="FAQs"
        title="Questions, answered."
        subtitle="Everything buyers ask before they order."
      />

      {/* =====================================================================
          2. CATEGORY CHIPS (white section)
          All, Ordering, Shipping, Documents, Payment
          ===================================================================== */}
      <section className="section section-white" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            {categoryChips.map((chip) => {
              const isSelected = selectedCategory === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  className={`chip ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory(chip)}
                  style={{
                    backgroundColor: isSelected ? 'var(--navy)' : 'var(--white)',
                    color: isSelected ? '#FFFFFF' : 'var(--body)',
                    border: isSelected ? '1px solid var(--navy)' : '1px solid var(--border-subtle)',
                    padding: '10px 22px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                  }}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. ACCORDION (mist with two glows)
          A centred column (820px) with 12 white accordion rows (--shadow-sm, radius 16px)
          ===================================================================== */}
      <section className="section section-mist has-glows" style={{ paddingTop: '32px', paddingBottom: '88px' }}>
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    style={{
                      width: '100%',
                      padding: '24px 28px',
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <span
                        className="eyebrow"
                        style={{
                          fontSize: '11px',
                          padding: '3px 8px',
                          backgroundColor: 'var(--mist)',
                          color: 'var(--muted)',
                          margin: 0,
                        }}
                      >
                        {faq.category}
                      </span>
                      <span style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)' }}>
                        {faq.q}
                      </span>
                    </div>

                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        minWidth: '36px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? 'var(--leaf-tint)' : 'var(--mist)',
                        color: isOpen ? 'var(--leaf)' : 'var(--navy)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.2s ease, color 0.2s ease',
                      }}
                    >
                      {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 28px 24px 28px',
                        fontSize: '15px',
                        lineHeight: '26px',
                        color: 'var(--body)',
                        borderTop: '1px solid var(--line)',
                        paddingTop: '18px',
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
      </section>

      {/* =====================================================================
          4. CALL STRIP (Pattern D)
          ===================================================================== */}
      <section className="section section-white" style={{ paddingTop: '80px', paddingBottom: '104px' }}>
        <div className="container">
          <CallStrip />
        </div>
      </section>

      {/* =====================================================================
          5. CLOSING CTA BAND (Pattern E)
          ===================================================================== */}
      <ClosingCtaBand onOpenRfq={() => onOpenRfq()} onRequestQuote={() => onOpenRfq()} />
    </div>
  );
};
