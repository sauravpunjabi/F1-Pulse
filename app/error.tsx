'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

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
        System Error{error.digest ? ` · ${error.digest}` : ''}
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
        Something went off track.
      </h1>

      <p
        style={{
          fontSize: 16,
          color: 'var(--text-3)',
          maxWidth: 460,
          lineHeight: 1.6,
        }}
      >
        The data pipeline hit a barrier. Refresh to retry, or head back to the grid.
      </p>

      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <button
          onClick={reset}
          className="btn btn-primary"
          style={{ padding: '12px 28px', fontSize: 14 }}
        >
          Try again →
        </button>

        <a href="/" className="btn btn-ghost" style={{ padding: '12px 28px', fontSize: 14 }}>
          Back to home
        </a>
      </div>
    </div>
  )
}
