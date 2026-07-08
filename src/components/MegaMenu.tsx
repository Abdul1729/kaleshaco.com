import { colors, fonts } from "../theme";
import { SERVICE_CATEGORIES } from "../data/categories";

const panelStyle = {
  position: "absolute" as const,
  top: "100%",
  left: 0,
  paddingTop: 16,
  zIndex: 60,
};

const panelInnerStyle = {
  background: "#fff",
  border: `1px solid ${colors.border}`,
  boxShadow: "0 16px 32px rgba(0,0,0,0.08)",
  padding: 12,
};

export function ServicesMegaMenu() {
  return (
    <div style={{ ...panelStyle, width: 560 }}>
      <div style={panelInnerStyle}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.slug}
              href={`/services/${cat.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "11px 14px",
                fontFamily: fonts.sans,
                fontWeight: 500,
                fontSize: 12.5,
                textDecoration: "none",
                color: colors.ink,
                borderRadius: 2,
              }}
              className="kc-menu-row"
            >
              {cat.shortName}
              <span style={{ fontSize: 11, color: colors.grayLight }}>→</span>
            </a>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${colors.border}`, marginTop: 8, paddingTop: 8 }}>
          <a
            href="/services"
            style={{
              display: "block",
              padding: "9px 14px",
              fontFamily: fonts.sans,
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: colors.ink,
              textDecoration: "none",
            }}
          >
            View All Services →
          </a>
        </div>
      </div>
    </div>
  );
}

const COMPANY_LINKS = [
  { slug: "about", label: "About Us" },
  { slug: "leadership", label: "Leadership" },
  { slug: "blogs", label: "Blogs" },
  { slug: "data-security-policy", label: "Data Security Policy" },
];

export function CompanyMegaMenu() {
  return (
    <div style={{ ...panelStyle, width: 220 }}>
      <div style={panelInnerStyle}>
        {COMPANY_LINKS.map((link) => (
          <a
            key={link.slug}
            href={`/company/${link.slug}`}
            className="kc-menu-row"
            style={{
              display: "block",
              padding: "11px 14px",
              fontFamily: fonts.sans,
              fontWeight: 500,
              fontSize: 12.5,
              color: colors.ink,
              textDecoration: "none",
              borderRadius: 2,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
