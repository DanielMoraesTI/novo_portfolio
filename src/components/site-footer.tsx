import Link from "next/link";
import Image from "next/image";
import { socials } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6">
        <nav className="flex items-center gap-3">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              title={social.label}
              className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-background transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
            >
              <Image src={social.icon} alt="" aria-hidden width={18} height={18} />
            </Link>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Feito com Next.js, React &amp; café ☕ por Daniel Moraes
          <br />
          Curso Frontend, Programa UPskill — Faculdade de Ciências da Universidade de Lisboa
        </p>
      </div>
    </footer>
  );
}
