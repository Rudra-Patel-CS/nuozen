import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Icon from './Icons.jsx';

function MegaItem({ to, href, tile, icon, iconColor, title, sub, i }) {
  const body = (
    <>
      <span className={`icon-tile tile-36 ${tile}`}>
        <Icon name={icon} size={18} color={iconColor} />
      </span>
      <span>
        <span className="mega-item-title">{title}</span>
        <span className="mega-item-sub">{sub}</span>
      </span>
    </>
  );
  const style = { '--i': i };
  return href
    ? <a className="mega-item" style={style} href={href} target="_blank" rel="noreferrer">{body}</a>
    : <Link className="mega-item" style={style} to={to}>{body}</Link>;
}

const SVC_COLS = [
  {
    h: 'Infrastructure & security',
    items: [
      { to: '/cloud-hosting', tile: 'tile-org-t', icon: 'server', iconColor: '#F07824', title: 'Cloud VMs & Hosting', sub: 'Proxmox VE · 99.9% SLA · live in minutes' },
      { to: '/firewall', tile: 'tile-cyn-t', icon: 'shield', iconColor: '#0060A8', title: 'Firewall as a Service', sub: 'Sophos XGS and Fortigate, fully managed' },
      { to: '/cloud-migration', tile: 'tile-neutral', icon: 'cloud', iconColor: '#3E434B', title: 'Cloud Migration', sub: 'Lift, re-platform, and cut over safely' },
      { href: 'https://budgethost.nuozen.in', tile: 'tile-neutral', icon: 'globe', iconColor: '#3E434B', title: 'Budget Hosting & Domains', sub: 'Shared, reseller, and VPS from ₹499/mo' },
    ],
  },
  {
    h: 'Development',
    items: [
      { to: '/services/web-application-development', tile: 'tile-org-t', icon: 'code', iconColor: '#F07824', title: 'Web Applications', sub: 'MERN, LAMP, and custom enterprise apps' },
      { to: '/services/mobile-application-development', tile: 'tile-cyn-t', icon: 'phone', iconColor: '#0060A8', title: 'Mobile Applications', sub: 'Flutter, iOS, and Android' },
      { to: '/services/static-website-development', tile: 'tile-neutral', icon: 'browser', iconColor: '#3E434B', title: 'Websites & SEO', sub: 'WordPress, React, and static stacks' },
      { to: '/hire-us', tile: 'tile-neutral', icon: 'team', iconColor: '#3E434B', title: 'Dedicated Engineers', sub: 'PHP, Python, and Node teams on your roadmap' },
    ],
  },
];

const IND_COLS = [
  {
    h: 'Utilities',
    items: [
      { to: '/industries/electricity', tile: 'tile-org-t', icon: 'bolt', iconColor: '#F07824', title: 'Electricity Distribution', sub: 'SCADA, AMR/AMI, substation monitoring' },
      { to: '/industries/water', tile: 'tile-cyn-t', icon: 'drop', iconColor: '#0060A8', title: 'Water Distribution', sub: 'Smart metering, billing, leak analytics' },
      { to: '/industries/natural-gas', tile: 'tile-neutral', icon: 'plant', iconColor: '#3E434B', title: 'Natural Gas & Oil', sub: 'Pipeline SCADA and safety monitoring' },
    ],
  },
  {
    h: 'Enterprise',
    items: [
      { to: '/services/internet-of-things', tile: 'tile-org-t', icon: 'network', iconColor: '#F07824', title: 'IoT & Sensor Platforms', sub: 'Ingest, aggregate, and act on telemetry' },
      { to: '/services/integration-and-apis', tile: 'tile-cyn-t', icon: 'code', iconColor: '#0060A8', title: 'API & Systems Integration', sub: 'REST, GraphQL, enterprise middleware' },
      { to: '/services/test-engineering', tile: 'tile-neutral', icon: 'check', iconColor: '#3E434B', title: 'Test Engineering', sub: 'Functional, performance, and security QA' },
    ],
  },
];

const SHEET_GROUPS = [
  {
    label: 'Services', to: '/services',
    chips: [
      ['Cloud VMs', '/cloud-hosting'], ['Firewall', '/firewall'], ['Migration', '/cloud-migration'],
      ['Web Apps', '/services/web-application-development'], ['Mobile', '/services/mobile-application-development'],
      ['Websites', '/services/static-website-development'], ['Engineers', '/hire-us'],
    ],
  },
  {
    label: 'Industries', to: '/industries',
    chips: [
      ['Electricity', '/industries/electricity'], ['Water', '/industries/water'], ['Natural Gas', '/industries/natural-gas'],
      ['IoT', '/services/internet-of-things'], ['APIs', '/services/integration-and-apis'],
    ],
  },
  { label: 'Why Nuozen', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
];

const ORDER = { svc: 0, ind: 1 };

export default function Header() {
  const [menu, setMenu] = useState(null);       // 'svc' | 'ind' | null
  const [dir, setDir] = useState(0);            // -1 | 0 | 1 → panel slide direction on switch
  const [mob, setMob] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [origin, setOrigin] = useState(50);     // mega transform-origin, % of header width
  const shellRef = useRef(null);
  const closeT = useRef(null);
  const { hash } = useLocation();

  const open = (m) => (e) => {
    clearTimeout(closeT.current);
    setDir(menu && menu !== m ? (ORDER[m] > ORDER[menu] ? 1 : -1) : 0);
    const t = e?.currentTarget;
    if (t && shellRef.current) {
      const tr = t.getBoundingClientRect();
      const hr = shellRef.current.getBoundingClientRect();
      setOrigin(((tr.left + tr.width / 2 - hr.left) / hr.width) * 100);
    }
    setMenu(m);
  };

  const closeNow = () => setMenu(null);
  const scheduleClose = () => { clearTimeout(closeT.current); closeT.current = setTimeout(closeNow, 140); };
  const cancelClose = () => { clearTimeout(closeT.current); };
  const closeAll = () => { clearTimeout(closeT.current); setMenu(null); setMob(false); };

  // header shadow on scroll
  useEffect(() => {
    const tick = () => setScrolled(window.scrollY > 12);
    tick();
    window.addEventListener('scroll', tick, { passive: true });
    window.addEventListener('resize', tick, { passive: true });
    return () => { window.removeEventListener('scroll', tick); window.removeEventListener('resize', tick); };
  }, []);

  // lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = mob ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mob]);

  // Escape closes everything
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeAll(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // deep-link/debug: #menu=svc | #menu=ind | #menu=mob opens a menu on load
  useEffect(() => {
    if (hash.includes('menu=svc')) setMenu('svc');
    else if (hash.includes('menu=ind')) setMenu('ind');
    else if (hash.includes('menu=mob')) setMob(true);
  }, [hash]);

  const cols = menu === 'ind' ? IND_COLS : SVC_COLS;

  return (
    <>
      <div className={`nav-backdrop ${menu ? 'on' : ''}`} onClick={closeNow} />
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} onMouseLeave={scheduleClose}>
        <div className="shell" style={{ position: 'relative' }} ref={shellRef}>
          <div className="header-row">
            <Link to="/" className="header-logo" onClick={closeAll}>
              <img src="/assets/nuozen-logo.png" alt="Nuozen Infotech Private Limited" />
            </Link>
            <nav className="main-nav">
              <button className={`nav-link ${menu === 'svc' ? 'on' : ''}`} onMouseEnter={open('svc')} onClick={open('svc')}>
                Services<span className="nav-caret" />
              </button>
              <button className={`nav-link ${menu === 'ind' ? 'on' : ''}`} onMouseEnter={open('ind')} onClick={open('ind')}>
                Industries<span className="nav-caret" />
              </button>
              <NavLink to="/about" className="nav-link" onMouseEnter={scheduleClose}>Why Nuozen</NavLink>
              <NavLink to="/careers" className="nav-link" onMouseEnter={scheduleClose}>Careers</NavLink>
              <NavLink to="/pricing" className="nav-link" onMouseEnter={scheduleClose}>Pricing</NavLink>
              <NavLink to="/blog" className="nav-link" onMouseEnter={scheduleClose}>Blog</NavLink>
            </nav>
            <div className="header-cta-group">
              <Link to="/contact" className="support-link sm-hide" onClick={closeAll}>
                <Icon name="help" size={15} color="#5BB8D8" width={1.9} />
                Support
              </Link>
              <Link to="/contact" className="btn btn-primary-sm header-cta" onClick={closeAll}>
                Get in touch<span style={{ fontSize: 12 }}>›</span>
              </Link>
              <button className={`burger ${mob ? 'open' : ''}`} aria-label="Menu" aria-expanded={mob} onClick={() => { setMob(!mob); setMenu(null); }}>
                <span /><span />
              </button>
            </div>
          </div>

          <AnimatePresence>
          {menu && (
            <motion.div
              className="mega"
              style={{ '--ox': `${origin}%`, transformOrigin: `${origin}% -60px`, transformPerspective: 1400 }}
              initial={{ opacity: 0, y: -16, scale: 0.96, rotateX: -7 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: -8, scale: 0.985, transition: { duration: 0.18, ease: 'easeIn' } }}
              transition={{ type: 'spring', stiffness: 320, damping: 26, mass: 0.9 }}
              onMouseEnter={cancelClose}
            >
              <div key={menu} className={`mega-panel ${dir === 1 ? 'from-r' : dir === -1 ? 'from-l' : ''}`}>
                <div className="mega-grid" onClick={closeAll}>
                  {cols.map((col, ci) => (
                    <div key={col.h}>
                      <div className="mega-heading" style={{ '--i': ci }}>{col.h}</div>
                      <div className="mega-col">
                        {col.items.map((it, ii) => <MegaItem key={it.title} i={ci * 4 + ii} {...it} />)}
                      </div>
                    </div>
                  ))}
                  {menu === 'svc' ? (
                    <a className="mega-card" href="https://cloud.nuozen.in" target="_blank" rel="noreferrer">
                      <div className="chip" style={{ background: '#fff', boxShadow: 'var(--sh-s)', marginBottom: 16 }}>
                        <span className="chip-dot" />Self-serve
                      </div>
                      <div style={{ fontSize: 19, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-.02em', lineHeight: 1.3, marginBottom: 9 }}>
                        Provision a VM or firewall yourself.
                      </div>
                      <div style={{ fontSize: 13.5, color: 'var(--dim)', lineHeight: 1.6, marginBottom: 18 }}>
                        Register, pick a tier, and deploy — billing and renewals included.
                      </div>
                      <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--org)' }}>cloud.nuozen.in ↗</div>
                    </a>
                  ) : (
                    <div className="mega-card">
                      <div className="mega-heading" style={{ marginBottom: 14 }}>Head office</div>
                      <div style={{ fontSize: 14.5, color: 'var(--ink)', lineHeight: 1.7, fontWeight: 500 }}>
                        Flat 105, Prathmesh View, 1st Floor<br />Eden Park Road, Mira Bhayandar<br />Thane 401105, Maharashtra
                      </div>
                      <div style={{ height: 1, background: 'var(--line)', margin: '18px 0' }} />
                      <div style={{ fontSize: 13.5, color: 'var(--dim)', lineHeight: 1.8 }}>
                        Mon–Fri · 09:00–20:00 IST<br />Support · 24/7 on call
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </header>

      {/* mobile sheet — ink-spread reveal from the burger corner */}
      <div className={`msheet ${mob ? 'open' : ''}`} aria-hidden={!mob}>
        <div className="msheet-scroll">
          <div className="msheet-kicker" style={{ '--i': 0 }}>Menu</div>
          {SHEET_GROUPS.map((g, gi) => (
            <div className="msheet-group" key={g.label} style={{ '--i': gi + 1 }}>
              <Link to={g.to} className="msheet-link" onClick={closeAll}>
                {g.label}<span className="msheet-arr">›</span>
              </Link>
              {g.chips && (
                <div className="msheet-chips">
                  {g.chips.map(([label, to]) => (
                    <Link key={label} to={to} className="tag" onClick={closeAll}>{label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="msheet-foot" style={{ '--i': SHEET_GROUPS.length + 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link to="/contact" onClick={closeAll} className="btn btn-primary-sm" style={{ justifyContent: 'center' }}>Get in touch ›</Link>
              <Link to="/contact" onClick={closeAll} className="btn btn-ghost" style={{ justifyContent: 'center', padding: '14px 22px', fontSize: 15 }}>Contact support</Link>
            </div>
            <div style={{ fontSize: 14, color: 'var(--dim)', marginTop: 20, lineHeight: 1.9 }}>
              +91 91369 56200<br />Ashish.Yadav@nuozen.in
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
