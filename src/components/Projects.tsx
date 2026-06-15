import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '5rem 1.25rem', minHeight: '100vh', background: '#13161E', borderTop: '1px solid #1F2330', borderBottom: '1px solid #1F2330' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF6B8A', margin: '0 0 1rem' }}>
          Projects
        </p>
        <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: '#F0F2F8', margin: '0 0 2.5rem', lineHeight: 1.2 }}>
          Selected work.
        </h2>

        {/* 3-col → 2-col → 1-col via .projects-grid in index.css */}
        <div className="projects-grid" style={{ display: 'grid', gap: '1.25rem' }}>
          {projects.map((p) => (
            <div
              key={p.id}
              style={{ background: '#0D0F14', border: '1px solid #1F2330', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'border-color 0.2s, transform 0.2s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF0844'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1F2330'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#F0F2F8', margin: 0 }}>{p.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.82rem', color: '#9CA3AF', lineHeight: 1.7, margin: 0, flexGrow: 1 }}>{p.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#6EE7B7', background: 'rgba(110,231,183,0.06)', border: '1px solid rgba(110,231,183,0.2)', padding: '0.2rem 0.55rem', display: 'inline-flex', alignItems: 'center' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', borderTop: '1px solid #1F2330', paddingTop: '0.9rem' }}>
                {p.links.map((link) => {
                  const ls: React.CSSProperties = {
                    fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.72rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                    textDecoration: 'none', transition: 'color 0.2s', color: '#9CA3AF',
                    cursor: 'pointer', minHeight: '44px', display: 'inline-flex', alignItems: 'center',
                  };
                  if (link.type === 'casestudy') {
                    return (
                      <Link key={link.label} to={link.href} style={ls}
                        onMouseEnter={e => (e.currentTarget.style.color = '#FF6B8A')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
                      >{link.label} →</Link>
                    );
                  }
                  return (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={ls}
                      onMouseEnter={e => (e.currentTarget.style.color = '#FF6B8A')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
                    >{link.label} →</a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
