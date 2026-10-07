import React, { useState, useEffect } from 'react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { Button } from '../components/Button';
import { ConfirmTag } from '../components/ConfirmTag';
import { PRODUCTS_DATA, type ProductDetailData } from '../data/commodities';
import { ArrowRight, Download, Plus, Minus, MessageSquare, AlertCircle, Check } from 'lucide-react';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
  onOpenBrochure?: () => void;
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug, onNavigate, onOpenRfq, onOpenBrochure }) => {
  const product: ProductDetailData = PRODUCTS_DATA[slug] || PRODUCTS_DATA.pomegranates;
  const [activeThumb, setActiveThumb] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  useEffect(() => {
    setActiveThumb(0);
    setOpenFaq(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

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
  }, [slug]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleDownloadSpec = () => {
    if (onOpenBrochure) {
      onOpenBrochure();
    } else {
      setPdfDownloaded(true);
      setTimeout(() => setPdfDownloaded(false), 3000);
    }
  };

  const relatedProducts = product.relatedSlugs
    .map((s) => PRODUCTS_DATA[s])
    .filter(Boolean);

  const activePhoto = product.packingPhotos[activeThumb] || product.packingPhotos[0];

  return (
    <main>
      {/* Breadcrumb Bar */}
      <section style={{ backgroundColor: 'var(--ivory)', paddingTop: '24px', paddingBottom: '16px' }}>
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ listStyle: 'none', display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--muted)', margin: 0, padding: 0 }}>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/products')}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  Products
                </button>
              </li>
              <li>/</li>
              <li style={{ color: 'var(--ink)', fontWeight: 500 }}>{product.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Product Header (2 Columns: Left 7 cols gallery, Right 5 cols details) */}
      <section className="hairline-b" style={{ backgroundColor: 'var(--ivory)', paddingBottom: '80px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '40px',
            }}
          >
            {/* Left 7 Columns: Gallery */}
            <div style={{ gridColumn: 'span 7' }} className="prod-gallery-col reveal">
              <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius)', marginBottom: '16px', overflow: 'hidden' }}>
                <PhotoPlaceholder
                  label={activePhoto.label}
                  subtext={activePhoto.subtext}
                  aspectRatio="4:5"
                  src={activePhoto.src}
                />
              </div>

              {/* 3 Thumbnails below */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {product.packingPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveThumb(idx)}
                    style={{
                      border: activeThumb === idx ? '2px solid var(--navy)' : '1px solid var(--line)',
                      borderRadius: 'var(--radius)',
                      padding: 0,
                      background: 'none',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      height: '84px',
                      position: 'relative',
                    }}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    {photo.src ? (
                      <img
                        src={photo.src}
                        alt={photo.label}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <div style={{ height: '100%', backgroundColor: '#E2DFD5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
                        <span style={{ fontSize: '11px', color: 'var(--muted)', textAlign: 'center', lineHeight: '14px' }}>
                          {photo.label.split(':')[0]}
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Product Summary & Key Facts */}
            <div style={{ gridColumn: 'span 5' }} className="prod-summary-col reveal reveal-delay-1">
              <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
                {product.eyebrow}
              </span>

              <h1 style={{ fontSize: '44px', lineHeight: '50px', marginBottom: '16px' }}>
                {product.name}
              </h1>

              <p style={{ fontSize: '17px', lineHeight: '26px', color: 'var(--charcoal)', marginBottom: '28px' }}>
                {product.oneLiner}
              </p>

              {/* Extra Notice (e.g. Onions export status or Cold Chain notice) */}
              {product.extraNotice && (
                <div
                  style={{
                    backgroundColor: 'var(--bone)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    padding: '16px',
                    marginBottom: '28px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <AlertCircle size={15} strokeWidth={1.5} color="var(--olive)" />
                    <span className="label-caps" style={{ color: 'var(--navy)' }}>
                      {product.extraNotice.title}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', lineHeight: '20px', color: 'var(--charcoal)', margin: 0 }}>
                    {product.extraNotice.content}
                  </p>
                </div>
              )}

              {/* Key Facts List with 1px hairline dividers */}
              <div
                style={{
                  borderTop: '1px solid var(--line)',
                  marginBottom: '32px',
                }}
              >
                {product.keyFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      padding: '12px 0',
                      borderBottom: '1px solid var(--line)',
                      fontSize: '14px',
                    }}
                  >
                    <span style={{ color: 'var(--muted)', fontWeight: 500 }}>{fact.label}</span>
                    <span style={{ color: 'var(--ink)', textAlign: 'right', maxWidth: '280px' }}>
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                <Button
                  variant="primary"
                  onClick={() => onOpenRfq(product.name)}
                  style={{ width: '100%' }}
                >
                  Request a quote for {product.name.split(' ')[0]}
                </Button>

                <button
                  type="button"
                  onClick={handleDownloadSpec}
                  className="btn-secondary"
                  style={{ width: '100%' }}
                >
                  {pdfDownloaded ? (
                    <>
                      <Check size={16} strokeWidth={1.5} color="var(--olive)" />
                      <span>Spec sheet requested (VF-SPEC-{product.slug.toUpperCase()})</span>
                    </>
                  ) : (
                    <>
                      <Download size={16} strokeWidth={1.5} />
                      <span>Download spec sheet (PDF) [CONFIRM]</span>
                    </>
                  )}
                </button>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '20px', margin: 0 }}>
                We reply within 24 hours. <ConfirmTag label="CONFIRM: within 24 hours" /> Or message us directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Specification Table (Grouped by PRODUCT, PACKING, SHIPPING, TERMS, QUALITY) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Technical Data
            </span>
            <h2>Specification</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              Exact contractual parameters for wholesale container imports. All fields subject to lot confirmation.
            </p>
          </div>

          <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius)', backgroundColor: '#FFFFFF', overflowX: 'auto' }} className="reveal">
            <table className="spec-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {product.specs.map((group) => (
                  <React.Fragment key={group.group}>
                    <tr style={{ backgroundColor: 'var(--bone)' }}>
                      <th
                        colSpan={2}
                        style={{
                          padding: '12px 20px',
                          color: 'var(--navy)',
                          fontSize: '11px',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                        }}
                      >
                        {group.group} PARAMETERS
                      </th>
                    </tr>
                    {group.rows.map((row, idx) => (
                      <tr key={idx}>
                        <td style={{ width: '30%', minWidth: '180px', paddingLeft: '20px', fontWeight: 500, color: 'var(--muted)' }}>
                          {row.label}
                        </td>
                        <td style={{ width: '70%', paddingRight: '20px', color: 'var(--ink)' }}>
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Seasonality Single Bar */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '32px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Crop Availability
            </span>
            <h2>Availability</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              {product.seasonalityNote}
            </p>
          </div>

          {/* 12-Month Single Bar */}
          <div style={{ border: '1px solid var(--line)', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius)', padding: '24px' }} className="reveal">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '6px', marginBottom: '16px' }}>
              {MONTH_NAMES.map((m, idx) => {
                const status = product.seasonalityMonths[idx];
                const bg = status === 'peak' ? 'var(--olive-deep)' : status === 'available' ? 'var(--olive)' : 'var(--bone)';
                return (
                  <div key={m} style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>
                      {m}
                    </span>
                    <div
                      style={{
                        height: '32px',
                        backgroundColor: bg,
                        border: status === 'off' ? '1px dashed var(--line)' : 'none',
                        borderRadius: 'var(--radius)',
                      }}
                      title={`${m}: ${status}`}
                    />
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '20px', fontSize: '12px', color: 'var(--charcoal)', borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', backgroundColor: 'var(--olive-deep)', display: 'inline-block' }} />
                <span>Peak harvest</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', backgroundColor: 'var(--olive)', display: 'inline-block' }} />
                <span>Available</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', backgroundColor: 'var(--bone)', border: '1px dashed var(--line)', display: 'inline-block' }} />
                <span>Off season / Forward contract</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packing and Loading (2-3 3:2 Photos with Captions) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Handling Proof
            </span>
            <h2>Packing and loading</h2>
            <p style={{ color: 'var(--charcoal)', fontSize: '15px' }}>
              Produce is packed into certified export containers at designated loading facilities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {product.packingPhotos.map((photo, idx) => (
              <div key={idx} className={`reveal reveal-delay-${idx + 1}`} style={{ backgroundColor: 'var(--ivory)', border: '1px solid var(--line)', padding: '20px', borderRadius: 'var(--radius)' }}>
                <div style={{ marginBottom: '16px' }}>
                  <PhotoPlaceholder
                    label={photo.label}
                    subtext={photo.subtext}
                    aspectRatio="3:2"
                    src={photo.src}
                  />
                </div>
                <h3 style={{ fontSize: '16px', lineHeight: '22px', marginBottom: '4px' }}>
                  Stage {idx + 1}: {photo.label.split(':')[0]}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                  {photo.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality and Documents */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Verification
            </span>
            <h2>Quality and documents</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }} className="qual-docs-grid">
            {/* Left: Certifications held */}
            <div className="reveal">
              <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Certifications & tests held</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {product.qualityCertifications.map((cert, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '14px', borderBottom: '1px solid var(--line)', paddingBottom: '10px' }}>
                    <span style={{ color: 'var(--olive)', fontWeight: 600 }}>✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '20px' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('/quality')}
                  className="text-link"
                  style={{ background: 'none', border: 'none', font: 'inherit', padding: 0 }}
                >
                  <span>Quality and compliance details</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Right: Documents supplied */}
            <div className="reveal reveal-delay-1">
              <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Documents provided with shipment</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {product.documentsSupplied.map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '14px', borderBottom: '1px solid var(--line)', paddingBottom: '10px' }}>
                    <span style={{ color: 'var(--navy)', fontWeight: 600 }}>•</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Questions (Accordion) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Commercial FAQs
            </span>
            <h2>Questions buyers ask</h2>
          </div>

          <div style={{ borderTop: '1px solid var(--line)', maxWidth: '820px' }} className="reveal">
            {product.faqs.map((faq, idx) => {
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

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
          <div className="container">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Complementary Lines
            </span>
            <h2 style={{ marginBottom: '32px' }} className="reveal">Related commodities</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {relatedProducts.map((rel, idx) => (
                <div key={rel.slug} className={`reveal reveal-delay-${idx + 1}`} style={{ border: '1px solid var(--line)', padding: '24px', backgroundColor: 'var(--ivory)' }}>
                  <div style={{ marginBottom: '16px' }}>
                    <PhotoPlaceholder
                      label={rel.name}
                      aspectRatio="3:2"
                      src={rel.packingPhotos[0]?.src}
                    />
                  </div>
                  <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{rel.name}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '16px' }}>{rel.shortSummary}</p>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/products/${rel.slug}`)}
                    className="text-link"
                    style={{ background: 'none', border: 'none', font: 'inherit', padding: 0 }}
                  >
                    <span>View specification</span>
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA (Navy Band) */}
      <section
        className="dark-section"
        style={{
          backgroundColor: 'var(--navy)',
          color: 'var(--ivory)',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }} className="reveal">
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ color: 'var(--ivory)', marginBottom: '12px' }}>
                Need a specification for your market?
              </h2>
              <p style={{ color: 'var(--bone)', fontSize: '16px', margin: 0 }}>
                Tell us your target port, count requirements and container delivery window. We provide proforma terms.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => onOpenRfq(product.name)}
                style={{
                  height: '52px',
                  padding: '0 28px',
                  backgroundColor: 'var(--ivory)',
                  color: 'var(--navy)',
                  border: '1px solid var(--ivory)',
                  borderRadius: 'var(--radius)',
                  fontWeight: 500,
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                Request a quote
              </button>

              <a
                href={`https://wa.me/?text=Inquiry%20regarding%20${encodeURIComponent(product.name)}%20container%20exports.`}
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

      {/* Sticky Mobile Bottom Bar */}
      <div
        className="sticky-mobile-bar"
        style={{
          display: 'none',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'var(--ivory)',
          borderTop: '1px solid var(--line)',
          padding: '12px 16px',
          zIndex: 45,
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <Button
          variant="primary"
          onClick={() => onOpenRfq(product.name)}
          style={{ flexGrow: 1, height: '48px', fontSize: '14px' }}
        >
          Request quote ({product.name.split(' ')[0]})
        </Button>
        <a
          href={`https://wa.me/?text=Inquiry%20for%20${encodeURIComponent(product.name)}.`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--line)',
            backgroundColor: 'var(--bone)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--olive)',
          }}
          aria-label="WhatsApp trade desk"
        >
          <MessageSquare size={20} strokeWidth={1.5} />
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .prod-gallery-col, .prod-summary-col, .qual-docs-grid {
            grid-column: span 12 !important;
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .sticky-mobile-bar {
            display: flex !important;
          }
        }
      `}</style>
    </main>
  );
};
