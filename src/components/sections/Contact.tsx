import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "../../data/portfolio";
import { fadeUpProps } from "../../hooks/useAnimation";
import { useLang } from "../../i18n/LangContext";

export default function Contact() {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-accent-blue/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUpProps(inView, 0)} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">
            {t.contact.sectionLabel}
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <motion.h2 {...fadeUpProps(inView, 1)} className="font-display text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-5">
              {t.contact.heading}{" "}
              <span className="text-gradient-blue">{t.contact.headingAccent}</span>
            </motion.h2>

            <motion.p {...fadeUpProps(inView, 2)} className="text-text-muted font-body leading-relaxed mb-8">
              {t.contact.subheading}
            </motion.p>

            <motion.a
              {...fadeUpProps(inView, 3)}
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-3 p-4 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent-blue/20 transition-all mb-8"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue flex-shrink-0">
                <EmailIcon />
              </div>
              <div>
                <p className="text-xs text-text-dim font-mono mb-0.5">{t.contact.emailLabel}</p>
                <p className="text-sm text-text-secondary group-hover:text-accent-blue transition-colors font-mono">
                  {personalInfo.email}
                </p>
              </div>
              <span className="ml-auto text-text-dim group-hover:text-accent-blue transition-colors">→</span>
            </motion.a>

            <motion.div {...fadeUpProps(inView, 4)} className="flex gap-3">
              {[
                { label: "GitHub", href: personalInfo.github, icon: <GithubIcon /> },
                { label: "LinkedIn", href: personalInfo.linkedin, icon: <LinkedinIcon /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-mono text-text-muted hover:text-text-secondary border border-white/[0.07] hover:border-white/[0.14] rounded-lg transition-all hover:bg-white/[0.03]"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUpProps(inView, 2)} className="p-6 rounded-2xl border border-white/[0.07] bg-bg-surface">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  <CheckIcon />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary mb-2">{t.contact.successTitle}</h3>
                <p className="text-sm text-text-muted">{t.contact.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-2">{t.contact.nameLabel}</label>
                  <input type="text" required value={formState.name} onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))} placeholder={t.contact.namePlaceholder} className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-text-primary text-sm font-body placeholder:text-text-dim focus:outline-none focus:border-accent-blue/40 focus:bg-white/[0.06] transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-2">{t.contact.emailLabel}</label>
                  <input type="email" required value={formState.email} onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))} placeholder={t.contact.emailPlaceholder} className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-text-primary text-sm font-body placeholder:text-text-dim focus:outline-none focus:border-accent-blue/40 focus:bg-white/[0.06] transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-2">{t.contact.messageLabel}</label>
                  <textarea required rows={5} value={formState.message} onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))} placeholder={t.contact.messagePlaceholder} className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-text-primary text-sm font-body placeholder:text-text-dim focus:outline-none focus:border-accent-blue/40 focus:bg-white/[0.06] transition-all resize-none" />
                </div>
                <button type="submit" disabled={loading} className="w-full py-3 text-sm font-medium bg-accent-blue hover:bg-accent-blue/90 disabled:bg-accent-blue/50 text-white rounded-lg transition-all duration-200 shadow-[0_0_24px_rgba(91,141,239,0.2)] hover:shadow-[0_0_32px_rgba(91,141,239,0.4)] flex items-center justify-center gap-2">
                  {loading ? (<><span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t.contact.sending}</>) : t.contact.send}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" /></svg>;
}
function GithubIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>;
}
function LinkedinIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
}
function CheckIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}