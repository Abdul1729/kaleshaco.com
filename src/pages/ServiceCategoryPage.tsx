import { useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScheduleModal } from "../components/ScheduleModal";
import { colors, fonts } from "../theme";
import type { ServiceCategory } from "../data/categories";

export function ServiceCategoryPage({ category }: { category: ServiceCategory }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ background: colors.bg, minHeight: "100vh" }}>
      <Nav onScheduleCall={() => setIsModalOpen(true)} />

      {/* HERO */}
      <section style={{ padding: "96px 48px 64px", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={eyebrow}>Services / {category.shortName}</div>
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
            {category.fullName}
          </h1>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.72, color: colors.gray, maxWidth: 640, margin: "0 0 40px" }}>
            {category.intro}
          </p>
          <button type="button" onClick={() => setIsModalOpen(true)} style={darkButton}>
            Schedule a Call
          </button>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ background: "#fff", padding: "88px 48px", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "240px 1fr", gap: 48 }}>
          <div style={eyebrow}>Overview</div>
          <div>
            <h2 style={sectionHeading}>What {category.shortName} covers, and why it matters.</h2>
            <p style={sectionBody}>{category.intro}</p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section style={{ padding: "88px 48px", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ ...eyebrow, marginBottom: 40 }}>Our Approach</div>
          {category.items.map((item) => (
            <div key={item.number} id={`service-${item.number}`} style={{ borderTop: `1px solid ${colors.border}`, padding: "32px 0" }}>
              <div style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 20, marginBottom: 20 }}>
                <span style={{ fontFamily: fonts.serif, fontSize: "1.4rem", color: colors.grayLight }}>{item.number}</span>
                <h3 style={{ fontFamily: fonts.sans, fontWeight: 500, fontSize: "1.15rem", color: colors.ink, margin: 0 }}>{item.title}</h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 1080, marginLeft: 76 }}>
                <div>
                  <div style={detailLabel}>What We Do</div>
                  <p style={detailBody}>{item.whatWeDo}</p>
                </div>
                <div>
                  <div style={detailLabel}>How We Implement It</div>
                  <p style={detailBody}>{item.howWeImplement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMPLEMENTATION / BENEFITS */}
      <section style={{ background: "#fff", padding: "88px 48px", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ ...eyebrow, marginBottom: 16 }}>Implementation</div>
            <h2 style={{ ...sectionHeading, fontSize: "clamp(1.5rem,2.6vw,2rem)" }}>How Kalesha &amp; Co implements {category.shortName}.</h2>
            <ul style={listStyle}>
              <li>Compliance workflow design tailored to your organization</li>
              <li>Documentation drafted and version-controlled throughout</li>
              <li>Deliverables handed off with audit-ready evidence</li>
            </ul>
          </div>
          <div>
            <div style={{ ...eyebrow, marginBottom: 16 }}>Benefits</div>
            <ul style={listStyle}>
              <li>Regulatory compliance maintained on an ongoing basis</li>
              <li>Reduced risk exposure across the organization</li>
              <li>Stronger trust with customers, partners, and regulators</li>
              <li>Improved security posture</li>
              <li>Continuous monitoring built into the program</li>
            </ul>
          </div>
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
            Ready to get started with {category.shortName}?
          </h2>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.7, color: colors.grayLight, margin: "0 auto 40px", maxWidth: 520 }}>
            Book a call and we'll scope the right engagement for where you are today.
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
};

const sectionHeading = {
  fontFamily: fonts.serif,
  fontWeight: 400,
  fontSize: "clamp(1.5rem,3vw,2.5rem)",
  letterSpacing: "-0.03em",
  lineHeight: 1.15,
  color: colors.ink,
  margin: "0 0 20px",
};

const sectionBody = {
  fontFamily: fonts.sans,
  fontWeight: 300,
  fontSize: "1.05rem",
  lineHeight: 1.72,
  color: colors.gray,
  maxWidth: 680,
  margin: 0,
};

const detailLabel = {
  fontFamily: fonts.sans,
  fontWeight: 600,
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: colors.grayLight,
  marginBottom: 10,
};

const detailBody = {
  fontFamily: fonts.sans,
  fontWeight: 300,
  fontSize: "0.95rem",
  lineHeight: 1.68,
  color: colors.gray,
  margin: 0,
};

const listStyle = {
  fontFamily: fonts.sans,
  fontWeight: 300,
  fontSize: "0.95rem",
  lineHeight: 1.9,
  color: colors.gray,
  paddingLeft: 20,
  margin: 0,
};

const darkButton = {
  background: colors.ink,
  color: colors.bg,
  padding: "16px 32px",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 13,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  border: "none",
  cursor: "pointer",
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
