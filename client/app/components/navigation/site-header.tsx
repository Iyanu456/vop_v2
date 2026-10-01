import Link from "next/link";

const navigation = [
  { label: "Stories", href: "/stories" },
  { label: "Conversations", href: "/conversations" },
  { label: "Ideas", href: "/ideas" },
  { label: "Culture", href: "/culture" },
  { label: "Play", href: "/play" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Brand */}
        <Link
          href="/"
          className="font-serif text-xl leading-[0.82] tracking-[-0.04em]"
          aria-label="Voice of Purpose home"
        >
          VOICE
          <br />
          OF
          <br />
          PURPOSE
        </Link>

        {/* Navigation */}
        <nav
          className="hidden items-center gap-7 text-sm md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 text-sm">
          <button
            type="button"
            className="hidden transition-opacity hover:opacity-50 sm:block"
          >
            Search
          </button>

          {/*<Link
            href="/login"
            className="hidden transition-opacity hover:opacity-50 sm:block"
          >
            Sign in
          </Link>*/}

          <Link href="/subscribe" className="btn btn-primary">
  Subscribe
</Link>

          
        </div>

      </div>
    </header>
  );
}