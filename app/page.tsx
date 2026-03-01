import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Technologies } from "@/components/technologies";
import { Education } from "@/components/education";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Education />
      </main>
    </div>
  );
}
