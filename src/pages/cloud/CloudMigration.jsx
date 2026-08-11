import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';
import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';

const PAINS = [
  {
    icon: 'chart', variant: 'org',
    title: "Your cloud bill grows every quarter. Your margins don't.",
    desc: 'Hyperscalers charge premium rates for compute, egress fees for every byte that leaves their network, and reserved-instance complexity that requires a dedicated FinOps team just to manage. Businesses on major cloud providers are routinely paying 3–5× what the same workload would cost on managed private cloud.',
  },
  {
    icon: 'gear', variant: 'cyn',
    title: "You're paying for infrastructure management you never signed up for.",
    desc: 'Hyperscaler providers give you raw compute. You still need to manage OS patching, backups, monitoring, SSL renewals, scaling policies, and security hardening — either in-house or by paying a third-party managed services provider. Add that cost and the real TCO is even higher than your billing console shows.',
  },
];

const STEPS = [
  ['Free Cost Audit', 'We review your current cloud bills, identify waste, right-size recommendations, and give you a precise Nuozen quote. Takes 30 minutes.'],
  ['Migration Plan', 'A detailed document mapping every service — compute, databases, storage, DNS, email — to its Nuozen equivalent with a cutover timeline.'],
  ['Parallel Provisioning', 'We build your Nuozen environment in parallel. Your existing cloud setup stays live throughout. Nothing is touched until you approve.'],
  ['Zero-Downtime Cutover', 'We migrate data, update DNS, validate all endpoints, and cut over — usually in under an hour, at a time you choose. Your old environment stays as a fallback for 7 days.'],
  ['Managed & Monitored', '24/7 monitoring, patch management, backup verification, and dedicated support kick in immediately. You never have to think about the server again.'],
];

const MIGRATE = [
  {
    icon: 'server', variant: 'org', title: 'Compute & VMs',
    desc: 'Application servers and workloads move to right-sized KVM virtual machines — Linux or Windows, with full root access preserved.',
  },
  {
    icon: 'db', variant: 'cyn', title: 'Databases',
    desc: 'MySQL, PostgreSQL, MongoDB and more — migrated with dump-and-replicate strategies so nothing is lost mid-flight.',
  },
  {
    icon: 'cloud', variant: 'neutral', title: 'Storage & Backups',
    desc: 'Object storage, file shares, and backup archives mapped to Nuozen equivalents — with no egress fees waiting on the other side.',
  },
  {
    icon: 'globe', variant: 'org', title: 'DNS & Domains',
    desc: 'Zones recreated and TTLs staged ahead of cutover, so the final switch propagates in minutes rather than days.',
  },
  {
    icon: 'mail', variant: 'cyn', title: 'Email',
    desc: 'Mailboxes, forwarders, and transactional email moved and verified — SPF, DKIM, and DMARC records kept intact.',
  },
  {
    icon: 'browser', variant: 'neutral', title: 'Websites & Applications',
    desc: 'Sites and web apps redeployed, SSL certificates re-issued automatically, and every endpoint validated before cutover.',
  },
];

const SAFETY = [
  'Your existing cloud stays live throughout — nothing is touched until you approve.',
  'Cutover usually completes in under an hour, at a time you choose.',
  'Your old environment stays as a fallback for 7 days after cutover.',
  'Most workloads go live within 5 business days; large, complex environments within 2–3 weeks.',
  'Support calls answered by India-based engineers in your timezone — not a global queue.',
  'Your VMs run on open-source KVM — no proprietary APIs, AMIs, or billing structures that change every year.',
  'No egress fees, no per-request charges — one monthly invoice covering compute, storage, bandwidth, and support.',
  'GST invoices for registered Indian businesses — claim 18% GST as input tax credit.',
];

export default function CloudMigration() {
  return (
    <div className="shell">
      <PageHero
        crumbs={[['Cloud Migration']]}
        badge="Free 30-minute cost audit"
        title={<>Stop overpaying <span className="text-mute">for big cloud bills.</span></>}
        lede="Most Indian businesses running on hyperscalers are overpaying by 50–70%. Nuozen migrates your workloads to managed infrastructure that costs a fraction — with zero downtime and a dedicated support team handling everything."
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 34 }}>
          <Link to="/contact" className="btn btn-primary">Book a free audit<span style={{ fontSize: 14 }}>›</span></Link>
          <Link to="/cloud-hosting" className="btn btn-ghost">View hosting plans</Link>
        </div>
      </PageHero>

      {/* numbers strip */}
      <section style={{ padding: '0 0 88px' }}>
        <Reveal className="stats">
          <div className="stat">
            <div className="stat-num">50<span className="accent">–70%</span></div>
            <div className="stat-label">Typical hyperscaler overspend</div>
          </div>
          <div className="stat">
            <div className="stat-num">&lt;1<span className="accent"> hr</span></div>
            <div className="stat-label">Usual cutover window</div>
          </div>
          <div className="stat">
            <div className="stat-num">7<span className="accent"> days</span></div>
            <div className="stat-label">Old environment kept as fallback</div>
          </div>
          <div className="stat">
            <div className="stat-num">5<span className="accent"> days</span></div>
            <div className="stat-label">Most workloads fully live</div>
          </div>
        </Reveal>
      </section>

      {/* the two drains */}
      <section className="section">
        <SectionHead
          title="Two things silently"
          mute="draining your budget."
          sub="Hyperscaler pricing is designed to grow with your usage — but not necessarily with your margins."
        />
        <div className="card-grid">
          {PAINS.map((c) => (
            <Reveal className="card" key={c.title} style={{ padding: '34px 32px' }}>
              <IconTile name={c.icon} variant={c.variant} />
              <h3 style={{ fontSize: 19 }}>{c.title}</h3>
              <p style={{ fontSize: 14.5 }}>{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* migration phases */}
      <section className="section">
        <SectionHead
          title="Go live in 5 steps."
          mute="Zero downtime."
          sub="Nuozen handles the entire migration. You stay on your current cloud until the moment we flip the switch — then you're on cheaper, faster infrastructure."
        />
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

      {/* what we migrate */}
      <section className="section">
        <SectionHead
          title="Everything moves."
          mute="Nothing breaks."
          sub="The migration plan maps every service you run today — compute, databases, storage, DNS, email — to its Nuozen equivalent, with a cutover timeline you approve first."
        />
        <div className="card-grid">
          {MIGRATE.map((c) => (
            <Reveal className="card" key={c.title}>
              <IconTile name={c.icon} variant={c.variant} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* risk & safety */}
      <section className="section">
        <div className="why-grid">
          <Reveal className="why-sticky">
            <h2 className="h-section" style={{ marginBottom: 20 }}>Not just cheaper, <span className="text-mute">better managed.</span></h2>
            <p className="sub" style={{ maxWidth: 420 }}>
              Every rupee you save comes with an India-based team that treats your infrastructure like their own. These are the guarantees the migration playbook is built on.
            </p>
            <Link to="/cloud-hosting" className="link-arrow" style={{ marginTop: 28 }}>See the plans you land on<span className="arr">›</span></Link>
          </Reveal>
          <Reveal className="panel" style={{ padding: '38px 40px' }}>
            <ul className="plan-list" style={{ margin: 0, gap: 14 }}>
              {SAFETY.map((s) => (
                <li key={s} style={{ fontSize: 15 }}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to cut"
        muted="your cloud bill?"
        sub="Book a free 30-minute cost audit. We'll review your current bills and show you exactly how much you can save — no obligation, no sales pressure."
        primary={['Book a free audit', '/contact']}
        secondary={['Talk to an engineer', '/contact']}
      />
    </div>
  );
}
