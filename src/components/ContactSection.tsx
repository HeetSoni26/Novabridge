"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#0A0A0A] relative z-10">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-primary/20 to-background border border-primary/20 rounded-[3rem] p-8 md:p-20 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-clash">
              Ready to <br/> scale up?
            </h2>
            <p className="text-xl text-muted mb-10">
              Get a free technical audit of your current acquisition funnel and a customized roadmap to 10x your booked meetings.
            </p>
            <div className="space-y-4 text-sm font-medium">
              <p className="flex items-center gap-3">✓ Average ROI 340%</p>
              <p className="flex items-center gap-3">✓ Done-For-You Infrastructure</p>
              <p className="flex items-center gap-3">✓ Pay-per-performance options</p>
            </div>
          </div>

          <div className="lg:w-1/2 bg-secondary rounded-3xl p-8 md:p-10 border border-white/10">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-black mb-6 text-2xl">✓</div>
                <h3 className="text-2xl font-bold mb-2">Audit Requested</h3>
                <p className="text-muted">We will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Your Name</label>
                  <input required
                    type="text" 
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Work Email</label>
                  <input required
                    type="email" 
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Monthly Budget</label>
                  <select 
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  >
                    <option value="">Select Range</option>
                    <option value="< $2k">Under $2,000</option>
                    <option value="$2k - $5k">$2,000 - $5,000</option>
                    <option value="$5k+">$5,000+</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full magnetic py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-primary hover:text-white transition-all disabled:opacity-50"
                >
                  {status === "loading" ? "Submitting..." : "Get Free Audit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
