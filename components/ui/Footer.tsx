import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const NAV_COLS = [
  {
    title: 'Platform',
    links: [
      { label: 'Home',           href: '/' },
      { label: 'Live Standings', href: '/#standings' },
      { label: 'Drivers',        href: '/#drivers' },
      { label: 'Teams',          href: '/#teams' },
      { label: 'Calendar',       href: '/#calendar' },
      { label: 'Compare',        href: '/#compare' },
    ],
  },
  {
    title: 'Archive',
    links: [
      { label: '2025 Season',          href: '/archive/2025' },
      { label: '2024 Season',          href: '/archive/2024' },
      { label: 'All-time Records',     href: '/records' },
      { label: 'Championship History', href: '/#history' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About',    href: '/about' },
      { label: 'Blog',     href: '/blog' },
      { label: 'Press',    href: '/press' },
      { label: 'Careers',  href: '/careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use',   href: '/terms' },
      { label: 'Cookie Settings', href: '/cookies' },
      { label: 'Accessibility',  href: '/accessibility' },
    ],
  },
]

const SOCIALS = ['X', 'IG', 'YT', 'TT']

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink-1)', borderTop: '1px solid var(--line)' }}>
      <style>{`
        @media (max-width: 980px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        .footer-social:hover {
          border-color: var(--line-strong) !important;
          color: var(--text-1) !important;
        }
        .footer-link:hover { color: var(--text-1) !important; }
      `}</style>

      <div style={{ maxWidth: 1380, margin: '0 auto', padding: '80px 32px 32px' }}>

        {/* Main grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr repeat(4, 1fr)',
            gap: 48,
            marginBottom: 80,
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <Logo />
            <p
              style={{
                fontSize: 13,
                color: 'var(--text-3)',
                lineHeight: 1.65,
                marginTop: 20,
                marginBottom: 24,
                maxWidth: 240,
              }}
            >
              Independent analytics platform. Not affiliated with any racing series.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-mono footer-social"
                  style={{
                    width: 34,
                    height: 34,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                    border: '1px solid var(--line)',
                    fontSize: 10,
                    color: 'var(--text-2)',
                    textDecoration: 'none',
                    transition: 'border-color 0.18s ease, color 0.18s ease',
                    letterSpacing: '0.04em',
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {NAV_COLS.map(({ title, links }) => (
            <div key={title}>
              <p
                className="font-mono"
                style={{
                  fontSize: 9.5,
                  color: 'var(--text-4)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: 20,
                }}
              >
                {title}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="footer-link"
                      style={{
                        fontSize: 13,
                        color: 'var(--text-2)',
                        textDecoration: 'none',
                        transition: 'color 0.18s ease',
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Watermark + bottom bar */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32, position: 'relative', overflow: 'hidden' }}>
          {/* Red glow behind watermark */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              height: '100%',
              background: 'radial-gradient(ellipse at center, rgba(225,6,0,0.18), transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Watermark word */}
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(60px, 14vw, 220px)',
              fontWeight: 600,
              letterSpacing: '-0.05em',
              lineHeight: 0.9,
              textAlign: 'center',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.07), transparent 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              userSelect: 'none',
              position: 'relative',
            }}
          >
            F1PULSE
          </p>

          {/* Bottom row */}
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              color: 'var(--text-4)',
              letterSpacing: '0.12em',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 12,
              marginTop: 20,
              position: 'relative',
            }}
          >
            <span>© 2026 F1PULSE · ALL RIGHTS RESERVED</span>
            <span>BUILT FOR SPEED · IN HD · 60 FPS</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 6px #22c55e',
                }}
              />
              ALL SYSTEMS GO
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
