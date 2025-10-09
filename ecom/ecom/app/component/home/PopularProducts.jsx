"use client"
import { productsDummyData } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';
import { IoMdStar } from "react-icons/io";


const PopularProducts = () => {
    console.log(productsDummyData)
    return (
        <section className=' py-14'>
           <h1 className='text-2xl font-bold'>
               Popular Products
           </h1>
           <div className='mt-8'>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 '>
                    {
                        productsDummyData.map(product => <div
                        className='flex flex-col max-w-[200px] w-full  gap-2'
                        key={product._id}>
                            <Image
                            className='bg-gray-100 rounded-md hover:scale-105 duration-300'
                            src={product.image[0]} alt={product.name} width={300} height={300} />
                            <h2 className='font-bold text-base truncate'>{product.name}</h2>
                            <p className='text-sm text-gray-500 truncate'>{product.description}</p>
                            <div className='flex justify-between items-center'>
                                <p>4.5</p>
                                <p className='flex text-orange-600'>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar className='opacity-50' />

                                </p>
                            </div>

                            <div className='flex justify-between items-center'>
                                <p className='font-bold'>${product.price}</p>
                                <button className='border border-gray-300 px-4 py-1 text-xs rounded-full text-gray-500'>Buy Now</button>
                            </div>

                        </div>)   
                    }
                </div>
           </div>

           <div className='flex justify-center mt-8'>
     <button className='border border-gray-300 px-4 py-1  rounded text-gray-500'>
         View All
     </button>
           </div>
        </section>
    );
};

export default PopularProducts;