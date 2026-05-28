'use client'

import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import RaceCard from '@/components/ui/RaceCard'

type Filter = 'all' | 'upcoming' | 'past'

interface CalendarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  races: any[]
}

export default function RaceCalendar({ races }: CalendarProps) {
  const [filter, setFilter] = useState<Filter>('all')

  const displayed = races.filter(r => {
    if (filter === 'all') return true
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const isPast = new Date(r.date) < today
    return filter === 'past' ? isPast : !isPast
  })

  const filterRight = (
    <div
      style={{
        display: 'flex',
        gap: 6,
        padding: 4,
        border: '1px solid var(--line)',
        borderRadius: 999,
        background: 'rgba(255,255,255,0.02)',
      }}
    >
      {(['all', 'upcoming', 'past'] as Filter[]).map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className="font-mono"
          style={{
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            padding: '8px 14px',
            borderRadius: 999,
            border: 'none',
            cursor: 'pointer',
            background: filter === f ? 'var(--accent)' : 'transparent',
            color: filter === f ? '#fff' : 'var(--text-3)',
            transition: 'all 0.15s ease',
          }}
        >
          {f}
        </button>
      ))}
    </div>
  )

  return (
    <section id="calendar" style={{ padding: '112px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '0 32px' }}>
        <style>{`
          @media (max-width: 980px) { .cal-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 640px) { .cal-grid { grid-template-columns: 1fr !important; } }
        `}</style>

        <SectionHeader
          kicker="Calendar · 2026"
          title="Twenty-four rounds. "
          accent="One title."
          sub="Every Grand Prix on the 2026 calendar — with circuit data and results."
          right={filterRight}
        />

        <div
          className="cal-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}
        >
          {displayed.map((race, i) => (
            <RaceCard key={race.circuitId} race={race} index={i} />
          ))}

          {races.length === 0 &&
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="surface"
                style={{
                  padding: 24,
                  animation: `pulse 1.8s ease-in-out ${i * 0.12}s infinite`,
                }}
              >
                <div style={{ height: 10, width: '35%', background: 'var(--line-strong)', borderRadius: 4, marginBottom: 14 }} />
                <div style={{ height: 20, width: '65%', background: 'var(--line-strong)', borderRadius: 4, marginBottom: 8 }} />
                <div style={{ height: 10, width: '45%', background: 'var(--ink-3)', borderRadius: 4, marginBottom: 28 }} />
                <div style={{ height: 1, background: 'var(--line)', marginBottom: 18 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ height: 10, width: '28%', background: 'var(--ink-3)', borderRadius: 4 }} />
                  <div style={{ height: 10, width: '18%', background: 'var(--ink-3)', borderRadius: 4 }} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
