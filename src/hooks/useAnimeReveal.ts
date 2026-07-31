import { useEffect, useRef, useState } from "react";
import { getAnime } from "../lib/anime";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type Variant = "up" | "left" | "right" | "scale";

const fromByVariant: Record<Variant, Record<string, number>> = {
  up: { opacity: 0, translateY: 28 },
  left: { opacity: 0, translateX: -28 },
  right: { opacity: 0, translateX: 28 },
  scale: { opacity: 0, scale: 0.97, translateY: 12 },
};

export function useAnimeReveal(variant: Variant = "up", delayMs = 0) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const anime = getAnime();
    if (prefersReducedMotion() || !anime) {
      setVisible(true);
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const from = fromByVariant[variant];
    Object.assign(el.style, {
      opacity: String(from.opacity ?? 0),
      transform: [
        from.translateY != null ? `translateY(${from.translateY}px)` : "",
        from.translateX != null ? `translateX(${from.translateX}px)` : "",
        from.scale != null ? `scale(${from.scale})` : "",
      ]
        .filter(Boolean)
        .join(" "),
      willChange: "opacity, transform",
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || played.current) return;
          played.current = true;
          setVisible(true);
          anime({
            targets: el,
            opacity: [from.opacity ?? 0, 1],
            translateY: from.translateY != null ? [from.translateY, 0] : undefined,
            translateX: from.translateX != null ? [from.translateX, 0] : undefined,
            scale: from.scale != null ? [from.scale, 1] : undefined,
            duration: 900,
            delay: delayMs,
            easing: "easeOutCubic",
            complete: () => {
              el.style.willChange = "auto";
            },
          });
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [variant, delayMs]);

  return { ref, visible };
}
