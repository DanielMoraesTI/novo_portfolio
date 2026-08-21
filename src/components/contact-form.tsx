"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const motivos = [
  "Dúvidas sobre transição de carreira",
  "Oportunidade profissional",
  "Imigração e seus desafios",
  "Outro assunto",
];

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function ContactForm() {
  const [assunto, setAssunto] = useState(motivos[0]);
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
      setAssunto(motivos[0]);
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
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot antispam: campo invisível para humanos, bots costumam preencher. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="space-y-1.5">
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" name="nome" placeholder="O seu nome" required />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" placeholder="voce@email.com" required />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="assunto">Motivo do contacto</Label>
        <Select
          name="assunto"
          value={assunto}
          onValueChange={(value) => setAssunto(value ?? motivos[0])}
        >
          <SelectTrigger id="assunto" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {motivos.map((motivo) => (
              <SelectItem key={motivo} value={motivo}>
                {motivo}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
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
