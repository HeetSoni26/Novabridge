"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ServicesOverview from "@/components/ServicesOverview";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative bg-background">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <Hero />
        <SocialProof />
        <ServicesOverview />
        <Process />
        <Testimonials />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
