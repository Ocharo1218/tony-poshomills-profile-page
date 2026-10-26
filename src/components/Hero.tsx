import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#17211f] text-white py-14 sm:py-16 lg:flex lg:min-h-[calc(100svh-73px)] lg:items-center lg:py-12">
      <div className="container relative mx-auto w-full px-5 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="mb-2 text-center md:mb-0 md:w-[54%] md:pr-4 md:text-left lg:pr-8">
            <div className="reveal-up mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8c45a]/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e9d86d] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d8c45a]" />
              Built for better output
            </div>
            <h1 className="reveal-up text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-5xl lg:text-7xl">
              Posho mills &amp; farm equipment that <span className="text-[#e9d86d]">move</span> your business forward.
            </h1>
            <p className="reveal-up-delay mt-6 max-w-xl text-sm leading-6 text-[#d0d9d2] sm:text-base md:text-lg">
              Find posho mills, maize shellers, chaff cutters and animal feed equipment in Nakuru, Kenya. Practical agricultural machinery for farms and food producers.
            </p>
            <div className="reveal-up-delay-2 mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Button 
                className="group h-12 bg-[#e9d86d] px-6 text-[#17211f] hover:bg-[#f4e993]"
                onClick={() => document.getElementById('machinery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Machinery
                <ArrowUpRight size={18} className="ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button 
                variant="outline" 
                className="h-12 border-white/20 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone size={20} className="mr-2" />
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="relative w-full md:w-[46%]">
            <div className="absolute -bottom-5 -left-5 z-10 hidden rounded-lg bg-[#e9d86d] p-4 text-[#17211f] shadow-xl sm:block">
              <p className="text-2xl font-bold leading-none">10+</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider">Years of know-how</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/30">
              <img  
                src="/images/tony.jpg" 
                alt="Industrial Machinery"
                className="hero-image aspect-[4/3] w-full rounded-xl object-cover object-center"
              />
              <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-[#17211f]/90 px-3 py-2 text-xs font-medium text-white backdrop-blur">
                <Check size={14} className="text-[#e9d86d]" />
                Quality checked
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
