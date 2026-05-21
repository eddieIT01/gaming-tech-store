type SectionCardProps = {
  title: string;
  description: string;
  badge?: string;
};

export function SectionCard({ title, description, badge }: SectionCardProps) {
  return (
    <article className="glass rounded-3xl border border-white/10 p-6 shadow-[0_0_40px_rgba(15,23,42,0.22)] transition hover:-translate-y-1 hover:border-cyan-400/20">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">⟡</div>
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {badge ? <span className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">{badge}</span> : null}
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}
