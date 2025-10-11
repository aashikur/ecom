"use client"
import {useSession} from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const DropdownMenuDashboard = () => {
    const { data: session, status } = useSession();
    return (
        <div className='flex  items-center rounded-md gap-2 absolute top-10 right-0 w-[240px] bg-white border border-gray-300'>
          { !session &&   <div
                title='Login Required'
                // onClick={() => alert('Login Required')}
                className='inset-0 absolute cursor-not-allowed' >
            </div>}

            <ul className='flex flex-col w-full'>
                <Link href="/profile" className='px-4 py-2 hover:bg-gray-100'>Profile</Link>
                <Link href="/orders" className='px-4 py-2 hover:bg-gray-100'>Orders</Link>
                <Link href="/Settings" className='px-4 py-2 hover:bg-gray-100'>Settings</Link>

            </ul>
        </div>
    );
};

export default DropdownMenuDashboard;