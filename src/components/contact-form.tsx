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
  "Dúvidas de JavaScript",
  "Dúvidas de HTML",
  "Dúvidas de CSS",
  "Dúvidas sobre transição de carreira",
  "Oportunidade profissional",
  "Outro assunto",
];

export function ContactForm() {
  const [assunto, setAssunto] = useState(motivos[0]);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    // Simula o envio — este portfólio ainda não tem backend ligado.
    setTimeout(() => {
      setLoading(false);
      event.currentTarget.reset();
      setAssunto(motivos[0]);
      toast.success("Mensagem recebida! 🎉", {
        description:
          "Obrigado pelo contacto — respondo assim que possível. Tenha um ótimo dia!",
      });
    }, 700);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        <Select value={assunto} onValueChange={(value) => setAssunto(value ?? motivos[0])}>
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
