import { createFileRoute, Link } from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { PageHeader } from "@/components/site/PageHeader";
import { areas } from "@/lib/site-data";

export const Route = createFileRoute("/atuacao")({
  component: AtuacaoPage,
  head: () => ({
    meta: [
      { title: "Áreas de Atuação | Silvio Neto Advogado" },
      {
        name: "description",
        content:
          "Direito Agrário e Agronegócio, Contencioso Cível Estratégico, Direito Empresarial, Recuperação Judicial e Direito Tributário.",
      },
      { property: "og:title", content: "Áreas de Atuação | Silvio Neto Advogado" },
      {
        property: "og:description",
        content: "Atuação consultiva e contenciosa em demandas jurídicas complexas.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function AtuacaoPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <PageHeader
        eyebrow="Áreas de atuação"
        title="Atuação consultiva e contenciosa"
        intro="Cinco frentes de trabalho voltadas a empresas, produtores rurais e pessoas físicas com patrimônio e negócios a proteger."
      />

      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <ul>
            {areas.map((a) => (
              <li
                key={a.n}
                className="grid gap-4 border-t border-background/15 py-10 md:grid-cols-[5rem_1fr] md:gap-12"
              >
                <span className="font-display text-xl text-bronze-soft">{a.n}</span>
                <div>
                  <h2 className="text-2xl text-background md:text-[1.9rem]">{a.title}</h2>
                  <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-background/60">
                    {a.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 text-center md:px-12">
        <h2 className="text-[1.75rem] leading-tight md:text-[2.5rem]">
          Sua demanda se encaixa em alguma dessas áreas?
        </h2>
        <Link
          to="/contato"
          className="mt-10 inline-block bg-ink px-10 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-background transition-colors hover:bg-bronze hover:text-accent-foreground"
        >
          Falar com o advogado
        </Link>
      </section>

      <Footer />
    </main>
  );
}
