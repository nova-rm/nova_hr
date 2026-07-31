import { useEffect, useState } from "react";
import { MockupBrowser } from "./components/MockupBrowser";
import { ProductMockupRanking } from "./components/ProductMockupRanking";
import { ProductMockupVoice } from "./components/ProductMockupVoice";
import { ThemeToggle } from "./components/ThemeToggle";
import { Reveal } from "./components/Reveal";
import { getAnime } from "./lib/anime";

const CALENDLY_URL = "https://calendly.com";

const navLinks = [
  { href: "#verticales", label: "Industrias" },
  { href: "#proceso", label: "Proceso" },
  { href: "#producto", label: "Producto" },
  { href: "#valor", label: "Valor" },
  { href: "#faq", label: "Consultas" },
  { href: "#contacto", label: "Contacto" },
];

const flowSteps = [
  {
    n: "01",
    title: "Selección documental",
    desc: "Clasificación de currículos en segundos, con evidencia y señales de alerta identificadas.",
  },
  {
    n: "02",
    title: "Entrevista oral",
    desc: "Primera conversación por voz, en español latinoamericano, configurable según el perfil del cargo.",
  },
  {
    n: "03",
    title: "Análisis estructurado",
    desc: "Entrevista y dictamen disponibles el mismo día, bajo criterios uniformes para cada candidato.",
  },
  {
    n: "04",
    title: "Decisión informada",
    desc: "El equipo prioriza perfiles ya evaluados con el mismo estándar, en cualquier país o función.",
  },
];

const stats = [
  { value: "<5s", label: "Clasificación de currículos con evidencia y alertas" },
  { value: "Voz", label: "Entrevista oral; no un cuestionario genérico" },
  { value: "1 día", label: "Entrevista y análisis listos el mismo día" },
];

const verticals = [
  {
    title: "Comercio minorista",
    desc: "Volumen elevado de postulaciones por sucursal, con el mismo criterio en cada local.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 9l2-5h14l2 5M5 9v11h14V9M9 20v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "BPO",
    desc: "Selección masiva con evaluación uniforme para operaciones internacionales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
        <circle cx="18" cy="18" r="3" />
      </svg>
    ),
  },
  {
    title: "Centros de contacto",
    desc: "Entrevista por voz que valora la comunicación real, no únicamente formularios.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M5 4h4l2 4-2 2a11 11 0 005 5l2-2 4 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Ventas",
    desc: "Clasificación ágil con alertas antes de invertir el tiempo del responsable de contratación.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 20V10M18 20V4M6 20v-4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const contacts = [
  {
    name: "Juan Pablo Vallejo",
    role: "Director de operaciones",
    company: "NOVA",
    email: "j.vallejo@novahr.group",
  },
  {
    name: "Randy Rivera",
    role: "Analista de negocio",
    company: "NOVA",
    email: "r.rivera@novahr.group",
    phone: "+502 3286-5479",
    phoneHref: "tel:+50232865479",
  },
];

function IconVoice() {
  return (
    <svg className="benefit-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0014 0M12 17v3" />
      <path d="M8 21h8" />
    </svg>
  );
}

function IconScoring() {
  return (
    <svg className="benefit-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
    <svg className="benefit-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 5h16l-6 7v5l-4 2v-7L4 5z" />
    </svg>
  );
}

const faqItems = [
  {
    q: "¿Cómo prescindir de la revisión manual de currículos?",
    a: "NOVA clasifica y ordena las postulaciones en segundos, con evidencia y señales de alerta marcadas, a fin de que el responsable de selección deje de destinar horas al cribado manual.",
  },
  {
    q: "¿La entrevista con inteligencia artificial es un cuestionario genérico?",
    a: "No. Se trata de una conversación por voz, en español latinoamericano, natural y configurable por cada cargo; no de un formulario estándar aplicable a todos los puestos.",
  },
  {
    q: "¿Cuál es el plazo para disponer de resultados?",
    a: "La entrevista y el análisis quedan listos el mismo día, con criterios uniformes que permiten comparar candidatos bajo el mismo estándar.",
  },
  {
    q: "¿Para qué tipo de organizaciones resulta pertinente NOVA?",
    a: "En particular para operaciones de alto volumen —comercio minorista, BPO, centros de contacto, ventas— o equipos de recursos humanos que reclutan en varios países o funciones y requieren evaluar a todos con el mismo criterio.",
  },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    const anime = getAnime();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll<HTMLElement>(
      ".hero__brand, .hero__headline-line--accent, .hero__tagline, .hero__desc, .hero__actions"
    );

    if (!anime || reduced) {
      nodes.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    const tl = anime.timeline({ easing: "easeOutCubic" });
    tl.add({
      targets: ".hero__brand",
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 1100,
    })
      .add(
        {
          targets: ".hero__headline-line--accent",
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 900,
        },
        "-=700"
      )
      .add(
        {
          targets: ".hero__tagline",
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 800,
        },
        "-=550"
      )
      .add(
        {
          targets: ".hero__desc",
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 800,
        },
        "-=500"
      )
      .add(
        {
          targets: ".hero__actions",
          opacity: [0, 1],
          translateY: [8, 0],
          duration: 750,
        },
        "-=450"
      );
  }, []);

  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <div className="page" id="inicio">
      <div className="hero-mesh" aria-hidden />

      <header className={`site-header${headerScrolled ? " site-header--raised" : ""}`}>
        <div className="site-header__inner">
          <a href="#inicio" className="logo" aria-label="NOVA — Inicio">
            <svg className="logo__mark" viewBox="0 0 32 32" fill="none" aria-hidden>
              <path d="M16 5l2.4 7.8L27 15l-8.4 3L16 27l-2.4-7.8L5 15l8.4-3L16 5z" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            NOVA
          </a>

          <nav className="site-nav" aria-label="Principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <div className="site-header__actions">
            <ThemeToggle />
            <a href="#contacto" className="btn btn--primary site-header__cta">
              Solicitar demostración
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              aria-label={mobileNavOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`mobile-nav${mobileNavOpen ? " mobile-nav--open" : ""}`}
        aria-hidden={!mobileNavOpen}
      >
        <div className="mobile-nav__backdrop" onClick={closeMobileNav} aria-hidden />
        <nav className="mobile-nav__panel" aria-label="Menú móvil">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMobileNav}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn--primary btn--large" onClick={closeMobileNav}>
            Solicitar demostración
          </a>
          <div className="mobile-nav__theme">
            <ThemeToggle />
            <span>Apariencia: automática / clara / oscura</span>
          </div>
        </nav>
      </div>

      <main>
        <section className="section hero" aria-labelledby="hero-title">
          <div className="section__inner hero__grid">
            <div className="hero__copy-wrap">
              <div className="hero__copy hero__copy--animate">
                <h1 id="hero-title" className="hero__headline">
                  <span className="hero__brand">NOVA</span>
                  <span className="hero__headline-line hero__headline-line--accent">
                    Selección documental y entrevistas orales con inteligencia artificial.
                  </span>
                </h1>
                <p className="hero__tagline">
                  Automatización del reclutamiento para equipos de alto volumen.
                </p>
                <p className="hero__desc">
                  En cuestión de segundos se obtiene la clasificación con evidencia y señales de alerta. La primera entrevista se conduce por voz, en español latinoamericano, y se configura según cada cargo.
                </p>
                <div className="hero__actions">
                  <a href="#contacto" className="btn btn--primary btn--large">Solicitar demostración</a>
                  <a href="#producto" className="btn btn--ghost btn--large">Examinar el producto</a>
                </div>
              </div>
            </div>
            <Reveal delayMs={120} variant="scale">
              <div className="hero__mockup-wrap">
                <MockupBrowser urlBar="app.nova.hr/ranking" className="hero__mockup">
                  <ProductMockupRanking />
                </MockupBrowser>
              </div>
            </Reveal>
          </div>
          <div className="section__inner hero__stats-wrap">
            <Reveal delayMs={80}>
              <ul className="stats-strip" aria-label="Indicadores de valor">
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
            <Reveal variant="left" className="split__reveal">
              <div className="split__panel split__panel--problem">
                <p className="split__eyebrow">El desafío</p>
                <h3 id="problema-titulo">La revisión manual consume horas</h3>
                <p>
                  Examinar postulaciones a mano y reiterar entrevistas iniciales detrae tiempo del especialista en selección, en particular ante un volumen elevado de aplicaciones.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100} variant="right" className="split__reveal">
              <div className="split__panel split__panel--solution">
                <p className="split__eyebrow split__eyebrow--gold">La propuesta NOVA</p>
                <h3>Filtrado y entrevista asistidos</h3>
                <p>
                  NOVA automatiza la selección de currículos y la primera entrevista mediante inteligencia artificial. En segundos se dispone del ordenamiento con evidencia; la entrevista y el análisis quedan listos el mismo día.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="verticales" aria-labelledby="verticales-titulo">
          <div className="section__inner">
            <Reveal>
              <p className="section__eyebrow">Industrias</p>
              <h2 className="section__title" id="verticales-titulo">
                Concebido para alto volumen
              </h2>
              <p className="section__lead section__lead--wide">
                Cuando el equipo procesa decenas o centenares de postulaciones por vacante, NOVA responde a esa exigencia operativa.
              </p>
            </Reveal>
            <div className="verticals-grid">
              {verticals.map((v, i) => (
                <Reveal key={v.title} delayMs={i * 70}>
                  <article className="vertical-card">
                    <div className="vertical-card__icon">{v.icon}</div>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section social-proof" aria-labelledby="social-titulo">
          <div className="section__inner">
            <Reveal>
              <p className="social-proof__quote" id="social-titulo">
                Equipos de recursos humanos en Centroamérica emplean NOVA para reducir horas de cribado manual y estandarizar la primera entrevista.
              </p>
              <p className="social-proof__note">
                Piloto en curso · Incorporación de organizaciones con procesos de alto volumen
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section" id="proceso" aria-labelledby="proceso-titulo">
          <div className="section__inner">
            <Reveal>
              <p className="section__eyebrow">Secuencia</p>
              <h2 className="section__title" id="proceso-titulo">Del primer contacto a la decisión</h2>
              <p className="section__lead section__lead--wide">
                Orientado a comercio minorista, BPO, centros de contacto, ventas y equipos de recursos humanos que reclutan en varios países o funciones, con el mismo criterio para cada candidato.
              </p>
            </Reveal>
            <div className="flow-grid">
              {flowSteps.map((step, i) => (
                <Reveal key={step.n} delayMs={i * 90} variant="up">
                  <div className={`flow-card${i % 2 === 1 ? " flow-card--open" : ""}`}>
                    <span className="flow-card__num">{step.n}</span>
                    <h3 className="flow-card__title">{step.title}</h3>
                    <p className="flow-card__desc">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-showcase" id="producto" aria-labelledby="showcase-titulo">
          <div className="section__inner showcase">
            <Reveal>
              <div className="showcase__text">
                <p className="section__eyebrow">Producto</p>
                <h2 className="section__title" id="showcase-titulo">
                  Clasificación, entrevista y análisis en un solo <em className="showcase__em">flujo</em>
                </h2>
                <p className="section__lead">
                  Desde el filtrado documental con evidencia hasta la entrevista oral configurable por cargo: todo disponible el mismo día para decidir con criterios uniformes.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100} variant="scale">
              <div className="showcase__visual">
                <MockupBrowser urlBar="app.nova.hr/entrevista" className="showcase__mockup">
                  <ProductMockupVoice />
                </MockupBrowser>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="valor" aria-labelledby="valor-titulo">
          <div className="section__inner">
            <Reveal>
              <p className="section__eyebrow">Valor</p>
              <h2 className="section__title" id="valor-titulo">Ámbitos de impacto de NOVA</h2>
              <p className="section__lead section__lead--wide" style={{ marginBottom: "2rem" }}>
                Se liberan horas de cribado manual y se estandariza la evaluación en equipos de alto volumen o de reclutamiento multi-país.
              </p>
            </Reveal>

            <Reveal delayMs={40}>
              <div className="benefit-highlight">
                <span className="benefit-highlight__value">1 día</span>
                <div>
                  <h3>Resultados el mismo día</h3>
                  <p>Entrevista y análisis disponibles sin aguardar jornadas de cribado manual ni ciclos reiterados con candidatos.</p>
                </div>
              </div>
            </Reveal>

            <div className="benefits-layout">
              <Reveal delayMs={0}>
                <article className="benefit-card">
                  <IconVoice />
                  <h3>Entrevista oral con inteligencia artificial</h3>
                  <p>Primera conversación en español latinoamericano, natural y configurable por cada cargo.</p>
                </article>
              </Reveal>
              <Reveal delayMs={60}>
                <article className="benefit-card">
                  <IconScoring />
                  <h3>Clasificación de currículos en segundos</h3>
                  <p>Evidencia y señales de alerta sin revisar pilas de postulaciones de forma manual.</p>
                </article>
              </Reveal>
              <Reveal delayMs={120}>
                <article className="benefit-card">
                  <IconFilter />
                  <h3>Criterio uniforme</h3>
                  <p>Adecuado para equipos que reclutan en varios países o funciones y requieren un mismo estándar de evaluación.</p>
                </article>
              </Reveal>
            </div>

            <div className="benefit-rows">
              <Reveal delayMs={160}>
                <div className="benefit-row">
                  <span className="benefit-row__num">04</span>
                  <div>
                    <h3>Alto volumen de aplicaciones</h3>
                    <p>Concebido para comercio minorista, BPO, centros de contacto, ventas y toda operación con numerosas postulaciones por vacante.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" id="faq" aria-labelledby="faq-titulo">
          <div className="section__inner">
            <Reveal>
              <p className="section__eyebrow">Autoevaluación</p>
              <h2 className="section__title" id="faq-titulo">¿El proceso de reclutamiento absorbe tiempo excesivo?</h2>
              <p className="section__lead section__lead--center">
                Si estas cuestiones resultan pertinentes, con gusto presentamos el funcionamiento de NOVA.
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <div className="accordion" role="region" aria-label="Consultas frecuentes">
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={item.q} className="accordion__item" data-open={isOpen}>
                      <button
                        type="button"
                        className="accordion__trigger"
                        aria-expanded={isOpen}
                        id={`faq-trigger-${index}`}
                        aria-controls={`faq-panel-${index}`}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <span>{item.q}</span>
                        <svg className="accordion__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
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

        <section className="section footer-cta" id="contacto" aria-labelledby="cta-titulo">
          <div className="section__inner">
            <Reveal>
              <h2 id="cta-titulo">Conversemos sobre su proceso de reclutamiento.</h2>
              <p className="footer-cta__support">
                Buscamos organizaciones con alto volumen de aplicaciones o equipos de recursos humanos multi-país. Coordinemos una demostración y presentaremos el funcionamiento de NOVA. Puede dirigirse a cualquiera de nuestros interlocutores o a ambos.
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <div className="contact-cards">
                {contacts.map((contact, i) => (
                  <Reveal key={contact.email} delayMs={i * 80} variant="scale">
                    <div className="contact-card contact-card--featured">
                      <span className="contact-card__badge">Equipo NOVA</span>
                      <p className="contact-card__name">{contact.name}</p>
                      <p className="contact-card__role">{contact.role}</p>
                      <p className="contact-card__company">{contact.company}</p>
                      <div className="contact-card__links">
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        {contact.phone && contact.phoneHref && (
                          <a href={contact.phoneHref}>{contact.phone}</a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
            <Reveal delayMs={140}>
              <div className="footer-actions">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
                  Reservar en el calendario
                </a>
                <a
                  href={`mailto:${contacts.map((c) => c.email).join(",")}?subject=${encodeURIComponent("Consulta NOVA — Demostración")}`}
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
        <p>© {new Date().getFullYear()} NOVA. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
