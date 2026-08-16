import { assetPath } from "./asset-path";

export const heroVideo = {
  src: assetPath("/video/france-web.mp4"),
  poster: assetPath("/images/hero/hero-classroom-teal-session.jpg"),
  type: "video/mp4",
} as const;
