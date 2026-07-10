import { colors, fonts } from "../theme";

export interface MarqueeItem {
  name: string;
  url: string;
  logo?: string;
}

const SIZES = {
  md: { height: 64, minWidth: 140, padding: "0 24px", logoHeight: 22, logoMaxWidth: 110, fontSize: 12 },
  lg: { height: 88, minWidth: 176, padding: "0 32px", logoHeight: 32, logoMaxWidth: 140, fontSize: 13 },
};

export function LogoMarquee({
  items,
  durationSeconds = 32,
  size = "md",
}: {
  items: MarqueeItem[];
  durationSeconds?: number;
  size?: "md" | "lg";
}) {
  const loop = [...items, ...items];
  const dims = SIZES[size];

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
        style={{ display: "flex", width: "max-content", gap: 14, ["--kc-marquee-duration" as string]: `${durationSeconds}s` }}
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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              height: dims.height,
              minWidth: dims.minWidth,
              padding: dims.padding,
              border: `1px solid ${colors.border}`,
              background: "#fff",
              textDecoration: "none",
              transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.name}
                style={{ height: dims.logoHeight, width: "auto", maxWidth: dims.logoMaxWidth, objectFit: "contain" }}
              />
            ) : (
              <span
                style={{
                  fontFamily: fonts.sans,
                  fontWeight: 500,
                  fontSize: dims.fontSize,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  color: colors.ink,
                  whiteSpace: "nowrap" as const,
                }}
              >
                {item.name}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
