import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Free Technical Growth Audit | NovaBridge Agency",
};

export default function FreeAuditPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-clash mb-6">
          Uncover the Leaks in Your <span className="text-gradient">Acquisition Pipeline</span>
        </h1>
        <p className="text-xl text-muted max-w-3xl mx-auto mb-10">
          Our senior engineers will perform a teardown of your current outbound infrastructure, SEO profile, and inbound funnels—entirely for free.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left mb-20">
          <div className="bg-secondary p-8 rounded-2xl border border-white/5">
            <h3 className="font-bold text-xl mb-4 text-white">1. Deliverability Analysis</h3>
            <p className="text-muted text-sm">We analyze your domain health to see exactly how many of your sales emails are landing in the spam folder.</p>
          </div>
          <div className="bg-secondary p-8 rounded-2xl border border-white/5">
            <h3 className="font-bold text-xl mb-4 text-white">2. Conversion Bottlenecks</h3>
            <p className="text-muted text-sm">Identification of exact friction points preventing your website traffic from turning into booked calls.</p>
          </div>
          <div className="bg-secondary p-8 rounded-2xl border border-white/5">
            <h3 className="font-bold text-xl mb-4 text-white">3. Custom Roadmap</h3>
            <p className="text-muted text-sm">A tactical step-by-step PDF blueprint showing exactly what we would do to add 20 meetings to your calendar next month.</p>
          </div>
        </div>
      </div>

      <ContactSection />
      
      <Footer />
    </main>
  );
}
