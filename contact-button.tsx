"use client";

import { useState } from "react";

export function ContactButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — fall back to a mailto link click.
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy email address to clipboard"
      className="group relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors sm:w-auto"
    >
      <span
        className={`transition-transform duration-200 ${copied ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        {email}
      </span>
      <span
        className={`absolute transition-transform duration-200 ${copied ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      >
        Copied to clipboard
      </span>
    </button>
  );
}
