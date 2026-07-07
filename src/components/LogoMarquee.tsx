import { colors, fonts } from "../theme";

export interface MarqueeItem {
  name: string;
  url: string;
  logo?: string;
}

export function LogoMarquee({ items, durationSeconds = 32 }: { items: MarqueeItem[]; durationSeconds?: number }) {
  const loop = [...items, ...items];

  return (
    <div
      className="kc-marquee-viewport"
      style={{
        position: "relative",
        overflow: "hidden",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 64px, #000 calc(100% - 64px), transparent)",
        maskImage: "linear-gradient(90deg, transparent, #000 64px, #000 calc(100% - 64px), transparent)",
      }}
    >
      <div
        className="kc-marquee-track"
        style={{ display: "flex", width: "max-content", gap: 12, ["--kc-marquee-duration" as string]: `${durationSeconds}s` }}
      >
        {loop.map((item, i) => (
          <a
            key={`${item.name}-${i}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden={i >= items.length ? "true" : undefined}
            tabIndex={i >= items.length ? -1 : undefined}
            className="kc-marquee-card"
            style={logoCard}
          >
            {item.logo ? (
              <img src={item.logo} alt={item.name} style={{ height: 22, width: "auto", maxWidth: 110, objectFit: "contain" }} />
            ) : (
              <span style={fallbackText}>{item.name}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

const logoCard = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  height: 64,
  minWidth: 140,
  padding: "0 24px",
  border: `1px solid ${colors.border}`,
  background: "#fff",
  textDecoration: "none",
  transition: "border-color 0.2s ease, transform 0.2s ease",
};

const fallbackText = {
  fontFamily: fonts.sans,
  fontWeight: 500,
  fontSize: 12,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  color: colors.ink,
  whiteSpace: "nowrap" as const,
};
