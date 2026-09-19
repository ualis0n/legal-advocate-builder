import { createFileRoute, Link } from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import heroAsset from "@/assets/hero.jpg.asset.json";
import mesaAsset from "@/assets/mesa.jpg.asset.json";
import { areas, conceitos } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Silvio Neto Advogado | Soluções Jurídicas Inteligentes" },
      {
        name: "description",
        content:
          "Advocacia boutique em Direito Agrário e do Agronegócio, Empresarial, Tributário, Recuperação Judicial e contencioso cível estratégico. Chapadão do Sul/MS, atuação nacional.",
      },
      { property: "og:title", content: "Silvio Neto Advogado | Soluções Jurídicas Inteligentes" },
      {
        property: "og:description",
        content: "Técnica, estratégia e atuação personalizada para questões jurídicas complexas.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Silvio Neto Advogado",
          slogan: "Soluções Jurídicas Inteligentes",
          email: "contato@advsilvioneto.com.br",
          telephone: "+55 67 99631-1823",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida Dezesseis, nº 890, Ed. Ágata Center, Sala III, Centro",
            addressLocality: "Chapadão do Sul",
            addressRegion: "MS",
            postalCode: "79560-000",
            addressCountry: "BR",
          },
          areaServed: "Brasil",
        }),
      },
    ],
  }),
});

function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-ink md:min-h-[92vh]">
      <div className="absolute inset-y-0 right-0 w-full md:w-[52%]">
        <img
          src={heroAsset.url}
          alt="Silvio Pereira da Silva Neto, advogado"
          className="h-full w-full object-cover object-[center_6%] md:object-[center_top]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/20 md:bg-gradient-to-r md:from-ink md:via-ink/25 md:to-transparent" />
      </div>
      <Nav overlay />
      <div className="relative mx-auto flex min-h-[88vh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 md:min-h-[92vh] md:px-12 md:pb-24 md:pt-40">
        <p className="eyebrow animate-rise text-bronze-soft">Advocacia boutique</p>
        <h1 className="animate-rise mt-5 max-w-3xl text-[2.25rem] leading-[1.08] text-background sm:text-[2.75rem] md:text-[4.75rem]">
          Soluções Jurídicas <em className="text-bronze-soft">Inteligentes</em>
        </h1>
        <p className="animate-rise mt-6 max-w-xl text-[0.95rem] leading-relaxed text-background/75 md:text-base">
          Técnica, estratégia e atuação personalizada para questões jurídicas complexas e de
          relevante impacto patrimonial e empresarial.
        </p>
        <div className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-10">
          <Link
            to="/contato"
            className="bg-bronze px-8 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Entre em contato
          </Link>
          <Link
            to="/atuacao"
            className="px-2 py-3 text-center text-[0.7rem] uppercase tracking-[0.2em] text-background/70 underline underline-offset-8 transition-colors hover:text-bronze-soft sm:py-4"
          >
            Áreas de atuação
          </Link>
        </div>
      </div>

    </section>
  );
}

function EscritorioResumo() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow text-bronze">O escritório</p>
        </div>
        <div className="md:col-span-8">
          <h2 className="text-[2rem] leading-tight md:text-[3rem]">
            Uma advocacia próxima, técnica e construída caso a caso.
          </h2>
          <p className="mt-8 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
            Cada demanda é acompanhada de perto pelo próprio advogado e recebe uma estratégia
            construída individualmente, com foco em questões de relevante expressão econômica,
            patrimonial ou empresarial.
          </p>
          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
            {conceitos.map((c) => (
              <li key={c} className="eyebrow text-foreground/70">
                {c}
              </li>
            ))}
          </ul>
          <Link
            to="/escritorio"
            className="mt-10 inline-block text-[0.7rem] uppercase tracking-[0.2em] text-bronze underline underline-offset-8"
          >
            Conheça o escritório
          </Link>
        </div>
      </div>
    </section>
  );
}

function AtuacaoResumo() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-bronze-soft">Áreas de atuação</p>
            <h2 className="mt-6 text-[2rem] leading-tight text-background md:text-[2.75rem]">
              Atuação consultiva e contenciosa
            </h2>
            <Link
              to="/atuacao"
              className="mt-8 inline-block text-[0.7rem] uppercase tracking-[0.2em] text-bronze-soft underline underline-offset-8"
            >
              Ver todas as áreas
            </Link>
          </div>
          <div className="md:col-span-8">
            <ul>
              {areas.map((a) => (
                <li
                  key={a.n}
                  className="grid gap-4 border-t border-background/15 py-8 md:grid-cols-[4rem_1fr] md:gap-10"
                >
                  <span className="font-display text-xl text-bronze-soft">{a.n}</span>
                  <h3 className="text-xl text-background md:text-[1.6rem]">{a.title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faixa() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={mesaAsset.url}
        alt="Silvio Neto em mesa de trabalho durante congresso jurídico"
        className="h-[60vh] w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center bg-ink/70">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <p className="max-w-2xl font-display text-[1.75rem] leading-snug text-background md:text-[2.5rem]">
            “Profundidade técnica, visão estratégica e atendimento pessoal em cada caso.”
          </p>
          <Link
            to="/perfil"
            className="mt-10 inline-block border border-bronze-soft/60 px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-background transition-colors hover:bg-bronze hover:text-accent-foreground"
          >
            Conheça o advogado
          </Link>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <EscritorioResumo />
      <AtuacaoResumo />
      <Faixa />
      <Footer />
    </main>
  );
}
