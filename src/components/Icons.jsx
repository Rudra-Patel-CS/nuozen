// Stroke icon set ported from Homepage Redesign v2. Usage: <Icon name="server" size={18} color="#F07824" />
const PATHS = {
  server: <><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 17.5h.01" /></>,
  shield: <><path d="M12 3l7 3v6c0 4.4-3 8-7 9-4-1-7-4.6-7-9V6z" /><path d="M9.5 12l1.8 1.8L15 10" /></>,
  cloud: <><path d="M7 16a4 4 0 010-8 5.5 5.5 0 0110.5 1.5A3.5 3.5 0 0117 16z" /><path d="M12 12v6m0 0l-2.5-2.5M12 18l2.5-2.5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" /></>,
  code: <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />,
  phone: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>,
  browser: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01" /></>,
  team: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c.6-3.1 2.9-4.8 5.5-4.8s4.9 1.7 5.5 4.8" /><path d="M17 8.5h4M19 6.5v4" /></>,
  bolt: <path d="M13 2.5L5.5 13.5H11l-1 8 8-11.5H12z" />,
  drop: <path d="M12 2.5c3.5 4.4 6 7.6 6 10.6a6 6 0 01-12 0c0-3 2.5-6.2 6-10.6z" />,
  plant: <><path d="M4 20V9l5-3.5 5 3.5v11" /><path d="M14 12h4a2 2 0 012 2v6" /><path d="M2.5 20h19" /></>,
  network: <><circle cx="12" cy="12" r="2.6" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M6.6 7.4l3.6 3M17.4 7.4l-3.6 3M6.6 16.6l3.6-3M17.4 16.6l-3.6-3" /></>,
  check: <path d="M4.5 12.5l4 4 11-11" />,
  help: <><circle cx="12" cy="12" r="9" /><path d="M12 16.5v-.01M12 13c0-2 2.2-2.2 2.2-4A2.2 2.2 0 0010 8.8" /></>,
  pin: <><path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></>,
  call: <path d="M5 4h3.5l1.8 4.3-2.2 1.5a11.5 11.5 0 006.1 6.1l1.5-2.2 4.3 1.8V19a1.8 1.8 0 01-2 1.8A15.5 15.5 0 013.2 6 1.8 1.8 0 015 4z" />,
  chart: <><path d="M3 20h18" /><path d="M7 20v-6M12 20V9M17 20V4" /></>,
  db: <><ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" /><path d="M4.5 5.5v13c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-13" /><path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" /></>,
  gauge: <><path d="M4 14a8 8 0 1116 0" /><path d="M12 14l3.5-3.5" /><path d="M2.5 19h19" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51h.01a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.01a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" /></>,
  doc: <><path d="M14 2.5H6a2 2 0 00-2 2v15a2 2 0 002 2h12a2 2 0 002-2V8.5z" /><path d="M14 2.5V8.5h6M9 13h6M9 17h6" /></>,
  rocket: <><path d="M5 15.5c-1.5 1.3-2 5.5-2 5.5s4.2-.5 5.5-2" /><path d="M14 3.5c3.5 0 6.5 3 6.5 6.5-2.5 6-8.5 10.5-8.5 10.5l-8.5-8.5S8 6 14 3.5z" /><circle cx="14.5" cy="9.5" r="1.8" /></>,
  lock: <><rect x="4.5" y="10.5" width="15" height="10" rx="2" /><path d="M8 10.5V7a4 4 0 118 0v3.5" /></>,
  eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7.5l9 6 9-6" /></>,
  cart: <><circle cx="9" cy="20" r="1.4" /><circle cx="17.5" cy="20" r="1.4" /><path d="M3 3.5h2.5l2.4 12h10.6l2-8.5H6" /></>,
  wifi: <><path d="M3 9.5a13.5 13.5 0 0118 0" /><path d="M6.5 13a8.5 8.5 0 0111 0" /><path d="M10 16.5a3.8 3.8 0 014 0" /><path d="M12 19.5h.01" /></>,
  flame: <path d="M12 21.5c4 0 6.5-2.6 6.5-6.2 0-2.6-1.5-4.6-3-6.3-1.3-1.5-2.6-3-3-5.5-.5.5-1.7 1.9-1.9 4.1-.1 1.3.2 2.4-.6 2.6-1 .3-1.6-1.3-1.8-2.1C6.6 9.5 5.5 11.7 5.5 15c0 3.9 2.5 6.5 6.5 6.5z" />,
  home: <><path d="M3.5 10.5L12 3.5l8.5 7" /><path d="M5.5 9v11h13V9" /></>,
};

export default function Icon({ name, size = 18, color = 'currentColor', width = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name] || PATHS.help}
    </svg>
  );
}

export function IconTile({ name, variant = 'org', size = 44, icon = 21 }) {
  const cls = { org: 'tile-org', cyn: 'tile-cyn', neutral: 'tile-bone', orgT: 'tile-org-t', cynT: 'tile-cyn-t' }[variant] || 'tile-org';
  const color = { org: '#fff', cyn: '#fff', neutral: '#3E434B', orgT: '#F07824', cynT: '#0060A8' }[variant] || '#fff';
  return (
    <span className={`icon-tile tile-${size} ${cls}`}>
      <Icon name={name} size={icon} color={color} width={1.9} />
    </span>
  );
}
