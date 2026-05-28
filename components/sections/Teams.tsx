'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { TEAMS, DRIVERS, DRIVER_MAP } from '@/constants/grid'
import SectionHeader from '@/components/ui/SectionHeader'

const CPTS: Record<string, number> = {
  mclaren: 261, ferrari: 245, mercedes: 156, redbull: 143,
  williams: 87, aston: 74, alpine: 45, haas: 38,
  rbulls: 29, audi: 18, cadillac: 12,
}

const DPTS: Record<string, number> = {
  norris: 145, piastri: 116, hamilton: 140, leclerc: 105,
  russell: 89, antonelli: 67, verstappen: 80, hadjar: 63,
  sainz: 55, albon: 32, alonso: 44, stroll: 30,
  gasly: 28, colapinto: 17, ocon: 24, bearman: 14,
  lawson: 18, lindblad: 11, hulkenberg: 12, bortoleto: 6,
  perez: 8, bottas: 4,
}

/* Simulated recent race positions per team (last 7 races, oldest → newest) */
const FORM: Record<string, number[]> = {
  mclaren:  [2, 1, 2, 1, 3, 2, 1],
  ferrari:  [1, 3, 1, 2, 1, 3, 2],
  mercedes: [4, 3, 5, 4, 3, 4, 5],
  redbull:  [3, 5, 3, 5, 4, 5, 4],
  williams: [7, 6, 8, 7, 6, 8, 7],
  aston:    [5, 7, 6, 6, 7, 6, 6],
  alpine:   [8, 9, 8,10, 9, 9,10],
  haas:     [9, 8,10, 8,10, 8, 9],
  rbulls:   [10,11, 9,10,11,10,11],
  audi:     [11,12,11,13,11,12,13],
  cadillac: [13,14,12,14,13,13,14],
}

const gridContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const gridItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Teams() {
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null)

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
          {TEAMS.map(team => {
            const isHovered = hoveredTeam === team.id
            const color = team.color
            const teamDrivers = DRIVERS.filter(d => d.teamId === team.id)
            const form = FORM[team.id] ?? [5,5,5,5,5,5,5]
            const pts = CPTS[team.id] ?? 0

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

                    {/* Form bars */}
                    <div style={{ borderTop: '1px solid var(--line)', marginTop: 22, paddingTop: 18 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <span className="font-mono" style={{ fontSize: 9, color: 'var(--text-4)', letterSpacing: '0.1em' }}>RECENT FORM</span>
                        <span className="font-mono" style={{ fontSize: 9, color: 'var(--text-3)', letterSpacing: '0.06em' }}>
                          {pts} PTS
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-end', height: 26, gap: 4 }}>
                        {form.map((pos, i) => (
                          <div
                            key={i}
                            style={{
                              flex: 1,
                              height: `${Math.max(20, 100 - pos * 9)}%`,
                              background: color,
                              borderRadius: 2,
                              opacity: 0.4 + (i / 6) * 0.6,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Drivers */}
                    <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {teamDrivers.map(driver => (
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
                            {DPTS[driver.slug] ?? 0}
                          </span>
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
