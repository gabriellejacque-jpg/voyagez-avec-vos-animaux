import { PawPrint, Plane } from "lucide-react";

const owner = [
  { t: "Postez votre besoin", d: "Indiquez la ville de départ, d'arrivée, la date souhaitée et le profil de votre animal." },
  { t: "Recevez une alerte", d: "On vous notifie dès qu'un voyageur compatible fait ce trajet." },
  { t: "Confirmez et payez", d: "Échangez avec le voyageur et finalisez le transport en toute sécurité." },
];

const traveler = [
  { t: "Publiez votre trajet", d: "Indiquez votre date, vos villes de départ et d'arrivée." },
  { t: "Soyez mis en relation", d: "On vous propose un propriétaire dont l'animal correspond à vos critères." },
  { t: "Aidez et soyez compensé", d: "Accompagnez l'animal et recevez une compensation de ~25€." },
];

function Column({
  icon: Icon,
  label,
  title,
  steps,
  variant,
}: {
  icon: typeof PawPrint;
  label: string;
  title: string;
  steps: { t: string; d: string }[];
  variant: "emerald" | "gold";
}) {
  return (
    <div className="relative rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{
            background: variant === "emerald" ? "var(--gradient-emerald)" : "var(--gradient-gold)",
          }}
        >
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
        </div>
      </div>

      <ol className="mt-8 space-y-6">
        {steps.map((s, i) => (
          <li key={s.t} className="flex gap-4">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 font-display text-sm font-bold"
              style={{
                borderColor:
                  variant === "emerald" ? "oklch(0.35 0.08 165)" : "oklch(0.75 0.12 85)",
                color: variant === "emerald" ? "oklch(0.35 0.08 165)" : "oklch(0.45 0.1 75)",
              }}
            >
              {i + 1}
            </div>
            <div>
              <p className="font-display font-semibold text-foreground">{s.t}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Comment ça fonctionne
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Simple, transparent, sécurisé
        </h2>
        <p className="mt-4 text-muted-foreground">
          Trois étapes, que vous soyez propriétaire ou voyageur.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Column
          icon={PawPrint}
          label="Propriétaires"
          title="Pour confier votre animal"
          steps={owner}
          variant="emerald"
        />
        <Column
          icon={Plane}
          label="Voyageurs"
          title="Pour accompagner un animal"
          steps={traveler}
          variant="gold"
        />
      </div>
    </section>
  );
}
