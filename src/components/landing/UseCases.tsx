import { Plane, Home, Truck, CalendarDays } from "lucide-react";

const cases = [
  { icon: Plane, label: "Vacances" },
  { icon: Home, label: "Garde chez des proches" },
  { icon: Truck, label: "Déménagement" },
  { icon: CalendarDays, label: "Week-end ou déplacement ponctuel" },
];

export function UseCases() {
  return (
    <section className="bg-secondary/40 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Cas d'usage</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dans quels cas utiliser Doggo&nbsp;?
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {cases.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-emerald)" }}
              >
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="font-display text-sm font-semibold text-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
