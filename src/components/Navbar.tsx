
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Phone } from "lucide-react";

const whatsappUrl = "https://wa.me/254796095358?text=Hello%20Farmers%20Choice%20Poshomill%20Nakuru%2C%20I%20would%20like%20to%20know%20more%20about%20your%20machinery.";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled ? "border-stone-200 bg-[#fbfaf6]/95 shadow-sm backdrop-blur" : "border-transparent bg-[#fbfaf6]"
      }`}
    >
      <div className="container mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#home" className="font-bold tracking-[-0.03em] text-[#17211f]">
              <span className="block text-sm leading-tight sm:text-base">FARMERS CHOICE</span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.12em] text-stone-500">Poshomill Nakuru</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-5 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-stone-600 transition-colors hover:text-[#17211f]"
            >
              Home
            </a>
            <a
              href="#machinery"
              className="text-sm font-medium text-stone-600 transition-colors hover:text-[#17211f]"
            >
              Machinery
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-stone-600 transition-colors hover:text-[#17211f]"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-stone-600 transition-colors hover:text-[#17211f]"
            >
              Contact
            </a>
            <Button asChild className="flex items-center bg-[#17211f] hover:bg-[#293b36]">
              <a href="tel:0796095358">
                <Phone size={16} className="mr-2" />
                <span>0796095358</span>
              </a>
            </Button>
            <Button asChild className="flex items-center bg-[#25d366] text-white hover:bg-[#1fba59]">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
                <MessageCircle size={16} className="mr-2" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#fbfaf6] px-5 py-2 shadow-lg">
          <nav className="flex flex-col space-y-4 py-4">
            <a
              href="#home"
              className="px-2 py-1 font-medium text-stone-700 transition-colors hover:text-[#17211f]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#machinery"
              className="px-2 py-1 font-medium text-stone-700 transition-colors hover:text-[#17211f]"
              onClick={() => setIsMenuOpen(false)}
            >
              Machinery
            </a>
            <a
              href="#about"
              className="px-2 py-1 font-medium text-stone-700 transition-colors hover:text-[#17211f]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="px-2 py-1 font-medium text-stone-700 transition-colors hover:text-[#17211f]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button asChild className="flex w-full items-center justify-center bg-[#17211f] hover:bg-[#293b36]">
              <a href="tel:0796095358">
                <Phone size={16} className="mr-2" />
                <span>0796095358</span>
              </a>
            </Button>
            <Button asChild className="flex w-full items-center justify-center bg-[#25d366] text-white hover:bg-[#1fba59]">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={16} className="mr-2" />
                <span>Chat on WhatsApp</span>
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
