"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { HobbyVideo } from "@/components/hobby-video";

type Hobby = {
  title: string;
  description: string;
  type: "video" | "iframe";
  src: string;
};

export function HobbiesCarousel({ hobbies }: { hobbies: Hobby[] }) {
  const [index, setIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
  const n = hobbies.length;
  const hobby = hobbies[index];

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const update = () => setCardSize({ width: el.offsetWidth, height: (el.offsetWidth * 9) / 16 });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function go(next: number) {
    setIndex((next + n) % n);
  }

  const peekOffset = cardSize.width * 0.86;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative">
        <div
          className="relative mx-auto w-full max-w-2xl"
          style={{ height: cardSize.height || undefined }}
        >
          {hobbies.map((h, i) => {
            let rel = i - index;
            if (rel > n / 2) rel -= n;
            if (rel < -n / 2) rel += n;
            if (Math.abs(rel) > 1) return null;
            const isCenter = rel === 0;

            return (
              <motion.div
                key={h.title}
                ref={isCenter ? cardRef : undefined}
                initial={false}
                animate={{
                  x: rel * peekOffset,
                  scale: isCenter ? 1 : 0.78,
                  opacity: isCenter ? 1 : 0.22,
                  filter: isCenter ? "blur(0px)" : "blur(9px)",
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ zIndex: isCenter ? 10 : 1, pointerEvents: isCenter ? "auto" : "none" }}
                className="absolute inset-0 mx-auto w-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg"
              >
                {h.type === "video" ? (
                  isCenter ? (
                    <HobbyVideo src={h.src} title={`Vídeo sobre ${h.title}`} />
                  ) : (
                    <video
                      muted
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover"
                    >
                      <source src={h.src} type="video/mp4" />
                    </video>
                  )
                ) : (
                  <iframe
                    className="h-full w-full"
                    src={h.src}
                    title={`Vídeo do YouTube sobre ${h.title}`}
                    loading="lazy"
                    allowFullScreen
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Hobby anterior"
          onClick={() => go(index - 1)}
          className="absolute top-1/2 left-1 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background shadow-md transition hover:-translate-x-0.5 hover:-translate-y-1/2 hover:border-primary/50 sm:left-2 sm:size-10"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Próximo hobby"
          onClick={() => go(index + 1)}
          className="absolute top-1/2 right-1 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background shadow-md transition hover:translate-x-0.5 hover:-translate-y-1/2 hover:border-primary/50 sm:right-2 sm:size-10"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="mx-auto mt-6 max-w-md text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={hobby.title}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-center gap-2">
              <Briefcase className="size-4 text-accent" />
              <h3 className="font-semibold">{hobby.title}</h3>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{hobby.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {hobbies.map((h, i) => (
          <button
            key={h.title}
            type="button"
            aria-label={`Ver hobby: ${h.title}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
