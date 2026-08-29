import { FadeIn } from "@/components/ui/motion-primitives";
import { ContactButton } from "@/components/contact/contact-button";
import { siteConfig } from "@/lib/config";

export function ContactCard() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-4">
      <FadeIn>
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-foreground px-8 py-10 text-background sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Let&rsquo;s work together.
            </h2>
            <p className="mt-2 max-w-sm text-sm text-background/70">
              Open to internships and entry-level roles in machine learning and software
              engineering.
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-3 sm:w-auto sm:items-end">
            <ContactButton email={siteConfig.email} />
            <div className="flex gap-4 font-mono text-xs text-background/70">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-background"
              >
                GitHub
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-background"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-background"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
