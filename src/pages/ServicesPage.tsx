import { useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScheduleModal } from "../components/ScheduleModal";
import { colors, fonts } from "../theme";
import { SERVICE_CATEGORIES } from "../data/categories";

const SECTIONS = [
  {
    title: "Certifications",
    slugs: ["iso", "soc-2", "soc-1", "soc-3"],
  },
  {
    title: "Indian Regulators",
    slugs: ["dpdpa", "cert-in", "rbi-audit", "sebi-audit", "irdai-audit", "dot", "meity"],
  },
  {
    title: "Global GRC & Compliance Automation",
    slugs: ["global-grc", "other-grc"],
  },
  {
    title: "Audit & Tax",
    slugs: ["audit-assurance", "tax", "financial-services", "forensic-audit"],
  },
];

export function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalTopics = SERVICE_CATEGORIES.reduce((sum, c) => sum + c.topics.length, 0);

  return (
    <div style={{ background: colors.bg, minHeight: "100vh" }}>
      <Nav onScheduleCall={() => setIsModalOpen(true)} />

      {/* HEADER */}
      <section style={{ padding: "96px 48px 64px", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={eyebrow}>Services</div>
          <h1
            style={{
              fontFamily: fonts.serif,
              fontWeight: 400,
              fontSize: "clamp(2.25rem,5vw,4.25rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              color: colors.ink,
              maxWidth: 900,
              margin: "0 0 24px",
            }}
          >
            {totalTopics}+ ways we get you certified, governed, and compliant.
          </h1>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.72, color: colors.gray, maxWidth: 640, margin: 0 }}>
            Certifications, Indian regulatory compliance, global GRC programs, and audit &amp; tax services — organized
            by practice area. Every category page covers what it is, how we implement it, and why it matters.
          </p>
        </div>
      </section>

      {/* CATALOG */}
      <section style={{ background: "#fff", padding: "88px 48px 104px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gap: 80 }}>
          {SECTIONS.map((section) => {
            const categories = section.slugs
              .map((slug) => SERVICE_CATEGORIES.find((c) => c.slug === slug))
              .filter((c): c is NonNullable<typeof c> => Boolean(c));
            return (
              <div key={section.title}>
                <h2 style={sectionHeading}>{section.title}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 1, background: colors.border, marginTop: 32 }}>
                  {categories.map((cat) => (
                    <a key={cat.slug} href={`/services/${cat.slug}`} style={card}>
                      <div style={cardEyebrow}>{cat.topics.length} service{cat.topics.length === 1 ? "" : "s"}</div>
                      <div style={cardTitle}>{cat.fullName}</div>
                      <p style={cardBody}>{cat.intro}</p>
                      <div style={cardLink}>View Services →</div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: colors.ink, padding: "104px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: colors.grayLight, marginBottom: 24 }}>
            Get Started
          </div>
          <h2
            style={{
              fontFamily: fonts.serif,
              fontWeight: 400,
              fontSize: "clamp(2rem,4.5vw,3.75rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: colors.bg,
              margin: "0 auto 24px",
              maxWidth: 760,
            }}
          >
            Not sure which service you need?
          </h2>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.7, color: colors.grayLight, margin: "0 auto 40px", maxWidth: 520 }}>
            Book a call and we'll scope the right combination of certification, regulatory, and GRC work for where you are today.
          </p>
          <button type="button" onClick={() => setIsModalOpen(true)} style={ctaLightButton}>
            Schedule a Call
          </button>
        </div>
      </section>

      <Footer />

      {isModalOpen && <ScheduleModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

const eyebrow = {
  fontFamily: fonts.sans,
  fontWeight: 600,
  fontSize: 12,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: colors.gray,
  marginBottom: 24,
};

const sectionHeading = {
  fontFamily: fonts.serif,
  fontWeight: 400,
  fontSize: "clamp(1.5rem,2.6vw,2rem)",
  letterSpacing: "-0.02em",
  color: colors.ink,
  margin: 0,
};

const card = {
  background: "#fff",
  padding: "32px 28px",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
};

const cardEyebrow = {
  fontFamily: fonts.sans,
  fontWeight: 600,
  fontSize: 10.5,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: colors.grayLight,
  marginBottom: 12,
};

const cardTitle = {
  fontFamily: fonts.sans,
  fontWeight: 600,
  fontSize: "1.05rem",
  color: colors.ink,
  marginBottom: 12,
  lineHeight: 1.3,
};

const cardBody = {
  fontFamily: fonts.sans,
  fontWeight: 300,
  fontSize: "0.9rem",
  lineHeight: 1.6,
  color: colors.gray,
  margin: "0 0 20px",
  flexGrow: 1,
};

const cardLink = {
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  color: colors.ink,
};

const ctaLightButton = {
  background: colors.bg,
  color: colors.ink,
  padding: "16px 32px",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 13,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  border: "none",
  cursor: "pointer",
};
