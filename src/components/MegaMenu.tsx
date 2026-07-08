import { colors, fonts } from "../theme";
import { SERVICE_CATEGORIES } from "../data/categories";

const panelStyle = {
  position: "absolute" as const,
  top: "100%",
  paddingTop: 16,
  zIndex: 60,
};

const panelInnerStyle = {
  background: "#fff",
  border: `1px solid ${colors.border}`,
  boxShadow: "0 16px 32px rgba(0,0,0,0.08)",
  padding: 24,
};

const SERVICE_SECTIONS = [
  { title: "Certifications", slugs: ["iso", "soc-2", "soc-1", "soc-3"] },
  { title: "Indian Regulators", slugs: ["dpdpa", "cert-in", "rbi-audit", "sebi-audit", "irdai-audit", "dot", "meity"] },
  { title: "Global GRC", slugs: ["global-grc", "other-grc"] },
  { title: "Audit & Tax", slugs: ["audit-assurance", "tax", "financial-services", "forensic-audit"] },
];

export function ServicesMegaMenu() {
  return (
    <div style={{ ...panelStyle, right: 0, width: 680 }}>
      <div style={panelInnerStyle}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {SERVICE_SECTIONS.map((section) => {
            const categories = section.slugs
              .map((slug) => SERVICE_CATEGORIES.find((c) => c.slug === slug))
              .filter((c): c is NonNullable<typeof c> => Boolean(c));
            return (
              <div key={section.title}>
                <div style={sectionLabel}>{section.title}</div>
                {categories.map((cat) => (
                  <a key={cat.slug} href={`/services/${cat.slug}`} style={menuRow} className="kc-menu-row">
                    {cat.shortName}
                  </a>
                ))}
              </div>
            );
          })}
        </div>
        <div style={{ borderTop: `1px solid ${colors.border}`, marginTop: 20, paddingTop: 16 }}>
          <a href="/services" style={viewAllLink}>
            View All Services →
          </a>
        </div>
      </div>
    </div>
  );
}

const sectionLabel = {
  fontFamily: fonts.sans,
  fontWeight: 600,
  fontSize: 10.5,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: colors.grayLight,
  marginBottom: 12,
};

const menuRow = {
  display: "block",
  padding: "7px 0",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 12.5,
  textDecoration: "none",
  color: colors.ink,
};

const viewAllLink = {
  display: "block",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 12,
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  color: colors.ink,
  textDecoration: "none",
};

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
