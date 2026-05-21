import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.16),_transparent_22%),#040816] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="glass rounded-[2rem] border border-white/10 p-10 shadow-[0_0_80px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <h1 className="text-4xl font-semibold text-white">Community hub</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            Join builders, streamers, and cyberpunk creators. Share your rig, discover upgrades, and connect with the squad.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/80 p-6 text-slate-300">
              <span className="inline-flex rounded-full bg-cyan-400/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">
                Live chat
              </span>
              <h2 className="mt-4 text-2xl font-semibold text-white">Discord lounge</h2>
              <p className="mt-3 text-sm leading-7">
                Link up with other gamers, swap build tips, and see the latest neon rig reveals.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-6 text-slate-300">
              <span className="inline-flex rounded-full bg-fuchsia-400/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-fuchsia-200">
                Showcase
              </span>
              <h2 className="mt-4 text-2xl font-semibold text-white">Trending rigs</h2>
              <p className="mt-3 text-sm leading-7">
                Discover custom builds with glowing coolers, AR cases, and high-performance upgrades.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-cyan-400/10 bg-slate-950/80 p-8 text-slate-300">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Get involved</p>
            <p className="mt-4 text-lg leading-8 text-white">
              Post a setup, compare performance, or ask for a custom optimization plan. The community page is the place to connect.
            </p>
            <Link
              href="/builder"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Build your first rig
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
