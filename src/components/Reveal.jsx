import { useMemo, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import gsap from 'gsap';

// Scroll-reveal wrapper on Motion springs. Clears its inline transform once the
// entrance finishes so CSS :hover lifts (.card, .svc-row) keep working.
export default function Reveal({ as: Tag = 'div', className = '', children, delay = 0, y = 26, ...rest }) {
  const M = useMemo(() => motion.create(Tag), [Tag]);
  const ref = useRef(null);
  const reduce = useReducedMotion();

  return (
    <M
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={() => {
        const el = ref.current;
        if (el) { el.style.transform = ''; el.style.opacity = ''; }
      }}
      {...rest}
    >
      {children}
    </M>
  );
}

// Count-up on a GSAP tween, armed once when scrolled into view.
export function CountUp({ to, decimals = 0, duration = 1.5 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let tween;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const state = { v: 0 };
      tween = gsap.to(state, {
        v: to,
        duration,
        ease: 'power3.out',
        onUpdate: () => { el.textContent = state.v.toFixed(decimals); },
      });
    });
    io.observe(el);
    return () => { io.disconnect(); tween?.kill(); };
  }, [to, decimals, duration]);
  return <span ref={ref}>0</span>;
}
