import { Download, FileText, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { Reveal } from "./Reveal";

const BUTTONS = [
  { label: "Explore My Profile", href: "#personal-brand", primary: true, download: false },
  { label: "Download CV", href: profile.cvUrl, primary: false, download: true },
  { label: "Contact Me", href: "#contact", primary: false, download: false },
] as const;

export function Hero() {
  const socials = [
    { label: "GitHub", href: profile.social.github, icon: Github },
    { label: "LinkedIn", href: profile.social.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${profile.social.email}`, icon: Mail },
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_85%_-5%,rgba(24,162,174,0.10),transparent),linear-gradient(to_bottom,#f2f6fb,#fafbfd)] dark:bg-[radial-gradient(55rem_28rem_at_85%_-5%,rgba(24,162,174,0.14),transparent),linear-gradient(to_bottom,#0a101d,#0d1220)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 pt-28 pb-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-24">
        <div>
          <Reveal>
            <p className="kicker">University of Sri Jayewardenepura &#183; Computer Science</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-5xl lg:text-[3.4rem] dark:text-white">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-navy-700 dark:text-navy-200">
              {profile.role}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-[15px] text-slate-600 dark:text-slate-400">
              <GraduationCap className="h-4 w-4 text-accent-600 dark:text-accent-400" aria-hidden="true" />
              {profile.university.name}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.shortIntro}
            </p>
            <div className="mt-4 max-w-xl border-l-2 border-accent-500 pl-4">
              <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-accent-700 uppercase dark:text-accent-300">
                Current focus
              </p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                {profile.currentFocus}
              </p>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Current academic interests">
              {profile.academicInterests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-[12px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {BUTTONS.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  download={"download" in btn ? btn.download : undefined}
                  className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[14px] font-medium transition-colors ${
                    btn.primary
                      ? "bg-navy-900 text-white hover:bg-navy-700 dark:bg-white dark:text-navy-900 dark:hover:bg-navy-100"
                      : "border border-navy-900/20 text-navy-900 hover:border-navy-900 hover:bg-navy-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5"
                  }`}
                >
                  {btn.label === "Download CV" && <Download className="h-4 w-4" aria-hidden="true" />}
                  {btn.label === "Explore My Profile" && <FileText className="h-4 w-4" aria-hidden="true" />}
                  {btn.label === "Contact Me" && <Mail className="h-4 w-4" aria-hidden="true" />}
                  {btn.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 border-t border-slate-200 pt-6 dark:border-white/10">
              <p className="text-[11px] font-medium tracking-[0.24em] text-slate-500 uppercase dark:text-slate-500">
                Find me on
              </p>
              <ul className="mt-3 flex items-center gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-accent-300"
                    >
                      <s.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,rgba(24,162,174,0.16),transparent_55%)]"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-navy-900/5 dark:border-white/10 dark:bg-[#111827]">
              <div className="flex items-center justify-center border-b border-slate-100 bg-slate-50 px-8 py-10 dark:border-white/5 dark:bg-white/[0.03]">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    className="h-52 w-52 rounded-full object-cover ring-2 ring-slate-200 sm:h-56 sm:w-56 dark:ring-white/15"
                  />
                ) : (
                  <div className="flex h-52 w-52 items-center justify-center rounded-full bg-navy-900 sm:h-56 sm:w-56">
                    <span className="font-serif text-6xl font-semibold text-white">{profile.initials}</span>
                  </div>
                )}
              </div>
              <dl className="space-y-3 px-6 py-5 text-[13.5px]">
                <div>
                  <dt className="text-[11px] font-medium tracking-wider text-slate-400 uppercase dark:text-slate-500">
                    Programme
                  </dt>
                  <dd className="mt-0.5 font-medium text-navy-900 dark:text-white">
                    Bachelor&rsquo;s Honours in Computer Science
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium tracking-wider text-slate-400 uppercase dark:text-slate-500">
                    Department
                  </dt>
                  <dd className="mt-0.5 text-slate-600 dark:text-slate-300">{profile.university.department}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-[11px] font-medium tracking-wider text-slate-400 uppercase dark:text-slate-500">
                    <MapPin className="h-3 w-3" aria-hidden="true" /> Location
                  </dt>
                  <dd className="mt-0.5 text-slate-600 dark:text-slate-300">{profile.location}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium tracking-wider text-slate-400 uppercase dark:text-slate-500">
                    Current focus
                  </dt>
                  <dd className="mt-0.5 text-slate-600 dark:text-slate-300">{profile.currentFocus}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}