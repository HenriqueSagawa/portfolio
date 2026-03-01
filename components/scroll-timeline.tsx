"use client"

import { useEffect, useState, useCallback } from "react"

const sections = [
  { id: "hero", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "tecnologias", label: "Tech" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
]

export function ScrollTimeline() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? scrollTop / docHeight : 0
    setScrollProgress(progress)

    // Show timeline after scrolling past hero
    setIsVisible(scrollTop > 200)

    // Determine active section
    const sectionElements = sections
      .map((s) => {
        if (s.id === "hero") return { id: s.id, top: 0 }
        const el = document.getElementById(s.id)
        if (!el) return null
        return { id: s.id, top: el.offsetTop - 200 }
      })
      .filter(Boolean) as { id: string; top: number }[]

    for (let i = sectionElements.length - 1; i >= 0; i--) {
      if (scrollTop >= sectionElements[i].top) {
        setActiveSection(sectionElements[i].id)
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const handleClick = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      aria-label="Navegação por seções"
      className={`fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-1 xl:flex transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
    >
      {/* Progress track */}
      <div className="absolute right-[5px] top-0 bottom-0 w-px bg-border/30">
        <div
          className="w-full bg-primary/60 transition-all duration-300 ease-out origin-top"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="relative flex flex-col gap-6">
        {sections.map((section) => {
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className="group relative flex items-center gap-3 outline-none"
              aria-label={`Ir para ${section.label}`}
              aria-current={isActive ? "true" : undefined}
            >
              {/* Label — appears on hover or when active */}
              <span
                className={`font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "opacity-100 text-primary translate-x-0"
                    : "opacity-0 text-muted-foreground translate-x-2 group-hover:opacity-70 group-hover:translate-x-0"
                }`}
              >
                {section.label}
              </span>

              {/* Dot */}
              <span className="relative flex items-center justify-center">
                {/* Active ring */}
                <span
                  className={`absolute h-5 w-5 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-primary/40 scale-100 opacity-100"
                      : "border-transparent scale-0 opacity-0"
                  }`}
                />
                {/* Core dot */}
                <span
                  className={`relative h-[7px] w-[7px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-primary scale-125 shadow-[0_0_8px_rgba(var(--primary),0.4)]"
                      : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60 group-hover:scale-110"
                  }`}
                />
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
