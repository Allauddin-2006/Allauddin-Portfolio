import Link from "next/link";
import { FadeIn } from "@/components/ui/motion-primitives";
import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-6 pb-20 pt-40 sm:pt-48">
      <FadeIn>
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {siteConfig.location} · Open to internships
        </p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          Building machine
          <br />
          learning, one model at a time.
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          I&rsquo;m {siteConfig.name}, an {siteConfig.role.toLowerCase()} and B.Tech student in
          Artificial Intelligence &amp; Machine Learning. I build ML pipelines, deep-learning
          fundamentals, and AI-assisted prototypes &mdash; and I&rsquo;ve solved 100+ problems on
          LeetCode along the way.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="cursor-pointer rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            View projects
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="cursor-pointer rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Get in touch
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
