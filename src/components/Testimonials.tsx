"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  { name: "Sarah Jenkins", role: "CEO, TechFlow", text: "NovaBridge didn't just rebuild our website. They built a system that adds $100k to our pipeline every month." },
  { name: "Michael Chang", role: "Founder, Apex", text: "Our outbound was broken. In 60 days, they revamped our infrastructure and we booked 45 qualified meetings." },
  { name: "Elena V.", role: "VP Sales, Synthetix", text: "The highest ROI investment we made this year. Period. The automations save our team 30 hours a week." }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    
    const tk = gsap.to(scrollRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    return () => { tk.kill(); };
  }, []);

  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-clash">Don't Take Our Word For It.</h2>
      </div>
      
      <div className="flex w-[200vw]" ref={scrollRef}>
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="w-[80vw] md:w-[30vw] flex-shrink-0 px-4">
            <div className="bg-secondary p-10 rounded-2xl border border-white/5 h-full">
              <div className="text-primary mb-6">★★★★★</div>
              <p className="text-xl leading-relaxed mb-8">"{t.text}"</p>
              <div>
                <strong className="block">{t.name}</strong>
                <span className="text-sm text-muted">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
