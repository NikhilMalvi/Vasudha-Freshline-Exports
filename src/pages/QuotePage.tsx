import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ChevronDown,
  Paperclip,
} from 'lucide-react';

interface QuotePageProps {
  initialProduct?: string;
  onNavigate: (path: string) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({
  initialProduct = '',
  onNavigate,
}) => {
  // Products multi-select (NOTHING pre-selected by default as per rule)
  const productOptions = [
    'Pomegranates',
    'Onions',
    'Rice',
    'Spices',
    'Fresh fruits',
    'Fresh vegetables',
    'Other',
  ];

  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    initialProduct && productOptions.includes(initialProduct) ? [initialProduct] : []
  );

  const toggleProduct = (prod: string) => {
    setSelectedProducts((prev) =>
      prev.includes(prod) ? prev.filter((p) => p !== prod) : [...prev, prod]
    );
  };

  // Form State
  const [quantity, setQuantity] = useState('');
  const [quantityUnit, setQuantityUnit] = useState('containers');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [yourName, setYourName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [consent, setConsent] = useState(false);

  // Expanded fields
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [deliveryMonth, setDeliveryMonth] = useState('');
  const [destinationPort, setDestinationPort] = useState('');
  const [tradeTerm, setTradeTerm] = useState('FOB');
  const [packingPreference, setPackingPreference] = useState('');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');

  // Submit state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert('Please agree to be contacted about this enquiry.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const whatsappUrl =
    'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  return (
    <div className="contact-page-content" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* =========================================================================
          1. HERO (.section ivory, short)
          ========================================================================= */}
      <section className="section" style={{ paddingTop: '56px', paddingBottom: '48px' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: 'var(--muted)',
              marginBottom: '20px',
            }}
          >
            <button
              type="button"
              onClick={() => onNavigate('/')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--charcoal)', cursor: 'pointer', font: 'inherit' }}
            >
              Home
            </button>
            <span>/</span>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Contact</span>
          </nav>

          <span className="eyebrow">CONTACT</span>
          <h1 style={{ margin: '12px 0 16px 0' }}>Tell us what you need.</h1>
          <p style={{ margin: 0, fontSize: '18px', lineHeight: '28px', color: 'var(--charcoal)' }}>
            Share the product, quantity and destination. We reply with specification and indicative pricing within [Sample] hours.
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. TWO COLUMNS ON BONE BACKGROUND (.section-bone)
          ========================================================================= */}
      <section className="section-bone" style={{ paddingTop: '56px', paddingBottom: '72px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: '40px',
              alignItems: 'start',
            }}
          >
            {/* LEFT COLUMN: White rounded form card */}
            <div className="card" style={{ padding: '36px', boxShadow: 'var(--shadow-soft)' }}>
              {isSubmitted ? (
                /* Success State */
                <div style={{ textAlign: 'center', padding: '36px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
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
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 style={{ margin: 0, fontSize: '26px', fontFamily: 'var(--font-serif)' }}>
                    Thank you. Your request is with our team.
                  </h3>

                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--charcoal)', lineHeight: '24px', maxWidth: '420px' }}>
                    We will review your requirements and respond with export specification and indicative container pricing shortly.
                  </p>

                  <div
                    style={{
                      padding: '10px 20px',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'var(--bone)',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--navy)',
                      letterSpacing: '0.04em',
                      marginTop: '8px',
                    }}
                  >
                    Reference: VF-0000
                  </div>

                  <div style={{ paddingTop: '16px' }}>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        setIsSubmitted(false);
                        setSelectedProducts([]);
                        setQuantity('');
                        setDestinationCountry('');
                        setCompanyName('');
                        setYourName('');
                        setEmail('');
                        setWhatsappNumber('');
                        setConsent(false);
                      }}
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* 7 Visible Form Fields */
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  {/* Field 1: Products (Styled Multi-Select Chips) */}
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px' }}>
                      Products <span style={{ color: 'var(--olive)', fontWeight: 400 }}>(select one or more)</span>
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {productOptions.map((prod) => {
                        const isSelected = selectedProducts.includes(prod);
                        return (
                          <button
                            key={prod}
                            type="button"
                            onClick={() => toggleProduct(prod)}
                            style={{
                              padding: '6px 14px',
                              borderRadius: 'var(--radius-pill)',
                              fontSize: '13px',
                              fontWeight: 500,
                              cursor: 'pointer',
                              border: isSelected ? '1px solid var(--navy)' : '1px solid var(--line)',
                              backgroundColor: isSelected ? 'var(--navy)' : 'var(--white)',
                              color: isSelected ? 'var(--white)' : 'var(--charcoal)',
                              transition: 'all 200ms ease',
                            }}
                          >
                            {prod}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Field 2: Quantity + Unit Selector */}
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                      Quantity
                    </label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <input
                        type="number"
                        min="1"
                        placeholder="e.g. 2"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                        className="form-input"
                        style={{
                          flex: 1,
                          height: '48px',
                          border: '1px solid var(--line)',
                          borderRadius: 'var(--radius-btn)',
                          padding: '0 14px',
                          fontSize: '15px',
                        }}
                      />
                      <select
                        value={quantityUnit}
                        onChange={(e) => setQuantityUnit(e.target.value)}
                        className="form-select"
                        style={{
                          width: '140px',
                          height: '48px',
                          border: '1px solid var(--line)',
                          borderRadius: 'var(--radius-btn)',
                          padding: '0 12px',
                          fontSize: '14px',
                          backgroundColor: 'var(--white)',
                        }}
                      >
                        <option value="containers">containers (FCL)</option>
                        <option value="tonnes">tonnes (MT)</option>
                      </select>
                    </div>
                  </div>

                  {/* Field 3: Destination country */}
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                      Destination country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. United Arab Emirates, Malaysia, UK"
                      value={destinationCountry}
                      onChange={(e) => setDestinationCountry(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        height: '48px',
                        border: '1px solid var(--line)',
                        borderRadius: 'var(--radius-btn)',
                        padding: '0 14px',
                        fontSize: '15px',
                      }}
                    />
                  </div>

                  {/* Field 4: Company name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                      Company name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Import Co. LLC"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        height: '48px',
                        border: '1px solid var(--line)',
                        borderRadius: 'var(--radius-btn)',
                        padding: '0 14px',
                        fontSize: '15px',
                      }}
                    />
                  </div>

                  {/* Field 5: Your name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                      Your name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Buyer Name"
                      value={yourName}
                      onChange={(e) => setYourName(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        height: '48px',
                        border: '1px solid var(--line)',
                        borderRadius: 'var(--radius-btn)',
                        padding: '0 14px',
                        fontSize: '15px',
                      }}
                    />
                  </div>

                  {/* Field 6: Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{
                        width: '100%',
                        height: '48px',
                        border: '1px solid var(--line)',
                        borderRadius: 'var(--radius-btn)',
                        padding: '0 14px',
                        fontSize: '15px',
                      }}
                    />
                  </div>

                  {/* Field 7: WhatsApp number with country code */}
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                      WhatsApp number
                    </label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        style={{
                          width: '90px',
                          height: '48px',
                          border: '1px solid var(--line)',
                          borderRadius: 'var(--radius-btn)',
                          padding: '0 10px',
                          fontSize: '14px',
                          backgroundColor: 'var(--white)',
                        }}
                      >
                        <option value="+91">+91 (IN)</option>
                        <option value="+971">+971 (AE)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+1">+1 (US)</option>
                        <option value="+65">+65 (SG)</option>
                        <option value="+60">+60 (MY)</option>
                        <option value="+966">+966 (SA)</option>
                        <option value="+974">+974 (QA)</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="00000 00000"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        required
                        style={{
                          flex: 1,
                          height: '48px',
                          border: '1px solid var(--line)',
                          borderRadius: 'var(--radius-btn)',
                          padding: '0 14px',
                          fontSize: '15px',
                        }}
                      />
                    </div>
                  </div>

                  {/* "Add more details" accordion link */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowMoreDetails(!showMoreDetails)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--olive-deep)',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        padding: 0,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span>{showMoreDetails ? '− Hide optional details' : '+ Add more details'}</span>
                      <ChevronDown
                        size={15}
                        style={{
                          transform: showMoreDetails ? 'rotate(180deg)' : 'none',
                          transition: 'transform 200ms ease',
                        }}
                      />
                    </button>

                    {showMoreDetails && (
                      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', backgroundColor: 'var(--bone)', borderRadius: '10px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '6px' }}>
                            Target delivery month
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. November / December"
                            value={deliveryMonth}
                            onChange={(e) => setDeliveryMonth(e.target.value)}
                            style={{ width: '100%', height: '42px', border: '1px solid var(--line)', borderRadius: '8px', padding: '0 12px', fontSize: '14px', backgroundColor: 'var(--white)' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '6px' }}>
                            Destination discharge port
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Jebel Ali, Port Klang, Felixstowe"
                            value={destinationPort}
                            onChange={(e) => setDestinationPort(e.target.value)}
                            style={{ width: '100%', height: '42px', border: '1px solid var(--line)', borderRadius: '8px', padding: '0 12px', fontSize: '14px', backgroundColor: 'var(--white)' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '6px' }}>
                            Trade term
                          </label>
                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {['FOB', 'CFR', 'CIF', 'not sure'].map((term) => (
                              <button
                                key={term}
                                type="button"
                                onClick={() => setTradeTerm(term)}
                                style={{
                                  padding: '6px 12px',
                                  borderRadius: '6px',
                                  fontSize: '13px',
                                  border: tradeTerm === term ? '1px solid var(--navy)' : '1px solid var(--line)',
                                  backgroundColor: tradeTerm === term ? 'var(--navy)' : 'var(--white)',
                                  color: tradeTerm === term ? 'var(--white)' : 'var(--charcoal)',
                                  cursor: 'pointer',
                                }}
                              >
                                {term}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '6px' }}>
                            Packing preference
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 3.5kg carton, 25kg mesh bag"
                            value={packingPreference}
                            onChange={(e) => setPackingPreference(e.target.value)}
                            style={{ width: '100%', height: '42px', border: '1px solid var(--line)', borderRadius: '8px', padding: '0 12px', fontSize: '14px', backgroundColor: 'var(--white)' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '6px' }}>
                            Message or special instructions
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Provide any additional specifications..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ width: '100%', border: '1px solid var(--line)', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', backgroundColor: 'var(--white)', resize: 'vertical' }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '6px' }}>
                            File upload (spec or inquiry PDF)
                          </label>
                          <label
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '8px 14px',
                              border: '1px solid var(--line)',
                              borderRadius: '8px',
                              backgroundColor: 'var(--white)',
                              cursor: 'pointer',
                              fontSize: '13px',
                              color: 'var(--charcoal)',
                            }}
                          >
                            <Paperclip size={14} />
                            <span>{fileName || 'Choose file'}</span>
                            <input
                              type="file"
                              style={{ display: 'none' }}
                              onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                            />
                          </label>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', paddingTop: '4px' }}>
                    <input
                      type="checkbox"
                      id="quote-consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                      style={{ marginTop: '4px', cursor: 'pointer', width: '16px', height: '16px' }}
                    />
                    <label htmlFor="quote-consent" style={{ fontSize: '13px', color: 'var(--charcoal)', lineHeight: '20px', cursor: 'pointer' }}>
                      I agree to be contacted about this enquiry.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div style={{ paddingTop: '8px' }}>
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={isSubmitting}
                      style={{ width: '100%' }}
                    >
                      {isSubmitting ? 'Sending request...' : 'Send request'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Contact Information Card */}
              <div className="card" style={{ padding: '28px', gap: '18px' }}>
                <span className="eyebrow">HEAD OFFICE</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <MapPin size={18} style={{ color: 'var(--olive)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--charcoal)' }}>Street, City, State, PIN</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Phone size={18} style={{ color: 'var(--olive)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--charcoal)' }}>+91 00000 00000</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Mail size={18} style={{ color: 'var(--olive)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--charcoal)' }}>name@example.com</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Clock size={18} style={{ color: 'var(--olive)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--charcoal)' }}>[Sample] hours</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="card" style={{ padding: '28px', gap: '14px', backgroundColor: 'var(--white)' }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink)' }}>
                  Prefer direct messaging?
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--charcoal)', lineHeight: '22px' }}>
                  Our export desk responds directly on WhatsApp for container availability and indicative prices.
                </p>
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ textDecoration: 'none', display: 'inline-flex' }}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* "What happens next" card */}
              <div className="card" style={{ padding: '28px', gap: '16px' }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink)' }}>
                  What happens next
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--olive)', fontWeight: 600 }}>
                      1.
                    </span>
                    <span style={{ fontSize: '14px', color: 'var(--charcoal)', lineHeight: '22px' }}>
                      We review your request.
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--olive)', fontWeight: 600 }}>
                      2.
                    </span>
                    <span style={{ fontSize: '14px', color: 'var(--charcoal)', lineHeight: '22px' }}>
                      We send the specification and an indicative price.
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--olive)', fontWeight: 600 }}>
                      3.
                    </span>
                    <span style={{ fontSize: '14px', color: 'var(--charcoal)', lineHeight: '22px' }}>
                      We agree samples, terms and loading dates.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MAP PLACEHOLDER (rounded #ECE8DC block with pin icon & "Map placeholder")
          ========================================================================= */}
      <section style={{ backgroundColor: 'var(--ivory)', padding: '56px 0 88px 0' }}>
        <div className="container">
          <div
            style={{
              width: '100%',
              height: '320px',
              borderRadius: '16px',
              backgroundColor: '#ECE8DC',
              border: '1px solid var(--line)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              color: 'var(--muted)',
            }}
          >
            <MapPin size={32} style={{ color: 'var(--olive)' }} />
            <span style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '0.02em' }}>
              Map placeholder
            </span>
            <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
              Street, City, State, PIN
            </span>
          </div>
        </div>
      </section>

      {/* 4. No closing band on this page as per rule */}
    </div>
  );
};
