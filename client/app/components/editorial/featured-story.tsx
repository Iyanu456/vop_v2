import Image from "next/image";
import Link from "next/link";

import type { Article } from "@/types/article";

type FeaturedStoryProps = {
  story: Article;
};

export function FeaturedStory({ story }: FeaturedStoryProps) {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* Section label */}
        <div className="mb-12 flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Featured
          </p>

          <p className="text-xs text-[var(--muted)]">
            {story.category}
          </p>
        </div>

        {/* Editorial content */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">

          {/* Story information */}
          <div>
            <h2 className="max-w-2xl font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {story.title}
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[var(--muted)]">
              {story.subtitle}
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-[var(--muted)]">
              <span>By {story.author}</span>
              <span>·</span>
              <span>{story.date}</span>
              <span>·</span>
              <span>{story.readingTime}</span>
            </div>

            <div className="mt-10">
              <Link
                href={`/stories/${story.slug}`}
                className="btn btn-primary"
              >
                Read story
              </Link>
            </div>
          </div>

          {/* Story image */}
          <Link
            href={`/stories/${story.slug}`}
            className="group block overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface)]">
              <Image
                src={story.coverImage ?? ""}
                alt=""
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}