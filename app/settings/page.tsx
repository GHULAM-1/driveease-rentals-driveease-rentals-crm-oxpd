import React from 'react';
import mockData from '@/lib/mockData';

const SettingsPage = () => {
  return (
    <div className="p-8 bg-slate-950 text-white min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
      </header>

      <section className="mb-8">
        <div className="p-4 bg-slate-800 rounded-md mb-4">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <form>
            <div className="mb-4">
              <label className="block text-slate-300 mb-2">Name</label>
              <input type="text" value={mockData.profile.name} className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md" readOnly />
            </div>
            <div>
              <label className="block text-slate-300 mb-2">Email</label>
              <input type="email" value={mockData.profile.email} className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md" readOnly />
            </div>
          </form>
        </div>

        <div className="p-4 bg-slate-800 rounded-md mb-4">
          <h2 className="text-2xl font-semibold mb-4">Branches</h2>
          {/* Additional mock data can be added here for branches */}
        </div>

        <div className="p-4 bg-slate-800 rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          {/* Additional mock data can be added here for notifications */}
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
