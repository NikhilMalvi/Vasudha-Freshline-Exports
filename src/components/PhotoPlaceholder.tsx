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
  showCaption = true,
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
        className={`img-zoom-wrapper ${aspectClass} ${className}`}
        style={{
          border: '1px solid var(--line)',
          position: 'relative',
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

        {showCaption && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '12px 14px',
              background: 'linear-gradient(to top, rgba(18, 22, 19, 0.9) 0%, rgba(18, 22, 19, 0.4) 60%, transparent 100%)',
              color: 'var(--ivory)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              pointerEvents: 'none',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 500,
                color: 'var(--ivory)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {label}
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(247, 245, 239, 0.75)' }}>
              {subtext || `Natural lighting · Calibrated export lot · ${aspectRatio}`}
            </span>
          </div>
        )}
      </div>
    );
  }

  // Brand Rule: "Where no photo is supplied, use a grey placeholder block labelled with the photo that belongs there."
  return (
    <div
      className={`photo-placeholder ${aspectClass} ${className}`}
      role="img"
      aria-label={label}
    >
      <div style={{ maxWidth: '320px', margin: 'auto' }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            lineHeight: '18px',
            fontWeight: 500,
            color: 'var(--charcoal)',
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
            color: 'var(--muted)',
            display: 'block',
          }}
        >
          {subtext || `Documentary photograph · Natural light · Neutral surface · ${aspectRatio}`}
        </span>
      </div>
    </div>
  );
};
