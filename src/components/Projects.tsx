import { useState } from "react";
import { ArrowUpRight, Layers } from "lucide-react";
import { projects, projectsNote, type Project } from "../data/projects";
import { isConfiguredUrl } from "../utils/urls";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({
  project,
  onOpen,
  delay,
}: {
  project: Project;
  onOpen: (project: Project) => void;
  delay: number;
}) {
  const githubUrl = isConfiguredUrl(project.githubUrl) ? project.githubUrl : "";
  const demoUrl = isConfiguredUrl(project.demoUrl) ? project.demoUrl : "";

  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-[#111827]">
        {project.image ? (
          <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-white/5">
            <img
              src={project.image}
              alt={project.imageAlt ?? project.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-2.5 bg-navy-900 px-4 text-center dark:bg-[#0a101d]">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent-300">
              <Layers className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-accent-300 uppercase">
              {project.category}
            </span>
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="font-serif text-lg font-semibold text-navy-900 dark:text-white">
              {project.title}
            </h3>
            <span className="rounded-full bg-accent-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-accent-800 uppercase dark:bg-accent-950 dark:text-accent-200">
              {project.status}
            </span>
          </div>
          <p className="mt-1 font-mono text-[10px] font-semibold tracking-[0.15em] text-slate-500 uppercase dark:text-slate-400">
            {project.category}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
          <dl className="mt-4 space-y-2 text-[12.5px] leading-relaxed">
            <div>
              <dt className="font-semibold text-slate-500 dark:text-slate-400">My role</dt>
              <dd className="text-slate-600 dark:text-slate-300">{project.role}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-500 dark:text-slate-400">Outcome</dt>
              <dd className="text-slate-600 dark:text-slate-300">{project.outcome}</dd>
            </div>
          </dl>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies and methods">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-navy-50 px-2.5 py-1 text-[12px] font-medium text-navy-700 dark:bg-white/10 dark:text-navy-100"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[12px] leading-relaxed text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-navy-800 dark:text-navy-100">Skills demonstrated: </span>
            {project.skills.join(", ")}
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-5">
            {project.detail ? (
              <button
                type="button"
                onClick={() => onOpen(project)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-navy-900/20 px-4 py-2 text-[13.5px] font-medium text-navy-900 transition-colors hover:bg-navy-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5"
              >
                View details
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            ) : null}
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-navy-900 hover:underline dark:text-white"
              >
                Repository
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-accent-700 hover:underline dark:text-accent-300"
              >
                Demo
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Projects" title="Selected projects">
            {projectsNote}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
              delay={(idx % 3) * 90}
            />
          ))}
        </div>
      </div>

      {selectedProject ? (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </section>
  );
}
