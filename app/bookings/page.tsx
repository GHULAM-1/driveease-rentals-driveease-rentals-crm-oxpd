import React from 'react';
import Badge from '@/components/Badge';
import mockData from '@/lib/mockData';

const BookingSystemPage = () => {
  return (
    <div className="p-8 bg-slate-950 text-white min-h-screen">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Booking System</h1>
        <button className="px-4 py-2 bg-indigo-600 rounded-md">+ Add New Booking</button>
      </header>

      <section className="mb-4">
        <input
          type="text"
          placeholder="Search or Filter Bookings"
          className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockData.bookings.length ? (
            mockData.bookings.map((booking) => (
              <div key={booking.id} className="p-4 bg-slate-800 rounded-md">
                <h3 className="font-semibold mb-2">{booking.customerName}</h3>
                <p>Car: {booking.carModel}</p>
                <p>Date: {booking.date}</p>
                <p>Status: <Badge text={booking.status} /></p>
              </div>
            ))
          ) : (
            <div className="text-center text-slate-400">No bookings available</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingSystemPage;
