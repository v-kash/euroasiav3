import LeadsTable from '@/components/admin/LeadsTable';

async function getLeads() {
  try {
    const { Lead } = await import('@/lib/models');
    const leads = await Lead.findAll({
      order: [['createdAt', 'DESC']],
    });
    return leads.map(lead => lead.toJSON());
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
}

export default async function AdminLeadsPage() {
  const leads = await getLeads();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-primary-navy">Leads</h1>
      </div>

      <LeadsTable initialLeads={leads} />
    </div>
  );
}
