"use client"
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdKeyboardArrowDown } from "react-icons/md";
import DropdownMenuDashboard from './DropdownMenuDashboard';
import DropdownMenuManage from './DropdownMenuManage';
import MobileMenu from './MobileMenu';
import { useSession, signOut } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import Image from 'next/image';

const Navbar = () => {
    const [Drop1, setDrop1] = React.useState(false);
    const [Drop2, setDrop2] = React.useState(false);
    const [Drop3, setDrop3] = React.useState(false);

    const manageRef = React.useRef(null);
    const dashboardRef = useRef(null);

    const { data: session, status } = useSession();

    

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (manageRef.current && !manageRef.current.contains(e.target)) setDrop1(false);
            if (dashboardRef.current && !dashboardRef.current.contains(e.target)) setDrop2(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);

    }, [])


    return (
        <div className=' border-b border-gray-300 bg-white  z-100 sticky top-0'>
            <div className='max-w-[1200px] mx-auto px-4 flex justify-between min-h-15 items-center'>

                <div className='flex items-center gap-2' >
                    <IoMenu onClick={() => setDrop3(!Drop3)} className='text-xl block sm:hidden' />
                    <Link href="/" className='font-bold text-xl'>E-Shop</Link>
                </div>

                {/* Mobile SideBar Menu  */}
                {Drop3 && <MobileMenu setDrop3={setDrop3} />}

                <ul className='sm:flex gap-2 sm:gap-3 md:gap-4 hidden items-center text-sm'>
                    <li> <Link href="/">Home</Link></li>
                    <li> <Link href="/products">Products</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="contact">Contact</Link></li>
                    <li><Link href="cart">Cart</Link></li>
                    <li ref={manageRef} className='relative hidden md:block'>
                        <button className=' border flex items-center gap-1 border-gray-300 px-4 py-2 rounded-full text-xs'
                            onClick={() => setDrop1(!Drop1)}>Manage <MdKeyboardArrowDown />
                        </button>
                        {/* Dashboard Dropdown Menu  */}
                        {Drop1 && <span onClick={() => setDrop1(!Drop1)}><DropdownMenuDashboard /></span>}
                    </li>
                    <li ref={dashboardRef} className='relative'>
                        <button className=' border flex items-center gap-1 border-gray-300 px-4 py-2 rounded-full text-xs'
                            onClick={() => setDrop2(!Drop2)}> Dashboard <MdKeyboardArrowDown />
                        </button>
                        {/* Manage Dropdown Menu  */}
                        {Drop2 && <span onClick={() => setDrop2(!Drop2)}><DropdownMenuManage /></span>}
                    </li>
                </ul>


                {/* Mobile navbar Menu */}

                <ul className='flex items-center gap-4 sm:hidden relative hidden'>

                    <li className='relative'>
                        <button className=' border flex items-center gap-1 border-gray-300 px-4 py-2 rounded-full text-xs '>
                            Manage <MdKeyboardArrowDown />
                        </button>
                        <DropdownMenuDashboard />
                    </li>
                    <li className='relative'>
                        <button className=' border flex items-center gap-1 border-gray-300 px-4 py-2 rounded-full text-xs '>
                            Dashboard <MdKeyboardArrowDown />
                        </button>
                        <DropdownMenuManage />
                    </li>
                </ul>

                {!session?.user  ? <div className='flex gap-2 items-center sm:gap-3 text-sm md:gap-4'>
                    <Link href="/signup" className=''>Signup</Link>
                    <Link href={"/login"} className='border px-4 py-1 rounded-full border-gray-400'>Login</Link>
                </div> :
                    <div className='flex gap-2 items-center sm:gap-3 text-sm md:gap-4'>
                            <Image
                            src={session?.user.image}
                            alt={session?.user.name[0]}
                            width={32}
                            height={32}
                            className="rounded-full"/>
                    {/* <p className="text-gray-700 font-medium truncate max-w-[120px]">
                        {session.user.name}
                    </p>            */}
                                <button 
                            onClick={() => signOut()}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-all duration-300 font-medium"
                        >
                            <BiLogOut className="text-lg" />
                            
                        </button>
                    </div>}
            </div>
        </div>
    );
};

export default Navbar;