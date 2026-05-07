import React from 'react';
import Badge from '@/components/Badge';
import mockData from '@/lib/mockData';

const FleetManagementPage = () => {
  return (
    <div className="p-8 bg-slate-950 text-white min-h-screen">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Fleet Management</h1>
        <button className="px-4 py-2 bg-indigo-600 rounded-md">+ Add New</button>
      </header>

      <section className="mb-4">
        <input
          type="text"
          placeholder="Search or Filter Cars"
          className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockData.fleet.length ? (
            mockData.fleet.map((car) => (
              <div key={car.id} className="p-4 bg-slate-800 rounded-md">
                <h3 className="font-semibold mb-2">{car.model}</h3>
                <p>Registration: {car.registration}</p>
                <p>Year: {car.year}</p>
                <p>Location: {car.location}</p>
                <p>Status: <Badge text={car.status} /></p>
              </div>
            ))
          ) : (
            <div className="text-center text-slate-400">No cars available</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FleetManagementPage;
