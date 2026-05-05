import { ArrowRight, PawPrint, ShieldCheck, Handshake, LifeBuoy, MapPin } from "lucide-react";
import heroDog from "@/assets/hero-dog.jpg";

const reassurance = [
  { icon: ShieldCheck, text: "Profils vérifiés manuellement" },
  { icon: Handshake, text: "Mise en relation sécurisée" },
  { icon: LifeBuoy, text: "Assistance pendant le trajet" },
];

const betaRoutes = ["Bordeaux", "Lyon", "Marseille"];

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-20 md:pt-12 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-emerald)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-32 h-[360px] w-[360px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-gold)" }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl shadow-[var(--shadow-soft)]"
              style={{ background: "var(--gradient-emerald)" }}
            >
              <PawPrint className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              Doggo
            </span>
            <span className="ml-1 rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
              Beta
            </span>
          </div>

          <h1 className="font-display mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Faites voyager votre chien en toute confiance,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-emerald)" }}
            >
              sans vous déplacer.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Doggo connecte des propriétaires d'animaux avec des voyageurs vérifiés pour les emmener
            chez leurs proches partout en France.
          </p>

          <ul className="mt-6 space-y-2.5">
            {reassurance.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-foreground">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--gradient-emerald)" }}
                >
                  <Icon className="h-4 w-4 text-primary-foreground" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollTo("forms")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lg)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
            >
              Trouver un trajet
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("forms")}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              Proposer un trajet
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Accès anticipé — places limitées. Réponse rapide pendant la beta.
          </p>
        </div>

        <div className="relative">
          <div
            className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lg)]"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src={heroDog}
              alt="Cocker spaniel assis dans un train regardant le paysage par la fenêtre"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, oklch(0.19 0.03 165 / 0.35) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md">
              <p className="font-display text-sm font-semibold text-foreground">
                Pendant la beta, on vous accompagne 🐾
              </p>
              <p className="text-xs text-muted-foreground">
                Notre équipe vous aide personnellement à trouver un match.
              </p>
            </div>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl"
            style={{ background: "var(--gradient-gold)", opacity: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
