'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { TEAM_COLORS } from '@/lib/api'
import { TEAM_MAP } from '@/constants/grid'
import type { Driver } from '@/types'

type Season = {
  season: string
  position: number
  points: number
  wins: number
  team: string
  teamId: string
  champion: boolean
}

type WikiData = {
  image: string | null
  thumbnail: string | null
  bio: string | null
  url: string | null
}

// Maps Ergast constructorId → our internal team slug for page links
const ERGAST_TO_SLUG: Record<string, string> = {
  ferrari:      'ferrari',
  mclaren:      'mclaren',
  mercedes:     'mercedes',
  red_bull:     'redbull',
  williams:     'williams',
  aston_martin: 'aston',
  alpine:       'alpine',
  haas:         'haas',
  rb:           'rbulls',
  sauber:       'audi',
  cadillac:     'cadillac',
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function DriverCareer({
  driver,
  seasons,
  wiki,
}: {
  driver: Driver
  seasons: Season[]
  wiki: WikiData
}) {
  const teamColor = TEAM_MAP[driver.teamId]?.color ?? '#E10600'

  // Unique teams from season history for the pills section
  const uniqueTeams = Array.from(
    new Map(seasons.map((s) => [s.teamId, s.team])).entries()
  )

  return (
    <section style={{ padding: '0 0 112px' }}>
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>

        {/* Bio */}
        {wiki.bio && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ marginBottom: 64 }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: '-0.02em',
                marginBottom: 16,
                color: 'var(--text-1)',
              }}
            >
              Biography
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-3)', lineHeight: 1.7 }}>
              {wiki.bio.slice(0, 400)}...
            </p>
          </motion.div>
        )}

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
          {seasons.map((s, i) => {
            const color = TEAM_COLORS[s.teamId] ?? 'var(--text-4)'
            return (
              <motion.div
                key={i}
                variants={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: '16px 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {/* Year */}
                <span
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    color,
                    letterSpacing: '0.1em',
                    minWidth: 48,
                    paddingTop: 3,
                    flexShrink: 0,
                  }}
                >
                  {s.season}
                </span>

                {/* Team color dot */}
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: color,
                    boxShadow: `0 0 8px ${color}`,
                    flexShrink: 0,
                    marginTop: 5,
                  }}
                />

                {/* Season summary */}
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.5 }}>
                    {s.team}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      color: 'var(--text-4)',
                      letterSpacing: '0.08em',
                      marginLeft: 12,
                    }}
                  >
                    P{s.position} · {s.points}pts{s.wins > 0 ? ` · ${s.wins}W` : ''}
                    {s.champion ? ' · 🏆' : ''}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Teams raced for */}
        {uniqueTeams.length > 0 && (
          <>
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
              {uniqueTeams.map(([ergastId, teamName]) => {
                const col = TEAM_COLORS[ergastId] ?? teamColor
                const internalSlug = ERGAST_TO_SLUG[ergastId]
                const pill = (
                  <span
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
                      cursor: internalSlug ? 'pointer' : 'default',
                    }}
                  >
                    {teamName}
                  </span>
                )
                return (
                  <motion.div
                    key={ergastId}
                    variants={item}
                    whileHover={{ y: -3, transition: { duration: 0.25, ease: 'easeOut' } }}
                  >
                    {internalSlug ? (
                      <Link href={`/teams/${internalSlug}`} style={{ textDecoration: 'none' }}>
                        {pill}
                      </Link>
                    ) : (
                      pill
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}
