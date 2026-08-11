import { Link, Navigate, useParams } from 'react-router-dom';
import Reveal from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';
import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';
import SERVICES from '../../data/services.js';

const TILE_CYCLE = ['org', 'cyn', 'neutral'];

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = SERVICES[slug];
  if (!svc) return <Navigate to="/services" replace />;

  const related = (svc.related || []).map((r) => SERVICES[r]).filter(Boolean);

  return (
    <div className="shell">
      <PageHero
        crumbs={[['Services', '/services'], [svc.title]]}
        badge={svc.badge}
        title={<>{svc.title} <span className="text-mute">{svc.muteTail}</span></>}
        lede={svc.lede}
      >
        <div className="svc-tags" style={{ marginTop: 28 }}>
          {svc.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
      </PageHero>

      {/* what we deliver */}
      <section className="section">
        <SectionHead
          title="What we deliver,"
          mute="in practice."
          sub="Every engagement is scoped in writing before work starts — this is what typically lands inside it."
        />
        <div className="card-grid">
          {svc.features.map((f, i) => (
            <Reveal className="card" key={f.title}>
              <IconTile name={f.icon} variant={TILE_CYCLE[i % TILE_CYCLE.length]} />
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* capability checklist */}
      <section className="section">
        <SectionHead
          title="Capabilities,"
          mute="at a glance."
          sub="The short answer to “can you also…” — if it isn't listed, ask; it usually lives one service over."
        />
        <Reveal className="card" style={{ padding: '34px 32px' }}>
          <ul
            className="plan-list"
            style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '12px 36px' }}
          >
            {svc.checks.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </Reveal>
      </section>

      {/* process, when the service has one */}
      {svc.steps && svc.steps.length > 0 && (
        <section className="section">
          <Reveal style={{ marginBottom: 44 }}>
            <h2 className="h-section" style={{ maxWidth: 780 }}>
              How the engagement runs, <span className="text-mute">step by step.</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="steps">
              {svc.steps.map((s, i) => (
                <div className="step" key={s.t}>
                  <span className="step-dot" />
                  <div className="step-num">Step 0{i + 1}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* related services */}
      {related.length > 0 && (
        <section className="section">
          <SectionHead
            title="Related services,"
            mute="worth pairing."
            sub="Most clients combine two or three of these under one account manager — one contact, one written scope."
          />
          <div className="card-grid-sm">
            {related.map((r, i) => (
              <Reveal as={Link} to={`/services/${r.slug}`} className="card" key={r.slug}>
                <IconTile name={r.icon} variant={TILE_CYCLE[i % TILE_CYCLE.length]} />
                <h3>{r.title}</h3>
                <p>{r.short}</p>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: 30 }}>
            <Link to="/services" className="link-arrow">All services<span className="arr">›</span></Link>
          </Reveal>
        </section>
      )}

      <CtaBand
        title={svc.cta.title}
        muted={svc.cta.muted}
        sub={svc.cta.sub}
        primary={['Get a free quote', '/contact']}
      />
    </div>
  );
}
