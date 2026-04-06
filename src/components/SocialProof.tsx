"use client";

export default function SocialProof() {
  const logos = [
    "ACME Corp", "GlobalTech", "Nexus", "Quantum", 
    "Vertex", "Horizon", "Ascend", "Lumina"
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-background relative overflow-hidden flex items-center">
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex w-[200%] animate-[slide_30s_linear_infinite]">
        {/* First set */}
        <div className="flex w-1/2 justify-around items-center">
          {logos.map((logo, i) => (
            <div key={i} className="text-2xl font-bold text-white/20 whitespace-nowrap px-8">
              {logo}
            </div>
          ))}
        </div>
        {/* Second set for seamless loop */}
        <div className="flex w-1/2 justify-around items-center">
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className="text-2xl font-bold text-white/20 whitespace-nowrap px-8">
              {logo}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
