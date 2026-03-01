import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
