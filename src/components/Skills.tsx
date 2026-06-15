import { useState } from 'react';

interface SkillGroup {
  category: string;
  description: string;
  palette: 'red' | 'mint';
  skills: string[];
}

// Red (Salesforce & Sales) on top row, Mint (AI & Creative) on bottom row
const skillGroups: SkillGroup[] = [
  {
    category: 'Salesforce Development',
    description: 'Building automation, components & logic',
    palette: 'red',
    skills: ['Lightning Web Components', 'Flow Builder', 'Process Automation', 'Approval Processes', 'Apex'],
  },
  {
    category: 'Salesforce Administration',
    description: 'Org management, security & data integrity',
    palette: 'red',
    skills: ['Multi-Package Org Management', 'Permissions & Security', 'User Management', 'Custom Objects & Fields', 'Debugging & Error Resolution', 'QA Testing'],
  },
  {
    category: 'Marketing & CRM',
    description: 'Connecting campaigns to conversion',
    palette: 'red',
    skills: ['Pardot / MCAE', 'Campaign Monitor', 'Mailchimp + Salesforce Sync', 'MeetAlfred LinkedIn Outreach', 'HTML Email Campaigns'],
  },
  {
    category: 'AI & Agentic Systems',
    description: 'The frontier — building where AI meets CRM',
    palette: 'mint',
    skills: ['MCP (Model Context Protocol)', 'Agentforce', 'Prompt Template Design', 'Claude + Salesforce via MCP', 'AI Agent Testing'],
  },
  {
    category: 'Platform Integrations',
    description: 'Data migrations & third-party connectors',
    palette: 'mint',
    skills: ['Data Loader (1M+ records)', 'Formstack → Salesforce', 'Mailchimp → Salesforce', 'Campaign Monitor → Salesforce'],
  },
  {
    category: 'Development & Design',
    description: 'Where it all started',
    palette: 'mint',
    skills: ['HTML / CSS / JavaScript', 'UX/UI Design', 'Graphic Design & Branding', 'Adobe Creative Suite', 'Advanced Excel'],
  },
];

const palette = {
  red: {
    label: '#FF0844',
    tagText: '#FF0844',
    tagBg: 'rgba(255,8,68,0.12)',
    tagBorder: 'rgba(255,8,68,0.45)',
    tagHoverBg: 'rgba(255,8,68,0.2)',
    tagHoverBorder: 'rgba(255,8,68,0.7)',
    cardTopBorder: '#FF0844',
    countColor: '#FF6B8A',
    descColor: 'rgba(252,107,138,0.55)',
    glowShadow: 'rgba(255,8,68,0.1)',
  },
  mint: {
    label: '#6EE7B7',
    tagText: '#6EE7B7',
    tagBg: 'rgba(110,231,183,0.1)',
    tagBorder: 'rgba(110,231,183,0.38)',
    tagHoverBg: 'rgba(110,231,183,0.18)',
    tagHoverBorder: 'rgba(110,231,183,0.65)',
    cardTopBorder: '#6EE7B7',
    countColor: '#6EE7B7',
    descColor: 'rgba(110,231,183,0.5)',
    glowShadow: 'rgba(110,231,183,0.08)',
  },
};

function SkillTag({ name, p }: { name: string; p: typeof palette['red'] }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '0.74rem',
        letterSpacing: '0.01em',
        color: p.tagText,
        background: hov ? p.tagHoverBg : p.tagBg,
        border: `1px solid ${hov ? p.tagHoverBorder : p.tagBorder}`,
        padding: '0.38rem 0.8rem',
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'background 0.15s, border-color 0.15s',
        cursor: 'default',
        whiteSpace: 'nowrap' as const,
      }}
    >
      {name}
    </span>
  );
}

export default function Skills() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="skills"
      style={{ padding: '5rem 1.25rem', background: '#13161E', borderTop: '1px solid #1F2330', borderBottom: '1px solid #1F2330' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF6B8A', margin: '0 0 1rem' }}>
          Skills
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: '#F0F2F8', margin: 0, lineHeight: 1.2 }}>
            What I bring.
          </h2>
          {/* Legend */}
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#9CA3AF', letterSpacing: '0.08em' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#FF0844', display: 'inline-block' }} />
              Salesforce & Sales
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#9CA3AF', letterSpacing: '0.08em' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#6EE7B7', display: 'inline-block' }} />
              AI & Creative
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }} className="skills-grid-3">
          {skillGroups.map((group, i) => {
            const p = palette[group.palette];
            const isHovered = hovered === i;

            return (
              <div
                key={group.category}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#0D0F14',
                  border: '1px solid #1F2330',
                  borderTop: `2px solid ${p.cardTopBorder}`,
                  padding: '1.5rem',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  boxShadow: isHovered ? `0 8px 28px ${p.glowShadow}` : 'none',
                  transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                  cursor: 'default',
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: '1.1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: p.label }}>
                      {group.category}
                    </span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: p.countColor }}>
                      {group.skills.length}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.7rem', color: p.descColor, margin: 0, lineHeight: 1.5 }}>
                    {group.description}
                  </p>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: '#1F2330', marginBottom: '1rem' }} />

                {/* All skills — uniform filled chips, no dot */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {group.skills.map((skill) => (
                    <SkillTag key={skill} name={skill} p={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
