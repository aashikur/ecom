import React from 'react';
import { IoArrowForward } from "react-icons/io5";


const Button = ({ text, type = 'primary', className = '', arrow = false }) => {
  // Base styles for all buttons
  const base =
    'px-4 md:px-8 py-2 rounded-full inline-block text-sm md:text-base font-medium cursor-pointer transition-all duration-200 group';

  // Conditional styling based on type
  const buttonClass =
    type === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600 text-white'
      : type === 'outline'
      ? 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
      : type === 'ghost'
      ? 'text-white'
      : 'bg-gray-300 hover:bg-gray-400 text-gray-800';

  return <div className={`${base} ${buttonClass} ${className}`}>{text} {arrow && <IoArrowForward className='inline-block -rotate-45 duration-75 group-hover:scale-120 group-hover:-rotate-30' />}</div>;
};

export default Button;
