'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { DRIVERS, TEAM_MAP } from '@/constants/data'
import SectionHeader from '@/components/ui/SectionHeader'

const gridContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}
const gridItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Drivers() {
  return (
    <section id="drivers" style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>
        <style>{`
          @media (max-width: 1100px) { .drivers-grid { grid-template-columns: repeat(4,1fr) !important; } }
          @media (max-width: 820px)  { .drivers-grid { grid-template-columns: repeat(3,1fr) !important; } }
          @media (max-width: 540px)  { .drivers-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 380px)  { .drivers-grid { grid-template-columns: 1fr !important; } }
        `}</style>

        <SectionHeader
          kicker="Drivers · 2026 grid"
          title="Twenty-two athletes. "
          accent="One dream."
        />

        <motion.div
          className="drivers-grid"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18 }}
        >
          {DRIVERS.map((driver) => {
            const team = TEAM_MAP[driver.teamId]
            const color = team?.color ?? '#666'
            const initials = `${driver.firstName[0]}${driver.lastName[0]}`

            return (
              <motion.div
                key={driver.slug}
                variants={gridItem}
                whileHover={{ y: -3, transition: { duration: 0.25, ease: 'easeOut' } }}
              >
                <Link
                  href={`/drivers/${driver.slug}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div className="surface surface-hover" style={{ padding: 20, overflow: 'hidden', cursor: 'pointer' }}>
                    {/* Driver number */}
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 9.5,
                        color: 'var(--text-4)',
                        textAlign: 'right',
                        letterSpacing: '0.06em',
                        marginBottom: 10,
                      }}
                    >
                      {driver.number}
                    </div>

                    {/* Portrait slot */}
                    <div
                      className="slot"
                      style={{
                        height: 120,
                        borderRadius: 12,
                        marginBottom: 16,
                        position: 'relative',
                        overflow: 'hidden',
                        border: `1px dashed ${color}44`,
                      }}
                    >
                      <span
                        className="font-display"
                        style={{
                          fontSize: 22,
                          fontWeight: 600,
                          color,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {initials}
                      </span>
                    </div>

                    {/* Name */}
                    <div
                      className="font-display"
                      style={{
                        fontSize: 18,
                        fontWeight: 500,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        color: 'var(--text-1)',
                      }}
                    >
                      {driver.name}
                    </div>

                    {/* Team */}
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        color: 'var(--text-4)',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        marginTop: 3,
                      }}
                    >
                      {team?.name ?? '—'}
                    </div>

                    {/* Stats */}
                    <div
                      style={{
                        borderTop: '1px solid var(--line)',
                        marginTop: 16,
                        paddingTop: 14,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3,1fr)',
                      }}
                    >
                      {[
                        { label: 'WINS',    value: driver.wins    ?? 0 },
                        { label: 'PODIUMS', value: driver.podiums ?? 0 },
                        { label: 'POLES',   value: driver.poles   ?? 0 },
                      ].map((s, j) => (
                        <div
                          key={s.label}
                          style={{
                            borderLeft: j > 0 ? '1px solid var(--line)' : 'none',
                            paddingLeft: j > 0 ? 8 : 0,
                          }}
                        >
                          <div
                            className="font-display"
                            style={{ fontSize: 20, fontWeight: 500, lineHeight: 1 }}
                          >
                            {s.value}
                          </div>
                          <div
                            className="font-mono"
                            style={{
                              fontSize: 9,
                              color: 'var(--text-4)',
                              letterSpacing: '0.08em',
                              marginTop: 4,
                              textTransform: 'uppercase',
                            }}
                          >
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
