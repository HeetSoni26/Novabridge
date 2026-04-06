import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Case Studies | NovaBridge Agency",
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      <div className="pt-40 pb-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold font-clash mb-6">Proven Results.</h1>
        <p className="text-xl text-muted max-w-2xl mb-20">We let the numbers speak. See how we've scaled ARR for our partners.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[1,2,3,4].map(idx => (
            <div key={idx} className="bg-secondary p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <div className="text-3xl font-bold text-white/50">Company {idx}</div>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded text-sm font-bold">Saas</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Adding $250k ARR in 90 Days</h3>
              <p className="text-muted mb-8">Completely overhauled outbound strategy, launched a new email infrastructure and generated 45 qualified meetings.</p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <div className="text-xs text-muted uppercase tracking-wider mb-1">Meetings Booked</div>
                  <div className="text-3xl font-bold text-accent">45+</div>
                </div>
                <div>
                  <div className="text-xs text-muted uppercase tracking-wider mb-1">Open Rate</div>
                  <div className="text-3xl font-bold text-primary">68%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
