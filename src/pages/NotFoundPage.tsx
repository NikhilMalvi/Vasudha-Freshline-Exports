import React from 'react';
import { ArrowRight, Package } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div
      className="not-found-page-flow section-white has-glows"
      style={{
        minHeight: '76vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '80px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Two soft glows */}
      <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
      <div className="glow-orb glow-blue-br" aria-hidden="true" />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '640px',
          margin: '0 auto',
        }}
      >
        {/* Very large "404" in leaf-to-blue gradient fill (only place gradient text is allowed) */}
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(96px, 15vw, 150px)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, var(--leaf) 0%, var(--blue) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px',
            userSelect: 'none',
          }}
        >
          404
        </div>

        {/* H2 "This page could not be found." */}
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 4vw, 36px)',
            fontWeight: 800,
            color: 'var(--navy)',
            lineHeight: 1.25,
            marginBottom: '16px',
          }}
        >
          This page could not be found.
        </h2>

        {/* One sentence */}
        <p
          style={{
            fontSize: '17px',
            lineHeight: '26px',
            color: 'var(--muted)',
            maxWidth: '480px',
            margin: '0 auto 36px auto',
          }}
        >
          The page you are looking for may have been moved, renamed, or is temporarily unavailable.
        </p>

        {/* Two buttons: .btn-primary "Go to home" and .btn-secondary "View products" */}
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
            onClick={() => onNavigate('/')}
            style={{ padding: '0 28px' }}
          >
            <span>Go to home</span>
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={() => onNavigate('/products')}
            style={{ padding: '0 28px' }}
          >
            <Package size={16} />
            <span>View products</span>
          </button>
        </div>
      </div>
    </div>
  );
};
