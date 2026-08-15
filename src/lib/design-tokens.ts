export const colors = {
  primary: "#08639A",
  primaryDark: "#064A73",
  background: "#F7F9FB",
  surface: "#FFFFFF",
  text: "#111827",
  muted: "#667085",
  border: "#E5E7EB",
  accent: "#E97A3F",
} as const;

export const spacing = {
  sectionY: "clamp(5rem, 10vw, 10rem)",
  containerX: "clamp(1.25rem, 4vw, 2.5rem)",
  containerMax: "1320px",
} as const;

export const radius = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px",
} as const;

export const shadows = {
  soft: "0 1px 2px rgba(17, 24, 39, 0.04), 0 8px 24px rgba(17, 24, 39, 0.06)",
  medium: "0 4px 16px rgba(17, 24, 39, 0.08)",
  nav: "0 1px 0 rgba(17, 24, 39, 0.05)",
} as const;

export const motion = {
  duration: {
    fast: 0.4,
    base: 0.6,
    slow: 0.8,
  },
  ease: [0.22, 1, 0.36, 1] as const,
} as const;

export const typography = {
  hero: "hero-heading",
  editorial: "editorial-heading",
  section: "section-heading",
  body: "body-text",
  bodyLarge: "body-text-lg",
} as const;
