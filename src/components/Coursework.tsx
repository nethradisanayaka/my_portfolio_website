import { useState } from "react";
import { ChevronDown, GraduationCap } from "lucide-react";
import { courseCategories, coursework, type CourseCategory } from "../data/coursework";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CATEGORY_DOT: Record<CourseCategory, string> = {
  "Computer Science": "bg-accent-500",
  Mathematics: "bg-navy-500",
  Physics: "bg-amber-500",
};

function gradeRank(grade: string): number {
  const order = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-"];
  const idx = order.indexOf(grade);
  return idx === -1 ? order.length + 1 : idx;
}

export function Coursework() {
  const [category, setCategory] = useState<"All" | CourseCategory>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    category === "All" ? coursework : coursework.filter((c) => c.category === category);
  const visible = showAll ? filtered : filtered.slice(0, 24);
  const topCourses = [...coursework].sort((a, b) => gradeRank(a.grade) - gradeRank(b.grade)).slice(0, 5);

  return (
    <section id="coursework" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Coursework" title="Undergraduate coursework &amp; grades">
            Modules and results recorded in my curriculum vitae, grouped by discipline.
          </SectionHeading>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setCategory("All")}
              aria-pressed={category === "All"}
              aria-controls="coursework-results"
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                category === "All"
                  ? "bg-navy-900 text-white dark:bg-white dark:text-navy-900"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-navy-900/30 hover:text-navy-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              All
            </button>
            {courseCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                aria-controls="coursework-results"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  category === c
                    ? "bg-navy-900 text-white dark:bg-white dark:text-navy-900"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-navy-900/30 hover:text-navy-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${CATEGORY_DOT[c]}`} aria-hidden="true" />
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div id="coursework-results" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, idx) => (
            <Reveal key={item.code} delay={(idx % 3) * 70}>
              <article className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-[#111827]">
                <span className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-navy-50 dark:bg-white/10">
                  <span className="font-mono text-[10px] font-semibold text-navy-700 dark:text-navy-200">
                    {item.code.split(" ")[0]}
                  </span>
                  <span className="font-mono text-[13px] font-bold text-navy-900 dark:text-white">
                    {item.code.split(" ")[1]}
                  </span>
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[14px] font-semibold text-navy-900 dark:text-white" title={item.name}>
                    {item.name}
                  </h3>
                  <p className="mt-0.5 flex items-center gap-2 text-[12px] text-slate-500 dark:text-slate-400">
                    <span>{item.code}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{item.credits} credits</span>
                  </p>
                </div>
                <span className="shrink-0 rounded-md bg-accent-50 px-2.5 py-1 font-mono text-[13px] font-bold text-accent-800 dark:bg-accent-950 dark:text-accent-200">
                  {item.grade}
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length > 24 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll((s) => !s)}
              aria-expanded={showAll}
              aria-controls="coursework-results"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-900/20 px-5 py-2.5 text-[13.5px] font-medium text-navy-900 transition-colors hover:bg-navy-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5"
            >
              {showAll ? "Show fewer" : "Show all courses"}
              <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
          </div>
        )}

        <Reveal delay={160}>
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-[#111827]">
            <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-navy-900 dark:text-white">
              <GraduationCap className="h-5 w-5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
              Top graded courses
            </h3>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {topCourses.map((item) => (
                <li key={item.code} className="flex items-center justify-between gap-3 text-[14px]">
                  <span className="truncate text-slate-600 dark:text-slate-400">{item.name}</span>
                  <span className="shrink-0 font-mono text-[13px] font-bold text-accent-700 dark:text-accent-300">
                    {item.grade}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}