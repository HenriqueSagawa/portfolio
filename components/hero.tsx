"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Desenvolvedor Full Stack",
  "React/Next.js Developer",
  "Node.js Developer",
  "TypeScript Enthusiast",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayText((prev) => prev.slice(0, -1)),
        30,
      );
    } else {
      timeout = setTimeout(
        () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
        60,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow orb behind photo */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 -translate-y-1/2 hidden lg:block">
        <div
          className="h-100 w-100 rounded-full bg-primary/8 blur-[100px]"
          style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
        />
      </div>

      <div
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20"
        style={{ animation: "fade-up 0.8s ease-out" }}
      >
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs text-muted-foreground">
              Disponível para oportunidades
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Henrique <span className="text-primary">Sagawa</span>
          </h1>

          <div className="mt-5 flex h-8 items-center justify-center gap-2 lg:justify-start">
            <span className="font-mono text-lg text-muted-foreground md:text-xl">
              {displayText}
            </span>
            <span className="inline-block h-6 w-0.5 bg-primary animate-pulse" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            Construo aplicações web modernas e escaláveis com foco em
            performance, experiência do usuário e código limpo. Especializado em
            React, Node.js e TypeScript.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Ver projetos
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-secondary hover:border-border/80"
            >
              Entre em contato
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center justify-center gap-5 lg:justify-start">
            {[
              {
                icon: Github,
                href: "https://github.com/HenriqueSagawa",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/henriquesagawa/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:henriquetutomusagawa@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                className="group rounded-full border border-border/50 bg-secondary/30 p-3 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                <Icon
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Profile photo — modern composition */}
        <div
          className="relative shrink-0"
          style={{ animation: "fade-in 1s ease-out 0.4s both" }}
        >
          {/* Outer decorative ring with rotation */}
          <div
            className="absolute -inset-4 rounded-full border border-dashed border-primary/15"
            style={{ animation: "spin-slow 30s linear infinite" }}
          />

          {/* Corner accent lines */}
          <div className="pointer-events-none absolute -top-6 -right-6 h-16 w-16">
            <div className="absolute top-0 right-0 h-px w-8 bg-primary/40" />
            <div className="absolute top-0 right-0 h-8 w-px bg-primary/40" />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-16 w-16">
            <div className="absolute bottom-0 left-0 h-px w-8 bg-primary/40" />
            <div className="absolute bottom-0 left-0 h-8 w-px bg-primary/40" />
          </div>

          {/* Photo container with clipped shape */}
          <div className="relative h-64 w-64 overflow-hidden rounded-3xl md:h-80 md:w-80 lg:h-95 lg:w-95">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 p-px">
              <div className="h-full w-full rounded-3xl bg-background" />
            </div>

            {/* Actual image */}
            <div className="absolute inset-0.75 overflow-hidden rounded-[calc(1.5rem-3px)]">
              <Image
                src="/images/profile.png"
                alt="Henrique Sagawa - Desenvolvedor Full Stack"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 380px"
              />
              {/* Subtle cinematic vignette */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
              {/* Primary color tint at bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-primary/10 to-transparent" />
            </div>

            {/* Glass inner ring */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/6" />
          </div>

          {/* Floating tech badge */}
          <div
            className="absolute -right-3 top-8 flex items-center gap-1.5 rounded-full border border-border/50 bg-card/90 px-3 py-1.5 shadow-lg backdrop-blur-sm md:-right-6"
            style={{ animation: "fade-in 1.2s ease-out 0.8s both" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-mono text-[11px] text-muted-foreground">
              Full Stack
            </span>
          </div>

          {/* Floating experience badge */}
          <div
            className="absolute -left-3 bottom-12 flex items-center gap-1.5 rounded-full border border-border/50 bg-card/90 px-3 py-1.5 shadow-lg backdrop-blur-sm md:-left-6"
            style={{ animation: "fade-in 1.2s ease-out 1s both" }}
          >
            <span className="font-mono text-[11px] text-primary font-semibold">
              3+
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              projetos
            </span>
          </div>

          {/* Glow under photo on mobile */}
          <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 h-32 w-3/4 rounded-full bg-primary/8 blur-3xl lg:hidden" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: "fade-in 1.5s ease-out 1s both" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground/50">scroll</span>
          <div className="h-8 w-px bg-border/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
