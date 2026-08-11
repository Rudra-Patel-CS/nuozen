import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';
import Reveal from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';
import JOBS from '../../data/jobs.js';

const PERKS = [
  { icon: 'bolt', tile: 'org', title: 'Meaningful Work', d: 'Your code powers infrastructure used by millions — utility management, smart metering, and real-time SCADA systems that keep cities running.' },
  { icon: 'rocket', tile: 'cyn', title: 'Continuous Learning', d: 'Work across the full technology stack — from cloud infrastructure and IoT to mobile apps and big data — with a team that loves learning.' },
  { icon: 'pin', tile: 'neutral', title: 'Mira Bhayandar HQ', d: 'Based in Mira Bhayandar, Thane — in the Mumbai metropolitan region. A collaborative, professional environment with a team that balances delivery with wellbeing.' },
];

function applyHref(title) {
  return `mailto:Ashish.Yadav@nuozen.in?subject=${encodeURIComponent(`Application — ${title}`)}`;
}

export default function Careers() {
  return (
    <div className="shell">
      <PageHero
        crumbs={[['Careers']]}
        badge="We're hiring · Mira Bhayandar, Thane"
        title={<>Build the future of <span className="text-mute">critical infrastructure.</span></>}
        lede="Nuozen engineers work on systems that power electricity, water, and gas for millions of people. If that kind of impact drives you — we'd love to meet you."
      />

      {/* perks */}
      <section className="section">
        <div className="card-grid">
          {PERKS.map((p) => (
            <Reveal className="card" key={p.title}>
              <IconTile name={p.icon} variant={p.tile} />
              <h3>{p.title}</h3>
              <p>{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* open roles */}
      {JOBS.map((g) => (
        <section className="section" key={g.group}>
          <SectionHead
            title={g.group === 'Technical Positions' ? 'Technical' : 'Growth &'}
            mute={g.group === 'Technical Positions' ? 'positions.' : 'sales roles.'}
            sub={g.intro}
          />
          <Reveal className="faq">
            {g.roles.map((job) => (
              <details key={job.title}>
                <summary>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    {job.title}
                    <span className="tag">{job.exp}</span>
                  </span>
                </summary>
                <div className="faq-a">
                  <p style={{ margin: '0 0 14px', color: 'var(--soft)', fontWeight: 500 }}>{job.pitch}</p>
                  <ul style={{ margin: '0 0 20px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {job.reqs.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                  <a href={applyHref(job.title)} className="btn btn-primary-sm">Apply now<span style={{ fontSize: 13 }}>›</span></a>
                </div>
              </details>
            ))}
          </Reveal>
        </section>
      ))}

      <CtaBand
        title="Don't see"
        muted="your role?"
        sub="We're always open to exceptional people. Send us your profile and tell us what you'd want to build here."
        primary={['Send your CV', 'mailto:Ashish.Yadav@nuozen.in']}
        secondary={['Learn about us', '/about']}
      />
    </div>
  );
}
