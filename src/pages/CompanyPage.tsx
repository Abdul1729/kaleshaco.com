import { useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScheduleModal } from "../components/ScheduleModal";
import { LogoMarquee } from "../components/LogoMarquee";
import { FAQSection } from "../components/FAQSection";
import { colors, fonts } from "../theme";
import type { CompanyPage as CompanyPageData } from "../data/categories";
import { TEAM, CLIENTS, COMPANY_STATS } from "../data/company";
import { GENERAL_FAQS } from "../data/faqs";

const STATS = [
  { value: COMPANY_STATS.clientsServed, label: "Clients Served" },
  { value: COMPANY_STATS.teamSize, label: "Team Members" },
  { value: String(COMPANY_STATS.founded), label: "Founded" },
];

export function CompanyPage({ page }: { page: CompanyPageData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ background: colors.bg, minHeight: "100vh" }}>
      <Nav onScheduleCall={() => setIsModalOpen(true)} />

      <section style={{ padding: "96px 48px 64px", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={eyebrow}>Company / {page.name}</div>
          <h1
            style={{
              fontFamily: fonts.serif,
              fontWeight: 400,
              fontSize: "clamp(2.75rem,6vw,5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              color: colors.ink,
              maxWidth: 900,
              margin: "0 0 28px",
            }}
          >
            {page.name}
          </h1>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.3rem", lineHeight: 1.72, color: colors.gray, maxWidth: 680, margin: 0 }}>
            {page.intro}
          </p>
        </div>
      </section>

      {page.slug === "about" && <AboutContent onScheduleCall={() => setIsModalOpen(true)} />}
      {page.slug === "leadership" && <LeadershipContent />}
      {(page.slug === "blogs" || page.slug === "data-security-policy") && (
        <PlaceholderContent onScheduleCall={() => setIsModalOpen(true)} />
      )}

      <FAQSection faqs={GENERAL_FAQS} />

      <Footer />

      {isModalOpen && <ScheduleModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

function AboutContent({ onScheduleCall }: { onScheduleCall: () => void }) {
  return (
    <>
      {/* STATS */}
      <section style={{ background: "#fff", padding: "72px 48px", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 1, background: colors.border, border: `1px solid ${colors.border}` }}>
          {STATS.map((stat) => (
            <div key={stat.label} style={{ background: "#fff", padding: "36px 32px", textAlign: "center" }}>
              <div style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: "3rem", letterSpacing: "-0.03em", color: colors.ink, marginBottom: 8 }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: fonts.sans, fontWeight: 500, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: colors.gray }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: colors.bgAlt, padding: "88px 48px", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={eyebrow}>Our Story</div>
          <h2 style={sectionHeading}>Built by auditors who understand the stack.</h2>
          <p style={sectionBody}>
            Founded in 2019, Kalesha &amp; Co is an ISO certification and GRC advisory practice built specifically
            for technology and SaaS companies. Our 50+ person team is domiciled in Andhra Pradesh with national and
            international reach, serving over 500 clients across certifications, Indian regulatory compliance,
            global GRC programs, and audit &amp; tax services.
          </p>
          <p style={{ ...sectionBody, marginTop: 20 }}>
            Every engagement is led by licensed CPAs and CISAs who understand cloud infrastructure and access
            controls — not just accounting standards — so recommendations reflect how modern software businesses
            actually run.
          </p>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ background: "#fff", padding: "88px 0", borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto 40px", padding: "0 48px" }}>
          <div style={eyebrow}>Clients</div>
          <h2 style={sectionHeading}>500+ clients trust us with their compliance program.</h2>
        </div>
        <LogoMarquee items={CLIENTS} durationSeconds={36} />
      </section>

      {/* CTA */}
      <section style={{ background: colors.ink, padding: "104px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: fonts.serif,
              fontWeight: 400,
              fontSize: "clamp(2.25rem,5vw,4.25rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: colors.bg,
              margin: "0 auto 40px",
              maxWidth: 760,
            }}
          >
            Let's talk about your compliance program.
          </h2>
          <button type="button" onClick={onScheduleCall} style={ctaLightButton}>
            Schedule a Call
          </button>
        </div>
      </section>
    </>
  );
}

function LeadershipContent() {
  return (
    <section style={{ background: "#fff", padding: "88px 48px", borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={eyebrow}>The Team</div>
        <h2 style={{ ...sectionHeading, maxWidth: 760, marginBottom: 56 }}>The people behind the opinion.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: 1, background: colors.border, border: `1px solid ${colors.border}` }}>
          {TEAM.map((member) => (
            <div key={member.name} style={{ background: "#fff" }}>
              <div style={{ width: "100%", aspectRatio: "4/5", overflow: "hidden", background: colors.bgAlt }}>
                <img src={member.photo} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: "20px 22px" }}>
                <div style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: "1.25rem", letterSpacing: "-0.01em", color: colors.ink, marginBottom: 8 }}>
                  {member.name}
                </div>
                {member.credentials && (
                  <div style={{ fontFamily: fonts.sans, fontWeight: 500, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: colors.grayLight, lineHeight: 1.5, marginBottom: 6 }}>
                    {member.credentials}
                  </div>
                )}
                <div style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "0.95rem", color: colors.gray, lineHeight: 1.5 }}>{member.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlaceholderContent({ onScheduleCall }: { onScheduleCall: () => void }) {
  return (
    <section style={{ background: "#fff", padding: "88px 48px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.15rem", lineHeight: 1.8, color: colors.gray }}>
          Content for this page is in progress. Check back soon, or get in touch if you have questions in the
          meantime.
        </p>
        <button type="button" onClick={onScheduleCall} style={darkButton}>
          Schedule a Call
        </button>
      </div>
    </section>
  );
}

const eyebrow = {
  fontFamily: fonts.sans,
  fontWeight: 600,
  fontSize: 13,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: colors.gray,
  marginBottom: 16,
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
  lineHeight: 1.75,
  color: colors.gray,
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
  marginTop: 32,
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
