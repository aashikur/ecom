import React from 'react';
import Container from '../components/Container';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
    const contactInfo = [
        {
            icon: <FaPhone className="text-2xl text-blue-600" />,
            title: "Phone",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
        },
        {
            icon: <FaEnvelope className="text-2xl text-blue-600" />,
            title: "Email",
            details: ["support@eshop.com", "info@eshop.com"],
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl text-blue-600" />,
            title: "Location",
            details: ["123 E-Shop Street", "New York, NY 10001"],
        },
        {
            icon: <FaClock className="text-2xl text-blue-600" />,
            title: "Working Hours",
            details: ["Mon - Fri: 9:00 - 18:00", "Sat - Sun: 10:00 - 14:00"],
        },
    ];

    return (
        <Container className='py-16'>
            {/* Hero Section */}
            <div className="relative bg-gray-50 py-16 mb-16">
                <div className="text-center max-w-2xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-gray-600">
                        Have questions? We'd love to hear from you. Send us a message
                        and we'll respond as soon as possible.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-16">
                {/* Contact Information */}
                <div className="md:col-span-1 space-y-8">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="flex space-x-4">
                            <div className="flex-shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {item.title}
                                </h3>
                                {item.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
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
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596670843!2d-74.25986548727487!3d40.69714941604313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645654571304!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </Container>
    );
};

export default ContactPage;