import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';
import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';

// The three utility verticals, each with its sub-solution cards. Every card links
// to the industry detail page it belongs to.
const UTILITY_SECTIONS = [
  {
    slug: 'electricity',
    title: 'Power Distribution',
    mute: 'Management.',
    tile: 'org',
    icon: 'bolt',
    sub: 'A leading pioneer in electricity management — from monitoring substations and feeders to HV/LV consumer systems. Advanced SCADA platforms and real-time metering help utilities manage critical power infrastructure with precision.',
    linkLabel: 'Explore electricity solutions',
    cards: [
      { icon: 'gauge', title: 'SCADA Systems', desc: 'Real-time supervisory control and data acquisition for electricity distribution networks. Monitor feeders, substations, and consumer endpoints from a unified dashboard.' },
      { icon: 'network', title: 'Network Data Acquisition', desc: 'Collect and aggregate data from distributed meters, sensors, and field devices into a centralised data platform for analysis and reporting.' },
      { icon: 'wifi', title: 'AMR, AMI & Billing', desc: 'Automated meter reading, advanced metering infrastructure, and integrated billing systems. Enable consumers to pay bills online and view usage history.' },
      { icon: 'server', title: 'Substation Monitoring System', desc: 'Continuous monitoring of substation health, load distribution, and fault detection with automated alerts and reporting.' },
      { icon: 'db', title: 'Meter Data Management', desc: 'MDMS-integrated billing with configurable price slabs, spot billing devices, and end-to-end automation of payment collection.' },
      { icon: 'team', title: 'Consumer Relations', desc: 'Multi-channel grievance redressal with live complaint tracking — website, mobile app, email, SMS, and Telegram, wired into the MDMS.' },
    ],
  },
  {
    slug: 'water',
    title: 'Water Distribution',
    mute: 'Management.',
    tile: 'cyn',
    icon: 'drop',
    sub: 'Intelligent water management solutions covering the full lifecycle — from source monitoring and pipeline SCADA through smart metering and consumer billing. We help water utilities modernise their infrastructure and reduce losses.',
    linkLabel: 'Explore water solutions',
    cards: [
      { icon: 'gauge', title: 'Water SCADA', desc: 'Monitor water distribution pipelines, pumping stations, and reservoirs in real time. Detect leaks, track pressure, and automate valve control remotely.' },
      { icon: 'chart', title: 'Smart Water Meter & Billing', desc: 'Deploy smart meters across your distribution network and connect them to an integrated billing, payment, and consumer self-service portal.' },
      { icon: 'team', title: 'Consumer Relations', desc: 'Online bill viewing and payment, grievance management, and consumer communication systems tailored for water utility organisations.' },
      { icon: 'eye', title: 'Leak Analytics', desc: 'Continuous pressure and flow telemetry that flags abnormal patterns early — leaks are found before they surface, and non-revenue water falls.' },
    ],
  },
  {
    slug: 'natural-gas',
    title: 'Gas Network',
    mute: 'Automation.',
    tile: 'neutral',
    icon: 'flame',
    sub: 'Safety-first technology for natural gas distribution networks. Our SCADA and billing platforms are built to regulatory standards and designed for zero-downtime operation in mission-critical gas infrastructure environments.',
    linkLabel: 'Explore gas solutions',
    cards: [
      { icon: 'gauge', title: 'Gas Network SCADA', desc: 'Supervisory control for gas distribution pipelines — pressure monitoring, flow measurement, and automated valve control with safety interlock systems.' },
      { icon: 'chart', title: 'Gas Billing Systems', desc: 'Integrated metering, billing, and payment collection systems. Real-time usage data feeds automated invoice generation and consumer self-service portals.' },
      { icon: 'shield', title: 'Safety Monitoring', desc: 'Safety shutdown systems at key network locations, with field alerts over web and 3G/4G so operators can act immediately.' },
    ],
  },
];

// Enterprise verticals and cross-sold service capabilities. Verticals are cards
// only (no dedicated pages); the capabilities link into /services.
const ALSO_SERVING = [
  { icon: 'doc', tile: 'orgT', title: 'Education', desc: 'E-learning platforms, campus management systems, and student portals for institutions taking teaching and administration online.' },
  { icon: 'lock', tile: 'cynT', title: 'BFSI', desc: 'Secure customer portals, compliance-ready infrastructure, and integrations with core banking systems for banks, NBFCs, and insurers.' },
  { icon: 'gear', tile: 'orgT', title: 'Manufacturing', desc: 'Shop-floor IoT telemetry, ERP integration, and production dashboards that connect plant operations to business systems.' },
  { icon: 'network', tile: 'cynT', title: 'Big Data & IoT', desc: 'End-to-end sensor pipelines, aggregation, real-time dashboards, and analytics for operations teams.', to: '/services/internet-of-things' },
  { icon: 'code', tile: 'orgT', title: 'Integration & APIs', desc: 'REST and GraphQL design, third-party platform integration, and middleware for enterprise systems.', to: '/services/integration-and-apis' },
  { icon: 'check', tile: 'cynT', title: 'Test Engineering', desc: 'Independent QA — functional, regression, performance, and security testing wired into your CI/CD.', to: '/services/test-engineering' },
];

export default function Industries() {
  return (
    <div className="shell">
      <PageHero
        crumbs={[['Industries']]}
        badge="Serving critical infrastructure since 2007"
        title={<>Deep domain expertise <span className="text-mute">in critical infrastructure.</span></>}
        lede="We have spent nearly two decades building technology solutions for the utility sector — electricity, water, and natural gas — where reliability is non-negotiable."
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
          <Link to="/contact" className="btn btn-primary-sm">Request a demo<span style={{ fontSize: 13 }}>›</span></Link>
          <Link to="/services" className="btn btn-ghost" style={{ fontSize: 15, padding: '13px 24px' }}>View all services</Link>
        </div>
      </PageHero>

      {/* three utility verticals */}
      {UTILITY_SECTIONS.map((s) => (
        <section className="section" key={s.slug}>
          <Reveal className="section-head">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
                <IconTile name={s.icon} variant={s.tile} />
                <span className="chip"><span className="chip-dot" />Utility vertical</span>
              </div>
              <h2 className="h-section">{s.title} <span className="text-mute">{s.mute}</span></h2>
            </div>
            <p className="sub">{s.sub}</p>
          </Reveal>
          <div className="card-grid">
            {s.cards.map((c) => (
              <Reveal as={Link} to={`/industries/${s.slug}`} className="card" key={c.title}>
                <IconTile name={c.icon} variant={s.tile} />
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: 28 }}>
            <Link to={`/industries/${s.slug}`} className="link-arrow">{s.linkLabel}<span className="arr">›</span></Link>
          </Reveal>
        </section>
      ))}

      {/* pull quote */}
      <section className="section">
        <Reveal className="quote-card">
          <IconTile name="bolt" variant="org" />
          <blockquote style={{ marginTop: 28 }}>
            Long before the cloud business, Nuozen built SCADA, metering, and billing systems for utility operators and government bodies.{' '}
            <span className="text-mute">That work still runs today.</span>
          </blockquote>
          <div className="quote-attr">
            <div className="quote-rule" />
            <div className="quote-by">Serving your industry since 2007</div>
          </div>
        </Reveal>
      </section>

      {/* enterprise verticals + cross-sold capabilities */}
      <section className="section">
        <SectionHead
          title="Also serving"
          mute="the enterprise."
          sub="Beyond utilities, the same engineering bench builds and runs software for education, banking, and manufacturing — and ships the data, integration, and QA work behind it."
        />
        <div className="card-grid-sm">
          {ALSO_SERVING.map((c) =>
            c.to ? (
              <Reveal as={Link} to={c.to} className="card" key={c.title}>
                <IconTile name={c.icon} variant={c.tile} size={36} icon={17} />
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="link-arrow" style={{ marginTop: 16, display: 'inline-flex', fontSize: 14 }}>See the service<span className="arr">›</span></span>
              </Reveal>
            ) : (
              <Reveal className="card" key={c.title}>
                <IconTile name={c.icon} variant={c.tile} size={36} icon={17} />
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </Reveal>
            )
          )}
        </div>
      </section>

      <CtaBand
        title="Modernise your utility"
        muted="infrastructure."
        sub="Let's discuss how Nuozen can modernise your grid, water, or gas network — an engineer joins the first call, and you get a written scope within two working days."
        primary={['Request a demo', '/contact']}
      />
    </div>
  );
}
