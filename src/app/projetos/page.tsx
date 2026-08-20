import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Sparkle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { profile, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de Daniel Moraes — em desenvolvimento e com deploy no Vercel.",
};

export default function ProjetosPage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Badge variant="secondary" className="mb-6 gap-1.5 rounded-full px-3 py-1.5">
          <Sparkle className="size-3.5 text-accent" />
          Em construção contínua
        </Badge>
        <h1 className="font-display text-4xl font-bold tracking-tight">
          Projetos
        </h1>
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          Cada projeto concluído no curso Frontend vai aparecer aqui, com
          código aberto e link para experimentar. Estes dois já estão no ar.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="rounded-full">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {project.demo && (
                    <Button
                      render={
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      nativeButton={false}
                      className="h-10 rounded-full px-5"
                    >
                      <ExternalLink className="size-4" data-icon="inline-start" />
                      Ver projeto
                    </Button>
                  )}
                  <Button
                    render={
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    nativeButton={false}
                    variant="outline"
                    className="h-10 rounded-full px-5"
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
                    Ver código
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal
        delay={0.2}
        className="mt-14 flex flex-col items-center gap-3 border-t border-border/60 pt-10 text-center"
      >
        <p className="text-muted-foreground text-pretty">
          Há mais projetos e exercícios em desenvolvimento no meu GitHub,
          nem todos ainda com deploy.
        </p>
        <Button
          render={<Link href={profile.github} target="_blank" rel="noopener noreferrer" />}
          nativeButton={false}
          variant="outline"
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
          Ver todos no GitHub
        </Button>
      </Reveal>
    </section>
  );
}
