import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';
import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';
import { vmPlans, sharedInclusions, cloudFaqs, priceLabel, CLOUD_PORTAL } from '../../data/plans.js';

const STEPS = [
  ['Register & Choose a Plan', 'Head to cloud.nuozen.in, create your account, and select the VM plan that fits your needs — Starter, Business, Pro, or Enterprise. No calls required, no waiting for a quote.'],
  ['Make Payment', "Complete your payment securely in the portal. Monthly and annual billing options available. You'll receive a GST invoice immediately after checkout — eligible for input tax credit."],
  ['VM Delivered to You', "Your KVM virtual machine is provisioned and delivered within minutes of payment confirmation. You'll receive login credentials and access details directly to your registered email."],
  ['Ongoing Management', '24/7 monitoring starts immediately. OS patches, backup verification, SSL renewals, and resource alerts are handled entirely by Nuozen — you never touch the server.'],
];

function PlanCard({ plan }) {
  return (
    <Reveal className={`plan${plan.featured ? ' featured' : ''}`}>
      {plan.featured && (
        <div className="plan-flag"><span className="chip"><span className="chip-dot" />{plan.flag}</span></div>
      )}
      <div className="plan-name">{plan.name}</div>
      <div className="plan-for">{plan.tagline}</div>
      <div className="plan-price">
        {priceLabel(plan.price)}{plan.price.per && <span className="per"> {plan.price.per}</span>}
      </div>
      <ul className="plan-list">
        {plan.features.map((f) => (
          <li key={f.label} className={f.ok ? undefined : 'no'}>{f.label}</li>
        ))}
      </ul>
      <a
        href={plan.cta.href} target="_blank" rel="noreferrer"
        className={plan.featured ? 'btn btn-primary-sm' : 'btn btn-ghost'}
        style={plan.featured ? undefined : { padding: '13px 24px', fontSize: 15 }}
      >
        {plan.cta.label}<span style={{ fontSize: 13 }}>↗</span>
      </a>
    </Reveal>
  );
}

export default function CloudHosting() {
  return (
    <div className="shell">
      <PageHero
        crumbs={[['Cloud Hosting']]}
        badge="Self-serve · live in minutes"
        title={<>Managed cloud hosting <span className="text-mute">with a 99.9% uptime SLA.</span></>}
        lede="From affordable KVM VMs to enterprise environments — Nuozen manages your entire infrastructure so your team can focus on building."
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 34 }}>
          <a href={CLOUD_PORTAL} target="_blank" rel="noreferrer" className="btn btn-primary">Get your VM now<span style={{ fontSize: 14 }}>↗</span></a>
          <Link to="/contact" className="btn btn-ghost">Talk to an expert</Link>
        </div>
      </PageHero>

      {/* plans */}
      <section className="section" id="plans">
        <SectionHead
          title="Simple,"
          mute="transparent pricing."
          sub="All plans include 24/7 monitoring, daily backups, and dedicated support. No hidden fees, no surprise invoices."
        />
        <div className="plans">
          {vmPlans.map((p) => <PlanCard plan={p} key={p.id} />)}
        </div>
        <Reveal style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: '12px 30px', alignItems: 'center' }}>
          <span style={{ fontSize: 13.5, color: 'var(--dim)' }}>
            Prices in USD, excluding GST. GST invoice issued at checkout for Indian customers.
          </span>
          <a href={CLOUD_PORTAL} target="_blank" rel="noreferrer" className="link-arrow">Register and order instantly<span className="arr">↗</span></a>
          <Link to="/contact" className="link-arrow">Need help choosing? Talk to our team<span className="arr">›</span></Link>
        </Reveal>
      </section>

      {/* standard inclusions */}
      <section className="section">
        <SectionHead
          title="Every plan comes with these"
          mute="as standard."
          sub="We partner with and operate the same technology trusted by enterprises and data centres globally — and every plan ships with the same managed baseline."
        />
        <div className="card-grid">
          {sharedInclusions.map((c) => (
            <Reveal className="card" key={c.title}>
              <IconTile name={c.icon} variant={c.variant} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* steps */}
      <section className="section">
        <SectionHead
          title="Up and running"
          mute="in 4 simple steps."
          sub="Register yourself, select a plan, make payment — and your KVM VM is delivered to your inbox within minutes. No calls required."
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

      {/* cross-sell: firewall */}
      <section className="section">
        <Reveal className="panel" style={{ padding: '42px 44px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 28 }}>
          <IconTile name="shield" variant="cyn" size={48} icon={23} />
          <div style={{ flex: '1 1 380px' }}>
            <h3 className="h-card" style={{ fontSize: 22, margin: '0 0 8px' }}>Also need managed network security?</h3>
            <p className="sub" style={{ maxWidth: 640, fontSize: 15 }}>
              Pair your cloud hosting with Nuozen Firewall as a Service — Sophos XG and FortiGate-powered network protection, VPN, and 24/7 threat monitoring. One provider, one team, one invoice.
            </p>
          </div>
          <Link to="/firewall" className="btn btn-primary-sm">View firewall plans<span style={{ fontSize: 13 }}>›</span></Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section">
        <SectionHead
          title="Common"
          mute="questions."
          sub="Everything most teams ask before their first VM. Anything else — open a ticket or call us, and an engineer answers."
        />
        <Reveal className="faq">
          {cloudFaqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <div className="faq-a">{f.a}</div>
            </details>
          ))}
        </Reveal>
      </section>

      <CtaBand
        title="Your VM is ready"
        muted="in minutes."
        sub="Register at cloud.nuozen.in, pick a plan, make payment — your KVM VM is delivered to your inbox. No waiting, no calls."
        primary={['Get your VM now ↗', CLOUD_PORTAL]}
        secondary={['Talk to our team', '/contact']}
      />
    </div>
  );
}
