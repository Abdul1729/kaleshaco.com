import { useMemo, useRef, useState } from "react";
import { colors, fonts } from "../theme";

function getDates() {
  const days: { value: string; label: string }[] = [];
  const d = new Date();
  while (days.length < 10) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      days.push({
        value: d.toDateString(),
        label: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      });
    }
  }
  return days;
}

const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];

export function ScheduleModal({ onClose }: { onClose: () => void }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const dateItems = useMemo(() => getDates(), []);
  const selectedDateLabel = dateItems.find((d) => d.value === selectedDate)?.label ?? "";
  const submitDisabled = !selectedDate || !selectedTime;

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setSubmittedName(nameRef.current?.value ?? "");
    setSubmittedEmail(emailRef.current?.value ?? "");
    setIsSubmitted(true);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10,10,10,0.6)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: colors.bg,
          border: `1px solid ${colors.border}`,
          width: "100%",
          maxWidth: 920,
          maxHeight: "88vh",
          overflow: "auto",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            width: 36,
            height: 36,
            fontFamily: fonts.sans,
            fontSize: 16,
            color: colors.ink,
            cursor: "pointer",
          }}
        >
          ×
        </button>

        {!isSubmitted ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ padding: "56px 48px", borderRight: `1px solid ${colors.border}` }}>
              <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: colors.gray, marginBottom: 8 }}>
                Schedule a Call
              </div>
              <h3 style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: "clamp(1.5rem,2.6vw,2.25rem)", letterSpacing: "-0.03em", color: colors.ink, margin: "0 0 32px" }}>
                Pick a date and time.
              </h3>

              <div style={fieldLabel}>Date</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                {dateItems.map((d) => {
                  const selected = selectedDate === d.value;
                  return (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => setSelectedDate(d.value)}
                      style={pillButtonStyle(selected)}
                    >
                      {d.label}
                    </button>
                  );
                })}
              </div>

              <div style={fieldLabel}>Time (MT)</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {TIMES.map((t) => {
                  const selected = selectedTime === t;
                  return (
                    <button key={t} type="button" onClick={() => setSelectedTime(t)} style={pillButtonStyle(selected)}>
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: "56px 48px", display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: colors.gray }}>
                Your Details
              </div>
              <div>
                <label style={inputLabel}>Name</label>
                <input ref={nameRef} type="text" required style={inputStyle} />
              </div>
              <div>
                <label style={inputLabel}>Email</label>
                <input ref={emailRef} type="email" required style={inputStyle} />
              </div>
              <div>
                <label style={inputLabel}>Company</label>
                <input ref={companyRef} type="text" style={inputStyle} />
              </div>
              <div>
                <label style={inputLabel}>What would you like to cover?</label>
                <textarea ref={messageRef} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              <button
                type="submit"
                disabled={submitDisabled}
                style={{
                  padding: "15px 28px",
                  fontFamily: fonts.sans,
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: "none",
                  marginTop: 8,
                  width: "100%",
                  cursor: submitDisabled ? "not-allowed" : "pointer",
                  background: submitDisabled ? colors.border : colors.ink,
                  color: submitDisabled ? colors.grayLight : colors.bg,
                }}
              >
                Confirm Call
              </button>
            </form>
          </div>
        ) : (
          <div style={{ padding: "88px 64px", textAlign: "center" }}>
            <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: colors.gray, marginBottom: 20 }}>
              Call Requested
            </div>
            <h3 style={{ fontFamily: fonts.serif, fontWeight: 400, fontSize: "clamp(1.75rem,3vw,2.75rem)", letterSpacing: "-0.03em", color: colors.ink, margin: "0 0 20px" }}>
              Thanks, {submittedName}.
            </h3>
            <p style={{ fontFamily: fonts.sans, fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.7, color: colors.gray, maxWidth: 480, margin: "0 auto 32px" }}>
              We'll send a calendar invite to {submittedEmail} for {selectedDateLabel} at {selectedTime}.
            </p>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: colors.ink,
                color: colors.bg,
                padding: "14px 28px",
                fontFamily: fonts.sans,
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const fieldLabel = {
  fontFamily: fonts.sans,
  fontWeight: 600,
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: colors.grayLight,
  marginBottom: 12,
};

const inputLabel = {
  display: "block",
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  color: colors.ink,
  marginBottom: 8,
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "11px 12px",
  border: `1px solid ${colors.border}`,
  fontFamily: fonts.sans,
  fontSize: 13,
  background: "#fff",
  outline: "none",
};

function pillButtonStyle(selected: boolean) {
  return {
    padding: "10px 16px",
    fontFamily: fonts.sans,
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: "0.04em",
    cursor: "pointer",
    border: `1px solid ${selected ? colors.ink : colors.border}`,
    background: selected ? colors.ink : "#fff",
    color: selected ? colors.bg : colors.ink,
  };
}
