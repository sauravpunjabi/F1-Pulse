'use client'

import { motion } from 'framer-motion'
import type { Race } from '@/types'

interface Props {
  nextRace: Race
}

const SPARKLINE = '0,22 20,18 40,15 55,20 70,10 85,16 100,7 115,4 128,10 140,6'

function CornerTick({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const base: React.CSSProperties = { position: 'absolute', width: 18, height: 18 }
  const sides: Record<string, React.CSSProperties> = {
    tl: { top: 10, left: 10, borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' },
    tr: { top: 10, right: 10, borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' },
    bl: { bottom: 10, left: 10, borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' },
    br: { bottom: 10, right: 10, borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' },
  }
  return <div style={{ ...base, ...sides[pos] }} />
}

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }).toUpperCase()
}

export default function HeroComposition({ nextRace }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ position: 'relative', aspectRatio: '1 / 1.05' }}
    >
      {/* ── 1. Main slot ── */}
      <div
        className="slot"
        style={{
          position: 'absolute',
          inset: '6% 4% 28% 8%',
          borderRadius: 22,
          flexDirection: 'column',
          gap: 8,
          overflow: 'hidden',
        }}
      >
        <CornerTick pos="tl" />
        <CornerTick pos="tr" />
        <CornerTick pos="bl" />
        <CornerTick pos="br" />

        <span
          className="font-mono"
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            fontSize: 9.5,
            color: 'var(--text-3)',
            letterSpacing: '0.1em',
          }}
        >
          CHASSIS · RB21
        </span>

        <span
          className="font-mono"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            fontSize: 9.5,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
          }}
        >
          ● LIVE
        </span>

        <span>↓ DROP CAR RENDER ↓</span>
        <span style={{ fontSize: 9.5, letterSpacing: '0.05em' }}>3/4 front view · transparent bg</span>
      </div>

      {/* ── 2. Speed dial ── */}
      <div
        className="surface"
        style={{
          position: 'absolute',
          left: 0,
          top: '14%',
          width: 156,
          padding: 16,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(10,12,18,0.82)',
        }}
      >
        <span
          className="font-mono"
          style={{
            display: 'block',
            fontSize: 9,
            color: 'var(--text-3)',
            letterSpacing: '0.1em',
            marginBottom: 8,
          }}
        >
          SPEED · KPH
        </span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 10 }}>
          <span
            className="font-display"
            style={{ fontSize: 42, fontWeight: 600, lineHeight: 1, color: 'var(--text-1)' }}
          >
            327
          </span>
          <span className="font-mono" style={{ fontSize: 11, color: 'var(--accent)' }}>▲4.2</span>
        </div>
        <svg width={140} height={28} viewBox="0 0 140 28" style={{ display: 'block' }}>
          <defs>
            <linearGradient id="hc-spark" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#E10600" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#E10600" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={`${SPARKLINE} 140,28 0,28`} fill="url(#hc-spark)" />
          <polyline
            points={SPARKLINE}
            fill="none"
            stroke="#E10600"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ── 3. Lap card ── */}
      <div
        className="surface"
        style={{
          position: 'absolute',
          right: 8,
          top: '0%',
          width: 180,
          padding: 16,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(10,12,18,0.82)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <span
            className="font-mono"
            style={{ fontSize: 9, color: 'var(--text-3)', letterSpacing: '0.1em' }}
          >
            LAP
          </span>
          <span className="tag-live">LIVE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 12 }}>
          <span className="font-display" style={{ fontSize: 36, fontWeight: 600, lineHeight: 1 }}>
            42
          </span>
          <span style={{ fontSize: 13, color: 'var(--text-3)' }}>/ 63</span>
        </div>
        <div
          style={{
            height: 3,
            borderRadius: 2,
            background: 'rgba(255,255,255,0.06)',
            overflow: 'hidden',
            marginBottom: 10,
          }}
        >
          <div
            style={{
              width: '66%',
              height: '100%',
              background: 'var(--accent)',
              borderRadius: 2,
              boxShadow: '0 0 8px var(--accent-glow)',
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          <span className="font-mono" style={{ fontSize: 9.5, color: 'var(--text-3)' }}>
            BEST ·
          </span>
          <span className="font-mono" style={{ fontSize: 9.5, color: 'var(--yellow)' }}>
            1:14.273
          </span>
        </div>
      </div>

      {/* ── 4. Next race card ── */}
      <div
        className="surface"
        style={{
          position: 'absolute',
          left: '6%',
          bottom: 0,
          right: '6%',
          padding: 22,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(10,12,18,0.82)',
        }}
      >
        <span
          className="font-mono"
          style={{
            display: 'block',
            fontSize: 9.5,
            color: 'var(--text-3)',
            letterSpacing: '0.1em',
            marginBottom: 10,
          }}
        >
          NEXT RACE · ROUND {String(nextRace.round).padStart(2, '0')}
        </span>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: 14,
          }}
        >
          <span className="font-display" style={{ fontSize: 26, fontWeight: 600, lineHeight: 1 }}>
            {nextRace.locality}
            <span
              style={{ fontSize: 14, fontWeight: 400, color: 'var(--text-3)', marginLeft: 8 }}
            >
              {nextRace.country}
            </span>
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: 11,
              color: 'var(--accent)',
              letterSpacing: '0.06em',
              whiteSpace: 'nowrap',
              marginLeft: 12,
            }}
          >
            {fmtDate(nextRace.date)}
          </span>
        </div>

        <svg
          width="100%"
          viewBox="0 0 400 70"
          style={{ display: 'block', marginBottom: 8, overflow: 'visible' }}
        >
          <path
            d="M20 50 C40 50,50 20,90 20 L150 20 C180 20,180 45,210 45 L240 45 C270 45,260 12,290 12 L330 12 C360 12,370 50,380 50"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 50 C40 50,50 20,90 20 L150 20 C180 20,180 45,210 45 L240 45 C270 45,260 12,290 12 L330 12 C360 12,370 50,380 50"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.7"
          />
          <circle cx="20" cy="50" r="3" fill="var(--accent)" />
        </svg>

        <span
          className="font-mono"
          style={{
            display: 'block',
            fontSize: 9,
            color: 'var(--text-4)',
            letterSpacing: '0.1em',
            textAlign: 'right',
          }}
        >
          3.337 KM · 78 LAPS
        </span>
      </div>

      {/* ── 5. Telemetry ── */}
      <div
        className="font-mono"
        style={{
          position: 'absolute',
          right: '-6%',
          bottom: '32%',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        {([
          { label: 'DRS',  value: 'OPEN',   color: '#22c55e' },
          { label: 'TYRE', value: 'SOFT',   color: 'var(--accent)' },
          { label: 'GAP',  value: '+1.842', color: 'var(--text-1)' },
        ] as const).map(row => (
          <div
            key={row.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 12,
              fontSize: 9.5,
              letterSpacing: '0.15em',
            }}
          >
            <span style={{ color: 'var(--text-3)' }}>{row.label}</span>
            <span style={{ color: row.color }}>· {row.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
