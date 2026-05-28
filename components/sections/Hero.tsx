'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getRaceSchedule } from '@/lib/api'
import type { Race } from '@/types'
import HeroComposition from '@/components/ui/HeroComposition'
import Ticker from '@/components/ui/Ticker'

const FALLBACK_RACE: Race = {
  round: 8,
  raceName: 'Monaco Grand Prix',
  circuitId: 'monaco',
  circuitName: 'Circuit de Monaco',
  country: 'Monaco',
  locality: 'Monte-Carlo',
  date: '2026-05-24',
  season: '2026',
}

const STATS = [
  { v: '12.4M', l: 'datapoints / GP' },
  { v: '76',   l: 'years archived' },
  { v: '24',   l: 'rounds · 24 countries' },
  { v: '1042', l: 'drivers indexed' },
]

export default function Hero() {
  const [nextRace, setNextRace] = useState<Race>(FALLBACK_RACE)

  useEffect(() => {
    getRaceSchedule().then(races => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const next = races.find(r => new Date(r.date) >= today)
      if (next) setNextRace(next)
    })
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 96,
        paddingBottom: 80,
        overflow: 'hidden',
      }}
    >
      {/* Background 1: grid */}
      <div
        className="grid-bg"
        style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }}
      />

      {/* Background 2: red glow */}
      <div
        className="glow-red"
        style={{
          position: 'absolute',
          right: -300,
          bottom: -300,
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'var(--accent-glow)',
          filter: 'blur(140px)',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      {/* Background 3: yellow radial */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 80% 90%, rgba(247,208,0,0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 1380,
          width: '100%',
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <style>{`
          @media (max-width: 980px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-comp-wrap { display: none !important; }
          }
          @media (max-width: 375px) {
            .hero-stats { grid-template-columns: repeat(2,1fr) !important; }
          }
        `}</style>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="eyebrow" style={{ marginBottom: 32 }}>
              Season 2026 · Round 08 / 24
            </p>

            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(48px, 7.2vw, 116px)',
                fontWeight: 600,
                letterSpacing: '-0.045em',
                lineHeight: 0.92,
                marginBottom: 28,
              }}
            >
              <span style={{ display: 'block', color: 'var(--text-1)' }}>Feel the</span>
              <em style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--accent)' }}>
                speed.
              </em>
            </h1>

            <p
              style={{
                fontSize: 18,
                color: 'var(--text-2)',
                maxWidth: 520,
                lineHeight: 1.5,
                marginBottom: 40,
              }}
            >
              Live timing, telemetry and seven decades of motorsport history — in one premium
              dashboard.
            </p>

            <div style={{ display: 'flex', gap: 12, marginBottom: 56 }}>
              <button className="btn btn-primary">Explore the season →</button>
              <button className="btn btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: 'var(--accent)', fontSize: 8, lineHeight: 1 }}>●</span>
                Watch live timing
              </button>
            </div>

            {/* Stats strip */}
            <div
              className="hero-stats"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                borderTop: '1px solid var(--line)',
                borderBottom: '1px solid var(--line)',
                padding: '20px 0',
              }}
            >
              {STATS.map((s, i) => (
                <div
                  key={s.l}
                  style={{
                    borderLeft: i > 0 ? '1px solid var(--line)' : 'none',
                    paddingLeft: i > 0 ? 18 : 0,
                  }}
                >
                  <div
                    className="font-display"
                    style={{ fontSize: 26, fontWeight: 500, lineHeight: 1, color: 'var(--text-1)' }}
                  >
                    {s.v}
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: 9.5,
                      color: 'var(--text-3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginTop: 6,
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column — hidden below 980px ── */}
          <div className="hero-comp-wrap">
            <HeroComposition nextRace={nextRace} />
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  )
}
