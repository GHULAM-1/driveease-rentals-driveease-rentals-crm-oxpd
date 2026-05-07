import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  trend?: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, trend }) => {
  return (
    <div className="bg-slate-900 border border-white/10 p-4 rounded-xl">
      <div className="flex items-center">
        <div className="mr-4">{icon}</div>
        <div>
          <div className="text-slate-100 text-lg font-semibold">{value}</div>
          <div className="text-slate-400 text-sm">{label}</div>
          {trend !== undefined && (
            <div className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>{trend}%</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
