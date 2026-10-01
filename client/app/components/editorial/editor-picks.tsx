import Image from "next/image";
import Link from "next/link";

import type { Article } from "@/types/article";
import { ArticleCover } from "@/components/editorial/article-cover";

type EditorPicksProps = {
  featured: Article;
};

const secondaryPicks = [
  {
    type: "Conversation",
    title: "The things worth asking better questions about.",
    description:
      "A conversation about curiosity, ambition, and the questions that shape how we see the world.",
  },
  {
    type: "Culture",
    title: "Things the internet made us notice.",
    description:
      "Culture, people, places and ideas hiding in plain sight.",
  },
  {
    type: "Play",
    title: "A little something to make you think.",
    description:
      "An interactive detour from the ordinary.",
  },
];

export function EditorPicks({ featured }: EditorPicksProps) {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* Section heading */}
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Editor's Picks
            </p>

            <h2 className="font-serif text-4xl leading-none tracking-[-0.035em] sm:text-5xl">
              Things worth your attention.
            </h2>
          </div>

          <Link
            href="/stories"
            className="hidden text-sm font-medium transition-opacity hover:opacity-50 sm:block"
          >
            Explore everything →
          </Link>
        </div>

        {/* Main editorial feature */}
        <Link
          href={`/stories/${featured.slug}`}
          className="group grid overflow-hidden bg-[var(--surface)] lg:grid-cols-[1.15fr_0.85fr]"
        >
          {/* Cover */}
         <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[520px]">
  <ArticleCover article={featured} priority />
</div>

          {/* Story information */}
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Featured story
              </p>

              <h3 className="mt-6 max-w-xl font-serif text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl">
                {featured.title}
              </h3>

              <p className="mt-7 max-w-lg text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                {featured.subtitle}
              </p>
            </div>

            <div className="mt-12 flex items-end justify-between gap-6">
              <div className="text-sm text-[var(--muted)]">
                <p>By {featured.author}</p>
                <p className="mt-1">{featured.readingTime}</p>
              </div>

              <span className="text-sm font-medium">
                Read story →
              </span>
            </div>
          </div>
        </Link>

        {/* Secondary picks */}
        <div className="mt-4 grid gap-px bg-[var(--border)] sm:grid-cols-3">
          {secondaryPicks.map((pick) => (
            <article
              key={pick.title}
              className="bg-[var(--background)] p-7 sm:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                {pick.type}
              </p>

              <h3 className="mt-5  text-xl font-medium leading-tight tracking-[-0.025em]">
                {pick.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                {pick.description}
              </p>

              <button
                type="button"
                className="mt-7 text-sm font-medium transition-opacity hover:opacity-50"
              >
                Explore →
              </button>
            </article>
          ))}
        </div>

        <Link
          href="/stories"
          className="mt-8 block text-center text-sm font-medium sm:hidden"
        >
          Explore everything →
        </Link>
      </div>
    </section>
  );
}