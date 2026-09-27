import { ArrowRight, Sprout } from "lucide-react";
import { growthStory, selfReflection } from "../data/reflection";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const GROWTH_STEPS = [
  { label: "Challenge", value: growthStory.challenge },
  { label: "Action", value: growthStory.action },
  { label: "Result", value: growthStory.result },
  { label: "Lesson", value: growthStory.lesson },
  { label: "Growth", value: growthStory.growth },
];

export function GrowthReflection() {
  return (
    <section id="reflection" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Growth & Reflection" title="Progress with a reflective lens">
            A portfolio should show not only what was completed, but also how the experience is shaping the next
            stage of development.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {selfReflection.map((entry, index) => (
            <Reveal key={entry.title} delay={120 + index * 70}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 dark:border-white/10 dark:bg-[#111827]">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 dark:bg-white/10 dark:text-navy-100">
                    <Sprout className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-navy-900 dark:text-white">{entry.title}</h3>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{entry.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#111827]">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">How the record shows growth</h3>
            </div>
            <ol className="mt-7 grid gap-5 md:grid-cols-5">
              {GROWTH_STEPS.map((step, index) => (
                <li key={step.label} className="relative">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-900 font-mono text-[11px] font-semibold text-white dark:bg-white dark:text-navy-900">
                      {index + 1}
                    </span>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-accent-700 uppercase dark:text-accent-300">
                      {step.label}
                    </p>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">{step.value}</p>
                </li>
              ))}
            </ol>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
