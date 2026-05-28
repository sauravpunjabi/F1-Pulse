import Link from 'next/link'
import { DRIVER_MAP } from '@/constants/grid'
import { CAREER } from '@/constants/careerStats'
import type { Team } from '@/types'

export default function TeamDrivers({ team }: { team: Team }) {
  const drivers = team.drivers.map((slug) => DRIVER_MAP[slug]).filter(Boolean)

  return (
    <section style={{ padding: '0 0 120px' }}>
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>
        <p className="eyebrow" style={{ marginBottom: 28 }}>2026 Lineup</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
          }}
        >
          {drivers.map((driver) => {
            const career = CAREER[driver.slug]
            return (
              <Link
                key={driver.slug}
                href={`/drivers/${driver.slug}`}
                className="surface surface-hover"
                style={{
                  padding: 32,
                  textDecoration: 'none',
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Team-color left accent */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    background: team.color,
                  }}
                />

                {/* Large number watermark */}
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(72px, 10vw, 120px)',
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: team.color,
                    opacity: 0.18,
                    marginBottom: 12,
                    userSelect: 'none',
                  }}
                >
                  {driver.number}
                </p>

                {/* Nationality + name */}
                <p
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    color: 'var(--text-4)',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  {driver.flag} {driver.nationality}
                  {driver.isRookie && (
                    <span style={{ marginLeft: 10, color: team.color }}>Rookie</span>
                  )}
                </p>

                <h3
                  className="font-display"
                  style={{
                    fontSize: 28,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-1)',
                    marginBottom: 24,
                  }}
                >
                  {driver.name}
                </h3>

                {/* Career stats */}
                {career && (
                  <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                    {[
                      { label: 'Titles',  value: career.titles },
                      { label: 'Wins',    value: career.wins },
                      { label: 'Podiums', value: career.podiums },
                      { label: 'Points',  value: career.points.toLocaleString() },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p
                          className="font-display"
                          style={{ fontSize: 22, fontWeight: 500, color: 'var(--text-1)', lineHeight: 1 }}
                        >
                          {value}
                        </p>
                        <p
                          className="font-mono"
                          style={{
                            fontSize: 9,
                            color: 'var(--text-4)',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            marginTop: 4,
                          }}
                        >
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Arrow */}
                <p
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    color: team.color,
                    letterSpacing: '0.1em',
                    marginTop: 24,
                    opacity: 0.7,
                  }}
                >
                  View profile →
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
