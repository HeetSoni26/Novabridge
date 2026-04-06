import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | NovaBridge Agency",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      <div className="pt-40 pb-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-secondary p-12 rounded-3xl border border-white/5">
          <h1 className="text-4xl font-bold font-clash mb-10 border-b border-white/10 pb-6">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none text-muted">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h3 className="text-white mt-8 mb-4 font-bold text-xl">1. Information We Collect</h3>
            <p>We collect information you directly provide to us when you fill out a form, request an audit, or subscribe to our materials. This includes your name, email, budget metrics, and company parameters.</p>
            
            <h3 className="text-white mt-8 mb-4 font-bold text-xl">2. Automated Data Engine Collection</h3>
            <p>Our autonomous tracking pixels monitor interaction depth and behavior analytics to generate automated lead scorings. We utilize localized cookies and server-side logic strictly adhering to standard encryption protocols.</p>
            
            <h3 className="text-white mt-8 mb-4 font-bold text-xl">3. How We Use the Information</h3>
            <p>The captured lead metrics are routed to internal NovaBridge CRMs for sales prioritization. Information is not sold to external vendors.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
