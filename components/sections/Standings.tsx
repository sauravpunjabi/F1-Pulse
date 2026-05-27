'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getDriverStandings, getConstructorStandings } from '@/lib/api'
import type { DriverStanding, ConstructorStanding } from '@/types'
import { TEAM_MAP, DRIVER_MAP } from '@/constants/data'
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

export default function Standings() {
  const [mode, setMode] = useState<Mode>('drivers')
  const [drivers, setDrivers] = useState<DriverStanding[]>([])
  const [constructors, setConstructors] = useState<ConstructorStanding[]>([])

  useEffect(() => {
    Promise.all([getDriverStandings(), getConstructorStandings()]).then(
      ([d, c]) => { setDrivers(d); setConstructors(c) }
    )
  }, [])

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
function DriversPanel({ standings }: { standings: DriverStanding[] }) {
  if (standings.length === 0)
    return <div className="slot" style={{ minHeight: 400 }}>Loading standings…</div>

  const leader = standings[0]
  const rest = standings.slice(1)
  const maxPoints = leader.points || 1
  const leaderTeamId = tid(leader.teamId)
  const leaderTeamColor = TEAM_MAP[leaderTeamId]?.color ?? '#E10600'
  const leaderDriver = DRIVER_MAP[leader.driverId]

  return (
    <>
      <style>{`@media (max-width: 980px) { .standings-grid { grid-template-columns: 1fr !important; } }`}</style>
      <div
        className="standings-grid"
        style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 18 }}
      >
        {/* Leader card */}
        <div
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
            {leader.driverName}
          </div>

          {/* Team · nationality | points */}
          <div
            style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: 13, color: 'var(--text-3)' }}>
              {leader.teamName} · {leader.nationality}
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
        </div>

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

          {rest.map((s, i) => {
            const teamId = tid(s.teamId)
            const color = TEAM_MAP[teamId]?.color ?? '#666'
            const driver = DRIVER_MAP[s.driverId]

            return (
              <div
                key={s.driverId}
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
                    <div style={{ fontSize: 15, color: 'var(--text-1)', lineHeight: 1.2 }}>{s.driverName}</div>
                    <div className="font-mono" style={{ fontSize: 9.5, color: 'var(--text-4)', marginTop: 2, letterSpacing: '0.06em' }}>
                      NO.{driver?.number ?? '?'} · {s.nationality}
                    </div>
                  </div>
                </div>

                <span style={{ fontSize: 12, color: 'var(--text-3)', alignSelf: 'center' }}>
                  {TEAM_SHORT[teamId] ?? s.teamName.slice(0, 3).toUpperCase()}
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
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

/* ─── Constructors panel ─────────────────────────────────────── */
function ConstructorsPanel({ standings }: { standings: ConstructorStanding[] }) {
  if (standings.length === 0)
    return <div className="slot" style={{ minHeight: 400 }}>Loading standings…</div>

  const maxPoints = standings[0]?.points || 1

  return (
    <>
      <style>{`@media (max-width: 720px) { .constructors-grid { grid-template-columns: 1fr !important; } }`}</style>
      <div
        className="constructors-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }}
      >
        {standings.map((s, i) => {
          const teamId = tid(s.teamId)
          const team = TEAM_MAP[teamId]
          const color = team?.color ?? '#666'
          const drivers = team?.drivers
            .map(slug => DRIVER_MAP[slug])
            .filter(Boolean)
            .map(d => `${d!.firstName[0]}. ${d!.lastName}`)
            .join(', ') ?? ''

          return (
            <motion.div
              key={s.teamId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
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
                      POS · {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display" style={{ fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em' }}>
                      {s.teamName}
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
