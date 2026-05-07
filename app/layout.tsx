import React from 'react';
import "./globals.css";
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'DriveEase Rentals CRM',
  description: 'Manage your rental fleet and bookings efficiently with DriveEase Rentals CRM.'
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 font-sans">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
