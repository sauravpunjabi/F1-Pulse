"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Calendar",  href: "#calendar"  },
  { label: "Standings", href: "#standings" },
  { label: "Teams",     href: "#teams"     },
  { label: "Drivers",   href: "#drivers"   },
  { label: "History",   href: "#history"   },
  { label: "Compare",   href: "#compare"   },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-links     { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 920px) {
          .nav-links     { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .navbar-race-badge { display: none !important; }
        }
        @media (max-width: 480px) {
          .navbar-live-btn { display: none !important; }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 320ms ease, border-color 320ms ease",
          backdropFilter: scrolled || mobileOpen ? "blur(18px) saturate(140%)" : "none",
          background: scrolled || mobileOpen ? "rgba(5,6,8,0.75)" : "transparent",
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
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav
            className="nav-links"
            style={{ alignItems: "center", gap: 2 }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
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
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              className="font-mono navbar-race-badge"
              style={{ fontSize: 10.5, color: "var(--text-3)", whiteSpace: "nowrap" }}
            >
              <span style={{ color: "var(--accent)" }}>●</span> RACE WEEK · MONACO
            </span>

            <button
              className="btn btn-primary navbar-live-btn"
              style={{ padding: "10px 18px", fontSize: 13 }}
            >
              Live now →
            </button>

            {/* Hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setMobileOpen((o) => !o)}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--line)",
                borderRadius: 10,
                cursor: "pointer",
                color: "var(--text-1)",
                flexShrink: 0,
              }}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile overlay menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              style={{
                borderBottom: "1px solid var(--line)",
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 52,
                    padding: "0 32px",
                    fontSize: 15,
                    color: "var(--text-2)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--line)",
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
                  {link.label}
                </a>
              ))}

              <div style={{ padding: "16px 32px" }}>
                <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Live now →
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
