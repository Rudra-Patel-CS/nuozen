import { Navigate } from 'react-router-dom';
import { PageHero, CtaBand } from '../../components/Page.jsx';
import Reveal from '../../components/Reveal.jsx';
import LEGAL from '../../data/legal.js';

export default function Legal({ doc }) {
  const d = LEGAL[doc];

  if (!d) return <Navigate to="/" replace />;

  return (
    <div className="shell">
      <PageHero
        crumbs={[[d.title]]}
        title={<span style={{ fontSize: 'clamp(2rem, 3.4vw, 2.9rem)' }}>{d.title}</span>}
        lede={`Last updated: ${d.updated}`}
      />

      <section className="section">
        <Reveal className="prose">
          {d.sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.ps.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          ))}
        </Reveal>
      </section>

      <CtaBand
        title="Questions about"
        muted="this policy?"
        sub="Write to Meet.Zaveri@nuozen.in and a human will get back to you within one business day."
        primary={['Email support', 'mailto:Meet.Zaveri@nuozen.in']}
        secondary={['Contact us', '/contact']}
      />
    </div>
  );
}
