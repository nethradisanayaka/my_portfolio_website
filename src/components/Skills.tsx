import { CheckCircle2, Code2, Users, Wrench } from "lucide-react";
import { skillCategoryLabels, skillGroups, type SkillCategory } from "../data/skills";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CATEGORY_ORDER: SkillCategory[] = ["technical", "professional"];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Work Samples & Skills" title="Capabilities with academic evidence">
            Skills are grouped by what the CV actually documents. There are no self-assigned percentages or
            unverified tool claims here.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 space-y-8">
          {CATEGORY_ORDER.map((category) => {
            const groups = skillGroups.filter((group) => group.category === category);
            const Icon = category === "technical" ? Code2 : Users;
            return (
              <Reveal key={category} delay={120}>
                <div className="grid gap-6 lg:grid-cols-[0.32fr_0.68fr] lg:gap-8">
                  <div className="flex items-start gap-3 lg:block">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white dark:bg-white dark:text-navy-900">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="lg:mt-4">
                      <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
                        {skillCategoryLabels[category]}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                        Evidence drawn from the academic record.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {groups.map((group) => (
                      <article
                        key={group.id}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111827]"
                      >
                        <div className="flex items-center gap-2">
                          <Wrench className="h-4 w-4 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                          <h4 className="font-serif text-lg font-semibold text-navy-900 dark:text-white">
                            {group.title}
                          </h4>
                        </div>
                        <p className="mt-2 text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                          {group.description}
                        </p>
                        <ul className="mt-5 space-y-4">
                          {group.items.map((item) => (
                            <li key={item.name} className="flex items-start gap-2.5">
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400"
                                aria-hidden="true"
                              />
                              <div>
                                <p className="text-[14px] font-semibold text-navy-900 dark:text-white">{item.name}</p>
                                <p className="mt-0.5 text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                                  {item.evidence}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
