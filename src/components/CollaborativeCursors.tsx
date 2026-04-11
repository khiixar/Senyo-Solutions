'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── TYPES ─────────────────────────────────────── */
interface CursorData {
  id: string;
  name: string;
  x: number;
  y: number;
  color: string;
  lastSeen: number;
}

/* ─── CONSTANTS ─────────────────────────────────── */
const CURSOR_COLORS = [
  '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b',
  '#10b981', '#06b6d4', '#ef4444', '#84cc16',
];

const SIMULATED_USERS = [
  'Alex', 'Jordan', 'Sam', 'Taylor', 'Morgan',
  'Casey', 'Riley', 'Quinn', 'Avery', 'Dakota',
];

const CURSOR_TIMEOUT = 8000;   // remove after 8s idle
const SIM_INTERVAL   = 3000;   // new sim cursor every 3s
const SIM_MOVE_INTERVAL = 50;  // smooth movement ticks
const SIM_LIFETIME   = 6000;   // each sim cursor lives 6s
const MAX_CURSORS    = 4;

/* ─── CHANNEL NAME ──────────────────────────────── */
const CHANNEL = 'senyo-collab-cursors';

/* ─── COMPONENT ─────────────────────────────────── */
export default function CollaborativeCursors() {
  const [cursors, setCursors] = useState<Map<string, CursorData>>(new Map());
  const channelRef = useRef<BroadcastChannel | null>(null);
  const myIdRef = useRef<string>('');
  const simTimersRef = useRef<NodeJS.Timeout[]>([]);
  const cursorsRef = useRef<Map<string, CursorData>>(new Map());

  // Keep ref in sync
  useEffect(() => { cursorsRef.current = cursors; }, [cursors]);

  /* ── Generate a user ID ────────────────────────── */
  useEffect(() => {
    myIdRef.current = `user-${Math.random().toString(36).slice(2, 8)}`;
  }, []);

  /* ── BroadcastChannel for real cross-tab cursors ─ */
  useEffect(() => {
    try {
      const bc = new BroadcastChannel(CHANNEL);
      channelRef.current = bc;

      bc.onmessage = (e) => {
        const data = e.data as CursorData;
        if (data.id === myIdRef.current) return;
        setCursors((prev) => {
          const next = new Map(prev);
          next.set(data.id, { ...data, lastSeen: Date.now() });
          return next;
        });
      };

      return () => bc.close();
    } catch {
      // BroadcastChannel not supported
    }
  }, []);

  /* ── Broadcast own cursor ──────────────────────── */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      channelRef.current?.postMessage({
        id: myIdRef.current,
        name: 'You',
        x: e.clientX / window.innerWidth,
        y: (e.clientY + window.scrollY) / document.documentElement.scrollHeight,
        color: CURSOR_COLORS[0],
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  /* ── Simulate other visitors ───────────────────── */
  useEffect(() => {
    const spawnSim = () => {
      // Don't exceed max
      const simCount = Array.from(cursorsRef.current.values()).filter(c => c.id.startsWith('sim-')).length;
      if (simCount >= MAX_CURSORS) return;

      const id = `sim-${Math.random().toString(36).slice(2, 8)}`;
      const name = SIMULATED_USERS[Math.floor(Math.random() * SIMULATED_USERS.length)];
      const color = CURSOR_COLORS[1 + Math.floor(Math.random() * (CURSOR_COLORS.length - 1))];

      // Random starting position (normalised 0-1)
      let cx = 0.15 + Math.random() * 0.7;
      let cy = 0.05 + Math.random() * 0.3;

      // Target to wander toward
      let tx = 0.15 + Math.random() * 0.7;
      let ty = 0.05 + Math.random() * 0.5;

      const update = () => {
        // Ease toward target
        cx += (tx - cx) * 0.04;
        cy += (ty - cy) * 0.04;

        // Occasionally pick a new target
        if (Math.random() < 0.02) {
          tx = 0.1 + Math.random() * 0.8;
          ty = 0.05 + Math.random() * 0.5;
        }

        setCursors((prev) => {
          const next = new Map(prev);
          next.set(id, { id, name, x: cx, y: cy, color, lastSeen: Date.now() });
          return next;
        });
      };

      const moveTimer = setInterval(update, SIM_MOVE_INTERVAL);
      simTimersRef.current.push(moveTimer);

      // Remove after lifetime
      const removeTimer = setTimeout(() => {
        clearInterval(moveTimer);
        setCursors((prev) => {
          const next = new Map(prev);
          next.delete(id);
          return next;
        });
      }, SIM_LIFETIME + Math.random() * 3000);
      simTimersRef.current.push(removeTimer);
    };

    // Spawn first one quickly
    const initialDelay = setTimeout(() => spawnSim(), 1500);
    const interval = setInterval(spawnSim, SIM_INTERVAL);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
      simTimersRef.current.forEach(t => { clearTimeout(t); clearInterval(t); });
    };
  }, []);

  /* ── Clean stale cursors ───────────────────────── */
  useEffect(() => {
    const interval = setInterval(() => {
      setCursors((prev) => {
        const now = Date.now();
        const next = new Map(prev);
        let changed = false;
        Array.from(next.entries()).forEach(([id, c]) => {
          if (now - c.lastSeen > CURSOR_TIMEOUT) { next.delete(id); changed = true; }
        });
        return changed ? next : prev;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  /* ── Track viewport dimensions for SSR safety ── */
  const [viewport, setViewport] = useState({ w: 0, h: 0, scrollY: 0, docH: 0 });
  useEffect(() => {
    const update = () => setViewport({
      w: window.innerWidth,
      h: window.innerHeight,
      scrollY: window.scrollY,
      docH: document.documentElement.scrollHeight,
    });
    update();
    window.addEventListener('resize', update, { passive: true });
    window.addEventListener('scroll', update, { passive: true });
    return () => { window.removeEventListener('resize', update); window.removeEventListener('scroll', update); };
  }, []);

  /* ── Render ────────────────────────────────────── */
  const cursorArray = Array.from(cursors.values()).filter(c => c.id !== myIdRef.current);

  if (viewport.w === 0) return null; // SSR guard

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <AnimatePresence>
        {cursorArray.map((cursor) => {
          const px = cursor.x * viewport.w;
          const py = cursor.y * viewport.docH - viewport.scrollY;

          // Only render if visible in viewport (with some margin)
          if (py < -60 || py > viewport.h + 60) return null;

          return (
            <motion.div
              key={cursor.id}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: px,
                y: py,
              }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{
                x: { type: 'spring', damping: 30, stiffness: 200 },
                y: { type: 'spring', damping: 30, stiffness: 200 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                willChange: 'transform',
              }}
            >
              {/* Cursor SVG */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                style={{ filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.3))` }}
              >
                <path
                  d="M3 2L17 10L10 11.5L7 18L3 2Z"
                  fill={cursor.color}
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Name label */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  left: '12px',
                  background: cursor.color,
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                  whiteSpace: 'nowrap',
                  lineHeight: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                  letterSpacing: '0.02em',
                }}
              >
                {cursor.name}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
