import { colors, fonts } from "../theme";

export function Footer({ full }: { full?: boolean }) {
  if (!full) {
    return (
      <footer
        style={{
          background: colors.ink,
          color: colors.bg,
          padding: "40px 48px",
          borderTop: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontFamily: fonts.sans, fontWeight: 400, fontSize: 12, letterSpacing: "0.04em", color: colors.grayLight }}>
            © 2026 Kalesha &amp; Co. Chartered Accountants.
          </div>
          <a
            href="/"
            style={{
              fontFamily: fonts.sans,
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.grayLight,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            ← Back to Home
          </a>
        </div>
      </footer>
    );
  }

  return (
    <footer style={{ background: colors.ink, color: colors.bg, padding: "80px 48px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 56,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div>
            <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
              Kalesha &amp; Co
            </div>
            <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.7, color: colors.grayLight, maxWidth: 280, margin: "0 0 12px" }}>
              ISO certification and GRC advisory for technology and SaaS companies.
            </p>
            <div style={{ fontFamily: fonts.sans, fontWeight: 400, fontSize: "0.8rem", letterSpacing: "0.04em", color: colors.grayLight }}>
              Est. 2019
            </div>
          </div>
          <div>
            <div style={footerHeading}>Services</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="/services" style={footerLink}>
                ISO 27001 Implementation
              </a>
              <a href="/services" style={footerLink}>
                ISO 27001 Internal Audit
              </a>
              <a href="/services" style={footerLink}>
                Enterprise GRC Program Design
              </a>
              <a href="/services" style={footerLink}>
                Regulatory Gap Assessment
              </a>
              <a href="/services" style={footerLink}>
                Virtual CISO / Compliance Officer
              </a>
            </div>
          </div>
          <div>
            <div style={footerHeading}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="#why-us" style={footerLink}>
                Why Us
              </a>
              <a href="#team" style={footerLink}>
                Team
              </a>
              <a href="#contact" style={footerLink}>
                Contact
              </a>
            </div>
          </div>
          <div>
            <div style={footerHeading}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="mailto:sales@kaleshaco.com" style={footerLink}>
                sales@kaleshaco.com
              </a>
              <a href="tel:+919014241420" style={footerLink}>
                +91 90142 41420
              </a>
              <a href="https://www.linkedin.com/company/kaleshaco/" target="_blank" rel="noopener noreferrer" style={footerLink}>
                LinkedIn
              </a>
              <div style={{ fontFamily: fonts.sans, fontWeight: 400, fontSize: "0.9rem", color: colors.grayLight }}>Montana, USA</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingTop: 28 }}>
          <div style={{ fontFamily: fonts.sans, fontWeight: 400, fontSize: 12, letterSpacing: "0.04em", color: colors.grayLight }}>
            © 2026 Kalesha &amp; Co. Chartered Accountants.
          </div>
          <div style={{ fontFamily: fonts.sans, fontWeight: 500, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.grayLight }}>
            Licensed CPA Firm
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerHeading = {
  fontFamily: fonts.sans,
  fontWeight: 600,
  fontSize: 11,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: colors.grayLight,
  marginBottom: 20,
};

const footerLink = {
  fontFamily: fonts.sans,
  fontWeight: 400,
  fontSize: "0.9rem",
  color: colors.bg,
  textDecoration: "none",
};
