import { Link } from 'react-router-dom';
import { PageHero, CtaBand } from '../../components/Page.jsx';
import Reveal from '../../components/Reveal.jsx';
import { IconTile } from '../../components/Icons.jsx';
import POSTS from '../../data/posts.js';

// Icon fallback for posts without a thumbnail, keyed by tag.
export const TAG_ICONS = {
  Power: 'bolt',
  Mobile: 'phone',
  'Big Data': 'db',
  Education: 'doc',
  Business: 'gear',
  Web: 'globe',
  Governance: 'check',
  Engineering: 'code',
};

export function PostCard({ post }) {
  return (
    <Reveal as={Link} to={`/blog/${post.slug}`} className="post-card">
      <div className="post-thumb">
        {post.image
          ? <img src={post.image} alt={post.title} loading="lazy" />
          : <IconTile name={TAG_ICONS[post.tag] || 'doc'} variant="org" size={48} icon={22} />}
      </div>
      <div className="post-body">
        <div className="post-kicker">{post.tag} · {post.date}</div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="link-arrow" style={{ alignSelf: 'flex-start', fontSize: 14 }}>Read article<span className="arr">›</span></span>
      </div>
    </Reveal>
  );
}

export default function Blog() {
  return (
    <div className="shell">
      <PageHero
        crumbs={[['Blog']]}
        badge={`${POSTS.length} articles · written in-house`}
        title={<>Technology insights <span className="text-mute">from our engineers.</span></>}
        lede="Articles on enterprise IT, utility technology, cloud infrastructure, IoT, and software development — written by the Nuozen team."
      />

      <section className="section">
        <div className="post-grid">
          {POSTS.map((p) => <PostCard post={p} key={p.slug} />)}
        </div>
      </section>

      <CtaBand
        title="Liked the reading?"
        muted="Try the building."
        sub="The team that writes these articles is the team that ships the systems. Tell us what you're working on."
      />
    </div>
  );
}
