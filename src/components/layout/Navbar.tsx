import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../../data/portfolio";
import { useLang } from "../../i18n/LangContext";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [t]); // re-run when lang changes so labels update

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded border border-accent-blue/40 flex items-center justify-center bg-accent-blue/10 group-hover:bg-accent-blue/20 transition-colors">
            <span className="font-mono text-xs text-accent-blue font-bold">
              {personalInfo.name.charAt(0)}
            </span>
          </div>
          <span className="font-display font-semibold text-sm text-text-primary tracking-tight">
            {personalInfo.name.split(" ")[0]}
            <span className="text-text-muted">.{personalInfo.name.split(" ")[1]?.toLowerCase()}</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-body transition-colors duration-200 rounded-md ${
                  isActive ? "text-text-primary" : "text-text-muted hover:text-text-secondary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/[0.05] rounded-md border border-white/[0.07]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Available badge */}
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-text-muted font-mono">{t.nav.available}</span>
          </div>

          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-white/[0.08] hover:border-accent-blue/30 text-text-muted hover:text-accent-blue rounded-md transition-all"
          >
            <span className="text-base leading-none">{lang === "en" ? "🇹🇷" : "🇬🇧"}</span>
            <span>{lang === "en" ? "TR" : "EN"}</span>
          </button>

          <a
            href="#contact"
            className="px-4 py-1.5 text-sm font-medium bg-accent-blue/10 hover:bg-accent-blue/20 text-accent-blue border border-accent-blue/20 hover:border-accent-blue/40 rounded-md transition-all duration-200"
          >
            {t.nav.getInTouch}
          </a>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-mono border border-white/[0.08] px-2 py-1 rounded text-text-muted"
          >
            {lang === "en" ? "🇹🇷 TR" : "🇬🇧 EN"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="w-5 h-px bg-text-secondary block origin-center" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="w-5 h-px bg-text-secondary block" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="w-5 h-px bg-text-secondary block origin-center" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden glass border-b border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 px-3 text-sm text-text-secondary hover:text-text-primary rounded-md hover:bg-white/[0.04] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-3 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full py-2.5 text-center text-sm font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20 rounded-md"
                >
                  {t.nav.getInTouch}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}