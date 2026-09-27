import { ArrowRight, Compass, Lightbulb, Target } from "lucide-react";
import { brandCharacteristics, brandStatement } from "../data/brand";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STATEMENTS = [
  { label: "I am", value: brandStatement.identity },
  { label: "I value", value: brandStatement.values },
  { label: "I am interested in", value: brandStatement.interests },
  { label: "My direction", value: brandStatement.direction },
];

export function PersonalBrand() {
  return (
    <section id="personal-brand" className="scroll-mt-20 border-y border-slate-200 bg-[#f2f6fb] py-20 sm:py-28 dark:border-white/10 dark:bg-[#0a101d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Personal Brand" title="A professional identity built on evidence">
            I want the portfolio to show how academic choices, study habits, and results connect to the kind of
            computer science professional I am becoming.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal delay={120}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#111827]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white dark:bg-white dark:text-navy-900">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-navy-900 dark:text-white">Who I am</h3>
              <dl className="mt-6 space-y-5">
                {STATEMENTS.map((statement) => (
                  <div key={statement.label} className="border-l-2 border-accent-500 pl-4">
                    <dt className="font-mono text-[10px] font-semibold tracking-[0.18em] text-accent-700 uppercase dark:text-accent-300">
                      {statement.label}
                    </dt>
                    <dd className="mt-1.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
                      {statement.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="space-y-4">
            {brandCharacteristics.map((characteristic, index) => (
              <Reveal key={characteristic.id} delay={140 + index * 70}>
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111827]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="kicker">Characteristic {String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mt-2 font-serif text-xl font-semibold text-navy-900 dark:text-white">
                        {characteristic.name}
                      </h3>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700 dark:bg-accent-950 dark:text-accent-200">
                      {index === 0 ? (
                        <Target className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Lightbulb className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                  </div>
                  <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-navy-800 dark:text-navy-100">
                    {characteristic.summary}
                  </p>
                  <div className="mt-5 grid gap-4 text-[13px] leading-relaxed sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
                        Experience
                      </p>
                      <p className="mt-1.5 text-slate-600 dark:text-slate-300">{characteristic.experience}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
                        Action
                      </p>
                      <p className="mt-1.5 text-slate-600 dark:text-slate-300">{characteristic.action}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
                        Result
                      </p>
                      <p className="mt-1.5 text-slate-600 dark:text-slate-300">{characteristic.result}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">
                        Lesson and relevance
                      </p>
                      <p className="mt-1.5 text-slate-600 dark:text-slate-300">
                        {characteristic.lesson} {characteristic.relevance}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={220}>
          <p className="mt-8 flex items-start gap-2 text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" aria-hidden="true" />
            These characteristics are intentionally limited to patterns supported by the supplied academic record;
            claims without documented examples are left out.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
