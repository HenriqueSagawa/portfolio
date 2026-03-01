"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import { FaReact, FaNodeJs, FaGitAlt, FaLinux } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiDocker,
  SiVercel,
  SiFigma,
  SiPostman
} from "react-icons/si";

interface TechItem {
  name: string;
  category: string;
}

const categories: { title: string; items: TechItem[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", category: "frontend" },
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "HTML5", category: "frontend" },
      { name: "CSS3", category: "frontend" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", category: "backend" },
      { name: "Express", category: "backend" },
      { name: "Prisma ORM", category: "backend" },
    ],
  },
  {
    title: "Banco de Dados",
    items: [
      { name: "PostgreSQL", category: "database" },
      { name: "MySQL", category: "database" },
      { name: "MongoDB", category: "database" },
      { name: "Firebase", category: "database" },
      { name: "Supabase", category: "database" },
    ],
  },
  {
    title: "DevOps e Ferramentas",
    items: [
      { name: "Docker", category: "devops" },
      { name: "Git", category: "devops" },
      { name: "Vercel", category: "devops" },
      { name: "Linux", category: "devops" },
      { name: "Figma", category: "devops" },
      { name: "Postman", category: "devops" },
    ],
  },
];

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  "Prisma ORM": SiPrisma,
  PostgreSQL: BiLogoPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  Docker: SiDocker,
  Git: FaGitAlt,
  Vercel: SiVercel,
  Linux: FaLinux,
  Figma: SiFigma,
  Postman: SiPostman,
};

const techColors: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Node.js": "#339933",
  Express: "#000000",
  "Prisma ORM": "#2D3748",
  PostgreSQL: "#336791",
  MySQL: "#4479A1",
  MongoDB: "#47A248",
  Firebase: "#FFCA28",
  Supabase: "#3ECF8E",
  Docker: "#2496ED",
  Git: "#F05032",
  Vercel: "#000000",
  Linux: "#FFFF",
  Figma: "#F24E1E",
  Postman: "#FF6C37",
};

export function Technologies() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="tecnologias" className="relative px-6 py-24 md:py-32">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-secondary/20" />

      <div
        ref={ref}
        className="relative mx-auto max-w-6xl"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">03.</span>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Tecnologias
          </h2>
          <div className="hidden h-px flex-1 bg-border/50 md:block" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map((category, catIdx) => (
            <div
              key={category.title}
              className="rounded-xl border border-border/50 bg-card/30 p-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${catIdx * 0.15 + 0.2}s`,
              }}
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech, techIdx) => {
                  const IconComponent = techIcons[tech.name];
                  const techColor = techColors[tech.name];
                  return (
                    <div
                      key={tech.name}
                      className="group flex cursor-default items-center gap-2 rounded-lg border border-border/50 bg-secondary/30 px-3 py-2 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:scale-105"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${catIdx * 0.15 + techIdx * 0.05 + 0.3}s`,
                        "--tech-color": techColor || "currentColor",
                      } as React.CSSProperties & { "--tech-color"?: string }}
                    >
                      <style dangerouslySetInnerHTML={{
                        __html: `
                          .group:hover [data-tech-icon="${tech.name}"] svg,
                          .group:hover [data-tech-icon="${tech.name}"] {
                            color: var(--tech-color) !important;
                          }
                        `
                      }} />
                      <span 
                        className="text-sm transition-all duration-300 group-hover:scale-110" 
                        data-tech-icon={tech.name}
                        style={{ color: "inherit" }}
                      >
                        {IconComponent ? (
                          <IconComponent
                            className="h-4 w-4 transition-colors duration-300 text-muted-foreground"
                          />
                        ) : (
                          "•"
                        )}
                      </span>
                      <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
