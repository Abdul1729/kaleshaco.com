import { useState, type CSSProperties } from "react";
import { colors, fonts } from "../theme";
import { ServicesMegaMenu, CompanyMegaMenu } from "./MegaMenu";
import companyLogo from "../assets/logo.jpg";

export function Nav({ onScheduleCall }: { onScheduleCall?: () => void }) {
  const [openMenu, setOpenMenu] = useState<"services" | "company" | null>(null);

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
          position: "relative",
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
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src={companyLogo} alt="Kalesha & Co" style={{ height: 40, width: "auto", display: "block" }} />
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 36, flexWrap: "wrap" }}>
          <div style={{ position: "relative" }} onMouseEnter={() => setOpenMenu("services")} onMouseLeave={() => setOpenMenu(null)}>
            <a href="/services" style={navLinkStyle}>
              Services
            </a>
            {openMenu === "services" && <ServicesMegaMenu />}
          </div>
          <div style={{ position: "relative" }} onMouseEnter={() => setOpenMenu("company")} onMouseLeave={() => setOpenMenu(null)}>
            <a href="/company/about" style={navLinkStyle}>
              Company
            </a>
            {openMenu === "company" && <CompanyMegaMenu />}
          </div>
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
