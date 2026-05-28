'use client'

import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { DRIVERS, TEAM_MAP } from '@/constants/grid'
import { CAREER } from '@/constants/careerStats'
import type { CareerStat } from '@/constants/careerStats'
import SectionHeader from '@/components/ui/SectionHeader'

const STATS: { label: string; key: keyof CareerStat }[] = [
  { label: 'World Titles',    key: 'titles'  },
  { label: 'Race Wins',       key: 'wins'    },
  { label: 'Podiums',         key: 'podiums' },
  { label: 'Pole Positions',  key: 'poles'   },
  { label: 'Career Points',   key: 'points'  },
]

const selectStyle: React.CSSProperties = {
  flex: 1,
  background: 'var(--ink-2)',
  border: '1px solid var(--line)',
  borderRadius: 12,
  fontFamily: 'var(--font-space-grotesk)',
  fontSize: 16,
  padding: '14px 18px',
  color: 'var(--text-1)',
  cursor: 'pointer',
  outline: 'none',
}

const rowContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}
const rowItem: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Compare() {
  const [d1Index, setD1Index] = useState(0)  // Hamilton
  const [d2Index, setD2Index] = useState(6)  // Verstappen

  const d1 = DRIVERS[d1Index]
  const d2 = DRIVERS[d2Index]
  const team1 = TEAM_MAP[d1.teamId]
  const team2 = TEAM_MAP[d2.teamId]
  const c1 = CAREER[d1.slug]
  const c2 = CAREER[d2.slug]

  return (
    <section id="compare" style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>
        <SectionHeader
          kicker="Head to Head · 2026"
          title="Compare any two "
          accent="drivers."
        />

        {/* Driver selects */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <select
            value={d1Index}
            onChange={(e) => setD1Index(Number(e.target.value))}
            style={selectStyle}
          >
            {DRIVERS.map((d, i) => (
              <option key={d.slug} value={i} style={{ background: 'var(--ink-2)' }}>
                {d.name}
              </option>
            ))}
          </select>

          <span
            className="font-display"
            style={{ fontSize: 22, fontWeight: 500, color: 'var(--text-3)', flexShrink: 0 }}
          >
            VS
          </span>

          <select
            value={d2Index}
            onChange={(e) => setD2Index(Number(e.target.value))}
            style={selectStyle}
          >
            {DRIVERS.map((d, i) => (
              <option key={d.slug} value={i} style={{ background: 'var(--ink-2)' }}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        {/* Stat bars — key forces re-animation on driver change */}
        <motion.div
          key={`${d1Index}-${d2Index}`}
          variants={rowContainer}
          initial="hidden"
          animate="show"
          style={{ marginTop: 32 }}
        >
          {STATS.map(({ label, key }) => {
            const v1 = c1[key]
            const v2 = c2[key]
            const max = Math.max(v1, v2, 1)

            return (
              <motion.div
                key={key}
                variants={rowItem}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '18px 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {/* Left value */}
                <span
                  className="font-display"
                  style={{ fontSize: 28, fontWeight: 500, minWidth: 60, textAlign: 'right', color: 'var(--text-1)' }}
                >
                  {v1.toLocaleString()}
                </span>

                {/* Left bar — grows from right */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(v1 / max) * 100}%` }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    style={{ height: 4, borderRadius: 2, background: team1.color }}
                  />
                </div>

                {/* Center label */}
                <span
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    color: 'var(--text-4)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    width: 120,
                    textAlign: 'center',
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>

                {/* Right bar — grows from left */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(v2 / max) * 100}%` }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    style={{ height: 4, borderRadius: 2, background: team2.color }}
                  />
                </div>

                {/* Right value */}
                <span
                  className="font-display"
                  style={{ fontSize: 28, fontWeight: 500, minWidth: 60, textAlign: 'left', color: 'var(--text-1)' }}
                >
                  {v2.toLocaleString()}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
