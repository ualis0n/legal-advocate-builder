import { createFileRoute, Link } from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import retratoAsset from "@/assets/retrato.jpg.asset.json";
import { formacao } from "@/lib/site-data";

export const Route = createFileRoute("/perfil")({
  component: PerfilPage,
  head: () => ({
    meta: [
      { title: "Perfil | Silvio Pereira da Silva Neto — Advogado" },
      {
        name: "description",
        content:
          "Silvio Pereira da Silva Neto, OAB/GO 51.824 e OAB/MS 25.376-A. Formação, trajetória e atuação estratégica em demandas complexas.",
      },
      { property: "og:title", content: "Perfil | Silvio Pereira da Silva Neto" },
      {
        property: "og:description",
        content: "Trajetória, formação e atuação do advogado Silvio Neto.",
      },
      { property: "og:type", content: "profile" },
    ],
  }),
});

function PerfilPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid items-start gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={retratoAsset.url}
              alt="Retrato do advogado Silvio Pereira da Silva Neto"
              className="w-full object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow text-bronze">Perfil</p>
            <h1 className="mt-6 text-[2.25rem] leading-tight md:text-[3.25rem]">
              Silvio Pereira da Silva Neto
            </h1>
            <p className="mt-3 text-sm tracking-[0.15em] text-muted-foreground">
              OAB/GO 51.824 &nbsp;|&nbsp; OAB/MS 25.376-A
            </p>
            <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>
                Advogado com atuação estratégica em demandas complexas envolvendo patrimônio,
                empresas, produtores rurais e conflitos de relevante expressão econômica.
              </p>
              <p>
                A experiência combinada entre a advocacia privada e a atuação jurídica no setor
                público — como Procurador-Geral e Diretor Legislativo da Câmara Municipal de
                Mineiros/GO — contribuiu para uma visão abrangente das relações jurídicas e
                institucionais.
              </p>
            </div>

            <dl className="mt-12 border-t border-border">
              {formacao.map((f) => (
                <div
                  key={f.value}
                  className="grid gap-1 border-b border-border py-5 md:grid-cols-[10rem_1fr]"
                >
                  <dt className="eyebrow pt-1 text-bronze">{f.label}</dt>
                  <dd className="text-[0.95rem] text-foreground/80">{f.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              to="/contato"
              className="mt-12 inline-block bg-ink px-10 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-background transition-colors hover:bg-bronze hover:text-accent-foreground"
            >
              Entre em contato
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
