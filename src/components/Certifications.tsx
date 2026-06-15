const certs = [
  { name: "Marketing Cloud Account Engagement Specialist", year: "2026", img: "/certs/cert-mcae.png" },
  { name: "Business Analyst", year: "2025", img: "/certs/cert-ba.png" },
  { name: "Agentforce Specialist", year: "2025", img: "/certs/cert-agentforce.png" },
  { name: "AI Associate", year: "2025", img: "/certs/cert-ai-associate.png" },
  { name: "Platform App Builder", year: "2025", img: "/certs/cert-pab.png" },
  { name: "Administrator", year: "2024", img: "/certs/cert-pa.png" },
  { name: "Associate", year: "2024", img: "/certs/cert-pf.png" },
];

const MINT = '#6EE7B7';
const MINT_DIM = 'rgba(110,231,183,0.2)';
const MINT_BG = 'rgba(110,231,183,0.06)';

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '5rem 1.25rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF6B8A', margin: '0 0 1rem' }}>
          Certifications
        </p>
        <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: '#F0F2F8', margin: '0 0 0.75rem', lineHeight: 1.2 }}>
          7 Salesforce Certifications.
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.9rem', color: '#9CA3AF', lineHeight: 1.7, margin: '0 0 3rem', maxWidth: '520px' }}>
          Including Agentforce Specialist and AI Associate — with hands-on Agentforce and MCP implementation experience across production orgs.
        </p>

        {/* Badge grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1rem' }} className="cert-grid">
          {certs.map((cert) => (
            <div
              key={cert.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.9rem',
                padding: '1.5rem 0.75rem 1.25rem',
                background: '#0D0F14',
                border: `1px solid ${MINT_DIM}`,
                transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
                textAlign: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = MINT;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 32px rgba(110,231,183,0.15)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = MINT_DIM;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img src={cert.img} alt={cert.name} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.7rem', color: '#F0F2F8', lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                  {cert.name}
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: MINT, marginTop: '0.35rem', letterSpacing: '0.08em' }}>
                  {cert.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: `1px solid ${MINT_DIM}` }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF6B8A', margin: '0 0 0.75rem' }}>
            Education
          </p>
          <div style={{
            background: MINT_BG,
            border: `1px solid ${MINT_DIM}`,
            borderLeft: `3px solid ${MINT}`,
            padding: '1.25rem 1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#F0F2F8' }}>Bachelor of Fine Arts</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.82rem', color: MINT, marginTop: '0.15rem' }}>University of Maryland Baltimore County (UMBC)</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.78rem', color: '#9CA3AF', marginTop: '0.25rem' }}>Graphic Design · UX/UI · Branding</div>
            </div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: MINT }}>2019</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .cert-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 741px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
