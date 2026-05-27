'use client'

const POSITIONS = [
  { pos: 'P01', code: 'VER', gap: 'LEADER', color: '#3671C6' },
  { pos: 'P02', code: 'NOR', gap: '+0.842', color: '#FF8000' },
  { pos: 'P03', code: 'LEC', gap: '+1.294', color: '#E8002D' },
  { pos: 'P04', code: 'HAM', gap: '+2.891', color: '#E8002D' },
  { pos: 'P05', code: 'PIA', gap: '+3.447', color: '#FF8000' },
  { pos: 'P06', code: 'RUS', gap: '+4.102', color: '#27F4D2' },
]

function TickerSet() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', flexShrink: 0 }}>
      <span
        className="font-mono"
        style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.12em', padding: '0 32px' }}
      >
        ● LIVE · MONACO GP · LAP 42
      </span>

      {POSITIONS.map((p, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '0 18px' }}>
          <span
            className="font-mono"
            style={{ fontSize: 10, color: 'var(--text-4)', letterSpacing: '0.06em' }}
          >
            {p.pos}
          </span>
          <div
            style={{ width: 3, height: 12, background: p.color, borderRadius: 1, flexShrink: 0 }}
          />
          <span
            className="font-mono"
            style={{ fontSize: 10, color: '#fff', letterSpacing: '0.06em' }}
          >
            {p.code}
          </span>
          <span
            className="font-mono"
            style={{ fontSize: 10, color: 'var(--text-3)', letterSpacing: '0.06em' }}
          >
            {p.gap}
          </span>
        </div>
      ))}

      <div style={{ width: 1, height: 14, background: 'var(--line)', flexShrink: 0 }} />
    </div>
  )
}

export default function Ticker() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 44,
        borderTop: '1px solid var(--line)',
        background: 'rgba(5,6,8,0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          animation: 'marquee 50s linear infinite',
          willChange: 'transform',
        }}
      >
        <TickerSet />
        <TickerSet />
      </div>
    </div>
  )
}
