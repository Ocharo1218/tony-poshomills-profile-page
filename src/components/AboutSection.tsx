
import { Star, Clock, Shield, Trophy } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="flex flex-col items-center gap-14 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 z-0 h-24 w-24 rounded-lg bg-[#e9d86d]"></div>
              <img 
                src="/images/tony1.jpg" 
                alt="Farmers Choice Poshomill Nakuru farm and posho mill machinery" 
                className="relative z-10 w-full rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 z-0 h-24 w-24 rounded-lg bg-[#dfe8df]"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9a8c36]">The difference is in the detail</p>
            <h2 className="mb-6 text-3xl font-semibold tracking-[-0.03em] text-[#17211f] md:text-5xl">
              About Farmers Choice Poshomill Nakuru
            </h2>
            
            <p className="mb-8 leading-7 text-stone-500">
              Based in Nakuru, Farmers Choice Poshomill Nakuru supplies posho mills, maize shellers, chaff cutters, feed choppers and other agricultural equipment. We help farmers and food producers find practical machinery for processing grain and preparing animal feed, serving customers in Nakuru and across Kenya.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-4 rounded-lg bg-[#f7f1c9] p-3">
                  <Star className="h-6 w-6 text-[#9a8c36]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
                  <p className="text-sm leading-6 text-stone-500">All machinery undergoes rigorous quality checks before sale.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 rounded-lg bg-[#f7f1c9] p-3">
                  <Clock className="h-6 w-6 text-[#9a8c36]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-sm leading-6 text-stone-500">Quick delivery and installation services across Kenya.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 rounded-lg bg-[#f7f1c9] p-3">
                  <Shield className="h-6 w-6 text-[#9a8c36]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Warranty & Support</h3>
                  <p className="text-sm leading-6 text-stone-500">Comprehensive warranty and after-sales support.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 rounded-lg bg-[#f7f1c9] p-3">
                  <Trophy className="h-6 w-6 text-[#9a8c36]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expert Advice</h3>
                  <p className="text-sm leading-6 text-stone-500">Professional consultation to help you choose the right machinery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
