import React, { useState } from 'react';
import { AdminSidebar } from './components/admin/layout/AdminSidebar';
import { AdminNavbar } from './components/admin/layout/AdminNavbar';
import { Dashboard } from './pages/admin/Dashboard';
import { ProductManagement } from './pages/admin/ProductManagement';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <ProductManagement />;
      case 'orders':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">Orders Page</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      case 'customers':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">Customers Page</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">Analytics Page</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">Settings Page</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      case 'logout':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">Logout</h2>
            <p className="text-gray-600 mt-2">Anda telah keluar dari sistem.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar 
        activeMenu={activeMenu}
        onMenuClick={setActiveMenu}
        isMobileOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Navbar */}
        <AdminNavbar onMenuToggle={() => setIsMobileSidebarOpen(true)} />

        {/* Page Content */}
        <main className="p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}