"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "IFCode",
    description:
      "Plataforma de ensino gamificada para programação com renderização híbrida (CSR/SSR), autenticação, persistência de dados e sistema de pontuação e progressão para engajamento dos usuários.",
    techs: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/HenriqueSagawa/ifcode",
    highlights: [
      "Renderização híbrida CSR/SSR",
      "Gamificação com pontuação",
      "Autenticação integrada",
    ],
  },
  {
    title: "Stardust Ledger",
    description:
      "Aplicação Full Stack com API REST em arquitetura em camadas, TDD no backend, interface com Atomic Design, documentação com Storybook e containerização completa com Docker.",
    techs: ["React", "Node.js", "Express", "MongoDB", "Docker", "Storybook", "Jest"],
    github: "https://github.com/HenriqueSagawa/stardust-ledger",
    highlights: [
      "Arquitetura em camadas",
      "Test-Driven Development",
      "Docker Compose",
    ],
  },
  {
    title: "Cardápio de Chopp Benteo",
    description:
      "Landing page responsiva de alta conversão com design mobile-first, identidade visual sofisticada em tons de âmbar e preto, e componentes interativos para navegação fluida.",
    techs: ["HTML5", "CSS3", "JavaScript", "Git"],
    github: "https://github.com/HenriqueSagawa/Projeto-Chopp-Benteo",
    highlights: [
      "Mobile-First Design",
      "Identidade visual custom",
      "Otimização SEO",
    ],
  },
]

export function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="projetos" className="relative px-6 py-24 md:py-32">
      <div
        ref={ref}
        className="mx-auto max-w-6xl"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Projetos
          </h2>
          <div className="hidden h-px flex-1 bg-border/50 md:block" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card/50 transition-all duration-500 hover:border-primary/20 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
              }}
            >
              {/* Card header gradient line */}
              <div className="h-px w-full bg-border/50 transition-colors duration-500 group-hover:bg-primary/40" />

              <div className="flex flex-1 flex-col p-6">
                {/* Top row */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Code2Icon />
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub de ${project.title}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver projeto ${project.title}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-5 space-y-1.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <ArrowUpRight
                        size={12}
                        className="text-primary"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Code2Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  )
}
