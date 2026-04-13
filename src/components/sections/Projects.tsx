import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../../data/portfolio";
import { fadeUpProps } from "../../hooks/useAnimation";
import { useLang } from "../../i18n/LangContext";

const statusColors: Record<string, string> = {
  Competition: "text-accent-violet border-accent-violet/20 bg-accent-violet/5",
  Production: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
  Research: "text-accent-cyan border-accent-cyan/20 bg-accent-cyan/5",
  Completed: "text-text-muted border-white/10 bg-white/5",
};

export default function Projects() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="projects" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUpProps(inView, 0)} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">
            {t.projects.sectionLabel}
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <motion.div {...fadeUpProps(inView, 1)} className="mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            {t.projects.heading}
          </h2>
          <p className="text-text-muted font-body max-w-xl">{t.projects.subheading}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => {
            // Merge static data with translated text
            const translated = t.projects.items[i];
            return (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUpProps(inView, i + 2)}
                whileHover={{ y: -4 }}
                className="group relative block p-6 rounded-2xl border border-white/[0.06] bg-bg-surface hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl" style={{ background: project.accentColor }} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-text-dim">{project.id}</span>
                      <span className={`px-2 py-0.5 text-xs font-mono border rounded-md ${statusColors[project.status] ?? "text-text-muted border-white/10"}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-text-muted group-hover:text-text-secondary group-hover:border-white/[0.15] transition-all">
                      <ArrowIcon />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-text-primary mb-2 group-hover:text-white transition-colors leading-snug">
                    {translated?.title ?? project.title}
                  </h3>

                  <p className="text-sm text-text-muted font-body leading-relaxed mb-5 line-clamp-3">
                    {translated?.description ?? project.description}
                  </p>

                  {(translated?.highlight ?? project.highlight) && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full text-xs font-mono border"
                      style={{ borderColor: project.accentColor + "30", color: project.accentColor, background: project.accentColor + "0d" }}
                    >
                      <span>★</span>
                      {translated?.highlight ?? project.highlight}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono text-text-dim bg-white/[0.04] border border-white/[0.06] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div {...fadeUpProps(inView, projects.length + 2)} className="mt-10 text-center">
          <p className="text-sm text-text-muted mb-4">{t.projects.moreOnGithub}</p>
          <a
            href="https://github.com/Sudexq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-white/[0.08] hover:border-white/[0.16] text-text-secondary hover:text-text-primary rounded-lg transition-all hover:bg-white/[0.03]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            {t.projects.viewOnGithub}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 10L10 2M10 2H4M10 2V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}