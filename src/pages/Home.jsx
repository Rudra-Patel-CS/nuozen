import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Reveal, { CountUp } from '../components/Reveal.jsx';
import Icon, { IconTile } from '../components/Icons.jsx';
import { CtaBand } from '../components/Page.jsx';

const SERVICES = [
  {
    to: '/cloud-hosting', icon: 'server', tile: 'tile-org', selfServe: true,
    title: 'Cloud VMs & Hosting',
    desc: 'Proxmox VE virtualisation and bare metal with a 99.9% SLA. Pick a plan and your VM is live in minutes.',
    tags: ['Daily backups', 'cPanel / Plesk', 'Multi-region'],
  },
  {
    to: '/firewall', icon: 'shield', tile: 'tile-cyn', selfServe: true,
    title: 'Firewall as a Service',
    desc: 'Sophos XG/XGS and Fortigate NGFW, deployed and managed by us. You pick a tier; we handle the rest.',
    tags: ['24/7 monitoring', 'VPN & SD-WAN', 'Threat alerting'],
  },
  {
    to: '/pricing', icon: 'globe', tile: 'tile-bone',
    title: 'Budget Hosting & Domains',
    desc: 'Shared, reseller, and VPS plans for startups and developers. Real support at a price that makes sense.',
    tags: ['From ₹499/mo', 'Domains', 'Reseller'],
  },
  {
    to: '/services/web-application-development', icon: 'code', tile: 'tile-bone',
    title: 'Software Development',
    desc: 'Custom web applications, mobile apps, and enterprise systems built on stacks we have shipped for years.',
    tags: ['MERN / LAMP', 'Python · Node', 'Flutter · iOS'],
  },
  {
    to: '/services/static-website-development', icon: 'browser', tile: 'tile-bone',
    title: 'Website Development',
    desc: 'SEO-first marketing sites on WordPress, React, or static stacks. Fast, mobile-first, built to convert.',
    tags: ['WordPress', 'React', 'Core Web Vitals'],
  },
];

const STEPS = [
  ['Discovery call', 'Thirty minutes on requirements, timeline, and budget. An engineer joins the call, not just a salesperson.'],
  ['Proposal & quote', 'A written scope with line-item pricing. No hidden fees and no change-order surprises later.'],
  ['Build & configure', 'We provision, develop, and harden — with QA gates and staged environments before anything ships.'],
  ['Launch & support', 'We go live together and stay on as your managed partner — one account manager, 24/7 on call.'],
];

const PROOF = [
  { n: '99.9%', t: 'Contractual uptime', d: 'A formal SLA with automated failover, daily backups, and round-the-clock monitoring behind it.' },
  { n: '4 hrs', t: 'Response on critical', d: 'Engineers, not a ticket queue. Priority incidents get a human inside four working hours.' },
  { n: '1', t: 'Point of contact', d: 'One account manager across hosting, development, and security. No handoffs between departments.' },
  { n: '₹', t: 'India-priced delivery', d: 'Global engineering standards at Indian market rates — the reason clients consolidate here.' },
  { n: '17+', t: 'Years in operation', d: 'Founded 2007. We have migrated the same clients through four generations of infrastructure.' },
  { n: '50+', t: 'Enterprise clients', d: 'Utilities, government bodies, healthcare, and private enterprise across Maharashtra and beyond.' },
];

const INDUSTRIES = [
  { to: '/industries/electricity', icon: 'bolt', tile: 'org', title: 'Electricity Distribution', d: 'SCADA, AMR/AMI, network data acquisition, substation monitoring, meter data management, and consumer billing.' },
  { to: '/industries/water', icon: 'drop', tile: 'cyn', title: 'Water Distribution', d: 'Smart water meter billing, SCADA monitoring, consumer relations portals, and leak detection analytics.' },
  { to: '/industries/natural-gas', icon: 'plant', tile: 'neutral', title: 'Natural Gas & Oil', d: 'Pipeline SCADA, safety monitoring, automated billing, and consumer management built to regulatory standards.' },
  { to: '/services/internet-of-things', icon: 'network', tile: 'org', title: 'Big Data & IoT', d: 'End-to-end sensor pipelines, aggregation, real-time dashboards, and analytics for operations teams.' },
  { to: '/services/integration-and-apis', icon: 'code', tile: 'cyn', title: 'Integration & APIs', d: 'REST and GraphQL design, third-party platform integration, and middleware for enterprise systems.' },
  { to: '/services/test-engineering', icon: 'check', tile: 'neutral', title: 'Test Engineering', d: 'Independent QA — functional, regression, performance, and security testing wired into your CI/CD.' },
];

export default function Home() {
  const rootRef = useRef(null);

  useEffect(() => {
    const mm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mm.matches) return;
    let onScroll;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('[data-h-badge]', { y: 22, autoAlpha: 0, duration: 0.8, delay: 0.15 })
        .from('[data-h-line]', { yPercent: 112, duration: 1.05, stagger: 0.09 }, '-=0.55')
        .from('[data-h-lede]', { y: 22, autoAlpha: 0, duration: 0.9 }, '-=0.65')
        .from('[data-h-cta]', { y: 20, autoAlpha: 0, duration: 0.85 }, '-=0.7')
        .from('[data-h-stats]', { y: 28, autoAlpha: 0, duration: 0.95 }, '-=0.6');

      const yA = gsap.quickTo('[data-blob-a]', 'y', { duration: 0.7, ease: 'power3.out' });
      const yB = gsap.quickTo('[data-blob-b]', 'y', { duration: 0.7, ease: 'power3.out' });
      onScroll = () => { yA(window.scrollY * 0.12); yB(window.scrollY * -0.09); };
      window.addEventListener('scroll', onScroll, { passive: true });
    }, rootRef);
    return () => {
      if (onScroll) window.removeEventListener('scroll', onScroll);
      ctx.revert();
    };
  }, []);

  return (
    <div className="shell" ref={rootRef}>
      {/* hero */}
      <section className="hero" style={{ position: 'relative', minHeight: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '96px 0 84px' }}>
        <div style={{ position: 'absolute', inset: '-60px 0 0', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div data-blob-a style={{ position: 'absolute', inset: 0 }}><div className="blob-a" /></div>
          <div data-blob-b style={{ position: 'absolute', inset: 0 }}><div className="blob-b" /></div>
        </div>
        <div style={{ position: 'relative', zIndex: 4, width: '100%', maxWidth: 760 }}>
          <div className="badge-pill" data-h-badge="">
            <span className="badge-dot" />Hosting &amp; Datacentres · Thane, Maharashtra
          </div>
          <h1 className="h-display" style={{ margin: '28px 0 0' }}>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span data-h-line="" style={{ display: 'inline-block' }}>Managed Cloud, Security</span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span data-h-line="" style={{ display: 'inline-block' }}>and Software <em>for Enterprise.</em></span>
            </span>
          </h1>
          <div className="rack" data-h-lede="" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => <i key={i} style={{ '--i': i }} />)}
          </div>
          <p className="lede" data-h-lede="" style={{ margin: '22px auto 0', maxWidth: 580 }}>
            Infrastructure, network security, and custom development from one accountable team — trusted by utilities, government bodies, and enterprises since 2007.
          </p>
          <div data-h-cta="" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 34 }}>
            <Link to="/contact" className="btn btn-primary">Request a demo</Link>
            <Link to="/contact" className="btn btn-ghost">Get a free quote</Link>
          </div>
        </div>
      </section>

      {/* stats */}
      <section style={{ padding: '0 0 88px' }}>
        <div className="stats" data-h-stats="">
          <div className="stat">
            <div className="stat-num"><CountUp to={17} /><span className="accent">+</span></div>
            <div className="stat-label">Years in operation</div>
          </div>
          <div className="stat">
            <div className="stat-num"><CountUp to={99.9} decimals={1} /><span className="accent">%</span></div>
            <div className="stat-label">Contractual uptime SLA</div>
          </div>
          <div className="stat">
            <div className="stat-num"><CountUp to={50} /><span className="accent">+</span></div>
            <div className="stat-label">Enterprise clients served</div>
          </div>
          <div className="stat">
            <div className="stat-num">24<span className="accent">/7</span></div>
            <div className="stat-label">Monitoring and on-call</div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="section">
        <Reveal className="section-head">
          <div>
            <div className="kicker"><span className="sqs" aria-hidden="true"><i /><i /><i /></span>What we run</div>
            <h2 className="h-section">Everything we do, <span className="text-mute">and nothing we don't.</span></h2>
          </div>
          <p className="sub">Two of these you can buy in the next ten minutes without speaking to anyone. The rest start with a conversation about what you actually need.</p>
        </Reveal>
        <div className="panel">
          {SERVICES.map((s) => (
            <Reveal as={Link} to={s.to} className="svc-row" key={s.title}>
              <span className={`icon-tile tile-48 ${s.tile}`}>
                <Icon name={s.icon} size={23} color={s.tile === 'tile-bone' ? '#3E434B' : '#fff'} width={1.9} />
              </span>
              <div>
                <div className="svc-row-title">
                  <h3>{s.title}</h3>
                  {s.selfServe && <span className="chip"><span className="chip-dot" />Self-serve</span>}
                </div>
                <p className="desc">{s.desc}</p>
              </div>
              <div className="svc-tags">
                {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="svc-go">›</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* process */}
      <section className="section">
        <Reveal style={{ marginBottom: 44 }}>
          <div className="kicker"><span className="sqs" aria-hidden="true"><i /><i /><i /></span>How engagements run</div>
          <h2 className="h-section" style={{ maxWidth: 780 }}>From first call to go-live, <span className="text-mute">without the waiting.</span></h2>
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

      {/* why */}
      <section className="section" id="why">
        <div className="why-grid">
          <Reveal className="why-sticky">
            <div className="kicker"><span className="sqs" aria-hidden="true"><i /><i /><i /></span>Why Nuozen</div>
            <h2 className="h-section" style={{ marginBottom: 20 }}>Seventeen years <span className="text-mute">is the shortest answer.</span></h2>
            <p className="sub" style={{ maxWidth: 420 }}>
              Founded in 2007, Nuozen has carried the same clients through four generations of infrastructure. That is the part you cannot buy from a marketplace.
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

      {/* industries */}
      <section className="section">
        <Reveal className="section-head">
          <div>
            <div className="kicker"><span className="sqs" aria-hidden="true"><i /><i /><i /></span>Industries</div>
            <h2 className="h-section">The systems <span className="text-mute">that keep the lights on.</span></h2>
          </div>
          <p className="sub">Long before the cloud business, Nuozen built SCADA, metering, and billing systems for utility operators and government bodies. That work still runs today.</p>
        </Reveal>
        <div className="card-grid">
          {INDUSTRIES.map((c) => (
            <Reveal as={Link} to={c.to} className="card" key={c.title}>
              <IconTile name={c.icon} variant={c.tile} />
              <h3>{c.title}</h3>
              <p>{c.d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: 32 }}>
          <Link to="/industries" className="link-arrow">All industry solutions<span className="arr">›</span></Link>
        </Reveal>
      </section>

      {/* quote */}
      <section className="section">
        <Reveal className="quote-card">
          <IconTile name="doc" variant="org" />
          <blockquote style={{ marginTop: 28 }}>
            Nuozen has been our technology partner for over eight years. Their cloud hosting and firewall management simply works —{' '}
            <span className="text-mute">and when we do have an issue, their team responds faster than anyone else we have worked with.</span>
          </blockquote>
          <div className="quote-attr">
            <div className="quote-rule" />
            <div className="quote-by">IT Manager · Enterprise client, Mumbai</div>
          </div>
        </Reveal>
      </section>

      <CtaBand primary={['Ashish.Yadav@nuozen.in', 'mailto:Ashish.Yadav@nuozen.in']} />
    </div>
  );
}
