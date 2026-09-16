import { createFileRoute, Link } from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { PageHeader } from "@/components/site/PageHeader";
import mesaAsset from "@/assets/mesa.jpg.asset.json";
import { conceitos } from "@/lib/site-data";

export const Route = createFileRoute("/escritorio")({
  component: EscritorioPage,
  head: () => ({
    meta: [
      { title: "O Escritório | Silvio Neto Advogado" },
      {
        name: "description",
        content:
          "Advocacia boutique com atendimento pessoal, estratégia construída caso a caso e atuação em demandas de relevante expressão econômica e empresarial.",
      },
      { property: "og:title", content: "O Escritório | Silvio Neto Advogado" },
      {
        property: "og:description",
        content: "Uma advocacia próxima, técnica e construída caso a caso.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function EscritorioPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <PageHeader
        eyebrow="O escritório"
        title="Uma advocacia próxima, técnica e construída caso a caso."
        intro="O Silvio Neto Advogado adota um modelo de advocacia boutique: cada demanda é acompanhada de perto pelo próprio advogado e recebe uma estratégia construída individualmente."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-bronze">Como atuamos</p>
          </div>
          <div className="md:col-span-8 space-y-6 text-[0.95rem] leading-relaxed text-muted-foreground">
            <p>
              A atuação é voltada a questões que exigem análise jurídica sofisticada, capacidade
              negocial e contencioso qualificado — especialmente aquelas de relevante expressão
              econômica, patrimonial ou empresarial.
            </p>
            <p>
              O cliente conversa diretamente com o advogado responsável pelo caso, com comunicação
              clara sobre riscos, cenários e alternativas antes de cada decisão relevante.
            </p>
            <p>
              A atuação é prioritária em Mato Grosso do Sul, Goiás e Mato Grosso, sem limitação
              territorial para demandas em outras regiões do Brasil.
            </p>
            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
              {conceitos.map((c) => (
                <li key={c} className="eyebrow text-foreground/70">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={mesaAsset.url}
          alt="Silvio Neto em mesa de trabalho durante congresso jurídico"
          className="h-[55vh] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center bg-ink/70">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
            <p className="max-w-2xl font-display text-[1.75rem] leading-snug text-background md:text-[2.5rem]">
              “Profundidade técnica, visão estratégica e atendimento pessoal em cada caso.”
            </p>
            <Link
              to="/contato"
              className="mt-10 inline-block bg-bronze px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-accent-foreground"
            >
              Fale com o escritório
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
