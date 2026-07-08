import { useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ScheduleModal } from "../components/ScheduleModal";
import { colors, fonts } from "../theme";
import type { CompanyPage as CompanyPageData } from "../data/categories";

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
              fontSize: "clamp(2.25rem,5vw,4.25rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              color: colors.ink,
              maxWidth: 900,
              margin: "0 0 24px",
            }}
          >
            {page.name}
          </h1>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.72, color: colors.gray, maxWidth: 640, margin: 0 }}>
            {page.intro}
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "88px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8, color: colors.gray }}>
            Content for this page is in progress. Check back soon, or get in touch if you have questions in the
            meantime.
          </p>
          <button type="button" onClick={() => setIsModalOpen(true)} style={darkButton}>
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
  marginTop: 32,
};
