import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputBase: React.CSSProperties = {
  width: '100%',
  background: '#13161E',
  border: '1px solid #1F2330',
  color: '#F0F2F8',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 400,
  fontSize: '0.9rem',
  padding: '0.8rem 1rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  display: 'block',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 600,
  fontSize: '0.7rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#9CA3AF',
  marginBottom: '0.5rem',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    // Opens user's mail client pre-filled — replace with Formspree/EmailJS for production
    window.open(`mailto:amarchiori.web@gmail.com?subject=${subject}&body=${body}`);
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const handleReset = () => setStatus('idle');

  const getBorderColor = (field: string) =>
    focusedField === field ? '#FF6B8A' : '#1F2330';

  return (
    <section id="contact" style={{ padding: '5rem 1.25rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Section heading */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF6B8A', margin: '0 0 1rem' }}>
          Contact
        </p>
        <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: '#F0F2F8', margin: '0 0 0.75rem', lineHeight: 1.2 }}>
          Let's work together.
        </h2>
        <div style={{ height: '3px', width: '80px', background: '#FF0844', marginBottom: '2rem' }} />

        {/* Two-col layout: copy + form */}
        <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left: copy + quick links */}
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.95rem', color: '#9CA3AF', lineHeight: 1.8, margin: '0 0 2rem' }}>
              I'm always open to new opportunities, collaborations, and conversations. Fill out the form or reach out directly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { label: 'Location', value: 'Arnold, MD — open to remote', href: null },
                { label: 'Email', value: 'amarchiori.web@gmail.com', href: 'mailto:amarchiori.web@gmail.com' },
                { label: 'LinkedIn', value: 'linkedin.com/in/alessandra-marchiori', href: 'https://linkedin.com/in/alessandra-marchiori' },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.2rem' }}>{label}</div>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#FF6B8A', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#F0F2F8')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#FF6B8A')}
                    >{value}</a>
                  ) : (
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#9CA3AF' }}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {/* ── Success state ── */}
            {status === 'success' ? (
              <div
                role="status"
                aria-live="polite"
                style={{ background: '#13161E', border: '1px solid #1F2330', borderLeft: '3px solid #6EE7B7', padding: '2.5rem', textAlign: 'center' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto', display: 'block' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '1.3rem', color: '#F0F2F8', margin: '0 0 0.5rem' }}>Message sent!</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#9CA3AF', margin: '0 0 1.5rem' }}>Your mail client should have opened with the message pre-filled.</p>
                <button onClick={handleReset}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FF6B8A', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Error banner */}
                {status === 'error' && (
                  <div role="alert" aria-live="assertive" style={{ background: 'rgba(255,8,68,0.08)', border: '1px solid rgba(255,8,68,0.3)', padding: '0.75rem 1rem', marginBottom: '1.25rem', fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#FF6B8A' }}>
                    Please fill in your name, email, and message.
                  </div>
                )}

                {/* Name + Email row */}
                <div className="contact-name-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>Name *</label>
                    <input
                      id="contact-name" name="name" type="text"
                      value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      required
                      style={{ ...inputBase, borderColor: getBorderColor('name') }}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>Email *</label>
                    <input
                      id="contact-email" name="email" type="email"
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      style={{ ...inputBase, borderColor: getBorderColor('email') }}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
                  <input
                    id="contact-subject" name="subject" type="text"
                    value={form.subject} onChange={handleChange}
                    placeholder="What's this about?"
                    style={{ ...inputBase, borderColor: getBorderColor('subject') }}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="contact-message" style={labelStyle}>Message *</label>
                  <textarea
                    id="contact-message" name="message"
                    value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required rows={5}
                    style={{ ...inputBase, resize: 'vertical', minHeight: '130px', borderColor: getBorderColor('message'), fontFamily: 'Inter, sans-serif' }}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', minHeight: '48px', padding: '0 2rem', width: '100%', background: status === 'loading' ? '#3A0018' : '#FF0844', color: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer', transition: 'opacity 0.2s, transform 0.2s', opacity: status === 'loading' ? 0.7 : 1 }}
                  onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.opacity = '0.88'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = status === 'loading' ? '0.7' : '1'; }}
                >
                  {status === 'loading' ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin 0.8s linear infinite' }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </>
                  )}
                </button>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#9CA3AF', marginTop: '0.75rem', textAlign: 'center' }}>
                  Opens your mail client pre-filled — no data is stored.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '4.5rem', paddingTop: '2rem', borderTop: '1px solid #1F2330', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#9CA3AF' }}>
            © 2026 Alessandra Marchiori
          </span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#1F2330' }}>
            amarchiori.com
          </span>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 741px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 520px) {
          .contact-layout form > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
