import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({ isOpen, onClose, initialProduct = '' }) => {
  const [formData, setFormData] = useState({
    product: initialProduct || 'Pomegranates',
    volumeContainers: '1 container',
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
        backgroundColor: 'rgba(16, 16, 79, 0.45)',
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
        className="rfq-modal-card"
        style={{
          backgroundColor: '#F7F5EF',
          border: '1px solid #D9D5C8',
          borderRadius: 'var(--radius)',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '36px',
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
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: '#5F5D55',
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
                border: '1px solid #687036',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#687036',
              }}
            >
              <Check size={28} strokeWidth={1.5} />
            </div>
            <h3 style={{ marginBottom: '12px' }}>Request for quote received</h3>
            <p style={{ maxWidth: '440px', margin: '0 auto 24px', color: '#353535', fontSize: '15px' }}>
              Your inquiry has been logged. Our export trade desk will review specifications and respond [CONFIRM: response turnaround time].
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={onClose}
              >
                Close window
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={handleWhatsAppDirect}
              >
                Send via WhatsApp
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <span className="label-caps" style={{ display: 'block', marginBottom: '6px' }}>
                Direct Export Desk
              </span>
              <h2 id="rfq-dialog-title" style={{ fontSize: '26px', margin: 0 }}>
                Request a container quote
              </h2>
              <p style={{ fontSize: '14px', color: '#5F5D55', marginTop: '6px' }}>
                All shipments sold by container. Fill details for formal proforma pricing.
              </p>
            </div>

            {/* Commodity & Volume */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Commodity</label>
                <select
                  className="form-select"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                >
                  <option value="Pomegranates">Pomegranates (Bhagwa)</option>
                  <option value="Onions">Fresh Onions (Red & White)</option>
                  <option value="Rice">Rice (Basmati & Non-Basmati)</option>
                  <option value="Spices">Indian Spices</option>
                  <option value="Fresh fruits">Fresh Seasonal Fruits</option>
                  <option value="Fresh vegetables">Fresh Vegetables</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Volume (Containers)</label>
                <select
                  className="form-select"
                  value={formData.volumeContainers}
                  onChange={(e) => setFormData({ ...formData, volumeContainers: e.target.value })}
                >
                  <option value="1 container">1 FCL</option>
                  <option value="2-5 containers">2 – 5 FCL</option>
                  <option value="5+ containers">5+ FCL</option>
                </select>
              </div>
            </div>

            {/* Destination */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Destination Port</label>
                <input
                  type="text"
                  className={`form-input ${errors.destinationPort ? 'has-error' : ''}`}
                  placeholder="e.g. Jebel Ali, Rotterdam"
                  value={formData.destinationPort}
                  onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                />
                {errors.destinationPort && <span className="form-error">{errors.destinationPort}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Destination Country</label>
                <input
                  type="text"
                  className={`form-input ${errors.country ? 'has-error' : ''}`}
                  placeholder="e.g. UAE, Netherlands"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                />
                {errors.country && <span className="form-error">{errors.country}</span>}
              </div>
            </div>

            {/* Company & Contact */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className={`form-input ${errors.companyName ? 'has-error' : ''}`}
                  placeholder="Importing entity"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
                {errors.companyName && <span className="form-error">{errors.companyName}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Contact Person</label>
                <input
                  type="text"
                  className={`form-input ${errors.contactName ? 'has-error' : ''}`}
                  placeholder="Your full name"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                />
                {errors.contactName && <span className="form-error">{errors.contactName}</span>}
              </div>
            </div>

            {/* Email & Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Commercial Email</label>
                <input
                  type="email"
                  className={`form-input ${errors.email ? 'has-error' : ''}`}
                  placeholder="buyer@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Phone / WhatsApp</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+Country code & number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '12px', flexWrap: 'wrap' }}>
              <button
                type="submit"
                className="btn-primary"
                style={{ flexGrow: 1, minWidth: '180px' }}
              >
                Submit formal RFQ
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={handleWhatsAppDirect}
              >
                Send via WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
