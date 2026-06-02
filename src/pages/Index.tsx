import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProcessSection from "@/components/ProcessSection";
import DifferenceSection from "@/components/DifferenceSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CapabilitiesSection />
        <ProcessSection />
        <DifferenceSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
