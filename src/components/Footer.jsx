import { Link } from 'react-router-dom';

const COLS = [
  {
    h: 'Services',
    items: [
      ['Cloud VMs', '/cloud-hosting'],
      ['Firewall as a Service', '/firewall'],
      ['Cloud Migration', '/cloud-migration'],
      ['Web & Mobile Apps', '/services'],
      ['Pricing & Plans', '/pricing'],
    ],
  },
  {
    h: 'Industries',
    items: [
      ['Electricity', '/industries/electricity'],
      ['Water', '/industries/water'],
      ['Natural Gas & Oil', '/industries/natural-gas'],
      ['Big Data & IoT', '/services/internet-of-things'],
      ['Test Engineering', '/services/test-engineering'],
    ],
  },
  {
    h: 'Company',
    items: [
      ['About Us', '/about'],
      ['Careers', '/careers'],
      ['Blog', '/blog'],
      ['Clients', '/clients'],
      ['Contact', '/contact'],
    ],
  },
  {
    h: 'Account',
    items: [
      ['Cloud Portal ↗', 'https://cloud.nuozen.in'],
      ['Contact Support', '/contact'],
      ['Budget Hosting ↗', 'https://budgethost.nuozen.in'],
      ['Request a Demo', '/contact'],
      ['Hire Engineers', '/hire-us'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <img src="/assets/nuozen-logo.png" alt="Nuozen Infotech Private Limited" style={{ height: 34, width: 'auto', objectFit: 'contain', display: 'block' }} />
            <p className="footer-blurb">Hosting, datacentres, and managed cloud — Nuozen Infotech Private Limited, Mira Bhayandar, Thane.</p>
            <div className="footer-status"><span className="badge-dot" />All systems operational</div>
          </div>
          {COLS.map((col) => (
            <div key={col.h}>
              <div className="footer-h">{col.h}</div>
              <div className="footer-col">
                {col.items.map(([label, to]) =>
                  to.startsWith('http')
                    ? <a key={label} href={to} target="_blank" rel="noreferrer">{label}</a>
                    : <Link key={label} to={to}>{label}</Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Nuozen Infotech Private Limited. All rights reserved.</span>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-of-service">Terms</Link>
            <Link to="/refund-policy">Refunds</Link>
            <Link to="/csae-policy">CSAE Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
