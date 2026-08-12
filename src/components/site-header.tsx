"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, profile } from "@/lib/data";

function NavItems({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const active =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-foreground/70 hover:text-foreground hover:bg-muted"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex size-11 shrink-0 overflow-hidden rounded-2xl ring-2 ring-primary/20 transition group-hover:ring-primary/50">
            <Image
              src={profile.avatar}
              alt={`Foto de ${profile.name}`}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight">
              {profile.name}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Sparkles className="size-3 text-accent" />
              Direito → Tech
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-card/60 p-1 md:flex">
          <NavItems />
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label="Abrir menu" className="rounded-full" />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="font-display">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col gap-2 px-4">
                  <SheetClose render={<div className="flex flex-col gap-2" />}>
                    <NavItems />
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
