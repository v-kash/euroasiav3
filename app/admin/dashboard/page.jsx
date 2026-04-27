import Link from "next/link";
import { FiFileText, FiUsers, FiEye, FiEdit3, FiPlus } from "react-icons/fi";

async function getStats() {
  try {
    const { Blog, Lead } = await import("@/lib/models");

    const [totalBlogs, publishedBlogs, draftBlogs, totalLeads, newLeads] =
      await Promise.all([
        Blog.count(),
        Blog.count({ where: { status: "published" } }),
        Blog.count({ where: { status: "draft" } }),
        Lead.count(),
        Lead.count({ where: { status: "new" } }),
      ]);

    return { totalBlogs, publishedBlogs, draftBlogs, totalLeads, newLeads };
  } catch (error) {
    console.error("Error fetching stats:", error);
    return {
      totalBlogs: 0,
      publishedBlogs: 0,
      draftBlogs: 0,
      totalLeads: 0,
      newLeads: 0,
    };
  }
}

async function getRecentLeads() {
  try {
    const { Lead } = await import("@/lib/models");
    const leads = await Lead.findAll({
      order: [["createdAt", "DESC"]],
      limit: 10,
    });
    return leads.map((lead) => lead.toJSON());
  } catch (error) {
    console.error("Error fetching leads:", error);
    return [];
  }
}

export default async function AdminDashboard() {
  const stats = await getStats();
  const recentLeads = await getRecentLeads();

  const statCards = [
    {
      title: "Total Blogs",
      value: stats.totalBlogs,
      icon: FiFileText,
      color: "bg-blue-500",
    },
    {
      title: "Published",
      value: stats.publishedBlogs,
      icon: FiEye,
      color: "bg-green-500",
    },
    {
      title: "Drafts",
      value: stats.draftBlogs,
      icon: FiEdit3,
      color: "bg-yellow-500",
    },
    {
      title: "Total Leads",
      value: stats.totalLeads,
      icon: FiUsers,
      color: "bg-purple-500",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-primary-navy">Dashboard</h1>
        <div className="flex space-x-4">
          <Link
            href="/admin/blogs/new"
            className="flex items-center px-4 py-2 bg-primary-navy text-white rounded-lg hover:bg-secondary-navy transition-colors"
          >
            <FiPlus className="w-5 h-5 mr-2" />
            New Blog
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-sm">{stat.title}</p>
                <p className="text-3xl font-bold text-primary-navy mt-1">
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Link
          href="/admin/blogs/new"
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow flex items-center space-x-4"
        >
          <div className="w-12 h-12 bg-primary-navy/10 rounded-lg flex items-center justify-center">
            <FiFileText className="w-6 h-6 text-primary-navy" />
          </div>
          <div>
            <h3 className="font-semibold text-primary-navy">Create New Blog</h3>
            <p className="text-text-muted text-sm">
              Write and publish a new article
            </p>
          </div>
        </Link>
        <Link
          href="/admin/leads"
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow flex items-center space-x-4"
        >
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
            <FiUsers className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-primary-navy">View Leads</h3>
            <p className="text-text-muted text-sm">
              {stats.newLeads} new leads waiting
            </p>
          </div>
        </Link>
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border-color">
          <h2 className="text-lg font-semibold text-primary-navy">
            Recent Leads
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-light-bg">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              {recentLeads.length > 0 ? (
                recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-light-bg">
                    <td className="px-6 py-4 text-sm text-text-dark">
                      {lead.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">
                      {lead.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">
                      {lead.serviceInterest || "-"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                          lead.status === "new"
                            ? "bg-green-100 text-green-700"
                            : lead.status === "contacted"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-muted">
                      {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-text-muted"
                  >
                    No leads yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {recentLeads.length > 0 && (
          <div className="px-6 py-4 border-t border-border-color">
            <Link
              href="/admin/leads"
              className="text-primary-navy hover:text-accent text-sm font-medium"
            >
              View all leads →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
