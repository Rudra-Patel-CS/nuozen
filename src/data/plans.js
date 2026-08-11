// ─── Nuozen product & pricing data ───────────────────────────────────────────
// Cloud VM plans, managed firewall tiers, per-domain web firewall plans,
// shared inclusions, and product FAQs. Spec lines are kept verbatim from the
// source copy decks; prices follow the published USD/INR ladders.

export const CLOUD_PORTAL = 'https://cloud.nuozen.in';
export const BUDGET_HOST = 'https://budgethost.nuozen.in';

export const priceLabel = (price) =>
  price.custom ? 'Custom' : price.usd ? `$${price.usd}` : `₹${price.inr}`;

// ── Cloud VM plans (cloud.nuozen.in) ────────────────────────────────────────
export const vmPlans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Dev boxes and small production sites',
    price: { usd: '59', per: '/mo' },
    cta: { label: 'Get started', href: CLOUD_PORTAL },
    features: [
      { label: '8 vCPU · 16 GB RAM', ok: true },
      { label: '60 GB SSD Storage', ok: true },
      { label: '1 TB Bandwidth / month', ok: true },
      { label: 'KVM Virtualisation', ok: true },
      { label: 'Linux / Windows', ok: true },
      { label: '99.9% Uptime SLA', ok: true },
      { label: 'Free SSL Certificate', ok: true },
      { label: 'Managed Backups', ok: false },
      { label: 'DDoS Protection', ok: false },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Growing production workloads',
    price: { usd: '99', per: '/mo' },
    featured: true,
    flag: 'Most popular',
    cta: { label: 'Get started', href: CLOUD_PORTAL },
    features: [
      { label: '12 vCPU · 24 GB RAM', ok: true },
      { label: '100 GB SSD Storage', ok: true },
      { label: '1 TB Bandwidth / month', ok: true },
      { label: 'KVM Virtualisation', ok: true },
      { label: 'Linux / Windows', ok: true },
      { label: '99.9% Uptime SLA', ok: true },
      { label: 'Managed Backups', ok: true },
      { label: 'Free SSL Certificate', ok: true },
      { label: 'DDoS Protection', ok: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'High-traffic applications',
    price: { usd: '119', per: '/mo' },
    cta: { label: 'Get started', href: CLOUD_PORTAL },
    features: [
      { label: '16 vCPU · 32 GB RAM', ok: true },
      { label: '150 GB NVMe Storage', ok: true },
      { label: '1 TB Bandwidth / month', ok: true },
      { label: '1 Public IP', ok: true },
      { label: 'KVM Virtualisation', ok: true },
      { label: 'Linux / Windows', ok: true },
      { label: '99.95% Uptime SLA', ok: true },
      { label: '100 GB SSD Backups', ok: true },
      { label: 'DDoS Protection', ok: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Mission-critical systems',
    price: { usd: '149', per: '/mo' },
    cta: { label: 'Get started', href: CLOUD_PORTAL },
    features: [
      { label: '32 vCPU · 64 GB RAM', ok: true },
      { label: '500 GB RAID NVMe Storage', ok: true },
      { label: 'Unlimited Bandwidth', ok: true },
      { label: '1 Public IP', ok: true },
      { label: 'KVM Virtualisation', ok: true },
      { label: 'Linux / Windows', ok: true },
      { label: '99.99% Uptime SLA', ok: true },
      { label: 'Weekly Backups', ok: true },
      { label: 'DDoS Protection', ok: true },
      { label: 'Dedicated Support', ok: true },
    ],
  },
];

// Side-by-side spec matrix for the pricing page compare table.
export const vmCompare = {
  columns: vmPlans.map((p) => p.name),
  rows: [
    ['vCPU / RAM', '8 vCPU · 16 GB', '12 vCPU · 24 GB', '16 vCPU · 32 GB', '32 vCPU · 64 GB'],
    ['Storage', '60 GB SSD', '100 GB SSD', '150 GB NVMe', '500 GB RAID NVMe'],
    ['Bandwidth', '1 TB / month', '1 TB / month', '1 TB / month', 'Unlimited'],
    ['Public IP', '—', '—', '1 included', '1 included'],
    ['Virtualisation', 'KVM', 'KVM', 'KVM', 'KVM'],
    ['Operating system', 'Linux / Windows', 'Linux / Windows', 'Linux / Windows', 'Linux / Windows'],
    ['Uptime SLA', '99.9%', '99.9%', '99.95%', '99.99%'],
    ['Managed backups', '—', 'Included', '100 GB SSD backups', 'Weekly backups'],
    ['DDoS protection', '—', '—', 'Included', 'Included'],
    ['Free SSL', 'Included', 'Included', 'Included', 'Included'],
    ['Support', 'Standard', 'Standard', 'Standard', 'Dedicated'],
    ['Price', '$59 /mo', '$99 /mo', '$119 /mo', '$149 /mo'],
  ],
};

// Included with every VM plan, no matter the size.
export const sharedInclusions = [
  {
    icon: 'db', variant: 'org', title: 'Daily Automated Backups',
    desc: "Your data is backed up every day and stored securely. Restore to any point within your plan's retention window — no extra cost.",
  },
  {
    icon: 'eye', variant: 'cyn', title: '24/7 Monitoring & Alerts',
    desc: 'Uptime monitoring, disk health checks, and resource usage alerts — all running continuously so issues are caught before they affect you.',
  },
  {
    icon: 'lock', variant: 'neutral', title: 'Free SSL Certificates',
    desc: "Let's Encrypt SSL certificates provisioned automatically for all your domains. HTTPS enabled on day one.",
  },
  {
    icon: 'team', variant: 'org', title: 'Dedicated Support Team',
    desc: 'Reach our engineers by email or support portal. All tickets answered by the Nuozen team — not outsourced support.',
  },
  {
    icon: 'rocket', variant: 'cyn', title: 'Provisioning & Migration',
    desc: 'We handle server setup and migrate your existing sites or applications — no downtime, no data loss.',
  },
  {
    icon: 'gauge', variant: 'neutral', title: 'Scaling on Demand',
    desc: 'Need more resources? We upgrade your plan with minimal disruption — RAM, storage, or CPU can be added as you grow.',
  },
];

// ── Managed firewall tiers (Firewall as a Service) ───────────────────────────
export const firewallTiers = [
  {
    id: 'fw-essential',
    name: 'Essential',
    tagline: 'Single site, straightforward perimeter',
    price: { inr: '4,999', per: '/mo' },
    cta: { label: 'Get started', href: CLOUD_PORTAL },
    features: [
      { label: 'Sophos XG Home / XGS 87 (virtual or hardware)', ok: true },
      { label: 'Stateful + application-layer firewall', ok: true },
      { label: 'SSL/TLS inspection', ok: true },
      { label: 'Web content filtering (50+ categories)', ok: true },
      { label: 'IPS — basic signature set', ok: true },
      { label: 'Site-to-site VPN (1 tunnel)', ok: true },
      { label: 'Monthly security report', ok: true },
      { label: '8×5 support (email & ticket)', ok: true },
      { label: 'SD-WAN / multi-link', ok: false },
      { label: 'Advanced threat sandbox', ok: false },
    ],
  },
  {
    id: 'fw-business',
    name: 'Business',
    tagline: 'Growing teams and branch offices',
    price: { inr: '9,999', per: '/mo' },
    featured: true,
    flag: 'Most popular',
    cta: { label: 'Get started', href: CLOUD_PORTAL },
    features: [
      { label: 'Sophos XGS 136 / FortiGate 60F (virtual or physical)', ok: true },
      { label: 'Next-Gen Firewall + deep packet inspection', ok: true },
      { label: 'Full SSL/TLS & DNS inspection', ok: true },
      { label: 'Advanced IPS — full threat feed', ok: true },
      { label: 'Web filter + application control', ok: true },
      { label: 'SD-WAN (up to 3 ISP links)', ok: true },
      { label: 'Site-to-site & remote-access VPN', ok: true },
      { label: 'Weekly security reports', ok: true },
      { label: '16×5 support (phone, email, ticket)', ok: true },
      { label: 'Advanced threat sandbox', ok: false },
    ],
  },
  {
    id: 'fw-advanced',
    name: 'Advanced',
    tagline: 'Regulated, high-availability networks',
    price: { inr: '19,999', per: '/mo' },
    cta: { label: 'Get started', href: CLOUD_PORTAL },
    features: [
      { label: 'FortiGate 100F / Sophos XGS 310 (HA pair)', ok: true },
      { label: 'Full NGFW + anti-malware + sandboxing', ok: true },
      { label: 'Threat intelligence & zero-day sandbox', ok: true },
      { label: 'SD-WAN — unlimited ISP links', ok: true },
      { label: 'ZTNA / remote access VPN (unlimited seats)', ok: true },
      { label: 'High availability (active-passive)', ok: true },
      { label: 'Daily reports + SIEM integration', ok: true },
      { label: 'Compliance templates (ISO 27001, PCI-DSS)', ok: true },
      { label: '24×7 priority support (4-hr SLA)', ok: true },
      { label: 'Quarterly security review call', ok: true },
    ],
  },
  {
    id: 'fw-enterprise',
    name: 'Enterprise',
    tagline: 'OT/ICS estates and multi-site scale',
    price: { custom: true, per: '' },
    cta: { label: 'Talk to an expert', href: '/contact' },
    features: [
      { label: 'Enterprise-grade FortiGate / Sophos cluster', ok: true },
      { label: 'Active-active HA with failover <1s', ok: true },
      { label: 'Dedicated SOC analyst (named resource)', ok: true },
      { label: 'Full SIEM/SOAR integration', ok: true },
      { label: 'OT/ICS firewall segmentation (SCADA ready)', ok: true },
      { label: 'Custom compliance reporting', ok: true },
      { label: '24×7 dedicated support line', ok: true },
      { label: 'On-site deployment available (PAN India)', ok: true },
      { label: 'SLA up to 99.99% availability', ok: true },
      { label: 'Monthly executive security briefing', ok: true },
    ],
  },
];

// ── Per-domain website firewall (cloud-delivered FWaaS, no hardware) ─────────
export const webFirewallPlans = [
  {
    id: 'wf-starter',
    name: 'Web Firewall Starter',
    tagline: 'Cloud WAF for one website',
    price: { usd: '720', per: '/yr' },
    was: '$900',
    cta: { label: 'Get started', href: CLOUD_PORTAL },
    features: [
      { label: '1 website covered', ok: true },
      { label: 'GeoIP country blocking', ok: true },
      { label: 'IP whitelisting / blacklisting', ok: true },
      { label: 'Firewall protection — HTTPS & PCI compliant', ok: true },
      { label: 'SSL support & monitoring', ok: true },
      { label: 'CDN speed enhancement', ok: false },
      { label: 'Advanced DDoS mitigation', ok: false },
    ],
  },
  {
    id: 'wf-pro',
    name: 'Web Firewall Pro',
    tagline: 'Full protection for one website',
    price: { usd: '790', per: '/yr' },
    was: '$1,080',
    cta: { label: 'Get started', href: CLOUD_PORTAL },
    features: [
      { label: '1 website covered', ok: true },
      { label: 'GeoIP + IP rules from your dashboard', ok: true },
      { label: 'CDN speed enhancement', ok: true },
      { label: 'Advanced DDoS mitigation', ok: true },
      { label: 'Stop hacks (virtual patching / hardening)', ok: true },
      { label: 'High availability / load balancing', ok: true },
      { label: 'SSL support & monitoring', ok: true },
    ],
  },
];

// ── FAQs per product ─────────────────────────────────────────────────────────
export const cloudFaqs = [
  {
    q: 'How quickly is my VM delivered?',
    a: 'Register at cloud.nuozen.in, select a plan, and make payment — your KVM virtual machine is provisioned and delivered within minutes of payment confirmation. Login credentials and access details arrive at your registered email. No calls required, no waiting for a quote.',
  },
  {
    q: 'What billing options are available?',
    a: 'Monthly and annual billing are both available in the portal, with prices listed in USD. Payment is completed securely at checkout, and Indian customers receive a GST invoice immediately — eligible for input tax credit if you are a registered business.',
  },
  {
    q: 'Which operating systems can I run?',
    a: 'Every plan runs on full KVM virtualisation, so you can run Linux or Windows with complete root or administrator access. There are no proprietary images or lock-in — the VM is yours.',
  },
  {
    q: "What does 'managed' actually cover?",
    a: '24/7 monitoring starts the moment your VM is delivered. OS patches, backup verification, SSL renewals, and resource alerts are handled entirely by Nuozen — you never touch the server unless you want to.',
  },
  {
    q: 'Can I upgrade my plan as I grow?',
    a: 'Yes. RAM, storage, or CPU can be added with minimal disruption — we upgrade your plan on demand, so you only pay for bigger resources when you actually need them.',
  },
  {
    q: 'Who answers when something breaks?',
    a: 'Uptime monitoring, disk health checks, and resource usage alerts run continuously, so most issues are caught before they affect you. When you do open a ticket, it is answered by the Nuozen engineering team — not outsourced support.',
  },
];

export const firewallFaqs = [
  {
    q: 'How long does deployment take?',
    a: 'Nuozen handles everything from sizing to go-live. Most deployments complete within 5–10 business days, and we validate connectivity with zero downtime during the policy push.',
  },
  {
    q: 'Do we need to buy hardware up front?',
    a: 'Not necessarily. Every tier is available as a virtual or physical appliance, and hardware options are available on request. We only deploy proven enterprise-grade Sophos and FortiGate platforms — no white-label or unbranded appliances.',
  },
  {
    q: 'Who manages the firewall day to day?',
    a: 'Our SOC team. Rule updates, firmware patches, threat feed refreshes, and security reports are handled entirely by Nuozen — you get complete perimeter coverage without needing an in-house network security expert.',
  },
  {
    q: 'Can you block traffic from specific countries or IPs?',
    a: 'Yes. GeoIP filtering and IP whitelisting/blacklisting are standard, along with per-domain rules and port and protocol controls — all managed from your dashboard or by our team on your behalf.',
  },
  {
    q: 'What do the security reports include?',
    a: 'Live traffic maps, top talkers, blocked threat categories, and intrusion attempts — monthly, weekly, or daily depending on your tier. Advanced and Enterprise add SIEM integration plus audit-ready compliance templates for ISO 27001, PCI-DSS, and CERT-In guidelines.',
  },
  {
    q: 'What happens when a threat is detected?',
    a: 'You receive instant SMS/email alerts whenever a policy violation or intrusion attempt is detected. On tiers with sandboxing, unknown files and executables are detonated in an isolated sandbox before reaching your environment — zero-day threats are stopped before execution.',
  },
];
