"use client";

import { ArrowUpRight, CheckCircle2, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/reveal";
import type { CertificationGroup } from "@/lib/data";

type FeaturedProgram = {
  title: string;
  provider: string;
  place: string;
  period: string;
  description: string;
  modules: string[];
};

function FeaturedProgramCard({ program }: { program: FeaturedProgram }) {
  return (
    <Reveal className="sm:col-span-2 lg:col-span-3">
      <Dialog>
        <DialogTrigger
          render={<button type="button" className="block h-full w-full text-left" />}
        >
          <Card className="relative h-full cursor-pointer overflow-hidden ring-2 ring-primary/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-primary/70">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklch,var(--primary),transparent_88%),transparent_60%)]"
            />
            <CardHeader className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="gap-1 bg-primary text-primary-foreground">
                  <GraduationCap className="size-3" />
                  Formação em destaque
                </Badge>
                <Badge className="gap-1 bg-success text-success-foreground">
                  <CheckCircle2 className="size-3" />
                  Concluído
                </Badge>
                <Badge variant="outline">{program.period}</Badge>
              </div>
              <CardTitle className="pt-2 text-xl">{program.title}</CardTitle>
              <CardDescription>
                {program.provider} · {program.place}
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-wrap items-end justify-between gap-3">
              <p className="max-w-2xl text-sm text-muted-foreground">{program.description}</p>
              <span className="flex items-center gap-1 text-sm font-medium text-primary">
                Ver os {program.modules.length} módulos
                <ArrowUpRight className="size-4" />
              </span>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg">{program.title}</DialogTitle>
            <DialogDescription>
              {program.provider} · {program.period}
            </DialogDescription>
          </DialogHeader>
          <ol className="max-h-96 space-y-3 overflow-y-auto pr-1">
            {program.modules.map((module, i) => (
              <li key={module} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                <span>
                  <span className="text-muted-foreground">M{i + 1} · </span>
                  {module}
                </span>
              </li>
            ))}
          </ol>
        </DialogContent>
      </Dialog>
    </Reveal>
  );
}

export function CertificationsGrid({
  certifications,
  featured,
}: {
  certifications: CertificationGroup[];
  featured?: FeaturedProgram;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {featured && <FeaturedProgramCard program={featured} />}
      {certifications.map((cert, i) => (
        <Reveal key={cert.title} delay={i * 0.05}>
          <Dialog>
            <DialogTrigger
              render={<button type="button" className="block h-full w-full text-left" />}
            >
              <Card className="h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-primary/40">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-2">
                    {cert.title}
                    <Badge className="shrink-0 bg-accent text-accent-foreground">
                      {cert.count} cursos
                    </Badge>
                  </CardTitle>
                  <CardDescription>{cert.provider}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-lg">
                  {cert.title}
                </DialogTitle>
                <DialogDescription>
                  {cert.provider} · {cert.count} cursos concluídos
                </DialogDescription>
              </DialogHeader>
              <ul className="max-h-80 space-y-3 overflow-y-auto pr-1">
                {cert.courses.map((course) => (
                  <li key={course.title} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                    <span className="flex-1">
                      {course.title}
                      <span className="ml-1.5 text-xs text-muted-foreground whitespace-nowrap">
                        · {course.date}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </DialogContent>
          </Dialog>
        </Reveal>
      ))}
    </div>
  );
}
