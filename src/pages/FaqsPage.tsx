import React, { useState } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';

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

const WhatsAppInlineIcon: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = 'var(--navy)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ display: 'block' }}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.66 20.15 9.3 19.8 8.1 19.14L7.81 18.97L4.69 19.79L5.52 16.75L5.33 16.45C4.6 15.29 4.22 13.93 4.22 11.91C4.22 7.37 7.51 3.67 12.05 3.67ZM8.94 7.42C8.74 7.42 8.54 7.43 8.36 7.74C8.18 8.05 7.67 8.53 7.67 9.51C7.67 10.49 8.38 11.43 8.48 11.57C8.58 11.71 9.87 13.7 11.87 14.56C13.53 15.28 13.87 15.13 14.23 15.1C14.59 15.06 15.39 14.62 15.55 14.16C15.71 13.7 15.71 13.31 15.66 13.23C15.61 13.15 15.48 13.1 15.28 13C15.08 12.9 14.09 12.41 13.91 12.34C13.73 12.27 13.6 12.24 13.47 12.44C13.34 12.64 12.96 13.1 12.84 13.23C12.72 13.36 12.6 13.38 12.4 13.28C12.2 13.18 11.56 12.97 10.8 12.3C10.21 11.78 9.81 11.13 9.69 10.93C9.57 10.73 9.68 10.62 9.78 10.52C9.87 10.43 9.98 10.29 10.08 10.17C10.18 10.05 10.22 9.96 10.29 9.83C10.36 9.7 10.32 9.58 10.27 9.48C10.22 9.38 9.73 8.18 9.53 7.68C9.33 7.2 9.13 7.26 8.97 7.25L8.94 7.42Z" />
  </svg>
);

export const FaqsPage: React.FC<FaqsPageProps> = ({ onNavigate, onOpenRfq }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterChips = ['All', 'Ordering', 'Shipping', 'Documents', 'Payment'];

  const faqData: FaqItem[] = [
    // Ordering
    {
      id: 1,
      category: 'Ordering',
      q: 'What do you export?',
      a: 'We export pomegranates, red onions, rice, whole spices, fresh fruits and fresh vegetables by the container to overseas importers and wholesalers.',
    },
    {
      id: 2,
      category: 'Ordering',
      q: 'How do I request a quote?',
      a: 'Submit an enquiry form with your product, quantity and destination port, or reach our export desk directly on WhatsApp for an indicative quotation.',
    },
    {
      id: 3,
      category: 'Ordering',
      q: 'What is the minimum order?',
      a: 'The minimum order quantity for all export commodities is 1 container (FCL), ensuring optimal cold-chain and ocean freight economy.',
    },
    {
      id: 4,
      category: 'Ordering',
      q: 'Can I mix products in one container?',
      a: 'Consolidated shipments of compatible produce or mixed spice varieties can be arranged in a single container upon request [Sample].',
    },

    // Shipping
    {
      id: 5,
      category: 'Shipping',
      q: 'Which ports do you ship from?',
      a: 'We ship primarily from JNPT / Nhava Sheva (Maharashtra) and Mundra port (Gujarat), providing direct access to Gulf, Asian and European trade lanes [Sample].',
    },
    {
      id: 6,
      category: 'Shipping',
      q: 'How long does shipping take?',
      a: 'Ocean transit times range from [Sample] 4 to 28 days depending on the destination port, carrier routing and direct vessel connectivity.',
    },
    {
      id: 7,
      category: 'Shipping',
      q: 'What happens if there is a delay?',
      a: 'Reefer container set-points and vessel schedules are monitored continuously, with prompt proactive updates shared with consignees [Sample].',
    },

    // Documents
    {
      id: 8,
      category: 'Documents',
      q: 'Which documents come with a shipment?',
      a: 'Standard export files include the commercial invoice, packing list, phytosanitary certificate, certificate of origin, and original bill of lading.',
    },
    {
      id: 9,
      category: 'Documents',
      q: 'Can I get a certificate copy?',
      a: 'Draft documentation, test certificates and statutory registrations are shared for consignee review prior to vessel departure [Sample].',
    },

    // Payment
    {
      id: 10,
      category: 'Payment',
      q: 'Which payment terms do you accept?',
      a: 'We work with confirmed irrevocable Letter of Credit (LC at sight) and Telegraphic Transfer (TT advance balance) for commercial shipments [Sample].',
    },
    {
      id: 11,
      category: 'Payment',
      q: 'Do you offer private labelling?',
      a: 'Yes, customized carton artwork, stencils, and pre-printed mesh bag bands can be produced to buyer specifications [Sample].',
    },
    {
      id: 12,
      category: 'Payment',
      q: 'How are commodity prices quoted?',
      a: 'Quotations are calculated in USD on FOB, CFR or CIF terms based on seasonal harvest rates and prevailing ocean freight indices [Sample].',
    },
  ];

  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case 'Ordering':
        return { bg: 'var(--leaf-tint)', color: 'var(--leaf)' };
      case 'Shipping':
        return { bg: 'var(--blue-tint)', color: 'var(--blue)' };
      case 'Documents':
        return { bg: 'var(--teal-tint)', color: 'var(--teal)' };
      case 'Payment':
        return { bg: 'var(--saffron-tint)', color: 'var(--saffron)' };
      default:
        return { bg: 'var(--mist)', color: 'var(--navy)' };
    }
  };

  const filteredFaqs =
    selectedFilter === 'All'
      ? faqData
      : faqData.filter((item) => item.category === selectedFilter);

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20have%20a%20question%20regarding%20container%20exports.';

  return (
    <div className="faqs-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. INNER PAGE HERO (compact 280px navy gradient banner with watermark)
          ===================================================================== */}
      <section className="inner-page-hero">
        <img
          src="/vasudha-mark-light-for-navy.svg"
          alt=""
          aria-hidden="true"
          className="inner-page-hero-swoosh"
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav className="inner-page-hero-breadcrumb" aria-label="Breadcrumb">
            <button type="button" onClick={() => onNavigate('/')}>
              Home
            </button>
            <span>/</span>
            <span style={{ color: '#FFFFFF' }}>FAQs</span>
          </nav>
          <span
            className="eyebrow"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              color: '#FFFFFF',
            }}
          >
            FAQs
          </span>
          <h1>Questions, answered.</h1>
          <p className="sub-line">
            Everything commercial buyers ask before booking container produce orders.
          </p>
        </div>
      </section>

      {/* =====================================================================
          2. ACCORDION (mist section with two soft glows)
          Filter chips + 12 questions
          ===================================================================== */}
      <section className="section section-mist has-glows" style={{ paddingTop: '48px', paddingBottom: '72px' }}>
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
          {/* Category chips (.chip) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            {filterChips.map((chip) => (
              <button
                key={chip}
                type="button"
                className={`chip ${selectedFilter === chip ? 'selected' : ''}`}
                onClick={() => setSelectedFilter(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

          <div className="accordion">
            {filteredFaqs.map((faq, idx) => {
              const catStyle = getCategoryStyles(faq.category);
              return (
                <details key={faq.id} open={idx === 0}>
                  <summary>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <span
                        className="eyebrow"
                        style={{
                          fontSize: '10px',
                          padding: '3px 8px',
                          fontWeight: 700,
                          backgroundColor: catStyle.bg,
                          color: catStyle.color,
                        }}
                      >
                        {faq.category}
                      </span>
                      <span>{faq.q}</span>
                    </div>
                    <div className="accordion-icon-circle">+</div>
                  </summary>
                  <div className="accordion-content">
                    {faq.a}
                  </div>
                </details>
              );
            })}
          </div>

          {/* 3. "Still have questions?" Card */}
          <div
            className="card"
            style={{
              marginTop: '56px',
              padding: '44px 32px',
              textAlign: 'center',
              alignItems: 'center',
              backgroundColor: 'var(--white)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div className="icon-circle" style={{ backgroundColor: 'var(--teal-tint)', color: 'var(--teal)', margin: '0 auto 16px auto' }}>
              <HelpCircle size={26} />
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Still have questions?</h3>
            <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '480px', margin: '0 auto 28px auto' }}>
              Our trade desk answers custom packing specifications, seasonal pricing and delivery schedules directly.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppInlineIcon size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                className="btn-primary"
                onClick={() => onOpenRfq()}
              >
                <span>Request a quote</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
