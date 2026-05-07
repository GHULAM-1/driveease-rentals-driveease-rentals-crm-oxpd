import React from 'react';
import StatCard from '@/components/StatCard';
import Badge from '@/components/Badge';
import mockData from '@/lib/mockData';

const DashboardPage = () => {
  const actionPoints = [
    { title: 'Fleet Management Module', status: 'In Progress' },
    { title: 'Booking System', status: 'Planned' },
    { title: 'Customer Management Module', status: 'Planned' },
    { title: 'Payments and Invoicing Module', status: 'Planned' },
    { title: 'Branch-Level Access Control', status: 'Done' },
    { title: 'Public Booking Inquiry Form', status: 'Planned' },
    { title: 'Vehicle Handover and Return Checklist', status: 'In Progress' },
    { title: 'Owner Dashboard and Reports', status: 'Planned' },
  ];

  return (
    <div className="p-8 bg-slate-950 text-white min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">DriveEase Rentals CRM</h1>
        <p className="text-lg text-slate-300">Welcome to your Dashboard</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Cars" value={mockData.totalCars} />
        <StatCard title="Active Bookings" value={mockData.activeBookings} />
        <StatCard title="Monthly Revenue" value={`$${mockData.monthlyRevenue}`} />
        <StatCard title="Customers" value={mockData.customers} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          {mockData.recentActivity.slice(0, 8).map((activity, index) => (
            <li key={index} className="p-4 bg-slate-800 rounded-md">
              <span>{activity.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Action Points Progress</h2>
        <ul className="space-y-2">
          {actionPoints.map((action, index) => (
            <li key={index} className="flex items-center justify-between p-4 bg-slate-800 rounded-md">
              <span>{action.title}</span>
              <Badge text={action.status} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DashboardPage;
