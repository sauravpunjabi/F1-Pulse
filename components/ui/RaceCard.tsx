'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Race } from '@/types'

/* ─── Circuit path data ──────────────────────────────────────── */
const CIRCUIT_INFO: Record<string, { laps: number; km: string }> = {
  bahrain:       { laps: 57, km: '5.412' },
  jeddah:        { laps: 50, km: '6.174' },
  albert_park:   { laps: 58, km: '5.278' },
  suzuka:        { laps: 53, km: '5.807' },
  shanghai:      { laps: 56, km: '5.451' },
  miami:         { laps: 57, km: '5.412' },
  imola:         { laps: 63, km: '4.909' },
  monaco:        { laps: 78, km: '3.337' },
  villeneuve:    { laps: 70, km: '4.361' },
  catalunya:     { laps: 66, km: '4.657' },
  red_bull_ring: { laps: 71, km: '4.318' },
  silverstone:   { laps: 52, km: '5.891' },
  hungaroring:   { laps: 70, km: '4.381' },
  spa:           { laps: 44, km: '7.004' },
  zandvoort:     { laps: 72, km: '4.259' },
  monza:         { laps: 53, km: '5.793' },
  baku:          { laps: 51, km: '6.003' },
  marina_bay:    { laps: 62, km: '4.940' },
  americas:      { laps: 56, km: '5.513' },
  rodriguez:     { laps: 71, km: '4.304' },
  interlagos:    { laps: 71, km: '4.309' },
  las_vegas:     { laps: 50, km: '6.120' },
  losail:        { laps: 57, km: '5.380' },
  yas_marina:    { laps: 58, km: '5.281' },
}
const DEFAULT_CIRCUIT = { laps: 60, km: '5.000' }

/* ─── Mini circuit SVG paths (6 presets) ────────────────────── */
const MINI_PATHS = [
  'M40 70 Q35 30,70 20 L175 20 Q218 20,222 50 Q226 76,195 82 L105 84 Q55 86,40 70',
  'M22 52 L22 20 Q22 10,34 8 L100 8 Q115 8,120 24 L124 44 Q128 62,145 62 L205 62 Q245 60,255 42 Q262 24,244 14',
  'M22 18 L208 18 L208 48 L138 48 L138 76 L222 76 L222 88 L22 88 L22 18',
  'M22 68 Q15 25,58 20 L120 18 Q160 15,172 38 Q184 58,205 58 Q228 58,240 36 Q254 12,265 28 L265 56',
  'M20 70 Q14 26,55 18 L125 14 Q175 10,198 38 Q218 65,196 82 Q175 96,145 87 L74 83 Q36 80,20 70',
  'M26 44 L72 44 Q84 20,106 18 L158 18 Q180 18,190 44 L218 44 Q240 44,250 65 Q257 85,228 90 L76 90 Q42 90,22 68 L26 44',
]

type Status = 'live' | 'next' | 'finished' | 'upcoming'

function getStatus(dateStr: string): Status {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const raceDate = new Date(dateStr)
  raceDate.setHours(0, 0, 0, 0)
  const diff = Math.round((raceDate.getTime() - today.getTime()) / 86400000)
  if (diff < 0) return 'finished'
  if (diff === 0) return 'live'
  if (diff <= 7) return 'next'
  return 'upcoming'
}

function MiniCircuit({ idx, accent }: { idx: number; accent: boolean }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 280 100"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block' }}
    >
      <path
        d={MINI_PATHS[idx]}
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={MINI_PATHS[idx]}
        fill="none"
        stroke={accent ? 'var(--accent)' : 'rgba(255,255,255,0.4)'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StatusTag({ status }: { status: Status }) {
  if (status === 'live')
    return <span className="tag-live">LIVE</span>
  if (status === 'next')
    return (
      <span
        className="font-mono"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '3px 9px',
          borderRadius: 999,
          border: '1px solid rgba(225,6,0,0.5)',
          background: 'rgba(225,6,0,0.1)',
          color: 'var(--accent)',
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.06em',
        }}
      >
        NEXT UP
      </span>
    )
  if (status === 'finished')
    return <span className="tag" style={{ fontSize: 10 }}>Finished</span>
  return <span className="tag" style={{ fontSize: 10 }}>Upcoming</span>
}

interface Props {
  race: Race
  index: number
}

export default function RaceCard({ race, index }: Props) {
  const status = getStatus(race.date)
  const isHighlighted = status === 'live' || status === 'next'
  const circuitIdx = (race.round - 1) % 6
  const { laps, km } = CIRCUIT_INFO[race.circuitId] ?? DEFAULT_CIRCUIT

  const dateStr = new Date(race.date)
    .toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    .toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
    >
      <div
        className="surface"
        style={{
          padding: 22,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          ...(isHighlighted && {
            borderColor: 'rgba(225,6,0,0.35)',
            background: 'linear-gradient(180deg, rgba(225,6,0,0.06), rgba(255,255,255,0.005))',
          }),
        }}
      >
        {status === 'live' && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(225,6,0,0.12) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span
            className="font-mono"
            style={{ fontSize: 10, color: 'var(--text-3)', letterSpacing: '0.1em' }}
          >
            ROUND {String(race.round).padStart(2, '0')}
          </span>
          <StatusTag status={status} />
        </div>

        {/* Mini circuit slot */}
        <div
          className="slot"
          style={{ height: 88, borderRadius: 12, marginBottom: 22, overflow: 'hidden' }}
        >
          <MiniCircuit idx={circuitIdx} accent={isHighlighted} />
        </div>

        {/* Location */}
        <div
          className="font-display"
          style={{
            fontSize: 26,
            fontWeight: 500,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
          }}
        >
          {race.locality}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 4, marginBottom: 22 }}>
          {race.country}
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: 16,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div>
            <div
              className="font-mono"
              style={{ fontSize: 14, color: 'var(--text-1)', letterSpacing: '0.04em' }}
            >
              {dateStr}
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: 9.5,
                color: 'var(--text-4)',
                letterSpacing: '0.06em',
                marginTop: 4,
              }}
            >
              {laps}L · {km} KM
            </div>
          </div>

          {status === 'finished' ? (
            <div style={{ textAlign: 'right' }}>
              <div
                className="font-mono"
                style={{ fontSize: 9, color: 'var(--text-4)', letterSpacing: '0.1em', marginBottom: 3 }}
              >
                WINNER
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-2)' }}>
                {race.results?.[0]?.driverName ?? '—'}
              </div>
            </div>
          ) : (
            <button
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                border: '1px solid var(--line)',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <ArrowRight size={12} color="var(--text-2)" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
