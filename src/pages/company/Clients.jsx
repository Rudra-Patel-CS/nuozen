import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx';
import Reveal from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';

const LOGOS = [
  { src: '/assets/clients/logo1.png', alt: 'Client logo' },
  { src: '/assets/clients/logo3.png', alt: 'Client logo' },
  { src: '/assets/clients/Logo4.png', alt: 'Client logo' },
  { src: '/assets/clients/logo5.png', alt: 'Client logo' },
  { src: '/assets/clients/Logo6.png', alt: 'Client logo' },
  { src: '/assets/clients/logo7.png', alt: 'Client logo' },
  { src: '/assets/clients/kiadb_logo-1.png', alt: 'KIADB — Karnataka Industrial Area Development Board logo' },
  { src: '/assets/clients/joshua.png', alt: 'Client logo' },
  { src: '/assets/clients/gc.png', alt: 'Client logo' },
  { src: '/assets/clients/11.png', alt: 'Client logo' },
  { src: '/assets/clients/download-1.png', alt: 'Client logo' },
];

const SECTORS = ['Utilities', 'Government', 'Healthcare', 'Manufacturing', 'Education'];

export default function Clients() {
  return (
    <div className="shell">
      <PageHero
        crumbs={[['Clients']]}
        badge="50+ enterprise clients since 2007"
        title={<>Trusted by the people <span className="text-mute">who keep the lights on.</span></>}
        lede="Utility operators, government bodies, and private enterprises run their critical systems on software Nuozen built — many of them for over a decade."
      />

      {/* logo wall */}
      <section className="section">
        <SectionHead
          title="Some of the teams"
          mute="we work with."
          sub="From the Karnataka Industrial Area Development Board to hospitals, manufacturers, and schools — logos our engineers are quietly proud of."
        />
        <Reveal className="logo-wall">
          {LOGOS.map((l) => (
            <div className="logo-cell" key={l.src}>
              <img src={l.src} alt={l.alt} loading="lazy" />
            </div>
          ))}
        </Reveal>
        <Reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28, alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--dim)', marginRight: 6 }}>Sectors we serve</span>
          {SECTORS.map((s) => <span className="chip" key={s}><span className="chip-dot" />{s}</span>)}
        </Reveal>
      </section>

      {/* testimonial */}
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

      <CtaBand
        title="Your logo could be"
        muted="on this page."
        sub="Tell us what needs to stay up — cloud, firewall, SCADA, or software. We scope it in one call and send a written quote within two working days."
      />
    </div>
  );
}
