'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiDownload, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function LeadsTable({ initialLeads }) {
  const [leads, setLeads] = useState(initialLeads);
  const [expandedRow, setExpandedRow] = useState(null);
  const router = useRouter();

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setLeads(leads.map(lead => 
          lead.id === id ? { ...lead, status } : lead
        ));
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Service Interest', 'Message', 'Status', 'Date'];
    const rows = leads.map(lead => [
      lead.name,
      lead.email,
      lead.phone,
      lead.serviceInterest || '',
      lead.message?.replace(/"/g, '""') || '',
      lead.status,
      new Date(lead.createdAt).toLocaleDateString('en-IN'),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-border-color flex items-center justify-between">
        <p className="text-text-muted text-sm">{leads.length} total leads</p>
        <button
          onClick={exportToCSV}
          className="flex items-center px-4 py-2 text-sm text-primary-navy border border-primary-navy rounded-lg hover:bg-primary-navy hover:text-white transition-colors"
        >
          <FiDownload className="w-4 h-4 mr-2" />
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-light-bg">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">Service</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-color">
            {leads.length > 0 ? (
              leads.map((lead) => (
                <>
                  <tr key={lead.id} className="hover:bg-light-bg cursor-pointer" onClick={() => toggleRow(lead.id)}>
                    <td className="px-6 py-4 text-sm text-text-dark">{lead.name}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">{lead.email}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">{lead.phone}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">{lead.serviceInterest || '-'}</td>
                    <td className="px-6 py-4">
                      <select
                        value={lead.status}
                        onChange={(e) => {
                          e.stopPropagation();
                          updateStatus(lead.id, e.target.value);
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className={`text-xs font-semibold px-2 py-1 rounded-full border-0 cursor-pointer ${
                          lead.status === 'new' ? 'bg-green-100 text-green-700' :
                          lead.status === 'contacted' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">
                      {new Date(lead.createdAt).toLocaleDateString('en-IN')}
                    </td>
                    <td className="px-6 py-4">
                      {expandedRow === lead.id ? (
                        <FiChevronUp className="w-4 h-4 text-text-muted" />
                      ) : (
                        <FiChevronDown className="w-4 h-4 text-text-muted" />
                      )}
                    </td>
                  </tr>
                  {expandedRow === lead.id && (
                    <tr key={`${lead.id}-expanded`}>
                      <td colSpan={7} className="px-6 py-4 bg-light-bg">
                        <div>
                          <p className="text-sm font-medium text-text-dark mb-2">Message:</p>
                          <p className="text-sm text-text-muted whitespace-pre-wrap">{lead.message || 'No message'}</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-text-muted">
                  No leads yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
