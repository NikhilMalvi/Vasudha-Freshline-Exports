import React from 'react';

/**
 * Design Draft Top Bar
 * Rule: 28px high, background #ECE8DC, text 12px --muted (#5F5D55), centered.
 * Text: "DESIGN DRAFT: sample text, figures and images for presentation."
 * No other notice bar on the page.
 */
export const DraftNoticeBar: React.FC = () => {
  return (
    <div
      style={{
        height: '28px',
        backgroundColor: '#ECE8DC',
        color: '#5F5D55',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        letterSpacing: '0.02em',
        borderBottom: '1px solid #E3DFD3',
        position: 'relative',
        zIndex: 100,
        fontFamily: 'var(--font-sans)',
      }}
    >
      DESIGN DRAFT: sample text, figures and images for presentation.
    </div>
  );
};
