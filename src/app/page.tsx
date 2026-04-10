import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
