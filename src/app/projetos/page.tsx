import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Sparkle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { githubProjects, projects } from "@/lib/data";

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

      <Reveal delay={0.2} className="mt-16 border-t border-border/60 pt-10">
        <h2 className="font-display text-xl font-semibold tracking-tight">
          Outros projetos
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Sem deploy por enquanto, mas com código público e README completo.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {githubProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-lg border border-border/60 bg-background p-4 transition hover:-translate-y-0.5 hover:border-primary/50"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-medium">{project.title}</h3>
                  <Image
                    src="/assets/icons/github-color-svgrepo-com.svg"
                    alt=""
                    aria-hidden
                    width={16}
                    height={16}
                    className="shrink-0 dark:invert"
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <span className="mt-3 text-sm font-medium text-primary opacity-80 transition group-hover:opacity-100">
                  Ver código →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
