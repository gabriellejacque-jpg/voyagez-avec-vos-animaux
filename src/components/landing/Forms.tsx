import { useState } from "react";
import { Check, ChevronDown, PawPrint, Plane, Mail, ArrowRight } from "lucide-react";

const animalTypes = ["Chien", "Chat", "Lapin", "Oiseau", "NAC"];
const sizes = ["Petit (<5kg)", "Moyen (5–15kg)", "Grand (15–30kg)", "Très grand (>30kg)"];

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
    />
  );
}

function SingleSelect({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-xl border border-input bg-background px-4 py-3 text-left text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
      >
        <span className={value ? "text-foreground" : "text-muted-foreground"}>
          {value || placeholder}
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-popover shadow-[var(--shadow-lg)]">
          {options.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => {
                onChange(o);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-foreground transition hover:bg-muted"
            >
              {o}
              {value === o && <Check className="h-4 w-4 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MultiSelect({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const toggle = (o: string) =>
    onChange(value.includes(o) ? value.filter((v) => v !== o) : [...value, o]);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-xl border border-input bg-background px-4 py-3 text-left text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
      >
        <span className={value.length ? "text-foreground" : "text-muted-foreground"}>
          {value.length ? value.join(", ") : placeholder}
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-popover shadow-[var(--shadow-lg)]">
          {options.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => toggle(o)}
              className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-foreground transition hover:bg-muted"
            >
              {o}
              {value.includes(o) && <Check className="h-4 w-4 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function OwnerForm({ email, onEmail }: { email: string; onEmail: (v: string) => void }) {
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [expanded, setExpanded] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!expanded) {
          setExpanded(true);
          return;
        }
        alert("Merci ! On vous contacte dès qu'un voyageur correspond.");
      }}
      className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: "var(--gradient-emerald)" }}
      />
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: "var(--gradient-emerald)" }}
        >
          <PawPrint className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Propriétaire
          </p>
          <h3 className="font-display text-xl font-bold text-foreground">
            Je cherche un voyageur
          </h3>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <Field label="Email">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => onEmail(e.target.value)}
              placeholder="vous@exemple.com"
              className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </Field>

        {expanded && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Ville de départ">
              <Input required placeholder="Paris" />
            </Field>
            <Field label="Ville d'arrivée">
              <Input required placeholder="Lyon" />
            </Field>
            <Field label="Date">
              <Input required type="date" />
            </Field>
            <Field label="Type d'animal">
              <SingleSelect
                options={animalTypes}
                value={type}
                onChange={setType}
                placeholder="Choisir..."
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Taille de l'animal">
                <SingleSelect
                  options={sizes}
                  value={size}
                  onChange={setSize}
                  placeholder="Choisir..."
                />
              </Field>
            </div>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lg)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
      >
        {expanded ? "Trouver un trajet maintenant" : "Être prévenu en priorité"}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Réponse rapide pendant la beta
      </p>
    </form>
  );
}

function TravelerForm({ email, onEmail }: { email: string; onEmail: (v: string) => void }) {
  const [types, setTypes] = useState<string[]>([]);
  const [sz, setSz] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!expanded) {
          setExpanded(true);
          return;
        }
        alert("Merci ! On vous met en relation avec des propriétaires.");
      }}
      className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: "var(--gradient-gold)" }}
        >
          <Plane className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Voyageur
          </p>
          <h3 className="font-display text-xl font-bold text-foreground">
            Je propose mon trajet
          </h3>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <Field label="Email">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => onEmail(e.target.value)}
              placeholder="vous@exemple.com"
              className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </Field>

        {expanded && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Ville de départ">
              <Input required placeholder="Marseille" />
            </Field>
            <Field label="Ville d'arrivée">
              <Input required placeholder="Bordeaux" />
            </Field>
            <Field label="Date">
              <Input required type="date" />
            </Field>
            <Field label="Type d'animal accepté">
              <MultiSelect
                options={animalTypes}
                value={types}
                onChange={setTypes}
                placeholder="Choisir..."
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Taille de l'animal">
                <MultiSelect
                  options={sizes}
                  value={sz}
                  onChange={setSz}
                  placeholder="Choisir..."
                />
              </Field>
            </div>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-sm font-semibold shadow-[var(--shadow-lg)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
        style={{ background: "var(--gradient-gold)", color: "oklch(0.22 0.04 160)" }}
      >
        {expanded ? "Proposer mon trajet" : "Être prévenu en priorité"}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Réponse rapide pendant la beta
      </p>
    </form>
  );
}

export function Forms() {
  const [ownerEmail, setOwnerEmail] = useState("");
  const [travelerEmail, setTravelerEmail] = useState("");

  return (
    <section id="forms" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Accès anticipé — places limitées
          </div>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trouvez votre match en quelques secondes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Laissez votre email pour être prévenu en priorité. Pendant la beta, notre équipe vous
            aide personnellement à trouver un match.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <OwnerForm email={ownerEmail} onEmail={setOwnerEmail} />
          <TravelerForm email={travelerEmail} onEmail={setTravelerEmail} />
        </div>
      </div>
    </section>
  );
}
