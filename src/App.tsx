import { useEffect, useState } from "react";
import { MockupBrowser } from "./components/MockupBrowser";
import { Reveal } from "./components/Reveal";

/** Sustituye por tu enlace real de Calendly u otra herramienta de agenda. */
const CALENDLY_URL = "https://calendly.com";
/** Calendly URL */
/** Mockups de producto (Unsplash — reemplaza por capturas reales de NOVA cuando las tengas). */
const MOCKUP_DASHBOARD = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85&auto=format&fit=crop";
const MOCKUP_PIPELINE = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85&auto=format&fit=crop";

/** Flow steps */
const flowSteps = [
  {
    n: "01",
    title: "Captura",
    desc: "Centralizas postulaciones y criterios de la vacante en un solo flujo.",
  },
  {
    n: "02",
    title: "Entrevista IA",
    desc: "Videollamadas iniciales guiadas que estandarizan la primera conversación.",
  },
  {
    n: "03",
    title: "Scoring",
    desc: "Cada interacción se traduce en señales comparables y trazables.",
  },
  {
    n: "04",
    title: "Decisión",
    desc: "Tu equipo prioriza con contexto y datos, no solo con intuición.",
  },
];

const stats = [
  { value: "100%", label: "Entrevistas iniciales estructuradas" },
  { value: "↓", label: "Menos ciclos repetitivos con candidatos" },
  { value: "∞", label: "Escala sin multiplicar horas de RRHH" },
];

function IconVideoAi() {
  return (
    <svg
      className="benefit-card__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="5" width="14" height="12" rx="2" />
      <path d="M16 10l4-2v8l-4-2" />
      <circle cx="8" cy="11" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconScoring() {
  return (
    <svg
      className="benefit-card__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15v-4" />
      <path d="M12 15V8" />
      <path d="M16 15v-6" />
      <path d="M20 15v-2" />
    </svg>
  );
}

function IconFilter() {
  return (
    <svg
      className="benefit-card__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 5h16l-6 7v5l-4 2v-7L4 5z" />
    </svg>
  );
}

function IconSpeed() {
  return (
    <svg
      className="benefit-card__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function IconAnalytics() {
  return (
    <svg
      className="benefit-card__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 19h16" />
      <path d="M4 15l4-4 4 3 4-6 4 3" />
      <circle cx="8" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="20" cy="11" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const faqItems = [
  {
    q: "¿Cómo reducir el tiempo invertido en entrevistas iniciales repetitivas?",
    a: "NOVA automatiza la primera conversación con videollamadas guiadas por IA, de modo que tu equipo solo profundiza con perfiles ya validados.",
  },
  {
    q: "¿Qué candidatos presentan un mejor nivel de ajuste desde la primera entrevista?",
    a: "Cada interacción genera un scoring objetivo alineado a la vacante, para que compares talento con criterios uniformes desde el día uno.",
  },
  {
    q: "¿Cómo disminuir la subjetividad en el proceso de selección?",
    a: "Estructuramos la evaluación en datos comparables y trazables, reduciendo sesgos implícitos y discusiones sin fundamento.",
  },
  {
    q: "¿Cómo escalar la capacidad de reclutamiento sin incrementar los costos operativos?",
    a: "La IA absorbe el volumen de screening inicial, permitiendo más postulantes evaluados con el mismo equipo de RRHH.",
  },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page" id="inicio">
      <div className="glow-orb glow-orb--gold" aria-hidden />
      <div className="glow-orb glow-orb--blue" aria-hidden />
      <div className="hero-mesh" aria-hidden />

      <header
        className={`site-header${headerScrolled ? " site-header--raised" : ""}`}
      >
        <div className="site-header__inner">
          <a href="#inicio" className="logo" aria-label="NOVA — Inicio">
            <svg
              className="logo__mark"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden
            >
              <path
                d="M16 5l2.4 7.8L27 15l-8.4 3L16 27l-2.4-7.8L5 15l8.4-3L16 5z"
                stroke="#EAB308"
                strokeWidth="1.2"
              />
            </svg>
            NOVA
          </a>
          <nav className="site-nav" aria-label="Principal">
            <a href="#proceso">Proceso</a>
            <a href="#producto">Producto</a>
            <a href="#valor">Valor</a>
            <a href="#faq">FAQ</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a href="#contacto" className="btn btn--primary">
            Agendar demo
          </a>
        </div>
      </header>

      <main>
        <section className="section hero" aria-labelledby="hero-title">
          <div className="section__inner hero__grid">
            <Reveal>
              <div className="hero__copy">
                <h1 id="hero-title" className="hero__headline">
                  <span className="hero__headline-line">
                    Reclutamiento inteligente.
                  </span>
                  <span className="hero__headline-line hero__headline-line--accent">
                    Decisiones objetivas.
                  </span>
                </h1>
                <p className="hero__tagline">
                  Iluminando el potencial de tu equipo con IA.
                </p>
                <p className="hero__desc">
                  Transformamos las etapas de evaluación y entrevistas mediante
                  analítica avanzada y tecnología aplicada.
                </p>
                <div className="hero__actions">
                  <a href="#producto" className="btn btn--primary btn--large">
                    Ver el producto
                  </a>
                  <a href="#contacto" className="btn btn--ghost btn--large">
                    Habla con un experto
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <div className="hero__mockup-wrap">
                <MockupBrowser
                  src={MOCKUP_DASHBOARD}
                  alt="Vista tipo panel de analítica y métricas de reclutamiento"
                  urlBar="app.nova.hr/analytics"
                  className="hero__mockup"
                />
                <p className="hero__mockup-caption">
                  Vista ilustrativa: sustituye por capturas reales de NOVA.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="section__inner hero__stats-wrap">
            <Reveal delayMs={120}>
              <ul className="stats-strip" aria-label="Propuestas de valor">
                {stats.map((s) => (
                  <li key={s.label} className="stats-strip__item">
                    <span className="stats-strip__value">{s.value}</span>
                    <span className="stats-strip__label">{s.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section section--tight-top" aria-labelledby="problema-titulo">
          <div className="section__inner split">
            <Reveal>
              <div className="split__panel split__panel--problem">
                <p className="split__eyebrow">El desafío</p>
                <h3 id="problema-titulo">Más postulaciones no bastan</h3>
                <p>
                  El siguiente paso rara vez consiste únicamente en recibir más
                  postulaciones, sino en convertir cada interacción inicial en
                  información estructurada y accionable.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="split__panel split__panel--solution">
                <p className="split__eyebrow split__eyebrow--gold">
                  La solución NOVA
                </p>
                <h3>De la conversación al dato</h3>
                <p>
                  Automatizamos la validación de aspectos generales a través de
                  entrevistas iniciales por videollamada impulsadas por
                  inteligencia artificial, generando un scoring para identificar a
                  los mejores perfiles.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          className="section"
          id="proceso"
          aria-labelledby="proceso-titulo"
        >
          <div className="section__inner">
            <Reveal>
              <p className="section__eyebrow">Flujo</p>
              <h2 className="section__title" id="proceso-titulo">
                Del primer contacto a la decisión
              </h2>
              <p className="section__lead section__lead--wide">
                Un recorrido claro para tu equipo: menos fricción operativa, más
                señal en cada etapa — el mismo tipo de claridad que esperas de
                herramientas de producto de primer nivel.
              </p>
            </Reveal>
            <div className="flow-grid">
              {flowSteps.map((step, i) => (
                <Reveal key={step.n} delayMs={i * 70}>
                  <div className="flow-card">
                    <span className="flow-card__num">{step.n}</span>
                    <h3 className="flow-card__title">{step.title}</h3>
                    <p className="flow-card__desc">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section-showcase"
          id="producto"
          aria-labelledby="showcase-titulo"
        >
          <div className="section__inner showcase">
            <Reveal>
              <div className="showcase__text">
                <p className="section__eyebrow">Producto</p>
                <h2 className="section__title" id="showcase-titulo">
                  Un cockpit para tu{" "}
                  <em className="showcase__em">funnel de talento</em>
                </h2>
                <p className="section__lead">
                  Paneles, tablas y tendencias que convierten entrevistas en
                  decisiones: información densa, presentada con calma — como en
                  las mejores landing de infraestructura y datos.
                </p>
                <a href="#valor" className="btn btn--ghost btn--large">
                  Explorar beneficios
                </a>
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="showcase__visual">
                <MockupBrowser
                  src={MOCKUP_PIPELINE}
                  alt="Vista tipo tablero de trabajo y métricas en laptop"
                  urlBar="app.nova.hr/pipeline"
                  className="showcase__mockup"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section
          className="section"
          id="valor"
          aria-labelledby="valor-titulo"
        >
          <div className="section__inner">
            <Reveal>
              <p className="section__eyebrow">Valor</p>
              <h2 className="section__title" id="valor-titulo">
                Dónde NOVA genera impacto
              </h2>
              <p className="section__lead" style={{ marginBottom: "2.5rem" }}>
                Beneficios clave para equipos B2B que buscan velocidad, rigor y
                analítica en selección.
              </p>
            </Reveal>
            <div className="benefits-grid">
              <Reveal delayMs={0}>
                <article className="benefit-card">
                  <IconVideoAi />
                  <h3>Automatización de entrevistas iniciales</h3>
                  <p>
                    Reducción de la carga operativa de RRHH mediante videollamadas
                    con IA.
                  </p>
                </article>
              </Reveal>
              <Reveal delayMs={60}>
                <article className="benefit-card">
                  <IconScoring />
                  <h3>Scoring inteligente</h3>
                  <p>
                    Clasificación de perfiles según su nivel de ajuste con la
                    vacante.
                  </p>
                </article>
              </Reveal>
              <Reveal delayMs={120}>
                <article className="benefit-card">
                  <IconFilter />
                  <h3>Filtrado ágil y consistente</h3>
                  <p>
                    Disminución de la subjetividad con criterios comparables y
                    trazables.
                  </p>
                </article>
              </Reveal>
              <Reveal delayMs={180}>
                <article className="benefit-card">
                  <IconSpeed />
                  <h3>Reducción de tiempos y costos</h3>
                  <p>
                    Aceleración del proceso de selección eliminando entrevistas
                    repetitivas.
                  </p>
                </article>
              </Reveal>
              <Reveal delayMs={240}>
                <article className="benefit-card">
                  <IconAnalytics />
                  <h3>Analítica para decisiones</h3>
                  <p>
                    Conversión de cada entrevista en datos útiles para identificar
                    patrones.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" id="faq" aria-labelledby="faq-titulo">
          <div className="section__inner">
            <Reveal>
              <p className="section__eyebrow">Auto-calificación</p>
              <h2 className="section__title" id="faq-titulo">
                ¿Estás listo para modernizar tu gestión de talento?
              </h2>
              <p className="section__lead section__lead--center">
                Si estas preguntas resuenan contigo, NOVA encaja en tu operación.
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <div
                className="accordion"
                role="region"
                aria-label="Preguntas frecuentes"
              >
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={item.q}
                      className="accordion__item"
                      data-open={isOpen}
                    >
                      <button
                        type="button"
                        className="accordion__trigger"
                        aria-expanded={isOpen}
                        id={`faq-trigger-${index}`}
                        aria-controls={`faq-panel-${index}`}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <span>{item.q}</span>
                        <svg
                          className="accordion__chevron"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                      <div
                        className="accordion__collapse"
                        data-open={isOpen}
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${index}`}
                        aria-hidden={!isOpen}
                      >
                        <div className="accordion__collapse-inner">
                          <div className="accordion__panel">
                            <p>{item.a}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        <section
          className="section footer-cta"
          id="contacto"
          aria-labelledby="cta-titulo"
        >
          <div className="footer-cta__glow" aria-hidden />
          <div className="section__inner">
            <Reveal>
              <h2 id="cta-titulo">
                Comienza a tomar decisiones basadas en datos hoy.
              </h2>
              <p className="footer-cta__support">
                Coordinemos una reunión presencial o virtual con nuestro equipo
                para explorar cómo traducir estas capacidades en valor para tu
                organización.
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <div className="contact-card">
                <p className="contact-card__name">Randy Rivera</p>
                <p className="contact-card__role">Business Analyst</p>
                <p className="contact-card__company">NOVA Group</p>
                <div className="contact-card__links">
                  <a href="mailto:rr36693904@gmail.com">rr36693904@gmail.com</a>
                  <a href="tel:+50232865479">+502 3286-5479</a>
                </div>
              </div>
            </Reveal>
            <Reveal delayMs={140}>
              <div className="footer-actions">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large"
                >
                  Agendar en el calendario
                </a>
                <a
                  href="mailto:rr36693904@gmail.com"
                  className="btn btn--ghost btn--large"
                >
                  Escribir por correo
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} NOVA Group. Todos los derechos reservados.</p>
        <p className="site-footer__credit">
          Imágenes de demostración:{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </p>
      </footer>
    </div>
  );
}
