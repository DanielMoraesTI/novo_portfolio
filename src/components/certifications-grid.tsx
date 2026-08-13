"use client";

import { CheckCircle2 } from "lucide-react";
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

export function CertificationsGrid({ certifications }: { certifications: CertificationGroup[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
