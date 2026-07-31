type AnimeInstance = {
  play: () => void;
  pause: () => void;
  restart: () => void;
  seek: (time: number) => void;
};

type AnimeParams = Record<string, unknown> & {
  targets?: unknown;
  duration?: number;
  delay?: number | ((el: Element, i: number) => number);
  easing?: string;
  opacity?: number | number[];
  translateY?: number | number[];
  translateX?: number | number[];
  scale?: number | number[];
  complete?: () => void;
};

export type AnimeTimeline = AnimeInstance & {
  add: (params: AnimeParams, offset?: string | number) => AnimeTimeline;
};

export type AnimeStatic = {
  (params: AnimeParams): AnimeInstance;
  timeline: (params?: AnimeParams) => AnimeTimeline;
  stagger: (
    value: number,
    options?: { from?: string | number; start?: number }
  ) => (el: Element, i: number) => number;
};

declare global {
  interface Window {
    anime?: AnimeStatic;
  }
}

export function getAnime(): AnimeStatic | null {
  return typeof window !== "undefined" && window.anime ? window.anime : null;
}

const animeProxy = ((params: AnimeParams) => {
  const a = getAnime();
  if (!a) {
    return { play() {}, pause() {}, restart() {}, seek() {} };
  }
  return a(params);
}) as AnimeStatic;

animeProxy.timeline = (params) => {
  const a = getAnime();
  if (!a) {
    const noop = { play() {}, pause() {}, restart() {}, seek() {}, add() { return noop; } };
    return noop as unknown as AnimeTimeline;
  }
  return a.timeline(params);
};

animeProxy.stagger = (value, options) => {
  const a = getAnime();
  if (!a) return () => 0;
  return a.stagger(value, options);
};

export default animeProxy;
