"use client"
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const MobileMenu = ({ setDrop3 }) => {

    const [manageOpen, setManageOpen] = React.useState(false);
    const [dashboardOpen, setDashboardOpen] = React.useState(false);

    return (
        <div className='flex min-h-screen fixed top-15 left-0 w-full bg-black/10 border border-gray-300'>


            <div className='flex min-h-screen fixed top-15 left-0 w-[350px] bg-white border border-gray-300'>
                <button
                onClick={() => setDrop3(false)}
                className='absolute top-0 right-0 p-4 translate-x-20 text-white cursor-pointer hover:text-gray-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className='flex  items-center rounded-md gap-2 absolute top-0 left-0 w-[348px] bg-white '>


                    <ul className="flex flex-col w-full">
                        {/* Main Routes */}
                        <Link onClick={() => {setDrop3(!Drop3)}} href="/" className="px-4 py-2 hover:bg-gray-100">Home</Link>
                        <Link onClick={() => {setDrop3(!Drop3)}} href="/products" className="px-4 py-2 hover:bg-gray-100">Products</Link>
                        <Link onClick={() => {setDrop3(!Drop3)}} href="/about" className="px-4 py-2 hover:bg-gray-100">About</Link>
                        <Link onClick={() => {setDrop3(!Drop3)}} href="/contact" className="px-4 py-2 hover:bg-gray-100">Contact</Link>
                        <Link onClick={() => {setDrop3(!Drop3)}} href="/cart" className="px-4 py-2 hover:bg-gray-100">Cart</Link>

                        {/* Manage Dropdown */}
                        <div className="border-t border-gray-200 mt-2">
                            <button
                                onClick={() => setManageOpen(!manageOpen)}
                                className="w-full text-left px-4 py-2 font-medium flex justify-between items-center hover:bg-gray-100 transition-all"
                            >
                                Manage
                                <MdKeyboardArrowDown
                                    className={`transform transition-transform duration-200 ${manageOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${manageOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <Link onClick={() => {setDrop3(!Drop3)}} href="/add-product" className="block px-6 py-2 text-sm hover:bg-gray-100">
                                    Add Product
                                </Link>
                                <Link onClick={() => {setDrop3(!Drop3)}} href="/manage-products" className="block px-6 py-2 text-sm hover:bg-gray-100">
                                    Manage Products
                                </Link>
                                <Link onClick={() => {setDrop3(!Drop3)}} href="/users" className="block px-6 py-2 text-sm hover:bg-gray-100">
                                    Users
                                </Link>
                            </div>
                        </div>

                        {/* Dashboard Dropdown */}
                        <div className="border-t border-gray-200 mt-2">
                            <button
                                onClick={() => setDashboardOpen(!dashboardOpen)}
                                className="w-full text-left px-4 py-2 font-medium flex justify-between items-center hover:bg-gray-100 transition-all"
                            >
                                Dashboard
                                <MdKeyboardArrowDown
                                    className={`transform transition-transform duration-200 ${dashboardOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${dashboardOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <Link onClick={() => {setDrop3(!Drop3)}} href="/profile" className="block px-6 py-2 text-sm hover:bg-gray-100">
                                    Profile
                                </Link>
                                <Link onClick={() => {setDrop3(!Drop3)}} href="/orders" className="block px-6 py-2 text-sm hover:bg-gray-100">
                                    Orders
                                </Link>
                                <Link onClick={() => {setDrop3(!Drop3)}} href="/settings" className="block px-6 py-2 text-sm hover:bg-gray-100">
                                    Settings
                                </Link>
                            </div>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default MobileMenu;