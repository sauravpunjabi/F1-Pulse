'use client'

import { motion, type Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const STATS = [
  { value: '76 yrs', label: 'of F1 archive' },
  { value: '1,042',  label: 'drivers indexed' },
  { value: '24/7',   label: 'live data feed'  },
  { value: '200ms',  label: 'avg refresh rate' },
]

export default function CTA() {
  return (
    <section
      id="cta"
      style={{
        padding: '120px 0',
        borderTop: '1px solid var(--line)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Red glow at bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 100%, rgba(225,6,0,0.18), transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid overlay with radial fade mask */}
      <div
        className="grid-bg"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.35,
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1380,
          margin: '0 auto',
          padding: '0 32px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <motion.p variants={item} className="eyebrow" style={{ marginBottom: 20 }}>
            Ready when you are
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={item}
            className="font-display"
            style={{
              fontSize: 'clamp(48px, 7vw, 104px)',
              fontWeight: 500,
              letterSpacing: '-0.045em',
              lineHeight: 0.94,
              marginBottom: 28,
            }}
          >
            Get the full{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>pulse</em>
            {' '}of every race weekend.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={item}
            style={{
              fontSize: 18,
              color: 'var(--text-3)',
              maxWidth: 580,
              margin: '0 auto',
              marginBottom: 44,
              lineHeight: 1.6,
            }}
          >
            Real-time timing, historical archives, and deep stats — everything Formula 1 in one place.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#" className="btn btn-primary">Explore F1Pulse — free →</a>
            <a href="#calendar" className="btn btn-ghost">View 2026 calendar</a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            style={{
              marginTop: 64,
              display: 'flex',
              justifyContent: 'center',
              gap: 40,
              flexWrap: 'wrap',
            }}
          >
            {STATS.map(({ value, label }, i) => (
              <div key={label} style={{ textAlign: 'center' }}>
                {i > 0 && (
                  <span
                    aria-hidden
                    style={{
                      display: 'none',
                    }}
                  />
                )}
                <p
                  className="font-display"
                  style={{ fontSize: 22, fontWeight: 500, color: 'var(--text-1)', lineHeight: 1 }}
                >
                  {value}
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 9.5,
                    color: 'var(--text-4)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginTop: 6,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
