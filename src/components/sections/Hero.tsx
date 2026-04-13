import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { fadeUpProps } from "../../hooks/useAnimation";
import { personalInfo } from "../../data/portfolio";
import { useLang } from "../../i18n/LangContext";

function useTypewriter(strings: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Reset when strings change (lang switch)
  useEffect(() => {
    setDisplay("");
    setStrIdx(0);
    setCharIdx(0);
    setDeleting(false);
  }, [strings]);

  useEffect(() => {
    const current = strings[strIdx];
    const delay = deleting ? speed / 2 : charIdx === current.length ? pause : speed;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIdx > 0) {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setStrIdx((i) => (i + 1) % strings.length);
        }
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, strIdx, strings, speed, pause]);

  return display;
}

export default function Hero() {
  const { t } = useLang();
  const typed = useTypewriter(t.typeStrings);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    let t = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const spacing = 36;
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * spacing;
          const y = row * spacing;
          const dx = x - w / 2;
          const dy = y - h / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const wave = Math.sin(dist * 0.015 - t * 0.8) * 0.5 + 0.5;
          const alpha = wave * 0.15 + 0.03;
          const radius = wave * 1.2 + 0.4;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(91, 141, 239, ${alpha})`;
          ctx.fill();
        }
      }
      t += 0.016;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 bg-glow-blue pointer-events-none" />
      <div className="absolute inset-0 bg-glow-violet pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Status badge */}
          <motion.div
            {...fadeUpProps(inView, 0)}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-white/[0.08] rounded-full bg-white/[0.03] text-xs font-mono text-text-muted"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.hero.availableFor}</span>
            <span className="text-text-dim">·</span>
            <span className="text-accent-blue">{personalInfo.location}</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUpProps(inView, 1)}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-4"
          >
            {personalInfo.name.split(" ")[0]}{" "}
            <span className="text-gradient-blue">
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div {...fadeUpProps(inView, 2)} className="h-10 mb-6 flex items-center">
            <span className="font-mono text-lg sm:text-xl text-accent-blue">
              &gt; {typed}<span className="animate-blink">_</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...fadeUpProps(inView, 3)}
            className="text-base sm:text-lg text-text-muted font-body leading-relaxed max-w-2xl mb-10"
          >
            {t.hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUpProps(inView, 4)} className="flex flex-wrap items-center gap-3 mb-16">
            <a href="#projects" className="group px-6 py-3 text-sm font-medium bg-accent-blue hover:bg-accent-blue/90 text-white rounded-lg transition-all duration-200 shadow-[0_0_24px_rgba(91,141,239,0.3)] hover:shadow-[0_0_32px_rgba(91,141,239,0.5)]">
              {t.hero.viewProjects}
              <span className="ml-2 group-hover:translate-x-0.5 inline-block transition-transform">→</span>
            </a>
            <a href="#contact" className="px-6 py-3 text-sm font-medium border border-white/[0.1] hover:border-white/[0.2] text-text-secondary hover:text-text-primary rounded-lg transition-all duration-200 hover:bg-white/[0.03]">
              {t.hero.contactMe}
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-white/[0.08] hover:border-white/[0.15] rounded-lg text-text-muted hover:text-text-secondary transition-all hover:bg-white/[0.03]">
              <GithubIcon />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 border border-white/[0.08] hover:border-white/[0.15] rounded-lg text-text-muted hover:text-text-secondary transition-all hover:bg-white/[0.03]">
              <LinkedinIcon />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUpProps(inView, 5)} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {t.stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="font-display text-2xl font-bold text-text-primary mb-1">
                  {stat.value}<span className="text-accent-blue">{stat.suffix}</span>
                </div>
                <div className="text-xs text-text-muted font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-text-dim">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-text-dim to-transparent"
        />
      </motion.div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}