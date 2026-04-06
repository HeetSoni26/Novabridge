"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeBackground from "./ThreeBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Zoom-in scroll trigger effect
    if (bgRef.current && textRef.current && containerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        }
      });

      tl.to(bgRef.current, {
        scale: 1.5,
        opacity: 0.2,
      }, 0)
      .to(textRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -100,
      }, 0);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 z-0 opacity-60">
        <ThreeBackground />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <div ref={textRef}>
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium text-muted">
            #1 Elite Lead Generation Agency
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 font-clash">
            We Build <br />
            <span className="text-gradient">Client-Generating</span> <br />
            Machines.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
            Stop relying on referrals. We engineer autonomous digital systems that attract, nurture, and close high-ticket clients for B2B tech and service companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="magnetic w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-colors">
              Book a Free Audit
            </button>
            <button className="magnetic w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
              View Case Studies
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-4 text-sm text-muted">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-[10px]">
                  👤
                </div>
              ))}
            </div>
            <p>Trusted by 150+ B2B Companies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
