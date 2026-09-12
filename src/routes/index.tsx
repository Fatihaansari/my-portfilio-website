import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  ArrowRight,
  GraduationCap,
  Send,
  X,
  MapPin,
  Check,
} from "lucide-react";
const fatiha = "/images/fatiha.jpeg";
import {
  ScrollProgress,
  LoadingScreen,
  BackToTop,
} from "@/components/portfolio/effects";
import {
  projects,
  stack,
  tools,
  services,
  socials,
  type Project,
} from "@/components/portfolio/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fatiha Ansari — Front-End Developer & React Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Fatiha Ansari, a Front-End Developer crafting modern, responsive, and user-focused web experiences with React, TypeScript, and Tailwind CSS.",
      },
      { property: "og:title", content: "Fatiha Ansari — Front-End Developer & React Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Fatiha Ansari, a Front-End Developer crafting modern, responsive, and user-focused web experiences with React, TypeScript, and Tailwind CSS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const GOLD = "#c9a24a";

/* ---------------- Brand icons ---------------- */
function BrandIcon({ brand, size = 16 }: { brand: string; size?: number }) {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor" };
  switch (brand) {
    case "github":
      return <Github size={size} />;
    case "linkedin":
      return <Linkedin size={size} />;
    case "email":
      return <Mail size={size} />;
    case "freelancer":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M15.65 3l-1.3 3.35L18 6.7 15.65 3zM8.4 6.7l-3.7-.3L3 3l5.4 3.7zM12 8.2l-5.7.2L2.3 12l8.5-.2L12 8.2zm.6 0l1.2 3.6 7.9.2-3.9-3.6-5.2-.2zM11.6 12.4L4 12.7l7 8.3.6-8.6zm.7 0l.7 8.6 7-8.3-7.7-.3z" />
        </svg>
      );
    case "contra":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.4 0 4.6-.85 6.32-2.26l-2.14-2.14A6.97 6.97 0 0 1 12 19a7 7 0 1 1 4.24-12.56l2.13-2.14A9.95 9.95 0 0 0 12 2z" />
        </svg>
      );
    case "gumroad":
      return (
        <svg {...props} aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm.9 14.3h-2.1v-1.2c-2 0-3.6-1.6-3.6-3.7a4.7 4.7 0 0 1 4.7-4.7c2.3 0 4 1.5 4.4 3.5h-2.4a2.1 2.1 0 0 0-2-1.4 2.5 2.5 0 0 0-2.5 2.6 2.4 2.4 0 0 0 2.5 2.5h1.9v-1.5H10v-1.7h5.3v5.6h-2.4z" />
        </svg>
      );
    default:
      return null;
  }
}

function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <LoadingScreen done={loaded} />
      <ScrollProgress />
      <BackToTop />

      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Tools />
        <Projects onOpen={setActiveProject} />
        <Services />
        <Education />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {activeProject !== null && (
          <ProjectModal
            project={projects[activeProject]}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Skills", "#stack"],
    ["Projects", "#projects"],
    ["Services", "#services"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2">
          <div
            className="grid h-9 w-9 place-items-center rounded-lg text-sm font-black text-black"
            style={{ background: GOLD }}
          >
            FA
          </div>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-white sm:block">
            Fatiha Ansari
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full px-5 py-2 text-sm font-semibold text-black md:inline-flex"
          style={{ background: GOLD }}
        >
          Hire Me
        </a>
        <button
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <span className="text-xl leading-none">≡</span>}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-black/80 p-3 backdrop-blur-xl md:hidden"
          >
            {links.map(([l, h]) => (
              <a
                key={l}
                href={h}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-white/80 hover:bg-white/5"
              >
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative px-4 pt-36 pb-24 sm:pt-44">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="relative order-2 lg:order-1">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em]"
            style={{ borderColor: `${GOLD}55`, color: GOLD }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: GOLD }} />
            Available for new projects — 2026
          </div>

          <h1 className="font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
            Fatiha Ansari.
            <br />
            <span className="text-white/40">Front-end developer</span>
            <br />
            <span style={{ color: GOLD }}>crafting premium interfaces.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            I design and develop premium, production-grade web experiences with
            React, TypeScript and Tailwind CSS — focused on clarity, motion and
            measurable performance.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              style={{ background: GOLD }}
            >
              View selected work
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-white/40 hover:bg-white/[0.04]"
            >
              <Mail size={15} /> Get in touch
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-white/60 transition hover:text-white"
            >
              <Download size={15} /> Resume
            </a>
          </div>

          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <Stat n="20+" l="Projects" />
            <Stat n="2+ yrs" l="Experience" />
            <Stat n="Karachi" l="Remote · Global" />
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <img
              src={fatiha}
              alt="Fatiha Ansari, Front-End Developer"
              loading="eager"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div
                  className="text-[10px] uppercase tracking-[0.25em]"
                  style={{ color: GOLD }}
                >
                  Front-end Developer
                </div>
                <div className="mt-1 font-display text-lg text-white">Fatiha Ansari</div>
              </div>
              <div className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/80 backdrop-blur">
                PK · 2026
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between px-1 text-[11px] uppercase tracking-[0.2em] text-white/40">
            <span>Portfolio / 001</span>
            <span>React · TS · Tailwind</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-medium text-white">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-white/40">{l}</div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const stats = [
    { n: "20+", l: "Projects Completed" },
    { n: "15+", l: "Technologies" },
    { n: "5+", l: "Certificates" },
    { n: "10+", l: "Happy Clients" },
  ];
  return (
    <section id="about" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="About Me" title="Turning ideas into" accent="premium interfaces" />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10"
          >
            <p className="text-lg leading-relaxed text-white/80">
              I'm <span className="font-semibold text-white">Fatiha Ansari</span>, a
              Front-End Developer passionate about building modern, responsive, and
              user-focused web experiences.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Skilled in HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS,
              Bootstrap, Git, GitHub, Responsive Design, REST APIs, and Figma.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              I enjoy transforming ideas into clean, high-performance interfaces
              and continuously learning modern web technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Karachi, Pakistan", "Front-End", "React", "Open to Work"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <motion.div
                key={s.l}
                {...fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="font-display text-4xl font-semibold" style={{ color: GOLD }}>
                  {s.n}
                </div>
                <div className="mt-2 text-sm text-white/70">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STACK ---------------- */
function Stack() {
  return (
    <section id="stack" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Skills" title="The tools I use" accent="every day" />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {stack.map((s) => (
            <div
              key={s}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-center text-sm text-white/85 transition hover:border-white/25 hover:bg-white/[0.05]"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TOOLS ---------------- */
function Tools() {
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Tools" title="My daily" accent="workbench" />
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-white/80 transition hover:border-white/25 hover:text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <section id="projects" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Featured Work" title="Selected" accent="projects" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-white/25"
            >
              <button
                onClick={() => onOpen(i)}
                className="block w-full text-left"
                aria-label={`Open ${p.title}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/65">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/60">
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </button>
              {(p.live || p.github) && (
                <div className="flex gap-2 border-t border-white/5 p-4">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-black"
                      style={{ background: GOLD }}
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/90 hover:bg-white/10"
                    >
                      <Github size={13} /> GitHub
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] grid place-items-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.97, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.97, y: 10 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-neutral-950"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/60 text-white hover:bg-white/10"
        >
          <X size={16} />
        </button>
        <img src={project.image} alt={project.title} className="max-h-[60vh] w-full object-cover" />
        <div className="p-8">
          <h3 className="font-display text-3xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-white/70">{project.description}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/50">Tech Stack</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/50">Features</div>
              <ul className="mt-2 space-y-1 text-sm text-white/80">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={14} className="mt-1" style={{ color: GOLD }} /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {(project.live || project.github) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-black"
                  style={{ background: GOLD }}
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Github size={14} /> Source
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  return (
    <section id="services" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Services" title="How I can" accent="help you" />
        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/25"
            >
              <div
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                style={{ background: `${GOLD}22`, color: GOLD }}
              >
                <Check size={16} />
              </div>
              <div className="font-medium text-white/90">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EDUCATION ---------------- */
function Education() {
  const items = [
    {
      title: "Modern Web App Development",
      org: "Saylani Mass IT Training Centre",
      year: "2026",
      desc: "Intensive training in modern web application development covering React, TypeScript, Tailwind CSS, and industry best practices.",
    },
    {
      title: "Intermediate",
      org: "Sir Syed Girls Government College",
      year: "2026",
      desc: "Currently pursuing intermediate education with focus on science and computer studies.",
    },
    {
      title: "Matric",
      org: "Aziz e Millat English Medium School",
      year: "",
      desc: "Completed secondary education with strong academic foundation.",
    },
  ];
  return (
    <section id="education" className="relative px-4 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Education" title="Academic" accent="journey" />

        <div className="relative mt-14">
          {/* vertical line — hidden on small screens for a cleaner mobile view */}
          <div
            className="absolute top-0 bottom-0 left-5 hidden w-px md:left-1/2 md:block md:-translate-x-1/2"
            style={{ background: `linear-gradient(to bottom, ${GOLD}40, ${GOLD}10)` }}
          />

          <div className="space-y-8 md:space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                {...fadeUp}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* timeline dot */}
                <div
                  className="absolute top-6 left-5 z-10 hidden h-3 w-3 rounded-full border-2 border-black md:left-1/2 md:block md:-translate-x-1/2"
                  style={{ background: GOLD }}
                />

                {/* card */}
                <div className="md:w-1/2 md:px-8">
                  <div className="relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20 sm:p-6">
                    <div
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
                      style={{ background: `${GOLD}22`, color: GOLD }}
                    >
                      <GraduationCap size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-black"
                          style={{ background: GOLD }}
                        >
                          {it.year || "Completed"}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
                        {it.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/80">{it.org}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">{it.desc}</p>
                    </div>
                  </div>
                </div>

                {/* empty side for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GITHUB ---------------- */
function GitHubSection() {
  const repos = [
    { name: "portfolio-website", desc: "Personal portfolio built with React & Tailwind CSS" },
    { name: "restaurant-landing", desc: "Modern restaurant landing page with animations" },
    { name: "amazon-clone", desc: "Pixel-accurate Amazon landing page clone" },
    { name: "react-components", desc: "Reusable React + TypeScript UI components" },
  ];
  return (
    <section id="github" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="GitHub" title="Explore my" accent="projects" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/60">
          View my complete portfolio of open-source work and personal projects on GitHub.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/Fatihaansari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black"
            style={{ background: GOLD }}
          >
            <Github size={16} /> View My GitHub Portfolio
          </a>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {repos.map((r) => (
            <a
              key={r.name}
              href="https://github.com/Fatihaansari"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/25"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Github size={18} style={{ color: GOLD }} />
                  <span className="font-display font-semibold text-white">{r.name}</span>
                </div>
                <ExternalLink
                  size={14}
                  className="text-white/40 transition group-hover:text-white"
                />
              </div>
              <p className="mt-3 text-sm text-white/65">{r.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const cards = [
    { icon: Mail, label: "Email", value: "fatihaansari786@gmail.com", href: "mailto:fatihaansari786@gmail.com" },
    { icon: MapPin, label: "Location", value: "Karachi, Pakistan", href: "#" },
  ];
  return (
    <section id="contact" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Contact" title="Let's build" accent="something great" />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {cards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/25"
                >
                  <div
                    className="grid h-10 w-10 place-items-center rounded-lg"
                    style={{ background: `${GOLD}22`, color: GOLD }}
                  >
                    <c.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-white/50">
                      {c.label}
                    </div>
                    <div className="truncate text-sm text-white/90">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-xs uppercase tracking-widest text-white/50">
                Find me online
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-white/10 px-3 py-2.5 text-sm text-white/85 transition hover:border-white/30 hover:bg-white/[0.05]"
                  >
                    <span
                      className="grid h-8 w-8 place-items-center rounded-lg"
                      style={{ background: `${GOLD}22`, color: GOLD }}
                    >
                      <BrandIcon brand={s.brand} size={14} />
                    </span>
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3500);
              (e.currentTarget as HTMLFormElement).reset();
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                style={{ borderColor: undefined }}
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              style={{ background: GOLD }}
            >
              <Send size={15} /> {sent ? "Message Sent ✓" : "Send Message"}
            </button>
            {sent && (
              <p className="mt-3 text-xs" style={{ color: GOLD }}>
                Thanks! I'll get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">
        {label}
      </label>
      <input
        {...rest}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <div
              className="grid h-9 w-9 place-items-center rounded-lg text-sm font-black text-black"
              style={{ background: GOLD }}
            >
              FA
            </div>
            <span className="font-display font-semibold text-white">Fatiha Ansari</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-white/60">
            Front-End Developer crafting premium web experiences with React & Tailwind CSS.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {["About", "Projects", "Services", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50">Connect</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/80 transition hover:border-white/30 hover:text-white"
              >
                <BrandIcon brand={s.brand} size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
        <div>© {new Date().getFullYear()} Fatiha Ansari · All rights reserved.</div>
        <div>
          Made with <span style={{ color: GOLD }}>★</span> by Fatiha Ansari
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */
function SectionHeader({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return (
    <motion.div {...fadeUp} className="text-center">
      <div
        className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.3em]"
        style={{ borderColor: `${GOLD}55`, color: GOLD }}
      >
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
        {title} <span style={{ color: GOLD }}>{accent}</span>
      </h2>
    </motion.div>
  );
}
