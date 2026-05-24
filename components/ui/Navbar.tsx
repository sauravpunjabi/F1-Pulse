"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = ["Calendar", "Standings", "Teams", "Drivers", "Circuits", "Legacy"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 920px) { .nav-links { display: none !important; } }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 320ms ease",
          backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
          background: scrolled ? "rgba(5,6,8,0.65)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1380,
            margin: "0 auto",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 32px",
          }}
        >
          {/* Left: Logo */}
          <Logo />

          {/* Center: Nav links */}
          <nav
            className="nav-links"
            style={{ display: "flex", alignItems: "center", gap: 2 }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontSize: 13,
                  color: "var(--text-2)",
                  padding: "8px 14px",
                  borderRadius: 8,
                  textDecoration: "none",
                  transition: "color 0.15s ease, background 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-2)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right: Race badge + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              className="font-mono"
              style={{ fontSize: 10.5, color: "var(--text-3)", whiteSpace: "nowrap" }}
            >
              <span style={{ color: "var(--accent)" }}>●</span> RACE WEEK · MONACO
            </span>

            <button className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 13 }}>
              Live now →
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
