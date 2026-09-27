import { BookOpenCheck, GraduationCap, Layers } from "lucide-react";
import { profile } from "../data/profile";
import { coursework } from "../data/coursework";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function AcademicPerformance() {
  const totalCredits = coursework.reduce((sum, c) => sum + c.credits, 0);
  const disciplines = new Set(coursework.map((c) => c.category)).size;

  return (
    <section id="academic-performance" className="scroll-mt-20 border-y border-slate-200 bg-[#f2f6fb] py-20 sm:py-28 dark:border-white/10 dark:bg-[#0a101d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Academic Performance" title="A record of sustained academic work">
            Overall performance across the undergraduate coursework listed in my curriculum vitae, including varied
            results across three disciplines.
          </SectionHeading>
        </Reveal>

        <Reveal delay={140}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10 dark:border-white/10 dark:bg-[#111827]">
            <p className="kicker">Overall Grade Point Average</p>
            <p className="mt-4 font-serif text-7xl font-semibold tracking-tight text-navy-900 sm:text-8xl dark:text-white">
              {profile.gpa}
            </p>

            <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 divide-x divide-slate-200 dark:divide-white/10">
              <div className="px-4">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-white dark:bg-white dark:text-navy-900">
                  <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="mt-2 text-lg font-semibold text-navy-900 dark:text-white">{coursework.length}</p>
                <p className="text-[11.5px] font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">Courses</p>
              </div>
              <div className="px-4">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-white dark:bg-white dark:text-navy-900">
                  <Layers className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="mt-2 text-lg font-semibold text-navy-900 dark:text-white">{totalCredits}</p>
                <p className="text-[11.5px] font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">Credits</p>
              </div>
              <div className="px-4">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-white dark:bg-white dark:text-navy-900">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="mt-2 text-lg font-semibold text-navy-900 dark:text-white">{disciplines}</p>
                <p className="text-[11.5px] font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">Disciplines</p>
              </div>
            </div>

            <p className="mt-8 text-[13.5px] leading-relaxed text-slate-500 dark:text-slate-400">{profile.gpaNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}