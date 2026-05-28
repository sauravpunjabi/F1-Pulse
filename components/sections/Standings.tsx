'use client'

import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { TEAM_MAP, DRIVER_MAP } from '@/constants/grid'
import SectionHeader from '@/components/ui/SectionHeader'

type Mode = 'drivers' | 'constructors'

/* Map Ergast team IDs → our TEAM_MAP keys */
const T: Record<string, string> = {
  red_bull: 'redbull', aston_martin: 'aston', rb: 'rbulls',
  sauber: 'audi', kick_sauber: 'audi',
}
function tid(id: string) { return T[id] ?? id }

const TEAM_SHORT: Record<string, string> = {
  ferrari: 'FER', mclaren: 'MCL', mercedes: 'MER', redbull: 'RBR',
  williams: 'WIL', aston: 'AMR', alpine: 'ALP', haas: 'HAS',
  rbulls: 'RB', audi: 'AUD', cadillac: 'CAD',
}

const rowContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}
const rowItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

interface StandingsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  drivers: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructors: any[]
}

export default function Standings({ drivers, constructors }: StandingsProps) {
  const [mode, setMode] = useState<Mode>('drivers')

  const modeToggle = (
    <div
      style={{
        display: 'flex', gap: 6, padding: 4,
        border: '1px solid var(--line)', borderRadius: 999,
        background: 'rgba(255,255,255,0.02)',
      }}
    >
      {(['drivers', 'constructors'] as Mode[]).map(m => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className="font-mono"
          style={{
            fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em',
            padding: '8px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
            background: mode === m ? 'var(--accent)' : 'transparent',
            color: mode === m ? '#fff' : 'var(--text-3)',
            transition: 'all 0.15s ease',
          }}
        >
          {m}
        </button>
      ))}
    </div>
  )

  return (
    <section id="standings" style={{ padding: '112px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>
        <SectionHeader
          kicker="Live Standings · 2026"
          title="The championship, "
          accent="byte by byte."
          right={modeToggle}
        />

        {mode === 'drivers' ? (
          <DriversPanel standings={drivers} />
        ) : (
          <ConstructorsPanel standings={constructors} />
        )}
      </div>
    </section>
  )
}

/* ─── Drivers panel ──────────────────────────────────────────── */
function StandingsSkeleton() {
  return (
    <>
      <style>{`@media (max-width: 980px) { .standings-grid { grid-template-columns: 1fr !important; } }`}</style>
      <div className="standings-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 18 }}>
        {/* Leader card skeleton */}
        <div className="surface" style={{ padding: 32, animation: 'pulse 1.8s ease-in-out infinite' }}>
          <div style={{ height: 24, width: '55%', background: 'var(--line-strong)', borderRadius: 6, marginBottom: 20 }} />
          <div style={{ height: 180, background: 'var(--ink-3)', borderRadius: 14, marginBottom: 20 }} />
          <div style={{ height: 28, width: '70%', background: 'var(--line-strong)', borderRadius: 6, marginBottom: 10 }} />
          <div style={{ height: 14, width: '45%', background: 'var(--ink-3)', borderRadius: 4, marginBottom: 24 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ padding: '0 0 0 16px', borderLeft: i > 0 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ height: 22, width: '50%', background: 'var(--line-strong)', borderRadius: 4, marginBottom: 8 }} />
                <div style={{ height: 10, width: '70%', background: 'var(--ink-3)', borderRadius: 4 }} />
              </div>
            ))}
          </div>
        </div>
        {/* Driver list skeleton */}
        <div className="surface" style={{ padding: 8, animation: 'pulse 1.8s ease-in-out 0.1s infinite' }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)' }}>
            <div style={{ height: 10, width: '80%', background: 'var(--ink-3)', borderRadius: 4 }} />
          </div>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px', borderTop: '1px solid var(--line)' }}>
              <div style={{ height: 12, width: 28, background: 'var(--ink-3)', borderRadius: 4, flexShrink: 0 }} />
              <div style={{ height: 14, width: '40%', background: 'var(--line-strong)', borderRadius: 4 }} />
              <div style={{ height: 12, width: '15%', background: 'var(--ink-3)', borderRadius: 4, marginLeft: 'auto' }} />
              <div style={{ height: 12, width: '10%', background: 'var(--ink-3)', borderRadius: 4 }} />
              <div style={{ height: 18, width: '12%', background: 'var(--line-strong)', borderRadius: 4 }} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DriversPanel({ standings }: { standings: any[] }) {
  if (standings.length === 0) return <StandingsSkeleton />

  const leader = standings[0]
  const rest = standings.slice(1)
  const maxPoints = leader.points || 1
  const leaderTeamId = tid(leader.team.id)
  const leaderTeamColor = leader.team.color ?? TEAM_MAP[leaderTeamId]?.color ?? '#E10600'
  const leaderDriver = DRIVER_MAP[leader.driver.slug]

  return (
    <>
      <style>{`@media (max-width: 980px) { .standings-grid { grid-template-columns: 1fr !important; } }`}</style>
      <div
        className="standings-grid"
        style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 18 }}
      >
        {/* Leader card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ y: -3, transition: { duration: 0.25, ease: 'easeOut' } }}
          className="surface"
          style={{
            padding: 32,
            overflow: 'hidden',
            position: 'relative',
            background: `linear-gradient(155deg, ${leaderTeamColor}38, rgba(15,18,25,0.5) 60%)`,
            borderColor: `${leaderTeamColor}8C`,
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: 'absolute',
              top: -80, right: -80,
              width: 360, height: 360,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${leaderTeamColor}70 0%, transparent 70%)`,
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }}
          />

          {/* Position watermark */}
          <div
            className="font-display"
            style={{
              position: 'absolute',
              top: 8, right: 20,
              fontSize: 96, fontWeight: 600,
              letterSpacing: '-0.06em', lineHeight: 0.85,
              color: leaderTeamColor, opacity: 0.15,
              userSelect: 'none',
            }}
          >
            01
          </div>

          {/* Champion tag */}
          <span
            className="font-mono"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 10px', borderRadius: 999,
              border: `1px solid ${leaderTeamColor}66`,
              background: `${leaderTeamColor}22`,
              color: leaderTeamColor,
              fontSize: 10, fontWeight: 600, letterSpacing: '0.1em',
              marginBottom: 20,
            }}
          >
            ★ CHAMPIONSHIP LEADER
          </span>

          {/* Portrait slot */}
          <div
            className="slot"
            style={{
              height: 200,
              borderRadius: 14,
              marginBottom: 20,
              position: 'relative',
              overflow: 'hidden',
              fontSize: 11,
            }}
          >
            DRIVER PORTRAIT
            {leaderDriver && (
              <span
                className="font-display"
                style={{
                  position: 'absolute', bottom: 12, right: 16,
                  fontSize: 44, fontWeight: 700,
                  color: leaderTeamColor, opacity: 0.3,
                }}
              >
                {leaderDriver.number}
              </span>
            )}
          </div>

          {/* Name */}
          <div
            className="font-display"
            style={{ fontSize: 38, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 8 }}
          >
            {leader.driver.firstName} {leader.driver.lastName}
          </div>

          {/* Team · nationality | points */}
          <div
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: 13, color: 'var(--text-3)' }}>
              {leader.team.name} · {leader.driver.nationality}
            </span>
            <span
              className="font-display"
              style={{ fontSize: 36, fontWeight: 500, color: leaderTeamColor }}
            >
              {leader.points}
            </span>
          </div>

          {/* Stats strip */}
          <div
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
              borderTop: '1px solid var(--line)', paddingTop: 22,
            }}
          >
            {[
              { label: 'WINS', value: leader.wins },
              { label: 'PODIUMS', value: leaderDriver?.podiums ?? 0 },
              { label: 'POLES', value: leaderDriver?.poles ?? 0 },
            ].map((s, i) => (
              <div
                key={s.label}
                style={{ borderLeft: i > 0 ? '1px solid var(--line)' : 'none', paddingLeft: i > 0 ? 16 : 0 }}
              >
                <div className="font-display" style={{ fontSize: 28, fontWeight: 500, lineHeight: 1 }}>
                  {s.value}
                </div>
                <div className="font-mono" style={{ fontSize: 9.5, color: 'var(--text-3)', marginTop: 5, letterSpacing: '0.08em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Driver list */}
        <div className="surface" style={{ padding: 8, overflow: 'hidden' }}>
          {/* Header */}
          <div
            className="font-mono"
            style={{
              display: 'grid',
              gridTemplateColumns: '40px 1fr 100px 60px 100px',
              padding: '14px 18px',
              fontSize: 10, color: 'var(--text-4)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
            }}
          >
            <span>POS</span>
            <span>DRIVER</span>
            <span>TEAM</span>
            <span style={{ textAlign: 'right' }}>WINS</span>
            <span style={{ textAlign: 'right' }}>POINTS</span>
          </div>

          <motion.div
            variants={rowContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {rest.map((s, i) => {
              const teamId = tid(s.team.id)
              const color = s.team.color ?? TEAM_MAP[teamId]?.color ?? '#666'
              const driver = DRIVER_MAP[s.driver.slug]

              return (
                <motion.div
                  key={s.driver.id}
                  variants={rowItem}
                  whileHover={{ y: -3, transition: { duration: 0.25, ease: 'easeOut' } }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '40px 1fr 100px 60px 100px',
                    padding: '16px 18px',
                    borderTop: '1px solid var(--line)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.025)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <span className="font-mono" style={{ fontSize: 13, color: 'var(--text-3)', alignSelf: 'center' }}>
                    {String(s.position).padStart(2, '0')}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 3, height: 24, background: color, borderRadius: 1, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 15, color: 'var(--text-1)', lineHeight: 1.2 }}>{s.driver.firstName} {s.driver.lastName}</div>
                      <div className="font-mono" style={{ fontSize: 9.5, color: 'var(--text-4)', marginTop: 2, letterSpacing: '0.06em' }}>
                        NO.{s.driver.number} · {s.driver.nationality}
                      </div>
                    </div>
                  </div>

                  <span style={{ fontSize: 12, color: 'var(--text-3)', alignSelf: 'center' }}>
                    {TEAM_SHORT[teamId] ?? s.team.name.slice(0, 3).toUpperCase()}
                  </span>

                  <span className="font-mono" style={{ fontSize: 13, color: 'var(--text-2)', textAlign: 'right', alignSelf: 'center' }}>
                    {s.wins}
                  </span>

                  <span className="font-display" style={{ fontSize: 22, fontWeight: 500, textAlign: 'right', alignSelf: 'center' }}>
                    {s.points}
                  </span>

                  {/* Progress bar */}
                  <div
                    style={{
                      position: 'absolute', bottom: 0, left: 18, right: 18,
                      height: 1.5, background: 'rgba(255,255,255,0.04)',
                      overflow: 'hidden',
                    }}
                  >
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: maxPoints > 0 ? s.points / maxPoints : 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut', delay: i * 0.08 }}
                      style={{ height: '100%', background: color, transformOrigin: 'left' }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </>
  )
}

/* ─── Constructors panel ─────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ConstructorsPanel({ standings }: { standings: any[] }) {
  if (standings.length === 0)
    return (
      <>
        <style>{`@media (max-width: 720px) { .constructors-grid { grid-template-columns: 1fr !important; } }`}</style>
        <div className="constructors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="surface" style={{ padding: 24, animation: `pulse 1.8s ease-in-out ${i * 0.08}s infinite` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
                <div>
                  <div style={{ height: 10, width: 40, background: 'var(--ink-3)', borderRadius: 4, marginBottom: 8 }} />
                  <div style={{ height: 20, width: 120, background: 'var(--line-strong)', borderRadius: 4 }} />
                </div>
                <div style={{ height: 32, width: 48, background: 'var(--line-strong)', borderRadius: 4 }} />
              </div>
              <div style={{ height: 4, background: 'var(--ink-3)', borderRadius: 2, marginBottom: 16 }} />
              <div style={{ height: 10, width: '60%', background: 'var(--ink-3)', borderRadius: 4 }} />
            </div>
          ))}
        </div>
      </>
    )

  const sorted = [...standings].sort((a, b) => a.position - b.position)
  const maxPoints = sorted[0]?.points || 1

  return (
    <>
      <style>{`@media (max-width: 720px) { .constructors-grid { grid-template-columns: 1fr !important; } }`}</style>
      <div
        className="constructors-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}
      >
        {sorted.map((s, i) => {
          const teamId = tid(s.team.id)
          const team = TEAM_MAP[teamId]
          const color = s.team.color ?? team?.color ?? '#666'
          const drivers = team?.drivers
            .map(slug => DRIVER_MAP[slug])
            .filter(Boolean)
            .map(d => `${d!.firstName[0]}. ${d!.lastName}`)
            .join(', ') ?? ''

          return (
            <motion.div
              key={s.team.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              whileHover={{ y: -3, transition: { duration: 0.25, ease: 'easeOut' } }}
            >
              <div
                className="surface surface-hover"
                style={{ padding: 24, overflow: 'hidden', position: 'relative' }}
              >
                {/* Left accent bar */}
                <div
                  style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0,
                    width: 3, background: color,
                  }}
                />

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <span className="font-mono" style={{ fontSize: 9.5, color: 'var(--text-4)', letterSpacing: '0.1em', display: 'block', marginBottom: 6 }}>
                      POS · {String(s.position).padStart(2, '0')}
                    </span>
                    <span className="font-display" style={{ fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em' }}>
                      {s.team.name}
                    </span>
                  </div>
                  <span className="font-display" style={{ fontSize: 38, fontWeight: 600, color }}>
                    {s.points}
                  </span>
                </div>

                {/* Progress bar */}
                <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden', marginBottom: 16 }}>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: maxPoints > 0 ? s.points / maxPoints : 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: i * 0.06 }}
                    style={{
                      height: '100%',
                      background: color,
                      borderRadius: 2,
                      boxShadow: `0 0 8px ${color}A8`,
                      transformOrigin: 'left',
                    }}
                  />
                </div>

                {/* Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: 'var(--text-3)' }}>{drivers}</span>
                  <span className="font-mono" style={{ fontSize: 10, color: 'var(--text-4)', letterSpacing: '0.06em' }}>
                    ★ {team?.constructorTitles ?? 0}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}
