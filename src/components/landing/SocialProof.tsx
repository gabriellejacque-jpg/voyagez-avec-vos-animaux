import { ArrowRight, MapPin } from "lucide-react";

const trips = [
  { from: "Paris", to: "Bordeaux", info: "2 demandes en attente", tone: "emerald" as const },
  { from: "Paris", to: "Lyon", info: "1 voyageur disponible", tone: "gold" as const },
  { from: "Paris", to: "Marseille", info: "3 demandes en attente", tone: "emerald" as const },
];

export function SocialProof() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Activité récente
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Exemples de trajets
        </h2>
        <p className="mt-4 text-muted-foreground">
          Aperçu de la communauté qui se construit pendant la beta.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {trips.map((t) => (
          <div
            key={`${t.from}-${t.to}`}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background:
                  t.tone === "emerald" ? "var(--gradient-emerald)" : "var(--gradient-gold)",
              }}
            />
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <p className="font-display text-base font-semibold">
                {t.from} <ArrowRight className="inline h-4 w-4 text-muted-foreground" /> {t.to}
              </p>
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t.info}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
