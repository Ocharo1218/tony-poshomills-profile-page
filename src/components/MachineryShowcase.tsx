
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { machineryData, Machinery } from "@/data/machineryData";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const MachineryShowcase = () => {
  return (
    <section id="machinery" className="bg-[#fbfaf6] py-20 md:py-28">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9a8c36]">What we supply</p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#17211f] md:text-5xl">Posho Mills, Farm &amp; Animal Feed Equipment</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-stone-500 md:text-right">
            Explore posho mills, grain mills, maize shellers, chaff cutters and feed choppers available in Nakuru, with customers served across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {machineryData.map((machine) => (
            <MachineryCard key={machine.id} machine={machine} />
          ))}
        </div>

        <div className="mt-16 max-w-3xl">
          <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-[#17211f]">
            Posho Mills and Farm Equipment in Nakuru, Kenya
          </h3>
          <p className="leading-7 text-stone-600">
            Farmers Choice Poshomill Nakuru supplies diesel and electric posho mills, combined Grade 1 and Grade 2 mills, roller mills and disc mills. Our agricultural equipment also includes maize shellers, chaff cutters, feed choppers and walking tractors for farm and animal-feed work.
          </p>
          <p className="mt-4 leading-7 text-stone-600">
            If you are looking for a posho mill for sale in Nakuru, a maize grinding machine in Kenya, or animal feed processing equipment, browse the available machines above and contact us to ask about current prices and availability. We are based in Nakuru and serve customers across Kenya.
          </p>
        </div>
      </div>
    </section>
  );
};

const MachineryCard = ({ machine }: { machine: Machinery }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const whatsappMessage = encodeURIComponent(
    `Hello Farmers Choice Poshomill Nakuru, I would like more details about the ${machine.name}.`
  );
  const whatsappUrl = `https://wa.me/254796095358?text=${whatsappMessage}`;

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-xl border-stone-200 bg-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/10">
      <button
        type="button"
        aria-label={`View ${machine.name} image`}
        onClick={() => setIsImageOpen(true)}
        className="group/image flex aspect-square w-full cursor-zoom-in items-center justify-center overflow-hidden bg-stone-100 p-2 sm:p-3"
      >
        <img 
          src={machine.image} 
          alt={machine.name} 
          className="h-full w-full object-contain"
        />
      </button>
      <CardHeader className="min-h-[88px]">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg font-bold capitalize leading-6 text-[#17211f]">{machine.name}</CardTitle>
          <Badge variant="outline" className="border-[#d8c45a] bg-[#fffceb] text-[10px] text-stone-700">{machine.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-2xl font-bold text-[#17211f]">{machine.price}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button 
          className="w-full bg-[#17211f] hover:bg-[#293b36]"
          onClick={() => setIsContactOpen(true)}
        >
          Contact For Details
        </Button>
      </CardFooter>

      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="flex max-h-[92vh] w-[calc(100%-2rem)] max-w-5xl items-center justify-center overflow-hidden rounded-2xl border-stone-200 bg-[#17211f] p-3 sm:p-5">
          <img
            src={machine.image}
            alt={machine.name}
            className="max-h-[82vh] w-full object-contain"
          />
        </DialogContent>
      </Dialog>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="max-h-[78vh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-2xl border-stone-200 bg-[#fbfaf6] p-5 sm:max-h-[90vh] sm:p-8">
          <DialogHeader className="pr-6 text-left">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#9a8c36]">Enquire now</p>
            <DialogTitle className="text-2xl font-semibold tracking-[-0.03em] text-[#17211f]">
              Ask about this machine
            </DialogTitle>
            <DialogDescription className="pt-1 text-sm leading-6 text-stone-500">
              Get availability, delivery, and pricing details for the {machine.name}.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2 rounded-xl border border-stone-200 bg-white p-4">
            <p className="text-sm font-semibold capitalize text-[#17211f]">{machine.name}</p>
            <p className="mt-1 text-lg font-bold text-[#17211f]">{machine.price}</p>
          </div>

          <div className="space-y-3 text-sm">
            <a href="tel:0796095358" className="flex items-center gap-3 rounded-lg p-2 text-stone-700 transition-colors hover:bg-stone-100">
              <span className="rounded-md bg-[#f7f1c9] p-2"><Phone className="h-4 w-4 text-[#9a8c36]" /></span>
              <span><span className="block text-xs text-stone-500">Call us</span>0796095358</span>
            </a>
            <a href="mailto:tonykipror@gmail.com" className="flex items-center gap-3 rounded-lg p-2 text-stone-700 transition-colors hover:bg-stone-100">
              <span className="rounded-md bg-[#f7f1c9] p-2"><Mail className="h-4 w-4 text-[#9a8c36]" /></span>
              <span><span className="block text-xs text-stone-500">Email us</span>tonykipror@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 rounded-lg p-2 text-stone-700">
              <span className="rounded-md bg-[#f7f1c9] p-2"><MapPin className="h-4 w-4 text-[#9a8c36]" /></span>
              <span><span className="block text-xs text-stone-500">Visit us</span>Nakuru, opposite Pinewood Police Post</span>
            </div>
          </div>

          <Button asChild className="mt-2 h-12 w-full bg-[#25d366] text-white hover:bg-[#1fba59]">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default MachineryShowcase;
