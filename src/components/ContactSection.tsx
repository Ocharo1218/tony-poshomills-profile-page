import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const whatsappUrl = "https://wa.me/254796095358?text=Hello%20Farmers%20Choice%20Poshomill%20Nakuru%2C%20I%20would%20like%20to%20know%20more%20about%20your%20machinery.";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mqapdyjk");

  if (state.succeeded) {
    return (
      <section id="contact" className="bg-[#f1efe7] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Thank You!</h2>
          <p className="text-gray-600">Your message has been sent. We will get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[#f1efe7] py-20 md:py-28">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9a8c36]">Let’s talk business</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-[-0.03em] text-[#17211f] md:text-5xl">Make your next move.</h2>
          <p className="max-w-2xl text-stone-500">
            Interested in our machinery? Have questions? Reach out and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="rounded-xl border border-stone-200 bg-[#17211f] p-8 text-white shadow-xl shadow-stone-900/10 lg:col-span-1">
            <h3 className="mb-6 text-xl font-bold">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="mr-4 rounded-lg bg-white/10 p-3">
                  <Phone className="h-5 w-5 text-[#e9d86d]" />
                </div>
                <div>
                  <p className="text-sm text-stone-400">Call Us</p>
                  <p className="font-medium">0796095358</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 rounded-lg bg-white/10 p-3">
                  <Mail className="h-5 w-5 text-[#e9d86d]" />
                </div>
                <div>
                  <p className="text-sm text-stone-400">Email</p>
                  <p className="font-medium">tonykipror@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 rounded-lg bg-white/10 p-3">
                  <MapPin className="h-5 w-5 text-[#e9d86d]" />
                </div>
                <div>
                  <p className="text-sm text-stone-400">Location</p>
                  <p className="font-medium">Nakuru, opposite Pinewood Police Post</p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-8">
              <h4 className="font-bold mb-3">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-stone-400">Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-stone-400">Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-stone-400">Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            <Button asChild className="mt-8 h-12 w-full bg-[#25d366] text-white hover:bg-[#1fba59]">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          
          {/* Contact Form */}
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm lg:col-span-2">
            <h3 className="mb-6 text-xl font-bold text-[#17211f]">Send Us a Message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-stone-700">
                    Full Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-stone-700">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" placeholder="Your phone number" />
                </div>
              </div>
              <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-700">
                  Email Address
                </label>
                <Input id="email" name="email" placeholder="Your email address" type="email" />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="e.g., Machinery Inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea id="message" name="message" placeholder="Write your message here..." className="h-32" />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>
              <Button type="submit" disabled={state.submitting} className="flex w-full items-center justify-center bg-[#17211f] hover:bg-[#293b36]">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;
