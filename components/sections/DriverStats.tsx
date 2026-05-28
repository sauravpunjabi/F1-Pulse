'use client'

import { motion, type Variants } from 'framer-motion'
import { CAREER } from '@/constants/careerStats'
import { TEAM_MAP } from '@/constants/data'
import type { Driver } from '@/types'

const S26: Record<string, { pts: number; wins: number; podiums: number }> = {
  hamilton:   { pts: 140, wins: 2, podiums: 6 },
  leclerc:    { pts: 105, wins: 1, podiums: 5 },
  norris:     { pts: 145, wins: 3, podiums: 7 },
  piastri:    { pts: 116, wins: 2, podiums: 5 },
  russell:    { pts: 89,  wins: 1, podiums: 4 },
  antonelli:  { pts: 67,  wins: 1, podiums: 2 },
  verstappen: { pts: 80,  wins: 1, podiums: 3 },
  hadjar:     { pts: 63,  wins: 0, podiums: 2 },
  sainz:      { pts: 55,  wins: 0, podiums: 2 },
  albon:      { pts: 32,  wins: 0, podiums: 1 },
  alonso:     { pts: 44,  wins: 0, podiums: 2 },
  stroll:     { pts: 30,  wins: 0, podiums: 1 },
  gasly:      { pts: 28,  wins: 0, podiums: 1 },
  colapinto:  { pts: 17,  wins: 0, podiums: 0 },
  ocon:       { pts: 24,  wins: 0, podiums: 1 },
  bearman:    { pts: 14,  wins: 0, podiums: 0 },
  lawson:     { pts: 18,  wins: 0, podiums: 0 },
  lindblad:   { pts: 11,  wins: 0, podiums: 0 },
  hulkenberg: { pts: 12,  wins: 0, podiums: 0 },
  bortoleto:  { pts: 6,   wins: 0, podiums: 0 },
  perez:      { pts: 8,   wins: 0, podiums: 0 },
  bottas:     { pts: 4,   wins: 0, podiums: 0 },
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function DriverStats({ driver }: { driver: Driver }) {
  const career = CAREER[driver.slug] ?? { titles: 0, wins: 0, podiums: 0, poles: 0, points: 0 }
  const team = TEAM_MAP[driver.teamId]
  const color = team?.color ?? '#E10600'

  const careerStats = [
    { label: 'World Championships', value: career.titles, highlight: true },
    { label: 'Race Wins',           value: career.wins,    highlight: false },
    { label: 'Podiums',             value: career.podiums, highlight: false },
    { label: 'Pole Positions',      value: career.poles,   highlight: false },
  ]

  const s26 = S26[driver.slug] ?? { pts: 0, wins: 0, podiums: 0 }
  const seasonStats = [
    { label: 'Points',  value: s26.pts    },
    { label: 'Wins',    value: s26.wins   },
    { label: 'Podiums', value: s26.podiums },
  ]

  return (
    <section style={{ padding: '0 0 80px' }}>
      <style>{`
        @media (max-width: 640px) { .driver-stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>

      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>

        {/* Career stats strip */}
        <motion.div
          className="driver-stats-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid var(--line)',
            borderBottom: '1px solid var(--line)',
            padding: '24px 0',
            marginBottom: 56,
          }}
        >
          {careerStats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={item}
              style={{
                borderLeft: i > 0 ? '1px solid var(--line)' : 'none',
                paddingLeft: i > 0 ? 32 : 0,
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: 56,
                  fontWeight: 600,
                  lineHeight: 1,
                  color: s.highlight ? 'var(--yellow)' : 'var(--text-1)',
                }}
              >
                {s.value}
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: 10,
                  color: 'var(--text-4)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginTop: 10,
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 2026 season strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="surface"
          style={{ padding: '28px 32px' }}
        >
          <p
            className="font-mono"
            style={{
              fontSize: 9.5,
              color: 'var(--text-4)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            2026 Season
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
            }}
          >
            {seasonStats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  borderLeft: i > 0 ? '1px solid var(--line)' : 'none',
                  paddingLeft: i > 0 ? 28 : 0,
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: 40,
                    fontWeight: 600,
                    lineHeight: 1,
                    color,
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    color: 'var(--text-4)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    marginTop: 8,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
