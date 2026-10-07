import { Button } from '../components/Button';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <main style={{ backgroundColor: 'var(--ivory)', padding: '120px 24px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '480px' }}>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '96px',
            lineHeight: '96px',
            fontWeight: 300,
            color: 'var(--navy)',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          404
        </span>
        <h1 style={{ fontSize: '28px', lineHeight: '36px', marginBottom: '12px' }}>
          This page could not be found.
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--muted)', marginBottom: '32px' }}>
          The requested export section or document does not exist or has been relocated in our updated catalog.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <Button variant="primary" onClick={() => onNavigate('/')}>
            Return to Home
          </Button>
          <Button variant="secondary" onClick={() => onNavigate('/products')}>
            View products catalog
          </Button>
        </div>
      </div>
    </main>
  );
};
