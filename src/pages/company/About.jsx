import { Link } from 'react-router-dom';
import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';
import Reveal, { CountUp } from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';

const TIMELINE = [
  ['2007', 'Company founded', 'Nuozen established with a focus on utility technology and enterprise IT.'],
  ['2009', 'First SCADA Deployment', 'Successfully deployed our first large-scale SCADA system for an electricity distribution utility.'],
  ['2013', 'Cloud & Mobile Expansion', 'Extended services to include cloud hosting, mobile application development, and IoT platforms.'],
  ['2017', 'Water & Gas Verticals', 'Expanded utility coverage to water distribution and natural gas network management systems.'],
  ['Today', 'Enterprise IT & Outsourcing', 'Full-service IT partner for enterprises — PHP, Python outsourcing, firewall, cloud, and big data analytics.'],
];

const VALUES = [
  { icon: 'gauge', tile: 'org', title: 'Precision', d: 'Every line of code, every system configuration, and every deployment is executed with exacting attention to detail and quality.' },
  { icon: 'team', tile: 'cyn', title: 'Partnership', d: 'We don’t just build software — we become long-term technology partners invested in your success and growth.' },
  { icon: 'shield', tile: 'neutral', title: 'Reliability', d: 'Critical infrastructure requires zero-downtime thinking. We engineer for resilience, failover, and 99.9% availability.' },
  { icon: 'rocket', tile: 'cyn', title: 'Innovation', d: 'We continuously invest in emerging technologies to keep our clients ahead — from IoT and big data to AI-driven analytics.' },
  { icon: 'bolt', tile: 'org', title: 'Impact', d: 'Our work powers electricity, water, and gas for millions of people. We take the responsibility of that impact seriously.' },
  { icon: 'eye', tile: 'neutral', title: 'Transparency', d: 'Honest communication, clear pricing, and no surprises. We believe great client relationships start with trust.' },
];

export default function About() {
  return (
    <div className="shell">
      <PageHero
        crumbs={[['About']]}
        badge="Hosting &amp; Datacentres · Thane, Maharashtra"
        title={<>Powering critical infrastructure <span className="text-mute">since 2007.</span></>}
        lede="Nuozen was founded with a singular vision — to deliver sophisticated, reliable technology solutions to utility companies and enterprises that form the backbone of modern society."
      />

      {/* mission */}
      <section className="section">
        <SectionHead
          title="Technology that matters"
          mute="at scale."
          sub="From substations and smart meters to cloud platforms and consumer billing — the systems we build run quietly behind everyday life."
        />
        <Reveal className="prose">
          <p>
            Nuozen powers intelligent energy decisions with industry-leading software, research and consulting
            services. We help you develop, sell and operate with fast, precise insight into the energy, economic
            and environmental impacts of your projects.
          </p>
          <p>
            Our award-winning platforms provide configurable technology for building and managing complex
            monitoring, control and automation solutions — including safety, energy management, asset tracking,
            and smart infrastructure. A pioneer in energy and water management, we cover everything from
            substation and feeder monitoring to HV and LV consumer systems, with real-time metering and
            integrated billing so consumers can pay online, view past bills, and raise support requests.
          </p>
          <p>
            Nuozen is a member of the <strong>Indian Water Works Association</strong>, and provides integrated
            solutions to manage power, water, and natural gas distribution across Maharashtra and beyond.
          </p>
        </Reveal>
      </section>

      {/* timeline */}
      <section className="section">
        <Reveal style={{ marginBottom: 44 }}>
          <h2 className="h-section" style={{ maxWidth: 720 }}>A journey <span className="text-mute">of innovation.</span></h2>
        </Reveal>
        <Reveal>
          <div className="steps">
            {TIMELINE.map(([year, t, d]) => (
              <div className="step" key={t}>
                <span className="step-dot" />
                <div className="step-num">{year}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* values */}
      <section className="section">
        <SectionHead
          title="What drives"
          mute="everything we do."
          sub="Six values, written down because clients hold us to them — and because we hold each other to them first."
        />
        <div className="card-grid">
          {VALUES.map((v) => (
            <Reveal className="card" key={v.title}>
              <IconTile name={v.icon} variant={v.tile} />
              <h3>{v.title}</h3>
              <p>{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* stats */}
      <section className="section">
        <Reveal className="stats">
          <div className="stat">
            <div className="stat-num"><CountUp to={17} /><span className="accent">+</span></div>
            <div className="stat-label">Years in operation</div>
          </div>
          <div className="stat">
            <div className="stat-num"><CountUp to={50} /><span className="accent">+</span></div>
            <div className="stat-label">Enterprise clients served</div>
          </div>
          <div className="stat">
            <div className="stat-num"><CountUp to={99.9} decimals={1} /><span className="accent">%</span></div>
            <div className="stat-label">Contractual uptime SLA</div>
          </div>
          <div className="stat">
            <div className="stat-num">24<span className="accent">/7</span></div>
            <div className="stat-label">Monitoring and on-call</div>
          </div>
        </Reveal>
        <Reveal style={{ marginTop: 40 }}>
          <Link to="/clients" className="link-arrow">See who we work with<span className="arr">›</span></Link>
        </Reveal>
      </section>

      <CtaBand
        title="Ready to work"
        muted="with Nuozen?"
        sub="Let's talk about your next project — cloud, security, SCADA, or software. One call, a written scope, and a team that stays."
      />
    </div>
  );
}
