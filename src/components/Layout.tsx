import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './UserDashboard/Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const showSidebar = !location.pathname.startsWith('/e-commerce');

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <main className={`flex-grow ${showSidebar ? 'ml-64' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
