import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Barcode,
  CheckCircle2,
  Code2,
  Compass,
  Container,
  Database,
  FileText,
  Github,
  History,
  Layers,
  Network,
  Play,
  Route,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  X,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import type { Project, ProjectDetail, ProjectIconName } from "../data/projects";
import { isConfiguredUrl, toYouTubeEmbedUrl } from "../utils/urls";

const ICONS: Record<ProjectIconName, LucideIcon> = {
  network: Network,
  "file-text": FileText,
  workflow: Workflow,
  shield: ShieldCheck,
  history: History,
  chart: BarChart3,
  container: Container,
  barcode: Barcode,
  users: Users,
  layers: Layers,
  scan: ScanLine,
  route: Route,
};

const LINK_ICONS: Record<ProjectDetail["links"][number]["kind"], LucideIcon> = {
  github: Github,
  youtube: Youtube,
};

function DetailSection({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <h4
        id={id}
        className="flex items-center gap-2.5 font-serif text-lg font-semibold text-navy-900 dark:text-white"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 dark:bg-white/10 dark:text-navy-200">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        {title}
      </h4>
      <div className="mt-4">{children}</div>
    </section>
  );
}

const THUMBNAIL_SIZES = ["maxresdefault", "hqdefault", "mqdefault"];

function ProjectDemo({ demo }: { demo: ProjectDetail["demo"] }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  const isConfigured = isConfiguredUrl(demo.url);
  const pageUrl = isConfigured ? demo.url : "";
  const embedUrl = isConfigured ? toYouTubeEmbedUrl(demo.url) : null;
  const videoId = embedUrl ? (embedUrl.split("/").pop() ?? "") : "";
  const thumbnailSrc =
    videoId && thumbnailIndex < THUMBNAIL_SIZES.length
      ? `https://i.ytimg.com/vi/${videoId}/${THUMBNAIL_SIZES[thumbnailIndex]}.jpg`
      : "";

  if (!embedUrl) {
    return (
      <div className="flex aspect-video w-full shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center dark:border-white/20 dark:bg-white/[0.03]">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-navy-700 dark:bg-white/10 dark:text-navy-200">
          <Play className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="text-[14px] font-semibold text-navy-900 dark:text-white">Project demo video</p>
        <p className="max-w-sm text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
          A YouTube walkthrough of the system will be embedded here.
        </p>
        <p className="rounded-lg border border-dashed border-slate-300 px-3 py-1.5 font-mono text-[11px] break-all text-slate-500 dark:border-white/20 dark:text-slate-400">
          YOUTUBE_VIDEO_URL
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-navy-950 shadow-sm dark:border-white/10">
        {isPlaying ? (
          <iframe
            src={`${embedUrl}?autoplay=1`}
            title={demo.title}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : thumbnailSrc ? (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play the project demo video: ${demo.title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src={thumbnailSrc}
              alt={`Video preview for ${demo.title}`}
              loading="lazy"
              onError={() => setThumbnailIndex((index) => index + 1)}
              className="h-full w-full object-cover"
            />
            <span
              className="absolute inset-0 bg-navy-950/30 transition group-hover:bg-navy-950/10 group-focus-visible:bg-navy-950/10"
              aria-hidden="true"
            />
            <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-navy-950 shadow-lg transition-transform group-hover:scale-105 sm:h-16 sm:w-16">
                <Play className="ml-0.5 h-6 w-6 fill-current sm:h-7 sm:w-7" />
              </span>
            </span>
          </button>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 p-6 text-center">
            <Youtube className="h-8 w-8 text-accent-400" aria-hidden="true" />
            <p className="text-[13.5px] font-semibold text-white">Video preview unavailable</p>
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
            >
              <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              Play video
            </button>
          </div>
        )}
      </div>

      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-slate-500 dark:text-slate-400">
        <span>Preview image from YouTube. Playback needs a connection to YouTube.</span>
        <a
          href={pageUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 font-semibold text-navy-900 hover:underline dark:text-white"
        >
          Watch on YouTube
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <ArrowDown className="h-4 w-4 text-accent-500 dark:text-accent-400" />
    </div>
  );
}

function FlowNode({
  label,
  caption,
  icon: Icon,
}: {
  label: string;
  caption: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#111827]">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 dark:bg-white/10 dark:text-navy-200">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-[14px] font-semibold text-navy-900 dark:text-white">{label}</p>
        <p className="text-[12px] leading-snug text-slate-500 dark:text-slate-400">{caption}</p>
      </div>
    </div>
  );
}

function ProjectArchitecture({ architecture }: { architecture: ProjectDetail["architecture"] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 dark:border-white/10 dark:bg-[#111827]">
      <p className="text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">
        {architecture.summary}
      </p>

      <div className="mt-5 space-y-3">
        {architecture.layers.map((layer) => (
          <FlowNode
            key={layer.label}
            label={layer.label}
            caption={layer.caption}
            icon={ICONS[layer.icon]}
          />
        ))}

        <FlowArrow />

        <div className="rounded-xl border-2 border-dashed border-navy-200 bg-navy-50/60 p-4 dark:border-accent-500/40 dark:bg-white/[0.03]">
          <p className="text-center font-mono text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
            Microservices
          </p>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-3">
            {architecture.services.map((service) => (
              <li
                key={service.name}
                className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-center dark:border-white/10 dark:bg-[#0d1220]"
              >
                <p className="text-[13px] leading-snug font-semibold text-navy-900 dark:text-white">
                  {service.name}
                </p>
                <p className="mt-1 font-mono text-[11px] font-semibold text-accent-700 dark:text-accent-300">
                  :{service.port}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <FlowArrow />

        <FlowNode
          label={architecture.database.label}
          caption={architecture.database.caption}
          icon={Database}
        />
      </div>

      <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 dark:border-white/10">
        {architecture.notes.map((note) => (
          <li key={note} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400"
              aria-hidden="true"
            />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const detail = project.detail;

  useEffect(() => {
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [onClose]);

  if (!detail) return null;

  const links = detail.links.filter((link) => isConfiguredUrl(link.url));

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        className="flex max-h-[calc(100vh-1.5rem)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:max-h-[calc(100vh-2rem)] dark:border-white/10 dark:bg-[#111827]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-slate-200 p-5 dark:border-white/10 sm:p-6">
          <div className="min-w-0">
            <p className="kicker">{project.category}</p>
            <h3
              id="project-detail-title"
              className="mt-1 font-serif text-xl leading-snug font-semibold text-balance text-navy-900 sm:text-2xl dark:text-white"
            >
              {project.title}
            </h3>
            <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">{detail.subtitle}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={`Close ${project.title} project details`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-accent-500 hover:text-accent-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-accent-300"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-6">
          <div className="space-y-9">
            <p className="text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <section aria-labelledby="project-stats">
              <h4 id="project-stats" className="sr-only">
                Project statistics
              </h4>
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {detail.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center shadow-sm dark:border-white/10 dark:bg-[#0d1220]"
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-serif text-2xl font-semibold text-navy-900 dark:text-white">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-[11.5px] leading-snug text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <DetailSection id="project-demo" icon={Play} title="Project demo">
              <ProjectDemo demo={detail.demo} />
            </DetailSection>

            <DetailSection id="project-highlights" icon={Sparkles} title="Highlights">
              <ul className="grid gap-3 sm:grid-cols-2">
                {detail.highlights.map((highlight) => {
                  const Icon = ICONS[highlight.icon];
                  return (
                    <li
                      key={highlight.title}
                      className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#0d1220]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700 dark:bg-accent-950 dark:text-accent-300">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[14px] font-semibold text-navy-900 dark:text-white">
                          {highlight.title}
                        </p>
                        <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                          {highlight.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </DetailSection>

            <DetailSection id="project-overview" icon={FileText} title="Overview">
              <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-white/10 dark:bg-[#0d1220]">
                {detail.overview.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[14.5px] leading-relaxed text-slate-600 dark:text-slate-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </DetailSection>

            <DetailSection id="project-features" icon={Layers} title="Key features">
              <ul className="grid gap-4 sm:grid-cols-2">
                {detail.features.map((feature) => {
                  const Icon = ICONS[feature.icon];
                  return (
                    <li
                      key={feature.title}
                      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0d1220]"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 dark:bg-white/10 dark:text-navy-200">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <h5 className="text-[14.5px] font-semibold text-navy-900 dark:text-white">
                          {feature.title}
                        </h5>
                      </div>
                      <ul className="mt-3.5 space-y-2">
                        {feature.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                            <CheckCircle2
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-600 dark:text-accent-400"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </DetailSection>

            <DetailSection id="project-architecture" icon={Network} title="Architecture">
              <ProjectArchitecture architecture={detail.architecture} />
            </DetailSection>

            <DetailSection id="project-stack" icon={Code2} title="Technology stack">
              <div className="grid gap-4 sm:grid-cols-2">
                {detail.stack.map((group) => (
                  <div
                    key={group.group}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0d1220]"
                  >
                    <h5 className="font-mono text-[10px] font-semibold tracking-[0.15em] text-slate-500 uppercase dark:text-slate-400">
                      {group.group}
                    </h5>
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label={group.group}>
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md bg-navy-50 px-2.5 py-1 text-[12px] font-medium text-navy-700 dark:bg-white/10 dark:text-navy-100"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </DetailSection>

            <DetailSection id="project-journey" icon={Compass} title="Development journey">
              <ol className="space-y-3">
                {detail.journey.map((milestone) => (
                  <li
                    key={milestone.step}
                    className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#0d1220]"
                  >
                    <span className="font-mono text-[13px] font-bold text-accent-600 dark:text-accent-400">
                      {milestone.step}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[14px] font-semibold text-navy-900 dark:text-white">
                        {milestone.title}
                      </p>
                      <p className="mt-1 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                        {milestone.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </DetailSection>

            <DetailSection id="project-team" icon={Users} title="Team &amp; collaboration">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-white/10 dark:bg-[#0d1220]">
                <p className="text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {detail.team.summary}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1.5 text-[12.5px] font-semibold text-navy-800 dark:bg-white/10 dark:text-navy-100">
                  {detail.team.role}
                </p>
                <p className="mt-4 font-mono text-[10px] font-semibold tracking-[0.15em] text-slate-500 uppercase dark:text-slate-400">
                  Contributors
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-2" aria-label="Project contributors">
                  {detail.team.contributors.map((contributor) => (
                    <li
                      key={contributor}
                      className="rounded-md bg-accent-50 px-2.5 py-1 text-[12px] font-medium text-accent-800 dark:bg-accent-950 dark:text-accent-200"
                    >
                      {contributor}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
                  {detail.team.note}
                </p>
              </div>
            </DetailSection>

            <DetailSection id="project-links" icon={ArrowUpRight} title="Project links">
              {links.length > 0 ? (
                <ul className="flex flex-wrap gap-3">
                  {links.map((link) => {
                    const Icon = LINK_ICONS[link.kind];
                    return (
                      <li key={link.kind}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 rounded-lg border border-navy-900/20 px-5 py-2.5 text-[13.5px] font-medium text-navy-900 transition-colors hover:bg-navy-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5"
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="rounded-xl border border-dashed border-slate-300 px-4 py-3 text-[13px] leading-relaxed text-slate-500 dark:border-white/20 dark:text-slate-400">
                  Repository and demo links have not been published yet.
                </p>
              )}
            </DetailSection>
          </div>
        </div>
      </div>
    </div>
  );
}
