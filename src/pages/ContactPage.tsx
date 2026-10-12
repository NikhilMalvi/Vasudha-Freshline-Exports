import React, { useState } from 'react';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { ClosingCtaBand } from '../components/ClosingCtaBand';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onOpenRfq?: (product?: string) => void;
}

const WhatsAppInlineIcon: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = 'var(--blue)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ display: 'block' }}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.66 20.15 9.3 19.8 8.1 19.14L7.81 18.97L4.69 19.79L5.52 16.75L5.33 16.45C4.6 15.29 4.22 13.93 4.22 11.91C4.22 7.37 7.51 3.67 12.05 3.67ZM8.94 7.42C8.74 7.42 8.54 7.43 8.36 7.74C8.18 8.05 7.67 8.53 7.67 9.51C7.67 10.49 8.38 11.43 8.48 11.57C8.58 11.71 9.87 13.7 11.87 14.56C13.53 15.28 13.87 15.13 14.23 15.1C14.59 15.06 15.39 14.62 15.55 14.16C15.71 13.7 15.71 13.31 15.66 13.23C15.61 13.15 15.48 13.1 15.28 13C15.08 12.9 14.09 12.41 13.91 12.34C13.73 12.27 13.6 12.24 13.47 12.44C13.34 12.64 12.96 13.1 12.84 13.23C12.72 13.36 12.6 13.38 12.4 13.28C12.2 13.18 11.56 12.97 10.8 12.3C10.21 11.78 9.81 11.13 9.69 10.93C9.57 10.73 9.68 10.62 9.78 10.52C9.87 10.43 9.98 10.29 10.08 10.17C10.18 10.05 10.22 9.96 10.29 9.83C10.36 9.7 10.32 9.58 10.27 9.48C10.22 9.38 9.73 8.18 9.53 7.68C9.33 7.2 9.13 7.26 8.97 7.25L8.94 7.42Z" />
  </svg>
);

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenRfq }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState('VF-0000');

  // Form State (Nothing pre-filled or pre-selected)
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+91',
    mobile: '',
    email: '',
    companyName: '',
    product: '',
    quantityTonnes: '',
    destinationCountry: '',
    message: '',
  });

  const productsList = [
    'Pomegranates',
    'Onions',
    'Basmati & non-basmati rice',
    'Spices',
    'Fresh fruits',
    'Fresh vegetables',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setReferenceId('VF-0000');
      setFormSubmitted(true);
    }, 600);
  };

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20have%20an%20enquiry.';

  return (
    <div className="contact-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. INNER BANNER (Pattern A)
          ===================================================================== */}
      <InnerBanner
        pill="Get in touch"
        title="Contact Vasudha Freshline Exports"
        subtitle="Fill in your details and we'll get back to you, or reach us directly by phone or WhatsApp."
      />

      {/* =====================================================================
          2. TWO COLUMNS (white section; left 7 of 12 columns, right 5)
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '48px',
              alignItems: 'start',
            }}
          >
            {/* Left 7 Columns: Form */}
            <div className="contact-col-left">
              <h3 style={{ fontSize: '28px', color: 'var(--navy)', marginBottom: '8px' }}>
                Send us a message
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '32px' }}>
                Our export sales desk reviews all trade inquiries and replies with full specifications promptly.
              </p>

              {formSubmitted ? (
                <div
                  style={{
                    backgroundColor: 'var(--mist)',
                    borderRadius: '24px',
                    padding: '40px 32px',
                    border: '1px solid var(--border-subtle)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--leaf-tint)',
                      color: 'var(--leaf)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 style={{ fontSize: '22px', color: 'var(--navy)', marginBottom: '8px' }}>
                    Thank you. Your request is with our team.
                  </h4>
                  <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '16px' }}>
                    We have recorded your commodity requirement and destination details.
                  </p>
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'var(--white)',
                      padding: '8px 18px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      border: '1px solid var(--line)',
                      marginBottom: '28px',
                    }}
                  >
                    Reference: {referenceId}
                  </div>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          fullName: '',
                          countryCode: '+91',
                          mobile: '',
                          email: '',
                          companyName: '',
                          product: '',
                          quantityTonnes: '',
                          destinationCountry: '',
                          message: '',
                        });
                      }}
                    >
                      <span>Submit another enquiry</span>
                    </button>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => onNavigate('/products')}
                    >
                      <span>Explore products</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  {/* Row 1: Full name* | WhatsApp / mobile* */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                      gap: '20px',
                    }}
                  >
                    <div>
                      <label
                        htmlFor="fullName"
                        style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}
                      >
                        Full name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="v4-form-input"
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '12px',
                          border: '1px solid var(--border-subtle)',
                          backgroundColor: 'var(--white)',
                          fontSize: '15px',
                          fontFamily: 'var(--font-body)',
                          color: 'var(--navy)',
                          boxSizing: 'border-box',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mobile"
                        style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}
                      >
                        WhatsApp / mobile *
                      </label>
                      <div style={{ display: 'flex' }}>
                        <select
                          name="countryCode"
                          aria-label="Country Code"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="v4-form-select"
                          style={{
                            width: '94px',
                            height: '48px',
                            padding: '0 8px 0 12px',
                            borderTopLeftRadius: '12px',
                            borderBottomLeftRadius: '12px',
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            border: '1px solid var(--border-subtle)',
                            borderRight: 'none',
                            backgroundColor: 'var(--mist)',
                            fontSize: '14px',
                            fontWeight: 600,
                            fontFamily: 'var(--font-body)',
                            color: 'var(--navy)',
                            boxSizing: 'border-box',
                            cursor: 'pointer',
                          }}
                        >
                          <option value="+91">+91 (IN)</option>
                          <option value="+971">+971 (AE)</option>
                          <option value="+966">+966 (SA)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+1">+1 (US)</option>
                          <option value="+65">+65 (SG)</option>
                          <option value="+60">+60 (MY)</option>
                          <option value="+31">+31 (NL)</option>
                        </select>
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          required
                          value={formData.mobile}
                          onChange={handleInputChange}
                          placeholder="Phone number"
                          className="v4-form-input"
                          style={{
                            flex: 1,
                            height: '48px',
                            padding: '0 16px',
                            borderTopRightRadius: '12px',
                            borderBottomRightRadius: '12px',
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            border: '1px solid var(--border-subtle)',
                            backgroundColor: 'var(--white)',
                            fontSize: '15px',
                            fontFamily: 'var(--font-body)',
                            color: 'var(--navy)',
                            boxSizing: 'border-box',
                            transition: 'border-color 0.2s, box-shadow 0.2s',
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email (optional) | Company name (optional) */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                      gap: '20px',
                    }}
                  >
                    <div>
                      <label
                        htmlFor="email"
                        style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}
                      >
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="buyer@example.com"
                        className="v4-form-input"
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '12px',
                          border: '1px solid var(--border-subtle)',
                          backgroundColor: 'var(--white)',
                          fontSize: '15px',
                          fontFamily: 'var(--font-body)',
                          color: 'var(--navy)',
                          boxSizing: 'border-box',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="companyName"
                        style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}
                      >
                        Company name (optional)
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Importing company or trade name"
                        className="v4-form-input"
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '12px',
                          border: '1px solid var(--border-subtle)',
                          backgroundColor: 'var(--white)',
                          fontSize: '15px',
                          fontFamily: 'var(--font-body)',
                          color: 'var(--navy)',
                          boxSizing: 'border-box',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 3: Product* (styled select) | Approx. quantity in tonnes */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                      gap: '20px',
                    }}
                  >
                    <div>
                      <label
                        htmlFor="product"
                        style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}
                      >
                        Product *
                      </label>
                      <select
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleInputChange}
                        className="v4-form-select"
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '12px',
                          border: '1px solid var(--border-subtle)',
                          backgroundColor: 'var(--white)',
                          fontSize: '15px',
                          fontFamily: 'var(--font-body)',
                          color: formData.product ? 'var(--navy)' : 'var(--muted)',
                          boxSizing: 'border-box',
                          cursor: 'pointer',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                        }}
                      >
                        <option value="" disabled>
                          Select product to export *
                        </option>
                        {productsList.map((prod) => (
                          <option key={prod} value={prod} style={{ color: 'var(--navy)' }}>
                            {prod}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="quantityTonnes"
                        style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}
                      >
                        Approx. quantity in tonnes
                      </label>
                      <input
                        type="text"
                        id="quantityTonnes"
                        name="quantityTonnes"
                        value={formData.quantityTonnes}
                        onChange={handleInputChange}
                        placeholder="e.g. 24 tonnes (1 container)"
                        className="v4-form-input"
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 16px',
                          borderRadius: '12px',
                          border: '1px solid var(--border-subtle)',
                          backgroundColor: 'var(--white)',
                          fontSize: '15px',
                          fontFamily: 'var(--font-body)',
                          color: 'var(--navy)',
                          boxSizing: 'border-box',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 4: Destination country* */}
                  <div>
                    <label
                      htmlFor="destinationCountry"
                      style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}
                    >
                      Destination country *
                    </label>
                    <input
                      type="text"
                      id="destinationCountry"
                      name="destinationCountry"
                      required
                      value={formData.destinationCountry}
                      onChange={handleInputChange}
                      placeholder="e.g. United Arab Emirates, Saudi Arabia, Netherlands"
                      className="v4-form-input"
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0 16px',
                        borderRadius: '12px',
                        border: '1px solid var(--border-subtle)',
                        backgroundColor: 'var(--white)',
                        fontSize: '15px',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--navy)',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                    />
                  </div>

                  {/* Message (textarea) */}
                  <div>
                    <label
                      htmlFor="message"
                      style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}
                    >
                      Message (specifications, preferred packing, port)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Provide target destination port, caliber/size specifications, packaging preference (cartons, mesh bags, polypropylene), or target shipment month."
                      className="v4-form-textarea"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: '1px solid var(--border-subtle)',
                        backgroundColor: 'var(--white)',
                        fontSize: '15px',
                        lineHeight: '24px',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--navy)',
                        boxSizing: 'border-box',
                        resize: 'vertical',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                    />
                  </div>

                  <div style={{ marginTop: '8px' }}>
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={formSubmitting}
                      style={{ width: '100%', maxWidth: '280px' }}
                    >
                      <span>{formSubmitting ? 'Submitting...' : 'Submit enquiry'}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right 5 Columns: Our Details */}
            <div className="contact-col-right">
              <h3 style={{ fontSize: '28px', color: 'var(--navy)', marginBottom: '8px' }}>
                Our details
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '24px' }}>
                Direct channels to our export operations managers.
              </p>

              {/* Three rows separated by hairlines */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Row 1: Phone in leaf */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    padding: '18px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      minWidth: '56px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--leaf-tint)',
                      color: 'var(--leaf)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '2px' }}>Phone</div>
                    <a
                      href="tel:+910000000000"
                      style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)', textDecoration: 'none' }}
                    >
                      +91 00000 00000
                    </a>
                  </div>
                </div>

                {/* Row 2: WhatsApp in blue */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    padding: '18px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      minWidth: '56px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--blue-tint)',
                      color: 'var(--blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <WhatsAppInlineIcon size={24} color="var(--blue)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '2px' }}>WhatsApp</div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '17px',
                        fontWeight: 700,
                        color: 'var(--navy)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span>Chat with us</span>
                      <ArrowRight size={14} style={{ color: 'var(--blue)' }} />
                    </a>
                  </div>
                </div>

                {/* Row 3: Email in plum */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    padding: '18px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      minWidth: '56px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--plum-tint)',
                      color: 'var(--plum)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '2px' }}>Email</div>
                    <a
                      href="mailto:name@example.com"
                      style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)', textDecoration: 'none' }}
                    >
                      name@example.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Leaf-tint rounded card (padding 24px, fully visible, not cropped) */}
              <div
                style={{
                  marginTop: '28px',
                  backgroundColor: '#EEF3DC',
                  borderRadius: '20px',
                  padding: '24px',
                  border: '1px solid rgba(91, 122, 31, 0.16)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    minWidth: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--white)',
                    color: 'var(--leaf)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-xs)',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>
                    Registered Office
                  </div>
                  <div style={{ fontSize: '14px', lineHeight: '20px', color: 'var(--body)', marginBottom: '8px' }}>
                    Street, City, State, PIN
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} />
                    <span>Mon – Sat: 9 AM – 7 PM IST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. MAP PLACEHOLDER (white section)
          Full-width rounded block (#F4F6EF, --shadow-md) with pin icon and "Map placeholder"
          ===================================================================== */}
      <section className="section section-white" style={{ paddingTop: 0, paddingBottom: '72px' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#F4F6EF',
              borderRadius: '24px',
              padding: '64px 32px',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '280px',
            }}
          >
            {/* Subtle background geographic grid pattern */}
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.12,
                pointerEvents: 'none',
              }}
              viewBox="0 0 800 280"
              fill="none"
            >
              <line x1="0" y1="70" x2="800" y2="70" stroke="var(--navy)" strokeWidth="1" strokeDasharray="6 6" />
              <line x1="0" y1="140" x2="800" y2="140" stroke="var(--navy)" strokeWidth="1" strokeDasharray="6 6" />
              <line x1="0" y1="210" x2="800" y2="210" stroke="var(--navy)" strokeWidth="1" strokeDasharray="6 6" />
              <line x1="200" y1="0" x2="200" y2="280" stroke="var(--navy)" strokeWidth="1" strokeDasharray="6 6" />
              <line x1="400" y1="0" x2="400" y2="280" stroke="var(--navy)" strokeWidth="1" strokeDasharray="6 6" />
              <line x1="600" y1="0" x2="600" y2="280" stroke="var(--navy)" strokeWidth="1" strokeDasharray="6 6" />
              <circle cx="400" cy="140" r="80" stroke="var(--leaf)" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'var(--white)',
                color: 'var(--leaf)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '16px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <MapPin size={28} />
            </div>

            <div
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--navy)',
                marginBottom: '4px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Map placeholder
            </div>

            <p
              style={{
                fontSize: '14px',
                color: 'var(--muted)',
                margin: 0,
                maxWidth: '440px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Corporate Office & Regional Packhouse Network · Western India Export Hub
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CLOSING CTA BAND (Pattern E)
          ===================================================================== */}
      <ClosingCtaBand onOpenRfq={() => (onOpenRfq ? onOpenRfq() : null)} />
    </div>
  );
};
