import { useParams, Navigate } from 'react-router-dom';
import { PageHero, CtaBand } from '../../components/Page.jsx';
import Reveal from '../../components/Reveal.jsx';
import POSTS, { getPost } from '../../data/posts.js';
import { PostCard } from './Blog.jsx';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="shell">
      <PageHero
        crumbs={[['Blog', '/blog'], [post.title]]}
        badge={`${post.tag} · ${post.date}`}
        title={<span style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)' }}>{post.title}</span>}
        lede={post.excerpt}
      />

      {/* hero image */}
      {post.image && (
        <section style={{ padding: '0 0 56px' }}>
          <Reveal style={{ borderRadius: 22, overflow: 'hidden', border: '1px solid var(--line)', boxShadow: 'var(--sh-m)', maxWidth: 980 }}>
            <img
              src={post.image}
              alt={post.title}
              style={{ display: 'block', width: '100%', maxHeight: 440, objectFit: 'cover' }}
            />
          </Reveal>
        </section>
      )}

      {/* body */}
      <section className="section">
        <Reveal className="prose">
          {post.body.map((b, i) => (
            b.h ? <h2 key={i}>{b.h}</h2> : <p key={i}>{b.p}</p>
          ))}
        </Reveal>
      </section>

      {/* more posts */}
      <section className="section">
        <Reveal className="section-head">
          <h2 className="h-section" style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.3rem)' }}>
            More <span className="text-mute">from the blog.</span>
          </h2>
        </Reveal>
        <div className="post-grid">
          {more.map((p) => <PostCard post={p} key={p.slug} />)}
        </div>
      </section>

      <CtaBand
        title="Want this expertise"
        muted="on your project?"
        sub="The engineers who write here also scope, build, and run production systems. One call gets you a written quote within two working days."
      />
    </div>
  );
}
