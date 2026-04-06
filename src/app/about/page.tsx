import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | NovaBridge Agency",
};

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      <div className="pt-40 pb-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h1 className="text-5xl md:text-7xl font-bold font-clash mb-6">Engineered for Scale.</h1>
          <p className="text-xl text-muted leading-relaxed">
            NovaBridge was founded on a simple premise: relying on word of mouth is a death sentence for ambitious B2B agencies. We bring algorithmic predictability to client acquisition.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[{stat: "150+", label: "Clients Scaled"}, {stat: "$45M+", label: "Pipeline Generated"}, {stat: "99.9%", label: "System Uptime"}].map((s, i) => (
             <div key={i} className="text-center p-12 bg-secondary rounded-3xl border border-white/5">
                <div className="text-5xl font-bold text-primary mb-2">{s.stat}</div>
                <div className="text-muted font-medium">{s.label}</div>
             </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl font-bold font-clash mb-12 text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
             {[1, 2, 3, 4].map(idx => (
               <div key={idx} className="group relative">
                 <div className="bg-white/5 aspect-[3/4] rounded-2xl mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-80" />
                 </div>
                 <h3 className="font-bold text-lg">Team Member {idx}</h3>
                 <p className="text-primary text-sm">Growth Architect</p>
               </div>
             ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
