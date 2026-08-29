import { FadeIn } from "@/components/ui/motion-primitives";
import type { Project } from "@/lib/config";

export function ProjectsGrid({
  items,
  heading,
}: {
  items: Project[];
  heading?: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      {heading && (
        <FadeIn>
          <h2 className="mb-8 font-serif text-2xl tracking-tight sm:text-3xl">{heading}</h2>
        </FadeIn>
      )}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {items.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.05}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-border bg-muted/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_12px_30px_-15px_rgba(0,0,0,0.35)]"
            >
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-lg tracking-tight">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-foreground">
                {project.linkLabel}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
