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
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Forms />
      <FAQ />
      <Footer />
    </main>
  );
}
