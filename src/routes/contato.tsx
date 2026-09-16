import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { PageHeader } from "@/components/site/PageHeader";
import { WHATSAPP, whatsappLink } from "@/lib/site-data";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato | Silvio Neto Advogado" },
      {
        name: "description",
        content:
          "Fale com o escritório em Chapadão do Sul/MS. Telefone, WhatsApp, e-mail e endereço do Silvio Neto Advogado.",
      },
      { property: "og:title", content: "Contato | Silvio Neto Advogado" },
      {
        property: "og:description",
        content: "Entre em contato com o escritório e agende um atendimento.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function ContatoPage() {
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
    <main className="bg-background text-foreground">
      <Nav />
      <PageHeader
        eyebrow="Contato"
        title="Fale com o escritório"
        intro="Descreva brevemente sua demanda. O contato é respondido pelo próprio advogado."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="space-y-8 text-[0.95rem] leading-relaxed text-muted-foreground">
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
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bronze"
                  >
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

      <Footer />
    </main>
  );
}
