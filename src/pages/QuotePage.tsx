import React, { useState } from 'react';

interface QuotePageProps {
  initialProduct?: string;
  onNavigate: (path: string) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({
  initialProduct = 'Pomegranates',
  onNavigate: _onNavigate,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    commodity: initialProduct,
    destinationPort: '',
    containerCount: '1 container',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  return (
    <main style={{ backgroundColor: '#F7F5EF', color: '#353535' }}>
      {/* 1. HERO */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="label-caps">Inquiry</span>
          <h1 style={{ margin: '8px 0 16px 0' }}>Contact & request a quote</h1>
          <p style={{ fontSize: '18px', lineHeight: '28px', color: '#353535', margin: 0 }}>
            Inquire about container pricing, seasonal availability, or packing specifications. Our trade desk reviews commercial inquiries directly.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS */}
      <section style={{ padding: '64px 0', backgroundColor: '#ECE8DC', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="label-caps">Coordinates</span>
          <h2 style={{ margin: '4px 0 12px 0' }}>Trade desk contact</h2>
          <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: '0 0 24px 0' }}>
            Official registered coordinates for commercial export correspondence. Contact: Team Member Name, role "Trade Officer".
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
            }}
          >
            <div style={{ backgroundColor: '#F7F5EF', border: '1px solid #D9D5C8', padding: '16px', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', color: '#5F5D55', textTransform: 'uppercase', display: 'block' }}>Address</span>
              <span style={{ fontSize: '14px', color: '#16161A', display: 'block', marginTop: '4px' }}>Street, City, State, PIN</span>
            </div>
            <div style={{ backgroundColor: '#F7F5EF', border: '1px solid #D9D5C8', padding: '16px', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', color: '#5F5D55', textTransform: 'uppercase', display: 'block' }}>Phone</span>
              <span style={{ fontSize: '14px', color: '#16161A', display: 'block', marginTop: '4px' }}>+91 00000 00000</span>
            </div>
            <div style={{ backgroundColor: '#F7F5EF', border: '1px solid #D9D5C8', padding: '16px', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', color: '#5F5D55', textTransform: 'uppercase', display: 'block' }}>Email</span>
              <span style={{ fontSize: '14px', color: '#16161A', display: 'block', marginTop: '4px' }}>name@example.com</span>
            </div>
            <div style={{ backgroundColor: '#F7F5EF', border: '1px solid #D9D5C8', padding: '16px', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '12px', color: '#5F5D55', textTransform: 'uppercase', display: 'block' }}>Hours</span>
              <span style={{ fontSize: '14px', color: '#16161A', display: 'block', marginTop: '4px' }}>Monday – Saturday, 09:00 – 18:00 IST</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INQUIRY FORM */}
      <section style={{ padding: '64px 0', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="label-caps">Commercial RFQ</span>
          <h2 style={{ margin: '4px 0 12px 0' }}>Submit a container inquiry</h2>
          <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: '0 0 32px 0' }}>
            Provide target commodity, container volume, and discharge port details.
          </p>

          {submitted ? (
            <div
              style={{
                backgroundColor: '#ECE8DC',
                border: '1px solid #D9D5C8',
                borderRadius: 'var(--radius)',
                padding: '32px',
                textAlign: 'center',
              }}
            >
              <h3 style={{ margin: '0 0 8px 0' }}>Inquiry received</h3>
              <p style={{ margin: 0, fontSize: '15px', color: '#5F5D55' }}>
                Thank you. Our trade desk will review your specifications and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Team Member Name"
                  />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Importing company"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Commodity Category</label>
                  <select
                    className="form-select"
                    value={formData.commodity}
                    onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                  >
                    <option value="Pomegranates">Pomegranates (Bhagwa)</option>
                    <option value="Onions">Fresh Onions (Red & White)</option>
                    <option value="Rice">Rice (Basmati & Non-Basmati)</option>
                    <option value="Spices">Indian Spices</option>
                    <option value="Fresh fruits">Fresh Fruits</option>
                    <option value="Fresh vegetables">Fresh Vegetables</option>
                  </select>
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Destination Port / Country</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formData.destinationPort}
                    onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                    placeholder="Destination port [Sample]"
                  />
                </div>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Requirements / Specifications</label>
                <textarea
                  className="form-textarea"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail grading, packaging preferences, target volume..."
                />
              </div>

              <div>
                <button type="submit" className="btn-primary" style={{ minWidth: '200px' }}>
                  Submit quote request
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 4. WHATSAPP DIRECT */}
      <section style={{ padding: '64px 0', backgroundColor: '#ECE8DC', borderBottom: '1px solid #D9D5C8' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="label-caps">Instant messaging</span>
          <h2 style={{ margin: '4px 0 12px 0' }}>Direct WhatsApp connect</h2>
          <p style={{ fontSize: '16px', lineHeight: '26px', color: '#353535', margin: '0 0 24px 0' }}>
            Message our trade desk directly at +91 00000 00000 for quick inquiries, harvest updates, or document requests.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* 5. CLOSING BAND (navy #10104F) */}
      <section style={{ backgroundColor: '#10104F', color: '#F7F5EF', padding: '72px 0' }} className="dark-section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ color: '#F7F5EF', margin: '0 0 16px 0' }}>Tell us what you need.</h2>
          <p style={{ fontSize: '16px', lineHeight: '26px', color: '#DAD8E8', margin: '0 auto 32px auto' }}>
            Vasudha Freshline Exports LLP · Dedicated container export operations.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
