import { LangProvider } from "./i18n/LangContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-bg-base text-text-primary font-body overflow-x-hidden">
        {/* Background grid */}
        <div
          className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LangProvider>
  );
}