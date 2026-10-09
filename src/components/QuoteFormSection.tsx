import React, { useState } from 'react';
import { ArrowRight, Check, Lock } from 'lucide-react';

interface QuoteFormSectionProps {
  initialProduct?: string;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({ initialProduct = '' }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneCode: '+971',
    mobile: '',
    product: initialProduct,
    quantityNum: '',
    quantityUnit: 'containers',
    destinationCountry: '',
    companyName: '',
    email: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section className="section-quote-light has-glows" id="quote-section">
      {/* Two soft blurred glows (leaf top-left, blue bottom-right) */}
      <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
      <div className="glow-orb glow-blue-br" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column (Mist background with dark text, eyebrow, 4 ticks) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <span className="eyebrow">
                Request a quote
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: '1.2', color: 'var(--navy)', margin: 0 }}>
              Request a quote in a <span className="text-highlight-leaf">minute</span>. We&apos;ll take it from there.
            </h2>
            <div className="section-intro-bar" style={{ margin: '4px 0 0 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                <span style={{ color: 'var(--olive)', display: 'flex' }}>
                  <Check size={18} strokeWidth={2.5} />
                </span>
                <span>Free enquiry, no obligation</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                <span style={{ color: 'var(--olive)', display: 'flex' }}>
                  <Check size={18} strokeWidth={2.5} />
                </span>
                <span>Specification and indicative price from our team</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                <span style={{ color: 'var(--olive)', display: 'flex' }}>
                  <Check size={18} strokeWidth={2.5} />
                </span>
                <span>One contact person from start to finish</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                <span style={{ color: 'var(--olive)', display: 'flex' }}>
                  <Check size={18} strokeWidth={2.5} />
                </span>
                <span>Your details stay private</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large White Form Card with --shadow-lg */}
          <div className="quote-white-card">
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--olive-tint)',
                    color: 'var(--olive-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                  }}
                >
                  <Check size={32} strokeWidth={3} />
                </div>
                <h3 style={{ marginBottom: '8px' }}>Thank you.</h3>
                <p style={{ color: 'var(--body)', fontSize: '16px', marginBottom: '24px' }}>
                  Your request is with our team. We will review your specification and get back to you shortly.
                </p>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      fullName: '',
                      phoneCode: '+971',
                      mobile: '',
                      product: initialProduct,
                      quantityNum: '',
                      quantityUnit: 'containers',
                      destinationCountry: '',
                      companyName: '',
                      email: '',
                    });
                  }}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '24px' }}>Tell us what you need.</h3>

                {/* Full Name* */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                    Full name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    className="input"
                  />
                </div>

                {/* WhatsApp / mobile* */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                    WhatsApp / mobile *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '8px' }}>
                    <select
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleFormChange}
                      className="input"
                    >
                      <option value="+971">+971 (UAE)</option>
                      <option value="+966">+966 (KSA)</option>
                      <option value="+968">+968 (OM)</option>
                      <option value="+965">+965 (KW)</option>
                      <option value="+974">+974 (QA)</option>
                      <option value="+65">+65 (SG)</option>
                      <option value="+60">+60 (MY)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+31">+31 (NL)</option>
                      <option value="+91">+91 (IN)</option>
                      <option value="+1">+1 (US)</option>
                    </select>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      placeholder="50 123 4567"
                      value={formData.mobile}
                      onChange={handleFormChange}
                      className="input"
                    />
                  </div>
                </div>

                {/* Product* & Quantity* */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                      Product *
                    </label>
                    <select
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleFormChange}
                      className="input"
                    >
                      <option value="" disabled>Select product</option>
                      <option value="Pomegranates">Pomegranates</option>
                      <option value="Onions">Onions</option>
                      <option value="Rice">Rice</option>
                      <option value="Spices">Spices</option>
                      <option value="Fresh fruits">Fresh fruits</option>
                      <option value="Fresh vegetables">Fresh vegetables</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                      Quantity *
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 110px', gap: '6px' }}>
                      <input
                        type="number"
                        name="quantityNum"
                        required
                        min="1"
                        placeholder="e.g. 2"
                        value={formData.quantityNum}
                        onChange={handleFormChange}
                        className="input"
                      />
                      <select
                        name="quantityUnit"
                        value={formData.quantityUnit}
                        onChange={handleFormChange}
                        className="input"
                      >
                        <option value="containers">Containers</option>
                        <option value="tonnes">Tonnes</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Destination country* */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                    Destination country *
                  </label>
                  <input
                    type="text"
                    name="destinationCountry"
                    required
                    placeholder="e.g. United Arab Emirates"
                    value={formData.destinationCountry}
                    onChange={handleFormChange}
                    className="input"
                  />
                </div>

                {/* Company Name (optional) & Email (optional) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                      Company name <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Ltd"
                      value={formData.companyName}
                      onChange={handleFormChange}
                      className="input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                      Email <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="input"
                    />
                  </div>
                </div>

                {/* Full width button & privacy lock line */}
                <div style={{ marginTop: '8px' }}>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={formSubmitting}
                    style={{ width: '100%' }}
                  >
                    <span>{formSubmitting ? 'Submitting...' : 'Get my quote'}</span>
                    <ArrowRight size={17} />
                  </button>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: 'var(--muted)',
                    textAlign: 'center',
                    marginTop: '4px',
                  }}
                >
                  <Lock size={13} style={{ color: 'var(--olive)' }} />
                  <span>Your details stay private. No spam, ever.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
