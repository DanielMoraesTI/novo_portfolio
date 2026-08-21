import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  Heart,
  MapPin,
  Quote,
  Sparkle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { HobbyVideo } from "@/components/hobby-video";
import { CertificationsGrid } from "@/components/certifications-grid";
import {
  academicEducation,
  certifications,
  completedProgram,
  currentActivity,
  highlights,
  hobbies,
  profile,
  techEducation,
} from "@/lib/data";

const formacaoTecnologia = [
  {
    title: completedProgram.title,
    place: completedProgram.place,
    period: completedProgram.period,
    completed: true,
  },
  ...techEducation,
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,color-mix(in_oklch,var(--primary),transparent_82%),transparent_55%),radial-gradient(circle_at_85%_25%,color-mix(in_oklch,var(--accent),transparent_78%),transparent_50%)]"
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <Badge variant="secondary" className="mb-5 h-auto gap-1.5 rounded-full px-3 py-1.5">
              <Sparkle className="size-3.5 text-accent" />
              Em transição de carreira para tecnologia
            </Badge>
            <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Olá, sou {profile.name.split(" ")[0]}
              <span className="block text-primary">de advogado a developer.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground text-pretty">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href="/experiencia" />}
                nativeButton={false}
                size="lg"
                className="h-11 rounded-full px-6"
              >
                Ver experiência
                <ArrowRight className="size-4" data-icon="inline-end" />
              </Button>
              <Button
                render={<Link href="/contacto" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-11 rounded-full px-6"
              >
                Vamos conversar
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-4 border-t border-border/60 pt-6 sm:grid-cols-4 sm:max-w-xl">
              {highlights.map((h) => (
                <div key={h.label}>
                  <dt className="sr-only">{h.label}</dt>
                  <dd className="font-display text-2xl font-bold text-primary sm:text-3xl">
                    {h.value}
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground">{h.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] ring-4 ring-card shadow-2xl shadow-primary/10">
              <Image
                src={profile.avatar}
                alt={`Foto de ${profile.name} sorrindo`}
                fill
                sizes="(min-width: 1024px) 24rem, 80vw"
                className="object-cover"
                priority
              />
            </div>
            <Card className="absolute -bottom-6 -left-6 max-w-60 -rotate-3 border-0 shadow-xl">
              <CardContent className="flex items-start gap-3 px-4 py-3">
                <Quote className="size-5 shrink-0 text-accent" />
                <p className="text-xs leading-snug text-muted-foreground italic">
                  &ldquo;{profile.quote}&rdquo;
                  <span className="mt-1 block font-medium text-foreground not-italic">
                    — {profile.quoteAuthor}
                  </span>
                </p>
              </CardContent>
            </Card>
            <Badge className="absolute -top-4 right-2 gap-1.5 rounded-full px-3 py-1.5 shadow-lg">
              <MapPin className="size-3.5" />
              {profile.location}
            </Badge>
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight">Sobre mim</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              {profile.bio}
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal className="mb-10 flex items-center gap-2">
          <GraduationCap className="size-6 text-primary" />
          <h2 className="font-display text-3xl font-bold tracking-tight">Formação</h2>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Acadêmica
            </h3>
            <ol className="space-y-4">
              {academicEducation.map((item) => (
                <li key={item.title}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.place}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline">{item.period}</Badge>
                      {item.note && <Badge variant="secondary">{item.note}</Badge>}
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Tecnologia e Cursos Complementares
            </h3>
            <ol className="space-y-4">
              {formacaoTecnologia.map((item) => (
                <li key={item.title}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.place}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap items-center gap-2">
                      {"completed" in item && item.completed && (
                        <Badge className="gap-1 bg-success text-success-foreground">
                          <CheckCircle2 className="size-3" />
                          Concluído
                        </Badge>
                      )}
                      <Badge variant="outline">{item.period}</Badge>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICAÇÕES */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal className="mb-10 flex items-center gap-2">
            <Award className="size-6 text-primary" />
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Cursos e Certificações
            </h2>
          </Reveal>
          <CertificationsGrid certifications={certifications} />
        </div>
      </section>

      {/* A ACONTECER AGORA */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Badge className="gap-1.5 bg-success text-success-foreground">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success-foreground/70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-success-foreground" />
                </span>
                {currentActivity.kind} em curso
              </Badge>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {currentActivity.title}
              </h2>
              <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                <Building2 className="size-4 text-primary" />
                {currentActivity.place}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{currentActivity.period}</p>
              <p className="mt-4 text-muted-foreground text-pretty">
                {currentActivity.description}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-success" />
                    {completedProgram.title}
                  </CardTitle>
                  <CardDescription>
                    {completedProgram.place} · {completedProgram.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2.5">
                    {completedProgram.modules.map((module, i) => (
                      <li key={module} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                        <span>
                          <span className="text-muted-foreground">M{i + 1} · </span>
                          {module}
                        </span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOBBIES */}
      <section id="hobbies" className="relative overflow-hidden border-t border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,color-mix(in_oklch,var(--primary),transparent_90%),transparent_55%),radial-gradient(circle_at_85%_85%,color-mix(in_oklch,var(--accent),transparent_88%),transparent_55%)]"
        />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal className="mb-10 flex items-center justify-center gap-2 text-center">
            <Heart className="size-6 text-primary" />
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Fora do código e dos tribunais
            </h2>
          </Reveal>
          <p className="-mt-8 mb-10 text-center text-muted-foreground">
            Também sou gente — eis os meus hobbies.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {hobbies.map((hobby, i) => (
              <Reveal key={hobby.title} delay={i * 0.1}>
                <Card className="gap-0 overflow-hidden py-0">
                  <div className="aspect-video w-full">
                    {hobby.type === "video" ? (
                      <HobbyVideo
                        src={hobby.src}
                        title={`Vídeo sobre ${hobby.title}`}
                      />
                    ) : (
                      <iframe
                        className="h-full w-full"
                        src={hobby.src}
                        title={`Vídeo do YouTube sobre ${hobby.title}`}
                        loading="lazy"
                        allowFullScreen
                      />
                    )}
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2">
                      <Briefcase className="size-4 text-accent" />
                      <h3 className="font-semibold">{hobby.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{hobby.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
