import Image from 'next/image';
import React from 'react';
import Button from '../ui/Button';

const Banner = () => {
    return (
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image 
                    src="/assets/banner.jpg" 
                    alt="Banner"
                    width="1920"
                    height="1080"
                    decoding="async"
                    priority
                    className="object-cover object-right w-full h-full filter brightness-30 sm:brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-full">
                    <div className="w-full md:w-2/3 lg:w-1/2 space-y-6">
                        {/* Subtitle */}
                        <span className="inline-block px-4 py-1 bg-blue-600/20 backdrop-blur-sm text-blue-400 rounded-full text-sm font-medium tracking-wide">
                            Welcome to Premium Shopping
                        </span>

                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Discover Luxury<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                at Your Fingertips
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                            Experience exceptional quality and unmatched elegance with our curated collection of premium products.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button 
                                text="Shop Collection" 
                                type="primary"
                                className="px-8 py-3 text-lg hover:scale-105 transition-transform "
                            />
                            <Button 
                                text="Watch Video" 
                                type="ghost" 
                                arrow="true"
                                className="px-8 py-3 text-lg hover:scale-105 transition-transform"
                            />
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-white">50K+</div>
                                <div className="text-gray-400">Products</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">100+</div>
                                <div className="text-gray-400">Brands</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">250K+</div>
                                <div className="text-gray-400">Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
        </div>
    );
};

export default Banner;