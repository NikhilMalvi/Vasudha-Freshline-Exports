import React, { useState } from 'react';

interface PhotoPlaceholderProps {
  label: string;
  subtext?: string;
  aspectRatio?: '4:5' | '3:2' | '16:9';
  src?: string;
  className?: string;
  showCaption?: boolean;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  label,
  subtext,
  aspectRatio = '3:2',
  src,
  className = '',
  showCaption: _showCaption = true,
}) => {
  const [imageError, setImageError] = useState(false);

  const aspectClass =
    aspectRatio === '4:5'
      ? 'aspect-4-5'
      : aspectRatio === '16:9'
      ? 'aspect-16-9'
      : 'aspect-3-2';

  // If a real image source is available and didn't fail
  if (src && !imageError) {
    return (
      <div
        className={`${aspectClass} ${className}`}
        style={{
          border: '1px solid rgba(247, 245, 239, 0.20)',
          borderRadius: 'var(--radius)',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#1A1A66',
        }}
      >
        <img
          src={src}
          alt={label}
          loading="lazy"
          onError={() => setImageError(true)}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    );
  }

  // Placeholder block: #1A1A66, 1px hairline border, #F7F5EF text, #B9B8D6 caption
  return (
    <div
      className={`photo-placeholder ${aspectClass} ${className}`}
      role="img"
      aria-label={label}
      style={{
        backgroundColor: '#1A1A66',
        border: '1px solid rgba(247, 245, 239, 0.20)',
        borderRadius: 'var(--radius)',
      }}
    >
      <div style={{ maxWidth: '320px', margin: 'auto' }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            lineHeight: '18px',
            fontWeight: 500,
            color: '#F7F5EF',
            marginBottom: '4px',
          }}
        >
          {label}
        </p>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            lineHeight: '15px',
            color: '#B9B8D6',
            display: 'block',
          }}
        >
          {subtext || `Documentary photograph · Natural light · Neutral surface · ${aspectRatio}`}
        </span>
      </div>
    </div>
  );
};
