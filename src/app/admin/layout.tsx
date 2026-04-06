import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin CRM | NovaBridge",
  description: "Internal CRM Dashboard",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="flex h-screen overflow-hidden">
        <aside className="w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col">
          <div className="p-6 border-b border-white/5">
            <div className="text-xl font-bold tracking-tighter">
              NovaBridge<span className="text-primary text-sm">/CRM</span>
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <a href="#" className="block px-4 py-3 bg-white/5 text-white rounded-xl">Pipeline</a>
            <a href="#" className="block px-4 py-3 text-muted hover:bg-white/5 hover:text-white rounded-xl transition-colors">Analytics</a>
            <a href="#" className="block px-4 py-3 text-muted hover:bg-white/5 hover:text-white rounded-xl transition-colors">Campaigns</a>
            <a href="#" className="block px-4 py-3 text-muted hover:bg-white/5 hover:text-white rounded-xl transition-colors">Settings</a>
          </nav>
        </aside>
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
