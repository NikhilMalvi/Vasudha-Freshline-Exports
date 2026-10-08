import React, { useState } from 'react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { ChevronDown } from 'lucide-react';
import { IMAGES } from '../data/images';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
  onOpenBrochure?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenRfq,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  const productsList = [
    {
      name: 'Pomegranates',
      path: '/products/pomegranates',
      src: IMAGES.pomegranates,
      label: 'Pomegranates in export packing',
      detail: 'Bhagwa variety packed in calibrated export cartons for container shipments.',
    },
    {
      name: 'Onions',
      path: '/products/onions',
      src: IMAGES.onions,
      label: 'Red onions in mesh bags',
      detail: 'Red onions available October to April, packed in ventilated mesh bags.',
    },
    {
      name: 'Rice',
      path: '/products/rice',
      src: IMAGES.rice,
      label: 'Rice grains for container export',
      detail: 'Basmati and non-basmati rice varieties shipped in bulk bags and dry containers.',
    },
    {
      name: 'Spices',
      path: '/products/spices',
      src: IMAGES.spices,
      label: 'Whole and ground Indian spices',
      detail: 'Whole and ground spices sourced directly from Indian growing regions.',
    },
    {
      name: 'Fresh fruits',
      path: '/products/fresh-fruits',
      src: IMAGES.fruits,
      label: 'Fresh seasonal fruit arrangement',
      detail: 'Seasonal fresh fruits graded and packed under controlled temperature standards.',
    },
    {
      name: 'Fresh vegetables',
      path: '/products/fresh-vegetables',
      src: IMAGES.vegetables,
      label: 'Clean mixed vegetable selection',
      detail: 'Fresh Indian vegetables sorted and packed in temperature-managed cartons.',
    },
  ];

  const faqItems = [
    {
      q: 'What do you export?',
      a: 'We export pomegranates, onions, rice, spices, fresh fruits, and vegetables by container load to overseas importers.',
    },
    {
      q: 'How do I request a quote?',
      a: 'Submit target destination port [Sample], required commodity, and container volume through our quote form.',
    },
    {
      q: 'Which payment terms do you accept?',
      a: 'We accept confirmed commercial letters of credit and agreed B2B bank payment terms.',
    },
    {
      q: 'Which documents come with a shipment?',
      a: 'Shipments include commercial invoice, packing list, certificate of origin, and phytosanitary certificate.',
    },
    {
      q: 'What is the minimum order?',
      a: 'Our minimum order quantity is one full container load (FCL) per consignment.',
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

            {/* Right Visual: 4:5 matching stock photo */}
            <div style={{ maxWidth: '420px', width: '100%', margin: '0 auto' }}>
              <PhotoPlaceholder
                src={IMAGES.pomegranatesCut}
                label="HERO PHOTO: pomegranate cut open on stone"
                aspectRatio="4:5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. THREE FACTS (one thin row, plain text, no animation)
          Counts and years use "00"
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
              00 countries
            </div>
            <div style={{ fontSize: '16px', fontWeight: 500, color: '#16161A' }}>
              00 years in export
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
          Two general, realistic sentences (< 30 words) and a link "About us"
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
              Vasudha Freshline Exports LLP sources and exports Indian agricultural produce to commercial importers worldwide. We pack produce in export-grade cartons and mesh bags for sea freight.
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
          Six tiles with stock photos, names, realistic lines, and link
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
                <PhotoPlaceholder
                  src={product.src}
                  label={product.label}
                  aspectRatio="3:2"
                />
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
          Three columns with title and one short general sentence each
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
                We procure fresh produce directly from regional farm partners and sorting centers.
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
                Every consignment undergoes batch inspection, grading, and weight checks before packing.
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
                We coordinate container loading and port logistics to [Sample] destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. GALLERY STRIP
          Three media placeholders with relevant stock photos (no videos)
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
              src={IMAGES.packhouseInspection}
              label="PHOTO NEEDED: loading at source"
              aspectRatio="3:2"
            />
            <PhotoPlaceholder
              src={IMAGES.containerLoading}
              label="PHOTO NEEDED: container inspection"
              aspectRatio="3:2"
            />
            <PhotoPlaceholder
              src={IMAGES.portContainers}
              label="PHOTO NEEDED: arrival at market"
              aspectRatio="3:2"
            />
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. FAQ
          Accordion with five realistic answers
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
            Contact our export desk for current container pricing and seasonal harvest schedules.
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
