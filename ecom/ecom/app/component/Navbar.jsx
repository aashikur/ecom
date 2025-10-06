import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between border-b border-gray-300 h-10 items-center'>
            <div>
                <h1>ECOM</h1>
            </div>
            <ul className='sm:flex gap-2 sm:gap-3 md:gap-4 hidden'>
                <li> <a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Cart</a></li>
            </ul>

            <ul className='inline-block sm:hidden'>
            menu
            </ul>

            <div className='flex gap-2 sm:gap-3 md:gap-4'>
                <button>Signup</button>
                <button className='border px-4 rounded-md'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;