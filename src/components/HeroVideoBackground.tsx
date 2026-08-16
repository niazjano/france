"use client";

import { useEffect, useRef } from "react";

type HeroVideoBackgroundProps = {
  src: string;
  poster: string;
  type?: string;
};

export function HeroVideoBackground({
  src,
  poster,
  type = "video/mp4",
}: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      void video.play().catch(() => {
        // Autoplay may be blocked on some devices; poster remains visible.
      });
    };

    playVideo();

    video.addEventListener("canplay", playVideo);
    return () => video.removeEventListener("canplay", playVideo);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className="h-full w-full object-cover"
      aria-hidden="true"
    >
      <source src={src} type={type} />
    </video>
  );
}
