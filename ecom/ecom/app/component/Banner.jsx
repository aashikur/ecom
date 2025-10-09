import Image from 'next/image';
import React from 'react';
import Button from '../ui/Button';



const Banner = () => {
    return (
        <div className='pt-4 md:pt-10 relative'>
            <Image 
             className='rounded-md'
            src="/assets/banner.jpg" alt="Banner" width={1920} height={1080} />
            <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
                <div className='w-2/3 max-w-[600px] px-4'>
                    <div className='max-w-[400px] space-y-3'>
                        <h1 className='text-2xl md:text-4xl font-bold text-white'>
                            Welcome to E-Shop
                        </h1>
                        <h3 className='text-sm md:text-lg text-white opacity-75'>
                            Your Trusted Online Shopping Destination to Quality Products at Affordable Prices </h3>
                        <Button className="" text="Shop Now" type="primary" />
                        <Button text="Learn More" type="ghost" arrow="true" />


                    </div>

                </div>
                <div className="w-1/3"></div>

            </div>
        </div>
    );
};

export default Banner;