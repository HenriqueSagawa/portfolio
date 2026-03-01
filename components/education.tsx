"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { GraduationCap } from "lucide-react"

const education = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Faculdade Donaduzzi",
    location: "Toledo, PR",
    period: "2026 - 2028",
    status: "Em andamento",
  },
  {
    title: "Técnico em Informática para Internet",
    institution: "Instituto Federal do Paraná (IFPR)",
    location: "Assis Chateaubriand, PR",
    period: "2023 - 2025",
    status: "Concluído",
  },
]

export function Education() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section id="formacao" className="relative px-6 py-24 md:py-32">
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
          <span className="font-mono text-sm text-primary">04.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Formação
          </h2>
          <div className="hidden h-px flex-1 bg-border/50 md:block" />
        </div>

        <div className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-border/50 md:block" />

          {education.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-xl border border-border/50 bg-card/30 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-card/50 md:ml-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2 + 0.2}s`,
              }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[3.4rem] top-7 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block" />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary md:hidden">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.institution} — {item.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:flex-shrink-0">
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                      item.status === "Em andamento"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/50 text-muted-foreground"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
