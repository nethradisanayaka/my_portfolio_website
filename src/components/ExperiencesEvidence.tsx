import { ArrowRight, BadgeCheck, Calendar, MapPin } from "lucide-react";
import { evidenceItems, evidenceNote } from "../data/evidence";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ExperiencesEvidence() {
  return (
    <section id="evidence" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Experiences & Evidence" title="University life as documented evidence">
            {evidenceNote}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {evidenceItems.map((item, index) => (
            <Reveal key={item.id} delay={120 + index * 70}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 dark:border-white/10 dark:bg-[#111827]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="kicker">{item.category}</p>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-navy-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1.5 text-[12px] font-medium text-navy-700 dark:bg-white/10 dark:text-navy-100">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.period}
                  </span>
                </div>
                <div className="mt-5 grid gap-3 text-[13px] leading-relaxed sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.15em] text-slate-500 uppercase dark:text-slate-400">
                      Role
                    </p>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">{item.role}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.15em] text-slate-500 uppercase dark:text-slate-400">
                      Activity
                    </p>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">{item.activity}</p>
                  </div>
                </div>
                <div className="mt-4 border-t border-slate-100 pt-4 dark:border-white/10">
                  <p className="flex items-start gap-2 text-[13.5px] leading-relaxed text-navy-800 dark:text-navy-100">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                    <span>
                      <span className="font-semibold">Outcome: </span>
                      {item.outcome}
                    </span>
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">Lesson: </span>
                    {item.lesson}
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                    <span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">Professional relevance: </span>
                      {item.relevance}
                    </span>
                  </p>
                </div>
                <p className="mt-4 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-slate-400 uppercase dark:text-slate-500">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  Academic record
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
