import { useState } from "react";
import { colors, fonts } from "../theme";
import type { FAQ } from "../data/faqs";

export function FAQSection({ faqs, eyebrowLabel = "FAQ" }: { faqs: FAQ[]; eyebrowLabel?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <section style={{ background: "#fff", padding: "88px 48px", borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={eyebrow}>{eyebrowLabel}</div>
        <h2 style={heading}>Frequently Asked Questions</h2>
        <div style={{ borderTop: `1px solid ${colors.border}` }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} style={{ borderBottom: `1px solid ${colors.border}` }}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={questionButton}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span style={{ ...plusMinus, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 0 28px" }}>
                    <p style={answerText}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
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

const heading = {
  fontFamily: fonts.serif,
  fontWeight: 400,
  fontSize: "clamp(1.75rem,3.4vw,2.75rem)",
  letterSpacing: "-0.03em",
  lineHeight: 1.15,
  color: colors.ink,
  margin: "0 0 40px",
};

const questionButton = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "26px 0",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  textAlign: "left" as const,
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: "1.15rem",
  color: colors.ink,
};

const plusMinus = {
  fontFamily: fonts.sans,
  fontWeight: 300,
  fontSize: "1.75rem",
  lineHeight: 1,
  color: colors.grayLight,
  transition: "transform 0.2s ease",
  flexShrink: 0,
  marginLeft: 24,
};

const answerText = {
  fontFamily: fonts.sans,
  fontWeight: 300,
  fontSize: "1.05rem",
  lineHeight: 1.72,
  color: colors.gray,
  margin: 0,
  maxWidth: 760,
};
