'use client'

import { motion, type Variants } from 'framer-motion'

type CareerData = {
  titles: number
  wins: number
  poles: number
  podiums: number
  seasons: number
  debutYear: string | null
  latestYear: string | null
}

type DriverStanding = {
  position: number
  points: number
  wins: number
} | null

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function StatsStrip({
  label,
  stats,
}: {
  label: string
  stats: { label: string; value: string | number; highlight?: boolean }[]
}) {
  return (
    <div>
      <p
        className="font-mono"
        style={{
          fontSize: 9.5,
          color: 'var(--text-4)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        {label}
      </p>
      <motion.div
        className="stats-strip-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          padding: '20px 0',
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={item}
            style={{
              borderLeft: i > 0 ? '1px solid var(--line)' : 'none',
              paddingLeft: i > 0 ? 28 : 0,
            }}
          >
            <div
              className="font-display"
              style={{
                fontSize: 44,
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
    </div>
  )
}

export default function DriverStats({
  career,
  currentStanding,
  racesCompleted,
}: {
  career: CareerData
  currentStanding: DriverStanding
  racesCompleted: number
}) {
  const seasonStats = [
    { label: 'Position', value: currentStanding ? `P${currentStanding.position}` : '—' },
    { label: 'Points',   value: currentStanding?.points ?? 0 },
    { label: 'Wins',     value: currentStanding?.wins ?? 0 },
    { label: 'Races',    value: racesCompleted },
  ]

  const careerStats = [
    { label: 'Championships', value: career.titles,  highlight: true  },
    { label: 'Wins',          value: career.wins,    highlight: false },
    { label: 'Podiums',       value: career.podiums, highlight: false },
    { label: 'Poles',         value: career.poles,   highlight: false },
  ]

  return (
    <section style={{ padding: '0 0 80px' }}>
      <style>{`
        @media (max-width: 640px) { .stats-strip-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>

      <div
        style={{
          maxWidth: 1380,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 48,
        }}
      >
        <StatsStrip label="2026 Season" stats={seasonStats} />
        <StatsStrip label="Career Record" stats={careerStats} />
      </div>
    </section>
  )
}
