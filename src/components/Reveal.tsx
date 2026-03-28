import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const { ref, visible } = useReveal();
  const style: CSSProperties = visible
    ? { transitionDelay: `${delayMs}ms` }
    : {};

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
