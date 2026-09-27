import { useEffect, useRef, useState } from "react";
import { GraduationCap, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";
import { profile } from "../data/profile";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "personal-brand", label: "Brand" },
  { id: "evidence", label: "Evidence" },
  { id: "education", label: "Education" },
  { id: "education-pdfs", label: "Documents" },
  { id: "coursework", label: "Coursework" },
  { id: "skills", label: "Skills" },
  { id: "interests", label: "Interests" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Career" },
  { id: "reflection", label: "Reflection" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" },
] as const;

const NAV_IDS = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(NAV_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-[#0d1220]/90"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
          aria-label="Back to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-white transition-colors group-hover:bg-navy-700 dark:bg-white dark:text-navy-900">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-[15px] font-semibold tracking-tight text-navy-900 dark:text-white">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "location" : undefined}
                className={`relative rounded-md px-2 py-2 text-[12.5px] font-medium transition-colors ${
                  active === link.id
                    ? "text-navy-900 dark:text-white"
                    : "text-slate-600 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent-500"
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            {theme === "dark" ? <Sun className="h-[18px] w-[18px]" aria-hidden="true" /> : <Moon className="h-[18px] w-[18px]" aria-hidden="true" />}
          </button>

          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 xl:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="primary-navigation-menu"
          className="border-t border-slate-200/80 bg-white/95 backdrop-blur-md xl:hidden dark:border-white/10 dark:bg-[#0d1220]/95"
        >
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === link.id ? "location" : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors ${
                    active === link.id
                      ? "bg-navy-50 text-navy-900 dark:bg-navy-900 dark:text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-navy-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}