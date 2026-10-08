import React, { useState } from 'react';
import { Button } from './Button';
import { X, Check, MessageSquare } from 'lucide-react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({ isOpen, onClose, initialProduct = '' }) => {
  const [formData, setFormData] = useState({
    product: initialProduct || 'Pomegranates (Bhagwa)',
    volumeContainers: '1 FCL (40ft Reefer)',
    destinationPort: '',
    country: '',
    incoterm: 'CIF',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    packagingNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.contactName.trim()) errs.contactName = 'Contact name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid commercial email required';
    if (!formData.destinationPort.trim()) errs.destinationPort = 'Destination port required';
    if (!formData.country.trim()) errs.country = 'Destination country required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleWhatsAppDirect = () => {
    const message = `RFQ Inquiry for Vasudha Freshline Exports LLP:
- Product: ${formData.product}
- Quantity: ${formData.volumeContainers}
- Destination: ${formData.destinationPort || '[Port]'}, ${formData.country || '[Country]'}
- Incoterm: ${formData.incoterm}
- Buyer Company: ${formData.companyName || '[Company]'}
- Contact: ${formData.contactName || '[Name]'}`;

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="rfq-dialog-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(21, 28, 23, 0.65)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        zIndex: 100,
        overflowY: 'auto',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="animate-fade-in rfq-modal-card"
        style={{
          backgroundColor: 'var(--ivory)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius)',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '40px',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quote request modal"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                margin: '0 auto 20px',
                border: '1px solid var(--olive)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--olive)',
              }}
            >
              <Check size={28} strokeWidth={1.5} />
            </div>
            <h3 style={{ marginBottom: '12px' }}>Request for quote received</h3>
            <p style={{ maxWidth: '440px', margin: '0 auto 24px', color: 'var(--charcoal)', fontSize: '15px' }}>
              Your inquiry has been logged on the export desk. Our trade officer will review shipment availability from JNPT and supply an official proforma quote within 12 business hours.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <Button variant="secondary" onClick={handleWhatsAppDirect}>
                <MessageSquare size={16} strokeWidth={1.5} />
                <span>Forward details to WhatsApp</span>
              </Button>
              <Button variant="primary" onClick={onClose}>
                Return to website
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '28px', borderBottom: '1px solid var(--line)', paddingBottom: '20px' }}>
              <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
                Commercial Trade Desk
              </span>
              <h2 id="rfq-dialog-title" style={{ fontSize: '32px', lineHeight: '38px', marginBottom: '8px' }}>
                Request for quote (RFQ)
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--muted)', margin: 0 }}>
                Wholesale container shipments only. Complete the specification below or message us directly on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Product and Quantity */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="rfq-grid-2col">
                <div className="form-group">
                  <label className="form-label" htmlFor="rfq-product">
                    Product commodity
                  </label>
                  <select
                    id="rfq-product"
                    className="form-select"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  >
                    <option value="Pomegranates (Bhagwa)">Pomegranates (Bhagwa Variety)</option>
                    <option value="Fresh Red Onions">Fresh Red Onions (Medium / Large)</option>
                    <option value="Fresh White Onions">Fresh White Onions</option>
                    <option value="Milled Rice (Non-Basmati)">Milled Rice (Non-Basmati)</option>
                    <option value="Basmati Rice">Basmati Rice (Export Grade)</option>
                    <option value="Export Spices">Indian Spices (Whole / Ground)</option>
                    <option value="Fresh Seasonal Fruits">Fresh Seasonal Fruits</option>
                    <option value="Fresh Vegetables">Fresh Vegetables (Cold-Chain)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="rfq-volume">
                    Order volume (Containers)
                  </label>
                  <select
                    id="rfq-volume"
                    className="form-select"
                    value={formData.volumeContainers}
                    onChange={(e) => setFormData({ ...formData, volumeContainers: e.target.value })}
                  >
                    <option value="1 FCL (40ft Reefer / Dry)">1 FCL (Trial Container)</option>
                    <option value="2-5 FCL per month">2 – 5 FCL per month</option>
                    <option value="6-10 FCL per month">6 – 10 FCL per month</option>
                    <option value="Spot Container Program">Spot Container Program</option>
                    <option value="Annual Supply Contract">Annual Supply Contract</option>
                  </select>
                </div>
              </div>

              {/* Destination Port & Country */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.8fr', gap: '16px' }} className="rfq-grid-3col">
                <div className="form-group">
                  <label className="form-label" htmlFor="rfq-port">
                    Discharge port
                  </label>
                  <input
                    id="rfq-port"
                    type="text"
                    placeholder="e.g. Jebel Ali, Rotterdam, Dammam"
                    className={`form-input ${errors.destinationPort ? 'has-error' : ''}`}
                    value={formData.destinationPort}
                    onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                  />
                  {errors.destinationPort && <span className="form-error">{errors.destinationPort}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="rfq-country">
                    Destination country
                  </label>
                  <input
                    id="rfq-country"
                    type="text"
                    placeholder="e.g. UAE, Netherlands, Saudi Arabia"
                    className={`form-input ${errors.country ? 'has-error' : ''}`}
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />
                  {errors.country && <span className="form-error">{errors.country}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="rfq-incoterm">
                    Incoterm
                  </label>
                  <select
                    id="rfq-incoterm"
                    className="form-select"
                    value={formData.incoterm}
                    onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                  >
                    <option value="CIF">CIF</option>
                    <option value="FOB">FOB (JNPT)</option>
                    <option value="CFR">CFR</option>
                  </select>
                </div>
              </div>

              {/* Buyer Company & Contact */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="rfq-grid-2col">
                <div className="form-group">
                  <label className="form-label" htmlFor="rfq-company">
                    Company name
                  </label>
                  <input
                    id="rfq-company"
                    type="text"
                    placeholder="Importer / Distribution entity"
                    className={`form-input ${errors.companyName ? 'has-error' : ''}`}
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                  {errors.companyName && <span className="form-error">{errors.companyName}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="rfq-name">
                    Authorized contact
                  </label>
                  <input
                    id="rfq-name"
                    type="text"
                    placeholder="Full name & title"
                    className={`form-input ${errors.contactName ? 'has-error' : ''}`}
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  />
                  {errors.contactName && <span className="form-error">{errors.contactName}</span>}
                </div>
              </div>

              {/* Email & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="rfq-grid-2col">
                <div className="form-group">
                  <label className="form-label" htmlFor="rfq-email">
                    Corporate email
                  </label>
                  <input
                    id="rfq-email"
                    type="email"
                    placeholder="buyer@importcompany.com"
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="rfq-phone">
                    Phone / WhatsApp number
                  </label>
                  <input
                    id="rfq-phone"
                    type="tel"
                    placeholder="+Country code & number"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              {/* Specific packing / grading requirements */}
              <div className="form-group">
                <label className="form-label" htmlFor="rfq-notes">
                  Grading, packaging or temperature requirements (Optional)
                </label>
                <textarea
                  id="rfq-notes"
                  className="form-textarea"
                  placeholder="Specify carton sizes (e.g. 3.5kg / 5kg net), fruit count, sizing calibration, or target shipping window."
                  value={formData.packagingNotes}
                  onChange={(e) => setFormData({ ...formData, packagingNotes: e.target.value })}
                  style={{ minHeight: '80px' }}
                />
              </div>

              {/* Actions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--line)',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  style={{
                    background: 'none',
                    border: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--olive)',
                    fontSize: '14px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                  }}
                >
                  <MessageSquare size={16} strokeWidth={1.5} />
                  <span>Send direct via WhatsApp</span>
                </button>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Button variant="secondary" type="button" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit">
                    Submit quote request
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .rfq-modal-card {
            padding: 24px 16px !important;
          }
          .rfq-grid-2col, .rfq-grid-3col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
