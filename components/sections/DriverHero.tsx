'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { TEAM_MAP } from '@/constants/grid'
import type { Driver } from '@/types'

type WikiData = {
  image: string | null
  thumbnail: string | null
  bio: string | null
  url: string | null
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function DriverHero({ driver, wiki }: { driver: Driver; wiki: WikiData }) {
  const team = TEAM_MAP[driver.teamId]
  const color = team?.color ?? '#E10600'

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 120,
        paddingBottom: 88,
        borderTop: `4px solid ${color}`,
      }}
    >
      <style>{`
        @media (max-width: 980px) { .driver-portrait { display: none !important; } }
      `}</style>

      {/* Number watermark */}
      <div
        className="font-display"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          fontSize: 'clamp(120px, 18vw, 280px)',
          fontWeight: 700,
          letterSpacing: '-0.06em',
          lineHeight: 0.85,
          color,
          opacity: 0.08,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {driver.number}
      </div>

      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: `radial-gradient(ellipse at 80% 0%, ${color}18, transparent 55%)`,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1380,
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 48,
        }}
      >
        {/* Left: text content */}
        <motion.div variants={container} initial="hidden" animate="show" style={{ flex: 1, minWidth: 0 }}>
          <motion.p
            variants={item}
            className="eyebrow"
            style={{ marginBottom: 20 }}
          >
            NO.{driver.number} · {driver.nationality} · {team?.name ?? driver.teamId}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display"
            style={{
              fontSize: 'clamp(48px, 6vw, 96px)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              position: 'relative',
              zIndex: 1,
              marginBottom: 24,
            }}
          >
            {driver.firstName}{' '}
            <span style={{ color }}>{driver.lastName}</span>
          </motion.h1>

          <motion.div
            variants={item}
            style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}
          >
            <Link
              href={`/teams/${team?.id ?? driver.teamId}`}
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: '0.15em',
                color,
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'opacity 0.15s',
              }}
            >
              {team?.name ?? driver.teamId} →
            </Link>
            <span style={{ color: 'var(--line-strong)' }}>·</span>
            <span style={{ fontSize: 15, color: 'var(--text-2)' }}>
              {driver.flag} {driver.nationality}
            </span>
            {driver.isRookie && (
              <>
                <span style={{ color: 'var(--line-strong)' }}>·</span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    color: 'var(--yellow)',
                    textTransform: 'uppercase',
                  }}
                >
                  Rookie
                </span>
              </>
            )}
          </motion.div>
        </motion.div>

        {/* Right: portrait */}
        {wiki.image && (
          <div
            className="driver-portrait"
            style={{
              position: 'relative',
              width: 300,
              height: 420,
              flexShrink: 0,
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <Image
              src={wiki.image}
              alt={driver.slug}
              fill
              className="object-cover object-top"
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </section>
  )
}
