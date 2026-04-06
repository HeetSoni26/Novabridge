"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Fake progress loading
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Progress reaches 100%, trigger exit animation
        tl.to(textRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(barRef.current, {
          width: "100%",
          duration: 0.2,
        }, "-=0.3")
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete,
        });
      }
      setProgress(currentProgress);
      if (barRef.current) {
        gsap.to(barRef.current, { width: `${currentProgress}%`, duration: 0.2 });
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center">
        <h1 
          ref={textRef} 
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"
        >
          NovaBridge<span className="text-primary">.</span>
        </h1>
        <div className="w-64 h-[2px] bg-secondary rounded-full overflow-hidden">
          <div ref={barRef} className="h-full bg-primary w-0" />
        </div>
        <div className="mt-4 text-muted text-sm font-mono tracking-widest">
          {progress.toString().padStart(3, "0")}%
        </div>
      </div>
    </div>
  );
}
