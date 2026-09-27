import { Sparkles } from "lucide-react";
import { interests, interestsNote } from "../data/interests";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Interests() {
  return (
    <section id="interests" className="scroll-mt-20 border-y border-slate-200 bg-[#f2f6fb] py-20 sm:py-28 dark:border-white/10 dark:bg-[#0a101d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Interests" title="Current academic interests">
            {interestsNote}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 90}>
              <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#111827]">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-white transition-colors group-hover:bg-accent-600 dark:bg-white dark:text-navy-900 dark:group-hover:bg-accent-400">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900 dark:text-white">{item.label}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
                <p className="mt-4 border-t border-slate-100 pt-3 text-[11.5px] leading-relaxed text-slate-500 dark:border-white/10 dark:text-slate-400">
                  <span className="font-semibold text-navy-800 dark:text-navy-100">Evidence: </span>
                  {item.evidence}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}