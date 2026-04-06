import { PrismaClient, Lead } from "@prisma/client";

const prisma = new PrismaClient();

// This should normally be protected by auth (e.g. NextAuth)
export default async function AdminDashboard() {
  let leads: Lead[] = [];
  try {
    leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch leads", error);
  }

  const newLeadsCount = leads.filter((l: any) => l.status === "NEW").length;
  const qualifiedLeadsCount = leads.filter((l: any) => l.status === "QUALIFIED").length;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold font-clash">Pipeline Dashboard</h1>
        <div className="flex gap-4">
          <button className="bg-primary px-4 py-2 rounded text-sm font-bold">Export CSV</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-secondary p-6 rounded-2xl border border-white/5">
          <p className="text-muted text-sm mb-2">Total Leads</p>
          <p className="text-4xl font-bold">{leads.length}</p>
        </div>
        <div className="bg-secondary p-6 rounded-2xl border border-white/5">
          <p className="text-muted text-sm mb-2">New</p>
          <p className="text-4xl font-bold">{newLeadsCount}</p>
        </div>
        <div className="bg-secondary p-6 rounded-2xl border border-white/5 border-l-4 border-l-green-500">
          <p className="text-muted text-sm mb-2">Qualified</p>
          <p className="text-4xl font-bold">{qualifiedLeadsCount}</p>
        </div>
      </div>

      <div className="bg-secondary border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm text-muted">
          <thead className="bg-[#111] text-white">
            <tr>
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Email</th>
              <th className="p-4 font-medium">Budget</th>
              <th className="p-4 font-medium">Score</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {leads.length === 0 && (
              <tr><td colSpan={6} className="p-8 text-center">No leads available</td></tr>
            )}
            {leads.map((lead: any) => (
              <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4 text-white">{lead.name}</td>
                <td className="p-4">{lead.email}</td>
                <td className="p-4">{lead.budget || "-"}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${lead.score > 30 ? 'bg-green-500/20 text-green-400' : 'bg-white/10'}`}>
                    {lead.score}
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {lead.status}
                  </span>
                </td>
                <td className="p-4">{new Date(lead.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
