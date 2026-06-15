import { useState, useEffect } from 'react';

const navItems = ['About', 'Skills', 'Experience', 'Certifications', 'Projects', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    setOpen(false);
    const target = item.toLowerCase();
    const el = document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navBg = scrolled || open ? 'rgba(13,15,20,0.97)' : 'rgba(13,15,20,0.85)';

  const linkBase: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#9CA3AF',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    transition: 'color 0.2s',
    cursor: 'pointer',
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 1.5rem', height: '64px',
          backgroundColor: navBg,
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #1F2330',
          transition: 'background-color 0.3s',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '1.15rem', color: '#F0F2F8', textDecoration: 'none', letterSpacing: '0.05em', cursor: 'pointer' }}
        >
          AM<span style={{ color: '#FF0844' }}>.</span>
        </a>

        {/* Desktop links — hidden on mobile via .nav-links class */}
        <div className="nav-links" style={{ gap: '2rem', alignItems: 'center' }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              style={linkBase}
              onMouseEnter={e => (e.currentTarget.style.color = '#FF6B8A')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger — shown on mobile via .nav-hamburger class */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="nav-hamburger"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '10px', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            gap: '5px', width: '44px', height: '44px',
          }}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#F0F2F8', transition: 'transform 0.25s, opacity 0.25s', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#F0F2F8', transition: 'opacity 0.25s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#F0F2F8', transition: 'transform 0.25s, opacity 0.25s', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile drawer — hidden on desktop via .mobile-drawer class */}
      <div
        className="mobile-drawer"
        aria-hidden={!open}
        style={{
          position: 'fixed',
          top: '64px', left: 0, right: 0, bottom: 0,
          backgroundColor: '#0D0F14',
          zIndex: 49,
          flexDirection: 'column',
          padding: '2rem 1.5rem',
          borderTop: '1px solid #1F2330',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          overflowY: 'auto',
        }}
      >
        {navItems.map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => handleNavClick(e, item)}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: '2rem',
              color: '#F0F2F8',
              textDecoration: 'none',
              padding: '1rem 0',
              borderBottom: '1px solid #1F2330',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FF6B8A')}
            onMouseLeave={e => (e.currentTarget.style.color = '#F0F2F8')}
          >
            <span>{item}</span>
            <span style={{ color: '#FF0844', fontSize: '1.25rem' }}>→</span>
          </a>
        ))}

        <div style={{ marginTop: 'auto', paddingTop: '2.5rem' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#1F2330', margin: 0 }}>amarchiori.com</p>
        </div>
      </div>
    </>
  );
}
