import React from 'react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <main
      className="section"
      style={{
        backgroundColor: 'var(--ivory)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '112px',
            lineHeight: 1,
            fontWeight: 300,
            color: 'var(--olive)',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          404
        </span>

        <h1 style={{ fontSize: '32px', margin: '0 0 16px 0', fontFamily: 'var(--font-serif)' }}>
          This page could not be found.
        </h1>

        <p style={{ fontSize: '16px', lineHeight: '26px', color: 'var(--muted)', margin: '0 0 32px 0' }}>
          The requested page is unavailable or has moved to another section.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn-primary"
            onClick={() => onNavigate('/')}
          >
            Home
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => onNavigate('/products')}
          >
            Products
          </button>
        </div>
      </div>
    </main>
  );
};
