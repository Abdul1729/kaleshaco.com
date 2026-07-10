import { ShieldCheckIcon, LockIcon, DocumentCheckIcon, GlobeIcon, RadarIcon, ScaleIcon } from "./ComplianceIcons";

const WATERMARK_ICONS = [ShieldCheckIcon, LockIcon, DocumentCheckIcon, GlobeIcon, RadarIcon, ScaleIcon];

interface HeroBackdropProps {
  dark?: boolean;
  seed?: number;
}

export function HeroBackdrop({ dark = false, seed = 0 }: HeroBackdropProps) {
  const lineColor = dark ? "rgba(255,255,255,0.035)" : "rgba(10,10,10,0.035)";
  const glowColor = dark ? "rgba(255,255,255,0.06)" : "rgba(10,10,10,0.045)";
  const iconColor = dark ? "rgba(255,255,255,0.05)" : "rgba(10,10,10,0.04)";

  const positions = [
    { top: "8%", left: "78%", size: 160, rotate: -8 },
    { top: "58%", left: "88%", size: 110, rotate: 12 },
    { top: "72%", left: "68%", size: 90, rotate: -15 },
    { top: "18%", left: "92%", size: 70, rotate: 20 },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* diagonal drifting line texture, shared with landing page hero */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(135deg, ${lineColor} 0px, ${lineColor} 1px, transparent 1px, transparent 26px)`,
          animation: "kcDrift 50s linear infinite",
        }}
      />
      {/* soft radial glow, upper-right */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "60%",
          height: "140%",
          background: `radial-gradient(closest-side, ${glowColor}, transparent 70%)`,
        }}
      />
      {/* faint oversized compliance icon watermarks */}
      {positions.map((pos, i) => {
        const Icon = WATERMARK_ICONS[(i + seed) % WATERMARK_ICONS.length]!;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              transform: `rotate(${pos.rotate}deg)`,
            }}
          >
            <Icon size={pos.size} color={iconColor} />
          </div>
        );
      })}
    </div>
  );
}
