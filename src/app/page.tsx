import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { About } from "@/components/About";
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Values } from "@/components/Values";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <About />
      <Mission />
      <Services />
      <Process />
      <Values />
      <Testimonials />
      <Blog />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
