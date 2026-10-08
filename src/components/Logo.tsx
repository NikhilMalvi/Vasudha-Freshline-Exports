import React from 'react';

interface LogoProps {
  variant?: 'default' | 'navy' | 'swoosh';
  width?: number;
  className?: string;
  alt?: string;
}

/**
 * Brand Logo Component for Vasudha Freshline Exports LLP
 * Rules:
 * - Wordmark + swoosh placed on light/ivory background (variant="default")
 * - On navy backgrounds: white wordmark with light swoosh (variant="navy")
 * - Mobile swoosh mark: olive mark on light, white/light mark on navy
 * - Never redraw or retype the logo.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  width = 210,
  className = '',
  alt = 'Vasudha Freshline Exports LLP',
}) => {
  if (variant === 'swoosh') {
    const markSrc = '/vasudha-mark-olive.svg';
    return (
      <img
        src={markSrc}
        alt={`${alt} Mark`}
        width={38}
        height={38}
        style={{ display: 'block', width: '38px', height: '38px', objectFit: 'contain' }}
        className={`brand-logo-swoosh ${className}`}
      />
    );
  }

  const logoSrc = variant === 'navy'
    ? '/vasudha-logo-reversed-for-navy.svg'
    : '/vasudha-logo-original.svg';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
      }}
      className={`brand-logo-wrapper ${className}`}
    >
      <img
        src={logoSrc}
        alt={alt}
        className="brand-logo-img"
        style={{
          display: 'block',
          width: `${width}px`,
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};
