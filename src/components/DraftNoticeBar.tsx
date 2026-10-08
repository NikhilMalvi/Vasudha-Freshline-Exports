import React from 'react';

/**
 * Draft Notice Bar for Client Presentation
 * Requirement: 28px high, background #ECE8DC, text 12px #5F5D55, centered.
 * Easily removable by commenting out or deleting this component.
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
        borderBottom: '1px solid #D9D5C8',
        position: 'relative',
        zIndex: 100,
      }}
    >
      DESIGN DRAFT: sample text and images for presentation.
    </div>
  );
};
