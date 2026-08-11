import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="shell" style={{ textAlign: 'center', padding: '140px 32px 160px' }}>
      <div className="badge-pill" style={{ marginBottom: 26 }}><span className="badge-dot" />404 — page not found</div>
      <h1 className="h-display">This page has <span className="text-mute">gone offline.</span></h1>
      <p className="lede" style={{ maxWidth: 520, margin: '22px auto 0' }}>
        The page you are looking for was moved in the redesign or never existed. Everything we offer is one click away.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 34, flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-primary">Back to home</Link>
        <Link to="/contact" className="btn btn-ghost">Contact us</Link>
      </div>
    </div>
  );
}
