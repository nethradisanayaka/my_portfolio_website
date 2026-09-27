import { BookOpenCheck, Download, Eye, FileText, Layers } from "lucide-react";
import { coursework } from "../data/coursework";
import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function CVSection() {
  return (
    <section id="cv" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <SectionHeading kicker="Curriculum Vitae" title="My academic CV" center>
            This page summarizes the academic evidence; the complete CV remains available as a PDF for deeper
            review.
          </SectionHeading>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
            {[
              { label: "Overall GPA", value: profile.gpa.toString(), icon: BookOpenCheck },
              { label: "Courses recorded", value: coursework.length.toString(), icon: Layers },
              { label: "Academic focus", value: "Computer Science", icon: FileText },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#111827]">
                <item.icon className="h-4 w-4 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                <p className="mt-3 font-serif text-lg font-semibold text-navy-900 dark:text-white">{item.value}</p>
                <p className="mt-0.5 text-[11px] tracking-wide text-slate-500 uppercase dark:text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-navy-700 dark:bg-white dark:text-navy-900 dark:hover:bg-navy-100"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-900/20 px-6 py-3 text-[14px] font-semibold text-navy-900 transition-colors hover:bg-navy-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5"
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              View online
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 flex items-center justify-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400">
            <FileText className="h-4 w-4" aria-hidden="true" />
            PDF &middot; {profile.fullName}
          </p>
        </Reveal>
      </div>
    </section>
  );
}