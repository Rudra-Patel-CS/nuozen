# Nuozen redesign — page conventions

## Brand — IMPORTANT
The site is branded **Nuozen** (logo: `/assets/nuozen-logo.png`). The scraped source decks say
"Pyrumas" everywhere — ALWAYS write **Nuozen** instead; never let "Pyrumas" (or pyrumas.com) appear
in any output. Replace domains: `cloud.nuozen.in`, `support.nuozen.in`, `budgethost.nuozen.in`;
emails: `Ashish.Yadav@nuozen.in`, `Meet.Zaveri@nuozen.in`. Omit the old GSTIN number.
Company: **Nuozen Infotech Private Limited** — Hosting & Datacentres.
Registered address: 1st Floor, Flat No. 105, Prathmesh View, Eden Park Road, Mira Bhayandar,
Thane, Maharashtra 401105. Phone: +91 91369 56200. Never use the old Bengaluru/Chamarajpet
address or Karnataka references. Keep SLAs and plan specs from the decks.

Design system ported from the Claude Design project "Homepage Redesign v2". Read
`src/styles/global.css` (all class names) and `src/pages/Home.jsx` (usage exemplar) before writing a page.

## Hard rules
- Pages are React function components, default-exported, JSX only (no TypeScript).
- Use ONLY the classes in `src/styles/global.css` plus minimal inline `style={{}}` for one-off spacing.
  Do not add new CSS files. Do not install packages.
- Internal navigation always via `Link`/`NavLink` from `react-router-dom`. External links (`http…`,
  `mailto:`) via `<a target="_blank" rel="noreferrer">` (no target for mailto).
- Icons: `import Icon, { IconTile } from '../../components/Icons.jsx'` — see PATHS keys in that file.
  Never inline-paste new SVGs unless an icon is genuinely missing; add it to PATHS if so.
- Shared blocks: `import { PageHero, SectionHead, CtaBand } from '../../components/Page.jsx'`,
  `import Reveal, { CountUp } from '../../components/Reveal.jsx'`.
- Every page: starts with `<div className="shell">`, then `<PageHero crumbs={…} title={…} lede={…} />`,
  content sections in `<section className="section">`, ends with `<CtaBand />` (customise its copy per page).
- Headline pattern: last 2–4 words muted — `title={<>Real words <span className="text-mute">muted tail.</span></>}`.
- Wrap grid children or section bodies in `<Reveal>` for the scroll-in effect (see Home.jsx).
- Copy comes from the scraped decks in `/Users/karnav/scrapper/pyyy/site/content/*.md` (the `## Copy`
  and heading-outline sections). Rewrite lightly for tone; keep facts, specs, plan features verbatim.
- ✓/– feature bullets → `.plan-list` (li, li.no). Pricing cards → `.plans > .plan` (+ `.featured` on one).
  FAQs → `.faq` with `<details><summary>…</summary><div className="faq-a">…</div></details>`.
  Long-form text → `<div className="prose">`.
- Existing routes you may link to: `/`, `/services`, `/services/:slug`, `/hire-us`, `/industries`,
  `/industries/:slug`, `/cloud-hosting`, `/cloud-migration`, `/firewall`, `/pricing`, `/about`,
  `/careers`, `/clients`, `/contact`, `/blog`, `/blog/:slug`, `/privacy-policy`, `/terms-of-service`,
  `/refund-policy`, `/csae-policy`. External: cloud.nuozen.in, support.nuozen.in, budgethost.nuozen.in.
- Syntax-check each file you write:
  `npx esbuild --loader:.jsx=jsx src/pages/<file>.jsx --outfile=/dev/null`
  Do NOT run `npm run build` / `npm run dev` (other agents are editing sibling files concurrently).
