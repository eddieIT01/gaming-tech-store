import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 text-slate-100">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            G
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Gaming Tech</p>
            <h1 className="text-lg font-semibold text-white">Cyberpunk Store</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/builder" className="transition hover:text-white">
            Builder
          </Link>
          <Link href="/community" className="transition hover:text-white">
            Community
          </Link>
        </nav>

        <Link
          href="/builder"
          className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Start Build
        </Link>
      </div>
    </header>
  );
}
