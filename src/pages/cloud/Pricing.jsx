import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';
import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';
import {
  vmPlans, firewallTiers, vmCompare, priceLabel, CLOUD_PORTAL, BUDGET_HOST,
} from '../../data/plans.js';

// Compact plan card: headline specs only — full detail lives on the product page.
function MiniPlan({ plan, specCount = 4 }) {
  const external = plan.cta.href.startsWith('http');
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
        {plan.features.slice(0, specCount).map((f) => (
          <li key={f.label} className={f.ok ? undefined : 'no'}>{f.label}</li>
        ))}
      </ul>
      {external ? (
        <a href={plan.cta.href} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '13px 24px', fontSize: 15 }}>
          {plan.cta.label}<span style={{ fontSize: 13 }}>↗</span>
        </a>
      ) : (
        <Link to={plan.cta.href} className="btn btn-ghost" style={{ padding: '13px 24px', fontSize: 15 }}>
          {plan.cta.label}<span style={{ fontSize: 13 }}>›</span>
        </Link>
      )}
    </Reveal>
  );
}

const ENGAGEMENTS = [
  {
    icon: 'doc', variant: 'org', title: 'Fixed-scope quote',
    desc: 'A written scope with line-item pricing, delivered within two working days of the discovery call. No hidden fees and no change-order surprises later — best for well-defined builds and one-off projects.',
    link: ['Get a free quote', '/contact'],
  },
  {
    icon: 'team', variant: 'cyn', title: 'Dedicated team',
    desc: 'Nuozen engineers working as an extension of your team, billed monthly. Global engineering standards at Indian market rates — scale the team up or down as your roadmap moves.',
    link: ['Explore hiring models', '/hire-us'],
  },
];

export default function Pricing() {
  return (
    <div className="shell">
      <PageHero
        crumbs={[['Pricing']]}
        badge="Transparent pricing · Prices exclude GST"
        title={<>All our pricing, <span className="text-mute">on one page.</span></>}
        lede="Cloud VMs you can buy in the next ten minutes, managed firewall tiers, budget hosting, and development engagements — every price we publish, side by side. No hidden fees, no surprise invoices."
      />

      {/* cloud VM plans */}
      <section className="section" id="cloud">
        <SectionHead
          title="Cloud VM plans"
          mute="— live in minutes."
          sub="KVM virtual machines with a contractual uptime SLA, daily backups, and 24/7 monitoring. Register, pay, and your VM lands in your inbox."
        />
        <div className="plans">
          {vmPlans.map((p) => <MiniPlan plan={p} key={p.id} />)}
        </div>
        <Reveal style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: '12px 30px', alignItems: 'center' }}>
          <Link to="/cloud-hosting" className="link-arrow">Full cloud hosting details<span className="arr">›</span></Link>
          <a href={CLOUD_PORTAL} target="_blank" rel="noreferrer" className="link-arrow">Order instantly at cloud.nuozen.in<span className="arr">↗</span></a>
        </Reveal>
      </section>

      {/* VM compare table */}
      <section className="section">
        <SectionHead
          title="Everything you get,"
          mute="side by side."
          sub="The same four plans, spec by spec — so you can size the workload before you ever open the portal."
        />
        <Reveal className="table-wrap">
          <table className="compare">
            <thead>
              <tr>
                <th>What you get</th>
                {vmCompare.columns.map((c) => <th key={c}>{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {vmCompare.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i} style={i === 0 ? { fontWeight: 600, color: 'var(--ink)' } : undefined}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Reveal>
          <p style={{ fontSize: 13.5, color: 'var(--dim)', margin: '18px 0 0' }}>
            Prices exclude GST. Indian customers receive a GST invoice at checkout — registered businesses can claim input tax credit. Monthly and annual billing available.
          </p>
        </Reveal>
      </section>

      {/* firewall tiers */}
      <section className="section" id="firewall">
        <SectionHead
          title="Managed firewall tiers"
          mute="— secured in days."
          sub="Sophos XG/XGS and FortiGate NGFW, deployed and managed by our SOC team. All tiers include 24/7 monitoring, policy management, and security reports."
        />
        <div className="plans">
          {firewallTiers.map((t) => <MiniPlan plan={t} key={t.id} />)}
        </div>
        <Reveal style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: '12px 30px', alignItems: 'center' }}>
          <Link to="/firewall" className="link-arrow">Full firewall details &amp; per-domain web firewall plans<span className="arr">›</span></Link>
          <span style={{ fontSize: 13.5, color: 'var(--dim)' }}>
            Per-domain website firewall (cloud FWaaS) from $720/yr — no hardware required.
          </span>
        </Reveal>
      </section>

      {/* budget hosting teaser */}
      <section className="section">
        <Reveal className="panel" style={{ padding: '42px 44px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 28 }}>
          <IconTile name="globe" variant="cyn" size={48} icon={23} />
          <div style={{ flex: '1 1 380px' }}>
            <h3 className="h-card" style={{ fontSize: 22, margin: '0 0 8px' }}>Budget hosting &amp; domains — from ₹499/mo.</h3>
            <p className="sub" style={{ maxWidth: 640, fontSize: 15 }}>
              Shared, reseller, and VPS plans for startups and developers on our budget platform — with domains, free SSL, and real support at a price that makes sense.
            </p>
          </div>
          <a href={BUDGET_HOST} target="_blank" rel="noreferrer" className="btn btn-primary-sm">
            Browse budget plans<span style={{ fontSize: 13 }}>↗</span>
          </a>
        </Reveal>
      </section>

      {/* development engagements */}
      <section className="section">
        <SectionHead
          title="Development engagements"
          mute="— priced two ways."
          sub="Custom software, websites, and integrations don't fit on a rate card. Pick the engagement model, and we put the numbers in writing."
        />
        <div className="card-grid">
          {ENGAGEMENTS.map((e) => (
            <Reveal className="card" key={e.title} style={{ padding: '34px 32px' }}>
              <IconTile name={e.icon} variant={e.variant} />
              <h3 style={{ fontSize: 19 }}>{e.title}</h3>
              <p style={{ fontSize: 14.5, marginBottom: 22 }}>{e.desc}</p>
              <Link to={e.link[1]} className="link-arrow">{e.link[0]}<span className="arr">›</span></Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which plan"
        muted="fits your workload?"
        sub="Thirty minutes with an engineer — we size it, price it, and send a written quote within two working days. No obligation."
        primary={['Talk to an engineer', '/contact']}
        secondary={['Order online instead ↗', CLOUD_PORTAL]}
      />
    </div>
  );
}
