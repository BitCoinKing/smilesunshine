import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Sections/Mission";
import { ProgramsSection } from "@/components/ProgramsSection";
import { AboutSection } from "@/components/AboutSection";
import { Vision } from "@/components/Sections/Vision";
import { Board } from "@/components/Sections/Board";
import { Donate } from "@/components/Sections/Donate";
import { HelpForm } from "@/components/Sections/HelpForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Hero />

        <div className="border-t border-gray-200"></div>

        <Mission />

        <div className="border-t border-gray-200"></div>

        <ProgramsSection />

        <div className="border-t border-gray-200"></div>

        <AboutSection />

        <div className="border-t border-gray-200"></div>

        <Vision />

        <div className="border-t border-gray-200"></div>

        <Board />

        <div className="border-t border-gray-200"></div>

        <Donate />

        <div className="border-t border-gray-200"></div>

        <HelpForm />
      </div>

      <Footer />
    </>
  );
}
