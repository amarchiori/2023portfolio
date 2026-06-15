import { useState, useEffect, useRef } from 'react';

const jobs = [
  {
    title: 'Salesforce Admin & Solution Engineer',
    company: 'Saasinct Solutions',
    period: 'May 2024 – Present',
    tag: 'Current',
    bullets: [
      'Primary admin and solution engineer supporting 10+ financial firm clients across implementation and managed services.',
      'Build Flows, develop LWCs, manage multi-package Salesforce org environments, handle user setup, permissions, and QA testing before deployment.',
      'Configuring Agentforce agents and prompt templates, and deploying MCP integrations that connect Claude to live Salesforce data across multiple orgs.',
    ],
  },
  {
    title: 'Client-Facing Sales & Design',
    company: 'ShelfGenie & Closet America',
    period: 'Sept 2020 – Dec 2023',
    tag: null,
    bullets: [
      'Translated client needs into customized design solutions using CAD tools and 3D mockups.',
      'Managed relationships and follow-up processes to drive sales conversions.',
      'Presented persuasive sales decks to customers 2–3× daily across MD and FL markets.',
    ],
  },
  {
    title: 'Retail Operations Manager',
    company: 'Palm Beach Collective',
    period: 'Mar 2021 – Jan 2023',
    tag: null,
    bullets: [
      'Led warehouse operations fulfilling 200+ daily e-commerce orders.',
      'Managed a team of 3 and optimized fulfillment processes through order data analysis.',
      'Coordinated complex business operations across multiple channels.',
    ],
  },
  {
    title: 'Sales Manager',
    company: 'Lady M',
    period: 'Sept 2019 – Aug 2020',
    tag: null,
    bullets: [
      'Promoted from Associate to Manager in under 12 months.',
      'Recruited and managed a team of 5, overseeing retail expansion from pop-up to full storefront.',
      'Led team transition during COVID while maintaining operational continuity.',
    ],
  },
];

export default function Experience() {
  // Which jobs are scroll-revealed (open)
  const [visible, setVisible] = useState<boolean[]>(jobs.map(() => false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const TRIGGER = 0.68; // fraction of viewport height at which an item opens

    const compute = () => {
      const threshold = window.innerHeight * TRIGGER;
      setVisible(
        itemRefs.current.map((el) => {
          if (!el) return false;
          return el.getBoundingClientRect().top < threshold;
        })
      );
    };

    compute(); // run on mount
    window.addEventListener('scroll', compute, { passive: true });
    return () => window.removeEventListener('scroll', compute);
  }, []);

  return (
    <section id="experience" style={{ padding: '5rem 1.25rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF6B8A', margin: '0 0 1rem' }}>
          Experience
        </p>
        <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: '#F0F2F8', margin: '0 0 3.5rem', lineHeight: 1.2 }}>
          Where I've worked.
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical spine */}
          <div style={{
            position: 'absolute',
            left: '11px',
            top: '6px',
            bottom: '6px',
            width: '2px',
            background: 'linear-gradient(to bottom, #FF0844 0%, #FF6B8A 40%, #1F2330 100%)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {jobs.map((job, i) => {
              const isOpen = visible[i];
              return (
                <div
                  key={`${job.company}-${i}`}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  style={{
                    position: 'relative',
                    paddingLeft: '44px',
                    paddingBottom: i < jobs.length - 1 ? '2.5rem' : 0,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(-16px)',
                    transition: `opacity 0.45s ease ${i * 0.05}s, transform 0.45s ease ${i * 0.05}s`,
                  }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '14px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: isOpen ? '#FF0844' : '#0D0F14',
                    border: `2px solid ${isOpen ? '#FF0844' : '#1F2330'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.35s ease',
                    zIndex: 1,
                    boxShadow: isOpen ? '0 0 16px rgba(255,8,68,0.5)' : 'none',
                  }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: isOpen ? '#fff' : '#1F2330', transition: 'background 0.3s' }} />
                  </div>

                  {/* Card */}
                  <div style={{
                    background: isOpen ? '#13161E' : '#0D0F14',
                    border: `1px solid ${isOpen ? '#FF0844' : '#1F2330'}`,
                    borderLeft: `3px solid ${isOpen ? '#FF0844' : '#1F2330'}`,
                    padding: '1.25rem 1.5rem',
                    transition: 'all 0.35s ease',
                  }}>
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.92rem', color: '#F0F2F8' }}>{job.title}</span>
                          {job.tag && (
                            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', color: '#6EE7B7', background: 'rgba(110,231,183,0.1)', border: '1px solid rgba(110,231,183,0.25)', padding: '0.15rem 0.5rem' }}>
                              {job.tag}
                            </span>
                          )}
                        </div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.82rem', color: '#FF6B8A', marginTop: '0.2rem' }}>{job.company}</div>
                      </div>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#9CA3AF', whiteSpace: 'nowrap' }}>{job.period}</span>
                    </div>

                    {/* Bullets — expand with scroll reveal */}
                    <div style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.4s ease',
                      overflow: 'hidden',
                    }}>
                      <div style={{ overflow: 'hidden' }}>
                        <div style={{ height: '1px', background: '#1F2330', margin: '1rem 0 0.85rem' }} />
                        <ul style={{ margin: 0, paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                          {job.bullets.map((b, bi) => (
                            <li key={bi} style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.82rem', color: '#9CA3AF', lineHeight: 1.7 }}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
