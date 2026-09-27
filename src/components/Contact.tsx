import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { contact } from "../data/contact";
import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Nethra Dhananjali",
    href: contact.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "nethradisanayaka",
    href: contact.github,
    icon: Github,
  },
  {
    label: "Location",
    value: contact.location,
    href: undefined,
    icon: MapPin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-slate-200 py-20 sm:py-28 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Contact" title="Start a professional conversation">
            Interested in collaborating, discussing an academic question, or connecting professionally? My
            existing contact details are below.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {CONTACT_ITEMS.map((item, index) => (
            <Reveal key={item.label} delay={120 + index * 70}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#111827]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white dark:bg-white dark:text-navy-900">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium tracking-wider text-slate-400 uppercase dark:text-slate-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer noopener"
                      className="mt-0.5 block break-all text-[14.5px] font-semibold text-navy-900 hover:underline dark:text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-[14.5px] font-semibold text-navy-900 dark:text-white">{item.value}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/5">
            <p className="text-[12.5px] leading-relaxed text-slate-500 dark:text-slate-400">
              Prefer the complete academic record?
            </p>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-900 hover:underline dark:text-white"
            >
              <Download className="h-4 w-4 text-accent-600 dark:text-accent-400" aria-hidden="true" />
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
