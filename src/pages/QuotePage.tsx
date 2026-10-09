import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  Lock,
  Paperclip,
  ChevronDown,
} from 'lucide-react';

interface QuotePageProps {
  initialProduct?: string;
  onNavigate: (path: string) => void;
}

const WhatsAppInlineIcon: React.FC = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="var(--navy)" style={{ display: 'block' }}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.66 20.15 9.3 19.8 8.1 19.14L7.81 18.97L4.69 19.79L5.52 16.75L5.33 16.45C4.6 15.29 4.22 13.93 4.22 11.91C4.22 7.37 7.51 3.67 12.05 3.67ZM8.94 7.42C8.74 7.42 8.54 7.43 8.36 7.74C8.18 8.05 7.67 8.53 7.67 9.51C7.67 10.49 8.38 11.43 8.48 11.57C8.58 11.71 9.87 13.7 11.87 14.56C13.53 15.28 13.87 15.13 14.23 15.1C14.59 15.06 15.39 14.62 15.55 14.16C15.71 13.7 15.71 13.31 15.66 13.23C15.61 13.15 15.48 13.1 15.28 13C15.08 12.9 14.09 12.41 13.91 12.34C13.73 12.27 13.6 12.24 13.47 12.44C13.34 12.64 12.96 13.1 12.84 13.23C12.72 13.36 12.6 13.38 12.4 13.28C12.2 13.18 11.56 12.97 10.8 12.3C10.21 11.78 9.81 11.13 9.69 10.93C9.57 10.73 9.68 10.62 9.78 10.52C9.87 10.43 9.98 10.29 10.08 10.17C10.18 10.05 10.22 9.96 10.29 9.83C10.36 9.7 10.32 9.58 10.27 9.48C10.22 9.38 9.73 8.18 9.53 7.68C9.33 7.2 9.13 7.26 8.97 7.25L8.94 7.42Z" />
  </svg>
);

export const QuotePage: React.FC<QuotePageProps> = ({
  initialProduct = '',
  onNavigate,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Form Fields (Nothing pre-selected)
  const [formData, setFormData] = useState({
    fullName: '',
    phoneCode: '+971',
    mobile: '',
    product: initialProduct || '',
    quantityNum: '',
    quantityUnit: 'containers',
    destinationCountry: '',
    companyName: '',
    email: '',
    // Expanded optional fields
    deliveryMonth: '',
    destinationPort: '',
    tradeTerm: 'FOB',
    packingPreference: '',
    message: '',
    fileName: '',
  });

  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  return (
    <div className="contact-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. INNER PAGE HERO (compact 280px navy gradient banner with watermark)
          ===================================================================== */}
      <section className="inner-page-hero">
        <img
          src="/vasudha-mark-light-for-navy.svg"
          alt=""
          aria-hidden="true"
          className="inner-page-hero-swoosh"
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav className="inner-page-hero-breadcrumb" aria-label="Breadcrumb">
            <button type="button" onClick={() => onNavigate('/')}>
              Home
            </button>
            <span>/</span>
            <span style={{ color: '#FFFFFF' }}>Contact</span>
          </nav>
          <span
            className="eyebrow"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              color: '#FFFFFF',
            }}
          >
            Contact
          </span>
          <h1>Talk to a real person.</h1>
          <p className="sub-line">
            Pick any channel. Our team replies promptly to export enquiries.
          </p>
        </div>
      </section>

      {/* =====================================================================
          2. CHANNELS (white section with two glows)
          Three channel .card items
          ===================================================================== */}
      <section className="section section-white has-glows" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '28px',
            }}
          >
            {/* WhatsApp */}
            <div className="card" style={{ textAlign: 'center', alignItems: 'center' }}>
              <div className="icon-circle" style={{ backgroundColor: 'var(--leaf-tint)', color: 'var(--leaf)', margin: '0 auto 16px auto' }}>
                <WhatsAppInlineIcon />
              </div>
              <h3 style={{ marginBottom: '4px' }}>WhatsApp</h3>
              <p style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '18px', margin: '4px 0' }}>
                +91 00000 00000
              </p>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>
                Typically replies in minutes
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%' }}
              >
                <WhatsAppInlineIcon />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Call us */}
            <div className="card" style={{ textAlign: 'center', alignItems: 'center' }}>
              <div className="icon-circle" style={{ backgroundColor: 'var(--blue-tint)', color: 'var(--blue)', margin: '0 auto 16px auto' }}>
                <Phone size={24} />
              </div>
              <h3 style={{ marginBottom: '4px' }}>Call us</h3>
              <p style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '18px', margin: '4px 0' }}>
                +91 00000 00000
              </p>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>
                Mon – Sat: 9:00 AM – 6:00 PM IST
              </p>
              <a
                href="tel:+910000000000"
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                <Phone size={16} />
                <span>Call our desk</span>
              </a>
            </div>

            {/* Email */}
            <div className="card" style={{ textAlign: 'center', alignItems: 'center' }}>
              <div className="icon-circle" style={{ backgroundColor: 'var(--teal-tint)', color: 'var(--teal)', margin: '0 auto 16px auto' }}>
                <Mail size={24} />
              </div>
              <h3 style={{ marginBottom: '4px' }}>Email</h3>
              <p style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '18px', margin: '4px 0' }}>
                name@example.com
              </p>
              <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>
                Reply within 2 hours
              </p>
              <a
                href="mailto:name@example.com"
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                <Mail size={16} />
                <span>Send an email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. FORM SECTION (Light mist with white card + glows)
          ===================================================================== */}
      <section className="section-quote-light has-glows" style={{ paddingTop: '72px', paddingBottom: '80px' }}>
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '48px',
              alignItems: 'start',
            }}
          >
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <span className="eyebrow">Get started</span>
              </div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: '1.2', color: 'var(--navy)', margin: 0 }}>
                Request a quote in a <span className="text-highlight-leaf">minute</span>.
              </h2>
              <div className="section-intro-bar" style={{ margin: '4px 0 0 0' }} />
              <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: '28px', margin: 0 }}>
                Share your export requirements and our commercial specialists will reply with specifications and indicative rates.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                  <span style={{ color: 'var(--olive)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>Free enquiry, no obligation</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                  <span style={{ color: 'var(--olive)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>Specification and indicative price from our team</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                  <span style={{ color: 'var(--olive)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>One contact person from start to finish</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                  <span style={{ color: 'var(--olive)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>Your details stay private</span>
                </div>
              </div>
            </div>

            {/* Right: White form card */}
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
                  <h3 style={{ marginBottom: '8px' }}>Thank you. Your request is with our team.</h3>
                  <div
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '14px',
                      fontWeight: 700,
                      backgroundColor: 'var(--mist)',
                      color: 'var(--navy)',
                      display: 'inline-block',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-pill)',
                      marginBottom: '16px',
                    }}
                  >
                    Reference: VF-0000
                  </div>
                  <p style={{ color: 'var(--body)', fontSize: '15px', marginBottom: '24px' }}>
                    Our team will review your parameters and follow up shortly on WhatsApp and email.
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
                        product: '',
                        quantityNum: '',
                        quantityUnit: 'containers',
                        destinationCountry: '',
                        companyName: '',
                        email: '',
                        deliveryMonth: '',
                        destinationPort: '',
                        tradeTerm: 'FOB',
                        packingPreference: '',
                        message: '',
                        fileName: '',
                      });
                    }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '24px' }}>Tell us what you need.</h3>

                  {/* 1. Full name* */}
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

                  {/* 2. WhatsApp / mobile* */}
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

                  {/* 3. Product* & 4. Quantity* */}
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

                  {/* 5. Destination country* */}
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

                  {/* 6. Company name & 7. Email */}
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

                  {/* Styled "Add more details" toggle */}
                  <div style={{ paddingTop: '4px' }}>
                    <button
                      type="button"
                      onClick={() => setShowMoreDetails(!showMoreDetails)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--navy)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        padding: 0,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'underline',
                      }}
                    >
                      <span>{showMoreDetails ? '− Hide additional details' : '+ Add more details'}</span>
                      <ChevronDown
                        size={15}
                        style={{
                          transform: showMoreDetails ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                  </div>

                  {/* Expanded Additional Details */}
                  {showMoreDetails && (
                    <div
                      style={{
                        backgroundColor: 'var(--mist)',
                        borderRadius: '12px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        marginTop: '4px',
                      }}
                    >
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
                            Delivery month
                          </label>
                          <input
                            type="text"
                            name="deliveryMonth"
                            placeholder="e.g. November 2026"
                            value={formData.deliveryMonth}
                            onChange={handleFormChange}
                            className="input"
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
                            Destination port
                          </label>
                          <input
                            type="text"
                            name="destinationPort"
                            placeholder="e.g. Jebel Ali Port"
                            value={formData.destinationPort}
                            onChange={handleFormChange}
                            className="input"
                          />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
                            Trade term
                          </label>
                          <select
                            name="tradeTerm"
                            value={formData.tradeTerm}
                            onChange={handleFormChange}
                            className="input"
                          >
                            <option value="FOB">FOB (Free on Board)</option>
                            <option value="CFR">CFR (Cost & Freight)</option>
                            <option value="CIF">CIF (Cost, Insurance, Freight)</option>
                            <option value="Not sure">Not sure</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
                            Packing preference
                          </label>
                          <input
                            type="text"
                            name="packingPreference"
                            placeholder="e.g. 5kg cartons / 25kg bags"
                            value={formData.packingPreference}
                            onChange={handleFormChange}
                            className="input"
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
                          Message or specifications
                        </label>
                        <textarea
                          name="message"
                          placeholder="Provide target counts, calibration, or delivery schedule preferences..."
                          value={formData.message}
                          onChange={handleFormChange}
                          className="input"
                          style={{ minHeight: '80px' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
                          Specification document / RFQ attachment
                        </label>
                        <label
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: 'var(--white)',
                            border: '1px dashed var(--line)',
                            borderRadius: '10px',
                            padding: '10px 14px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            color: 'var(--muted)',
                          }}
                        >
                          <Paperclip size={16} />
                          <span>{formData.fileName || 'Upload spec sheet (PDF, JPG, PNG)'}</span>
                          <input
                            type="file"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                          />
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
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

      {/* =====================================================================
          4. MAP PLACEHOLDER & ADDRESS CARD
          #F4F6EF rounded map placeholder + address card
          ===================================================================== */}
      <section className="section section-white" style={{ paddingTop: '56px', paddingBottom: '72px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '32px',
              alignItems: 'stretch',
            }}
          >
            {/* Map Placeholder */}
            <div
              style={{
                backgroundColor: '#F4F6EF',
                borderRadius: 'var(--radius-img)',
                border: '1px solid var(--line)',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                textAlign: 'center',
                padding: '32px',
              }}
            >
              <div className="icon-circle" style={{ backgroundColor: 'var(--white)' }}>
                <MapPin size={24} style={{ color: 'var(--olive-deep)' }} />
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '18px', color: 'var(--navy)' }}>
                Map placeholder
              </div>
              <p style={{ fontSize: '14px', color: 'var(--muted)', maxWidth: '340px', margin: 0 }}>
                Registered Office: Pune, Maharashtra, India
              </p>
            </div>

            {/* Address Card */}
            <div className="card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="eyebrow" style={{ marginBottom: '12px' }}>Registered Office</span>
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Vasudha Freshline Exports LLP</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: 'var(--body)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={18} style={{ color: 'var(--olive)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Street, City, State, PIN (Pune, Maharashtra, India)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={18} style={{ color: 'var(--olive)', flexShrink: 0 }} />
                  <span>+91 00000 00000</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={18} style={{ color: 'var(--olive)', flexShrink: 0 }} />
                  <span>exports@vasudhafreshline.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Clock size={18} style={{ color: 'var(--olive)', flexShrink: 0, marginTop: '2px' }} />
                  <span>Visiting hours: Mon – Sat, 09:00 – 18:00 IST</span>
                </div>
                <div style={{ paddingTop: '8px', borderTop: '1px solid var(--line)', fontSize: '13px', color: 'var(--muted)' }}>
                  LLPIN: AAA-0000 · GST: 0000000000 · IEC: 0000000000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
