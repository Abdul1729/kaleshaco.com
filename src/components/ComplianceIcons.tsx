import type { CSSProperties } from "react";

type IconProps = { size?: number; color?: string; style?: CSSProperties };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function ShieldCheckIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 9.5-4-1.2-7-5-7-9.5V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function DocumentCheckIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <path d="M7 3h7l4 4v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v4h4" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

export function GearIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V19a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 13a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 7a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 008.9 2.68 1.65 1.65 0 0010 1.6V1.5a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 7a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

export function TargetIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function ScaleIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <path d="M12 3v18" />
      <path d="M6 6h12" />
      <path d="M6 6l-3 6a3 3 0 006 0l-3-6z" />
      <path d="M18 6l-3 6a3 3 0 006 0l-3-6z" />
      <path d="M9 21h6" />
    </svg>
  );
}

export function LockIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <rect x="4.5" y="10" width="15" height="10" rx="1.5" />
      <path d="M7.5 10V7a4.5 4.5 0 019 0v3" />
      <circle cx="12" cy="15" r="1.4" />
    </svg>
  );
}

export function RadarIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12L18 6" />
      <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" opacity="0.5" />
    </svg>
  );
}

export function HandshakeIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <path d="M2 12l4-4 4 3 3-3 4 4" />
      <path d="M6 8l3.5 3.5a1.5 1.5 0 002.5-1.5" />
      <path d="M14 15l2 2a1.5 1.5 0 002-2l-3-3" />
      <path d="M18 11l2 2a1.5 1.5 0 01-2 2" />
      <path d="M2 12l3 3" />
      <path d="M22 12l-4-4" />
    </svg>
  );
}

export function ClipboardListIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <rect x="5" y="4" width="14" height="17" rx="1.5" />
      <path d="M9 3.5h6a1 1 0 011 1V6H8V4.5a1 1 0 011-1z" />
      <path d="M8.5 11h7" />
      <path d="M8.5 14.5h7" />
      <path d="M8.5 18h4" />
    </svg>
  );
}

export function GlobeIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 010 18" />
      <path d="M12 3a14 14 0 000 18" />
    </svg>
  );
}

export function SparkleIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z" />
    </svg>
  );
}

export function ChatIcon({ size = 28, color = "#0A0A0A", style }: IconProps) {
  return (
    <svg {...base(size)} stroke={color} style={style}>
      <path d="M21 12a7 7 0 01-7 7H8l-5 3 1.4-4.6A7 7 0 0111 5h3a7 7 0 017 7z" />
    </svg>
  );
}
