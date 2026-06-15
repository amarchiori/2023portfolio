import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const iconMap: Record<string, string> = {
  'pure-plate': '🍽',
  'attivita': '🗺',
  'pmn-caecilia': '✦',
  'animated-poster': '▶',
};

const linkTypeLabel: Record<string, string> = {
  code: 'View Code',
  live: 'View Live',
  prototype: 'View Prototype',
  casestudy: 'Case Study',
};

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem', padding: '1.25rem' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#9CA3AF' }}>Project not found.</p>
        <Link to="/#projects" style={{ color: '#FF6B8A', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}>← Back to projects</Link>
      </div>
    );
  }

  const externalLinks = project.links.filter((l) => l.type !== 'casestudy');

  const backLinkStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.75rem',
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s',
    minHeight: '44px', display: 'inline-flex', alignItems: 'center', cursor: 'pointer',
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '2rem 1.25rem 0' }}>

        {/* Back */}
        <Link to="/#projects" style={backLinkStyle}
          onMouseEnter={e => (e.currentTarget.style.color = '#FF6B8A')}
          onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
        >← All Projects</Link>

        {/* Title block */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginTop: '2rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <div style={{ width: '56px', height: '56px', minWidth: '56px', background: '#13161E', border: '1px solid #1F2330', borderLeft: '3px solid #FF0844', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
            {iconMap[project.id] ?? '◆'}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF6B8A', margin: '0 0 0.3rem' }}>
              {project.subtitle}
            </p>
            <h1 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1.8rem, 6vw, 3.5rem)', color: '#F0F2F8', margin: 0, lineHeight: 1.05 }}>
              {project.title}
            </h1>
          </div>
        </div>
        <div style={{ height: '2px', background: '#FF0844', marginBottom: '2.25rem' }} />

        {/* Meta row */}
        <div style={{ display: 'flex', gap: '1.75rem 2.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {[
            { label: 'Role', value: project.role },
            { label: 'Year', value: project.year },
            { label: 'Stack', value: project.techStack.join(' · ') },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '0.3rem' }}>{label}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#6EE7B7', lineHeight: 1.4 }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Intro */}
        <div style={{ borderLeft: '3px solid #FF0844', paddingLeft: '1.5rem', marginBottom: '3rem' }}>
          {project.longDescription.map((para, i) => (
            <p key={i} style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: '#9CA3AF', lineHeight: 1.8, margin: i > 0 ? '1rem 0 0' : 0 }}>
              {para}
            </p>
          ))}
        </div>

        {/* Hero placeholder */}
        <div style={{ width: '100%', aspectRatio: '16/9', background: '#13161E', border: '1px solid #1F2330', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, #1F2330 0px, #1F2330 1px, transparent 1px, transparent 40px)' }} />
          <div style={{ position: 'relative', textAlign: 'center', padding: '1rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{iconMap[project.id] ?? '◆'}</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>Hero image — add your screenshot here</p>
          </div>
        </div>

        {/* Content sections — 1-col mobile → 2-col desktop via index.css .case-section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '3.5rem' }}>
          {project.sections.map((section, idx) => (
            <div key={section.heading} className="case-section" style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FF6B8A', marginBottom: '0.35rem' }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', color: '#F0F2F8', margin: '0 0 1rem' }}>
                  {section.heading}
                </h3>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.9rem', color: '#9CA3AF', lineHeight: 1.8, margin: '0 0 1.25rem' }}>
                  {section.body}
                </p>
                <div style={{ width: '100%', aspectRatio: '16/9', background: '#13161E', border: '1px solid #1F2330', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, #1F2330 0px, #1F2330 1px, transparent 1px, transparent 40px)' }} />
                  <p style={{ position: 'relative', fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#9CA3AF', margin: 0, textAlign: 'center', padding: '1rem' }}>
                    {section.heading} — add image here
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External links */}
        {externalLinks.length > 0 && (
          <div style={{ borderTop: '1px solid #1F2330', paddingTop: '2.25rem', marginBottom: '3.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {externalLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '44px', padding: '0 1.75rem', background: link.type === 'code' ? '#FF0844' : 'transparent', border: link.type === 'code' ? 'none' : '1px solid #1F2330', color: '#F0F2F8', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
              >
                {linkTypeLabel[link.type] ?? link.label}
              </a>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{ borderTop: '1px solid #1F2330', paddingTop: '2rem', paddingBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to="/#projects" style={backLinkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = '#FF6B8A')}
            onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
          >← All Projects</Link>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#1F2330' }}>amarchiori.com</span>
        </div>
      </div>
    </div>
  );
}
