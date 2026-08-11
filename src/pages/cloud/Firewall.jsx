import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';
import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';
import { firewallTiers, webFirewallPlans, firewallFaqs, priceLabel, CLOUD_PORTAL } from '../../data/plans.js';

const FEATURES = [
  {
    icon: 'eye', variant: 'org', title: 'Deep Packet Inspection',
    desc: 'Inspect encrypted and unencrypted traffic at Layer 7 — block malware, exfiltration attempts, and policy violations before they reach your users.',
  },
  {
    icon: 'network', variant: 'cyn', title: 'SD-WAN & Link Management',
    desc: 'Intelligently route traffic across multiple ISP links. Automatic failover in under a second ensures your branch offices stay online even during an outage.',
  },
  {
    icon: 'lock', variant: 'neutral', title: 'VPN & Zero Trust Access',
    desc: "Site-to-site IPSec tunnels, SSL remote-access VPN, and ZTNA micro-segmentation — secure your workforce whether they're in office, at home, or on the road.",
  },
  {
    icon: 'flame', variant: 'org', title: 'Threat Sandboxing',
    desc: 'Unknown files and executables are detonated in an isolated sandbox before reaching your environment. Zero-day threats stopped before execution.',
  },
  {
    icon: 'chart', variant: 'cyn', title: 'Real-Time Dashboards & Alerts',
    desc: 'Live traffic maps, top talkers, blocked threat categories, and instant SMS/email alerts whenever a policy violation or intrusion attempt is detected.',
  },
  {
    icon: 'doc', variant: 'neutral', title: 'Compliance-Ready Reporting',
    desc: "Pre-built report templates for ISO 27001, PCI-DSS, and India's CERT-In guidelines. Audit-ready evidence generated automatically every month.",
  },
];

const STEPS = [
  ['Requirements Call', 'We assess your current network topology, number of users, ISP links, compliance requirements, and risk appetite in a 60-minute discovery call.'],
  ['Solution Design', 'Our team produces a firewall sizing document, policy framework, and network diagram. You review and approve before any hardware or licensing is ordered.'],
  ['Deployment & Policy Push', 'We deploy the firewall (virtual or physical), migrate existing rules, push baseline policies, configure VPN tunnels, and validate connectivity with zero downtime.'],
  ['Ongoing Management', '24/7 monitoring begins immediately. Rule updates, firmware patches, threat feed refreshes, and monthly security reports are handled entirely by Nuozen.'],
];

function TierCard({ tier }) {
  const external = tier.cta.href.startsWith('http');
  const btnCls = tier.featured ? 'btn btn-primary-sm' : 'btn btn-ghost';
  const btnStyle = tier.featured ? undefined : { padding: '13px 24px', fontSize: 15 };
  return (
    <Reveal className={`plan${tier.featured ? ' featured' : ''}`}>
      {tier.featured && (
        <div className="plan-flag"><span className="chip"><span className="chip-dot" />{tier.flag}</span></div>
      )}
      <div className="plan-name">{tier.name}</div>
      <div className="plan-for">{tier.tagline}</div>
      <div className="plan-price">
        {priceLabel(tier.price)}{tier.price.per && <span className="per"> {tier.price.per}</span>}
      </div>
      <ul className="plan-list">
        {tier.features.map((f) => (
          <li key={f.label} className={f.ok ? undefined : 'no'}>{f.label}</li>
        ))}
      </ul>
      {external ? (
        <a href={tier.cta.href} target="_blank" rel="noreferrer" className={btnCls} style={btnStyle}>
          {tier.cta.label}<span style={{ fontSize: 13 }}>↗</span>
        </a>
      ) : (
        <Link to={tier.cta.href} className={btnCls} style={btnStyle}>
          {tier.cta.label}<span style={{ fontSize: 13 }}>›</span>
        </Link>
      )}
    </Reveal>
  );
}

export default function Firewall() {
  return (
    <div className="shell">
      <PageHero
        crumbs={[['Firewall as a Service']]}
        badge="Managed 24/7 by our SOC · live in 5–10 days"
        title={<>Enterprise-grade firewall, <span className="text-mute">fully managed for you.</span></>}
        lede="Powered by Sophos XG and FortiGate — Nuozen deploys, monitors, and manages your network perimeter 24/7. Block threats, enforce policies, and gain complete visibility without the overhead of an in-house NOC."
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 34 }}>
          <Link to="/contact" className="btn btn-primary">Request a free assessment<span style={{ fontSize: 14 }}>›</span></Link>
          <a href={CLOUD_PORTAL} target="_blank" rel="noreferrer" className="btn btn-ghost">Get started online ↗</a>
        </div>
      </PageHero>

      {/* tiers */}
      <section className="section" id="plans">
        <SectionHead
          title="Clear pricing,"
          mute="zero surprises."
          sub="All plans include 24/7 monitoring, policy management, and monthly security reports. Hardware options available on request."
        />
        <div className="plans">
          {firewallTiers.map((t) => <TierCard tier={t} key={t.id} />)}
        </div>
        <Reveal style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: '12px 30px', alignItems: 'center' }}>
          <span style={{ fontSize: 13.5, color: 'var(--dim)' }}>
            Prices exclude GST. We only deploy proven enterprise-grade hardware and software — no white-label or unbranded appliances.
          </span>
          <Link to="/contact" className="link-arrow">Not sure which tier fits? Talk to an expert<span className="arr">›</span></Link>
        </Reveal>
      </section>

      {/* features */}
      <section className="section">
        <SectionHead
          title="Security built"
          mute="for Indian businesses."
          sub="Every plan is configured, monitored, and maintained by our SOC team — you get peace of mind without needing an in-house network security expert."
        />
        <div className="card-grid">
          {FEATURES.map((c) => (
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
          title="Up and protected"
          mute="in 4 steps."
          sub="Nuozen handles everything from sizing to go-live. Most deployments complete within 5–10 business days."
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

      {/* per-domain web firewall */}
      <section className="section">
        <SectionHead
          title="Just protecting"
          mute="a website?"
          sub="Cloud-delivered FWaaS with no hardware — one domain per subscription. Point your DNS at our firewall and manage GeoIP, IP, port, and protocol rules from your dashboard. Pay online with Razorpay or PayPal."
        />
        <div className="plans" style={{ maxWidth: 900 }}>
          {webFirewallPlans.map((p) => (
            <Reveal className="plan" key={p.id}>
              <div className="plan-name">{p.name}</div>
              <div className="plan-for">{p.tagline}</div>
              <div className="plan-price">
                {priceLabel(p.price)}<span className="per"> {p.price.per}</span>
              </div>
              <ul className="plan-list">
                {p.features.map((f) => (
                  <li key={f.label} className={f.ok ? undefined : 'no'}>{f.label}</li>
                ))}
              </ul>
              <a href={p.cta.href} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '13px 24px', fontSize: 15 }}>
                {p.cta.label}<span style={{ fontSize: 13 }}>↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* cross-sell: cloud hosting */}
      <section className="section">
        <Reveal className="panel" style={{ padding: '42px 44px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 28 }}>
          <IconTile name="server" variant="org" size={48} icon={23} />
          <div style={{ flex: '1 1 380px' }}>
            <h3 className="h-card" style={{ fontSize: 22, margin: '0 0 8px' }}>Also looking for managed cloud hosting?</h3>
            <p className="sub" style={{ maxWidth: 640, fontSize: 15 }}>
              Pair your Nuozen firewall with our managed cloud hosting for a fully integrated, monitored infrastructure stack — one provider, one support team, one invoice.
            </p>
          </div>
          <Link to="/cloud-hosting" className="btn btn-primary-sm">View cloud hosting<span style={{ fontSize: 13 }}>›</span></Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section">
        <SectionHead
          title="Frequently asked"
          mute="questions."
          sub="How the service runs day to day — and what happens when something tries to get in."
        />
        <Reveal className="faq">
          {firewallFaqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <div className="faq-a">{f.a}</div>
            </details>
          ))}
        </Reveal>
      </section>

      <CtaBand
        title="Ready to secure"
        muted="your network?"
        sub="Book a free 30-minute security assessment. Our engineers will review your current setup and recommend the right plan — no obligation."
        primary={['Request a free assessment', '/contact']}
        secondary={['Contact support', '/contact']}
      />
    </div>
  );
}
