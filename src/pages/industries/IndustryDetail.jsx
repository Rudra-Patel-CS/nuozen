import { useParams, Navigate, Link } from 'react-router-dom';
import Reveal from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';
import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';
import { getIndustry } from '../../data/industries.js';

export default function IndustryDetail() {
  const { slug } = useParams();
  const ind = getIndustry(slug);
  if (!ind) return <Navigate to="/industries" replace />;

  const related = ind.related.map(getIndustry).filter(Boolean);

  return (
    <div className="shell">
      <PageHero
        crumbs={[['Industries', '/industries'], [ind.title]]}
        badge={ind.badge || 'Utility solutions since 2007'}
        title={<>{ind.title} <span className="text-mute">{ind.muteTail}</span></>}
        lede={ind.lede}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
          <Link to="/contact" className="btn btn-primary-sm">Request a demo<span style={{ fontSize: 13 }}>›</span></Link>
          <Link to="/contact" className="btn btn-ghost" style={{ fontSize: 15, padding: '13px 24px' }}>Talk to an engineer</Link>
        </div>
      </PageHero>

      {/* stats strip */}
      {ind.stats && (
        <section style={{ padding: '0 0 88px' }}>
          <Reveal className="stats">
            {ind.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-num">{s.n}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </section>
      )}

      {/* solutions — alternating panels with ✓ point lists */}
      <section className="section">
        <SectionHead
          title="Everything the network needs,"
          mute="under one roof."
          sub="Each module deploys standalone or as one integrated platform — telemetry, metering, billing and consumer systems sharing a single data spine."
        />
        <div style={{ display: 'grid', gap: 16 }}>
          {ind.solutions.map((s, i) => (
            <Reveal className="panel" style={{ padding: '38px 36px' }} key={s.title}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: '30px 44px', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <IconTile name={s.icon} variant={i % 2 ? 'cyn' : 'org'} />
                    <h3 className="h-card" style={{ fontSize: 22 }}>{s.title}</h3>
                  </div>
                  <p className="sub" style={{ marginTop: 18, fontSize: 15.5 }}>{s.desc}</p>
                </div>
                {s.points && (
                  <ul className="plan-list" style={{ margin: 0, paddingTop: 6 }}>
                    {s.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* quote */}
      {ind.quote && (
        <section className="section">
          <Reveal className="quote-card">
            <IconTile name={ind.icon} variant="org" />
            <blockquote style={{ marginTop: 28 }}>{ind.quote.text}</blockquote>
            <div className="quote-attr">
              <div className="quote-rule" />
              <div className="quote-by">{ind.quote.by}</div>
            </div>
          </Reveal>
        </section>
      )}

      {/* delivery process */}
      {ind.process && (
        <section className="section">
          <Reveal style={{ marginBottom: 44 }}>
            <h2 className="h-section" style={{ maxWidth: 780 }}>From design documents <span className="text-mute">to go-live.</span></h2>
          </Reveal>
          <Reveal>
            <div className="steps">
              {ind.process.map(([t, d], i) => (
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
      )}

      {/* related industries */}
      {related.length > 0 && (
        <section className="section">
          <SectionHead
            title="Adjacent networks"
            mute="we also run."
            sub="The same telemetry, metering and billing platform — configured for the physics of a different utility."
          />
          <div className="card-grid">
            {related.map((r) => (
              <Reveal as={Link} to={`/industries/${r.slug}`} className="card" key={r.slug}>
                <IconTile name={r.icon} variant="neutral" />
                <h3>{r.title}</h3>
                <p>{r.blurb}</p>
                <span className="link-arrow" style={{ marginTop: 18, display: 'inline-flex' }}>Explore<span className="arr">›</span></span>
              </Reveal>
            ))}
            <Reveal as={Link} to="/industries" className="card">
              <IconTile name="globe" variant="orgT" />
              <h3>All industries</h3>
              <p>Power, water and gas distribution — plus the enterprise verticals we build software for.</p>
              <span className="link-arrow" style={{ marginTop: 18, display: 'inline-flex' }}>View all<span className="arr">›</span></span>
            </Reveal>
          </div>
        </section>
      )}

      <CtaBand title={ind.cta.title} muted={ind.cta.muted} sub={ind.cta.sub} primary={['Request a demo', '/contact']} />
    </div>
  );
}
