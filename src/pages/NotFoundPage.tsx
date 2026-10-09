import React from 'react';
import { ArrowRight, Package } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <main
      className="section-white"
      style={{
        minHeight: '72vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '540px', margin: '0 auto' }}>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '120px',
            lineHeight: 1,
            fontWeight: 800,
            color: '#E0E3D8',
            display: 'block',
            marginBottom: '16px',
            letterSpacing: '-0.04em',
            userSelect: 'none',
          }}
        >
          404
        </span>

        <h1
          style={{
            fontSize: '36px',
            lineHeight: '1.2',
            margin: '0 0 16px 0',
            color: 'var(--navy)',
          }}
        >
          Page not found.
        </h1>

        <p
          style={{
            fontSize: '17px',
            lineHeight: '26px',
            color: 'var(--muted)',
            margin: '0 0 36px 0',
          }}
        >
          The page you're looking for doesn't exist or has moved.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            className="btn-primary"
            onClick={() => onNavigate('/')}
          >
            <span>Back to Home</span>
            <ArrowRight size={16} />
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => onNavigate('/products')}
          >
            <Package size={16} />
            <span>Browse products</span>
          </button>
        </div>
      </div>
    </main>
  );
};
