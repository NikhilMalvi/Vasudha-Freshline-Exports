import React, { useState } from 'react';
import {
  ArrowRight,
  Share2,
  Copy,
  Check,
} from 'lucide-react';
import { IMAGES } from '../data/images';

const TwitterIcon: React.FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedInIcon: React.FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface BlogPageProps {
  articleSlug?: string;
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

interface Article {
  id: string;
  title: string;
  category: 'Market updates' | 'Guides' | 'Company news';
  date: string;
  summary: string;
  img: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  articleSlug,
  onNavigate,
  onOpenRfq,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Market updates', 'Guides', 'Company news'];

  const featuredArticle = {
    id: 'onion-season-outlook',
    title: 'Onion season outlook',
    category: 'Market update',
    date: '[Sample] date',
    summary:
      'Harvest volume expectations, export size calibres and seasonal shipping windows across Maharashtra and Gujarat growing belts.',
    img: IMAGES.onions,
  };

  const gridArticles: Article[] = [
    {
      id: 'how-to-read-an-export-spec-sheet',
      title: 'How to read an export spec sheet',
      category: 'Guides',
      date: '[Sample] date',
      summary: 'Understanding count calibrations, brix standards and carton packing tolerances.',
      img: IMAGES.packhouseInspection,
    },
    {
      id: 'packing-options-for-fresh-fruit',
      title: 'Packing options for fresh fruit',
      category: 'Guides',
      date: '[Sample] date',
      summary: 'Telescopic cartons, foam net wraps and protective liners for container safety.',
      img: IMAGES.pomegranatesBox,
    },
    {
      id: 'understanding-fob-cfr-and-cif',
      title: 'Understanding FOB, CFR and CIF',
      category: 'Guides',
      date: '[Sample] date',
      summary: 'Commercial Incoterms allocation for ocean container produce contracts.',
      img: IMAGES.portContainers,
    },
    {
      id: 'documents-that-travel-with-a-container',
      title: 'Documents that travel with a container',
      category: 'Guides',
      date: '[Sample] date',
      summary: 'Phytosanitary papers, origin declarations, packing lists and bills of lading.',
      img: IMAGES.oceanVessel,
    },
    {
      id: 'choosing-a-container-type-for-produce',
      title: 'Choosing a container type for produce',
      category: 'Market updates',
      date: '[Sample] date',
      summary: 'When to specify standard dry freight boxes versus refrigerated reefer units.',
      img: IMAGES.containerLoading,
    },
    {
      id: 'preparing-your-first-import-order',
      title: 'Preparing your first import order',
      category: 'Company news',
      date: '[Sample] date',
      summary: 'Key checklist items for international produce buyers purchasing Indian containers.',
      img: IMAGES.fruitsGrapes,
    },
  ];

  const filteredArticles =
    selectedCategory === 'All'
      ? gridArticles
      : gridArticles.filter((a) => a.category === selectedCategory);

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20learn%20more%20about%20your%20produce%20updates.';

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // If viewing the featured article detail page:
  const isArticleView = Boolean(articleSlug && articleSlug.includes('onion'));

  if (isArticleView) {
    return (
      <div className="blog-article-content" style={{ width: '100%', overflowX: 'hidden' }}>
        {/* Article Breadcrumb & Header */}
        <section className="section" style={{ paddingTop: '56px', paddingBottom: '48px' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <nav
              aria-label="Breadcrumb"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}
            >
              <button
                type="button"
                onClick={() => onNavigate('/')}
                style={{ background: 'none', border: 'none', padding: 0, color: 'var(--charcoal)', cursor: 'pointer', font: 'inherit' }}
              >
                Home
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={() => onNavigate('/blog')}
                style={{ background: 'none', border: 'none', padding: 0, color: 'var(--charcoal)', cursor: 'pointer', font: 'inherit' }}
              >
                Blog
              </button>
              <span>/</span>
              <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Onion season outlook</span>
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span className="pill">Market update</span>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>[Sample] date</span>
            </div>

            <h1 style={{ margin: '0 0 20px 0', fontSize: '48px', lineHeight: '56px' }}>
              Onion season outlook
            </h1>

            <p style={{ margin: 0, fontSize: '18px', lineHeight: '30px', color: 'var(--charcoal)' }}>
              Export availability, sizing calibration and logistics timelines for Indian red onions.
            </p>
          </div>
        </section>

        {/* Wide Cover Image */}
        <section style={{ backgroundColor: 'var(--ivory)', paddingBottom: '56px' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                maxHeight: '480px',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'var(--bone)',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <img
                src={featuredArticle.img}
                alt="Onion harvest in India"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <SampleImageTag />
            </div>
          </div>
        </section>

        {/* 680px Reading Column */}
        <section className="section-white" style={{ padding: '72px 0' }}>
          <div className="container" style={{ maxWidth: '680px' }}>
            <h2 style={{ fontSize: '32px', lineHeight: '40px', margin: '0 0 24px 0' }}>
              Crop progression and harvest parameters
            </h2>

            <p style={{ margin: '0 0 20px 0', fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
              The Indian red onion export season runs from October to April, with peak harvest arrivals recorded between December and February. Sourcing teams monitor field curing across primary belt stations.
            </p>

            <p style={{ margin: '0 0 20px 0', fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
              Harvested bulbs undergo natural drying before transfer to packhouse facilities. Mechanical calibration separates produce into export grade diameters from 45mm to 65mm without skin bruising.
            </p>

            <p style={{ margin: '0 0 32px 0', fontSize: '17px', lineHeight: '28px', color: 'var(--charcoal)' }}>
              Shipments move in ventilated mesh bags within designated container slots to maintain proper air circulation and moisture control throughout transit.
            </p>

            {/* Bulleted List */}
            <div style={{ padding: '24px', backgroundColor: 'var(--bone)', borderRadius: '12px', margin: '0 0 36px 0' }}>
              <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '12px', color: 'var(--ink)' }}>
                Key export checkpoints:
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--charcoal)', fontSize: '15px' }}>
                <li>Bulb firmness and cured outer dry peel layers.</li>
                <li>Uniform diameter sizing in 25kg or 50kg mesh bags [Sample].</li>
                <li>Pre-shipment phytosanitary quarantine clearance inspection.</li>
              </ul>
            </div>

            {/* Pull Quote */}
            <div
              style={{
                borderLeft: '4px solid var(--olive)',
                paddingLeft: '24px',
                margin: '40px 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  lineHeight: '34px',
                  color: 'var(--ink)',
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                &ldquo;Direct farm agreements ensure container-grade calibration throughout peak harvest months.&rdquo;
              </p>
            </div>

            {/* Share Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '28px',
                borderTop: '1px solid var(--line)',
                marginTop: '48px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--muted)' }}>
                <Share2 size={16} />
                <span>Share this article:</span>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  aria-label="Copy link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--line)',
                    backgroundColor: 'var(--white)',
                    cursor: 'pointer',
                    fontSize: '13px',
                    color: 'var(--charcoal)',
                  }}
                >
                  {copiedLink ? <Check size={14} color="var(--olive)" /> : <Copy size={14} />}
                  <span>{copiedLink ? 'Copied' : 'Copy link'}</span>
                </button>

                <a
                  href={`https://twitter.com/intent/tweet?text=Onion%20season%20outlook`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--line)',
                    backgroundColor: 'var(--white)',
                    color: 'var(--charcoal)',
                  }}
                >
                  <TwitterIcon />
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--line)',
                    backgroundColor: 'var(--white)',
                    color: 'var(--charcoal)',
                  }}
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles (3 Cards) */}
        <section className="section-bone" style={{ padding: '80px 0' }}>
          <div className="container">
            <div style={{ marginBottom: '36px' }}>
              <span className="eyebrow">FURTHER READING</span>
              <h2 style={{ margin: '8px 0 0 0' }}>Related articles</h2>
            </div>

            <div
              className="grid-stretch"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: '28px',
              }}
            >
              {gridArticles.slice(0, 3).map((item) => (
                <div key={item.id} className="card" style={{ gap: '16px' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                    <img src={item.img} alt={item.title} className="card-img" />
                    <SampleImageTag />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="pill">{item.category}</span>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{item.date}</span>
                  </div>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px' }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--charcoal)', flexGrow: 1 }}>
                    {item.summary}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="pill" style={{ backgroundColor: 'var(--bone)', color: 'var(--muted)' }}>
                      Sample article
                    </span>
                    <button
                      type="button"
                      className="link"
                      onClick={() => onNavigate('/blog')}
                    >
                      Read &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Band */}
        <section className="band-navy" style={{ padding: '88px 0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <h2 style={{ color: 'var(--white)', margin: '0 0 16px 0' }}>Tell us what you need.</h2>
            <p style={{ color: 'rgba(247, 245, 239, 0.9)', margin: '0 auto 36px auto', fontSize: '18px', lineHeight: '28px' }}>
              We supply calibrated produce with planned vessel departures and transparent export handling.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', alignItems: 'center' }}>
              <button type="button" className="btn-light" onClick={() => onOpenRfq()}>
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
                }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Blog Index View
  return (
    <div className="blog-page-content" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* =========================================================================
          1. HERO (.section ivory). Eyebrow, H1, sentence.
          ========================================================================= */}
      <section className="section" style={{ paddingTop: '56px', paddingBottom: '48px' }}>
        <div className="container">
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: 'var(--muted)',
              marginBottom: '24px',
            }}
          >
            <button
              type="button"
              onClick={() => onNavigate('/')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--charcoal)', cursor: 'pointer', font: 'inherit' }}
            >
              Home
            </button>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Blog</span>
          </nav>

          <div style={{ maxWidth: '720px' }}>
            <span className="eyebrow">BLOG</span>
            <h1 style={{ margin: '12px 0 16px 0' }}>News and guides</h1>
            <p style={{ margin: 0, fontSize: '18px', lineHeight: '28px', color: 'var(--charcoal)' }}>
              Market perspectives, harvest updates and practical guides for international produce buyers.
            </p>
          </div>

          {/* =========================================================================
              2. CATEGORY CHIPS: All, Market updates, Guides, Company news
              ========================================================================= */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '36px' }}>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
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
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED ARTICLE CARD (wide; image left, text right)
          ========================================================================= */}
      <section className="section-white" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
        <div className="container">
          <div
            className="card"
            style={{
              padding: '0',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              alignItems: 'center',
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            {/* Image Left */}
            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '340px' }}>
              <img
                src={featuredArticle.img}
                alt={featuredArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <SampleImageTag />
            </div>

            {/* Text Right */}
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="pill">{featuredArticle.category}</span>
                <span style={{ fontSize: '13px', color: 'var(--muted)' }}>{featuredArticle.date}</span>
              </div>

              <h2 style={{ margin: 0, fontSize: '32px', lineHeight: '40px' }}>
                {featuredArticle.title}
              </h2>

              <p style={{ margin: 0, fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)' }}>
                {featuredArticle.summary}
              </p>

              <div style={{ paddingTop: '8px' }}>
                <button
                  type="button"
                  className="link"
                  onClick={() => onNavigate('/blog/onion-season-outlook')}
                  style={{ fontSize: '16px' }}
                >
                  Read article &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. GRID OF 6 EQUAL .CARD ITEMS (3 x 2)
          ========================================================================= */}
      <section className="section-white" style={{ paddingTop: 0, paddingBottom: '88px' }}>
        <div className="container">
          <div
            className="grid-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
            }}
          >
            {filteredArticles.map((item) => (
              <div key={item.id} className="card" style={{ gap: '16px' }}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
                  <img src={item.img} alt={item.title} className="card-img" />
                  <SampleImageTag />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="pill">{item.category}</span>
                  <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{item.date}</span>
                </div>

                <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '24px' }}>
                  {item.title}
                </h3>

                <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', flexGrow: 1 }}>
                  {item.summary}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px' }}>
                  <span className="pill" style={{ backgroundColor: 'var(--bone)', color: 'var(--muted)' }}>
                    Sample article
                  </span>
                  <button
                    type="button"
                    className="link"
                    onClick={() => onNavigate('/blog/onion-season-outlook')}
                  >
                    Read article &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CLOSING BAND (.band-navy)
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
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
