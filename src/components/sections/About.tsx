import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "../../data/portfolio";
import { fadeUpProps } from "../../hooks/useAnimation";
import { useLang } from "../../i18n/LangContext";

export default function About() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUpProps(inView, 0)} className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">
            {t.about.sectionLabel}
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <motion.h2
              {...fadeUpProps(inView, 1)}
              className="font-display text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-8"
            >
              {t.about.heading}{" "}
              <span className="text-gradient-blue">{t.about.headingAccent}</span>.
            </motion.h2>

            {/* Bio — translated */}
            <div className="space-y-4">
              {t.about.bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  {...fadeUpProps(inView, i + 2)}
                  className="text-text-muted text-base leading-relaxed font-body"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Currently */}
            <motion.div
              {...fadeUpProps(inView, 5)}
              className="mt-8 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
                  {t.about.currentlyLabel}
                </span>
              </div>
              <div className="space-y-1.5">
                {t.about.currently.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className={`font-mono ${i === 0 ? "text-accent-blue" : i === 1 ? "text-accent-violet" : "text-accent-cyan"}`}>→</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              {...fadeUpProps(inView, 6)}
              className="mt-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
                  {t.languages.heading}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.languages.items.map((item) => (
                  <div key={item.lang} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-sm text-text-secondary font-medium">{item.lang}</span>
                    <span className="text-xs text-text-dim font-mono">— {item.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills — category names from portfolio.ts, items untranslated (tech names) */}
          <div className="space-y-5">
            {about.skills.map((group, gi) => (
              <motion.div
                key={group.category}
                {...fadeUpProps(inView, gi + 2)}
                className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: gi === 0 ? "#5B8DEF" : gi === 1 ? "#A78BFA" : gi === 2 ? "#22D3EE" : "#6B7A9F" }}
                  />
                  <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono text-text-secondary bg-white/[0.04] border border-white/[0.07] rounded-md hover:border-accent-blue/30 hover:text-text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}