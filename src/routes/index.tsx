import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroAsset from "@/assets/hero.jpg.asset.json";
import retratoAsset from "@/assets/retrato.jpg.asset.json";
import mesaAsset from "@/assets/mesa.jpg.asset.json";

const WHATSAPP = "5567996311823";
const WHATSAPP_MSG =
  "Olá. Entrei em contato pelo site do Silvio Neto Advogado e gostaria de informações sobre atendimento jurídico.";
const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

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
        content:
          "Técnica, estratégia e atuação personalizada para questões jurídicas complexas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

const areas = [
  {
    n: "01",
    title: "Direito Agrário e Agronegócio",
    text: "Assessoria jurídica a produtores rurais, empresários e agentes do agronegócio, envolvendo contratos rurais, crédito, garantias, patrimônio, conflitos e operações do setor.",
  },
  {
    n: "02",
    title: "Contencioso Cível Estratégico",
    text: "Atuação em demandas judiciais complexas e de relevante expressão econômica ou patrimonial, com estratégias individualizadas para cada caso.",
  },
  {
    n: "03",
    title: "Direito Empresarial",
    text: "Assessoria estratégica a empresas, empresários e sócios: contratos empresariais, conflitos societários, estruturação de negócios e contencioso empresarial.",
  },
  {
    n: "04",
    title: "Recuperação Judicial e Reestruturação de Dívidas",
    text: "Atuação preventiva e contenciosa em crises econômico-financeiras, reestruturação de passivos, negociação com credores e recuperação judicial.",
  },
  {
    n: "05",
    title: "Direito Tributário",
    text: "Consultoria e contencioso tributário: prevenção de contingências, discussão de exigências fiscais e soluções tributárias juridicamente adequadas.",
  },
];

const conceitos = ["Técnica", "Estratégia", "Proximidade", "Segurança", "Inteligência"];

const formacao = [
  { label: "Graduação", value: "Direito — Centro Universitário de Mineiros (UNIFIMES)" },
  { label: "Especialização", value: "Direito Empresarial — FGV" },
  { label: "Especialização", value: "Direito do Agronegócio — IBDA" },
  { label: "Em curso", value: "Pós-graduação em Direito Tributário — IBET" },
  { label: "Idiomas", value: "Português e inglês" },
];

function Nav() {
  const links = [
    ["Escritório", "#escritorio"],
    ["Atuação", "#atuacao"],
    ["Perfil", "#perfil"],
    ["Contato", "#contato"],
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-8 md:px-12">
        <a href="#top" className="font-display text-lg tracking-[0.2em] text-background">
          SILVIO NETO
          <span className="ml-2 hidden text-[0.6rem] tracking-[0.3em] text-bronze-soft sm:inline">
            ADVOGADO
          </span>
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs uppercase tracking-[0.2em] text-background/70 transition-colors hover:text-bronze-soft"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-bronze-soft/60 px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] text-background transition-colors hover:bg-bronze hover:text-accent-foreground"
        >
          Fale com o escritório
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden bg-ink">
      <img
        src={heroAsset.url}
        alt="Silvio Pereira da Silva Neto, advogado"
        className="absolute inset-0 h-full w-full object-cover object-[60%_center] opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
      <Nav />
      <div className="relative mx-auto flex min-h-[92vh] max-w-[1400px] flex-col justify-end px-6 pb-24 pt-40 md:px-12">
        <p className="eyebrow animate-rise text-bronze-soft">Advocacia boutique</p>
        <h1 className="animate-rise mt-6 max-w-3xl text-[2.75rem] leading-[1.05] text-background md:text-[4.75rem]">
          Soluções Jurídicas <em className="text-bronze-soft">Inteligentes</em>
        </h1>
        <p className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-background/70">
          Técnica, estratégia e atuação personalizada para questões jurídicas complexas e de
          relevante impacto patrimonial e empresarial.
        </p>
        <div className="animate-rise mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contato"
            className="bg-bronze px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Entre em contato
          </a>
          <a
            href="#atuacao"
            className="px-2 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-background/70 underline underline-offset-8 transition-colors hover:text-bronze-soft"
          >
            Áreas de atuação
          </a>
        </div>
      </div>
    </section>
  );
}

function Escritorio() {
  return (
    <section id="escritorio" className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow text-bronze">O escritório</p>
        </div>
        <div className="md:col-span-8">
          <h2 className="text-[2rem] leading-tight md:text-[3rem]">
            Uma advocacia próxima, técnica e construída caso a caso.
          </h2>
          <div className="mt-10 grid gap-8 text-[0.95rem] leading-relaxed text-muted-foreground md:grid-cols-2">
            <p>
              O Silvio Neto Advogado adota um modelo de advocacia boutique: cada demanda é
              acompanhada de perto pelo próprio advogado e recebe uma estratégia construída
              individualmente.
            </p>
            <p>
              A atuação é voltada a questões que exigem análise jurídica sofisticada, capacidade
              negocial e contencioso qualificado — especialmente aquelas de relevante expressão
              econômica, patrimonial ou empresarial.
            </p>
          </div>
          <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
            {conceitos.map((c) => (
              <li key={c} className="eyebrow text-foreground/70">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Atuacao() {
  return (
    <section id="atuacao" className="bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-bronze-soft">Áreas de atuação</p>
            <h2 className="mt-6 text-[2rem] leading-tight text-background md:text-[2.75rem]">
              Atuação consultiva e contenciosa
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul>
              {areas.map((a) => (
                <li
                  key={a.n}
                  className="group grid gap-4 border-t border-background/15 py-10 md:grid-cols-[4rem_1fr] md:gap-10"
                >
                  <span className="font-display text-xl text-bronze-soft">{a.n}</span>
                  <div>
                    <h3 className="text-2xl text-background md:text-[1.75rem]">{a.title}</h3>
                    <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-background/60">
                      {a.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Perfil() {
  return (
    <section id="perfil" className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
      <div className="grid items-start gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={retratoAsset.url}
            alt="Retrato do advogado Silvio Pereira da Silva Neto"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-7">
          <p className="eyebrow text-bronze">Perfil</p>
          <h2 className="mt-6 text-[2rem] leading-tight md:text-[3rem]">
            Silvio Pereira da Silva Neto
          </h2>
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
              <div key={f.value} className="grid gap-1 border-b border-border py-5 md:grid-cols-[10rem_1fr]">
                <dt className="eyebrow pt-1 text-bronze">{f.label}</dt>
                <dd className="text-[0.95rem] text-foreground/80">{f.value}</dd>
              </div>
            ))}
          </dl>
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
        </div>
      </div>
    </section>
  );
}

function Contato() {
  const [nome, setNome] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá. Entrei em contato pelo site do Silvio Neto Advogado e gostaria de informações sobre atendimento jurídico.%0A%0ANome: ${nome}%0AAssunto: ${assunto}%0AMensagem: ${mensagem}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${texto}`, "_blank", "noopener");
  };

  const field =
    "w-full border-b border-border bg-transparent py-3 text-[0.95rem] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-bronze";

  return (
    <section id="contato" className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-bronze">Contato</p>
          <h2 className="mt-6 text-[2rem] leading-tight md:text-[3rem]">Fale com o escritório</h2>
          <div className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-muted-foreground">
            <div>
              <p className="eyebrow text-foreground/60">Endereço</p>
              <p className="mt-2">
                Avenida Dezesseis, nº 890, Ed. Ágata Center, Sala III
                <br />
                Centro — Chapadão do Sul/MS — CEP 79.560-000
              </p>
            </div>
            <div>
              <p className="eyebrow text-foreground/60">Contato</p>
              <p className="mt-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-bronze">
                  +55 67 99631-1823
                </a>
                <br />
                <a href="mailto:contato@advsilvioneto.com.br" className="hover:text-bronze">
                  contato@advsilvioneto.com.br
                </a>
              </p>
            </div>
            <div>
              <p className="eyebrow text-foreground/60">Redes</p>
              <p className="mt-2">
                <a
                  href="https://instagram.com/advsilvioneto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bronze"
                >
                  @advsilvioneto
                </a>
                <br />
                LinkedIn — Silvio Pereira da Silva Neto
              </p>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground/70">
              Atuação prioritária em Mato Grosso do Sul, Goiás e Mato Grosso, sem limitação
              territorial para demandas em outras regiões do Brasil.
            </p>
          </div>
        </div>

        <form onSubmit={enviar} className="space-y-8 md:col-span-6 md:col-start-7">
          <div>
            <label htmlFor="nome" className="eyebrow text-foreground/60">
              Nome
            </label>
            <input
              id="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome completo"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="assunto" className="eyebrow text-foreground/60">
              Assunto
            </label>
            <input
              id="assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              placeholder="Ex.: contrato rural, reestruturação de dívidas"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="mensagem" className="eyebrow text-foreground/60">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              rows={4}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Descreva brevemente sua demanda"
              className={`${field} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="bg-ink px-10 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-background transition-colors hover:bg-bronze hover:text-accent-foreground"
          >
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-sand">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-10 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-12">
        <p className="font-display text-base tracking-[0.2em] text-foreground">
          SILVIO NETO ADVOGADO
        </p>
        <p>OAB/GO 51.824 | OAB/MS 25.376-A — Soluções Jurídicas Inteligentes</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Escritorio />
      <Atuacao />
      <Perfil />
      <Faixa />
      <Contato />
      <Footer />
    </main>
  );
}
