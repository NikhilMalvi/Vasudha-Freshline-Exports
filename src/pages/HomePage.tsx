import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Check,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Package,
  Ship,
  FileText,
  Phone,
  Mail,
  ShieldCheck,
  Sprout,
  Truck,
} from 'lucide-react';
import { IMAGES } from '../data/images';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
  onOpenBrochure?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenRfq }) => {
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const sliderIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const heroSlides = [
    {
      id: 'pomegranates',
      label: 'Pomegranates',
      alt: 'Fresh pomegranate cut open on a stone surface',
      src: IMAGES.pomegranatesCut,
    },
    {
      id: 'onions',
      label: 'Onions',
      alt: 'Red onions in export mesh bags',
      src: IMAGES.onionsMesh,
    },
    {
      id: 'rice',
      label: 'Rice',
      alt: 'Rice grains in a wooden scoop',
      src: IMAGES.riceGrains,
    },
  ];

  // Auto-advance hero slider every 7 seconds, pausing on hover
  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    if (!isSliderPaused) {
      sliderIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 7000);
    }

    return () => {
      if (sliderIntervalRef.current) clearInterval(sliderIntervalRef.current);
    };
  }, [isSliderPaused, heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Video Placeholder Modal State
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Testimonials Slider State
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const testimonials = [
    {
      quote: 'Consistent sizing and clean packing cartons for our pomegranate orders throughout the shipping season.',
      initials: 'AM',
      name: 'Buyer Name',
      meta: 'Procurement Director, Import Co., UAE [Sample]',
    },
    {
      quote: 'Good container loading standards and prompt documentation dispatch before vessel arrival at our port.',
      initials: 'RT',
      name: 'Buyer Name',
      meta: 'Managing Partner, Fresh Food Logistics, UK [Sample]',
    },
    {
      quote: 'Reliable updates on onion availability and transparent communication across the harvest months.',
      initials: 'KL',
      name: 'Buyer Name',
      meta: 'Supply Chain Head, Global Trading, Malaysia [Sample]',
    },
  ];

  // Counters Count-Up Trigger
  const [hasCounted, setHasCounted] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);
          // Animate counts
          const duration = 1200;
          const steps = 30;
          const stepTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCount1(Math.round(10 * progress));
            setCount2(Math.round(100 * progress));
            setCount3(Math.round(15 * progress));
            setCount4(Math.round(50 * progress));

            if (step >= steps) {
              clearInterval(timer);
              setCount1(10);
              setCount2(100);
              setCount3(15);
              setCount4(50);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  return (
    <div className="home-page-content" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* =========================================================================
          1. HERO (.section ivory, min-height 88vh). Two columns.
          ========================================================================= */}
      <section
        className="section"
        style={{
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '80px',
          paddingBottom: '80px',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span className="eyebrow">INDIAN AGRICULTURAL EXPORTS</span>

              <h1 style={{ margin: 0 }}>Indian produce, exported with precision.</h1>

              <p style={{ margin: 0, fontSize: '18px', lineHeight: '30px', color: 'var(--charcoal)' }}>
                Pomegranates, onions, rice, spices, fruits and vegetables, shipped by container to importers and wholesalers.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onOpenRfq()}
                >
                  <span>Request a quote</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => onNavigate('/products')}
                >
                  View products
                </button>
              </div>

              {/* Row of Three Small Items with Line Icons */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--line)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Package size={18} style={{ color: 'var(--olive)', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--charcoal)' }}>
                    6 product categories
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Ship size={18} style={{ color: 'var(--olive)', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--charcoal)' }}>
                    Container loads (FCL)
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FileText size={18} style={{ color: 'var(--olive)', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--charcoal)' }}>
                    Documents with every shipment
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Fixed Image Slider */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                margin: '0 auto',
              }}
              onMouseEnter={() => setIsSliderPaused(true)}
              onMouseLeave={() => setIsSliderPaused(false)}
            >
              {/* Slider Frame (Fixed aspect ratio 4:5, min-height 520px, radius 16px) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  minHeight: '520px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bone)',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                {heroSlides.map((slide, idx) => (
                  <div
                    key={slide.id}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: idx === currentSlide ? 1 : 0,
                      transition: 'opacity 900ms cubic-bezier(0.22, 1, 0.36, 1)',
                      pointerEvents: idx === currentSlide ? 'auto' : 'none',
                    }}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                ))}

                {/* Pill Caption Bottom-Left */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    zIndex: 4,
                  }}
                >
                  <span className="pill" style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)' }}>
                    {heroSlides[currentSlide].label}
                  </span>
                </div>

                {/* Slide Controls: Arrows & Dots Bottom-Right */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    zIndex: 4,
                    backgroundColor: 'rgba(16, 16, 79, 0.65)',
                    backdropFilter: 'blur(4px)',
                    padding: '6px 10px',
                    borderRadius: '24px',
                  }}
                >
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    aria-label="Previous slide"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--ivory)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      padding: 0,
                    }}
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <div style={{ display: 'flex', gap: '5px' }}>
                    {heroSlides.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setCurrentSlide(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        style={{
                          width: dotIdx === currentSlide ? '16px' : '6px',
                          height: '6px',
                          borderRadius: '3px',
                          backgroundColor: dotIdx === currentSlide ? 'var(--white)' : 'rgba(255, 255, 255, 0.4)',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          transition: 'all 240ms ease',
                        }}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNextSlide}
                    aria-label="Next slide"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--ivory)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      padding: 0,
                    }}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Thin Progress Line at Top */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    zIndex: 4,
                  }}
                >
                  <div
                    style={{
                      width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
                      height: '100%',
                      backgroundColor: 'var(--olive)',
                      transition: 'width 400ms ease',
                    }}
                  />
                </div>
              </div>

              {/* Small White Floating Card Overlapping Bottom-Left Corner */}
              <div
                className="card"
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  left: '-24px',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  zIndex: 5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: 'var(--shadow-floating)',
                  maxWidth: '260px',
                }}
              >
                <div className="icon-circle" style={{ width: '40px', height: '40px' }}>
                  <Ship size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
                    FCL container loads
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                    From India to your port
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT PREVIEW (.section-white). Two columns.
          ========================================================================= */}
      <section className="section-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '56px',
              alignItems: 'center',
            }}
          >
            {/* Left: Image Composition with Floating Badge */}
            <div style={{ position: 'relative' }}>
              {/* Large Rounded Image */}
              <div
                style={{
                  position: 'relative',
                  width: '88%',
                  aspectRatio: '4 / 3',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bone)',
                }}
              >
                <img
                  src={IMAGES.packhouseInspection}
                  alt="Hands sorting fresh produce in crates"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Smaller Rounded Image Overlapping Lower-Right Corner */}
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  bottom: '-28px',
                  width: '56%',
                  aspectRatio: '4 / 3',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '4px solid var(--white)',
                  backgroundColor: 'var(--bone)',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                <img
                  src={IMAGES.portContainers}
                  alt="Stacked produce crates in a clean warehouse"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Floating Badge Card Top-Left: "10+" and "Years in export" */}
              <div
                className="card"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  padding: '16px 22px',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-floating)',
                  zIndex: 2,
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', lineHeight: '36px', color: 'var(--ink)' }}>
                  10+
                </span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--charcoal)', marginTop: '2px' }}>
                  Years in export
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span className="eyebrow">ABOUT US</span>

              <h2 style={{ margin: 0 }}>A direct line from Indian farms to your port.</h2>

              <p style={{ margin: 0 }}>
                Vasudha Freshline Exports LLP connects international buyers with agricultural growing centres across India.
              </p>

              <p style={{ margin: 0 }}>
                We manage export sourcing, packhouse grading and containerised sea freight with consistent attention to schedule.
              </p>

              {/* Three Check Lines */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--olive-tint)',
                      color: 'var(--olive-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={13} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '15px', color: 'var(--charcoal)', fontWeight: 500 }}>
                    Clear specifications before loading
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--olive-tint)',
                      color: 'var(--olive-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={13} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '15px', color: 'var(--charcoal)', fontWeight: 500 }}>
                    Documents prepared with every shipment
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--olive-tint)',
                      color: 'var(--olive-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={13} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '15px', color: 'var(--charcoal)', fontWeight: 500 }}>
                    One point of contact for your order
                  </span>
                </div>
              </div>

              <div style={{ paddingTop: '8px' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => onNavigate('/about')}
                >
                  About us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PRODUCTS (.section ivory). Grid 3 x 2.
          ========================================================================= */}
      <section className="section">
        <div className="container">
          {/* Heading Block */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <div>
              <span className="eyebrow">OUR PRODUCTS</span>
              <h2 style={{ margin: '8px 0 0 0' }}>What we export</h2>
              <p style={{ margin: '8px 0 0 0', color: 'var(--muted)' }}>
                Agricultural produce supplied by the full container load.
              </p>
            </div>
            <button
              type="button"
              className="link"
              onClick={() => onNavigate('/products')}
            >
              View all products &rarr;
            </button>
          </div>

          {/* Grid 3 x 2 of six .card items */}
          <div
            className="grid-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
            }}
          >
            {/* 1. Pomegranates */}
            <div className="card" style={{ gap: '16px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img
                  src={IMAGES.pomegranates}
                  alt="Export pomegranates"
                  className="card-img"
                />
                <button
                  type="button"
                  className="pill"
                  onClick={() => onOpenRfq('Pomegranates')}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'var(--navy)',
                    color: 'var(--white)',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  Request quote
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="pill">Fresh fruit</span>
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '26px' }}>
                Pomegranates
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', flexGrow: 1 }}>
                Export-grade fruit packed in cartons.
              </p>
              <button
                type="button"
                className="link"
                onClick={() => onNavigate('/products/pomegranates')}
                style={{ alignSelf: 'flex-start' }}
              >
                View specification &rarr;
              </button>
            </div>

            {/* 2. Onions */}
            <div className="card" style={{ gap: '16px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img
                  src={IMAGES.onions}
                  alt="Red onions"
                  className="card-img"
                />
                <button
                  type="button"
                  className="pill"
                  onClick={() => onOpenRfq('Onions')}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'var(--navy)',
                    color: 'var(--white)',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  Request quote
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="pill">Fresh vegetable</span>
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '26px' }}>
                Onions
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', flexGrow: 1 }}>
                Red onions in mesh bags, October to April.
              </p>
              <button
                type="button"
                className="link"
                onClick={() => onNavigate('/products/onions')}
                style={{ alignSelf: 'flex-start' }}
              >
                View specification &rarr;
              </button>
            </div>

            {/* 3. Rice */}
            <div className="card" style={{ gap: '16px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img
                  src={IMAGES.rice}
                  alt="Rice grains"
                  className="card-img"
                />
                <button
                  type="button"
                  className="pill"
                  onClick={() => onOpenRfq('Rice')}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'var(--navy)',
                    color: 'var(--white)',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  Request quote
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="pill">Grain</span>
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '26px' }}>
                Rice
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', flexGrow: 1 }}>
                Basmati and non-basmati [Sample].
              </p>
              <button
                type="button"
                className="link"
                onClick={() => onNavigate('/products/rice')}
                style={{ alignSelf: 'flex-start' }}
              >
                View specification &rarr;
              </button>
            </div>

            {/* 4. Spices */}
            <div className="card" style={{ gap: '16px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img
                  src={IMAGES.spices}
                  alt="Indian spices"
                  className="card-img"
                />
                <button
                  type="button"
                  className="pill"
                  onClick={() => onOpenRfq('Spices')}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'var(--navy)',
                    color: 'var(--white)',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  Request quote
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="pill">Spice</span>
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '26px' }}>
                Spices
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', flexGrow: 1 }}>
                Whole and ground spices [Sample].
              </p>
              <button
                type="button"
                className="link"
                onClick={() => onNavigate('/products/spices')}
                style={{ alignSelf: 'flex-start' }}
              >
                View specification &rarr;
              </button>
            </div>

            {/* 5. Fresh fruits */}
            <div className="card" style={{ gap: '16px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img
                  src={IMAGES.fruits}
                  alt="Fresh fruits"
                  className="card-img"
                />
                <button
                  type="button"
                  className="pill"
                  onClick={() => onOpenRfq('Fresh fruits')}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'var(--navy)',
                    color: 'var(--white)',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  Request quote
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="pill">Fresh fruit</span>
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '26px' }}>
                Fresh fruits
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', flexGrow: 1 }}>
                Seasonal fruit for export [Sample].
              </p>
              <button
                type="button"
                className="link"
                onClick={() => onNavigate('/products/fresh-fruits')}
                style={{ alignSelf: 'flex-start' }}
              >
                View specification &rarr;
              </button>
            </div>

            {/* 6. Fresh vegetables */}
            <div className="card" style={{ gap: '16px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                <img
                  src={IMAGES.vegetables}
                  alt="Fresh vegetables"
                  className="card-img"
                />
                <button
                  type="button"
                  className="pill"
                  onClick={() => onOpenRfq('Fresh vegetables')}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'var(--navy)',
                    color: 'var(--white)',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  Request quote
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="pill">Fresh vegetable</span>
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '26px' }}>
                Fresh vegetables
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', flexGrow: 1 }}>
                Seasonal vegetables for export [Sample].
              </p>
              <button
                type="button"
                className="link"
                onClick={() => onNavigate('/products/fresh-vegetables')}
                style={{ alignSelf: 'flex-start' }}
              >
                View specification &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FEATURES (.section-white, swoosh decor). Three cards.
          ========================================================================= */}
      <section className="section-white" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Faint Outlined Logo Swoosh Behind at 6% Opacity (Desktop Only) */}
        <div
          className="desktop-only"
          style={{
            position: 'absolute',
            right: '-60px',
            top: '15%',
            width: '460px',
            height: '460px',
            backgroundImage: 'url(/vasudha-mark-olive.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            opacity: 0.06,
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Heading Block */}
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px auto' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>WHY VASUDHA</span>
            <h2 style={{ margin: '10px 0 0 0' }}>Built around three things</h2>
          </div>

          {/* Three .card items with .icon-circle */}
          <div
            className="grid-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '32px',
            }}
          >
            {/* Card 1: Sourcing */}
            <div className="card" style={{ gap: '16px' }}>
              <div className="icon-circle">
                <Sprout size={24} />
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '24px' }}>
                Sourcing
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', lineHeight: '24px' }}>
                Direct ties with regional farming belts in India.
              </p>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--muted)', lineHeight: '24px' }}>
                Reliable seasonal harvests packed right at harvest stations.
              </p>
            </div>

            {/* Card 2: Quality checks */}
            <div className="card" style={{ gap: '16px' }}>
              <div className="icon-circle">
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '24px' }}>
                Quality checks
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', lineHeight: '24px' }}>
                Calibrated sorting for count, size, colour and skin finish.
              </p>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--muted)', lineHeight: '24px' }}>
                Pre-loading verification before container doors are sealed.
              </p>
            </div>

            {/* Card 3: Shipping */}
            <div className="card" style={{ gap: '16px' }}>
              <div className="icon-circle">
                <Truck size={24} />
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '24px' }}>
                Shipping
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', lineHeight: '24px' }}>
                Reefer temperature control and timely port transport.
              </p>
              <p style={{ margin: 0, fontSize: '15px', color: 'var(--muted)', lineHeight: '24px' }}>
                Full shipping documentation dispatched to your clearing agent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. COUNTERS (.band-navy). Four .stat items.
          ========================================================================= */}
      <section className="band-navy" ref={counterRef} style={{ padding: '80px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            {/* Stat 1 */}
            <div
              className="stat"
              style={{
                alignItems: 'center',
                padding: '0 16px',
              }}
            >
              <div className="stat-number">
                {count1}<span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Years in export</div>
            </div>

            {/* Stat 2 */}
            <div
              className="stat"
              style={{
                alignItems: 'center',
                padding: '0 16px',
                borderLeft: '1px solid rgba(247, 245, 239, 0.15)',
              }}
            >
              <div className="stat-number">
                {count2}<span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Containers shipped</div>
            </div>

            {/* Stat 3 */}
            <div
              className="stat"
              style={{
                alignItems: 'center',
                padding: '0 16px',
                borderLeft: '1px solid rgba(247, 245, 239, 0.15)',
              }}
            >
              <div className="stat-number">
                {count3}<span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Countries served</div>
            </div>

            {/* Stat 4 */}
            <div
              className="stat"
              style={{
                alignItems: 'center',
                padding: '0 16px',
                borderLeft: '1px solid rgba(247, 245, 239, 0.15)',
              }}
            >
              <div className="stat-number">
                {count4}<span className="stat-plus">+</span>
              </div>
              <div className="stat-label">Buyers</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. HOW AN ORDER MOVES (.section ivory). Four .step items.
          ========================================================================= */}
      <section className="section">
        <div className="container">
          {/* Heading Block */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '56px',
            }}
          >
            <div>
              <span className="eyebrow">PROCESS</span>
              <h2 style={{ margin: '8px 0 0 0' }}>From enquiry to arrival</h2>
            </div>
            <button
              type="button"
              className="link"
              onClick={() => onNavigate('/about')}
            >
              See how we work &rarr;
            </button>
          </div>

          {/* Four .step items */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '32px',
              position: 'relative',
            }}
          >
            {/* Step 1 */}
            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">01</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Enquiry
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Submit commodity specifications, quantity and required destination port.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">02</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Specification
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Agree on size grading, packaging cartons and departure schedule.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">03</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Packing and loading
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Harvested produce sorted, packaged and loaded into export containers.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="step" style={{ flexDirection: 'column', gap: '16px' }}>
              <div className="step-number">04</div>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '20px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Documents and shipping
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)' }}>
                  Clearance certificates, bill of lading and tracking records issued.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. PRINCIPLES (.section-white). Split layout.
          ========================================================================= */}
      <section className="section-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            {/* Left (Sticky on desktop) */}
            <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span className="eyebrow">HOW WE WORK</span>

              <h2 style={{ margin: 0 }}>What importers can expect from us</h2>

              <p style={{ margin: 0, fontSize: '17px', lineHeight: '28px' }}>
                We believe export relationships run smoothest when specifications and expectations are transparent.
              </p>

              <div style={{ paddingTop: '8px' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => onNavigate('/contact')}
                >
                  Contact us
                </button>
              </div>
            </div>

            {/* Right: Four rows with large Newsreader numbers in olive */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Row 1 */}
              <div
                style={{
                  padding: '28px 0',
                  borderBottom: '1px solid var(--line)',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '36px',
                    color: 'var(--olive)',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  01
                </span>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '22px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    Clear specifications
                  </h3>
                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)' }}>
                    Accurate size calibration and packing specifications agreed before dispatch.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div
                style={{
                  padding: '28px 0',
                  borderBottom: '1px solid var(--line)',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '36px',
                    color: 'var(--olive)',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  02
                </span>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '22px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    Documents in order
                  </h3>
                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)' }}>
                    Complete export paperwork issued with every container without delays.
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div
                style={{
                  padding: '28px 0',
                  borderBottom: '1px solid var(--line)',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '36px',
                    color: 'var(--olive)',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  03
                </span>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '22px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    Quick replies
                  </h3>
                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)' }}>
                    Direct responses on container availability, pricing and vessel schedules.
                  </p>
                </div>
              </div>

              {/* Row 4 */}
              <div
                style={{
                  padding: '28px 0',
                  borderBottom: '1px solid var(--line)',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '36px',
                    color: 'var(--olive)',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  04
                </span>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '22px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    Honest updates
                  </h3>
                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)' }}>
                    Transparent communication on crop seasons, loading timelines and logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. VIDEO (.section ivory). 16:9 poster with 80px play button.
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              maxHeight: '560px',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
              backgroundColor: 'var(--bone)',
            }}
            onClick={() => setIsVideoModalOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Play video: From packing house to port"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsVideoModalOpen(true);
              }
            }}
          >
            {/* Poster Image */}
            <img
              src={IMAGES.containerLoading}
              alt="Shipping containers loaded in port yard"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* 30% Navy Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(16, 16, 79, 0.30)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* 80px White Circle Play Button */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--white)',
                  color: 'var(--navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-floating)',
                  transition: 'transform 240ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Play size={28} fill="currentColor" style={{ marginLeft: '4px' }} />
              </div>
            </div>

            {/* Bottom-Left Over the Image in White */}
            <div
              style={{
                position: 'absolute',
                bottom: '32px',
                left: '32px',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <span
                className="eyebrow"
                style={{
                  color: 'var(--olive-light)',
                }}
              >
                SEE HOW WE WORK
              </span>
              <h3 style={{ margin: 0, color: 'var(--ivory)', fontSize: '28px' }}>
                From packing house to port
              </h3>
            </div>
          </div>
        </div>
      </section>

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

            <div
              className="icon-circle"
              style={{ margin: '0 auto 16px auto', width: '64px', height: '64px' }}
            >
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

      {/* =========================================================================
          9. TESTIMONIALS (.section-bone). Three cards with slider controls.
          ========================================================================= */}
      <section className="section-bone">
        <div className="container">
          {/* Heading Block */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <div>
              <span className="eyebrow">BUYER FEEDBACK</span>
              <h2 style={{ margin: '8px 0 0 0' }}>What buyers say</h2>
            </div>

            {/* Slider Arrows */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className="btn-secondary"
                aria-label="Previous testimonial"
                style={{ width: '44px', height: '44px', padding: 0 }}
                onClick={() =>
                  setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                }
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="btn-secondary"
                aria-label="Next testimonial"
                style={{ width: '44px', height: '44px', padding: 0 }}
                onClick={() =>
                  setTestimonialIdx((prev) => (prev + 1) % testimonials.length)
                }
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Three white .card items */}
          <div
            className="grid-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  gap: '20px',
                  justifyContent: 'space-between',
                  border: idx === testimonialIdx ? '1px solid var(--olive)' : '1px solid var(--line)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '52px',
                      lineHeight: '36px',
                      color: 'var(--olive-light)',
                      marginBottom: '12px',
                    }}
                  >
                    &ldquo;
                  </div>

                  <p style={{ margin: 0, fontSize: '15px', lineHeight: '24px', color: 'var(--charcoal)' }}>
                    {t.quote}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--line)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--olive-tint)',
                        color: 'var(--olive-deep)',
                        fontWeight: 600,
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                        {t.meta}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. GALLERY PREVIEW (.section-white). Asymmetric mosaic of 5 images.
          ========================================================================= */}
      <section className="section-white">
        <div className="container">
          {/* Heading Block */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <div>
              <span className="eyebrow">GALLERY</span>
              <h2 style={{ margin: '8px 0 0 0' }}>From the field to the container</h2>
            </div>
            <button
              type="button"
              className="link"
              onClick={() => onNavigate('/gallery')}
            >
              See gallery &rarr;
            </button>
          </div>

          {/* Asymmetric Mosaic of 5 Rounded Images */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '20px',
            }}
          >
            {/* 1. Pomegranates in a crate (Span 7) */}
            <div
              style={{
                gridColumn: 'span 7',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16 / 10',
                backgroundColor: 'var(--bone)',
              }}
            >
              <img
                src={IMAGES.pomegranatesBox}
                alt="Pomegranates in an export crate"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* 2. Red onions being sorted by hand (Span 5) */}
            <div
              style={{
                gridColumn: 'span 5',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '16 / 10',
                backgroundColor: 'var(--bone)',
              }}
            >
              <img
                src={IMAGES.onionsMesh}
                alt="Red onions sorted in mesh bags"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* 3. Rice sacks (Span 4) */}
            <div
              style={{
                gridColumn: 'span 4',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4 / 3',
                backgroundColor: 'var(--bone)',
              }}
            >
              <img
                src={IMAGES.riceSack}
                alt="Rice sacks ready for container loading"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* 4. Spices in bowls (Span 4) */}
            <div
              style={{
                gridColumn: 'span 4',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4 / 3',
                backgroundColor: 'var(--bone)',
              }}
            >
              <img
                src={IMAGES.spices}
                alt="Spices in display bowls"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* 5. Container ship at port (Span 4) */}
            <div
              style={{
                gridColumn: 'span 4',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4 / 3',
                backgroundColor: 'var(--bone)',
              }}
            >
              <img
                src={IMAGES.oceanVessel}
                alt="Container ship at a port"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. FAQ (.section ivory). Two columns with 6 accordions.
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Contact Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span className="eyebrow">QUESTIONS</span>

              <h2 style={{ margin: 0 }}>Frequently asked questions</h2>

              <p style={{ margin: 0, fontSize: '16px', color: 'var(--charcoal)' }}>
                Can&apos;t find your answer? Ask our team.
              </p>

              <div
                className="card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  marginTop: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                  <Phone size={16} style={{ color: 'var(--olive)' }} />
                  <span>+91 00000 00000</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                  <Mail size={16} style={{ color: 'var(--olive)' }} />
                  <span>name@example.com</span>
                </div>
              </div>

              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: 'none' }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Six Accordion Items */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Item 1 (open by default) */}
              <details className="accordion" open>
                <summary>What do you export?</summary>
                <div className="accordion-body">
                  We export fresh pomegranates, red onions, basmati and non-basmati rice, whole and ground spices, fresh fruits and seasonal vegetables.
                </div>
              </details>

              {/* Item 2 */}
              <details className="accordion">
                <summary>How do I request a quote?</summary>
                <div className="accordion-body">
                  Click &ldquo;Request a quote&rdquo; or message us on WhatsApp with commodity, target tonnage and discharge port.
                </div>
              </details>

              {/* Item 3 */}
              <details className="accordion">
                <summary>Which payment terms do you accept?</summary>
                <div className="accordion-body">
                  We accept Letter of Credit (L/C at sight) and Telegraphic Transfer (T/T [Sample]) as mutually agreed in the sales contract.
                </div>
              </details>

              {/* Item 4 */}
              <details className="accordion">
                <summary>Which documents come with a shipment?</summary>
                <div className="accordion-body">
                  Every container includes commercial invoice, packing list, bill of lading, certificate of origin and phytosanitary certificate.
                </div>
              </details>

              {/* Item 5 */}
              <details className="accordion">
                <summary>What is the minimum order?</summary>
                <div className="accordion-body">
                  Our minimum order quantity is one 20ft or 40ft full container load (FCL [Sample]), depending on product perishability.
                </div>
              </details>

              {/* Item 6 */}
              <details className="accordion">
                <summary>Do you offer private labelling?</summary>
                <div className="accordion-body">
                  Yes, customised carton printing and bag markings are available for volume commitments [Sample].
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. CLOSING BAND (.band-navy). H2 + One sentence + Two buttons.
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
            We prepare container quotations with confirmed specifications and shipping schedules.
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

      {/* Sections 13 (Shared Footer) and 14 (Shared Floating Buttons) are rendered by App.tsx */}
    </div>
  );
};
