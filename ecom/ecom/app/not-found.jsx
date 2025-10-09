import React from 'react';
import Link from 'next/link';
import Button from './ui/Button';

const NotFound = () => {
    return (
        <div className="h-[70vh] flex items-center justify-center bg-gray-100">
            <div className="max-w-xl p-8 text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className=""
                >
                    <Button text="Go Home" />
                </Link>
            </div>
        </div>
    );
};

export default NotFound;