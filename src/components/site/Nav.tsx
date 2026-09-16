import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { whatsappLink } from "@/lib/site-data";

const links = [
  { label: "Escritório", to: "/escritorio" },
  { label: "Atuação", to: "/atuacao" },
  { label: "Perfil", to: "/perfil" },
  { label: "Contato", to: "/contato" },
] as const;

export function Nav({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);

  const text = overlay ? "text-background" : "text-foreground";
  const muted = overlay ? "text-background/70" : "text-muted-foreground";

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-20"
          : "relative z-20 border-b border-border bg-background"
      }
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-8 md:px-12">
        <Link to="/" className={`font-display text-lg tracking-[0.2em] ${text}`}>
          SILVIO NETO
          <span className="ml-2 hidden text-[0.6rem] tracking-[0.3em] text-bronze sm:inline">
            ADVOGADO
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-xs uppercase tracking-[0.2em] ${muted} transition-colors hover:text-bronze`}
                activeProps={{ className: "text-bronze" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden border px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] transition-colors hover:bg-bronze hover:text-accent-foreground sm:inline-block ${
              overlay ? "border-bronze-soft/60 text-background" : "border-bronze/50 text-foreground"
            }`}
          >
            Fale com o escritório
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className={`text-xs uppercase tracking-[0.2em] md:hidden ${text}`}
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          className={`flex flex-col gap-1 px-6 pb-8 md:hidden ${
            overlay ? "bg-ink/95" : "bg-background"
          }`}
        >
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block py-3 text-xs uppercase tracking-[0.2em] ${muted}`}
                activeProps={{ className: "text-bronze" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
