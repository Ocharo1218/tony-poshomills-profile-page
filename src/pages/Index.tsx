
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MachineryShowcase from "@/components/MachineryShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <MachineryShowcase />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <Button
        type="button"
        size="icon"
        aria-label="Back to top"
        title="Back to top"
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-40 h-10 w-10 rounded-full bg-[#e9d86d] text-[#17211f] shadow-lg shadow-stone-900/20 transition-all duration-300 hover:bg-[#f4e993] sm:bottom-7 sm:right-7 sm:h-11 sm:w-11 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Index;
