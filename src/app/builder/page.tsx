import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.16),_transparent_24%),#040816] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-slate-950/50 p-10 shadow-[0_0_80px_rgba(15,23,42,0.4)] backdrop-blur-xl">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Builder lab</p>
            <h1 className="max-w-3xl text-4xl font-semibold text-white">Design your next gaming rig with a glowing build flow.</h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              Choose components, compare performance metrics, and preview a high-end gaming machine built for speed, style, and stability.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <SectionCard
              title="Step-by-step rig selector"
              description="Pick CPU, GPU, memory, and cooling in a simple flow that feels like a high-tech workshop."
            />
            <SectionCard
              title="Real-time scoring"
              description="See performance and thermal metrics instantly as you adjust your build components."
            />
            <SectionCard
              title="Preview + save"
              description="Save build presets and jump from planning to checkout quickly."
              badge="MVP"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-[2rem] border border-white/10 p-8 shadow-[0_0_60px_rgba(15,23,42,0.3)]">
            <h2 className="text-2xl font-semibold text-white">Build overview</h2>
            <p className="mt-4 text-slate-300">
              This builder page is the foundation for a full configurator. The next release can add drag/drop slots, part compatibility checks, and performance tuning.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-slate-950/80 p-5 text-sm text-slate-300">
                <p className="font-semibold text-white">CPU</p>
                <p>CyberCore X12 — 18-core hybrid processor</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 text-sm text-slate-300">
                <p className="font-semibold text-white">GPU</p>
                <p>VectorStorm 18GB — ray-tracing enabled</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 text-sm text-slate-300">
                <p className="font-semibold text-white">Cooling</p>
                <p>Quantum vapor loop with neon coolant</p>
              </div>
            </div>
          </div>

          <aside className="glass rounded-[2rem] border border-white/10 p-8 shadow-[0_0_60px_rgba(15,23,42,0.24)]">
            <h2 className="text-2xl font-semibold text-white">Need inspiration?</h2>
            <p className="mt-4 text-slate-300">
              Explore ready rigs from the homepage, then use this builder to create a custom variant that fits your style and budget.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Browse featured rigs
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
