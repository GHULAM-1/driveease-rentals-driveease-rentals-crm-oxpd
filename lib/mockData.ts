export type Car = {
  registration: string;
  model: string;
  year: number;
  location: string;
  status: 'available' | 'rented' | 'in service';
  serviceHistory: Array<{ date: string; service: string }>;
};

export type Booking = {
  id: string;
  carRegistration: string;
  customerName: string;
  fromDate: string;
  toDate: string;
  status: 'confirmed' | 'pending' | 'completed';
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  documents: {
    cnic: string;
    license: string;
  };
  rentalHistory: string[];
};

export type Payment = {
  bookingId: string;
  amount: number;
  date: string;
};

export const cars: Car[] = [
  {
    registration: 'ABC-123',
    model: 'Toyota Corolla',
    year: 2020,
    location: 'Main Branch',
    status: 'available',
    serviceHistory: [
      { date: '2023-01-10', service: 'Oil Change' },
      { date: '2023-03-15', service: 'Tire Replacement' }
    ]
  },
  // More cars
];

export const bookings: Booking[] = [
  {
    id: 'B001',
    carRegistration: 'ABC-123',
    customerName: 'Jane Smith',
    fromDate: '2023-11-01',
    toDate: '2023-11-10',
    status: 'confirmed'
  },
  // More bookings
];

export const customers: Customer[] = [
  {
    id: 'C001',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1234567890',
    documents: {
      cnic: '1234567890123',
      license: 'LSC123456'
    },
    rentalHistory: ['B001']
  },
  // More customers
];

export const payments: Payment[] = [
  {
    bookingId: 'B001',
    amount: 200,
    date: '2023-11-02'
  },
  // More payments
];
