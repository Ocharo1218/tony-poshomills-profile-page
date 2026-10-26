
import { Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#17211f] text-white">
      <div className="container mx-auto px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FARMERS CHOICE POSHOMILL NAKURU</h3>
            <p className="mb-4 text-stone-400">
              Posho mills, farm equipment and animal feed machinery in Nakuru, Kenya.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61564470753699" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#e9d86d] hover:text-[#17211f]">
                <Facebook size={18} />
              </a>
              <a href="https://x.com/Brayze254" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#e9d86d] hover:text-[#17211f]">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-stone-400 transition-colors hover:text-white">Home</a></li>
              <li><a href="#machinery" className="text-stone-400 transition-colors hover:text-white">Machinery</a></li>
              <li><a href="#about" className="text-stone-400 transition-colors hover:text-white">About Us</a></li>
              <li><a href="#contact" className="text-stone-400 transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Machinery Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Machinery Categories</h3>
            <ul className="space-y-2">
              <li><a href="#machinery" className="text-stone-400 transition-colors hover:text-white">Farm Equipment</a></li>
              <li><a href="#machinery" className="text-stone-400 transition-colors hover:text-white">Animal Feed Equipment</a></li>
              <li><a href="#machinery" className="text-stone-400 transition-colors hover:text-white">Food Processing Machines</a></li>
              <li><a href="#machinery" className="text-stone-400 transition-colors hover:text-white">Industrial Tools</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1" />
                <span>0796095358</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1" />
                <span>tonykipror@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1" />
                <span>Nakuru, opposite Pinewood Police Post</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-stone-500">
            &copy; {currentYear} Farmers Choice Poshomill Nakuru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
