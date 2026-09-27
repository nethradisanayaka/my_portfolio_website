import type { ReactNode } from "react";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}

export function SectionHeading({ kicker, title, children, center = false }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="kicker">{kicker}</p>
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <div className={`academic-rule mt-4 ${center ? "mx-auto" : ""}`} aria-hidden="true" />
      {children ? <div className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">{children}</div> : null}
    </div>
  );
}