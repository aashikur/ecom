import Link from 'next/link';
import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    return (
        <div className=' border-b border-gray-300 '>
            <div className='max-w-[1200px] mx-auto px-4 flex justify-between min-h-15 items-center'>
                <div>
                  <Link href="/" className='font-bold text-xl'>E-Shop</Link>
                </div>
                <ul className='sm:flex gap-2 sm:gap-3 md:gap-4 hidden items-center'>
                    <li> <Link href="/">Home</Link></li>
                    <li> <Link href="/products">Products</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="contact">Contact</Link></li>
                    <li><Link href="cart">Cart</Link></li>
                    <li><button 
                    className='
                    border flex items-center gap-1 border-gray-300 px-4 py-2 rounded-full text-xs
                    '>Dashboard <MdKeyboardArrowDown /> </button></li>
                </ul>

                <ul className='flex items-center gap-4 sm:hidden'>
                    <li><IoMenu/></li>
                     <li><button 
                    className='
                    border flex items-center gap-1 border-gray-300 px-4 py-2 rounded-full text-xs
                    '>Dashboard <MdKeyboardArrowDown /> </button></li>
                </ul>

                <div className='flex gap-2 items-center sm:gap-3 text-sm md:gap-4'>
                    <Link href="/signup" className=''>Signup</Link>
                    <Link href={"/login"} className='border px-4 py-1 rounded-full border-gray-400'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;