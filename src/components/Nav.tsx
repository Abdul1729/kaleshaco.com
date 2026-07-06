import type { CSSProperties } from "react";
import { colors, fonts } from "../theme";

export function Nav({ onScheduleCall }: { onScheduleCall?: () => void }) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 48px",
          height: 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: fonts.sans,
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.ink,
            textDecoration: "none",
          }}
        >
          Kalesha &amp; Co
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 36, flexWrap: "wrap" }}>
          <a href="/services" style={navLinkStyle}>
            Services
          </a>
          <a href="/#why-us" style={navLinkStyle}>
            Why Us
          </a>
          <a href="/#team" style={navLinkStyle}>
            Team
          </a>
          {onScheduleCall ? (
            <button type="button" onClick={onScheduleCall} style={ctaButtonStyle}>
              Schedule a Call
            </button>
          ) : (
            <a href="/#contact" style={ctaButtonStyle}>
              Schedule a Call
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const navLinkStyle: CSSProperties = {
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 13,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: colors.gray,
  textDecoration: "none",
};

const ctaButtonStyle: CSSProperties = {
  background: colors.ink,
  color: colors.bg,
  padding: "11px 24px",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 12,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-block",
};
