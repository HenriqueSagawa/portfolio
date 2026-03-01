"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Briefcase, GraduationCap, Code2, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    description: "Frontend e Backend com domínio técnico de ponta a ponta.",
  },
  {
    icon: GraduationCap,
    title: "Formação Técnica",
    description: "Técnico em Informática pelo IFPR e graduando em ADS.",
  },
  {
    icon: Briefcase,
    title: "Foco em Resultados",
    description: "Projetos reais com arquitetura limpa e boas práticas.",
  },
  {
    icon: Users,
    title: "Colaborativo",
    description: "Comunicação clara, trabalho em equipe e aprendizado contínuo.",
  },
]

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section id="sobre" className="relative px-6 py-24 md:py-32">
      <div
        ref={ref}
        className="mx-auto max-w-6xl"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Sobre mim</h2>
          <div className="hidden h-px flex-1 bg-border/50 md:block" />
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Photo + Text content */}
          <div className="lg:col-span-3">
            {/* Small photo visible only on mobile */}
            <div className="mb-8 flex justify-center lg:hidden">
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-border/30">
                <Image
                  src="/images/profile.png"
                  alt="Henrique Sagawa"
                  fill
                  className="object-cover object-center"
                  sizes="160px"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
              </div>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Sou um <span className="text-foreground font-medium">Desenvolvedor Full Stack</span> em
                formação, com sólida experiência prática em construção de aplicações web
                utilizando <span className="text-primary">React</span>,{" "}
                <span className="text-primary">Node.js</span> e{" "}
                <span className="text-primary">TypeScript</span>.
              </p>
              <p>
                Atuo tanto na construção de interfaces responsivas e acessíveis quanto no
                desenvolvimento de APIs REST, integração com bancos de dados e organização
                arquitetural. Minha abordagem combina código limpo, boas práticas de
                engenharia e atenção à experiência do usuário.
              </p>
              <p>
                Atualmente cursando <span className="text-foreground font-medium">Análise e Desenvolvimento
                de Sistemas</span> na Faculdade Donaduzzi e formado como{" "}
                <span className="text-foreground font-medium">Técnico em Informática para Internet</span>{" "}
                pelo Instituto Federal do Paraná (IFPR).
              </p>
              <p>
                Busco oportunidade como <span className="text-foreground font-medium">Estagiário ou Desenvolvedor Júnior</span> para
                evoluir tecnicamente e contribuir com soluções de impacto.
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "3+", label: "Projetos" },
                { value: "10+", label: "Tecnologias" },
                { value: "B2", label: "Inglês" },
                { value: "2026", label: "Estudante de ADS" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border/50 bg-secondary/30 p-4 text-center">
                  <div className="text-xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4 lg:col-span-2">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-card"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(30px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1 + 0.3}s`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary/15">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
