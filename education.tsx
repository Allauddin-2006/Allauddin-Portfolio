import { FadeIn } from "@/components/ui/motion-primitives";
import { education } from "@/lib/config";

export function Education() {
  return (
    <div className="flex flex-col gap-4">
      {education.map((edu, i) => (
        <FadeIn key={edu.school} delay={i * 0.05}>
          <div className="flex flex-col justify-between gap-2 rounded-2xl border border-border p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-serif text-lg tracking-tight">{edu.school}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {edu.program} — {edu.meta}
              </p>
            </div>
            <p className="font-mono text-xs text-muted-foreground">{edu.period}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
