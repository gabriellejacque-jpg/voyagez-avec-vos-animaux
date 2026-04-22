import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroDog from "@/assets/hero-dog.jpg";

const cities = ["Lyon", "Bordeaux", "Marseille", "Paris", "Toulouse", "Nantes"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % cities.length), 2200);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-20 md:pt-12 md:pb-28">
      {/* ambient shapes */}
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
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Beta privée · Accès anticipé
          </div>

          <h1 className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Votre chien veut rejoindre
            <br />
            vos proches à{" "}
            <span
              key={cities[index]}
              className="inline-block bg-clip-text text-transparent animate-[fadeSlide_0.5s_ease-out]"
              style={{ backgroundImage: "var(--gradient-emerald)" }}
            >
              {cities[index]}
            </span>
            .
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Doggo est en <span className="font-semibold text-foreground">beta</span>. Nous mettons
            en relation propriétaires d'animaux et voyageurs vérifiés partout en France — rejoignez
            les premiers utilisateurs et aidez-nous à façonner le service.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollTo("forms")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lg)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
            >
              Rejoindre la beta — propriétaire
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("forms")}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              Rejoindre la beta — voyageur
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lg)]"
            style={{ aspectRatio: "4/5" }}
          >
            <img
              src={heroDog}
              alt="Chien golden retriever heureux pendant un voyage en voiture"
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
              <p className="font-display text-sm font-semibold text-foreground">Léo, 4 ans 🐾</p>
              <p className="text-xs text-muted-foreground">Paris → Lyon · Demain · 25€</p>
            </div>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl"
            style={{ background: "var(--gradient-gold)", opacity: 0.5 }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
