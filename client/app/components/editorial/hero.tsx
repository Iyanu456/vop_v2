import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center lg:px-8">
        
        {/*<p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
          Voice of Purpose
        </p>*/}

        <h1 className="max-w-6xl font-serif text-xl leading-[1] tracking-[-0.025em] sm:text-7xl md:text-8xl lg:text-9xl">
          The world is more interesting than your feed
        </h1>

        <p className="mt-10 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
          Stories, ideas, conversations, culture and a little bit of fun for
          curious people everywhere.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="#latest" className="btn btn-primary">
            Explore VOP
          </Link>

          <Link href="#about" className="btn btn-secondary">
            What is VOP?
          </Link>
        </div>

      </div>
    </section>
  );
}