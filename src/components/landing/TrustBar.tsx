import { ShieldCheck, Headphones, Star } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Profils vérifiés", desc: "Identité et documents contrôlés" },
  { icon: Headphones, title: "Assistance en temps réel", desc: "Une équipe 7j/7 à votre écoute" },
  { icon: Star, title: "Notation communautaire", desc: "Avis et étoiles après chaque trajet" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: "var(--gradient-emerald)" }}
            >
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
