import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black-100">
      <NavBar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      </main>
  );
}
