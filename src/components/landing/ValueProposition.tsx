import { Repeat, PiggyBank, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Repeat,
    title: "Pas de double trajet",
    desc: "Vous évitez de faire l'aller-retour pour déposer votre animal.",
  },
  {
    icon: PiggyBank,
    title: "Plus économique",
    desc: "Jusqu'à 2x moins cher qu'un transport classique.",
  },
  {
    icon: HeartHandshake,
    title: "Moins stressant pour votre animal",
    desc: "Il voyage accompagné, dans des conditions plus naturelles.",
  },
];

export function ValueProposition() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Avantages</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Pourquoi utiliser Doggo&nbsp;?
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {benefits.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Icon className="h-6 w-6" style={{ color: "oklch(0.22 0.04 160)" }} />
            </div>
            <h3 className="font-display mt-5 text-lg font-bold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
