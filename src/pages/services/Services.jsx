import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal.jsx';
import Icon, { IconTile } from '../../components/Icons.jsx';
import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';
import SERVICES from '../../data/services.js';

const ROW_TILES = ['tile-org', 'tile-cyn', 'tile-bone'];

function ServiceRows({ slugs }) {
  return (
    <div className="panel">
      {slugs.map((slug, i) => {
        const s = SERVICES[slug];
        const tile = ROW_TILES[i % ROW_TILES.length];
        return (
          <Reveal as={Link} to={`/services/${s.slug}`} className="svc-row" key={s.slug}>
            <span className={`icon-tile tile-48 ${tile}`}>
              <Icon name={s.icon} size={23} color={tile === 'tile-bone' ? '#3E434B' : '#fff'} width={1.9} />
            </span>
            <div>
              <div className="svc-row-title"><h3>{s.title}</h3></div>
              <p className="desc">{s.short}</p>
            </div>
            <div className="svc-tags">
              {s.tags.slice(0, 3).map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="svc-go">›</div>
          </Reveal>
        );
      })}
    </div>
  );
}

const CLOUD_CARDS = [
  {
    to: '/cloud-hosting', icon: 'server', tile: 'org', selfServe: true,
    title: 'Cloud VMs',
    desc: 'Self-serve managed cloud VMs on our dedicated cloud portal. Register, pick a plan, and your VM is provisioned in minutes — backed by a 99.9% uptime SLA and 24/7 support.',
    list: ['Proxmox VE virtualisation', 'Multiple plans & configurations', '99.9% uptime SLA', 'Daily automated backups', 'Self-service registration & billing'],
    linkLabel: 'Cloud hosting plans',
  },
  {
    to: '/firewall', icon: 'shield', tile: 'cyn', selfServe: true,
    title: 'Firewall & Network Security',
    desc: 'Enterprise network protection as a self-serve subscription. Pick a tier, deploy in minutes, and we handle configuration, policy management, and 24/7 monitoring.',
    list: ['Sophos XG / XGS Series', 'Fortigate NGFW deployment', 'VPN & remote access setup', 'Cisco switching & routing', 'Threat monitoring & alerts'],
    linkLabel: 'Firewall service tiers',
  },
  {
    to: '/cloud-migration', icon: 'cloud', tile: 'neutral',
    title: 'Cloud Migration & Advisory',
    desc: 'A consultative, vendor-agnostic route to the cloud — pay-per-use economics, scalability, and reduced capex, with a single point of accountability throughout.',
    list: ['Cloud advisory & assessment', 'Deployment & migration services', 'Solution design, build & optimisation', 'Operations, administration & management', 'Information security strategy'],
    linkLabel: 'Migration services',
  },
];

const HIRE_CARDS = [
  {
    icon: 'code', tile: 'org',
    title: 'PHP Outsourcing',
    desc: 'Senior PHP engineers skilled in Laravel, Symfony, CodeIgniter, and custom CMS development. Battle-tested in enterprise-grade production environments.',
    tags: ['Laravel', 'Symfony', 'CodeIgniter'],
  },
  {
    icon: 'chart', tile: 'cyn',
    title: 'Python Outsourcing',
    desc: 'Python developers covering Django, Flask, FastAPI, data engineering, and AI/ML pipelines. Perfect for analytics-heavy applications and automation platforms.',
    tags: ['Django', 'Flask', 'FastAPI'],
  },
  {
    icon: 'team', tile: 'neutral',
    title: 'Dedicated Teams',
    desc: 'A cross-functional squad — developers, QA, and a delivery lead — working in your tools and your timezone window, with one point of contact.',
    tags: ['Your tools', 'Your timezone', 'One contact'],
  },
];

export default function Services() {
  return (
    <div className="shell">
      <PageHero
        crumbs={[['Services']]}
        badge="Hosting &amp; Datacentres · Thane, Maharashtra"
        title={<>Enterprise IT services, <span className="text-mute">end to end.</span></>}
        lede="From custom application development and cloud infrastructure to IoT platforms and big data analytics — Nuozen delivers complete technology solutions for modern enterprises."
      />

      {/* Application Development & Maintenance */}
      <section className="section">
        <SectionHead
          title="Application Development"
          mute="& Maintenance."
          sub="Custom software built to your exact specifications — web, mobile, and everything in between."
        />
        <ServiceRows slugs={['web-application-development', 'static-website-development', 'mobile-application-development']} />
      </section>

      {/* Cloud Hosting & Security */}
      <section className="section">
        <SectionHead
          title="Cloud Hosting"
          mute="& Security."
          sub="Managed infrastructure that keeps your applications online, fast, and protected. Two of these are self-serve — buy them today at cloud.nuozen.in."
        />
        <div className="card-grid">
          {CLOUD_CARDS.map((c) => (
            <Reveal as={Link} to={c.to} className="card" key={c.title} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <IconTile name={c.icon} variant={c.tile} />
                {c.selfServe && <span className="chip"><span className="chip-dot" />Self-serve</span>}
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <ul className="plan-list" style={{ margin: '18px 0 20px' }}>
                {c.list.map((li) => <li key={li}>{li}</li>)}
              </ul>
              <span className="link-arrow" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>{c.linkLabel}<span className="arr">›</span></span>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap', gap: 26, alignItems: 'center' }}>
          <a href="https://cloud.nuozen.in" target="_blank" rel="noreferrer" className="link-arrow">Buy Cloud VMs at cloud.nuozen.in<span className="arr">↗</span></a>
          <a href="https://budgethost.nuozen.in" target="_blank" rel="noreferrer" className="link-arrow">Budget hosting & domains<span className="arr">↗</span></a>
        </Reveal>
      </section>

      {/* Data & intelligence */}
      <section className="section">
        <SectionHead
          title="Intelligence from"
          mute="every data point."
          sub="Capture, process, and act on data from sensors, systems, and business operations in real time."
        />
        <div className="card-grid">
          {['big-data-analytics', 'internet-of-things', 'data-analytics'].map((slug, i) => {
            const s = SERVICES[slug];
            return (
              <Reveal as={Link} to={`/services/${s.slug}`} className="card" key={slug}>
                <IconTile name={s.icon} variant={['org', 'cyn', 'neutral'][i % 3]} />
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <div className="svc-tags" style={{ marginTop: 18 }}>
                  {s.tags.slice(0, 3).map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Integration, open source, QA */}
      <section className="section">
        <SectionHead
          title="Connecting systems."
          mute="Ensuring quality."
          sub="APIs and middleware that make your ecosystem behave like one system — and independent QA that proves it works."
        />
        <ServiceRows slugs={['integration-and-apis', 'open-source-software', 'test-engineering']} />
      </section>

      {/* Dedicated engineers */}
      <section className="section">
        <SectionHead
          title="Dedicated engineers."
          mute="Your timezone."
          sub="Extend your development team with senior Indian engineers at a fraction of in-house cost."
        />
        <div className="card-grid">
          {HIRE_CARDS.map((c) => (
            <Reveal as={Link} to="/hire-us" className="card" key={c.title}>
              <IconTile name={c.icon} variant={c.tile} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="svc-tags" style={{ marginTop: 18 }}>
                {c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: 30 }}>
          <Link to="/hire-us" className="link-arrow">How hiring works<span className="arr">›</span></Link>
        </Reveal>
      </section>

      <CtaBand
        title="Not sure which service"
        muted="fits?"
        sub="Talk to our team — we'll recommend the right solution for your needs and send a written quote within two working days."
        primary={['Chat with our team', '/contact']}
        secondary={['See industry solutions', '/industries']}
      />
    </div>
  );
}
