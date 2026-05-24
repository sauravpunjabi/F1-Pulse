"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoaderProps {
  onDone: () => void;
}

export default function Loader({ onDone }: LoaderProps) {
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.set(".loader-f1, .loader-dot, .loader-pulse, .loader-tag, .loader-sub", {
      opacity: 0,
      y: 40,
    });
    gsap.set(".loader-tag", { x: -20, y: 0 });
    gsap.set(".loader-sub", { y: 0 });

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(".loader-f1",  { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
      .to(".loader-dot",   { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.58")
      .to(".loader-pulse", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.64")
      .to(".loader-tag",   { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, "-=0.5")
      .to(".loader-sub",   { opacity: 1,       duration: 0.4                      }, "-=0.3")
      .to(".loader-wrap",  { y: "-100%",        duration: 0.76, ease: "power3.inOut", delay: 0.65 })
      .eventCallback("onComplete", onDone);

    return () => {
      tl.kill();
    };
  }, [onDone]);

  return (
    <div
      className="loader-wrap"
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "#050608", overflow: "hidden" }}
    >
      {/* Grid background */}
      <div
        className="grid-bg"
        style={{ position: "absolute", inset: 0, opacity: 0.4 }}
      />

      {/* Red glow */}
      <div
        className="glow-red"
        style={{
          position: "absolute",
          left: "50%",
          top: "60%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "var(--accent-glow)",
          filter: "blur(120px)",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      {/* Center logotype */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span
            className="loader-tag font-mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              color: "var(--text-3)",
              opacity: 0,
            }}
          >
            R—2026
          </span>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(56px, 9vw, 128px)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              margin: 0,
            }}
          >
            <span className="loader-f1" style={{ opacity: 0 }}>F1</span>
            <span className="loader-dot" style={{ color: "var(--accent)", opacity: 0 }}>.</span>
            <span className="loader-pulse" style={{ opacity: 0 }}>PULSE</span>
          </h1>
        </div>
      </div>

      {/* Bottom status bar */}
      <div
        className="loader-sub"
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 28,
          opacity: 0,
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            color: "var(--text-4)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          INITIALIZING TELEMETRY
        </span>

        <div
          style={{
            width: 160,
            height: 1,
            background: "var(--line)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "40%",
              background: "var(--accent)",
              animation: "loaderSweep 1.2s linear infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}
