import React, { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Film,
} from 'lucide-react';
import { IMAGES } from '../data/images';
import { InnerBanner } from '../components/InnerBanner';
import { ClosingCtaBand } from '../components/ClosingCtaBand';

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
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onOpenRfq,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideoTitle, setActiveVideoTitle] = useState<string>('');

  const filterChips = ['All', 'Sourcing', 'Packing', 'Loading', 'Shipping'];

  // 12 Mosaic Items matching the specification
  const mosaicItems: MosaicItem[] = [
    {
      id: 1,
      title: 'Pomegranates in crates',
      category: 'Packing',
      img: IMAGES.pomegranatesBox,
      caption: 'Calibrated Bhagwa pomegranates packed in export cartons.',
    },
    {
      id: 2,
      title: 'Onions being sorted',
      category: 'Sourcing',
      img: IMAGES.onionsSortingHands,
      caption: 'Manual size sorting and skin inspection of Nashik red onions.',
    },
    {
      id: 3,
      title: 'Rice sacks',
      category: 'Packing',
      img: IMAGES.riceSack,
      caption: 'Sortex-cleaned Basmati rice packed in moisture-barrier bags.',
    },
    {
      id: 4,
      title: 'Spices',
      category: 'Sourcing',
      img: IMAGES.spices,
      caption: 'Whole cumin and turmeric seeds graded for volatile oil content.',
    },
    {
      id: 5,
      title: 'Fruit packing by hands',
      category: 'Packing',
      img: IMAGES.packhouseInspection,
      caption: 'Careful fruit placement with protective foam net sleeves.',
    },
    {
      id: 6,
      title: 'Vegetable crates',
      category: 'Sourcing',
      img: IMAGES.vegetables,
      caption: 'Farm-fresh chillies, okra, and ginger assembled at packhouse.',
    },
    {
      id: 7,
      title: 'Pallets in a clean warehouse',
      category: 'Loading',
      img: IMAGES.portContainers,
      caption: 'Strapped and edge-protected pallets stored in pre-cooling rooms.',
    },
    {
      id: 8,
      title: 'A container being loaded',
      category: 'Loading',
      img: IMAGES.containerLoading,
      caption: 'Reefer container stuffing under controlled dock temperatures.',
    },
    {
      id: 9,
      title: 'Containers in a yard',
      category: 'Loading',
      img: IMAGES.containersYard,
      caption: 'Pre-cooled containers awaiting customs gate-in and vessel loading.',
    },
    {
      id: 10,
      title: 'A container ship at a port',
      category: 'Shipping',
      img: IMAGES.oceanVessel,
      caption: 'Ocean vessel departing Nhava Sheva port for international terminals.',
    },
    {
      id: 11,
      title: 'A container terminal',
      category: 'Shipping',
      img: IMAGES.portContainers,
      caption: 'Deep-water container logistics hub handling scheduled sailings.',
    },
    {
      id: 12,
      title: 'Produce crates on a pallet',
      category: 'Packing',
      img: IMAGES.pomegranatesCut,
      caption: 'Export cartons strapped on treated fumigated pallets.',
    },
  ];

  const filteredItems =
    selectedFilter === 'All'
      ? mosaicItems
      : mosaicItems.filter((item) => item.category === selectedFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleOpenVideo = (title: string) => {
    setActiveVideoTitle(title);
    setIsVideoModalOpen(true);
  };

  return (
    <div className="gallery-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. INNER BANNER (Pattern A)
          ===================================================================== */}
      <InnerBanner
        pill="Gallery"
        title="Photos from sourcing to shipping"
        subtitle="A look at how produce is sorted, packed and loaded."
      />

      {/* =====================================================================
          2. FILTER CHIPS (white section)
          All, Sourcing, Packing, Loading, Shipping
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
            {filterChips.map((chip) => {
              const isSelected = selectedFilter === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  className={`chip ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedFilter(chip)}
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
          3. MOSAIC (white with two glows)
          A masonry grid of 12 rounded images (radius 20px, --shadow-md) with captions on hover
          ===================================================================== */}
      <section className="section section-white has-glows" style={{ paddingTop: '32px', paddingBottom: '88px' }}>
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-teal-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: '28px',
            }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: '#F4F6EF',
                  position: 'relative',
                  cursor: 'pointer',
                  aspectRatio: '4 / 3',
                  border: '1px solid var(--border-subtle)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="gallery-mosaic-card"
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#F4F6EF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--muted)',
                      fontSize: '14px',
                    }}
                  >
                    Image placeholder
                  </div>
                )}

                {/* Hover Caption Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(10, 10, 56, 0.88) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px',
                    color: '#FFFFFF',
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontWeight: 700,
                      marginBottom: '4px',
                    }}
                  >
                    {item.category}
                  </span>
                  <div style={{ fontSize: '17px', fontWeight: 700, marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '18px' }}>
                    {item.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. VIDEOS (mist section)
          Intro: pill "Videos", H2 "See it in action".
          Two 16:9 rounded video posters side by side with white play buttons
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Videos</span>
            <h2>See it in <span className="text-highlight-leaf">action</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Documentary footage of Indian agricultural packing and container stuffing.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '32px',
              marginTop: '48px',
            }}
          >
            {/* Video 1 */}
            <div
              onClick={() => handleOpenVideo('Produce Packhouse Sorting & Pre-cooling')}
              style={{
                position: 'relative',
                aspectRatio: '16 / 9',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                cursor: 'pointer',
                backgroundColor: 'var(--navy-deep)',
              }}
              className="video-poster-card"
            >
              <img
                src={IMAGES.packhouseInspection}
                alt="Packhouse sorting video poster"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.82 }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(10, 10, 56, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: 'var(--navy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-lg)',
                    marginBottom: '16px',
                    paddingLeft: '4px',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  <Play size={28} fill="var(--navy)" />
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                  Packhouse Sorting & Pre-cooling
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Duration: 1:45 min · High Definition
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div
              onClick={() => handleOpenVideo('Reefer Container Loading & Port Gate-In')}
              style={{
                position: 'relative',
                aspectRatio: '16 / 9',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                cursor: 'pointer',
                backgroundColor: 'var(--navy-deep)',
              }}
              className="video-poster-card"
            >
              <img
                src={IMAGES.containerLoading}
                alt="Container loading video poster"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.82 }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(10, 10, 56, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: 'var(--navy)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-lg)',
                    marginBottom: '16px',
                    paddingLeft: '4px',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  <Play size={28} fill="var(--navy)" />
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                  Reefer Container Loading & Port Gate-In
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Duration: 2:10 min · High Definition
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. CLOSING CTA BAND (Pattern E)
          ===================================================================== */}
      <ClosingCtaBand onOpenRfq={() => onOpenRfq()} onRequestQuote={() => onOpenRfq()} />

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 10, 56, 0.94)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <X size={32} />
          </button>

          {/* Left arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Lightbox Content Container */}
          <div
            style={{
              maxWidth: '920px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: '100%',
                maxHeight: '75vh',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'var(--navy-deep)',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              <img
                src={filteredItems[lightboxIndex].img}
                alt={filteredItems[lightboxIndex].title}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '16px', color: '#FFFFFF' }}>
              <div style={{ fontSize: '18px', fontWeight: 700 }}>
                {filteredItems[lightboxIndex].title}
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', marginTop: '4px' }}>
                {filteredItems[lightboxIndex].caption}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal Placeholder */}
      {isVideoModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 10, 56, 0.8)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            zIndex: 9999,
          }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--white)',
              borderRadius: '24px',
              padding: '40px 32px',
              maxWidth: '520px',
              width: '100%',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--muted)',
              }}
            >
              <X size={24} />
            </button>

            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--leaf-tint)',
                color: 'var(--leaf)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
              }}
            >
              <Film size={28} />
            </div>

            <h3 style={{ fontSize: '22px', color: 'var(--navy)', marginBottom: '8px' }}>
              Video placeholder
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--body)', marginBottom: '20px' }}>
              {activeVideoTitle}
            </p>

            <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '28px' }}>
              Documentary video recordings of our packhouse sorting, container stuffing, and port loading operations are shared directly with overseas buyer delegations.
            </p>

            <button
              type="button"
              className="btn-primary"
              onClick={() => setIsVideoModalOpen(false)}
              style={{ width: '100%' }}
            >
              <span>Close preview</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
