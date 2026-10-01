import { SiteHeader } from "./components/navigation/site-header"
import { Hero } from "./components/editorial/hero";
import { FeaturedStory } from "@/components/editorial/featured-story";
import {EditorPicks } from "@/components/editorial/editor-picks";
import { featuredArticle } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <EditorPicks featured={featuredArticle} />

    </main>
  );
}