import { useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScheduleModal } from "../components/ScheduleModal";
import { FAQSection } from "../components/FAQSection";
import { HeroBackdrop } from "../components/HeroBackdrop";
import { colors, fonts } from "../theme";
import type { ServiceCategory } from "../data/categories";
import { buildServiceFAQs } from "../data/faqs";
import {
  ShieldCheckIcon,
  DocumentCheckIcon,
  GearIcon,
  TargetIcon,
  ScaleIcon,
  ClipboardListIcon,
  GlobeIcon,
  SparkleIcon,
  ChatIcon,
} from "../components/ComplianceIcons";

const WHY_CHOOSE_US = [
  {
    title: "Big 4 expertise, agile execution",
    desc: "Experienced auditors without unnecessary process complexity.",
    Icon: ScaleIcon,
  },
  {
    title: "AI-enhanced workflows",
    desc: "Automation-enabled evidence coordination to support efficient audit cycles.",
    Icon: SparkleIcon,
  },
  {
    title: "Clear reporting",
    desc: "Findings and requests communicated in practical language.",
    Icon: ChatIcon,
  },
  {
    title: "Global footprint",
    desc: "Support for organizations operating across multiple jurisdictions and time zones.",
    Icon: GlobeIcon,
  },
];

const TOPIC_ICONS = [ShieldCheckIcon, DocumentCheckIcon, GearIcon, TargetIcon, ClipboardListIcon, ScaleIcon];

export function ServiceCategoryPage({ category }: { category: ServiceCategory }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqs = buildServiceFAQs(category.slug, category);
  const iconSeed = category.slug.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0);

  return (
    <div style={{ background: colors.bg, minHeight: "100vh" }}>
      <Nav onScheduleCall={() => setIsModalOpen(true)} />

      {/* HERO */}
      <section style={{ position: "relative", padding: "96px 48px 64px", overflow: "hidden", borderBottom: `1px solid ${colors.border}` }}>
        <HeroBackdrop seed={iconSeed} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <ShieldCheckIcon size={22} color={colors.gray} />
            <div style={eyebrow}>Services / {category.shortName}</div>
          </div>
          <h1
            style={{
              fontFamily: fonts.serif,
              fontWeight: 400,
              fontSize: "clamp(2.75rem,6vw,5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              color: colors.ink,
              maxWidth: 960,
              margin: "0 0 28px",
            }}
          >
            {category.fullName}
          </h1>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.3rem", lineHeight: 1.72, color: colors.gray, maxWidth: 680, margin: "0 0 32px" }}>
            {category.intro}
          </p>
          {category.coverage && (
            <p style={{ fontFamily: fonts.sans, fontWeight: 500, fontSize: "1rem", letterSpacing: "0.02em", color: colors.gray, maxWidth: 680, margin: "0 0 32px" }}>
              <span style={{ color: colors.grayLight, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: 12.5, fontWeight: 600 }}>Coverage — </span>
              {category.coverage}
            </p>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <button type="button" onClick={() => setIsModalOpen(true)} style={darkButton}>
              Schedule a Call
            </button>
            {category.regulatorLogo && (
              <>
                <img
                  src={category.regulatorLogo}
                  alt={category.regulatorName}
                  style={{ height: 44, width: "auto", maxWidth: 120, objectFit: "contain" }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 3, padding: "12px 22px", border: `1px solid ${colors.border}`, background: "#fff" }}>
                  <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.grayLight }}>
                    Regulator
                  </div>
                  <div style={{ fontFamily: fonts.sans, fontWeight: 500, fontSize: 14.5, color: colors.ink }}>{category.regulatorName}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section style={{ padding: "88px 48px", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ ...eyebrow, marginBottom: 40 }}>Our Services</div>
          <div style={{ display: "grid", gap: 1, background: colors.border }}>
            {category.topics.map((topic, i) => {
              const Icon = TOPIC_ICONS[i % TOPIC_ICONS.length]!;
              return (
                <div key={topic.title} style={{ background: "#fff", padding: "44px 40px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: colors.bgAlt, flexShrink: 0 }}>
                      <Icon size={22} color={colors.ink} />
                    </div>
                    <h3 style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: "1.75rem", letterSpacing: "-0.01em", color: colors.ink, margin: 0 }}>
                      {topic.title}
                    </h3>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
                    <div>
                      <div style={detailLabel}>What It Is</div>
                      <p style={detailBody}>{topic.whatItIs}</p>
                    </div>
                    <div>
                      <div style={detailLabel}>How We Implement It</div>
                      <p style={detailBody}>{topic.howWeImplement}</p>
                    </div>
                    <div>
                      <div style={detailLabel}>Why It Matters</div>
                      <p style={detailBody}>{topic.whyItMatters}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUNDLE CALLOUT */}
      {category.bundle && (
        <section style={{ background: "#fff", padding: "64px 48px", borderBottom: `1px solid ${colors.border}` }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "240px 1fr", gap: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <ClipboardListIcon size={20} color={colors.gray} />
              <div style={eyebrow}>Bundle & Save</div>
            </div>
            <p style={{ ...sectionBody, maxWidth: 820 }}>{category.bundle}</p>
          </div>
        </section>
      )}

      {/* WHY CHOOSE US */}
      <section style={{ background: colors.bgAlt, padding: "88px 48px", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ ...eyebrow, marginBottom: 16 }}>Why Choose Us</div>
          <h2 style={{ ...sectionHeading, fontSize: "clamp(1.75rem,3.4vw,2.75rem)", maxWidth: 780 }}>Why Choose Kalesha &amp; Co?</h2>
          <p style={{ ...sectionBody, fontSize: "1.15rem", maxWidth: 780, marginBottom: 48 }}>
            Kalesha &amp; Co brings independent audit experience, responsive communication, and technology-enabled
            workflows to {category.shortName} examinations. Our team focuses on reducing unnecessary friction while
            maintaining the rigor required for stakeholder-ready reporting.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 1, background: colors.border, border: `1px solid ${colors.border}` }}>
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} style={{ background: "#fff", padding: "32px 28px" }}>
                <item.Icon size={26} color={colors.ink} style={{ marginBottom: 16 }} />
                <h3 style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: "1.3rem", letterSpacing: "-0.01em", color: colors.ink, margin: "0 0 10px" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1rem", lineHeight: 1.6, color: colors.gray, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION / BENEFITS */}
      <section style={{ background: "#fff", padding: "88px 48px", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <GearIcon size={20} color={colors.gray} />
              <div style={eyebrow}>Implementation</div>
            </div>
            <h2 style={{ ...sectionHeading, fontSize: "clamp(1.6rem,2.8vw,2.2rem)" }}>How Kalesha &amp; Co implements {category.shortName}.</h2>
            <ul style={listStyle}>
              <li>Compliance workflow design tailored to your organization</li>
              <li>Documentation drafted and version-controlled throughout</li>
              <li>Deliverables handed off with audit-ready evidence</li>
            </ul>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <ShieldCheckIcon size={20} color={colors.gray} />
              <div style={eyebrow}>Benefits</div>
            </div>
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

      {/* FAQ */}
      <FAQSection faqs={faqs} eyebrowLabel={`${category.shortName} FAQ`} />

      {/* CTA */}
      <section style={{ background: colors.ink, padding: "104px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 24 }}>
            <SparkleIcon size={20} color={colors.grayLight} />
            <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: colors.grayLight }}>
              Get Started
            </div>
          </div>
          <h2
            style={{
              fontFamily: fonts.serif,
              fontWeight: 400,
              fontSize: "clamp(2.25rem,5vw,4.25rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: colors.bg,
              margin: "0 auto 24px",
              maxWidth: 800,
            }}
          >
            Get Started with a {category.shortName} Examination
          </h2>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.25rem", lineHeight: 1.7, color: colors.grayLight, margin: "0 auto 40px", maxWidth: 600 }}>
            Demonstrate your commitment to trusted compliance with an independent {category.shortName} examination
            from Kalesha &amp; Co.
          </p>
          <button type="button" onClick={() => setIsModalOpen(true)} style={ctaLightButton}>
            Let's Talk Compliance
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
  fontSize: 13,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: colors.gray,
};

const sectionHeading = {
  fontFamily: fonts.serif,
  fontWeight: 400,
  fontSize: "clamp(1.75rem,3.4vw,2.75rem)",
  letterSpacing: "-0.03em",
  lineHeight: 1.15,
  color: colors.ink,
  margin: "0 0 20px",
};

const sectionBody = {
  fontFamily: fonts.sans,
  fontWeight: 300,
  fontSize: "1.15rem",
  lineHeight: 1.72,
  color: colors.gray,
  maxWidth: 680,
  margin: 0,
};

const detailLabel = {
  fontFamily: fonts.sans,
  fontWeight: 600,
  fontSize: 12,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: colors.grayLight,
  marginBottom: 10,
};

const detailBody = {
  fontFamily: fonts.sans,
  fontWeight: 300,
  fontSize: "1.05rem",
  lineHeight: 1.68,
  color: colors.gray,
  margin: 0,
};

const listStyle = {
  fontFamily: fonts.sans,
  fontWeight: 300,
  fontSize: "1.05rem",
  lineHeight: 1.9,
  color: colors.gray,
  paddingLeft: 20,
  margin: 0,
};

const darkButton = {
  background: colors.ink,
  color: colors.bg,
  padding: "17px 34px",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 14,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  border: "none",
  cursor: "pointer",
};

const ctaLightButton = {
  background: colors.bg,
  color: colors.ink,
  padding: "17px 34px",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 14,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  border: "none",
  cursor: "pointer",
};
