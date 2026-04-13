import { personalInfo } from "../../data/portfolio";
import { useLang } from "../../i18n/LangContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.05] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded border border-accent-blue/30 flex items-center justify-center bg-accent-blue/10">
            <span className="font-mono text-[9px] text-accent-blue font-bold">
              {personalInfo.name.charAt(0)}
            </span>
          </div>
          <span className="text-xs font-mono text-text-dim">
            © {year} {personalInfo.name}
          </span>
        </div>
        <p className="text-xs font-mono text-text-dim">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}