import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black-100">
      <NavBar />
      <Hero />
      <TechStack />
      </main>
  );
}
