"use client";
import React from 'react';
import { FaBox, FaChartLine, FaShoppingCart, FaTags } from 'react-icons/fa';

const Benefits = () => {

    
  const benefits = [
    {
      icon: <FaBox className="text-blue-500 text-2xl" />,
      title: "Easy Product Management",
      description: "Add and manage your products with our intuitive interface",
    },
    {
      icon: <FaShoppingCart className="text-blue-500 text-2xl" />,
      title: "Instant Visibility",
      description: "Products go live instantly on our marketplace",
    },
    {
      icon: <FaTags className="text-blue-500 text-2xl" />,
      title: "Smart Pricing",
      description: "Set competitive prices with market insights",
    },
    {
      icon: <FaChartLine className="text-blue-500 text-2xl" />,
      title: "Sales Analytics",
      description: "Track your product performance in real-time",
    },
  ];

    return (
              <div className="max-w-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                  Why Sell on E-Shop?
                </h3>

                <div className="grid gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-xl border border-gray-100">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    Start Selling Today!
                  </h4>
                  <p className="text-blue-700">
                    Join thousands of successful sellers on our platform and reach
                    millions of customers worldwide.
                  </p>
                </div>
              </div>
    );
};

export default Benefits;