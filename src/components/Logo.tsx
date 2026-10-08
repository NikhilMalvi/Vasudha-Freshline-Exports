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
  width = 240,
  className = '',
  alt = 'Vasudha Freshline Exports LLP',
}) => {
  const isBelowMinimum = width < 140 || variant === 'swoosh';

  if (isBelowMinimum) {
    const markSrc = variant === 'navy'
      ? '/vasudha-mark-light-for-navy.svg'
      : '/vasudha-mark-olive.svg';

    return (
      <img
        src={markSrc}
        alt={`${alt} Mark`}
        width={width}
        height={width}
        style={{ display: 'block', height: 'auto' }}
        className={className}
      />
    );
  }

  // Full Wordmark + Swoosh
  const logoSrc = variant === 'navy'
    ? '/vasudha-logo-reversed-for-navy.svg'
    : '/vasudha-logo-original.svg';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 0',
      }}
      className={className}
    >
      <img
        src={logoSrc}
        alt={alt}
        width={width}
        height={Math.round(width * (180.47 / 743.11))}
        style={{
          display: 'block',
          width: `${width}px`,
          height: 'auto',
          maxWidth: '100%',
        }}
      />
    </div>
  );
};
