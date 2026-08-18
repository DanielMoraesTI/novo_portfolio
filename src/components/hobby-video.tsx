"use client";

import { useEffect, useRef } from "react";

/**
 * Vídeo de hobby que só reproduz quando está visível na tela.
 * Evita gastar dados/CPU tocando vídeos fora do viewport (ex.: em grid ou carrossel).
 */
export function HobbyVideo({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay pode ser bloqueado pelo browser; sem problema, controls ficam disponíveis.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      muted
      loop
      playsInline
      controls
      preload="metadata"
      title={title}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
