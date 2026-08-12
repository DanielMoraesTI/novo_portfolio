import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Construction, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de Daniel Moraes — em breve.",
};

export default function ProjetosPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <Badge variant="secondary" className="mb-6 gap-1.5 rounded-full px-3 py-1.5">
        <Construction className="size-3.5 text-accent" />
        Em construção
      </Badge>
      <h1 className="font-display text-4xl font-bold tracking-tight">
        Os projetos estão a caminho 🚧
      </h1>
      <p className="mt-4 text-lg text-muted-foreground text-pretty">
        Este é o único canteiro de obras onde não preciso de um alvará: cada
        projeto que concluir no curso Frontend vai aparecer aqui, com código
        aberto e link para experimentar.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button
          render={<Link href={profile.github} target="_blank" rel="noopener noreferrer" />}
          nativeButton={false}
          className="h-11 rounded-full px-6"
        >
          <Image
            src="/assets/icons/github-color-svgrepo-com.svg"
            alt=""
            aria-hidden
            width={16}
            height={16}
            data-icon="inline-start"
            className="dark:invert"
          />
          Ver GitHub
        </Button>
        <Button
          render={<Link href="/contacto" />}
          nativeButton={false}
          variant="outline"
          className="h-11 rounded-full px-6"
        >
          <Mail className="size-4" data-icon="inline-start" />
          Avisem-me quando publicar
        </Button>
      </div>
    </section>
  );
}
