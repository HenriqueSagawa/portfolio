import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}
