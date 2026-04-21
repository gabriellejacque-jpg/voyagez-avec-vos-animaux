import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Comment sont vérifiés les voyageurs ?",
    a: "Chaque voyageur fournit une pièce d'identité et complète un profil détaillé. Nous vérifions manuellement chaque inscription avant validation.",
  },
  {
    q: "Quelle est la compensation pour un voyageur ?",
    a: "En moyenne 25€ par trajet, ajustée selon la distance et la taille de l'animal. La somme est sécurisée jusqu'à la livraison.",
  },
  {
    q: "Et si quelque chose se passe mal pendant le trajet ?",
    a: "Notre équipe d'assistance est disponible 7j/7 en temps réel. Tous les trajets sont couverts par notre garantie PetTrajet.",
  },
  {
    q: "Quels animaux peuvent être transportés ?",
    a: "Chiens, chats, lapins, oiseaux et NAC. Les conditions dépendent du voyageur et du moyen de transport.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Le paiement est sécurisé via notre plateforme. Les fonds ne sont débloqués qu'après la livraison confirmée par le propriétaire.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">FAQ</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Questions fréquentes
        </h2>
      </div>

      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/30"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold text-foreground">
                  {f.q}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
