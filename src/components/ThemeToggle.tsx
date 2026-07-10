import { useTheme, type ThemePreference } from "../hooks/useTheme";

const labels: Record<ThemePreference, string> = {
  system: "Tema automático (día o noche según el sistema)",
  light: "Tema claro",
  dark: "Tema oscuro",
};

export function ThemeToggle() {
  const { preference, cyclePreference } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cyclePreference}
      aria-label={labels[preference]}
      title={labels[preference]}
    >
      <span className={`theme-toggle__icon theme-toggle__icon--${preference}`} aria-hidden>
        {preference === "system" && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
          </svg>
        )}
        {preference === "light" && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
          </svg>
        )}
        {preference === "dark" && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 14.5A8.5 8.5 0 1112.5 3a6.5 6.5 0 009.5 11.5z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </button>
  );
}
