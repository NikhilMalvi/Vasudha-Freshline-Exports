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
 * - Wordmark + swoosh placed ONLY on ivory or white (variant="default")
 * - On navy backgrounds: white wordmark with swoosh in #A9B070 (variant="navy")
 * - Clear space around logo equals height of letter V (applied via padding)
 * - Minimum width 140px; below that use the swoosh mark only
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  width = 240,
  className = '',
  alt = 'Vasudha Freshline Exports LLP'
}) => {
  // If width is below 140px, brand rule mandates using the swoosh mark only
  const isBelowMinimum = width < 140 || variant === 'swoosh';

  if (isBelowMinimum) {
    const swooshSrc = variant === 'navy' 
      ? '/logos/logo-swoosh-light.svg' 
      : '/logos/logo-swoosh-olive.svg';

    return (
      <img
        src={swooshSrc}
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
    ? '/logos/logo-navy-bg.svg'
    : '/logos/logo-original.svg';

  // Calculate clear space roughly proportional to letter V height (~16% of height)
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 0',
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
