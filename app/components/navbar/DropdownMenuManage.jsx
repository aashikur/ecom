"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const DropdownMenuManage = () => {

     const { data: session, status } = useSession();
     
    return (
        <div className='flex  items-center rounded-md gap-2 absolute top-10 left-0 w-[240px] bg-white border border-gray-300'>

         { !session &&  <div
                title='Login Required'
                onClick={() => alert('Login Required')}
                className='inset-0 absolute cursor-not-allowed' >
            </div>}

            <ul className='flex flex-col w-full'>
                <Link href="/add-product" className="px-4 py-2 hover:bg-gray-100">Add Product</Link>
                <Link href="/manage-products" className="px-4 py-2 hover:bg-gray-100">Manage Products</Link>
                <Link href="/users" className="px-4 py-2 hover:bg-gray-100">Users</Link>

            </ul>
        </div>
    );
};

export default DropdownMenuManage;