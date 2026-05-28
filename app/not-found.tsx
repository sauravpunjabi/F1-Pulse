import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: '32px 24px',
        textAlign: 'center',
      }}
    >
      <p
        className="font-mono"
        style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}
      >
        404 · Not Found
      </p>

      <h1
        className="font-display"
        style={{
          fontSize: 'clamp(32px,5vw,64px)',
          fontWeight: 600,
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          maxWidth: 600,
        }}
      >
        You&apos;ve gone off circuit.
      </h1>

      <p
        style={{
          fontSize: 16,
          color: 'var(--text-3)',
          maxWidth: 460,
          lineHeight: 1.6,
        }}
      >
        This page doesn&apos;t exist in our database. Let&apos;s get you back to the grid.
      </p>

      <Link
        href="/"
        className="btn btn-primary"
        style={{ padding: '12px 28px', fontSize: 14, marginTop: 8 }}
      >
        Back to home →
      </Link>
    </div>
  )
}
