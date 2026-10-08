import React from 'react';

/**
 * Empty Page Canvas
 * Displays the shared layout structure ready for Stage 1.
 */
export const EmptyPage: React.FC = () => {
  return (
    <main
      className="section"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--ivory)',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Empty canvas ready for stage 1 */}
      </div>
    </main>
  );
};
