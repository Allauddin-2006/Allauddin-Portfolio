import { FadeIn } from "@/components/ui/motion-primitives";
import { achievements, certifications } from "@/lib/config";

export function Certifications() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <FadeIn>
        <div className="h-full rounded-2xl border border-border p-6">
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-2.5">
                <span className="mt-0.5 text-foreground" aria-hidden="true">
                  ✓
                </span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
      <FadeIn delay={0.05}>
        <div className="h-full rounded-2xl border border-border p-6">
          <p className="font-serif text-4xl tracking-tight">{achievements.headline}</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
            {achievements.label}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{achievements.detail}</p>
          <span className="mt-5 inline-block rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground">
            {achievements.badge}
          </span>
        </div>
      </FadeIn>
    </div>
  );
}
