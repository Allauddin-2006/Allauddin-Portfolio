import type { Metadata } from "next";
import { Skills } from "@/components/about/skills";
import { Experience } from "@/components/about/experience";
import { Education } from "@/components/about/education";
import { Certifications } from "@/components/about/certifications";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Background, skills, experience, and education.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 pb-4 pt-40 sm:pt-48">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          About
        </p>
        <h1 className="font-serif text-3xl tracking-tight sm:text-4xl">
          Hi, I&rsquo;m {siteConfig.name}.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          {siteConfig.tagline} I completed a machine-learning internship, work across Python and
          C++, and enjoy turning ideas into working prototypes fast &mdash; AI-assisted or
          otherwise.
        </p>
      </div>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <FadeIn>
          <h2 className="mb-8 font-serif text-2xl tracking-tight sm:text-3xl">Skills</h2>
        </FadeIn>
        <Skills />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <FadeIn>
          <h2 className="mb-8 font-serif text-2xl tracking-tight sm:text-3xl">Experience</h2>
        </FadeIn>
        <Experience />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <FadeIn>
          <h2 className="mb-8 font-serif text-2xl tracking-tight sm:text-3xl">Education</h2>
        </FadeIn>
        <Education />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <FadeIn>
          <h2 className="mb-8 font-serif text-2xl tracking-tight sm:text-3xl">
            Certifications &amp; achievements
          </h2>
        </FadeIn>
        <Certifications />
      </section>

      <ContactCard />
    </>
  );
}
