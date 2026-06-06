import Image from "next/image";
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
          <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">{product.category}</p>
              <h1 className="mt-3 text-5xl font-semibold text-white">{product.title}</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{product.description}</p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-200">
                  100% secure payments
                </span>
                <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-fuchsia-200">
                  Cash on Delivery available
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80">
                  PCI DSS Level 1
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-900/95 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
              <Image
                src={product.image}
                alt={product.title}
                className="h-[420px] w-full rounded-[1.75rem] object-cover"
                width={720}
                height={560}
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/95 to-transparent" />
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

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Payments</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Visa, Mastercard, AMEX, COD</h3>
                <p className="mt-4 text-slate-300">
                  Secure payment flows with instant authorization, fraud protection, and optional cash on delivery for local buyers.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Security</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Enterprise-grade protection</h3>
                <div className="mt-4 space-y-3 text-slate-300">
                  <p>SSL encryption across the entire checkout flow.</p>
                  <p>PCI DSS level 1 compliance with tokenization.</p>
                  <p>Real-time fraud monitoring and secure shipment tracking.</p>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Trust</p>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  This premium storefront is designed for serious gamers who expect polished design, fast performance, and modern payment reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-sm font-medium text-cyan-300 transition hover:text-white">
              ← Back to home
            </Link>
            <p className="text-sm text-slate-400">Ship globally or choose secure local delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
