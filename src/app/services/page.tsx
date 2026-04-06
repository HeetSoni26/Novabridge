import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | NovaBridge Agency",
};

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      <div className="pt-40 pb-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold font-clash mb-6">Our Services.</h1>
        <p className="text-xl text-muted max-w-2xl mb-20">Comprehensive client acquisition systems deployed specifically for high-ticket B2B offerings.</p>
        
        <div className="space-y-32">
          {[{
            title: "Cold Email Infrastructure",
            desc: "We build impenetrable email architectures leveraging 30+ domains and completely managed inboxes to generate warm B2B leads at scale.",
            features: ["Domain setup & warming", "DMARC/DKIM/SPF configuration", "Copywriting & sequencing", "Active inbox management"]
          }, {
            title: "LinkedIn Outreach",
            desc: "Turn your LinkedIn into an automated machine targeting highly-specific decision makers through Sales Navigator filtering.",
            features: ["Profile optimization", "Automated connection sequencing", "Personalized messaging paths", "Meeting booking orchestration"]
          }, {
            title: "SEO & Content Hubs",
            desc: "Rank for the highest intent keywords to bypass active outreach entirely. We build long-form authoritative assets.",
            features: ["Technical SEO audits", "Content gap analysis", "Editorial calendar management", "B2B intent keyword mapping"]
          }].map((srv, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-primary text-sm font-bold mb-4 uppercase tracking-widest">Service 0{idx+1}</div>
                <h2 className="text-4xl font-bold mb-6">{srv.title}</h2>
                <p className="text-muted text-lg leading-relaxed mb-8">{srv.desc}</p>
                <ul className="space-y-4">
                  {srv.features.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary rounded-3xl h-[400px] border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
