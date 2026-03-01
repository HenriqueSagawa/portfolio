import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-primary">{"<Henrique Sagawa />"}</span>
          <span className="text-xs text-muted-foreground">
            Desenvolvido por Henrique Sagawa
          </span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/HenriqueSagawa", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/henriquesagawa/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:henriquetutomusagawa@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground/50">
          {new Date().getFullYear()} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
