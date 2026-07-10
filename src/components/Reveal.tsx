import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type RevealVariant = "up" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  variant?: RevealVariant;
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  variant = "up",
}: RevealProps) {
  const { ref, visible } = useReveal();
  const style: CSSProperties = visible ? { transitionDelay: `${delayMs}ms` } : {};

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? "reveal--visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
