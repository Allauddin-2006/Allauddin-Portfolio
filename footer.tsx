import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-6 pb-10 pt-4 text-center font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
      <p>© {new Date().getFullYear()} {siteConfig.name}</p>
      <p>Built with Next.js &amp; Tailwind CSS</p>
    </footer>
  );
}
