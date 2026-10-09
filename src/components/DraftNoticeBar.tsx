import React from 'react';

/**
 * Design Draft Top Bar
 * Rule: 28px bar, background #F4F6EF, 12px --muted text, centred:
 * "DESIGN DRAFT: sample text, figures and images for presentation."
 */
export const DraftNoticeBar: React.FC = () => {
  return (
    <div
      style={{
        height: '28px',
        minHeight: '28px',
        backgroundColor: '#F4F6EF',
        color: 'var(--muted)',
        fontSize: '12px',
        lineHeight: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        letterSpacing: '0.02em',
        borderBottom: '1px solid var(--line)',
        position: 'relative',
        zIndex: 1100,
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
      }}
    >
      DESIGN DRAFT: sample text, figures and images for presentation.
    </div>
  );
};
