"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const motivos = [
  {
    title: "Transição de carreira",
    subtitle: "Como comecei, o que faria diferente",
  },
  {
    title: "Oportunidade profissional",
    subtitle: "Vagas, projetos, colaborações",
  },
  {
    title: "Imigração e seus desafios",
    subtitle: "Vistos, mudança, adaptação",
  },
  {
    title: "Outro assunto",
    subtitle: "Sem agenda, só conversa",
  },
];

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function ContactForm() {
  const [assunto, setAssunto] = useState(motivos[0].title);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      toast.error("Formulário indisponível", {
        description: "O envio ainda não está configurado. Tente pelo e-mail ou LinkedIn.",
      });
      return;
    }

    const form = event.currentTarget;
    setLoading(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Falha no envio");

      form.reset();
      setAssunto(motivos[0].title);
      toast.success("Mensagem recebida! 🎉", {
        description:
          "Obrigado pelo contacto — respondo assim que possível. Tenha um ótimo dia!",
      });
    } catch {
      toast.error("Não foi possível enviar", {
        description: "Tente novamente ou contacte-me por e-mail ou LinkedIn.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot antispam: campo invisível para humanos, bots costumam preencher. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="assunto" value={assunto} />

      <div>
        <p className="text-sm font-semibold text-primary">1. Sobre o que quer falar?</p>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {motivos.map((motivo, i) => {
            const selected = assunto === motivo.title;
            return (
              <button
                key={motivo.title}
                type="button"
                aria-pressed={selected}
                onClick={() => setAssunto(motivo.title)}
                className={cn(
                  "flex flex-col gap-1 rounded-xl border px-4 py-3 text-left transition",
                  selected
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border/60 bg-background hover:border-primary/40"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs",
                    selected ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold">{motivo.title}</span>
                <span className="text-xs text-muted-foreground">{motivo.subtitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-primary">2. Os seus dados</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" name="nome" placeholder="O seu nome" required />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" placeholder="voce@email.com" required />
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          <Label htmlFor="mensagem">Mensagem</Label>
          <Textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            minLength={10}
            placeholder="Escreva aqui a sua dúvida ou proposta"
            required
          />
        </div>
      </div>

      <Button type="submit" disabled={loading} className="h-10 w-full rounded-full sm:w-auto sm:px-8">
        {loading ? (
          <Loader2 className="size-4 animate-spin" data-icon="inline-start" />
        ) : (
          <Send className="size-4" data-icon="inline-start" />
        )}
        {loading ? "A enviar..." : "Enviar mensagem"}
      </Button>
    </form>
  );
}
