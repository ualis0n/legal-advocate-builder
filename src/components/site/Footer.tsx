import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-sand">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-14 text-xs text-muted-foreground md:grid-cols-3 md:px-12">
        <div>
          <p className="font-display text-base tracking-[0.2em] text-foreground">
            SILVIO NETO ADVOGADO
          </p>
          <p className="mt-3 leading-relaxed">
            OAB/GO 51.824 | OAB/MS 25.376-A
            <br />
            Soluções Jurídicas Inteligentes
          </p>
        </div>
        <nav className="flex flex-col gap-2">
          <Link to="/escritorio" className="hover:text-bronze">
            Escritório
          </Link>
          <Link to="/atuacao" className="hover:text-bronze">
            Áreas de atuação
          </Link>
          <Link to="/perfil" className="hover:text-bronze">
            Perfil
          </Link>
          <Link to="/contato" className="hover:text-bronze">
            Contato
          </Link>
        </nav>
        <div className="leading-relaxed">
          <p>
            Avenida Dezesseis, nº 890, Ed. Ágata Center, Sala III
            <br />
            Centro — Chapadão do Sul/MS — CEP 79.560-000
          </p>
          <p className="mt-3">
            <a href="mailto:contato@advsilvioneto.com.br" className="hover:text-bronze">
              contato@advsilvioneto.com.br
            </a>
            <br />
            +55 67 99631-1823
          </p>
        </div>
      </div>
    </footer>
  );
}
