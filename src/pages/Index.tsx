import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

import heroImg from "@/assets/hero-moving.jpg";
import furnitureImg from "@/assets/service-furniture.jpg";
import boxesImg from "@/assets/service-boxes.jpg";
import specialtyImg from "@/assets/service-specialty.jpg";
import logoImg from "/favicon.png";

const services = [
  {
    title: "Furniture",
    desc: "Double-wrapped, zero scratches. Your grandma's hutch arrives like it never left.",
    img: furnitureImg,
  },
  {
    title: "Boxes & Belongings",
    desc: "Organized, inventoried, and secured. Every box accounted for, every time.",
    img: boxesImg,
  },
  {
    title: "Specialty Items",
    desc: "From Ducatis to dinettes — we move the things other companies won't touch.",
    img: specialtyImg,
  },
];

const cities = [
  { name: "Seattle", top: "8%", left: "12%" },
  { name: "Portland", top: "22%", left: "10%" },
  { name: "San Francisco", top: "48%", left: "5%" },
  { name: "Los Angeles", top: "72%", left: "18%" },
  { name: "San Diego", top: "85%", left: "24%" },
];

const Index = () => {
  const { toast } = useToast();
  const [fromZip, setFromZip] = useState("");
  const [toZip, setToZip] = useState("");
  const [moveDate, setMoveDate] = useState("");

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote request received!",
      description: "We'll get back to you within 24 hours with a flat-rate quote.",
    });
    setFromZip("");
    setToZip("");
    setMoveDate("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Coastline Moving Co. logo" className="h-8 w-8 rounded" />
            <span className="font-bold text-lg tracking-tight text-foreground">Coastline Moving</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#route" className="hover:text-foreground transition-colors">Coverage</a>
            <a href="#quote" className="hover:text-foreground transition-colors">Quote</a>
          </div>
          <Button size="sm" asChild>
            <a href="#quote">Get a Quote</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src={heroImg}
            alt="Coastline Moving workers loading a motorcycle into a rental truck on the Pacific Coast"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
          <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-16 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-accent-foreground leading-tight max-w-2xl animate-fade-up">
              Small Moves.{" "}
              <span className="text-primary">Big Care.</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-accent-foreground/80 max-w-lg animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Serving the West Coast from Seattle to San Diego.
            </p>
            <Button size="lg" className="mt-6 w-fit text-base font-semibold animate-fade-up" style={{ animationDelay: "0.3s" }} asChild>
              <a href="#quote">Get a Flat-Rate Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">The Load</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-10">
            What we move
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300">
                <img src={s.img} alt={s.title} className="w-full h-56 object-cover" loading="lazy" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Route / Coverage */}
      <section id="route" className="py-20 bg-accent scroll-mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Simple West Coast map */}
          <div className="relative w-64 h-96 flex-shrink-0">
            <svg viewBox="0 0 120 300" className="w-full h-full" aria-label="West Coast route map">
              {/* Coast line */}
              <path
                d="M40,20 C30,60 25,100 20,140 C15,180 30,220 45,260 C50,275 55,285 60,295"
                fill="none"
                stroke="hsl(24 95% 53%)"
                strokeWidth="2"
                strokeDasharray="6 4"
                opacity="0.6"
              />
              {/* City dots */}
              {cities.map((c) => (
                <g key={c.name}>
                  <circle
                    cx={parseFloat(c.left) * 1.2}
                    cy={parseFloat(c.top) * 3}
                    r="5"
                    fill="hsl(24 95% 53%)"
                  />
                  <text
                    x={parseFloat(c.left) * 1.2 + 10}
                    y={parseFloat(c.top) * 3 + 4}
                    fill="hsl(0 0% 100%)"
                    fontSize="9"
                    fontFamily="'Public Sans', sans-serif"
                    fontWeight="600"
                  >
                    {c.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <div className="text-accent-foreground">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">The Route</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              From the Sound to the Border.
            </h2>
            <p className="text-accent-foreground/70 max-w-md leading-relaxed">
              Whether you're relocating from a Portland bungalow to an LA loft, or moving a studio apartment down the coast — we've got you covered on every mile of the I-5.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form + Stats */}
      <section id="quote" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 text-center">The Finish</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-8 text-center">
            Get your flat-rate quote
          </h2>
          <form onSubmit={handleQuote} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="From ZIP"
                value={fromZip}
                onChange={(e) => setFromZip(e.target.value)}
                required
                maxLength={5}
                aria-label="From ZIP code"
              />
              <Input
                placeholder="To ZIP"
                value={toZip}
                onChange={(e) => setToZip(e.target.value)}
                required
                maxLength={5}
                aria-label="To ZIP code"
              />
            </div>
            <Input
              type="date"
              value={moveDate}
              onChange={(e) => setMoveDate(e.target.value)}
              required
              aria-label="Move date"
            />
            <Button type="submit" size="lg" className="w-full text-base font-semibold">
              Request My Quote
            </Button>
          </form>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 text-center">
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-3xl font-bold font-mono text-primary">98.4%</p>
              <p className="text-sm text-muted-foreground mt-1">On-time delivery</p>
            </div>
            <div className="bg-secondary rounded-lg p-6">
              <p className="text-3xl font-bold font-mono text-primary">0.02%</p>
              <p className="text-sm text-muted-foreground mt-1">Claim rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-10">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Coastline Moving Co." className="h-6 w-6 rounded" />
            <span className="font-bold">Coastline Moving Co.</span>
          </div>
          <p className="text-accent-foreground/60 text-sm">
            Seattle to San Diego · Small moves, big care.
          </p>
          <div className="flex gap-4 text-sm text-accent-foreground/60">
            <a href="#services" className="hover:text-accent-foreground transition-colors">Services</a>
            <a href="#route" className="hover:text-accent-foreground transition-colors">Coverage</a>
            <a href="#quote" className="hover:text-accent-foreground transition-colors">Quote</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
