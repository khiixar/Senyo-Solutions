'use client';

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from 'framer-motion';
import { useRef, ReactNode, useEffect, useState, useCallback } from 'react';

/* ────────────────────────────────────────────────────
   FADE-IN ON SCROLL
   ──────────────────────────────────────────────────── */
interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  threshold = 0.15,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const prefersReduced = useReducedMotion();

  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReduced ? {} : { opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   SCALE-IN ON SCROLL
   ──────────────────────────────────────────────────── */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReduced ? {} : { opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   STAGGER CONTAINER
   ──────────────────────────────────────────────────── */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: prefersReduced ? {} : { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   SCALE ON HOVER
   ──────────────────────────────────────────────────── */
export function HoverScale({
  children,
  className = '',
  scale = 1.03,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   HOVER GLOW — adds a glow + lift effect
   ──────────────────────────────────────────────────── */
export function HoverGlow({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 60px rgba(37,99,235,0.15), 0 0 40px rgba(37,99,235,0.08)',
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   PARALLAX WRAPPER (hero entrance)
   ──────────────────────────────────────────────────── */
export function ParallaxText({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   PARALLAX SCROLL — moves at different speed
   ──────────────────────────────────────────────────── */
export function ParallaxScroll({
  children,
  className = '',
  speed = 0.3,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} className={className} style={{ y: smoothY }}>
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   FLOATING ELEMENT — continuous float animation
   ──────────────────────────────────────────────────── */
export function FloatingElement({
  children,
  className = '',
  duration = 6,
  distance = 12,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [-distance, distance, -distance] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   ROTATING ELEMENT — continuous rotation
   ──────────────────────────────────────────────────── */
export function RotatingElement({
  children,
  className = '',
  duration = 20,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   TEXT REVEAL — word-by-word stagger
   ──────────────────────────────────────────────────── */
export function TextReveal({
  text,
  className = '',
  delay = 0,
  tag: Tag = 'p',
}: {
  text: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={child} style={{ display: 'inline-block' }}>
          {Tag === 'h1' || Tag === 'h2' || Tag === 'h3' ? (
            <Tag style={{ display: 'inline', margin: 0, fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit', color: 'inherit' }}>{word}</Tag>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   TYPING EFFECT
   ──────────────────────────────────────────────────── */
export function TypingText({
  text,
  className = '',
  speed = 40,
  delay = 0,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{ borderRight: '2px solid var(--primary-light)', marginLeft: 2 }}
      />
    </span>
  );
}

/* ────────────────────────────────────────────────────
   COUNTER ANIMATION
   ──────────────────────────────────────────────────── */
export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  className = '',
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}

/* ────────────────────────────────────────────────────
   IMAGE REVEAL — clip-path reveal on scroll
   ──────────────────────────────────────────────────── */
export function ImageReveal({
  children,
  className = '',
  direction = 'left',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const clipPaths: Record<string, { hidden: string; visible: string }> = {
    left: { hidden: 'inset(0 100% 0 0)', visible: 'inset(0 0% 0 0)' },
    right: { hidden: 'inset(0 0 0 100%)', visible: 'inset(0 0 0 0%)' },
    up: { hidden: 'inset(100% 0 0 0)', visible: 'inset(0% 0 0 0)' },
    down: { hidden: 'inset(0 0 100% 0)', visible: 'inset(0 0 0% 0)' },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: clipPaths[direction].hidden, opacity: 0 }}
      animate={isInView ? { clipPath: clipPaths[direction].visible, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   MAGNETIC HOVER — element follows cursor slightly
   ──────────────────────────────────────────────────── */
export function MagneticHover({
  children,
  className = '',
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    },
    [x, y, strength]
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   GRADIENT BACKGROUND ANIMATION
   ──────────────────────────────────────────────────── */
export function AnimatedGradientBg({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`animated-gradient-bg ${className}`}
      animate={{
        background: [
          'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.08) 0%, transparent 50%)',
          'radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.08) 0%, transparent 50%)',
          'radial-gradient(ellipse at 50% 20%, rgba(37,99,235,0.06) 0%, transparent 50%)',
          'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.08) 0%, transparent 50%)',
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

/* ────────────────────────────────────────────────────
   SCROLL PROGRESS BAR
   ──────────────────────────────────────────────────── */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(90deg, var(--primary), var(--accent))',
        zIndex: 9999,
      }}
    />
  );
}

/* ────────────────────────────────────────────────────
   PARTICLE FIELD — floating dots background
   ──────────────────────────────────────────────────── */
export function ParticleField({
  count = 30,
  className = '',
}: {
  count?: number;
  className?: string;
}) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div
      className={`particle-field ${className}`}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'rgba(96,165,250,0.3)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────────────
   MORPHING BLOB — svg background decoration
   ──────────────────────────────────────────────────── */
export function MorphingBlob({
  className = '',
  color = 'rgba(37,99,235,0.06)',
  size = 400,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <motion.div
      className={className}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        pointerEvents: 'none',
        filter: 'blur(60px)',
      }}
      animate={{
        borderRadius: [
          '40% 60% 60% 40% / 60% 30% 70% 40%',
          '60% 40% 30% 70% / 40% 60% 40% 60%',
          '30% 70% 50% 50% / 50% 40% 60% 50%',
          '40% 60% 60% 40% / 60% 30% 70% 40%',
        ],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div style={{ width: '100%', height: '100%', background: color, borderRadius: 'inherit' }} />
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   LINE DRAW — SVG line animation
   ──────────────────────────────────────────────────── */
export function AnimatedLine({
  className = '',
}: {
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.svg
      ref={ref}
      className={className}
      viewBox="0 0 200 2"
      style={{ width: '100%', height: 2, overflow: 'visible' }}
    >
      <motion.line
        x1="0"
        y1="1"
        x2="200"
        y2="1"
        stroke="url(#lineGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

/* ────────────────────────────────────────────────────
   PULSE — attention-drawing pulse effect
   ──────────────────────────────────────────────────── */
export function PulseEffect({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(37,99,235,0.3)',
          '0 0 0 12px rgba(37,99,235,0)',
          '0 0 0 0 rgba(37,99,235,0)',
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   SECTION DIVIDER — animated wave
   ──────────────────────────────────────────────────── */
export function AnimatedDivider({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={`animated-divider ${className}`} style={{ textAlign: 'center', padding: '20px 0' }}>
      <motion.div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
        }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, var(--primary))' }} />
        <motion.div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--primary)',
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, var(--primary), transparent)' }} />
      </motion.div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   ANIMATED ICON — entrance + subtle continuous motion
   ──────────────────────────────────────────────────── */
export function AnimatedIcon({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.6, delay, type: 'spring', stiffness: 200 }}
      whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   SHIMMER BUTTON — shimmering highlight on hover
   ──────────────────────────────────────────────────── */
export function ShimmerButton({
  children,
  className = '',
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      className={`shimmer-btn-wrap ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{ position: 'relative', display: 'inline-block', overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
}
