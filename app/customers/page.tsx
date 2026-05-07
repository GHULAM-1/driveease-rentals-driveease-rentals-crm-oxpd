import React from 'react';
import Badge from '@/components/Badge';
import mockData from '@/lib/mockData';

const CustomerManagementPage = () => {
  return (
    <div className="p-8 bg-slate-950 text-white min-h-screen">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Customer Management</h1>
        <button className="px-4 py-2 bg-indigo-600 rounded-md">+ Add New Customer</button>
      </header>

      <section className="mb-4">
        <input
          type="text"
          placeholder="Search or Filter Customers"
          className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockData.customersList.length ? (
            mockData.customersList.map((customer) => (
              <div key={customer.id} className="p-4 bg-slate-800 rounded-md">
                <h3 className="font-semibold mb-2">{customer.name}</h3>
                <p>Email: {customer.email}</p>
                <p>Status: <Badge text={customer.status} /></p>
              </div>
            ))
          ) : (
            <div className="text-center text-slate-400">No customers found</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CustomerManagementPage;
