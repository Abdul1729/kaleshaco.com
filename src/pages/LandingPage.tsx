import { useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScheduleModal } from "../components/ScheduleModal";
import { LogoMarquee } from "../components/LogoMarquee";
import { FAQSection } from "../components/FAQSection";
import { colors, fonts, STANDARDS } from "../theme";
import { SERVICE_CATEGORIES } from "../data/categories";
import { CLIENTS, PARTNERS, STANDARDS_ADVISED, TEAM_CREDENTIALS, WHY_US, TEAM } from "../data/company";
import { GENERAL_FAQS } from "../data/faqs";
import isoLogo from "../assets/logos/iso.svg";
import aicpaLogo from "../assets/logos/aicpa.png";
import icaiLogo from "../assets/logos/icai.png";

const PRACTICE_AREAS = [
  {
    label: "A",
    title: "Certifications",
    slugs: ["iso", "soc-2", "soc-1", "soc-3"],
    desc: "ISO 27001 and adjacent standards, plus SOC 1, 2, and 3 audit readiness for technology and SaaS companies.",
    logos: [isoLogo, aicpaLogo],
  },
  {
    label: "B",
    title: "Indian Regulators",
    slugs: ["dpdpa", "cert-in", "rbi-audit", "sebi-audit", "irdai-audit", "dot", "meity"],
    desc: "DPDPA, CERT-In, RBI, SEBI, IRDAI, and DoT/TRAI compliance for regulated Indian entities.",
    logos: [],
  },
  {
    label: "C",
    title: "Global GRC",
    slugs: ["global-grc", "other-grc"],
    desc: "GDPR, HIPAA, HITRUST, CCSS, virtual CISO leadership, and compliance automation tooling.",
    logos: [],
  },
  {
    label: "D",
    title: "Audit & Tax",
    slugs: ["audit-assurance", "tax", "financial-services", "forensic-audit"],
    desc: "Internal, statutory, and risk-based audits, income tax and GST compliance, and forensic due diligence.",
    logos: [icaiLogo],
  },
];

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flippedArea, setFlippedArea] = useState<string | null>(null);
  const totalServices = SERVICE_CATEGORIES.reduce((sum, c) => sum + c.topics.length, 0);

  return (
    <div style={{ background: colors.bg, minHeight: "100vh" }}>
      <Nav onScheduleCall={() => setIsModalOpen(true)} />

      {/* HERO */}
      <section style={{ position: "relative", padding: "128px 48px 104px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(0,0,0,0.035) 0px, rgba(0,0,0,0.035) 1px, transparent 1px, transparent 26px)",
            animation: "kcDrift 50s linear infinite",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
          <div style={eyebrow}>ISO Certification &amp; GRC Services</div>
          <h1
            style={{
              fontFamily: fonts.serif,
              fontWeight: 400,
              fontSize: "clamp(2.75rem,7vw,6rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              color: colors.ink,
              maxWidth: 960,
              margin: "0 0 32px",
            }}
          >
            ISO certification and GRC programs built for how technology companies actually operate.
          </h1>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.25rem", lineHeight: 1.72, color: colors.gray, maxWidth: 620, margin: "0 0 48px" }}>
            We help SaaS and technology-driven businesses implement ISO 27001 and adjacent standards, and build the
            governance, risk, and compliance programs that keep them certified — without slowing down the business
            you've built.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button type="button" onClick={() => setIsModalOpen(true)} style={darkButton}>
              Schedule a Call
            </button>
            <a href="/services" style={outlineButton}>
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: "#fff", padding: "104px 48px", borderTop: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 48, marginBottom: 48 }}>
            <div style={eyebrow}>What We Do</div>
            <div>
              <h2 style={sectionHeading}>Four practices. {totalServices}+ ways we get you compliant — and keep you that way.</h2>
              <p style={sectionBody}>
                Certifications, Indian regulatory compliance, global GRC programs, and audit &amp; tax services,
                delivered by a team that implements the standard, not just audits against it.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 56 }}>
            {STANDARDS.map((s) => (
              <div key={s} style={tag}>
                {s}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 1,
              background: colors.border,
              border: `1px solid ${colors.border}`,
            }}
          >
            {PRACTICE_AREAS.map((area) => {
              const serviceCount = area.slugs.reduce((sum, slug) => {
                const cat = SERVICE_CATEGORIES.find((c) => c.slug === slug);
                return sum + (cat?.topics.length ?? 0);
              }, 0);
              const isFlipped = flippedArea === area.label;
              return (
                <div
                  key={area.label}
                  onClick={() => setFlippedArea(isFlipped ? null : area.label)}
                  style={{ position: "relative", height: 280, perspective: 1400, cursor: "pointer" }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      transformStyle: "preserve-3d",
                      transition: "transform 0.7s cubic-bezier(.4,.1,.2,1)",
                      transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
                    }}
                  >
                    {/* FRONT */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backfaceVisibility: "hidden",
                        background: colors.bg,
                        padding: "40px 36px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                      }}
                    >
                      <div style={{ fontFamily: fonts.serif, fontSize: "2rem", color: colors.grayLight }}>{area.label}</div>
                      <h3 style={cardHeading}>{area.title}</h3>
                      <p style={cardBody}>
                        {serviceCount} service{serviceCount === 1 ? "" : "s"} — {area.desc}
                      </p>
                      <div style={{ ...cardLink, marginTop: 8 }}>Tap for standards →</div>
                    </div>
                    {/* BACK */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: colors.ink,
                        padding: 32,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20,
                      }}
                    >
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                        {area.logos.map((logo, i) => (
                          <div
                            key={i}
                            style={{
                              width: 56,
                              height: 56,
                              background: "#fff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: 8,
                            }}
                          >
                            <img src={logo} alt="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                          </div>
                        ))}
                      </div>
                      <div
                        style={{
                          fontFamily: fonts.sans,
                          fontWeight: 600,
                          fontSize: 11,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: colors.bg,
                          textAlign: "center",
                        }}
                      >
                        {area.title}
                      </div>
                      <a
                        href="/services"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          fontFamily: fonts.sans,
                          fontWeight: 500,
                          fontSize: 11,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: colors.bg,
                          textDecoration: "underline",
                        }}
                      >
                        View Services →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 40 }}>
            <a href="/services" style={{ ...darkButton, display: "inline-block", textDecoration: "none" }}>
              View All {totalServices} Services
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" style={{ background: colors.bgAlt, padding: "104px 48px", borderTop: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <div style={{ ...eyebrow, marginBottom: 24 }}>Why Us</div>
            <h2 style={{ ...sectionHeading, marginBottom: 24 }}>Advisors who understand the stack, not just the standard.</h2>
            <p style={{ ...sectionBody, maxWidth: 480 }}>
              An ISO &amp; GRC advisory practice built specifically around technology and SaaS companies — so every
              recommendation reflects how your business actually runs.
            </p>
          </div>
          <div>
            {WHY_US.map((item) => (
              <div key={item.title} style={{ borderTop: `1px solid ${colors.border}`, padding: "24px 0" }}>
                <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.ink, marginBottom: 10 }}>
                  {item.title}
                </div>
                <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.65, color: colors.gray, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${colors.border}` }} />
          </div>
        </div>

        <div style={{ maxWidth: 1280, margin: "88px auto 0", paddingTop: 56, borderTop: `1px solid ${colors.border}` }}>
          <div style={{ ...credentialLabel, marginBottom: 24 }}>Standards We Advise On</div>
          <LogoGrid items={STANDARDS_ADVISED} showCaption />

          <div style={{ ...credentialLabel, margin: "56px 0 24px" }}>Team Credentials</div>
          <LogoGrid items={TEAM_CREDENTIALS} />
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section id="partnerships" style={{ background: colors.bgAlt, padding: "72px 0", borderTop: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto 32px", padding: "0 48px" }}>
          <div style={eyebrow}>Partnerships</div>
        </div>
        <LogoMarquee items={PARTNERS} durationSeconds={30} />
      </section>

      {/* CLIENTS */}
      <section id="clients" style={{ background: "#fff", padding: "104px 0", borderTop: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto 48px", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 48 }}>
            <div style={eyebrow}>Clients</div>
            <div>
              <h2 style={sectionHeading}>500+ clients trust us with their compliance program.</h2>
              <p style={sectionBody}>
                A sample of the technology and SaaS companies we work with across ISO certification and GRC advisory.
              </p>
            </div>
          </div>
        </div>
        <LogoMarquee items={CLIENTS} durationSeconds={36} />
      </section>

      {/* TEAM */}
      <section id="team" style={{ background: "#fff", padding: "104px 48px", borderTop: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ ...eyebrow, marginBottom: 24 }}>The Team</div>
          <h2 style={{ ...sectionHeading, maxWidth: 760, marginBottom: 56 }}>The people behind the opinion.</h2>

          <div style={{ background: colors.ink, color: colors.bg, padding: "28px 32px", marginBottom: 1 }}>
            <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: colors.grayLight, marginBottom: 8 }}>
              Kalesha &amp; Co — Andhra Pradesh, India
            </div>
            <div style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: "1.5rem", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              Audit, advisory, and compliance — under one roof.
            </div>
          </div>

          <div
            className="kc-marquee-viewport"
            style={{
              position: "relative",
              overflow: "hidden",
              margin: "0 -48px",
              padding: "0 48px",
              WebkitMaskImage: "linear-gradient(90deg, transparent, #000 64px, #000 calc(100% - 64px), transparent)",
              maskImage: "linear-gradient(90deg, transparent, #000 64px, #000 calc(100% - 64px), transparent)",
            }}
          >
            <div
              className="kc-marquee-track"
              style={{ display: "flex", width: "max-content", gap: 20, ["--kc-marquee-duration" as string]: "42s" }}
            >
              {[...TEAM, ...TEAM].map((member, i) => (
                <div
                  key={`${member.name}-${i}`}
                  aria-hidden={i >= TEAM.length ? "true" : undefined}
                  tabIndex={i >= TEAM.length ? -1 : undefined}
                  className="kc-team-card"
                  style={{ flexShrink: 0, width: 230, background: "#fff", border: `1px solid ${colors.border}` }}
                >
                  <div style={{ width: "100%", aspectRatio: "4/5", overflow: "hidden", background: colors.bgAlt }}>
                    <img src={member.photo} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ padding: "18px 20px" }}>
                    <div style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: "1.1rem", letterSpacing: "-0.01em", color: colors.ink, marginBottom: 6 }}>
                      {member.name}
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontWeight: 500, fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: colors.grayLight, lineHeight: 1.5 }}>
                      {member.credentials}
                    </div>
                    <div style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "0.82rem", color: colors.gray, marginTop: 6, lineHeight: 1.4 }}>
                      {member.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <div style={tagSmall}>Audit</div>
            <div style={tagSmall}>Advisory</div>
            <div style={tagSmall}>Compliance</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={GENERAL_FAQS} />

      {/* CONTACT / CTA */}
      <section
        id="contact"
        style={{ position: "relative", background: colors.ink, padding: "120px 48px", borderTop: `1px solid ${colors.border}`, overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 26px)",
            animation: "kcDrift 50s linear infinite",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: colors.grayLight, marginBottom: 24 }}>
            Get Started
          </div>
          <h2
            style={{
              fontFamily: fonts.serif,
              fontWeight: 400,
              fontSize: "clamp(2.25rem,5vw,4.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: colors.bg,
              margin: "0 auto 24px",
              maxWidth: 820,
            }}
          >
            Let's talk about your next certification.
          </h2>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.7, color: colors.grayLight, margin: "0 auto 48px", maxWidth: 560 }}>
            Book a call with a partner to scope ISO 27001 certification, a GRC program, or a compliance assessment.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              style={{ background: colors.bg, color: colors.ink, padding: "16px 32px", fontFamily: fonts.sans, fontWeight: 500, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", border: "none", cursor: "pointer" }}
            >
              Schedule a Call
            </button>
            <a
              href="mailto:sales@kaleshaco.com"
              style={{ background: "transparent", color: colors.bg, border: "1px solid rgba(255,255,255,0.25)", padding: "16px 32px", fontFamily: fonts.sans, fontWeight: 500, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}
            >
              sales@kaleshaco.com
            </a>
          </div>
        </div>
      </section>

      <Footer full />

      {isModalOpen && <ScheduleModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

function LogoGrid({ items, showCaption }: { items: { name: string; url: string; logo?: string }[]; showCaption?: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="kc-logo-card"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            height: showCaption ? 116 : 88,
            padding: "16px 24px",
            border: `1px solid ${colors.border}`,
            background: "#fff",
            textDecoration: "none",
          }}
        >
          {item.logo ? (
            <img src={item.logo} alt={item.name} style={{ height: 32, width: "auto", maxWidth: 140, objectFit: "contain" }} />
          ) : (
            <span
              style={{
                fontFamily: fonts.sans,
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: colors.ink,
                whiteSpace: "nowrap",
              }}
            >
              {item.name}
            </span>
          )}
          {showCaption && item.logo && (
            <span
              style={{
                fontFamily: fonts.sans,
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: "0.02em",
                color: colors.gray,
                textAlign: "center",
              }}
            >
              {item.name}
            </span>
          )}
        </a>
      ))}
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
  fontSize: "clamp(1.5rem,3vw,3rem)",
  letterSpacing: "-0.03em",
  lineHeight: 1.1,
  color: colors.ink,
  maxWidth: 800,
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

const cardHeading = {
  fontFamily: fonts.serif,
  fontWeight: 400,
  fontSize: "1.5rem",
  letterSpacing: "-0.02em",
  color: colors.ink,
  margin: 0,
};

const cardBody = {
  fontFamily: fonts.sans,
  fontWeight: 300,
  fontSize: "0.95rem",
  lineHeight: 1.6,
  color: colors.gray,
  margin: 0,
};

const cardLink = {
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 12,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  color: colors.ink,
  textDecoration: "none",
  marginTop: 8,
};

const tag = {
  border: `1px solid ${colors.border}`,
  padding: "9px 16px",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: colors.ink,
};

const credentialLabel = {
  fontFamily: fonts.sans,
  fontWeight: 600,
  fontSize: 12,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: colors.grayLight,
};

const tagSmall = {
  border: `1px solid ${colors.border}`,
  padding: "9px 18px",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: colors.ink,
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

const outlineButton = {
  background: "transparent",
  color: colors.ink,
  border: `1px solid ${colors.border}`,
  padding: "16px 32px",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 13,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  textDecoration: "none",
};
