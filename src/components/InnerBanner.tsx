import React from 'react';

interface InnerBannerProps {
  pill: string;
  title: string;
  subtitle: string;
}

export const InnerBanner: React.FC<InnerBannerProps> = ({ pill, title, subtitle }) => {
  return (
    <section className="inner-banner">
      <img
        src="/vasudha-mark-light-for-navy.svg"
        alt=""
        aria-hidden="true"
        className="inner-banner-swoosh"
      />
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div>
          <span className="inner-banner-pill">{pill}</span>
        </div>
        <h1>{title}</h1>
        <p className="sub-line">{subtitle}</p>
      </div>
    </section>
  );
};
