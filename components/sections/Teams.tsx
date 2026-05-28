'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { TEAMS, DRIVERS, DRIVER_MAP } from '@/constants/grid'
import SectionHeader from '@/components/ui/SectionHeader'

/* Map Ergast constructor IDs → TEAM_MAP keys (same as Standings) */
const T: Record<string, string> = {
  red_bull: 'redbull', aston_martin: 'aston', rb: 'rbulls',
  sauber: 'audi', kick_sauber: 'audi',
}
function tid(id: string) { return T[id] ?? id }

interface TeamsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructors: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  drivers: any[]
}

const gridContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const gridItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Teams({ constructors, drivers }: TeamsProps) {
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null)

  const maxPts = constructors[0]?.points || 1

  // Sort TEAMS by real constructor standings position
  const posMap: Record<string, number> = {}
  for (const c of constructors) {
    posMap[tid(c.team.id)] = c.position
  }
  const sortedTeams = constructors.length > 0
    ? [...TEAMS].sort((a, b) => (posMap[a.id] ?? 99) - (posMap[b.id] ?? 99))
    : TEAMS

  return (
    <section id="teams" style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>
        <style>{`
          @media (max-width: 1100px) { .teams-grid { grid-template-columns: repeat(3,1fr) !important; } }
          @media (max-width: 820px)  { .teams-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 480px)  { .teams-grid { grid-template-columns: 1fr !important; } }
        `}</style>

        <SectionHeader
          kicker="Constructors · 2026 grid"
          title="Eleven teams. "
          accent="One paddock."
          sub="From Maranello to Oklahoma — explore each constructor's lineage and machinery."
          right={
            <Link
              href="/teams"
              className="font-mono"
              style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--text-3)', textDecoration: 'none' }}
            >
              All teams →
            </Link>
          }
        />

        <motion.div
          className="teams-grid"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}
        >
          {sortedTeams.map(team => {
            const isHovered = hoveredTeam === team.id
            const color = team.color
            const teamDrivers = DRIVERS.filter(d => d.teamId === team.id)

            const standing = constructors.find(c => tid(c.team.id) === team.id)
            const pts = standing?.points ?? 0
            const position = standing?.position ?? null

            return (
              <motion.div
                key={team.id}
                variants={gridItem}
                whileHover={{ y: -3, transition: { duration: 0.25, ease: 'easeOut' } }}
              >
                <Link
                  href={`/teams/${team.id}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                  onMouseEnter={() => setHoveredTeam(team.id)}
                  onMouseLeave={() => setHoveredTeam(null)}
                >
                  <div
                    className="surface"
                    style={{
                      padding: 22,
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                      borderColor: isHovered ? `${color}A8` : 'var(--line)',
                      transition: 'border-color 0.32s ease',
                    }}
                  >
                    {/* Background glow */}
                    <div
                      style={{
                        position: 'absolute',
                        top: -80, right: -80,
                        width: 200, height: 200,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                        filter: 'blur(20px)',
                        opacity: isHovered ? 0.5 : 0.15,
                        transition: 'opacity 0.32s ease',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Header: team mark + titles */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                      {/* Team mark */}
                      <div
                        style={{
                          width: 32, height: 32,
                          borderRadius: 8,
                          background: `linear-gradient(135deg, ${color}, ${color}77)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          position: 'relative', overflow: 'hidden', flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute', top: -4, right: -4,
                            width: 18, height: 18, borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                          }}
                        />
                        <span
                          className="font-display"
                          style={{ fontSize: 11, fontWeight: 700, color: '#fff', position: 'relative', zIndex: 1 }}
                        >
                          {team.id.slice(0, 3).toUpperCase()}
                        </span>
                      </div>

                      {/* Titles */}
                      <div style={{ textAlign: 'right' }}>
                        <div className="font-mono" style={{ fontSize: 9.5, color: 'var(--text-4)', letterSpacing: '0.1em', marginBottom: 2 }}>TITLES</div>
                        <div className="font-display" style={{ fontSize: 24, fontWeight: 600, lineHeight: 1 }}>{team.constructorTitles}</div>
                      </div>
                    </div>

                    {/* Team name */}
                    <div
                      className="font-display"
                      style={{
                        fontSize: 20, fontWeight: 500,
                        letterSpacing: '-0.02em', lineHeight: 1.2,
                        marginBottom: 6,
                        color: 'var(--text-1)',
                      }}
                    >
                      {team.name}
                    </div>

                    {/* Base */}
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 10, color: 'var(--text-4)',
                        letterSpacing: '0.18em', textTransform: 'uppercase',
                      }}
                    >
                      {team.base}
                    </div>

                    {/* Championship standing */}
                    <div style={{ borderTop: '1px solid var(--line)', marginTop: 22, paddingTop: 18 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <span className="font-mono" style={{ fontSize: 9, color: 'var(--text-4)', letterSpacing: '0.1em' }}>
                          {position ? `P${String(position).padStart(2, '0')} CHAMPIONSHIP` : 'CHAMPIONSHIP'}
                        </span>
                        <span className="font-mono" style={{ fontSize: 9, color: 'var(--text-3)', letterSpacing: '0.06em' }}>
                          {pts} PTS
                        </span>
                      </div>
                      <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${maxPts > 0 ? (pts / maxPts) * 100 : 0}%`,
                            background: color,
                            borderRadius: 2,
                            boxShadow: `0 0 6px ${color}88`,
                            transition: 'width 0.6s ease',
                          }}
                        />
                      </div>
                    </div>

                    {/* Drivers */}
                    <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {teamDrivers.map(driver => {
                        const dStanding = drivers.find(d => d.driver.slug === driver.slug)
                        const dPts = dStanding?.points ?? 0
                        return (
                          <div
                            key={driver.slug}
                            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                          >
                            <span
                              className="font-mono"
                              style={{ fontSize: 10, fontWeight: 600, color, minWidth: 24 }}
                            >
                              {driver.number}
                            </span>
                            <span style={{ fontSize: 13, color: 'var(--text-1)', flex: 1 }}>
                              {driver.firstName[0]}. {driver.lastName}
                            </span>
                            <span style={{ fontSize: 12, color: 'var(--text-3)' }}>
                              {dPts}
                            </span>
                          </div>
                        )
                      })}
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
