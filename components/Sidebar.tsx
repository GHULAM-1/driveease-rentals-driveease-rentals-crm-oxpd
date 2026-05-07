import React from 'react';
import { usePathname } from 'next/navigation';
import { Home, Car, Calendar, User, FileText, BarChart } from 'lucide-react';

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: <Home /> },
    { name: 'Fleet Management', href: '/fleet', icon: <Car /> },
    { name: 'Bookings', href: '/bookings', icon: <Calendar /> },
    { name: 'Customers', href: '/customers', icon: <User /> },
    { name: 'Payments', href: '/payments', icon: <FileText /> },
    { name: 'Reports', href: '/reports', icon: <BarChart /> },
  ];

  return (
    <aside className="w-60 bg-slate-900 h-screen fixed border-r border-white/10 p-6">
      <div className="text-lg font-bold text-brand-accent">DriveEase Rentals</div>
      <div className="text-sm text-slate-400 mb-6">Client: DriveEase Rentals</div>
      <nav>
        <ul className="space-y-2">
          {navItems.map(item => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`flex items-center gap-2 p-2 rounded-md hover:bg-slate-800 transition-colors ${pathname === item.href ? 'bg-slate-800' : ''}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
