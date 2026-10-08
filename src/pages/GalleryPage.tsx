import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { IMAGES } from '../data/images';

interface GalleryPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

// Sample Image Corner Tag
const SampleImageTag: React.FC = () => (
  <span
    style={{
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      backgroundColor: 'rgba(22, 22, 26, 0.6)',
      color: '#FFFFFF',
      fontSize: '10px',
      fontWeight: 500,
      padding: '2px 6px',
      borderRadius: '4px',
      letterSpacing: '0.04em',
      pointerEvents: 'none',
      zIndex: 3,
      fontFamily: 'var(--font-sans)',
    }}
  >
    SAMPLE IMAGE
  </span>
);

interface GalleryItem {
  id: number;
  title: string;
  category: 'Sourcing' | 'Packing' | 'Loading' | 'Shipping';
  img: string;
  caption: string;
  span?: string;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenRfq,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const filterChips = ['All', 'Sourcing', 'Packing', 'Loading', 'Shipping'];

  // 12 Mosaic Items matching specifications:
  // pomegranates in crates; onions being sorted; rice sacks; spices; fruit packing by hands;
  // vegetable crates; pallets in a clean warehouse; a container being loaded; containers in a yard;
  // a container ship at a port; a container terminal; produce crates on a pallet.
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Pomegranates in crates',
      category: 'Packing',
      img: IMAGES.pomegranatesBox,
      caption: 'Graded pomegranates packed in export telescopic cartons.',
    },
    {
      id: 2,
      title: 'Onions being sorted',
      category: 'Sourcing',
      img: IMAGES.packhouseInspection,
      caption: 'Manual size sorting and quality inspection of red onions.',
    },
    {
      id: 3,
      title: 'Rice sacks',
      category: 'Packing',
      img: IMAGES.riceSack,
      caption: 'Export rice sacks stacked for container palletising.',
    },
    {
      id: 4,
      title: 'Spices in bowls',
      category: 'Sourcing',
      img: IMAGES.spices,
      caption: 'Whole and ground spices sourced from growing regions.',
    },
    {
      id: 5,
      title: 'Fruit packing by hands',
      category: 'Packing',
      img: IMAGES.fruitsGrapes,
      caption: 'Hands grading and packing fresh table fruits with liners.',
    },
    {
      id: 6,
      title: 'Vegetable crates',
      category: 'Sourcing',
      img: IMAGES.vegetables,
      caption: 'Harvested fresh vegetables sorted in regional packing crates.',
    },
    {
      id: 7,
      title: 'Pallets in a clean warehouse',
      category: 'Packing',
      img: IMAGES.portContainers,
      caption: 'Pre-cooled pallets lined up inside warehouse holding area.',
    },
    {
      id: 8,
      title: 'A container being loaded',
      category: 'Loading',
      img: IMAGES.containerLoading,
      caption: 'Forklift loading export pallets into a 40ft reefer container.',
    },
    {
      id: 9,
      title: 'Containers in a yard',
      category: 'Loading',
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
      caption: 'Container stacks positioned for gate-in and customs clearance.',
    },
    {
      id: 10,
      title: 'A container ship at a port',
      category: 'Shipping',
      img: IMAGES.oceanVessel,
      caption: 'Ocean container vessel berthed for scheduled international sailing.',
    },
    {
      id: 11,
      title: 'A container terminal',
      category: 'Shipping',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      caption: 'Commercial container terminal gantry operations at export harbour.',
    },
    {
      id: 12,
      title: 'Produce crates on a pallet',
      category: 'Loading',
      img: IMAGES.fruitsBananas,
      caption: 'Cartons stacked on treated wooden pallets with strap securing.',
    },
  ];

  const filteredItems =
    selectedFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredItems.length);
    }
  };

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  return (
    <div className="gallery-page-content" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* =========================================================================
          1. HERO (.section ivory, centred)
          ========================================================================= */}
      <section className="section" style={{ paddingTop: '56px', paddingBottom: '56px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '13px',
              color: 'var(--muted)',
              marginBottom: '24px',
            }}
          >
            <button
              type="button"
              onClick={() => onNavigate('/')}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'var(--charcoal)',
                cursor: 'pointer',
                font: 'inherit',
              }}
            >
              Home
            </button>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Gallery</span>
          </nav>

          <span className="eyebrow" style={{ justifyContent: 'center' }}>GALLERY</span>
          <h1 style={{ margin: '12px 0 16px 0' }}>Photos from sourcing to shipping</h1>
          <p style={{ margin: '0 auto', fontSize: '18px', lineHeight: '28px', color: 'var(--charcoal)' }}>
            Photographic documentation of farm harvesting, packhouse grading and ocean container dispatch.
          </p>

          {/* =========================================================================
              2. FILTER CHIPS: All, Sourcing, Packing, Loading, Shipping
              ========================================================================= */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '36px',
            }}
          >
            {filterChips.map((chip) => {
              const isSelected = selectedFilter === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setSelectedFilter(chip)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    border: isSelected ? '1px solid var(--navy)' : '1px solid var(--line)',
                    backgroundColor: isSelected ? 'var(--navy)' : 'var(--white)',
                    color: isSelected ? 'var(--white)' : 'var(--charcoal)',
                    transition: 'all 240ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MASONRY MOSAIC OF 12 ROUNDED IMAGES WITH CAPTIONS ON HOVER
          ========================================================================= */}
      <section className="section-white" style={{ paddingTop: '56px', paddingBottom: '88px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: '24px',
            }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  backgroundColor: 'var(--bone)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-soft)',
                }}
                onClick={() => setLightboxIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setLightboxIndex(idx);
                  }
                }}
                className="gallery-item-wrapper"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 300ms var(--ease-calm)',
                  }}
                />
                <SampleImageTag />

                {/* Hover Overlay Caption */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(16, 16, 79, 0.65)',
                    backdropFilter: 'blur(2px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    opacity: 0,
                    transition: 'opacity 240ms ease',
                    zIndex: 4,
                  }}
                  className="gallery-overlay"
                >
                  <span
                    style={{
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--olive-light)',
                      fontWeight: 600,
                    }}
                  >
                    {item.category}
                  </span>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--white)', marginTop: '2px' }}>
                    {item.title}
                  </div>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'rgba(247, 245, 239, 0.85)', lineHeight: '18px' }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. VIDEOS (.section-bone). Two 16:9 rounded posters side by side.
          ========================================================================= */}
      <section className="section-bone" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px auto' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>VIDEO DOCUMENTATION</span>
            <h2 style={{ margin: '10px 0 0 0' }}>Operational footage</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '32px',
            }}
          >
            {/* Video 1 */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '16 / 9',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: 'var(--bone)',
                boxShadow: 'var(--shadow-soft)',
              }}
              onClick={() => setIsVideoModalOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Play video: Container terminal dispatch"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsVideoModalOpen(true);
              }}
            >
              <img
                src={IMAGES.portContainers}
                alt="Container terminal dispatch operations"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <SampleImageTag />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(16, 16, 79, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--white)',
                    color: 'var(--navy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-floating)',
                  }}
                >
                  <Play size={24} fill="currentColor" style={{ marginLeft: '3px' }} />
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'var(--white)', zIndex: 3 }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--olive-light)' }}>
                  PORT LOGISTICS
                </span>
                <div style={{ fontSize: '18px', fontWeight: 600 }}>Container terminal dispatch</div>
              </div>
            </div>

            {/* Video 2 */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '16 / 9',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: 'var(--bone)',
                boxShadow: 'var(--shadow-soft)',
              }}
              onClick={() => setIsVideoModalOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Play video: Vessel loading operations"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsVideoModalOpen(true);
              }}
            >
              <img
                src={IMAGES.containerLoading}
                alt="Vessel loading operations at container yard"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <SampleImageTag />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(16, 16, 79, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--white)',
                    color: 'var(--navy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-floating)',
                  }}
                >
                  <Play size={24} fill="currentColor" style={{ marginLeft: '3px' }} />
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'var(--white)', zIndex: 3 }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--olive-light)' }}>
                  REEFER OPERATIONS
                </span>
                <div style={{ fontSize: '18px', fontWeight: 600 }}>Vessel loading operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CLOSING BAND (.band-navy)
          ========================================================================= */}
      <section className="band-navy" style={{ padding: '88px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ color: 'var(--white)', margin: '0 0 16px 0' }}>
            Tell us what you need.
          </h2>

          <p
            style={{
              color: 'rgba(247, 245, 239, 0.9)',
              margin: '0 auto 36px auto',
              fontSize: '18px',
              lineHeight: '28px',
            }}
          >
            We supply calibrated produce with planned vessel departures and transparent export handling.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <button
              type="button"
              className="btn-light"
              onClick={() => onOpenRfq()}
            >
              <span>Request a quote</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                height: '52px',
                padding: '0 28px',
                backgroundColor: 'transparent',
                color: 'var(--white)',
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                border: '1px solid var(--white)',
                borderRadius: 'var(--radius-btn)',
                cursor: 'pointer',
                transition: 'transform 200ms ease, background-color 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(16, 16, 79, 0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'none',
              border: 'none',
              color: 'var(--ivory)',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <X size={28} />
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrevLightbox}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              color: 'var(--white)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image Content */}
          <div
            style={{
              maxWidth: '880px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: 'relative',
                maxHeight: '75vh',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: 'var(--navy-deep)',
              }}
            >
              <img
                src={filteredItems[lightboxIndex].img}
                alt={filteredItems[lightboxIndex].title}
                style={{
                  maxHeight: '75vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
              <SampleImageTag />
            </div>

            <div style={{ textAlign: 'center', color: 'var(--ivory)' }}>
              <div style={{ fontSize: '18px', fontWeight: 600 }}>
                {filteredItems[lightboxIndex].title}
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(247, 245, 239, 0.75)', marginTop: '4px' }}>
                {filteredItems[lightboxIndex].caption}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNextLightbox}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              color: 'var(--white)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Video Placeholder Modal */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(16, 16, 79, 0.7)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="card"
            style={{
              maxWidth: '480px',
              width: '100%',
              padding: '36px',
              textAlign: 'center',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--muted)',
              }}
            >
              <X size={20} />
            </button>

            <div className="icon-circle" style={{ margin: '0 auto 16px auto', width: '64px', height: '64px' }}>
              <Play size={24} fill="currentColor" />
            </div>

            <h3 style={{ margin: '0 0 8px 0', fontSize: '22px' }}>Video preview</h3>
            <p style={{ margin: '0 0 24px 0', color: 'var(--charcoal)', fontSize: '15px' }}>
              Video placeholder
            </p>

            <button
              type="button"
              className="btn-primary"
              style={{ margin: '0 auto' }}
              onClick={() => setIsVideoModalOpen(false)}
            >
              Close preview
            </button>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item-wrapper:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-item-wrapper:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};
