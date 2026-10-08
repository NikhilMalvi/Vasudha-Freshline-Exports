import React, { useState } from 'react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { ChevronDown } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
  onOpenBrochure?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenRfq,
}) => {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappUrl =
    'https://wa.me/?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  const productsList = [
    {
      name: 'Pomegranates',
      path: '/products/pomegranates',
      label: 'PHOTO NEEDED: pomegranate export cartons',
      detail: '[CONFIRM: Bhagwa export carton specifications]',
    },
    {
      name: 'Onions',
      path: '/products/onions',
      label: 'PHOTO NEEDED: onion mesh bags',
      detail: '[CONFIRM: red onion grading and packaging]',
    },
    {
      name: 'Rice',
      path: '/products/rice',
      label: 'PHOTO NEEDED: rice bulk bags',
      detail: '[CONFIRM: basmati and non-basmati container loads]',
    },
    {
      name: 'Spices',
      path: '/products/spices',
      label: 'PHOTO NEEDED: export spices',
      detail: '[CONFIRM: whole and ground export spices]',
    },
    {
      name: 'Fresh fruits',
      path: '/products/fresh-fruits',
      label: 'PHOTO NEEDED: seasonal fruits',
      detail: '[CONFIRM: seasonal fruit specifications]',
    },
    {
      name: 'Fresh vegetables',
      path: '/products/fresh-vegetables',
      label: 'PHOTO NEEDED: fresh vegetables',
      detail: '[CONFIRM: temperature-controlled fresh vegetables]',
    },
  ];

  const faqItems = [
    {
      q: 'What do you export?',
      a: '[CONFIRM: pomegranates, onions, rice, spices, fruits and vegetables shipped by container].',
    },
    {
      q: 'How do I request a quote?',
      a: '[CONFIRM: submit target destination port, commodity specifications, and container volume].',
    },
    {
      q: 'Which payment terms do you accept?',
      a: '[CONFIRM: accepted commercial payment terms and letters of credit].',
    },
    {
      q: 'Which documents come with a shipment?',
      a: '[CONFIRM: full export document set including phytosanitary and origin certificates].',
    },
    {
      q: 'What is the minimum order?',
      a: '[CONFIRM: minimum order quantity per full container load].',
    },
  ];

  return (
    <main style={{ backgroundColor: '#F7F5EF', color: '#353535' }}>
      {/* ===================================================================
          1. HERO
          Eyebrow, H1, one sentence, two buttons, 4:5 image placeholder
          =================================================================== */}
      <section
        style={{
          paddingTop: '64px',
          paddingBottom: '64px',
          borderBottom: '1px solid #D9D5C8',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#5F5D55',
                }}
              >
                INDIAN AGRICULTURAL EXPORTS
              </span>

              <h1 style={{ margin: 0 }}>
                Indian produce, exported with precision.
              </h1>

              <p style={{ fontSize: '18px', lineHeight: '28px', color: '#353535', margin: 0 }}>
                Pomegranates, onions, rice, spices, fruits and vegetables, shipped by container to importers and wholesalers.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  marginTop: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onOpenRfq()}
                >
                  Request a quote
                </button>

                <button
                  type="button"
                  className="text-link"
                  onClick={() => onNavigate('/products')}
                >
                  View products &rarr;
                </button>
              </div>
            </div>

            {/* Right Visual: 4:5 placeholder */}
            <div style={{ maxWidth: '420px', width: '100%', margin: '0 auto' }}>
              <PhotoPlaceholder
                label="HERO PHOTO: pomegranate cut open on stone"
                aspectRatio="4:5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. THREE FACTS (one thin row, plain text, no animation)
          =================================================================== */}
      <section
        style={{
          backgroundColor: '#ECE8DC',
          borderBottom: '1px solid #D9D5C8',
          padding: '24px 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '16px', fontWeight: 500, color: '#16161A' }}>
              6 product categories
            </div>
            <div
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#16161A',
                borderLeft: '1px solid #D9D5C8',
                borderRight: '1px solid #D9D5C8',
              }}
              className="fact-middle"
            >
              [CONFIRM: number] countries
            </div>
            <div style={{ fontSize: '16px', fontWeight: 500, color: '#16161A' }}>
              [CONFIRM: years] years in export
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .fact-middle {
              border-left: none !important;
              border-right: none !important;
              border-top: 1px solid #D9D5C8;
              border-bottom: 1px solid #D9D5C8;
              padding: 12px 0;
            }
          }
        `}</style>
      </section>

      {/* ===================================================================
          3. ABOUT (short)
          Two sentences [CONFIRM: who we are and what we export] and a link "About us"
          =================================================================== */}
      <section
        style={{
          padding: '64px 0',
          borderBottom: '1px solid #D9D5C8',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="label-caps">About</span>
            <h2 style={{ margin: 0 }}>Direct Indian export trade</h2>
            <p style={{ fontSize: '18px', lineHeight: '28px', color: '#353535', margin: 0 }}>
              [CONFIRM: who we are and what we export]. Vasudha Freshline Exports LLP connects reliable farm harvests with overseas commercial buyers.
            </p>
            <div>
              <button
                type="button"
                className="text-link"
                onClick={() => onNavigate('/about')}
              >
                About us &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. OUR PRODUCTS
          Six tiles (image placeholder, name, one short line [CONFIRM]) and link
          =================================================================== */}
      <section
        style={{
          padding: '64px 0',
          backgroundColor: '#ECE8DC',
          borderBottom: '1px solid #D9D5C8',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: '36px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <span className="label-caps">Commodities</span>
              <h2 style={{ margin: '4px 0 0 0' }}>Our products</h2>
            </div>
            <button
              type="button"
              className="text-link"
              onClick={() => onNavigate('/products')}
            >
              View all products &rarr;
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '28px',
            }}
          >
            {productsList.map((product) => (
              <div
                key={product.name}
                style={{
                  backgroundColor: '#F7F5EF',
                  border: '1px solid #D9D5C8',
                  borderRadius: 'var(--radius)',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <PhotoPlaceholder label={product.label} aspectRatio="3:2" />
                <div>
                  <h3 style={{ margin: '4px 0 6px 0', fontSize: '20px' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: '20px', color: '#5F5D55', margin: 0 }}>
                    {product.detail}
                  </p>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                  <button
                    type="button"
                    className="text-link"
                    style={{ fontSize: '14px' }}
                    onClick={() => onNavigate(product.path)}
                  >
                    View specifications &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. WHY VASUDHA
          Three columns: "Sourcing", "Quality checks", "Shipping". Sentences [CONFIRM].
          =================================================================== */}
      <section
        style={{
          padding: '64px 0',
          borderBottom: '1px solid #D9D5C8',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span className="label-caps">Operations</span>
            <h2 style={{ margin: '4px 0 0 0' }}>Why Vasudha</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '32px',
            }}
          >
            {/* Column 1: Sourcing */}
            <div
              style={{
                borderTop: '2px solid #16161A',
                paddingTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <h3 style={{ margin: 0 }}>Sourcing</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: '24px' }}>
                [CONFIRM: direct farm procurement and grower relationships across primary producing regions].
              </p>
            </div>

            {/* Column 2: Quality checks */}
            <div
              style={{
                borderTop: '2px solid #16161A',
                paddingTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <h3 style={{ margin: 0 }}>Quality checks</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: '24px' }}>
                [CONFIRM: rigorous batch grading, sorting, and pre-shipment inspection standards].
              </p>
            </div>

            {/* Column 3: Shipping */}
            <div
              style={{
                borderTop: '2px solid #16161A',
                paddingTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <h3 style={{ margin: 0 }}>Shipping</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: '24px' }}>
                [CONFIRM: temperature-managed reefer containers and verified port logistics].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. GALLERY STRIP
          Three media placeholders and a link "See gallery"
          =================================================================== */}
      <section
        style={{
          padding: '64px 0',
          backgroundColor: '#ECE8DC',
          borderBottom: '1px solid #D9D5C8',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <span className="label-caps">Field & Packhouse</span>
              <h2 style={{ margin: '4px 0 0 0' }}>Gallery</h2>
            </div>
            <button
              type="button"
              className="text-link"
              onClick={() => onNavigate('/gallery')}
            >
              See gallery &rarr;
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px',
            }}
          >
            <PhotoPlaceholder
              label="PHOTO NEEDED: loading at source"
              aspectRatio="3:2"
            />
            <PhotoPlaceholder
              label="PHOTO NEEDED: container inspection"
              aspectRatio="3:2"
            />
            <PhotoPlaceholder
              label="PHOTO NEEDED: arrival at market"
              aspectRatio="3:2"
            />
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. FAQ
          Accordion with five questions: All answers [CONFIRM]
          =================================================================== */}
      <section
        style={{
          padding: '64px 0',
          borderBottom: '1px solid #D9D5C8',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ marginBottom: '32px' }}>
            <span className="label-caps">Inquiries</span>
            <h2 style={{ margin: '4px 0 0 0' }}>Frequently asked questions</h2>
          </div>

          <div style={{ borderTop: '1px solid #D9D5C8' }}>
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.q} className="faq-item">
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 180ms ease',
                        flexShrink: 0,
                        color: '#5F5D55',
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p style={{ margin: 0, fontSize: '15px', lineHeight: '24px', color: '#353535' }}>
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          8. CLOSING BAND (navy #10104F)
          "Tell us what you need." with buttons "Request a quote" and "Chat on WhatsApp".
          =================================================================== */}
      <section
        style={{
          backgroundColor: '#10104F',
          color: '#F7F5EF',
          padding: '72px 0',
        }}
        className="dark-section"
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ color: '#F7F5EF', margin: '0 0 16px 0' }}>
            Tell us what you need.
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '26px',
              color: '#DAD8E8',
              margin: '0 auto 32px auto',
              maxWidth: '520px',
            }}
          >
            [CONFIRM: quotation turnaround time and commercial inquiries].
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              className="btn-primary"
              onClick={() => onOpenRfq()}
            >
              Request a quote
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
