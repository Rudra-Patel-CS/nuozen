import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import Icon from './Icons.jsx';

// Inner-page hero with breadcrumbs. `title` may contain a <span className="text-mute"> segment.
export function PageHero({ crumbs = [], title, lede, children, badge }) {
  return (
    <section className="page-hero">
      {crumbs.length > 0 && (
        <nav className="crumbs">
          <Link to="/">Home</Link>
          {crumbs.map(([label, to], i) => (
            <span key={i} style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
              <span className="sep">›</span>
              {to ? <Link to={to}>{label}</Link> : <span className="here">{label}</span>}
            </span>
          ))}
        </nav>
      )}
      {badge && <div className="badge-pill" style={{ marginBottom: 24 }}><span className="badge-dot" />{badge}</div>}
      <h1 className="h-display">{title}</h1>
      {lede && <p className="lede">{lede}</p>}
      {children}
    </section>
  );
}

// Section header: square-cluster marker, big heading (with optional muted tail), optional sub copy.
export function SectionHead({ title, mute, sub, kicker }) {
  return (
    <Reveal className="section-head">
      <div>
        <div className="kicker">
          <span className="sqs" aria-hidden="true"><i /><i /><i /></span>
          {kicker}
        </div>
        <h2 className="h-section">{title}{mute && <> <span className="text-mute">{mute}</span></>}</h2>
      </div>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  );
}

// Dark closing CTA band, reused across pages.
export function CtaBand({
  title = 'Tell us what needs',
  muted = 'to stay up.',
  sub = 'Cloud, firewall, website, or software — we scope it in one call and send a written quote within two working days.',
  primary = ['Get in touch', '/contact'],
  secondary = ['Contact support', '/contact'],
}) {
  const [pLabel, pTo] = primary;
  const [sLabel, sTo] = secondary;
  return (
    <section className="section">
      <Reveal className="cta-dark">
        <div className="cta-dark-dots" />
        <div className="cta-dark-glow" />
        <div className="cta-dark-grid">
          <div>
            <h2>{title} <span className="dim">{muted}</span></h2>
            <p className="cta-sub">{sub}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {pTo.startsWith('/')
                ? <Link to={pTo} className="btn btn-cta-org">{pLabel}<span style={{ fontSize: 13 }}>›</span></Link>
                : <a href={pTo} className="btn btn-cta-org" {...(pTo.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{pLabel}<span style={{ fontSize: 13 }}>›</span></a>}
              {sTo.startsWith('/')
                ? <Link to={sTo} className="btn btn-dark-ghost">{sLabel}</Link>
                : <a href={sTo} className="btn btn-dark-ghost" {...(sTo.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{sLabel}</a>}
            </div>
          </div>
          <ContactTiles />
        </div>
      </Reveal>
    </section>
  );
}

export function ContactTiles() {
  const tiles = [
    { icon: 'pin', variant: 'tile-dark-org', color: '#F07824', body: <>Flat 105, Prathmesh View<br />Mira Bhayandar, Thane 401105</> },
    { icon: 'call', variant: 'tile-dark-cyn', color: '#90D8F0', body: <>+91 91369 56200<br />Mon–Fri, 09:00–20:00 IST</> },
    { icon: 'server', variant: 'tile-dark-org', color: '#F07824', body: <>cloud.nuozen.in<br />budgethost.nuozen.in</> },
    { icon: 'help', variant: 'tile-dark-cyn', color: '#90D8F0', body: <>Meet.Zaveri@nuozen.in<br />24/7 on-call escalation</> },
  ];
  return (
    <div className="cta-tiles">
      {tiles.map((t, i) => (
        <div className="cta-tile" key={i}>
          <span className={`icon-tile ${t.variant}`}>
            <Icon name={t.icon} size={16} color={t.color} width={1.9} />
          </span>
          <div className="cta-tile-body">{t.body}</div>
        </div>
      ))}
    </div>
  );
}
