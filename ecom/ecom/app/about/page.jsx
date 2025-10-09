import React from 'react';
import Container from '../components/Container';
import Image from 'next/image';
import { FaShoppingBag, FaUsers, FaGlobe, FaAward } from 'react-icons/fa';
import { assets } from '@/public/assets/assets';

const AboutPage = () => {
    const stats = [
        { icon: <FaShoppingBag />, number: "50K+", label: "Products" },
        { icon: <FaUsers />, number: "100K+", label: "Happy Customers" },
        { icon: <FaGlobe />, number: "30+", label: "Countries" },
        { icon: <FaAward />, number: "15+", label: "Awards" },
    ];
    
    

    return (
        <Container className='py-16'>
            {/* Hero Section */}
            <div className="relative h-[400px] mb-16 hidden">
                <Image
                    src="/about-hero.jpg"
                    alt="About Us Hero"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                            Transforming online shopping since 2015
                        </p>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="max-w-4xl mx-auto px-4 mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">
                    Founded in 2015, E-Shop began with a simple mission: to make quality products accessible to everyone. What started as a small online store has grown into a global marketplace, serving customers across 30+ countries.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Our commitment to excellence, customer satisfaction, and innovative shopping solutions has made us one of the fastest-growing e-commerce platforms in the world.
                </p>
            </div>

            {/* Stats Section */}
            <div className="bg-gray-50 py-16 mb-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center flex flex-col justify-center items-center gap-5">
                                <div className="text-blue-600 text-3xl mb-2">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold text-gray-900">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="max-w-6xl mx-auto px-4 mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {([
                        {
                            title: "Quality First",
                            description: "We ensure every product meets our high standards of quality and authenticity.",
                            image:  assets.boy_with_laptop_image
                        },
                        {
                            title: "Customer Centric",
                            description: "Your satisfaction is our top priority. We're here to serve you 24/7.",
                            image: assets.girl_with_earphone_image
                        },
                        {
                            title: "Innovation",
                            description: "Constantly evolving and improving to provide the best shopping experience.",
                            image:  assets.girl_with_headphone_image
                        }
                    ]).map((value, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                            <div className="relative h-48">
                                <Image
                                    src={value.image}
                                    alt={value.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default AboutPage;