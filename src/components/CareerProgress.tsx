import { ArrowRight, CheckCircle2, CircleDot, FileText, Target, Users } from "lucide-react";
import { careerGoals, professionalRecord, workInProgress, type WorkStatus } from "../data/career";
import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STATUS_CLASS: Record<WorkStatus, string> = {
  "In Progress": "bg-accent-50 text-accent-800 dark:bg-accent-950 dark:text-accent-200",
  Completed: "bg-navy-50 text-navy-800 dark:bg-white/10 dark:text-navy-100",
  Planned: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200",
};

export function CareerProgress() {
  return (
    <section id="career" className="scroll-mt-20 border-y border-slate-200 bg-[#f2f6fb] py-20 sm:py-28 dark:border-white/10 dark:bg-[#0a101d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Career Progress" title="A developing professional direction">
            I am keeping the current record separate from future goals so the next steps remain honest, specific,
            and open to refinement.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={120}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#111827]">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">Professional goals</h3>
              </div>
              <div className="mt-6 space-y-5">
                {careerGoals.map((goal) => (
                  <div key={goal.id} className="grid grid-cols-[5.5rem_1fr] gap-3 border-b border-slate-100 pb-5 last:border-0 last:pb-0 dark:border-white/10">
                    <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-accent-700 uppercase dark:text-accent-300">
                      {goal.horizon}
                    </span>
                    <div>
                      <h4 className="text-[14px] font-semibold text-navy-900 dark:text-white">{goal.title}</h4>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={180}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#111827]">
              <div className="flex items-center gap-2">
                <CircleDot className="h-5 w-5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">Current work</h3>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                Current work is labelled by status so completed and in-progress items stay distinguishable.
              </p>
              <div className="mt-6 space-y-4">
                {workInProgress.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="text-[14px] font-semibold text-navy-900 dark:text-white">{item.title}</h4>
                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase ${STATUS_CLASS[item.status]}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                    <dl className="mt-3 grid gap-2 text-[12px] leading-relaxed sm:grid-cols-2">
                      <div>
                        <dt className="font-semibold text-slate-500 dark:text-slate-400">Role</dt>
                        <dd className="text-slate-600 dark:text-slate-300">{item.role}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-500 dark:text-slate-400">Methods / focus</dt>
                        <dd className="text-slate-600 dark:text-slate-300">{item.methods}</dd>
                      </div>
                      {item.nextMilestone ? (
                        <div className="sm:col-span-2">
                          <dt className="font-semibold text-slate-500 dark:text-slate-400">Next milestone</dt>
                          <dd className="text-slate-600 dark:text-slate-300">{item.nextMilestone}</dd>
                        </div>
                      ) : null}
                    </dl>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#111827]">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">References</h3>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
              Referee details are provided on request.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {professionalRecord.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-[14px] font-semibold text-navy-900 dark:text-white">{item.title}</h4>
                    <span className="font-mono text-[10px] tracking-wide text-slate-500 uppercase dark:text-slate-400">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-accent-200 bg-accent-50/70 px-5 py-4 text-[13px] dark:border-accent-900 dark:bg-accent-950/40">
            <p className="flex items-center gap-2 text-accent-900 dark:text-accent-100">
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              The complete academic record remains available in the CV.
            </p>
            <a href={profile.cvUrl} download className="inline-flex items-center gap-1.5 font-semibold text-accent-800 underline underline-offset-4 hover:text-accent-950 dark:text-accent-200 dark:hover:text-white">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Open CV
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
