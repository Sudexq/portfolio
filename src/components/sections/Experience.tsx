import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "../../data/portfolio";
import { fadeUpProps } from "../../hooks/useAnimation";
import { useLang } from "../../i18n/LangContext";

const typeColors: Record<string, string> = {
  work: "#5B8DEF",
  competition: "#A78BFA",
  education: "#22D3EE",
  community: "#F59E0B",
};

export default function Experience() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const getConfig = (type: string) => ({
    color: typeColors[type] ?? "#6B7A9F",
    label: t.typeLabels[type as keyof typeof t.typeLabels] ?? type,
  });

  return (
    <section id="experience" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUpProps(inView, 0)} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">
            {t.experience.sectionLabel}
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <motion.div {...fadeUpProps(inView, 1)} className="mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            {t.experience.heading}
          </h2>
          <p className="text-text-muted font-body max-w-xl">{t.experience.subheading}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-[5.5rem] top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue/30 via-white/[0.06] to-transparent" />

          <div className="space-y-4">
            {experience.map((item, i) => {
              const config = getConfig(item.type);
              const itemLink = (item as typeof item & { link?: string }).link;
              // Translated text — fallback to original if index out of bounds
              const translated = t.experience.items[i];

              return (
                <motion.div
                  key={i}
                  {...fadeUpProps(inView, i + 2)}
                  className="relative flex gap-6 md:gap-8 pl-12 md:pl-48 group"
                >
                  <div
                    className="absolute left-[13px] md:left-[85px] top-5 w-3 h-3 rounded-full border-2 transition-transform duration-300 group-hover:scale-125"
                    style={{
                      borderColor: config.color,
                      background: item.highlight ? config.color : "#080A0F",
                      boxShadow: item.highlight ? `0 0 12px ${config.color}60` : "none",
                    }}
                  />

                  <div className="hidden md:block absolute left-0 top-4 w-20 text-right">
                    <span className="text-xs font-mono text-text-dim leading-relaxed">{item.period}</span>
                  </div>

                  <div
                    className={`flex-1 p-5 rounded-2xl border transition-all duration-300 ${
                      item.highlight
                        ? "border-accent-violet/20 bg-accent-violet/[0.04] hover:bg-accent-violet/[0.07]"
                        : "border-white/[0.06] bg-bg-surface hover:bg-white/[0.03] hover:border-white/[0.1]"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-display text-base font-semibold text-text-primary leading-snug">
                          {translated?.role ?? item.role}
                        </h3>
                        <p className="text-sm text-text-muted mt-0.5 flex flex-wrap items-center gap-1">
                          <span>{item.company}</span>
                          <span className="text-text-dim">·</span>
                          <span className="text-text-dim text-xs">{item.location}</span>
                          <span className="text-text-dim">·</span>
                          <span className="font-mono text-xs">{item.duration}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        {item.highlight && (
                          <span
                            className="px-2 py-0.5 text-xs font-mono rounded border"
                            style={{ color: config.color, borderColor: config.color + "30", background: config.color + "0d" }}
                          >
                            {t.experience.featured}
                          </span>
                        )}
                        <span
                          className="px-2 py-0.5 text-xs font-mono rounded border"
                          style={{ color: config.color, borderColor: config.color + "30", background: config.color + "0d" }}
                        >
                          {config.label}
                        </span>
                      </div>
                    </div>

                    <p className="md:hidden text-xs font-mono text-text-dim mb-2">{item.period}</p>

                    <p className="text-sm text-text-muted font-body leading-relaxed mb-4">
                      {translated?.description ?? item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs font-mono text-text-dim bg-white/[0.04] border border-white/[0.06] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {itemLink && (
                      <a
                        href={itemLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono text-accent-cyan hover:text-accent-blue transition-colors"
                      >
                        <CertIcon />
                        {t.experience.viewCert}
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CertIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}