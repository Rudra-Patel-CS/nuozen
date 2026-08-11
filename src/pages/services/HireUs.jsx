import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';
import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';

const MODELS = [
  {
    icon: 'code', tile: 'org',
    name: 'PHP Outsourcing',
    forLine: 'Laravel · Symfony · CodeIgniter',
    desc: 'Senior PHP engineers, battle-tested in enterprise-grade production environments.',
    list: [
      'Laravel, Symfony, and CodeIgniter frameworks',
      'Custom CMS development',
      'Legacy PHP modernisation and upkeep',
      'E-commerce and portal builds',
      'Code review and release discipline from day one',
    ],
    cta: 'Hire PHP engineers',
  },
  {
    icon: 'chart', tile: 'cyn', featured: true,
    name: 'Python Outsourcing',
    forLine: 'Django · Flask · FastAPI',
    desc: 'Python developers for analytics-heavy applications and automation platforms.',
    list: [
      'Django, Flask, and FastAPI development',
      'Data engineering and AI/ML pipelines',
      'Analytics-heavy applications',
      'Automation platforms and integrations',
      'Perfect fit for data-driven products',
    ],
    cta: 'Hire Python engineers',
  },
  {
    icon: 'team', tile: 'neutral',
    name: 'Dedicated Teams',
    forLine: 'Cross-functional squads',
    desc: 'A complete delivery unit that plugs into your roadmap, not just extra hands.',
    list: [
      'Developers, QA, and a delivery lead',
      'Your tools — Jira, Slack, GitHub, or ours',
      'Daily standups in your timezone window',
      'Scale up or down as the roadmap changes',
      'One point of contact, direct to engineers',
    ],
    cta: 'Build a dedicated team',
  },
];

const PROOF = [
  { n: '₹', t: 'India-priced delivery', d: 'Global engineering standards at Indian market rates — extend your team at a fraction of in-house cost.' },
  { n: '17+', t: 'Years of delivery', d: 'Founded 2007. We have run outsourced builds for overseas and Indian clients across four generations of stacks.' },
  { n: '1', t: 'Point of contact', d: 'One account manager across every engagement — and a direct line to the engineers doing the work.' },
  { n: '24/7', t: 'Coverage that overlaps', d: 'IST working hours plus on-call coverage mean your morning standup and our workday actually meet.' },
  { n: '100%', t: 'Your IP, in writing', d: 'NDA and IP assignment as standard on every contract. The code we write is yours, unambiguously.' },
  { n: '2 days', t: 'From call to quote', d: 'A written scope with line-item pricing within two working days of the first conversation.' },
];

const INCLUDED = [
  'Senior engineers — you interview them before they start',
  'Daily standups in your tools and your timezone window',
  'Code review and CI discipline from day one',
  'Weekly demos and transparent reporting',
  'NDA and IP assignment as standard',
  'Scale the team up or down as your roadmap changes',
  'One account manager across the whole engagement',
  'Direct communication with engineers — no middle layer',
];

const STEPS = [
  ['Share requirements', 'Tell us the stack, the scope, and the gap in your team. Thirty minutes is usually enough to scope the first roles.'],
  ['Meet the engineers', 'We shortlist from our bench; you interview and pick. Nobody joins your project that you have not spoken to.'],
  ['Onboard & integrate', 'Access, tooling, and standup cadence sorted in the first week — the team works inside your process, not beside it.'],
  ['Deliver & scale', 'Weekly demos keep progress visible. Add engineers as the roadmap grows, or wind down cleanly when it ships.'],
];

export default function HireUs() {
  return (
    <div className="shell">
      <PageHero
        crumbs={[['Hire Us']]}
        badge="Outsourcing · Thane, India"
        title={<>Dedicated engineers. <span className="text-mute">Your timezone.</span></>}
        lede="Extend your development team with senior Indian engineers at a fraction of in-house cost — PHP, Python, or a complete cross-functional squad, working your hours in your tools."
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
          <Link to="/contact" className="btn btn-primary-sm">Hire dedicated engineers</Link>
          <Link to="/services" className="btn btn-ghost" style={{ padding: '13px 24px', fontSize: 15 }}>Browse all services</Link>
        </div>
      </PageHero>

      {/* stats */}
      <section style={{ padding: '0 0 88px' }}>
        <Reveal>
          <div className="stats">
            <div className="stat">
              <div className="stat-num">17<span className="accent">+</span></div>
              <div className="stat-label">Years in operation</div>
            </div>
            <div className="stat">
              <div className="stat-num">50<span className="accent">+</span></div>
              <div className="stat-label">Enterprise clients served</div>
            </div>
            <div className="stat">
              <div className="stat-num">1</div>
              <div className="stat-label">Point of contact per engagement</div>
            </div>
            <div className="stat">
              <div className="stat-num">24<span className="accent">/7</span></div>
              <div className="stat-label">Monitoring and on-call</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* engagement models */}
      <section className="section">
        <SectionHead
          title="Three ways to engage,"
          mute="one standard."
          sub="Pick a specialist practice or a complete squad — every model comes with the same review discipline, reporting, and single point of contact."
        />
        <div className="plans">
          {MODELS.map((m) => (
            <Reveal className={`plan${m.featured ? ' featured' : ''}`} key={m.name}>
              {m.featured && <span className="plan-flag chip"><span className="chip-dot" />Most requested</span>}
              <IconTile name={m.icon} variant={m.tile} />
              <div className="plan-name" style={{ marginTop: 18 }}>{m.name}</div>
              <div className="plan-for">{m.forLine}</div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--body)', margin: '14px 0 0' }}>{m.desc}</p>
              <ul className="plan-list">
                {m.list.map((li) => <li key={li}>{li}</li>)}
              </ul>
              <Link to="/contact" className={`btn ${m.featured ? 'btn-primary-sm' : 'btn-ghost'}`} style={m.featured ? {} : { padding: '13px 24px', fontSize: 15 }}>
                {m.cta}
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* why outsource to Nuozen */}
      <section className="section">
        <div className="why-grid">
          <Reveal className="why-sticky">
            <h2 className="h-section" style={{ marginBottom: 20 }}>Why teams outsource <span className="text-mute">to India.</span></h2>
            <p className="sub" style={{ maxWidth: 420 }}>
              The pitch is not just the rate card. It is senior engineers you actually talk to, contracts that protect your IP, and a partner that has been doing this since 2007.
            </p>
            <Link to="/about" className="link-arrow" style={{ marginTop: 28 }}>Read our story<span className="arr">›</span></Link>
          </Reveal>
          <Reveal className="proof-grid">
            {PROOF.map((p) => (
              <div className="proof-cell" key={p.t}>
                <div className="proof-num">{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* what every engagement includes */}
      <section className="section">
        <SectionHead
          title="Included in every engagement,"
          mute="no tier required."
          sub="These are not add-ons. If an engineer from Nuozen is on your project, all of this comes with them."
        />
        <Reveal className="card" style={{ padding: '34px 32px' }}>
          <ul
            className="plan-list"
            style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '12px 36px' }}
          >
            {INCLUDED.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </Reveal>
      </section>

      {/* hiring process */}
      <section className="section">
        <Reveal style={{ marginBottom: 44 }}>
          <h2 className="h-section" style={{ maxWidth: 780 }}>From gap in the team <span className="text-mute">to first commit.</span></h2>
        </Reveal>
        <Reveal>
          <div className="steps">
            {STEPS.map(([t, d], i) => (
              <div className="step" key={t}>
                <span className="step-dot" />
                <div className="step-num">Step 0{i + 1}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Hire dedicated engineers"
        muted="without the overhead."
        sub="Tell us the stack and the gap — we shortlist senior engineers you can interview this week, with a written quote in two working days."
        primary={['Hire dedicated engineers', '/contact']}
        secondary={['Email Ashish.Yadav@nuozen.in', 'mailto:Ashish.Yadav@nuozen.in']}
      />
    </div>
  );
}
