export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.25rem',
        paddingTop: '80px',
        overflow: 'hidden',
      }}
    >
      {/* ── Background ──────────────────────────────────── */}

      {/* Glow orb — top right (red) outer halo */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        right: '-200px',
        zIndex: 0,
        width: '900px',
        height: '900px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(255,8,68,0.18) 0%, rgba(255,8,68,0.06) 45%, transparent 70%)',
        animation: 'pulseGlow 6s ease-in-out infinite',
        pointerEvents: 'none',
        filter: 'blur(60px)',
      }} />

      {/* Glow orb — top right (red) bright core */}
      <div style={{
        position: 'absolute',
        top: '-60px',
        right: '-60px',
        zIndex: 0,
        width: '480px',
        height: '480px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(255,8,68,0.65) 0%, rgba(255,60,80,0.28) 35%, transparent 65%)',
        animation: 'pulseGlow 5s ease-in-out infinite',
        pointerEvents: 'none',
        filter: 'blur(28px)',
      }} />

      {/* Glow orb — bottom left (mint) outer halo */}
      <div style={{
        position: 'absolute',
        bottom: '-200px',
        left: '-200px',
        zIndex: 0,
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(110,231,183,0.15) 0%, rgba(110,231,183,0.05) 45%, transparent 70%)',
        animation: 'pulseGlow 8s ease-in-out infinite 2s',
        pointerEvents: 'none',
        filter: 'blur(60px)',
      }} />

      {/* Glow orb — bottom left (mint) bright core */}
      <div style={{
        position: 'absolute',
        bottom: '-60px',
        left: '-60px',
        zIndex: 0,
        width: '420px',
        height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, rgba(110,231,183,0.55) 0%, rgba(110,231,183,0.20) 35%, transparent 65%)',
        animation: 'pulseGlow 7s ease-in-out infinite 2.5s',
        pointerEvents: 'none',
        filter: 'blur(24px)',
      }} />

      {/* ── Content ─────────────────────────────────────── */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        paddingTop: '2rem',
        paddingBottom: '10rem',
      }}>

        {/* Eyebrow */}
        <p
          className="anim-fade-in delay-0"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 400,
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#FF6B8A',
            margin: '0 0 1.5rem',
            opacity: 0,
          }}
        >
          <span style={{ color: '#FF0844', marginRight: '0.5rem' }}>▸</span>
          Salesforce Admin &amp; Solution Engineer
        </p>

        {/* Name line 1 */}
        <div style={{ overflow: 'hidden', marginBottom: '0.05rem' }}>
          <h1
            className="anim-fade-up delay-1"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(2.8rem, 8.5vw, 6.5rem)',
              lineHeight: 0.95,
              color: '#F0F2F8',
              margin: 0,
              opacity: 0,
            }}
          >
            Alessandra
          </h1>
        </div>

        {/* Name line 2 */}
        <div style={{ overflow: 'hidden' }}>
          <h1
            className="anim-fade-up delay-2"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(2.8rem, 8.5vw, 6.5rem)',
              lineHeight: 0.95,
              color: '#F0F2F8',
              margin: 0,
              opacity: 0,
            }}
          >
            Marchiori<span style={{ color: '#FF0844' }}>.</span>
          </h1>
        </div>

        {/* Animated underline */}
        <div
          className="anim-draw-line delay-3"
          style={{
            height: '3px',
            background: 'linear-gradient(to right, #FF0844, #FF6B8A)',
            marginTop: '0.75rem',
            marginBottom: '2rem',
            opacity: 0,
          }}
        />

        {/* Bio */}
        <p
          className="anim-fade-in delay-4"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: '#9CA3AF',
            maxWidth: '520px',
            lineHeight: 1.8,
            margin: '0 0 2.5rem',
            opacity: 0,
          }}
        >
          Where technology meets human-centered design. I build systems that work the way people think.
        </p>

        {/* CTA Buttons */}
        <div className="anim-fade-up delay-5 hero-cta" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', opacity: 0 }}>
          <a
            href="#projects"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', minHeight: '48px', padding: '0 2rem', background: '#FF0844', color: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.2s, transform 0.2s', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            View Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="#contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', minHeight: '48px', padding: '0 2rem', border: '1px solid #1F2330', color: '#9CA3AF', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s, transform 0.2s', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF6B8A'; e.currentTarget.style.color = '#FF6B8A'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#1F2330'; e.currentTarget.style.color = '#9CA3AF'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Get in Touch
          </a>
        </div>

      </div>

      {/* Scroll indicator — pinned to true bottom of viewport */}
      <div
        className="anim-fade-in delay-7"
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0 }}
      >
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#F0F2F8', letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.6 }}>scroll</span>
        <div style={{ width: '2px', height: '64px', background: 'linear-gradient(to bottom, #FF0844, transparent)', animation: 'scrollBounce 1.8s ease-in-out infinite', borderRadius: '2px' }} />
      </div>
    </section>
  );
}
