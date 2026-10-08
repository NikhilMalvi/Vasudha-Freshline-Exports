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
  variant = 'navy',
  width = 240,
  className = '',
  alt = 'Vasudha Freshline Exports LLP'
}) => {
  // If width is below 140px or swoosh specified, use swoosh mark
  const isBelowMinimum = width < 140 || variant === 'swoosh';

  if (isBelowMinimum) {
    return (
      <img
        src="/vasudha-mark-light-for-navy.svg"
        alt={`${alt} Mark`}
        width={width}
        height={width}
        style={{ display: 'block', height: 'auto' }}
        className={className}
      />
    );
  }

  // Full Wordmark + Swoosh reversed for navy background
  const logoSrc = variant === 'default'
    ? '/logos/logo-original.svg'
    : '/vasudha-logo-reversed-for-navy.svg';

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
