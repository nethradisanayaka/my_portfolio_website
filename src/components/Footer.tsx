import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "GitHub", href: profile.social.github, icon: Github },
    { label: "LinkedIn", href: profile.social.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${profile.social.email}`, icon: Mail },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#0a101d]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-serif text-[15px] font-semibold text-navy-900 dark:text-white">{profile.name}</p>
          <p className="mt-1 text-[12.5px] text-slate-500 dark:text-slate-400">
            University of Sri Jayewardenepura &middot; {profile.location}
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-accent-300"
              >
                <s.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[12.5px] text-slate-500 dark:text-slate-400">
          &copy; {year} {profile.fullName}
        </p>
      </div>
    </footer>
  );
}