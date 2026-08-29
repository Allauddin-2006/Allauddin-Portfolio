import { FadeIn } from "@/components/ui/motion-primitives";
import { skillGroups } from "@/lib/config";

export function Skills() {
  return (
    <div className="flex flex-col gap-8">
      {skillGroups.map((group, i) => (
        <FadeIn key={group.label} delay={i * 0.05}>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
