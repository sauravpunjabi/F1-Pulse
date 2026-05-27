'use client'

import { motion } from 'framer-motion'
import { TEAM_HISTORIES } from '@/constants/histories'
import type { Team } from '@/types'

export default function TeamHistory({ team }: { team: Team }) {
  const hist = TEAM_HISTORIES[team.id]
  if (!hist) return null

  return (
    <>
      {/* ── Milestone timeline ─────────────────────────────────────── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>
          <p className="eyebrow" style={{ marginBottom: 48 }}>Championship History</p>

          <div style={{ position: 'relative', paddingLeft: 28 }}>
            {/* Vertical line in team color */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 2,
                background: team.color,
                opacity: 0.5,
                borderRadius: 1,
              }}
            />

            {hist.milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '72px 1fr',
                  gap: 28,
                  paddingBottom: i < hist.milestones.length - 1 ? 40 : 0,
                  position: 'relative',
                }}
              >
                {/* Dot on the timeline */}
                <div
                  style={{
                    position: 'absolute',
                    left: -35,
                    top: 3,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: team.color,
                    boxShadow: `0 0 8px ${team.color}`,
                  }}
                />

                {/* Year */}
                <span
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                    paddingTop: 1,
                    flexShrink: 0,
                  }}
                >
                  {m.year}
                </span>

                {/* Event + optional driver */}
                <div>
                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65 }}>{m.event}</p>
                  {m.driver && (
                    <p
                      className="font-mono"
                      style={{
                        fontSize: 9.5,
                        color: team.color,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginTop: 8,
                      }}
                    >
                      {m.driver}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Iconic drivers ─────────────────────────────────────────── */}
      {hist.icons.length > 0 && (
        <section style={{ padding: '0 0 80px' }}>
          <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>
            <p className="eyebrow" style={{ marginBottom: 28 }}>Iconic Drivers</p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${Math.min(hist.icons.length, 4)}, 1fr)`,
                gap: 16,
              }}
            >
              {hist.icons.map((name) => (
                <div
                  key={name}
                  className="surface"
                  style={{ padding: '20px 24px', position: 'relative', overflow: 'hidden' }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 3,
                      background: team.color,
                    }}
                  />
                  <p
                    className="font-display"
                    style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-1)', lineHeight: 1.3 }}
                  >
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
