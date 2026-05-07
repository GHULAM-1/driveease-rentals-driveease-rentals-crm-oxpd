import React from 'react';

interface BadgeProps {
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'default';
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'default', children }) => {
  const variantClasses = {
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    danger: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    default: 'bg-slate-700 text-slate-100',
  };

  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
