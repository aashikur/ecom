import Container from '@/app/components/Container';
import React from 'react';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import AuthButton from '@/app/components/AuthButton';

const LoginPage = () => {
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
                        {/* Login Form Section (1/3) */}
                        <div className="w-full md:w-1/3 p-8 md:p-12 bg-white">
                            <div className="max-w-sm mx-auto">
                                <h2 className="text-3xl font-bold text-gray-800 mb-8">Welcome Back</h2>


                                {/* Google Sign In */}
                                <div className='my-6 flex justify-center'>
                                    <AuthButton className="w-full py-3 text-center" />
                                </div>

                                <div className="divider relative text-center py-4">
                                    <div className="line w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-t border-gray-200 z-0"></div>
                                    <span className='text-gray-600 bg-white z-10 '>or</span>
                                </div>

                                {/* Login Form */}
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Enter your password"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <label className="ml-2 block text-sm text-gray-700">
                                                Remember me
                                            </label>
                                        </div>
                                        <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                                    >
                                        Sign In
                                    </button>
                                </form>



                                {/* Sign Up Link */}
                                <p className="mt-8 text-center text-gray-600">
                                    Don't have an account?{' '}
                                    <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </div>

                        {/* Benefits Section (2/3) */}
                        <div className="w-full md:w-2/3 p-8 md:p-12 bg-gray-50">
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                                    Why Join E-Shop?
                                </h3>

                                <div className="grid md:grid-cols-2 gap-8">
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

export default LoginPage;