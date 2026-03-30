import { HomePageClient } from "@/components/home-page-client";
import { homeContent } from "@/data/portfolio";

/** Fully static HTML at build time; no per-request Node rendering. */
export const dynamic = "force-static";

export default function HomePage() {
  return (
    <HomePageClient
      content={homeContent}
      year={new Date().getFullYear()}
    />
  );
}
