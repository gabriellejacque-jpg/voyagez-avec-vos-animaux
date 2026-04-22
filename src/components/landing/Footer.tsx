import { PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ background: "var(--gradient-emerald)" }}
              >
                <PawPrint className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">Doggo</span>
              <span className="rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                Beta
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Le transport d'animaux entre particuliers, simple, sûr et économique partout en France.
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-foreground">Plateforme</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#how" className="hover:text-primary">Comment ça marche</a></li>
              <li><a href="#forms" className="hover:text-primary">Poster un trajet</a></li>
              <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-foreground">Entreprise</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">À propos</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
              <li><a href="#" className="hover:text-primary">Mentions légales</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Doggo. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground">Fait avec 🐾 en France</p>
        </div>
      </div>
    </footer>
  );
}
