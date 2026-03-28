type MockupBrowserProps = {
  src: string;
  alt: string;
  urlBar?: string;
  className?: string;
};

export function MockupBrowser({
  src,
  alt,
  urlBar = "app.nova.hr/dashboard",
  className = "",
}: MockupBrowserProps) {
  return (
    <div className={`mockup-browser ${className}`.trim()}>
      <div className="mockup-browser__chrome">
        <div className="mockup-browser__dots" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="mockup-browser__url">
          <span className="mockup-browser__lock" aria-hidden>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 11V8a5 5 0 0110 0v3M6 11h12v10H6V11z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="mockup-browser__url-text">{urlBar}</span>
        </div>
      </div>
      <div className="mockup-browser__viewport">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
    </div>
  );
}
