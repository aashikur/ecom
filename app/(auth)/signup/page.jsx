import Container from '@/app/components/Container';
import React from 'react';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';

const SignUpPage = () => {
    const benefits = [
        {
            title: "Exclusive Deals",
            description: "Get access to member-only discounts and early bird offers"
        },
        {
            title: "Fast Checkout",
            description: "Save your details for a quicker shopping experience"
        },
        {
            title: "Order Tracking",
            description: "Track your orders and shopping history easily"
        },
        {
            title: "Rewards Program",
            description: "Earn points with every purchase and get special rewards"
        }
    ];

    return (
        <Container>
            <div className="min-h-[80vh] py-12">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Sign Up Form Section (1/3) */}
                        <div className="w-full md:w-1/2 xl:w-1/3 p-8 md:p-12 bg-white">
                            <div className="max-w-sm mx-auto">
                                <h2 className="text-3xl font-bold text-gray-800 mb-8">Create Account</h2>

                                {/* Google Sign Up */}
                                <div className="mt-6">
                                    <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                                        <FaGoogle className="text-red-500" />
                                        Sign up with Google
                                    </button>
                                </div> 

                                <div className="divider relative text-center py-4">
                                    <div className="line w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-t border-gray-200 z-0"></div>
                                    <span className='text-gray-600 bg-white z-10 '>or</span>
                                </div>

                                {/* Sign Up Form */}
                                <form className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Create a password"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Confirm your password"
                                        />
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label className="ml-2 block text-sm text-gray-700">
                                            I agree to the <Link href="/terms" className="text-blue-600 hover:text-blue-700">Terms</Link> and <Link href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                                    >
                                        Create Account
                                    </button>
                                </form>


                                {/* Login Link */}
                                <p className="mt-8 text-center text-gray-600">
                                    Already have an account?{' '}
                                    <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                                        Log in
                                    </Link>
                                </p>
                            </div>
                        </div>

                        {/* Benefits Section (2/3) */}
                        <div className="w-full md:w-1/2 xl:w-2/3 p-8 md:pt-12 xl:p-12 bg-gray-50">
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                                    Why Join E-Shop?
                                </h3>
                                
                                <div className="grid lg:grid-cols-2 gap-8">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-gray-600">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                    <h4 className="text-lg font-semibold text-blue-900 mb-2">
                                        Special Offer!
                                    </h4>
                                    <p className="text-blue-700">
                                        Sign up now and get 20% off on your first purchase. Limited time offer!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SignUpPage;