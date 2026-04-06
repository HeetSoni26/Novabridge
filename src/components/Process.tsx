"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Discovery & Audit", text: "We analyze your current pipeline, finding leaks and identifying high-leverage opportunities." },
  { num: "02", title: "System Architecture", text: "We build your custom CRM, cold email infrastructure, and automated follow-up sequences." },
  { num: "03", title: "Campaign Launch", text: "We hit the market with tailored messaging targeting your exact Ideal Customer Profile." },
  { num: "04", title: "Optimization & Scale", text: "Data-driven adjustments to maximize meetings booked and decrease cost-per-acquisition." }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(item,
          { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", y: 50 },
          {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            y: 0,
            duration: 1,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-32 relative z-10 bg-[#060606]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 font-clash">
          The Growth <br/><span className="text-gradient">Protocol</span>.
        </h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-[120px] pb-12">
          {steps.map((step, i) => (
            <div 
              key={i} 
              ref={el => { itemsRef.current[i] = el; }}
              className="relative pl-10 md:pl-20 py-12"
            >
              <div className="absolute left-[-20px] top-12 w-10 h-10 bg-background border border-white/20 rounded-full flex items-center justify-center font-mono text-sm font-bold shadow-[0_0_15px_rgba(79,110,247,0.3)]">
                {step.num}
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted md:text-xl max-w-2xl leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
