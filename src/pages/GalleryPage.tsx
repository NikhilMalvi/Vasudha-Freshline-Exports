import React, { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Image as ImageIcon,
} from 'lucide-react';
import { IMAGES } from '../data/images';
import { QuoteFormSection } from '../components/QuoteFormSection';

interface GalleryPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

interface MosaicItem {
  id: number;
  title: string;
  category: 'Sourcing' | 'Packing' | 'Loading' | 'Shipping';
  img?: string;
  caption: string;
  isPlaceholder?: boolean;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const filterChips = ['All', 'Sourcing', 'Packing', 'Loading', 'Shipping'];

  // 12 Mosaic Items
  const mosaicItems: MosaicItem[] = [
    {
      id: 1,
      title: 'Pomegranates in crates',
      category: 'Packing',
      img: IMAGES.pomegranatesBox,
      caption: 'Graded pomegranates packed in export corrugated cartons.',
    },
    {
      id: 2,
      title: 'Onions being sorted',
      category: 'Sourcing',
      img: IMAGES.onionsSortingHands,
      caption: 'Manual size sorting and quality inspection of red onions.',
    },
    {
      id: 3,
      title: 'Rice sacks',
      category: 'Packing',
      img: IMAGES.riceSack,
      caption: 'Heavy-duty rice sacks prepared for dry container stuffing.',
    },
    {
      id: 4,
      title: 'Spices',
      category: 'Sourcing',
      img: IMAGES.spices,
      caption: 'Whole seed spices inspected for clean export standards.',
    },
    {
      id: 5,
      title: 'Fruit packing by hands',
      category: 'Packing',
      img: IMAGES.packhouseInspection,
      caption: 'Packhouse fruit handling with protective sleeves.',
    },
    {
      id: 6,
      title: 'Vegetable crates',
      category: 'Sourcing',
      img: IMAGES.vegetables,
      caption: 'Harvested fresh vegetables sorted in packhouse crates.',
    },
    {
      id: 7,
      title: 'Pallets in a clean warehouse',
      category: 'Loading',
      img: IMAGES.portContainers,
      caption: 'Stacked export pallets prepared inside temperature-controlled storage.',
    },
    {
      id: 8,
      title: 'A container being loaded',
      category: 'Loading',
      img: IMAGES.containerLoading,
      caption: 'Reefer ocean container loading supervised by logistics team.',
    },
    {
      id: 9,
      title: 'Containers in a yard',
      category: 'Shipping',
      img: IMAGES.containersYard,
      caption: 'FCL export container staging at port terminal yard.',
    },
    {
      id: 10,
      title: 'A container ship at a port',
      category: 'Shipping',
      img: IMAGES.oceanVessel,
      caption: 'Container vessel berthing at Indian gateway port.',
    },
    {
      id: 11,
      title: 'A container terminal',
      category: 'Shipping',
      caption: 'Container terminal operations.',
      isPlaceholder: true,
    },
    {
      id: 12,
      title: 'Produce crates on a pallet',
      category: 'Packing',
      caption: 'Produce crates on a pallet.',
      isPlaceholder: true,
    },
  ];

  const filteredItems =
    selectedFilter === 'All'
      ? mosaicItems
      : mosaicItems.filter((item) => item.category === selectedFilter);

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="gallery-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
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
            <span style={{ color: '#FFFFFF' }}>Gallery</span>
          </nav>
          <span
            className="eyebrow"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              color: '#FFFFFF',
            }}
          >
            Gallery
          </span>
          <h1>Photos from sourcing to shipping.</h1>
          <p className="sub-line">
            Documentary photography across Indian packhouses, cold stores and container terminals.
          </p>
        </div>
      </section>

      {/* =====================================================================
          2. MASONRY MOSAIC (white with two glows)
          Filter chips + 12 rounded images with captions on hover
          ===================================================================== */}
      <section className="section section-white has-glows" style={{ paddingTop: '48px', paddingBottom: '72px' }}>
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Filter chips (.chip) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '40px',
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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '24px',
            }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  borderRadius: 'var(--radius-img)',
                  overflow: 'hidden',
                  aspectRatio: '4 / 3',
                  position: 'relative',
                  backgroundColor: 'var(--mist)',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s var(--ease-calm), box-shadow 0.3s ease',
                }}
                className="gallery-item-card"
                onClick={() => setLightboxIndex(idx)}
              >
                {item.isPlaceholder || !item.img ? (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--muted)',
                      padding: '24px',
                      textAlign: 'center',
                    }}
                  >
                    <ImageIcon size={32} style={{ marginBottom: '8px', opacity: 0.6 }} />
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>{item.title}</span>
                  </div>
                ) : (
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                )}

                {/* Hover overlay with caption */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(16, 16, 79, 0.88)',
                    color: 'var(--white)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    opacity: 0,
                    transition: 'opacity 0.25s ease',
                  }}
                  className="gallery-hover-overlay"
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--leaf-tint)',
                      fontWeight: 700,
                      marginBottom: '4px',
                    }}
                  >
                    {item.category}
                  </span>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '17px', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. VIDEOS (mist with two glows)
          Two 16:9 rounded video posters side by side with play buttons
          ===================================================================== */}
      <section className="section section-mist has-glows">
        <div className="glow-orb glow-plum-tr" aria-hidden="true" />
        <div className="glow-orb glow-teal-bl" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">Footage</span>
            <h2>Cold-chain operations in <span className="text-highlight-leaf">motion</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Verified documentation of packhouse sorting and terminal transfer.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '32px',
              marginTop: '20px',
            }}
          >
            {/* Video 1 */}
            <div
              style={{
                borderRadius: 'var(--radius-img)',
                overflow: 'hidden',
                aspectRatio: '16 / 9',
                position: 'relative',
                boxShadow: 'var(--shadow-md)',
                cursor: 'pointer',
              }}
              onClick={() => setIsVideoModalOpen(true)}
            >
              <img
                src={IMAGES.containersYard}
                alt="Container staging yard video poster"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(16, 16, 79, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s ease',
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
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Play size={24} fill="var(--navy)" style={{ marginLeft: '3px' }} />
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '15px',
                  fontWeight: 700,
                  textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                }}
              >
                Port container staging & reefer plug-in
              </div>
            </div>

            {/* Video 2 */}
            <div
              style={{
                borderRadius: 'var(--radius-img)',
                overflow: 'hidden',
                aspectRatio: '16 / 9',
                position: 'relative',
                boxShadow: 'var(--shadow-md)',
                cursor: 'pointer',
              }}
              onClick={() => setIsVideoModalOpen(true)}
            >
              <img
                src={IMAGES.oceanVessel}
                alt="Container ship loading video poster"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(16, 16, 79, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s ease',
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
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Play size={24} fill="var(--navy)" style={{ marginLeft: '3px' }} />
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '15px',
                  fontWeight: 700,
                  textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                }}
              >
                Vessel loading & cold-chain departure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. QUOTE FORM (Light mist with white card + glows)
          ===================================================================== */}
      <QuoteFormSection />

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 10, 56, 0.92)',
            zIndex: 3000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'none',
              border: 'none',
              color: 'var(--white)',
              cursor: 'pointer',
              padding: '8px',
            }}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrevLightbox}
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNextLightbox}
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Main Content */}
          <div style={{ maxWidth: '820px', width: '100%', textAlign: 'center' }}>
            <div
              style={{
                width: '100%',
                maxHeight: '65vh',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'var(--mist)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
              }}
            >
              {currentLightboxItem.isPlaceholder || !currentLightboxItem.img ? (
                <div style={{ padding: '64px', color: 'var(--muted)', textAlign: 'center' }}>
                  <ImageIcon size={48} style={{ margin: '0 auto 12px auto' }} />
                  <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)' }}>{currentLightboxItem.title}</div>
                  <div style={{ fontSize: '14px', marginTop: '4px' }}>Placeholder</div>
                </div>
              ) : (
                <img
                  src={currentLightboxItem.img}
                  alt={currentLightboxItem.title}
                  style={{ maxHeight: '65vh', maxWidth: '100%', objectFit: 'contain' }}
                />
              )}
            </div>

            <div style={{ marginTop: '20px', color: 'var(--white)' }}>
              <span className="eyebrow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.16)', color: '#FFFFFF' }}>
                {currentLightboxItem.category}
              </span>
              <h3 style={{ fontSize: '22px', color: 'var(--white)', margin: '8px 0 4px 0' }}>
                {currentLightboxItem.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                {currentLightboxItem.caption}
              </p>
            </div>
          </div>
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
            backgroundColor: 'rgba(10, 10, 56, 0.75)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div className="card" style={{ maxWidth: '480px', width: '100%', padding: '36px', textAlign: 'center', position: 'relative', boxShadow: 'var(--shadow-lg)' }}>
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--navy)',
              }}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
            <div className="icon-circle" style={{ backgroundColor: 'var(--blue-tint)', color: 'var(--blue)', margin: '0 auto 16px auto' }}>
              <Play size={24} fill="var(--blue)" />
            </div>
            <h3 style={{ marginBottom: '8px' }}>Video documentation</h3>
            <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '24px' }}>
              High-resolution documentary footage of packhouse loading and container sealing is available upon request for commercial buyers.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => setIsVideoModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
