'use client';

import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import AdminSidebar from '@/components/admin/Sidebar';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  return (
    <SessionProvider>
      {isLoginPage ? (
        <>{children}</>
      ) : (
        <div className="min-h-screen bg-light-bg">
          <AdminSidebar />
          <main className="lg:ml-64 min-h-screen">
            <div className="p-6 lg:p-8">{children}</div>
          </main>
        </div>
      )}
    </SessionProvider>
  );
}
