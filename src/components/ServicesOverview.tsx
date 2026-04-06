"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Cold Email Infrastructure",
    desc: "We build and warm up dozens of domains to send 10k+ targeted emails daily without hitting spam.",
    icon: "✉️"
  },
  {
    title: "LinkedIn Automation",
    desc: "Turn your LinkedIn profile into a fully automated lead generation asset targeting decision-makers.",
    icon: "🔗"
  },
  {
    title: "High-Ticket Funnels",
    desc: "Custom-designed VSL (Video Sales Letter) funnels tested to convert cold traffic into booked calls.",
    icon: "🎯"
  },
  {
    title: "Inbound SEO Content",
    desc: "Authority-building editorial content designed to rank for high-intent B2B search terms.",
    icon: "📈"
  }
];

export default function ServicesOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      const heading = containerRef.current.querySelector("h2");
      gsap.fromTo(heading, 
        { y: 100, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5
    });
  };

  const handleMouseLeave = (idx: number) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
      duration: 0.5
    });
  };

  return (
    <section id="services" ref={containerRef} className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center mask-reveal">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-clash">
            Our Revenue <span className="text-gradient">Engines</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            We don't sell websites. We build scalable systems that systematically fill your pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <div 
              key={i}
              ref={el => { cardsRef.current[i] = el; }}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="magnetic group bg-secondary rounded-3xl p-10 relative overflow-hidden transition-colors border border-white/5 hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="text-4xl mb-6">{svc.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
              <p className="text-muted mb-8 leading-relaxed">
                {svc.desc}
              </p>
              <button className="flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors">
                Learn more <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
