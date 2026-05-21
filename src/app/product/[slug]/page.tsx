import Link from "next/link";
import { notFound } from "next/navigation";
import { findProduct } from "@/lib/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = findProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_26%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.16),_transparent_24%),#040816] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="glass rounded-[2rem] border border-white/10 p-10 shadow-[0_0_80px_rgba(15,23,42,0.32)]">
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">{product.category}</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">{product.title}</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{product.description}</p>
            </div>
            <div className="rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.16)]">
              {product.price}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
              <h2 className="text-2xl font-semibold text-white">Why gamers choose this rig</h2>
              <p className="mt-4 text-slate-300">{product.highlight}</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-7">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Add to cart
                </button>
                <Link
                  href="/builder"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:border-cyan-300 hover:bg-white/10"
                >
                  Customize build
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Quick specs</p>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="rounded-3xl bg-slate-900/70 p-5">
                  <p className="font-semibold text-white">Performance</p>
                  <p className="mt-2">High frame-rate performance with adaptive cooling control.</p>
                </div>
                <div className="rounded-3xl bg-slate-900/70 p-5">
                  <p className="font-semibold text-white">Thermals</p>
                  <p className="mt-2">Engineered to stay cool under extended gameplay.</p>
                </div>
                <div className="rounded-3xl bg-slate-900/70 p-5">
                  <p className="font-semibold text-white">Design</p>
                  <p className="mt-2">Neon-lit chassis with cyberpunk glass accents.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-sm font-medium text-cyan-300 transition hover:text-white">
              ← Back to home
            </Link>
            <p className="text-sm text-slate-400">Ready to deploy your dream machine to the arena.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
