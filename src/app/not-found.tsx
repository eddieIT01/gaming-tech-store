import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.16),_transparent_24%),#040816] text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <div className="glass rounded-[2rem] border border-white/10 px-10 py-16 shadow-[0_0_80px_rgba(15,23,42,0.35)]">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">404</p>
          <h1 className="mt-6 text-5xl font-semibold text-white">Page lost in the neon grid.</h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
            The route you tried to reach doesn’t exist yet. Head back to the store to continue building and shopping.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
