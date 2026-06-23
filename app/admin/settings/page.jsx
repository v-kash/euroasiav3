'use client';

import { useSession } from 'next-auth/react';

export default function AdminSettingsPage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary-navy mb-8">Settings</h1>

      <div className="max-w-2xl space-y-6">
        {/* Profile */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-primary-navy mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">Email</label>
              <input
                type="email"
                value={session?.user?.email || ''}
                disabled
                className="w-full px-4 py-3 rounded-lg border border-border-color bg-light-bg text-text-muted"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">Name</label>
              <input
                type="text"
                value={session?.user?.name || ''}
                disabled
                className="w-full px-4 py-3 rounded-lg border border-border-color bg-light-bg text-text-muted"
              />
            </div>
          </div>
        </div>

        {/* Site Settings */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-primary-navy mb-4">Site Information</h2>
          <div className="space-y-4 text-sm text-text-muted">
            <p><strong>Company:</strong> Euroasia Aquatic Pvt Ltd</p>
            <p><strong>Email:</strong> info@euroasias.com</p>
            <p><strong>Phone:</strong> +91-9898921290</p>
            <p><strong>WhatsApp:</strong> +91-9898921290</p>
            <p><strong>Address:</strong> 105–107, Athena Avenue, Gota, Ahmedabad, Gujarat – 382481</p>
          </div>
        </div>

        {/* Database */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-primary-navy mb-4">Database</h2>
          <p className="text-sm text-text-muted mb-4">
            The application uses MySQL with Sequelize ORM. Database settings are configured via environment variables.
          </p>
          <p className="text-xs text-text-muted bg-light-bg p-3 rounded-lg font-mono">
            DATABASE_URL=mysql://user:password@localhost:3306/euroasia_db
          </p>
        </div>
      </div>
    </div>
  );
}
