import { FadeIn } from "@/components/ui/motion-primitives";
import { experience } from "@/lib/config";

export function Experience() {
  return (
    <div className="flex flex-col gap-6">
      {experience.map((job, i) => (
        <FadeIn key={job.role + job.org} delay={i * 0.05}>
          <div className="rounded-2xl border border-border p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-lg tracking-tight">
                {job.role} <span className="text-muted-foreground">— {job.org}</span>
              </h3>
              <p className="font-mono text-xs text-muted-foreground">{job.meta}</p>
            </div>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden="true">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
