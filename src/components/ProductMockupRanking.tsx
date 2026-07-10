const candidates = [
  { rank: 1, name: "María González", role: "Ejecutivo ventas", score: 92, evidence: "3 años retail" },
  { rank: 2, name: "Carlos Ríos", role: "Ejecutivo ventas", score: 87, evidence: "Bilingüe ES/EN" },
  { rank: 3, name: "Ana López", role: "Ejecutivo ventas", score: 71, flag: "Gap experiencia B2B" },
  { rank: 4, name: "Diego Mora", role: "Ejecutivo ventas", score: 64, flag: "Rotación alta previa" },
];

export function ProductMockupRanking() {
  return (
    <div className="product-ui product-ui--ranking">
      <div className="product-ui__header">
        <span className="product-ui__label">Ranking · Ejecutivo ventas</span>
        <span className="product-ui__meta">247 CVs · 4.2s</span>
      </div>
      <ul className="product-ui__list">
        {candidates.map((c) => (
          <li key={c.rank} className="product-ui__row">
            <span className="product-ui__rank">{String(c.rank).padStart(2, "0")}</span>
            <div className="product-ui__info">
              <span className="product-ui__name">{c.name}</span>
              <span className="product-ui__detail">
                {c.flag ? (
                  <span className="product-ui__flag">{c.flag}</span>
                ) : (
                  <span className="product-ui__evidence">{c.evidence}</span>
                )}
              </span>
            </div>
            <span className={`product-ui__score${c.score < 75 ? " product-ui__score--low" : ""}`}>
              {c.score}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
