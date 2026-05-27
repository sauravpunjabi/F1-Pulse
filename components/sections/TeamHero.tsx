import { TEAM_HISTORIES } from '@/constants/histories'
import type { Team } from '@/types'

export default function TeamHero({ team }: { team: Team }) {
  const hist = TEAM_HISTORIES[team.id]
  const yearsInF1 = 2026 - (hist?.firstSeason ?? team.founded)

  const stats = [
    { label: "Constructors' Titles", value: team.constructorTitles },
    { label: 'Race Wins',            value: hist?.wins ?? 0 },
    { label: 'Podiums',              value: hist?.podiums ?? 0 },
    { label: 'Years in F1',          value: yearsInF1 },
  ]

  return (
    <div>
      {/* 4px team-color top bar */}
      <div style={{ height: 4, background: team.color }} />

      <section style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: 1380, margin: '0 auto', padding: '80px 32px 0' }}>

          {/* Team name */}
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(64px, 8vw, 120px)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              marginBottom: 28,
              color: 'var(--text-1)',
            }}
          >
            {team.name}
          </h1>

          {/* Meta row */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <span
              className="font-mono"
              style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.14em', textTransform: 'uppercase' }}
            >
              Est. {team.founded}
            </span>
            <span style={{ width: 1, height: 12, background: 'var(--line-strong)' }} />
            <span
              className="font-mono"
              style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.14em', textTransform: 'uppercase' }}
            >
              {team.base}
            </span>
            {team.teamPrincipal && (
              <>
                <span style={{ width: 1, height: 12, background: 'var(--line-strong)' }} />
                <span
                  className="font-mono"
                  style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.14em', textTransform: 'uppercase' }}
                >
                  TP · {team.teamPrincipal}
                </span>
              </>
            )}
            {team.engine && (
              <>
                <span style={{ width: 1, height: 12, background: 'var(--line-strong)' }} />
                <span
                  className="font-mono"
                  style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.14em', textTransform: 'uppercase' }}
                >
                  {team.engine} Power
                </span>
              </>
            )}
          </div>

          {/* Stats strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              marginTop: 64,
              borderTop: '1px solid var(--line)',
            }}
          >
            {stats.map(({ label, value }, i) => (
              <div
                key={label}
                style={{
                  padding: '32px 24px',
                  borderRight: i < stats.length - 1 ? '1px solid var(--line)' : undefined,
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(36px, 4vw, 56px)',
                    fontWeight: 500,
                    color: 'var(--text-1)',
                    lineHeight: 1,
                  }}
                >
                  {value}
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 9.5,
                    color: 'var(--text-4)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginTop: 10,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
