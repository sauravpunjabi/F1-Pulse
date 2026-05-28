'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { CAREER } from '@/constants/career'
import { TEAM_MAP } from '@/constants/data'
import type { Driver } from '@/types'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function DriverCareer({ driver }: { driver: Driver }) {
  const career = CAREER[driver.slug]
  if (!career) return null

  return (
    <section style={{ padding: '0 0 112px' }}>
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>

        {/* Career timeline */}
        <h2
          className="font-display"
          style={{
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            marginBottom: 32,
            color: 'var(--text-1)',
          }}
        >
          Career Timeline
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{ marginBottom: 72 }}
        >
          {career.timeline.map((entry, i) => {
            const teamColor = TEAM_MAP[entry.teamId]?.color ?? 'var(--text-4)'
            return (
              <motion.div
                key={i}
                variants={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: '18px 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {/* Year */}
                <span
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    color: teamColor,
                    letterSpacing: '0.1em',
                    minWidth: 72,
                    paddingTop: 3,
                    flexShrink: 0,
                  }}
                >
                  {entry.year}
                </span>

                {/* Team color dot */}
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: teamColor,
                    boxShadow: `0 0 8px ${teamColor}`,
                    flexShrink: 0,
                    marginTop: 5,
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--text-2)',
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {entry.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Teams raced for */}
        <h2
          className="font-display"
          style={{
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            marginBottom: 20,
            color: 'var(--text-1)',
          }}
        >
          Teams
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}
        >
          {career.teams.map((teamId) => {
            const team = TEAM_MAP[teamId]
            if (!team) return null
            const col = team.color
            return (
              <motion.div
                key={teamId}
                variants={item}
                whileHover={{ y: -3, transition: { duration: 0.25, ease: 'easeOut' } }}
              >
                <Link
                  href={`/teams/${teamId}`}
                  className="font-mono"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '8px 18px',
                    borderRadius: 999,
                    border: `1px solid ${col}44`,
                    background: `${col}12`,
                    color: 'var(--text-1)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    transition: 'border-color 0.15s',
                  }}
                >
                  {team.name}
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
