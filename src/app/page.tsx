import Link from "next/link";
import { products, categories } from "@/lib/products";
import { SectionCard } from "@/components/SectionCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.18),_transparent_24%),#040816] text-white">
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-10 shadow-[0_0_120px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Cyberpunk Gaming Tech</p>
              <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Build fast rigs. Explore neon gear. Shop the future.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Welcome to the cyberpunk gaming store experience: ready rigs, custom builder tools, and a vibrant community hub all in one polished launch.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/builder" className="inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Start your build
                </Link>
                <Link href="/community" className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-300 hover:bg-white/10">
                  Join the community
                </Link>
              </div>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-cyan-400/10 bg-slate-950/80 p-8 shadow-[0_0_50px_rgba(34,211,238,0.18)]">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Featured rig</p>
              <div className="rounded-[1.75rem] bg-slate-900/90 p-6 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]">
                <h2 className="text-3xl font-semibold text-white">Stormbreaker 9000</h2>
                <p className="mt-4 text-slate-300">High-end performance with liquid cooling, AI tuning, and a glowing chassis built for 4K competitive play.</p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-2">RTX-class GPU</span>
                  <span className="rounded-full bg-fuchsia-400/10 px-3 py-2">64GB DDR5</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">3TB NVMe</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <SectionCard
              key={category.title}
              title={category.title}
              description={category.description}
            />
          ))}
        </section>

        <section className="mt-12">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Featured rigs</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Ready-to-launch builds</h2>
            </div>
            <Link href="/builder" className="text-sm font-medium text-cyan-300 transition hover:text-white">
              Explore builder options →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/product/${product.slug}`}
                className="glass group rounded-[2rem] border border-white/10 p-6 transition hover:-translate-y-1 hover:border-cyan-400/20"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">{product.category}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{product.title}</h3>
                  </div>
                  <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-cyan-200">{product.price}</span>
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-300">{product.description}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                  {product.features.slice(0, 2).map((feature) => (
                    <span key={feature} className="rounded-full bg-white/5 px-3 py-2">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-sm font-semibold text-cyan-300 transition group-hover:text-white">View details →</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/60 p-10 shadow-[0_0_80px_rgba(15,23,42,0.2)]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Community spotlight</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Build with friends, share upgrades, and stay in the loop.</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Connect through the community hub to discover user rigs, upgrade tips, and curated cyberpunk gear recommendations.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link href="/community" className="inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Visit community
              </Link>
              <Link href="/builder" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-300 hover:bg-white/10">
                Open builder
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
