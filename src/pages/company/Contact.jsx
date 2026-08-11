import { useState } from 'react';
import { PageHero } from '../../components/Page.jsx';
import Reveal from '../../components/Reveal.jsx';
import Icon, { IconTile } from '../../components/Icons.jsx';

const INTERESTS = [
  'Application Development',
  'Cloud Hosting',
  'SCADA & Utilities',
  'Firewall & Security',
  'PHP & Python Outsourcing',
  'Big Data Analytics',
  'IoT Solutions',
  'Other',
];

const BLANK = { firstName: '', lastName: '', email: '', phone: '', company: '', interest: INTERESTS[0], message: '' };

const INFO = [
  {
    icon: 'pin', tile: 'org', title: 'Visit us',
    body: <>Flat 105, Prathmesh View, 1st Floor<br />Eden Park Road, Mira Bhayandar<br />Thane 401105, Maharashtra</>,
  },
  {
    icon: 'call', tile: 'cyn', title: 'Call us',
    body: <><a href="tel:+919136956200" style={{ color: 'var(--ink)', fontWeight: 500 }}>+91 91369 56200</a><br />Mon–Fri, 09:00–20:00 IST</>,
  },
  {
    icon: 'mail', tile: 'neutral', title: 'Email us',
    body: <><a href="mailto:Ashish.Yadav@nuozen.in" style={{ color: 'var(--ink)', fontWeight: 500 }}>Ashish.Yadav@nuozen.in</a><br /><a href="mailto:Meet.Zaveri@nuozen.in" style={{ color: 'var(--ink)', fontWeight: 500 }}>Meet.Zaveri@nuozen.in</a><br />We respond within one business day.</>,
  },
  {
    icon: 'help', tile: 'cyn', title: 'Existing client?',
    body: <><a href="mailto:Meet.Zaveri@nuozen.in" style={{ color: 'var(--ink)', fontWeight: 500 }}>Meet.Zaveri@nuozen.in</a><br />24/7 on-call escalation for managed clients.</>,
  },
];

export default function Contact() {
  const [form, setForm] = useState(BLANK);
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="shell">
      <PageHero
        crumbs={[['Contact']]}
        badge="We respond within one business day"
        title={<>Let's start <span className="text-mute">a conversation.</span></>}
        lede="Whether you're looking to modernise your infrastructure, hire dedicated engineers, or get a quote for a new project — our team is ready to help."
      />

      {/* form + info */}
      <section className="section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 20, alignItems: 'start' }}>
          {/* form */}
          <Reveal className="panel" style={{ padding: '34px 32px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '46px 18px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 22 }}>
                  <IconTile name="check" variant="org" size={48} icon={22} />
                </div>
                <h2 className="h-card" style={{ fontSize: 24, marginBottom: 12 }}>Thank you, {form.firstName || 'there'}.</h2>
                <p className="sub" style={{ maxWidth: 420, margin: '0 auto' }}>
                  Your message is with our team. We reply to every enquiry within one business day
                  (Mon–Fri, 09:00–20:00 IST) — usually much sooner.
                </p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  style={{ marginTop: 28 }}
                  onClick={() => { setForm(BLANK); setSent(false); }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="h-card" style={{ fontSize: 22, marginBottom: 22 }}>Send us a message</h2>
                <form className="form-grid" onSubmit={onSubmit}>
                  <div className="field">
                    <label htmlFor="c-first">First name *</label>
                    <input id="c-first" type="text" required value={form.firstName} onChange={set('firstName')} placeholder="Ananya" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-last">Last name</label>
                    <input id="c-last" type="text" value={form.lastName} onChange={set('lastName')} placeholder="Rao" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-email">Email address *</label>
                    <input id="c-email" type="email" required value={form.email} onChange={set('email')} placeholder="you@company.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-phone">Phone</label>
                    <input id="c-phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+91" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-company">Company</label>
                    <input id="c-company" type="text" value={form.company} onChange={set('company')} placeholder="Company name" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-interest">I'm interested in</label>
                    <select id="c-interest" value={form.interest} onChange={set('interest')}>
                      {INTERESTS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="c-message">Message</label>
                    <textarea id="c-message" value={form.message} onChange={set('message')} placeholder="Tell us about your project, timeline, and budget…" />
                  </div>
                  <div className="full">
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Send message<span style={{ fontSize: 13 }}>›</span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </Reveal>

          {/* info cards */}
          <div style={{ display: 'grid', gap: 16 }}>
            {INFO.map((c) => (
              <Reveal className="card" key={c.title} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <IconTile name={c.icon} variant={c.tile} />
                <div>
                  <h3 style={{ marginBottom: 6 }}>{c.title}</h3>
                  <p style={{ lineHeight: 1.75 }}>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* office panel */}
      <section className="section">
        <Reveal className="panel" style={{ padding: '40px 38px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 32, alignItems: 'center' }}>
            <div>
              <div className="badge-pill" style={{ marginBottom: 16 }}><span className="badge-dot" />Thane HQ</div>
              <h2 className="h-card" style={{ fontSize: 22, marginBottom: 10 }}>Our Mira Bhayandar office</h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--body)', margin: 0 }}>
                On Eden Park Road in Mira Bhayandar, in the Mumbai metropolitan region. Drop in for a
                filter coffee and a whiteboard session — engineers included, no appointment theatre.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Icon name="pin" size={17} color="#F07824" />
                <span style={{ fontSize: 14.5, color: 'var(--soft)' }}>Flat 105, Prathmesh View, Eden Park Road, Mira Bhayandar, Thane 401105</span>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Icon name="clock" size={17} color="#F07824" />
                <span style={{ fontSize: 14.5, color: 'var(--soft)' }}>Mon–Fri, 09:00–20:00 IST</span>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Icon name="call" size={17} color="#F07824" />
                <span style={{ fontSize: 14.5, color: 'var(--soft)' }}>+91 91369 56200</span>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Icon name="mail" size={17} color="#F07824" />
                <span style={{ fontSize: 14.5, color: 'var(--soft)' }}>Ashish.Yadav@nuozen.in · Meet.Zaveri@nuozen.in</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
