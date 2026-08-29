import type { Metadata } from "next";
import { siteConfig } from "./config";

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title ? `${title} — ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.role}`;
  const pageDescription = description ?? siteConfig.tagline;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    alternates: { canonical: url },
  };
}
