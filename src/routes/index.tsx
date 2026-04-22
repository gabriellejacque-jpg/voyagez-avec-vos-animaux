import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Forms } from "@/components/landing/Forms";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Doggo — Transport d'animaux entre particuliers en France" },
      {
        name: "description",
        content:
          "Confiez votre animal à un voyageur vérifié. Mise en relation propriétaires et voyageurs : sûr, simple, économique. ~25€ par trajet.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased">
      <div
        className="w-full text-center text-xs font-medium text-primary-foreground"
        style={{ background: "var(--gradient-emerald)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-6 py-2">
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
            Beta
          </span>
          <span className="hidden sm:inline">
            Doggo est en accès anticipé — inscrivez-vous gratuitement et façonnez le service avec nous.
          </span>
          <span className="sm:hidden">Accès anticipé gratuit — rejoignez la beta.</span>
        </div>
      </div>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Forms />
      <FAQ />
      <Footer />
    </main>
  );
}
