import type { CSSProperties } from "react";

const waveform = [4, 8, 14, 22, 18, 26, 20, 30, 24, 16, 28, 12, 20, 32, 18, 10, 24, 14, 8, 6];

const transcript = [
  { speaker: "IA", text: "Contame sobre tu experiencia atendiendo clientes." },
  { speaker: "Candidato", text: "Llevo dos años en retail, manejando caja y piso de venta..." },
  { speaker: "IA", text: "¿Cómo manejás situaciones con clientes difíciles?" },
];

export function ProductMockupVoice() {
  return (
    <div className="product-ui product-ui--voice">
      <div className="product-ui__header">
        <span className="product-ui__label">Entrevista por voz · ES latino</span>
        <span className="product-ui__badge product-ui__badge--live">En curso</span>
      </div>
      <div className="product-ui__voice-panel">
        <div className="product-ui__mic" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="9" y="2" width="6" height="11" rx="3" />
            <path d="M5 10a7 7 0 0014 0M12 17v3" strokeLinecap="round" />
          </svg>
        </div>
        <div className="product-ui__waveform" aria-hidden>
          {waveform.map((h, i) => (
            <span
              key={i}
              className="product-ui__bar"
              style={{ "--h": `${h}px` } as CSSProperties}
            />
          ))}
        </div>
        <span className="product-ui__duration">04:32</span>
      </div>
      <div className="product-ui__transcript">
        {transcript.map((line, i) => (
          <p key={i} className="product-ui__line">
            <span className="product-ui__speaker">{line.speaker}</span>
            {line.text}
          </p>
        ))}
      </div>
      <div className="product-ui__analysis">
        <span className="product-ui__analysis-label">Análisis</span>
        <span className="product-ui__analysis-score">Ajuste: 87/100</span>
      </div>
    </div>
  );
}
