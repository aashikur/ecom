import React from 'react';

const Button = ({ text, type = 'primary', className = '' }) => {
  // Base styles for all buttons
  const base =
    'px-8 py-2 rounded-md inline-block text-sm md:text-base font-medium cursor-pointer transition-all duration-200';

  // Conditional styling based on type
  const buttonClass =
    type === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600 text-white'
      : type === 'outline'
      ? 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
      : type === 'ghost'
      ? 'text-blue-500 hover:bg-blue-100'
      : 'bg-gray-300 hover:bg-gray-400 text-gray-800';

  return <div className={`${base} ${buttonClass} ${className}`}>{text}</div>;
};

export default Button;
