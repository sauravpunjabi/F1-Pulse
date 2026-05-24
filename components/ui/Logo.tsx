import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}
    >
      {/* Icon mark */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          background: "linear-gradient(135deg, #E10600, #7a0300)",
          boxShadow: "0 8px 22px -8px var(--accent-glow)",
          position: "relative",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {/* Radial white highlight */}
        <div
          style={{
            position: "absolute",
            top: -6,
            right: -6,
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.28) 0%, transparent 70%)",
          }}
        />
        {/* L-shape border mark */}
        <div
          style={{
            position: "absolute",
            bottom: 5,
            left: 5,
            width: 10,
            height: 10,
            borderLeft: "2px solid rgba(255,255,255,0.9)",
            borderBottom: "2px solid rgba(255,255,255,0.9)",
            borderBottomLeftRadius: 4,
          }}
        />
      </div>

      {/* Text column */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          className="font-display"
          style={{
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--text-1)",
          }}
        >
          F1<span style={{ color: "var(--accent)" }}>.</span>Pulse
        </span>
        <span
          className="font-mono"
          style={{
            fontSize: 8.5,
            color: "var(--text-4)",
            letterSpacing: "0.2em",
            marginTop: 3,
            textTransform: "uppercase",
          }}
        >
          EST · 2026
        </span>
      </div>
    </Link>
  );
}
