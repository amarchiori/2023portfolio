export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 1.25rem', maxWidth: '860px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF6B8A', margin: '0 0 1rem' }}>
        About
      </p>
      <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: '#F0F2F8', margin: '0 0 2.25rem', lineHeight: 1.2 }}>
        Where technology meets design.
      </h2>

      <div style={{ borderLeft: '3px solid #FF0844', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: '#9CA3AF', lineHeight: 1.8, margin: 0 }}>
          I started in design — studying Graphic Design, UX/UI, and Branding at UMBC — because I was fascinated by the psychology of how visuals make people feel, not just how they look. That curiosity about human behavior followed me into tech.
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: '#9CA3AF', lineHeight: 1.8, margin: 0 }}>
          When I discovered Salesforce had a full Marketing Cloud, it clicked. Technology that powers the way businesses connect with people, built on a platform that rewards creativity and problem-solving? That's exactly where I wanted to be.
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: '#9CA3AF', lineHeight: 1.8, margin: 0 }}>
          Today I work as a Salesforce Admin and Solution Engineer at Saasinct Solutions, supporting financial firms across implementation projects and managed services. I build Flows, develop Lightning Web Components, manage complex multi-package org environments, and help teams automate the work that slows them down. I'm also working at the frontier of what AI can do inside Salesforce — implementing MCP to connect Claude to live org data, and configuring Agentforce agents and prompt templates for real client deployments.
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: '#9CA3AF', lineHeight: 1.8, margin: 0 }}>
          I'm driven by constant innovation, the freedom to find creative solutions, and building things that genuinely change how people work. Outside of that, you'll find me at a soccer match, a music festival, or at the opera — La Bohème is the one.
        </p>
      </div>

      {/* Responsive grid: 2-col mobile → 4-col desktop via index.css .about-stats */}
      <div className="about-stats" style={{ display: 'grid', gap: '1rem', marginTop: '3rem' }}>
        {[
          { label: '7×', sub: 'Salesforce Certified' },
          { label: 'Saasinct', sub: 'Solutions Engineer' },
          { label: '10+', sub: 'Client Firms Supported' },
          { label: 'BFA', sub: 'Graphic Design · UMBC' },
        ].map(({ label, sub }) => (
          <div key={label} style={{ background: '#13161E', border: '1px solid #1F2330', padding: '1.25rem', borderTop: '2px solid #FF0844' }}>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', color: '#F0F2F8', marginBottom: '0.25rem' }}>{label}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.7rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
