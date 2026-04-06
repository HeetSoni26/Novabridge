export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 font-clash">
              NovaBridge<span className="text-primary">.</span>
            </h3>
            <p className="text-muted max-w-sm mb-8">
              The premier client-acquisition partner for B2B tech companies and elite consulting firms.
            </p>
            <div className="flex items-center gap-4">
              {['Twitter', 'LinkedIn', 'YouTube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-medium hover:bg-white hover:text-black transition-colors">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4 text-muted text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Cold Email Systems</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sales Funnels</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SEO Content Hubs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-muted text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Our Approach</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-muted text-xs">
          <p>© {new Date().getFullYear()} NovaBridge Agency. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
