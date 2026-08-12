import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { profile, socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contactos",
  description:
    "Entre em contacto com Daniel Moraes para dúvidas sobre transição de carreira, HTML, CSS, JavaScript ou oportunidades profissionais.",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Quer falar comigo?
          </h1>
          <p className="mt-4 text-muted-foreground text-pretty">
            Tem uma dúvida sobre transição de carreira, sobre as matérias que
            tenho estudado, ou apenas quer trocar uma ideia? Preencha o
            formulário ao lado — respondo o mais rápido possível.
          </p>

          <ul className="mt-8 space-y-3">
            {socials.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-muted">
                    <Image src={social.icon} alt="" aria-hidden width={18} height={18} />
                  </span>
                  <span className="text-sm font-medium">
                    {social.label === "WhatsApp"
                      ? "WhatsApp — disponível mediante pedido"
                      : social.label === "E-mail"
                        ? profile.email
                        : social.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <Card>
            <CardContent className="p-6 sm:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
