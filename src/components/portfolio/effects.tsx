import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    let x = 0, y = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 22}px, ${ry - 22}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-2 w-2 rounded-full bg-white md:block" />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-11 w-11 rounded-full border border-purple-400/60 mix-blend-difference md:block" style={{ boxShadow: "0 0 24px rgba(139,92,246,0.55)" }} />
    </>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed left-0 top-0 z-[100] h-[3px] w-full bg-gradient-to-r from-purple-500 via-cyan-400 to-fuchsia-500"
    />
  );
}

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/25 blur-[120px] animate-aurora" />
      <div className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[140px] animate-aurora" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[120px] animate-aurora" style={{ animationDelay: "6s" }} />
    </div>
  );
}

export function FloatingParticles({ count = 30 }: { count?: number }) {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; s: number; d: number; c: string }>>([]);
  useEffect(() => {
    const colors = ["#8b5cf6", "#22d3ee", "#f0abfc"];
    setParticles(
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 3 + 1,
        d: Math.random() * 10 + 8,
        c: colors[Math.floor(Math.random() * colors.length)],
      }))
    );
  }, [count]);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            background: p.c,
            boxShadow: `0 0 ${p.s * 4}px ${p.c}`,
            animation: `float-slow ${p.d}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

export function LoadingScreen({ done }: { done: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.6, delay: done ? 0.2 : 0 }}
      style={{ pointerEvents: done ? "none" : "auto" }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#09090b]"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="h-20 w-20 rounded-2xl glass-strong grid place-items-center animate-pulse-glow">
            <span className="text-3xl font-black gradient-text">FA</span>
          </div>
        </motion.div>
        <div className="h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-gradient-to-r from-purple-500 via-cyan-400 to-fuchsia-500"
          />
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Crafting Experience</p>
      </div>
    </motion.div>
  );
}

export function MagneticButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);
  return (
    <button ref={ref} className={`magnetic ${className}`} {...props}>
      {children}
    </button>
  );
}

export function TypingText({ words, className = "" }: { words: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(w.slice(0, text.length + 1));
        if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(w.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI((i + 1) % words.length); }
      }
    }, del ? 40 : 90);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return (
    <span className={className}>
      {text}
      <span className="animate-blink text-cyan-400">|</span>
    </span>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full glass-strong text-white transition-all ${show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"} hover:scale-110 neon-border`}
    >
      ↑
    </button>
  );
}
