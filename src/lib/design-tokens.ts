export const colors = {
  light: {
    background: "#F7F4EC",
    surface: "#FFFFFF",
    primary: "#123F2A",
    primaryDark: "#0B2418",
    text: "#17231D",
    muted: "#66736B",
    accent: "#C9A84E",
    border: "#E5E1D8",
  },
  dark: {
    background: "#0B2418",
    surface: "#123522",
    primary: "#123F2A",
    primaryDark: "#081A12",
    text: "#F7F4EC",
    muted: "#B7C2BA",
    accent: "#C9A84E",
    border: "rgba(247, 244, 236, 0.12)",
  },
} as const;

export const spacing = {
  sectionY: "clamp(5rem, 10vw, 10rem)",
  containerX: "clamp(1.25rem, 4vw, 2.5rem)",
  containerMax: "1320px",
} as const;

export const radius = {
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
} as const;
