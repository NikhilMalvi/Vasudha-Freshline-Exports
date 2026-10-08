import React, { useState } from 'react';

interface PhotoPlaceholderProps {
  label?: string;
  subtext?: string;
  aspectRatio?: '4:5' | '3:2' | '16:9' | '1:1';
  src?: string;
  className?: string;
  showCaption?: boolean;
}

/**
 * Image / Photo Component
 * Rule 4: Relevant stock photos with 10px white tag on #16161A at 60% opacity: "SAMPLE IMAGE".
 * Fallback: #ECE8DC placeholder with caption below.
 */
export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  label,
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
      : aspectRatio === '1:1'
      ? 'aspect-1-1'
      : 'aspect-3-2';

  const hasValidImage = src && !imageError;

  return (
    <div className={className} style={{ width: '100%' }}>
      <div
        className={`photo-placeholder-box ${aspectClass}`}
        role="img"
        aria-label={label || 'Sample image'}
        style={{
          backgroundColor: '#ECE8DC',
          border: '1px solid #D9D5C8',
          borderRadius: 'var(--radius)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        {hasValidImage ? (
          <>
            <img
              src={src}
              alt={label || 'Produce presentation'}
              loading="lazy"
              onError={() => setImageError(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Tag in the corner: 10px white text on #16161A at 60% opacity */}
            <span
              style={{
                position: 'absolute',
                bottom: '6px',
                right: '6px',
                backgroundColor: 'rgba(22, 22, 26, 0.60)',
                color: '#FFFFFF',
                fontSize: '10px',
                lineHeight: '12px',
                padding: '2px 6px',
                borderRadius: '1px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                pointerEvents: 'none',
              }}
            >
              SAMPLE IMAGE
            </span>
          </>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5F5D55"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        )}
      </div>

      {showCaption && label && (
        <p
          className="photo-placeholder-caption"
          style={{
            fontSize: '13px',
            lineHeight: '18px',
            color: '#5F5D55',
            marginTop: '8px',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {label}
        </p>
      )}
    </div>
  );
};
