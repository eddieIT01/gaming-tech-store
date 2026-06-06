import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.16),_transparent_24%),#040816] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-10 shadow-[0_0_120px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Builder lab</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
              Build a high-end gaming rig with neon precision and secure checkout support.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Select premium parts, optimize performance, and lock in secure payment options like Visa, Mastercard, and Cash on Delivery.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <SectionCard
              title="Step-by-step rig selector"
              description="Pick CPU, GPU, memory, and cooling in a clean high-end flow with premium visuals."
            />
            <SectionCard
              title="Performance scoring"
              description="Review thermal, FPS, and power metrics while you build your next flagship rig."
            />
            <SectionCard
              title="Secure checkout ready"
              description="Designed to support Visa, Mastercard, AMEX, and Cash on Delivery with enterprise-grade protection."
              badge="Pro"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="glass rounded-[2rem] border border-white/10 p-8 shadow-[0_0_60px_rgba(15,23,42,0.3)]">
            <h2 className="text-3xl font-semibold text-white">Build overview</h2>
            <p className="mt-4 text-slate-300">
              The premium builder experience is designed for serious gamers and creators. Build a system that feels like a modern PC setup with glowing glass, fast storage, and powerhouse cooling.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-slate-950/80 p-6 text-sm text-slate-300">
                <p className="font-semibold text-white">CPU</p>
                <p>CyberCore X12 with adaptive overclocking and smart boost.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6 text-sm text-slate-300">
                <p className="font-semibold text-white">GPU</p>
                <p>VectorStorm 18GB with ray-tracing, DLSS, and liquid-cooling support.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6 text-sm text-slate-300">
                <p className="font-semibold text-white">Security</p>
                <p>PCI DSS-ready checkout with SSL encryption and tokenized payments.</p>
              </div>
            </div>
          </div>

          <aside className="glass rounded-[2rem] border border-white/10 p-8 shadow-[0_0_60px_rgba(15,23,42,0.24)]">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Payment & support</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">High-end payment assurance</h2>
            <p className="mt-4 text-slate-300">
              Every build is backed by secure checkout and trusted methods, including Cash on Delivery. Perfect for customers who want flexibility and peace of mind.
            </p>
            <div className="mt-8 grid gap-4 rounded-[1.75rem] bg-slate-900/80 p-6 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white">Visa & Mastercard</p>
                <p className="mt-2">Instant, secure payments with global coverage.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Cash on Delivery</p>
                <p className="mt-2">Local orders can pay when the rig arrives.</p>
              </div>
            </div>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Browse premium rigs
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
