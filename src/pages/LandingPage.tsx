import { useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScheduleModal } from "../components/ScheduleModal";
import { colors, fonts, STANDARDS } from "../theme";
import isoLogo from "../assets/logos/iso.svg";
import aicpaLogo from "../assets/logos/aicpa.png";
import icaiLogo from "../assets/logos/icai.png";
import accaLogo from "../assets/logos/acca.svg";

const CLIENTS = [
  { name: "Bliro", url: "https://bliro.io" },
  { name: "Cobrainer", url: "https://cobrainer.com" },
  { name: "Dotfile", url: "https://dotfile.com" },
  { name: "Ethiack", url: "https://ethiack.com" },
  { name: "Sysarb", url: "https://sysarb.com" },
  { name: "Agile RL", url: "https://agilerl.com" },
  { name: "Acceleriad", url: "https://acceleraid.ai/" },
];

const PARTNERS = [
  { name: "5tattva", url: "https://5tattva.com" },
  { name: "Accedere", url: "https://accedere.io" },
  { name: "Auriseg", url: "https://auriseg.com" },
  { name: "Vulnuris", url: "https://vulnuris.in" },
  { name: "TechOwl Infosec", url: "https://techowl.com" },
  { name: "Acurate Global Inc", url: "https://accurateiso.com/" },
];

const WHY_US = [
  {
    title: "Licensed CPAs, Technical Fluency",
    desc: "Every engagement is led by CPAs who understand cloud infrastructure and access controls — not just accounting standards.",
  },
  {
    title: "SaaS & Technology Focus",
    desc: "We work exclusively with technology companies, so recommendations reflect how modern software businesses actually run.",
  },
  {
    title: "Direct Partner Access",
    desc: "You work directly with a partner from scoping through sign-off — no hand-off to a rotating bench of staff.",
  },
  {
    title: "Montana-Based, National Reach",
    desc: "Domiciled in Montana and licensed to serve technology clients across the United States.",
  },
];

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <div style={eyebrow}>ISO Certification &amp; GRC Services — Montana, USA</div>
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
              <h2 style={sectionHeading}>Two practices. Forty-five ways we get you compliant — and keep you that way.</h2>
              <p style={sectionBody}>
                ISO certification and enterprise GRC program work, delivered by a team that implements the standard,
                not just audits against it.
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
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 1,
              background: colors.border,
              border: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ background: colors.bg, padding: "40px 36px", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontFamily: fonts.serif, fontSize: "2rem", color: colors.grayLight }}>A</div>
              <h3 style={cardHeading}>ISO Certification &amp; Standards</h3>
              <p style={cardBody}>
                25 services covering ISO 27001 ISMS implementation, cloud and privacy controls, business continuity,
                and certification maintenance.
              </p>
              <a href="/services" style={cardLink}>
                View Services →
              </a>
            </div>
            <div style={{ background: colors.bg, padding: "40px 36px", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontFamily: fonts.serif, fontSize: "2rem", color: colors.grayLight }}>B</div>
              <h3 style={cardHeading}>GRC Program Services</h3>
              <p style={cardBody}>
                20 services covering enterprise risk, governance reporting, vendor risk, and compliance program
                design.
              </p>
              <a href="/services" style={cardLink}>
                View Services →
              </a>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <a href="/services" style={{ ...darkButton, display: "inline-block", textDecoration: "none" }}>
              View All 45 Services
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

        <div
          style={{
            maxWidth: 1280,
            margin: "88px auto 0",
            paddingTop: 56,
            borderTop: `1px solid ${colors.border}`,
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 48,
          }}
        >
          <CredentialColumn
            title="Standards We Advise On"
            items={[
              { label: "ISO 27001", logo: isoLogo },
              { label: "ISO 9001", logo: isoLogo },
              { label: "SOC 2 Type II", logo: aicpaLogo },
            ]}
          />
          <CredentialColumn
            title="Team Credentials"
            items={[
              { label: "ICAI", logo: icaiLogo },
              { label: "ACCA", logo: accaLogo },
              { label: "CPA", logo: aicpaLogo },
            ]}
          />
          <div>
            <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: colors.grayLight, marginBottom: 18 }}>
              Partnerships
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {PARTNERS.map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ ...tag, textDecoration: "none", display: "block" }}>
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" style={{ background: "#fff", padding: "104px 48px", borderTop: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 48, marginBottom: 48 }}>
            <div style={eyebrow}>Clients</div>
            <div>
              <h2 style={sectionHeading}>500+ clients trust us with their compliance program.</h2>
              <p style={sectionBody}>
                A sample of the technology and SaaS companies we work with across ISO certification and GRC advisory.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {CLIENTS.map((c) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" style={{ ...tag, textDecoration: "none" }}>
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" style={{ background: "#fff", padding: "104px 48px", borderTop: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ ...eyebrow, marginBottom: 24 }}>The Team</div>
          <h2 style={{ ...sectionHeading, maxWidth: 760, marginBottom: 56 }}>The people behind the opinion.</h2>

          <div style={{ position: "relative", border: `1px solid ${colors.border}` }}>
            <div
              style={{
                width: "100%",
                height: "clamp(320px,42vw,560px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: colors.bgAlt,
                color: colors.grayLight,
                fontFamily: fonts.sans,
                fontSize: 13,
              }}
            >
              Team photo
            </div>
            <div style={{ position: "absolute", left: 0, bottom: 0, background: colors.ink, color: colors.bg, padding: "24px 32px", maxWidth: 420 }}>
              <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: colors.grayLight, marginBottom: 8 }}>
                Kalesha &amp; Co — Montana, USA
              </div>
              <div style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: "1.5rem", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                Audit, advisory, and compliance — under one roof.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <div style={tagSmall}>Audit</div>
            <div style={tagSmall}>Advisory</div>
            <div style={tagSmall}>Compliance</div>
          </div>
        </div>
      </section>

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

interface CredentialItem {
  label: string;
  logo: string;
}

function CredentialColumn({ title, items }: { title: string; items: CredentialItem[] }) {
  return (
    <div>
      <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: colors.grayLight, marginBottom: 18 }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item) => (
          <div key={item.label} style={logoTag}>
            <img src={item.logo} alt={item.label} style={{ height: 20, width: "auto", maxWidth: 72, objectFit: "contain" }} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
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

const logoTag = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  border: `1px solid ${colors.border}`,
  padding: "10px 16px",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  color: colors.ink,
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
