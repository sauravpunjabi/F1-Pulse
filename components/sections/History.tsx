'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const ERAS = [
  {
    years: '1950–1958',
    title: 'The Fangio Epoch',
    color: '#9CA3AF',
    desc: 'Juan Manuel Fangio won five world championships in seven seasons for four different constructors. A record of adaptability and genius that may never be matched.',
  },
  {
    years: '1988–1994',
    title: 'Senna & Prost',
    color: '#E8002D',
    desc: 'McLaren-Honda dominance saw Prost and Senna win four consecutive titles. Their rivalry — brutal, brilliant, and ending in tragedy at Imola 1994 — defined an era forever.',
  },
  {
    years: '2000–2004',
    title: 'Schumacher Unstoppable',
    color: '#DC0000',
    desc: 'Michael Schumacher and Ferrari won five consecutive Drivers and six consecutive Constructors titles. The most complete team ever assembled in Formula 1 history.',
  },
  {
    years: '2007–2008',
    title: 'Hamilton Arrival',
    color: '#C0C0C0',
    desc: 'Lewis Hamilton became World Champion in 2008 by a single point — overtaking Timo Glock on the final lap at Interlagos. The most dramatic title in modern F1 history.',
  },
  {
    years: '2014–2021',
    title: 'Silver Arrows Supremacy',
    color: '#27F4D2',
    desc: 'Mercedes won eight consecutive Constructors Championships. Hamilton claimed six of his seven world titles in this era, cementing his legacy as the greatest of all time.',
  },
  {
    years: '2021–2025',
    title: 'The Verstappen Era',
    color: '#3671C6',
    desc: 'Max Verstappen won four consecutive championships. His 2023 season — 19 wins from 22 races — is statistically the greatest single season in Formula 1 history.',
  },
]

/* Each era slot is ITEM_H px tall. The dot sits at ITEM_H/2 (= 240px),
   perfectly aligning with the center line which is at top:50% of the
   inner flex container (padding-top = padding-bottom = 120px). */
const ITEM_H = 480
const HALF = (ITEM_H - 8) / 2 // 236px — equal space above and below the 8px dot

function EraCard({ era, i }: { era: (typeof ERAS)[number]; i: number }) {
  const isAbove = i % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
      className="surface"
      style={{ padding: 24, position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: era.color,
        }}
      />
      <p
        className="font-mono"
        style={{ fontSize: 10, color: 'var(--text-4)', letterSpacing: '0.22em', marginBottom: 4 }}
      >
        {era.years}
      </p>
      <h3
        className="font-display"
        style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em', marginTop: 4, marginBottom: 8 }}
      >
        {era.title}
      </h3>
      <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.5 }}>{era.desc}</p>
    </motion.div>
  )
}

function Dot({ color }: { color: string }) {
  return (
    <div
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 12px ${color}`,
        flexShrink: 0,
      }}
    />
  )
}

export default function History() {
  return (
    <section id="history" style={{ padding: '112px 0' }}>
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>
        <SectionHeader
          kicker="Legacy · 1950—2026"
          title="Seven decades of "
          accent="speed."
        />
      </div>

      <div style={{ overflowX: 'auto', paddingBottom: 32, position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            gap: 48,
            alignItems: 'center',
            paddingTop: 120,
            paddingBottom: 120,
            minWidth: 'max-content',
            paddingLeft: 48,
            paddingRight: 48,
            position: 'relative',
          }}
        >
          {/* Horizontal center line */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: 1,
              background: 'var(--line-strong)',
              pointerEvents: 'none',
            }}
          />

          {ERAS.map((era, i) => {
            const isAbove = i % 2 === 0
            return (
              <div
                key={era.years}
                style={{
                  height: ITEM_H,
                  width: 280,
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {isAbove ? (
                  <>
                    <div
                      style={{
                        height: HALF,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        paddingBottom: 16,
                      }}
                    >
                      <EraCard era={era} i={i} />
                    </div>
                    <Dot color={era.color} />
                    <div style={{ height: HALF }} />
                  </>
                ) : (
                  <>
                    <div style={{ height: HALF }} />
                    <Dot color={era.color} />
                    <div
                      style={{
                        height: HALF,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        paddingTop: 16,
                      }}
                    >
                      <EraCard era={era} i={i} />
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
