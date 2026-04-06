import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Growth Hub | NovaBridge Agency",
};

export default function BlogPage() {
  const posts = [
    { title: "Definitive Guide to Cold Email Deliverability in 2024", date: "Oct 24", slug: "guide-to-cold-email" },
    { title: "Why Your B2B Strategy is Failing (And How to Fix It)", date: "Oct 18", slug: "b2b-strategy-failing" },
    { title: "Building a High-Ticket Automated Pipeline", date: "Oct 12", slug: "high-ticket-automated-pipeline" },
  ];

  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      <div className="pt-40 pb-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold font-clash mb-6">Growth Intelligence.</h1>
        <p className="text-xl text-muted max-w-2xl mb-20">Insights, strategies, and exact blueprints we use to scale our partners.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="bg-secondary rounded-3xl p-8 border border-white/5 hover:border-primary/50 transition-all cursor-pointer h-full flex flex-col justify-between group">
                <div>
                  <div className="text-xs text-primary font-bold mb-4">{post.date}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted leading-relaxed">Discover actionable strategies for improving your funnel metrics and filling up your B2B calendar...</p>
                </div>
                <div className="mt-8 font-semibold text-sm hover:underline">Read Article →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
