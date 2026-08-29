import { Hero } from "@/components/hero/hero";
import { ProjectsGrid } from "@/components/projects/projects";
import { ContactCard } from "@/components/contact/contact-card";
import { projects } from "@/lib/config";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <ProjectsGrid items={featured} heading="Featured projects" />
      <ContactCard />
    </>
  );
}
