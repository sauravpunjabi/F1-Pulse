interface SectionHeaderProps {
  kicker: string
  title: string
  accent?: string
  sub?: string
  right?: React.ReactNode
}

export default function SectionHeader({ kicker, title, accent, sub, right }: SectionHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 56,
        flexWrap: 'wrap',
        gap: 24,
      }}
    >
      <div style={{ maxWidth: 680 }}>
        <p className="eyebrow" style={{ marginBottom: 22 }}>
          {kicker}
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 500,
            letterSpacing: '-0.035em',
            lineHeight: 1,
            marginBottom: sub ? 16 : 0,
          }}
        >
          {title}
          {accent && <span style={{ color: 'var(--accent)' }}>{accent}</span>}
        </h2>
        {sub && (
          <p style={{ fontSize: 16, color: 'var(--text-3)', maxWidth: 560 }}>
            {sub}
          </p>
        )}
      </div>
      {right && <div style={{ flexShrink: 0 }}>{right}</div>}
    </div>
  )
}
