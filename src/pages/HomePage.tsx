import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  Lock,
  Globe,
  Award,
  Ship,
  Users,
  Sparkles,
  CircleDot,
  Layers,
  Package,
  Apple,
  Carrot,
  ShieldCheck,
  UserCheck,
  FileCheck,
  Boxes,
  KeyRound,
  Quote,
} from 'lucide-react';
import { IMAGES } from '../data/images';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

const WhatsAppInlineIcon: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = 'var(--navy)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ display: 'block' }}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.66 20.15 9.3 19.8 8.1 19.14L7.81 18.97L4.69 19.79L5.52 16.75L5.33 16.45C4.6 15.29 4.22 13.93 4.22 11.91C4.22 7.37 7.51 3.67 12.05 3.67ZM8.94 7.42C8.74 7.42 8.54 7.43 8.36 7.74C8.18 8.05 7.67 8.53 7.67 9.51C7.67 10.49 8.38 11.43 8.48 11.57C8.58 11.71 9.87 13.7 11.87 14.56C13.53 15.28 13.87 15.13 14.23 15.1C14.59 15.06 15.39 14.62 15.55 14.16C15.71 13.7 15.71 13.31 15.66 13.23C15.61 13.15 15.48 13.1 15.28 13C15.08 12.9 14.09 12.41 13.91 12.34C13.73 12.27 13.6 12.24 13.47 12.44C13.34 12.64 12.96 13.1 12.84 13.23C12.72 13.36 12.6 13.38 12.4 13.28C12.2 13.18 11.56 12.97 10.8 12.3C10.21 11.78 9.81 11.13 9.69 10.93C9.57 10.73 9.68 10.62 9.78 10.52C9.87 10.43 9.98 10.29 10.08 10.17C10.18 10.05 10.22 9.96 10.29 9.83C10.36 9.7 10.32 9.58 10.27 9.48C10.22 9.38 9.73 8.18 9.53 7.68C9.33 7.2 9.13 7.26 8.97 7.25L8.94 7.42Z" />
  </svg>
);

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenRfq }) => {
  // ---------------------------------------------------------------------------
  // 1. HERO SLIDER STATE & LOGIC
  // ---------------------------------------------------------------------------
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHoveredHero, setIsHoveredHero] = useState(false);

  const heroSlides = [
    {
      id: 'pomegranates',
      product: 'Pomegranates',
      h1: 'Pomegranates, packed and shipped by the container.',
      sub: 'Farm-direct Indian fresh pomegranates exported by the container to global importers and wholesalers.',
      img: IMAGES['H1-hero-pomegranate-wide'] || IMAGES.heroPomegranateWide || IMAGES.pomegranatesCut,
      color: 'var(--crimson)',
      badgeClass: 'badge-crimson',
      icon: Sparkles,
      season: 'Oct to Feb',
      packing: 'Cartons',
      minOrder: '1 container (FCL)',
      link: '/products/pomegranates',
    },
    {
      id: 'onions',
      product: 'Onions',
      h1: 'Red onions for container shipments, October to April.',
      sub: 'Graded Nashik red onions packed in ventilated mesh bags for optimal maritime transit.',
      img: IMAGES['H2-hero-onions-wide'] || IMAGES.heroOnionsWide || IMAGES.onions,
      color: 'var(--plum)',
      badgeClass: 'badge-plum',
      icon: CircleDot,
      season: 'Oct to Apr',
      packing: 'Mesh bags',
      minOrder: '1 container (FCL)',
      link: '/products/onions',
    },
    {
      id: 'rice',
      product: 'Rice',
      h1: 'Basmati and non-basmati rice, shipped in bulk.',
      sub: 'Aged long-grain aromatic Basmati and premium non-Basmati grades in customized export sacks.',
      img: IMAGES['H3-hero-rice-wide'] || IMAGES.heroRiceWide || IMAGES.riceGrains,
      color: 'var(--saffron)',
      badgeClass: 'badge-saffron',
      icon: Layers,
      season: 'Year-round',
      packing: 'Woven sacks',
      minOrder: '1 container (FCL)',
      link: '/products/rice',
    },
  ];

  useEffect(() => {
    if (isHoveredHero) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isHoveredHero, heroSlides.length]);

  const currentSlide = heroSlides[currentSlideIndex];
  const CurrentHeroIcon = currentSlide.icon;

  // ---------------------------------------------------------------------------
  // 2. STATS COUNTER COUNT-UP ONCE
  // ---------------------------------------------------------------------------
  const [statsCounted, setStatsCounted] = useState(false);
  const [statYears, setStatYears] = useState(0);
  const [statContainers, setStatContainers] = useState(0);
  const [statCountries, setStatCountries] = useState(0);
  const [statBuyers, setStatBuyers] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsCounted) {
          setStatsCounted(true);
          const duration = 1600;
          const startTime = performance.now();

          const updateNumbers = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            setStatYears(Math.floor(ease * 10));
            setStatContainers(Math.floor(ease * 100));
            setStatCountries(Math.floor(ease * 15));
            setStatBuyers(Math.floor(ease * 50));

            if (progress < 1) {
              requestAnimationFrame(updateNumbers);
            } else {
              setStatYears(10);
              setStatContainers(100);
              setStatCountries(15);
              setStatBuyers(50);
            }
          };

          requestAnimationFrame(updateNumbers);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsCounted]);

  // ---------------------------------------------------------------------------
  // 4. WHY VASUDHA - SCROLL-DRAWING ROUTE LINE
  // ---------------------------------------------------------------------------
  const routeSectionRef = useRef<HTMLElement>(null);
  const [routeProgress, setRouteProgress] = useState(0.2);

  useEffect(() => {
    const handleScroll = () => {
      if (!routeSectionRef.current) return;
      const rect = routeSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const total = rect.height;
        const visible = windowHeight - rect.top;
        const ratio = Math.max(0, Math.min(1, visible / (total + windowHeight * 0.2)));
        setRouteProgress(ratio);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ---------------------------------------------------------------------------
  // 8. QUOTE FORM STATE & HANDLERS
  // ---------------------------------------------------------------------------
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneCode: '+971',
    mobile: '',
    product: '',
    quantityNum: '',
    quantityUnit: 'containers',
    destinationCountry: '',
    companyName: '',
    email: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  // ---------------------------------------------------------------------------
  // 5. MARKETS DATA (Two drift rows)
  // ---------------------------------------------------------------------------
  const marketsRow1 = ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'];
  const marketsRow2 = ['Bangladesh', 'Sri Lanka', 'Malaysia', 'Singapore', 'Kenya', 'Tanzania'];

  return (
    <div className="home-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. HERO (full-bleed, min-height 92vh, under transparent header)
          ===================================================================== */}
      <section
        className="home-hero-fullbleed"
        onMouseEnter={() => setIsHoveredHero(true)}
        onMouseLeave={() => setIsHoveredHero(false)}
        style={{
          position: 'relative',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: '120px',
          paddingBottom: '80px',
          backgroundColor: 'var(--navy-deep)',
        }}
      >
        {/* Full-bleed Landscape Photo Slides (cross-fade 900ms + slow zoom 8s) */}
        {heroSlides.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div
              key={slide.id}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isActive ? 1 : 0,
                transition: 'opacity 900ms ease-in-out',
                pointerEvents: 'none',
                overflow: 'hidden',
                zIndex: 0,
              }}
            >
              <img
                src={slide.img}
                alt={slide.product}
                className={isActive ? 'hero-slide-zoom' : ''}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          );
        })}

        {/* Navy Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(10, 10, 56, 0.94) 0%, rgba(16, 16, 79, 0.85) 52%, rgba(13, 115, 119, 0.42) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Hero Content Container */}
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Eyebrow + H1 + Sub-line + Buttons + Ticks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '620px' }}>
              <div>
                <span className="eyebrow eyebrow-glass">
                  {currentSlide.product}
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(36px, 5.2vw, 60px)',
                  fontWeight: 800,
                  lineHeight: '1.14',
                  color: '#FFFFFF',
                  margin: 0,
                  transition: 'opacity 300ms ease',
                }}
              >
                {currentSlide.h1}
              </h1>

              <p
                className="sub-line"
                style={{
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: 'rgba(255, 255, 255, 0.88)',
                  margin: 0,
                  maxWidth: '540px',
                }}
              >
                {currentSlide.sub}
              </p>

              {/* Action Buttons: .btn-light + glass outline button */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                  marginTop: '10px',
                }}
              >
                <button
                  type="button"
                  className="btn-light"
                  onClick={() => onOpenRfq(currentSlide.product)}
                >
                  <span>Request a quote</span>
                  <ArrowRight size={17} />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass-outline"
                >
                  <WhatsAppInlineIcon size={18} color="#FFFFFF" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Three White Ticks Below Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                  marginTop: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.16)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                  <span style={{ color: 'var(--leaf-tint)', display: 'flex' }}>
                    <Check size={16} strokeWidth={2.8} />
                  </span>
                  <span>Clear specifications</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                  <span style={{ color: 'var(--leaf-tint)', display: 'flex' }}>
                    <Check size={16} strokeWidth={2.8} />
                  </span>
                  <span>Documents with every shipment</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                  <span style={{ color: 'var(--leaf-tint)', display: 'flex' }}>
                    <Check size={16} strokeWidth={2.8} />
                  </span>
                  <span>One point of contact</span>
                </div>
              </div>
            </div>

            {/* Right Column: GLASS KEY-FACTS CARD (width 400px) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                className="glass-keyfacts-card"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  padding: '28px',
                }}
              >
                {/* Top Row: 48px circle in product colour with white icon + product name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: currentSlide.color,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-md)',
                      flexShrink: 0,
                    }}
                  >
                    <CurrentHeroIcon size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                      Selected Produce
                    </div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 800, color: '#FFFFFF' }}>
                      {currentSlide.product}
                    </div>
                  </div>
                </div>

                {/* Three small boxes in a row (white at 12%) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      borderRadius: '12px',
                      padding: '12px 10px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px' }}>Season</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>{currentSlide.season}</div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      borderRadius: '12px',
                      padding: '12px 10px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px' }}>Packing</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>{currentSlide.packing}</div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      borderRadius: '12px',
                      padding: '12px 10px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px' }}>Min Order</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>1 container</div>
                  </div>
                </div>

                {/* Full-width white button */}
                <button
                  type="button"
                  className="btn-light"
                  onClick={() => onNavigate(currentSlide.link)}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>View product details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom-left Slide Progress Dots */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '48px',
            }}
          >
            {heroSlides.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlideIndex(idx)}
                  style={{
                    width: isActive ? '32px' : '9px',
                    height: '9px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.35)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={`Go to slide ${idx + 1}: ${slide.product}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. STATS BAND (gradient band directly under hero)
          Four numbers with thin white 20% dividers
          ===================================================================== */}
      <section className="band-stats" ref={statsRef} style={{ paddingTop: '64px', paddingBottom: '48px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              alignItems: 'center',
            }}
          >
            <div
              className="stat"
              style={{
                padding: '16px 24px',
                borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <div className="stat-number">
                <span>{statYears}</span>
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">
                <Award className="stat-icon" />
                <span>Years in export</span>
              </div>
            </div>

            <div
              className="stat"
              style={{
                padding: '16px 24px',
                borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <div className="stat-number">
                <span>{statContainers}</span>
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">
                <Ship className="stat-icon" />
                <span>Containers shipped</span>
              </div>
            </div>

            <div
              className="stat"
              style={{
                padding: '16px 24px',
                borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <div className="stat-number">
                <span>{statCountries}</span>
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">
                <Globe className="stat-icon" />
                <span>Countries served</span>
              </div>
            </div>

            <div
              className="stat"
              style={{
                padding: '16px 24px',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <div className="stat-number">
                <span>{statBuyers}</span>
                <span className="stat-plus">+</span>
              </div>
              <div className="stat-label">
                <Users className="stat-icon" />
                <span>Buyers</span>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* =====================================================================
          3. WHAT WE EXPORT (mist with two glows)
          Intro + Grid 3 x 2 of six .card items with overlapping icon badge
          ===================================================================== */}
      <section className="section section-mist has-glows">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-plum-tr" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">What we offer</span>
            <h2>The products we <span className="text-highlight-leaf">export</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Specifications, packing and seasonality for everything we export.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '36px',
            }}
          >
            {/* 1. Pomegranates (Crimson) */}
            <div className="card">
              <div className="card-img-wrap" style={{ position: 'relative', overflow: 'visible' }}>
                <img src={IMAGES.pomegranatesCut} alt="Pomegranates" className="card-img" />
                <div className="card-icon-badge badge-crimson" title="Pomegranates">
                  <Sparkles size={22} />
                </div>
              </div>
              <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                <div>
                  <span className="eyebrow" style={{ fontSize: '11px', padding: '4px 10px' }}>
                    Fresh fruit
                  </span>
                </div>
                <h3>Pomegranates</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', flexGrow: 1 }}>
                  Export-grade fruit packed in cartons.
                </p>
                <div style={{ marginTop: '12px' }}>
                  <button
                    type="button"
                    className="link"
                    onClick={() => onNavigate('/products/pomegranates')}
                    style={{ background: 'none', border: 'none', padding: 0, color: 'var(--crimson)' }}
                  >
                    <span>Explore</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Onions (Plum) */}
            <div className="card">
              <div className="card-img-wrap" style={{ position: 'relative', overflow: 'visible' }}>
                <img src={IMAGES.onionsMesh} alt="Red onions in mesh bags" className="card-img" />
                <div className="card-icon-badge badge-plum" title="Onions">
                  <CircleDot size={22} />
                </div>
              </div>
              <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                <div>
                  <span className="eyebrow" style={{ fontSize: '11px', padding: '4px 10px' }}>
                    Fresh vegetable
                  </span>
                </div>
                <h3>Onions</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', flexGrow: 1 }}>
                  Red onions in mesh bags, October to April.
                </p>
                <div style={{ marginTop: '12px' }}>
                  <button
                    type="button"
                    className="link"
                    onClick={() => onNavigate('/products/onions')}
                    style={{ background: 'none', border: 'none', padding: 0, color: 'var(--plum)' }}
                  >
                    <span>Explore</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Rice (Saffron) */}
            <div className="card">
              <div className="card-img-wrap" style={{ position: 'relative', overflow: 'visible' }}>
                <img src={IMAGES.riceGrains} alt="Rice grains in scoop" className="card-img" />
                <div className="card-icon-badge badge-saffron" title="Rice">
                  <Layers size={22} />
                </div>
              </div>
              <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                <div>
                  <span className="eyebrow" style={{ fontSize: '11px', padding: '4px 10px' }}>
                    Grain
                  </span>
                </div>
                <h3>Rice</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', flexGrow: 1 }}>
                  Basmati and non-basmati grades.
                </p>
                <div style={{ marginTop: '12px' }}>
                  <button
                    type="button"
                    className="link"
                    onClick={() => onNavigate('/products/rice')}
                    style={{ background: 'none', border: 'none', padding: 0, color: 'var(--saffron)' }}
                  >
                    <span>Explore</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* 4. Spices (Blue) */}
            <div className="card">
              <div className="card-img-wrap" style={{ position: 'relative', overflow: 'visible' }}>
                <img src={IMAGES.spices} alt="Whole and ground spices" className="card-img" />
                <div className="card-icon-badge badge-blue" title="Spices">
                  <Package size={22} />
                </div>
              </div>
              <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                <div>
                  <span className="eyebrow" style={{ fontSize: '11px', padding: '4px 10px' }}>
                    Spice
                  </span>
                </div>
                <h3>Spices</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', flexGrow: 1 }}>
                  Whole and ground spices.
                </p>
                <div style={{ marginTop: '12px' }}>
                  <button
                    type="button"
                    className="link"
                    onClick={() => onNavigate('/products/spices')}
                    style={{ background: 'none', border: 'none', padding: 0, color: 'var(--blue)' }}
                  >
                    <span>Explore</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* 5. Fresh fruits (Teal) */}
            <div className="card">
              <div className="card-img-wrap" style={{ position: 'relative', overflow: 'visible' }}>
                <img src={IMAGES.fruits} alt="Fresh seasonal fruits" className="card-img" />
                <div className="card-icon-badge badge-teal" title="Fresh fruits">
                  <Apple size={22} />
                </div>
              </div>
              <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                <div>
                  <span className="eyebrow" style={{ fontSize: '11px', padding: '4px 10px' }}>
                    Fresh fruit
                  </span>
                </div>
                <h3>Fresh fruits</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', flexGrow: 1 }}>
                  Seasonal fresh fruit for export.
                </p>
                <div style={{ marginTop: '12px' }}>
                  <button
                    type="button"
                    className="link"
                    onClick={() => onNavigate('/products/fresh-fruits')}
                    style={{ background: 'none', border: 'none', padding: 0, color: 'var(--teal)' }}
                  >
                    <span>Explore</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* 6. Fresh vegetables (Leaf) */}
            <div className="card">
              <div className="card-img-wrap" style={{ position: 'relative', overflow: 'visible' }}>
                <img src={IMAGES.vegetables} alt="Fresh seasonal vegetables" className="card-img" />
                <div className="card-icon-badge badge-leaf" title="Fresh vegetables">
                  <Carrot size={22} />
                </div>
              </div>
              <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                <div>
                  <span className="eyebrow" style={{ fontSize: '11px', padding: '4px 10px' }}>
                    Fresh vegetable
                  </span>
                </div>
                <h3>Fresh vegetables</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', flexGrow: 1 }}>
                  Seasonal fresh vegetables for export.
                </p>
                <div style={{ marginTop: '12px' }}>
                  <button
                    type="button"
                    className="link"
                    onClick={() => onNavigate('/products/fresh-vegetables')}
                    style={{ background: 'none', border: 'none', padding: 0, color: 'var(--leaf)' }}
                  >
                    <span>Explore</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. WHY VASUDHA (white with two glows)
          Route diagram: 5 icon circles in sequence colours joined by curved dashed line
          ===================================================================== */}
      <section className="section section-white has-glows" ref={routeSectionRef}>
        <div className="glow-orb glow-blue-br" aria-hidden="true" />
        <div className="glow-orb glow-teal-bl" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">Why Vasudha</span>
            <h2>5 reasons buyers <span className="text-highlight-blue">choose us</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Consistent export standards from Indian packhouses to your port.</p>
          </div>

          {/* Desktop Route Diagram (Horizontal curved zig-zag with animated drawing line) */}
          <div
            className="route-diagram-desktop"
            style={{
              position: 'relative',
              marginTop: '64px',
              padding: '60px 0',
              display: 'block',
            }}
          >
            {/* SVG Curved Shipping Route Line */}
            <svg
              viewBox="0 0 1000 240"
              fill="none"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'visible',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            >
              {/* Background faint guide track */}
              <path
                d="M 60 120 C 180 30, 240 210, 360 120 C 480 30, 540 210, 660 120 C 760 40, 840 200, 940 120"
                stroke="var(--line)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
              {/* Foreground animated route path */}
              <path
                d="M 60 120 C 180 30, 240 210, 360 120 C 480 30, 540 210, 660 120 C 760 40, 840 200, 940 120"
                stroke="var(--leaf)"
                strokeWidth="3"
                strokeDasharray="8 8"
                style={{
                  strokeDashoffset: (1 - routeProgress) * 600,
                  transition: 'stroke-dashoffset 0.2s ease-out',
                }}
              />
              {/* Start Pin */}
              <circle cx="60" cy="120" r="6" fill="var(--leaf)" />
              {/* End Pin */}
              <circle cx="940" cy="120" r="6" fill="var(--plum)" />
            </svg>

            {/* Five Route Items Placed in Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '16px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Item 1: Leaf (Above) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ minHeight: '80px', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '17px', margin: '0 0 4px 0' }}>One point of contact</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, maxWidth: '170px' }}>
                    Direct communication with experienced trade managers.
                  </p>
                </div>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--leaf)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #FFFFFF',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <UserCheck size={28} />
                </div>
                <div style={{ minHeight: '80px', marginTop: '16px' }} />
              </div>

              {/* Item 2: Blue (Below) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ minHeight: '80px', marginBottom: '16px' }} />
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--blue)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #FFFFFF',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <ShieldCheck size={28} />
                </div>
                <div style={{ minHeight: '80px', marginTop: '16px' }}>
                  <h3 style={{ fontSize: '17px', margin: '0 0 4px 0' }}>Clear specifications</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, maxWidth: '170px' }}>
                    Accurate size, grade and tolerance parameters upfront.
                  </p>
                </div>
              </div>

              {/* Item 3: Teal (Above) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ minHeight: '80px', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '17px', margin: '0 0 4px 0' }}>Documents in order</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, maxWidth: '170px' }}>
                    Draft phytosanitary and BL sent before vessel sails.
                  </p>
                </div>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--teal)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #FFFFFF',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <FileCheck size={28} />
                </div>
                <div style={{ minHeight: '80px', marginTop: '16px' }} />
              </div>

              {/* Item 4: Saffron (Below) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ minHeight: '80px', marginBottom: '16px' }} />
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--saffron)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #FFFFFF',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <Boxes size={28} />
                </div>
                <div style={{ minHeight: '80px', marginTop: '16px' }}>
                  <h3 style={{ fontSize: '17px', margin: '0 0 4px 0' }}>Careful packing</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, maxWidth: '170px' }}>
                    Calibrated sorting and export-grade protective cartons.
                  </p>
                </div>
              </div>

              {/* Item 5: Plum (Above) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ minHeight: '80px', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '17px', margin: '0 0 4px 0' }}>Private dealings</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, maxWidth: '170px' }}>
                    Confidential commercial trade and KYC compliance.
                  </p>
                </div>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--plum)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #FFFFFF',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <KeyRound size={28} />
                </div>
                <div style={{ minHeight: '80px', marginTop: '16px' }} />
              </div>
            </div>
          </div>

          {/* Mobile Route Diagram (Vertical list with vertical dashed line) */}
          <div className="route-diagram-mobile" style={{ position: 'relative', marginTop: '40px', padding: '16px 0 16px 12px' }}>
            {/* Vertical dashed line */}
            <div
              style={{
                position: 'absolute',
                top: '36px',
                bottom: '36px',
                left: '43px',
                width: '2px',
                borderLeft: '2.5px dashed var(--leaf)',
                zIndex: 0,
              }}
            />
            {/* Start Pin */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '39px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--leaf)',
                zIndex: 1,
              }}
            />
            {/* End Pin */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '39px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--plum)',
                zIndex: 1,
              }}
            />

            {/* 5 Mobile Route Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', zIndex: 2 }}>
              {/* Item 1 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    minWidth: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--leaf)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #FFFFFF',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <UserCheck size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', margin: '4px 0 4px 0' }}>One point of contact</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                    Direct communication with experienced trade managers.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    minWidth: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--blue)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #FFFFFF',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', margin: '4px 0 4px 0' }}>Clear specifications</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                    Accurate size, grade and tolerance parameters upfront.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    minWidth: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--teal)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #FFFFFF',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <FileCheck size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', margin: '4px 0 4px 0' }}>Documents in order</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                    Draft phytosanitary and BL sent before vessel sails.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    minWidth: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--saffron)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #FFFFFF',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <Boxes size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', margin: '4px 0 4px 0' }}>Careful packing</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                    Calibrated sorting and export-grade protective cartons.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    minWidth: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--plum)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #FFFFFF',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <KeyRound size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', margin: '4px 0 4px 0' }}>Private dealings</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                    Confidential commercial trade and KYC compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. MARKETS (mist)
          Two rows of white chips with globe icon drifting in opposite directions
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Markets</span>
            <h2>Where we <span className="text-highlight-leaf">ship</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">One enquiry, shipped to the port that suits you.</p>

            {/* Centred green-tint pill */}
            <div style={{ marginTop: '10px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--leaf-tint)',
                  color: 'var(--leaf)',
                  padding: '6px 18px',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 700,
                  fontSize: '14px',
                }}
              >
                One enquiry &gt; 15+ destination markets
              </span>
            </div>
          </div>
        </div>

        {/* Two drifting rows (ONLY moving row on site; ~70s loop, pause on hover) */}
        <div className="marquee-container" style={{ marginTop: '36px' }}>
          {/* Row 1: Left drift */}
          <div className="marquee-track-left">
            {[...marketsRow1, ...marketsRow1, ...marketsRow1, ...marketsRow1].map((market, idx) => (
              <div
                key={`m1-${idx}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'var(--white)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-pill)',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Globe size={18} style={{ color: 'var(--leaf)' }} />
                <span>{market}</span>
              </div>
            ))}
          </div>

          {/* Row 2: Right drift */}
          <div className="marquee-track-right" style={{ marginTop: '16px' }}>
            {[...marketsRow2, ...marketsRow2, ...marketsRow2, ...marketsRow2].map((market, idx) => (
              <div
                key={`m2-${idx}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'var(--white)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-pill)',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Globe size={18} style={{ color: 'var(--blue)' }} />
                <span>{market}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container" style={{ marginTop: '28px', textAlign: 'center' }}>
          <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Regular container shipments worldwide</span>
        </div>
      </section>

      {/* =====================================================================
          6. HOW IT WORKS (white with two glows)
          Five equal .card items in a row joined by thin dashed connector
          ===================================================================== */}
      <section className="section section-white has-glows">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">How it works</span>
            <h2>Your container in 5 simple <span className="text-highlight-leaf">steps</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">From first enquiry to arrival, exactly what to expect.</p>
          </div>

          {/* Five equal cards with connector */}
          <div className="steps-track" style={{ marginTop: '48px' }}>
            <div className="step-dashed-connector" />

            {/* Step 1: Leaf */}
            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-1">1</div>
                <span className="step-time-badge">1 min</span>
              </div>
              <div className="step-title">Enquiry</div>
              <p className="step-desc">Share your requirements, destination port and requested schedule.</p>
            </div>

            {/* Step 2: Blue */}
            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-2">2</div>
                <span className="step-time-badge">Same day</span>
              </div>
              <div className="step-title">Specification</div>
              <p className="step-desc">Receive commercial specs, packing options and indicative rates.</p>
            </div>

            {/* Step 3: Teal */}
            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-3">3</div>
                <span className="step-time-badge">3-5 days</span>
              </div>
              <div className="step-title">Packing and loading</div>
              <p className="step-desc">Produce sorted, calibrated and loaded into reefer containers.</p>
            </div>

            {/* Step 4: Saffron */}
            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-4">4</div>
                <span className="step-time-badge">1-2 days</span>
              </div>
              <div className="step-title">Documents</div>
              <p className="step-desc">Phytosanitary, certificate of origin and invoice drafts prepared.</p>
            </div>

            {/* Step 5: Plum */}
            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-5">5</div>
                <span className="step-time-badge">Transit ETA</span>
              </div>
              <div className="step-title">Shipping and arrival</div>
              <p className="step-desc">Container tracked continuously from Indian port to discharge.</p>
            </div>
          </div>

          {/* Centred line with 2 action buttons */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '64px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--navy)' }}>
              It all starts with a one-minute enquiry.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={() => onOpenRfq()}
              >
                <span>Start step 1 now</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppInlineIcon size={18} />
                <span>Talk to our team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. BUYER FEEDBACK (mist)
          Intro + Three white .card items (no star ratings)
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Buyer feedback</span>
            <h2>What buyers <span className="text-highlight-blue">say</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Verified feedback from international buyers and wholesalers.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '32px',
            }}
          >
            {[
              {
                quote: 'Consistently calibrated pomegranates and prompt arrival documents for our Dubai wholesale market distribution.',
                name: 'T. Al-Mansoor',
                role: 'Procurement Director',
                location: 'Dubai, UAE',
                initials: 'TA',
                ring: 'var(--crimson-tint)',
              },
              {
                quote: 'Our Nashik red onion containers arrived with crisp skins, minimal wastage, and precise moisture tolerances.',
                name: 'K. S. Raman',
                role: 'Commercial Importer',
                location: 'Colombo, Sri Lanka',
                initials: 'KR',
                ring: 'var(--plum-tint)',
              },
              {
                quote: 'Straightforward container contracting and reliable non-basmati rice quality with full certificate compliance.',
                name: 'M. Zahid',
                role: 'General Merchant',
                location: 'Chittagong, Bangladesh',
                initials: 'MZ',
                ring: 'var(--saffron-tint)',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  backgroundColor: 'var(--white)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '36px',
                }}
              >
                <div style={{ color: 'var(--leaf)', opacity: 0.85 }}>
                  <Quote size={32} />
                </div>
                <p style={{ fontSize: '16px', lineHeight: '26px', color: 'var(--body)', flexGrow: 1, margin: 0 }}>
                  &ldquo;{item.quote}&rdquo;
                </p>

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
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--mist)',
                        border: `3px solid ${item.ring}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: 'var(--navy)',
                      }}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>{item.name}</div>
                      <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{item.role}, {item.location}</div>
                    </div>
                  </div>

                  <span className="eyebrow" style={{ fontSize: '11px', padding: '3px 8px' }}>
                    Verified Buyer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. QUOTE FORM (light mist with two glows + large white form card)
          ===================================================================== */}
      <section className="section-quote-light has-glows" id="quote-section">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Eyebrow pill + H2 + 4 leaf ticks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <span className="eyebrow">
                  Get started
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: '1.2', color: 'var(--navy)', margin: 0 }}>
                Request a quote in a <span className="text-highlight-leaf">minute</span>. We&apos;ll take it from there.
              </h2>
              <div className="section-intro-bar" style={{ margin: '4px 0 0 0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                  <span style={{ color: 'var(--leaf)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>Free enquiry, no obligation</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--leaf)' }}>
                  <span style={{ color: 'var(--leaf)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>Specification and indicative price from our team</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--leaf)' }}>
                  <span style={{ color: 'var(--leaf)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>One contact person from start to finish</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--leaf)' }}>
                  <span style={{ color: 'var(--leaf)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>Your details stay private</span>
                </div>
              </div>
            </div>

            {/* Right Column: Large White Form Card with top gradient bar */}
            <div className="quote-white-card" style={{ position: 'relative' }}>
              <div className="form-card-topbar" />

              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 16px' }}>
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
                    <Check size={32} strokeWidth={3} />
                  </div>
                  <h3 style={{ marginBottom: '8px' }}>Thank you. Your request is with our team.</h3>
                  <p style={{ color: 'var(--body)', fontSize: '16px', marginBottom: '24px' }}>
                    Our commercial specialists will review your parameters and follow up shortly with specifications and indicative rates.
                  </p>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneCode: '+971',
                        mobile: '',
                        product: '',
                        quantityNum: '',
                        quantityUnit: 'containers',
                        destinationCountry: '',
                        companyName: '',
                        email: '',
                      });
                    }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '24px' }}>Tell us what you need.</h3>

                  {/* 1. Full name* */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Full name <span style={{ color: 'var(--crimson)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      className="form-input-v4"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-input)',
                        border: '1px solid var(--line)',
                        fontSize: '15px',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* 2. WhatsApp / mobile* with country-code selector */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      WhatsApp / Mobile <span style={{ color: 'var(--crimson)' }}>*</span>
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '8px' }}>
                      <select
                        name="phoneCode"
                        value={formData.phoneCode}
                        onChange={handleFormChange}
                        className="form-select-v4"
                        style={{
                          padding: '12px 10px',
                          borderRadius: 'var(--radius-input)',
                          border: '1px solid var(--line)',
                          fontSize: '14px',
                          backgroundColor: 'var(--white)',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="+971">+971 (UAE)</option>
                        <option value="+966">+966 (KSA)</option>
                        <option value="+968">+968 (OM)</option>
                        <option value="+974">+974 (QA)</option>
                        <option value="+965">+965 (KW)</option>
                        <option value="+973">+973 (BH)</option>
                        <option value="+880">+880 (BD)</option>
                        <option value="+94">+94 (LK)</option>
                        <option value="+60">+60 (MY)</option>
                        <option value="+65">+65 (SG)</option>
                        <option value="+254">+254 (KE)</option>
                        <option value="+91">+91 (IN)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+1">+1 (US)</option>
                      </select>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        placeholder="Mobile number"
                        value={formData.mobile}
                        onChange={handleFormChange}
                        className="form-input-v4"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-input)',
                          border: '1px solid var(--line)',
                          fontSize: '15px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  {/* 3. Product* (styled select, 6 products) */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Product <span style={{ color: 'var(--crimson)' }}>*</span>
                    </label>
                    <select
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleFormChange}
                      className="form-select-v4"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-input)',
                        border: '1px solid var(--line)',
                        fontSize: '15px',
                        backgroundColor: 'var(--white)',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                      }}
                    >
                      <option value="">Select produce...</option>
                      <option value="Pomegranates">Pomegranates</option>
                      <option value="Onions">Onions</option>
                      <option value="Rice">Rice</option>
                      <option value="Spices">Spices</option>
                      <option value="Fresh fruits">Fresh fruits</option>
                      <option value="Fresh vegetables">Fresh vegetables</option>
                    </select>
                  </div>

                  {/* 4. Quantity* (number + unit selector) */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Quantity <span style={{ color: 'var(--crimson)' }}>*</span>
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: '8px' }}>
                      <input
                        type="number"
                        name="quantityNum"
                        required
                        min="1"
                        placeholder="e.g. 2"
                        value={formData.quantityNum}
                        onChange={handleFormChange}
                        className="form-input-v4"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-input)',
                          border: '1px solid var(--line)',
                          fontSize: '15px',
                          boxSizing: 'border-box',
                        }}
                      />
                      <select
                        name="quantityUnit"
                        value={formData.quantityUnit}
                        onChange={handleFormChange}
                        className="form-select-v4"
                        style={{
                          padding: '12px 10px',
                          borderRadius: 'var(--radius-input)',
                          border: '1px solid var(--line)',
                          fontSize: '14px',
                          backgroundColor: 'var(--white)',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="containers">containers (FCL)</option>
                        <option value="tonnes">tonnes (MT)</option>
                      </select>
                    </div>
                  </div>

                  {/* 5. Destination country* */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Destination country <span style={{ color: 'var(--crimson)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="destinationCountry"
                      required
                      placeholder="e.g. UAE, Saudi Arabia, Malaysia"
                      value={formData.destinationCountry}
                      onChange={handleFormChange}
                      className="form-input-v4"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-input)',
                        border: '1px solid var(--line)',
                        fontSize: '15px',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* 6. Company name (optional) & 7. Email (optional) */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Company name <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 400 }}>(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Your company"
                        value={formData.companyName}
                        onChange={handleFormChange}
                        className="form-input-v4"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-input)',
                          border: '1px solid var(--line)',
                          fontSize: '15px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Email <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 400 }}>(optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="form-input-v4"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-input)',
                          border: '1px solid var(--line)',
                          fontSize: '15px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  {/* Full-width primary CTA */}
                  <div style={{ marginTop: '8px' }}>
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>{formSubmitting ? 'Sending request...' : 'Get my quote'}</span>
                      <ArrowRight size={17} />
                    </button>
                  </div>

                  {/* Privacy line with lock icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '12px',
                      color: 'var(--muted)',
                      marginTop: '4px',
                    }}
                  >
                    <Lock size={13} style={{ color: 'var(--leaf)' }} />
                    <span>Your details stay private. No spam, ever.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. REACH US (white)
          Intro + Two columns: 3 stacked white cards + rounded map placeholder
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro left">
            <span className="eyebrow">Reach us</span>
            <h2>Talk to a real <span className="text-highlight-leaf">person</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Pick any channel. Our team replies fast.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '40px',
              alignItems: 'stretch',
              marginTop: '40px',
            }}
          >
            {/* Left Column: Three stacked white cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* WhatsApp in leaf */}
              <div
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 28px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div
                    className="icon-circle"
                    style={{
                      backgroundColor: 'var(--leaf-tint)',
                      color: 'var(--leaf)',
                    }}
                  >
                    <WhatsAppInlineIcon size={22} color="var(--leaf)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', margin: '0 0 2px 0' }}>WhatsApp</h3>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>+91 00000 00000</div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Typically replies in 15 minutes</div>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ height: '42px', minHeight: '42px', padding: '0 18px', fontSize: '14px' }}
                >
                  <span>Chat</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Call us in blue */}
              <div
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 28px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div
                    className="icon-circle"
                    style={{
                      backgroundColor: 'var(--blue-tint)',
                      color: 'var(--blue)',
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', margin: '0 0 2px 0' }}>Call us</h3>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>+91 00000 00000</div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Mon – Sat: 9 AM – 7 PM IST</div>
                  </div>
                </div>

                <a
                  href="tel:+910000000000"
                  className="btn-secondary"
                  style={{ height: '42px', minHeight: '42px', padding: '0 18px', fontSize: '14px' }}
                >
                  <span>Call</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Email in plum */}
              <div
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 28px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div
                    className="icon-circle"
                    style={{
                      backgroundColor: 'var(--plum-tint)',
                      color: 'var(--plum)',
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', margin: '0 0 2px 0' }}>Email</h3>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>name@example.com</div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Reply within 4 hours</div>
                  </div>
                </div>

                <a
                  href="mailto:name@example.com"
                  className="btn-secondary"
                  style={{ height: '42px', minHeight: '42px', padding: '0 18px', fontSize: '14px' }}
                >
                  <span>Email</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Rounded Map Placeholder (#F4F6EF with --shadow-md) */}
            <div
              style={{
                backgroundColor: '#F4F6EF',
                borderRadius: 'var(--radius-img)',
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                textAlign: 'center',
                gap: '16px',
                minHeight: '360px',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--white)',
                  color: 'var(--leaf)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <MapPin size={28} />
              </div>

              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--navy)' }}>
                Map placeholder
              </div>

              <p style={{ fontSize: '15px', color: 'var(--muted)', maxWidth: '320px', margin: 0 }}>
                Vasudha Freshline Exports LLP · Pune, Maharashtra, India
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--white)',
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--line)',
                  fontSize: '13px',
                  color: 'var(--navy)',
                  fontWeight: 600,
                  marginTop: '8px',
                }}
              >
                <span>Strategic shipping via JNPT &amp; Mundra</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
