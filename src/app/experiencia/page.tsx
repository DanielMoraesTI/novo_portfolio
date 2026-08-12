import type { Metadata } from "next";
import { Briefcase, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experiência Profissional",
  description:
    "Percurso profissional de Daniel Moraes: mais de 15 anos entre advocacia, atendimento institucional e a atual transição para tecnologia.",
};

export default function ExperienciaPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4 rounded-full px-3 py-1.5">
          Percurso profissional
        </Badge>
        <h1 className="font-display text-4xl font-bold tracking-tight">
          Experiências Profissionais
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Mais de 15 anos a construir soluções para pessoas e instituições —
          primeiro com leis, agora também com código.
        </p>
      </Reveal>

      <ol className="relative space-y-8 border-l border-border/70 pl-6 sm:pl-8">
        {experiences.map((exp, i) => (
          <li key={exp.company} className="relative">
            <span
              className={`absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full ring-4 ring-background sm:-left-[calc(2rem+5px)] ${
                exp.current ? "bg-success" : "bg-primary/60"
              }`}
              aria-hidden
            />
            <Reveal delay={Math.min(i * 0.06, 0.3)}>
              <Card className={exp.current ? "ring-2 ring-success/60" : undefined}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-lg">{exp.company}</CardTitle>
                    {exp.current && (
                      <Badge className="bg-success text-success-foreground">Atual</Badge>
                    )}
                  </div>
                  <CardDescription className="font-medium text-foreground/80">
                    {exp.role}
                  </CardDescription>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="size-3.5" />
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
