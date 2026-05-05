import { ShieldCheck, MessageCircle, Route, LifeBuoy } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Profils vérifiés",
    desc: "Chaque voyageur est vérifié manuellement (identité + téléphone).",
  },
  {
    icon: MessageCircle,
    title: "Échange avant validation",
    desc: "Discutez avec le voyageur avant de confirmer.",
  },
  {
    icon: Route,
    title: "Suivi du trajet",
    desc: "Restez informé à chaque étape du voyage.",
  },
  {
    icon: LifeBuoy,
    title: "Support Doggo",
    desc: "Notre équipe vous accompagne pendant la beta.",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Confiance</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Voyagez en toute confiance
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background p-5 shadow-[var(--shadow-soft)]"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-emerald)" }}
              >
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="font-display mt-4 text-base font-semibold text-foreground">{title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
