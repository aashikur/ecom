import Container from '@/app/components/Container';
import { productsDummyData } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Page = ({params}) => {
    const {details} = params;
    const product = productsDummyData.find(product => product._id === details) || {};

    return (
        <Container className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-square relative rounded-lg overflow-hidden border">
                        <Image
                            src={product.image[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.image.map((img, index) => (
                            <div key={index} className="aspect-square relative rounded-lg overflow-hidden border cursor-pointer hover:border-blue-500">
                                <Image
                                    src={img}
                                    alt={`${product.name} - ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Product Details */}
                <div className="space-y-6">
                    {/* Category */}
                    <div className="text-sm text-blue-600 font-medium">
                        {product.category}
                    </div>

                    {/* Product Name */}
                    <h1 className="text-3xl font-bold text-gray-900">
                        {product.name}
                    </h1>

                    {/* Price */}
                    <div className="flex items-baseline gap-4">
                        <span className="text-2xl font-bold text-gray-900">
                            ${product.offerPrice}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                            ${product.price}
                        </span>
                        <span className="text-green-600 font-medium">
                            {Math.round(((product.price - product.offerPrice) / product.price) * 100)}% OFF
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Stock Status */}
                    <div className="flex items-center gap-2 text-green-600">
                        <IoMdCheckmarkCircleOutline className="text-xl" />
                        <span>In Stock</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                            <FaShoppingCart />
                            Add to Cart
                        </button>
                        <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                            Buy Now
                        </button>
                        <button className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                            <FaHeart className="text-gray-400 hover:text-red-500" />
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="border-t pt-6 mt-8">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <h3 className="font-medium text-gray-900">Highlights</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Premium Quality</li>
                                    <li>• 1 Year Warranty</li>
                                    <li>• Free Delivery</li>
                                    <li>• Genuine Product</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-gray-900">Delivery</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Free standard delivery</li>
                                    <li>• Express delivery available</li>
                                    <li>• 30-day return policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Page;

