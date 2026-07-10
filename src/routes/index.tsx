import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Download,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Award,
  GraduationCap,
  Send,
  X,
  Phone,
  MapPin,
  Code2,
} from "lucide-react";
import fatiha from "@/assets/portfolio/fatiha.jpeg";
import {
  CursorGlow,
  ScrollProgress,
  AuroraBackground,
  FloatingParticles,
  LoadingScreen,
  MagneticButton,
  TypingText,
  BackToTop,
} from "@/components/portfolio/effects";
import { projects, stack, tools, services } from "@/components/portfolio/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fatiha Ansari — Front-End Developer & React Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Fatiha Ansari, a Front-End Developer crafting modern, responsive, and user-focused web experiences with React, TypeScript, and Tailwind CSS.",
      },
      { property: "og:title", content: "Fatiha Ansari — Front-End Developer" },
      {
        property: "og:description",
        content:
          "Modern React & Tailwind portfolio — landing pages, business websites, and premium front-end interfaces.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <LoadingScreen done={loaded} />
      <CursorGlow />
      <ScrollProgress />
      <AuroraBackground />
      <BackToTop />

      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Tools />
        <Projects onOpen={setActiveProject} />
        <Services />
        <Certificates />
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
    ["Stack", "#stack"],
    ["Projects", "#projects"],
    ["Services", "#services"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl glass-strong px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 text-sm font-black text-black">
            FA
          </div>
          <span className="hidden font-display text-sm font-semibold tracking-wide sm:block">
            Fatiha Ansari
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90 md:inline-flex"
        >
          Hire Me
        </a>
        <button
          className="grid h-9 w-9 place-items-center rounded-lg glass md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <span className="text-xl leading-none">≡</span>}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl glass-strong p-3 md:hidden"
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
    <section id="top" className="relative overflow-hidden px-4 pt-32 pb-20 sm:pt-40">
      <FloatingParticles count={40} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Decorative rings */}
          <div className="absolute -inset-6 rounded-[2rem] border border-white/10 animate-spin-slow" />
          <div className="absolute -inset-3 rounded-[1.8rem] border border-purple-400/30" />
          {/* Floating dots */}
          <div className="absolute -left-6 top-10 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee] animate-float" />
          <div className="absolute -right-4 top-1/3 h-4 w-4 rounded-full bg-fuchsia-400 shadow-[0_0_18px_#f0abfc] animate-float-slow" />
          <div className="absolute -bottom-4 left-1/3 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_16px_#8b5cf6] animate-float" style={{ animationDelay: "1.5s" }} />

          <div className="relative animate-float">
            <div className="relative overflow-hidden rounded-[1.5rem] glass-strong p-2 neon-border animate-pulse-glow">
              <img
                src={fatiha}
                alt="Fatiha Ansari, Front-End Developer"
                loading="eager"
                className="aspect-[4/5] w-full rounded-[1.2rem] object-cover"
              />
              {/* Overlay chip */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-white/90">Available for work</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/80"
          >
            <Sparkles size={14} className="text-cyan-400" />
            Hello <span className="animate-float inline-block">👋</span> — I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Fatiha <span className="neon-text">Ansari</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-4 text-xl font-semibold text-white/90 sm:text-2xl"
          >
            Front-End Developer
            <span className="mx-2 text-white/30">·</span>
            <span className="gradient-text">React & Tailwind</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 h-8 text-lg font-medium text-white/70 sm:text-xl"
          >
            <TypingText
              words={[
                "Frontend Developer",
                "React Developer",
                "UI Developer",
                "Responsive Web Designer",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70"
          >
            I'm passionate about building modern, responsive and user-focused web
            experiences using <span className="text-white">React</span>,{" "}
            <span className="text-white">TypeScript</span> and{" "}
            <span className="text-white">Tailwind CSS</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_-10px_rgba(139,92,246,0.8)]"
            >
              View Projects
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              <Download size={16} /> Download Resume
            </MagneticButton>
            <MagneticButton
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-500/10"
            >
              Hire Me
            </MagneticButton>
            <MagneticButton
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white/80 hover:text-white"
            >
              <Mail size={16} /> Contact Me
            </MagneticButton>
          </motion.div>

          {/* Floating tech icons */}
          <div className="mt-10 hidden gap-6 text-white/40 sm:flex">
            {["React", "TypeScript", "Tailwind", "Figma", "Git"].map((t, i) => (
              <span
                key={t}
                className="rounded-full glass px-3 py-1 text-xs animate-float"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "Figma", "REST APIs", "Vite", "Node", "GitHub"];
  return (
    <div className="relative border-y border-white/5 bg-black/30 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-12 text-2xl font-bold text-white/40 sm:text-3xl">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="hover:gradient-text">{t}</span>
            <span className="text-purple-500/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const stats = [
    { n: "20+", l: "Projects Completed" },
    { n: "15+", l: "Technologies Learned" },
    { n: "5+", l: "Certificates" },
    { n: "10+", l: "Happy Clients" },
  ];
  return (
    <section id="about" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="About Me" title="Turning ideas into" gradient="premium interfaces" />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div {...fadeUp} className="rounded-3xl glass-strong p-8 sm:p-10">
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
                <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 tilt-card tilt-card-inner"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl transition group-hover:bg-cyan-400/30" />
                <div className="relative">
                  <div className="font-display text-4xl font-black gradient-text">{s.n}</div>
                  <div className="mt-2 text-sm text-white/70">{s.l}</div>
                </div>
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
        <SectionHeader eyebrow="Tech Stack" title="The tools I use" gradient="every day" />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {stack.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-2xl glass p-5 text-center tilt-card tilt-card-inner"
            >
              <div
                className="mx-auto grid h-12 w-12 place-items-center rounded-xl transition group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${s.color}30, ${s.color}10)`,
                  boxShadow: `0 0 30px -8px ${s.color}80`,
                }}
              >
                <Code2 size={22} style={{ color: s.color }} />
              </div>
              <div className="mt-3 text-sm font-medium text-white/90">{s.name}</div>
            </motion.div>
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
        <SectionHeader eyebrow="Tools" title="My daily" gradient="workbench" />
        <motion.div {...fadeUp} className="mt-12 flex flex-wrap justify-center gap-3">
          {tools.map((t) => (
            <span
              key={t}
              className="group cursor-default rounded-full glass px-5 py-2.5 text-sm text-white/80 transition hover:border-purple-400/50 hover:text-white hover:shadow-[0_0_24px_-4px_rgba(139,92,246,0.6)]"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <section id="projects" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Featured Work" title="Selected" gradient="projects" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass-strong tilt-card tilt-card-inner hover:neon-border"
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
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute right-3 top-3 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-white/80">
                    Case Study
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/70">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-white/70">
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
              <div className="flex gap-2 border-t border-white/5 p-4">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-4 py-2 text-xs font-semibold text-black"
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-white/90 hover:bg-white/10"
                >
                  <Github size={13} /> GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
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
      className="fixed inset-0 z-[200] grid place-items-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl glass-strong"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full glass text-white hover:bg-white/10"
        >
          <X size={16} />
        </button>
        <img src={project.image} alt={project.title} className="max-h-[60vh] w-full object-cover" />
        <div className="p-8">
          <h3 className="font-display text-3xl font-bold">{project.title}</h3>
          <p className="mt-3 text-white/70">{project.description}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/50">Tech Stack</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
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
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-black"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Github size={14} /> Source
            </a>
          </div>
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
        <SectionHeader eyebrow="Services" title="How I can" gradient="help you" />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 tilt-card tilt-card-inner hover:border-purple-400/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-400/20 blur-2xl transition group-hover:from-purple-500/40 group-hover:to-cyan-400/40" />
              <div className="relative flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl glass-strong text-2xl">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-xs text-white/60">
                    Premium delivery, clean code, responsive & production-ready.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CERTIFICATES ---------------- */
function Certificates() {
  const [openCert, setOpenCert] = useState(false);
  const certs = [
    { title: "IT Essentials", org: "JDC IT Center", year: "2024" },
  ];
  return (
    <section id="certificates" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Certificates" title="Recognized" gradient="learning" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <motion.button
              key={c.title}
              onClick={() => setOpenCert(true)}
              {...fadeUp}
              className="group relative overflow-hidden rounded-3xl glass-strong text-left tilt-card tilt-card-inner"
            >
              <div className="relative aspect-video grid place-items-center overflow-hidden bg-gradient-to-br from-purple-950/60 to-cyan-950/60">
                <div className="text-center">
                  <Award size={48} className="mx-auto text-cyan-400" />
                  <div className="mt-2 text-xs text-white/60">Certificate placeholder</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-cyan-400">{c.year}</div>
                <h3 className="mt-1 font-display text-xl font-bold">{c.title}</h3>
                <p className="text-sm text-white/60">{c.org}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {openCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenCert(false)}
            className="fixed inset-0 z-[200] grid place-items-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-video w-full max-w-4xl rounded-2xl glass-strong grid place-items-center"
            >
              <button
                onClick={() => setOpenCert(false)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass text-white"
              >
                <X size={16} />
              </button>
              <div className="text-center">
                <Award size={80} className="mx-auto text-cyan-400" />
                <div className="mt-4 font-display text-2xl">IT Essentials</div>
                <div className="text-sm text-white/60">JDC IT Center · 2024</div>
                <p className="mt-4 text-xs text-white/50">Upload certificate image here.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- EDUCATION ---------------- */
function Education() {
  const items = [
    { title: "Matric", org: "Aziz e Millat English Medium School", year: "" },
    { title: "Intermediate", org: "Sir Syed Girls Government College", year: "2026" },
  ];
  return (
    <section id="education" className="relative px-4 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Education" title="Academic" gradient="journey" />
        <div className="relative mt-14">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent sm:left-1/2" />
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative mb-10 flex items-start gap-6 sm:justify-${i % 2 ? "start" : "end"}`}
            >
              <div className={`hidden w-1/2 sm:block ${i % 2 ? "order-2 pl-10" : "pr-10 text-right"}`}>
                <div className="rounded-2xl glass-strong p-6">
                  <div className="text-xs uppercase tracking-widest text-cyan-400">{it.year || "—"}</div>
                  <div className="mt-1 font-display text-xl font-bold">{it.title}</div>
                  <div className="mt-1 text-sm text-white/70">{it.org}</div>
                </div>
              </div>
              <div className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 text-black sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <GraduationCap size={16} />
              </div>
              <div className={`flex-1 sm:hidden`}>
                <div className="rounded-2xl glass-strong p-6">
                  <div className="text-xs uppercase tracking-widest text-cyan-400">{it.year || "—"}</div>
                  <div className="mt-1 font-display text-xl font-bold">{it.title}</div>
                  <div className="mt-1 text-sm text-white/70">{it.org}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GITHUB ---------------- */
function GitHubSection() {
  const cards = [
    { title: "GitHub Stats", desc: "Public repos, stars & activity" },
    { title: "Contribution Graph", desc: "Consistent contribution rhythm" },
    { title: "Top Languages", desc: "JavaScript, TypeScript, CSS, HTML" },
    { title: "GitHub Streak", desc: "Daily commits in progress" },
  ];
  return (
    <section id="github" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="GitHub" title="Open source" gradient="activity" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[16/8] overflow-hidden rounded-3xl glass-strong p-6 tilt-card tilt-card-inner"
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center gap-2 text-white/60">
                  <Github size={16} />
                  <span className="text-xs uppercase tracking-widest">{c.title}</span>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold gradient-text">{c.title}</div>
                  <div className="mt-1 text-sm text-white/60">{c.desc}</div>
                  <div className="mt-3 text-xs text-white/40">Placeholder — connect GitHub API</div>
                </div>
              </div>
            </motion.div>
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
    { icon: Github, label: "GitHub", value: "github.com/fatiha", href: "#" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/fatiha-ansari-88967b3a7", href: "https://www.linkedin.com/in/fatiha-ansari-88967b3a7/" },
    { icon: MessageCircle, label: "WhatsApp", value: "Available on request", href: "#" },
    { icon: Download, label: "Resume", value: "Download PDF", href: "#" },
    { icon: MapPin, label: "Location", value: "Karachi, Pakistan", href: "#" },
  ];
  return (
    <section id="contact" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Contact" title="Let's build" gradient="something great" />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl glass p-5 transition hover:border-purple-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-purple-500/30 to-cyan-400/30 text-cyan-300">
                    <c.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-white/50">{c.label}</div>
                    <div className="truncate text-sm text-white/90">{c.value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3500);
              (e.currentTarget as HTMLFormElement).reset();
            }}
            className="rounded-3xl glass-strong p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="Tell me about your project..."
              />
            </div>
            <MagneticButton
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_-10px_rgba(139,92,246,0.8)]"
            >
              <Send size={15} /> {sent ? "Message Sent ✓" : "Send Message"}
            </MagneticButton>
            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-xs text-emerald-400"
              >
                Thanks! I'll get back to you shortly.
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 text-sm font-black text-black">
              FA
            </div>
            <span className="font-display font-semibold">Fatiha Ansari</span>
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
                <a href={`#${l.toLowerCase()}`} className="hover:text-white">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/50">Connect</div>
          <div className="mt-3 flex gap-2">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/fatiha-ansari-88967b3a7/" },
              { icon: Mail, href: "mailto:fatihaansari786@gmail.com" },
              { icon: Phone, href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-white/10"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row">
        <div>© {new Date().getFullYear()} Fatiha Ansari · All rights reserved.</div>
        <div>Made with <span className="text-fuchsia-400">❤</span> by Fatiha Ansari</div>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */
function SectionHeader({
  eyebrow,
  title,
  gradient,
}: {
  eyebrow: string;
  title: string;
  gradient: string;
}) {
  return (
    <motion.div {...fadeUp} className="text-center">
      <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-white/70">
        <Sparkles size={12} className="text-cyan-400" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
        {title} <span className="neon-text">{gradient}</span>
      </h2>
    </motion.div>
  );
}
