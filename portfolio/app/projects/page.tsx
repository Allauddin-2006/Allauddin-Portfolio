import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/projects";
import { ContactCard } from "@/components/contact/contact-card";
import { createMetadata } from "@/lib/metadata";
import { projects } from "@/lib/config";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Machine learning, deep learning, and AI-assisted prototyping projects.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 pb-4 pt-40 sm:pt-48">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Selected work
        </p>
        <h1 className="font-serif text-3xl tracking-tight sm:text-4xl">Projects</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          A mix of ML pipelines, deep-learning fundamentals, and AI-assisted prototypes built
          across coursework and self-directed learning.
        </p>
      </div>
      <ProjectsGrid items={projects} />
      <ContactCard />
    </>
  );
}
