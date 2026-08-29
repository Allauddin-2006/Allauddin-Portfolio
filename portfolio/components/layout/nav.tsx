"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex flex-col items-center gap-2 px-4 pt-4">
      <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-border bg-background/80 px-3 py-2 shadow-[0_1px_0_0_var(--border)]">
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 font-serif text-sm font-medium tracking-tight"
        >
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className="relative z-10 block cursor-pointer rounded-full px-4 py-1.5 text-sm text-foreground transition-colors"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-muted"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden cursor-pointer rounded-full border border-border px-3.5 py-1.5 text-sm transition-colors hover:bg-muted sm:block"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>

      <ul className="flex w-full max-w-3xl items-center gap-1 rounded-full border border-border bg-background/80 px-2 py-1.5 sm:hidden">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href} className="flex-1 text-center">
              <Link
                href={link.href}
                className={`block cursor-pointer rounded-full px-2 py-1.5 text-xs transition-colors ${
                  active ? "bg-muted text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
