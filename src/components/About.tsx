import { Atom, Binary, Sigma } from "lucide-react";
import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FOUNDATION_SUBJECTS = [
  { icon: Sigma, name: "Mathematics", note: "Analytical rigour and abstract reasoning" },
  { icon: Atom, name: "Physics", note: "Modelling and quantitative problem solving" },
  { icon: Binary, name: "Computer Science", note: "Algorithms, systems, and software" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="About Me" title="An interdisciplinary academic foundation">
            {profile.bio}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <Reveal delay={120}>
            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                I follow the Mathematics, Physics, and Computer Science combination at the University of Sri
                Jayewardenepura, completing the interdisciplinary foundation from June 2023 to May 2026. Having
                qualified to pursue a special degree in any of the three disciplines, I chose to specialize in
                Computer Science.
              </p>
              <p>
                My academic record spans these three fields &mdash; from logic, linear algebra, analysis, and
                differential equations to mechanics, electronics, and core computer science including data
                structures, operating systems, databases, and computer graphics. My current focus is to deepen
                that computer science foundation while identifying the research and professional questions I want
                to pursue next.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111827]">
              <h3 className="font-serif text-lg font-semibold text-navy-900 dark:text-white">
                Foundation subjects
              </h3>
              <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">
                Followed together &mdash; June 2023 &ndash; May 2026
              </p>
              <ul className="mt-5 space-y-3">
                {FOUNDATION_SUBJECTS.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 dark:border-white/5 dark:bg-white/5"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white dark:bg-white dark:text-navy-900">
                      <s.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[14px] font-semibold text-navy-900 dark:text-white">{s.name}</span>
                      <span className="block text-[13px] text-slate-500 dark:text-slate-400">{s.note}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-accent-50 px-4 py-3 text-[13.5px] font-medium text-accent-800 dark:bg-accent-950 dark:text-accent-200">
                Specialization: Computer Science
              </p>
              <div className="mt-4 border-t border-slate-100 pt-4 dark:border-white/10">
                <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-accent-700 uppercase dark:text-accent-300">
                  Current direction
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {profile.currentFocus}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}