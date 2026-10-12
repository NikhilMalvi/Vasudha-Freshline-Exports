import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface ClosingCtaBandProps {
  onOpenRfq?: () => void;
  onRequestQuote?: () => void;
  phone?: string;
  whatsappUrl?: string;
}

const WhatsAppInlineIcon: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = 'var(--navy)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ display: 'block' }}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.66 20.15 9.3 19.8 8.1 19.14L7.81 18.97L4.69 19.79L5.52 16.75L5.33 16.45C4.6 15.29 4.22 13.93 4.22 11.91C4.22 7.37 7.51 3.67 12.05 3.67ZM8.94 7.42C8.74 7.42 8.54 7.43 8.36 7.74C8.18 8.05 7.67 8.53 7.67 9.51C7.67 10.49 8.38 11.43 8.48 11.57C8.58 11.71 9.87 13.7 11.87 14.56C13.53 15.28 13.87 15.13 14.23 15.1C14.59 15.06 15.39 14.62 15.55 14.16C15.71 13.7 15.71 13.31 15.66 13.23C15.61 13.15 15.48 13.1 15.28 13C15.08 12.9 14.09 12.41 13.91 12.34C13.73 12.27 13.6 12.24 13.47 12.44C13.34 12.64 12.96 13.1 12.84 13.23C12.72 13.36 12.6 13.38 12.4 13.28C12.2 13.18 11.56 12.97 10.8 12.3C10.21 11.78 9.81 11.13 9.69 10.93C9.57 10.73 9.68 10.62 9.78 10.52C9.87 10.43 9.98 10.29 10.08 10.17C10.18 10.05 10.22 9.96 10.29 9.83C10.36 9.7 10.32 9.58 10.27 9.48C10.22 9.38 9.73 8.18 9.53 7.68C9.33 7.2 9.13 7.26 8.97 7.25L8.94 7.42Z" />
  </svg>
);

export const ClosingCtaBand: React.FC<ClosingCtaBandProps> = ({
  onOpenRfq,
  onRequestQuote,
  phone = '+91 00000 00000',
  whatsappUrl = 'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20a%20container%20quote.',
}) => {
  const handleQuoteClick = () => {
    if (onOpenRfq) {
      onOpenRfq();
    } else if (onRequestQuote) {
      onRequestQuote();
    }
  };

  return (
    <section className="closing-cta-band has-glows">
      <div
        className="glow-orb glow-leaf-tr"
        aria-hidden="true"
        style={{
          top: '-100px',
          right: '-80px',
          width: '420px',
          height: '420px',
          opacity: 0.2,
          position: 'absolute',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div>
          <span className="closing-cta-pill">READY TO GET STARTED?</span>
        </div>
        <h2>Need a container quote? Tell us what you need.</h2>
        <p className="sub-line">
          Accurate specifications, scheduled ocean departures, and transparent contract pricing.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <button type="button" className="btn-light" onClick={handleQuoteClick}>
            <span>Request a quote</span>
            <ArrowRight size={16} />
          </button>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsAppInlineIcon size={18} />
            <span>WhatsApp us</span>
          </a>

          <a href={`tel:${phone.replace(/\s+/g, '')}`} className="btn-outline-white">
            <Phone size={16} />
            <span>Call {phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
