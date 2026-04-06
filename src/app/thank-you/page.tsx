import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Thank You | NovaBridge Agency",
};

export default function ThankYouPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col justify-between">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center container mx-auto px-6 py-40">
        <div className="text-center max-w-2xl">
          <div className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center text-4xl mx-auto mb-8 border-4 border-primary/40">
            ✓
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-clash mb-6">Request Received.</h1>
          <p className="text-xl text-muted mb-12">
            Your information has been securely transmitted. A growth architect will review your details and reach out within the next 24 business hours to schedule your personalized strategy session.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-colors">
              Return Home
            </Link>
            <Link href="/case-studies" className="px-8 py-4 bg-secondary text-white border border-white/10 font-bold rounded-full hover:bg-white/10 transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
