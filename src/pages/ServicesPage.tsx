import { useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { colors, fonts, STANDARDS } from "../theme";
import { ISO_ITEMS, GRC_ITEMS } from "../data/services";

export function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"iso" | "grc">("iso");
  const [openKey, setOpenKey] = useState<string | null>(null);

  const activeItems = activeTab === "grc" ? GRC_ITEMS : ISO_ITEMS;

  return (
    <div style={{ background: colors.bg, minHeight: "100vh" }}>
      <Nav />

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
            All 45 ways we get you certified, governed, and compliant.
          </h1>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.72, color: colors.gray, maxWidth: 640, margin: "0 0 40px" }}>
            Two practices — ISO Certification &amp; Standards, and Governance, Risk &amp; Compliance program work.
            Every entry below includes what we do and exactly how we implement it.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {STANDARDS.map((s) => (
              <div key={s} style={tag}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section style={{ background: "#fff", padding: "64px 48px 104px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              position: "sticky",
              top: 78,
              background: "#fff",
              zIndex: 10,
              display: "flex",
              gap: 8,
              borderBottom: `1px solid ${colors.border}`,
              flexWrap: "wrap",
              paddingTop: 8,
            }}
          >
            <button
              type="button"
              onClick={() => {
                setActiveTab("iso");
                setOpenKey(null);
              }}
              style={tabStyle(activeTab === "iso")}
            >
              A. ISO Certification &amp; Standards ({ISO_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("grc");
                setOpenKey(null);
              }}
              style={tabStyle(activeTab === "grc")}
            >
              B. GRC Program Services ({GRC_ITEMS.length})
            </button>
          </div>

          <div>
            {activeItems.map((item) => {
              const key = `${activeTab}-${item.number}`;
              const isOpen = openKey === key;
              return (
                <div key={key} style={{ borderBottom: `1px solid ${colors.border}` }}>
                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    style={{
                      width: "100%",
                      display: "grid",
                      gridTemplateColumns: "56px 1fr 24px",
                      gap: 20,
                      alignItems: "center",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: "24px 0",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ fontFamily: fonts.serif, fontSize: "1.4rem", color: colors.grayLight }}>{item.number}</span>
                    <span style={{ fontFamily: fonts.sans, fontWeight: 500, fontSize: "1.08rem", color: colors.ink }}>{item.title}</span>
                    <span style={{ fontFamily: fonts.sans, fontSize: 22, fontWeight: 300, color: colors.gray }}>{isOpen ? "–" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 0 36px 76px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 1080 }}>
                      <div>
                        <div style={detailLabel}>What We Do</div>
                        <p style={detailBody}>{item.whatWeDo}</p>
                      </div>
                      <div>
                        <div style={detailLabel}>How We Implement It</div>
                        <p style={detailBody}>{item.howWeImplement}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
            Not sure which service you need?
          </h2>
          <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.7, color: colors.grayLight, margin: "0 auto 40px", maxWidth: 520 }}>
            Book a call and we'll scope the right combination of ISO and GRC work for where you are today.
          </p>
          <a
            href="/#contact"
            style={{
              display: "inline-block",
              background: colors.bg,
              color: colors.ink,
              padding: "16px 32px",
              fontFamily: fonts.sans,
              fontWeight: 500,
              fontSize: 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Schedule a Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function tabStyle(active: boolean) {
  return {
    background: "none",
    border: "none",
    padding: "16px 4px",
    marginRight: 32,
    fontFamily: fonts.sans,
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    borderBottom: `2px solid ${active ? colors.ink : "transparent"}`,
    color: active ? colors.ink : colors.grayLight,
  };
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
