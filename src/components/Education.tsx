import { BadgeCheck, BookOpen, Calendar, MapPin } from "lucide-react";
import { education } from "../data/education";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Education" title="Academic timeline">
            My educational pathway across three institutions, as recorded in my curriculum vitae.
          </SectionHeading>
        </Reveal>

        <ol className="relative mt-14 space-y-10 border-l border-slate-200 pl-6 sm:pl-8 dark:border-white/10">
          {education.map((item, idx) => (
            <li key={item.id} className="relative">
              <span
                className="absolute top-1 -left-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent-500 bg-white sm:-left-4 dark:bg-[#0d1220]"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-accent-500" />
              </span>

              <Reveal delay={idx * 80}>
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7 dark:border-white/10 dark:bg-[#111827]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
                        {item.institution}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.location}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-[12.5px] font-medium text-navy-700 dark:bg-white/10 dark:text-navy-100">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.period}
                    </span>
                  </div>

                  <h4 className="mt-4 flex items-center gap-2 text-[14.5px] font-semibold text-navy-700 dark:text-navy-200">
                    <BookOpen className="h-4 w-4 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                    {item.title}
                  </h4>

                  <ul className="mt-3 space-y-1.5">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-400">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}