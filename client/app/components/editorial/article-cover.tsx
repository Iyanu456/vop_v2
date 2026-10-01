import Image from "next/image";

import type { Article } from "@/types/article";

type ArticleCoverProps = {
  article: Article;
  priority?: boolean;
};

export function ArticleCover({
  article,
  priority = false,
}: ArticleCoverProps) {
  if (article.coverImage) {
    return (
      <div className="relative h-full min-h-[320px] w-full overflow-hidden">
        <Image
          src={article.coverImage}
          alt=""
          fill
          priority={priority}
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute left-6 top-6">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
            {article.category}
          </span>
        </div>
      </div>
    );
  }

  const variant = article.coverVariant ?? "orange";

const fallbackStyles = {
  dark: {
    background: "bg-[var(--foreground)]",
    text: "text-[var(--background)]",
    accent: "text-[var(--accent)]",
  },
  orange: {
    background: "bg-[var(--accent)]",
    text: "text-white",
    accent: "text-white/70",
  },
  light: {
    background: "bg-[#e9e5da]",
    text: "text-[var(--foreground)]",
    accent: "text-[var(--accent)]",
  },
};

const style = fallbackStyles[variant];

return (
  <div
    className={`relative flex h-full min-h-[320px] w-full overflow-hidden p-8 ${style.background} ${style.text}`}
  >
    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[40px] border-white/10" />

    <div className="relative flex w-full flex-col justify-between">
      <div>
        <p
          className={`text-xs font-medium uppercase tracking-[0.2em] ${style.accent}`}
        >
          {article.category}
        </p>

        <h3 className="mt-8 max-w-xl font-serif text-5xl leading-[0.9] tracking-[-0.04em] sm:text-6xl">
          {article.title}
        </h3>
      </div>

      <div className="mt-12 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] opacity-50">
            Voice of Purpose
          </p>

          <p className="mt-2 text-sm opacity-60">
            {article.date}
          </p>
        </div>

        <span className="font-serif text-4xl opacity-20">
          VOP
        </span>
      </div>
    </div>
  </div>
);

}