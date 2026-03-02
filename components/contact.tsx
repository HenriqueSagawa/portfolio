"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "henriquetutomusagawa@gmail.com",
    href: "mailto:henriquetutomusagawa@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/HenriqueSagawa",
    href: "https://github.com/HenriqueSagawa",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/henriquesagawa",
    href: "https://linkedin.com/in/henriquesagawa/",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(44) 99805-0846",
    href: "https://wa.me/554498050846",
  },
]

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="contato" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-secondary/20" />

      <div
        ref={ref}
        className="relative mx-auto max-w-4xl text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="mb-12 flex items-center justify-center gap-4">
          <span className="font-mono text-sm text-primary">05.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Vamos conversar?
          </h2>
        </div>

        <p className="mx-auto mb-12 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          Estou disponível para oportunidades de estágio ou posições júnior.
          Se você acredita que posso contribuir com seu time, entre em contato.
          Ficarei feliz em conversar!
        </p>

        <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/30 p-5 text-left transition-all duration-300 hover:border-primary/20 hover:bg-card/50"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1 + 0.3}s`,
              }}
            >
              <div className="rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary/15">
                <contact.icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {contact.label}
                </p>
                <p className="mt-0.5 truncate text-sm text-foreground">
                  {contact.value}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ))}
        </div>

        {/* Main CTA */}
        <div className="mt-12">
          <a
            href="mailto:henriquetutomusagawa@gmail.com"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Enviar email
            <Mail size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
