import React from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa'; 

const ContactForm = () => {
    return (
        <section className="ml-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md shadow-custom">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in touch</h2>
                <p className="text-gray-600 mb-6">
                    Have an idea? Fill the details in the below form and we’ll get in touch with you at the earliest.
                </p>

                <form>
                    <div className="m-4">
                        <label className="block text-gray-600 mb-2">Full Name</label>
                        <div className="flex items-center border rounded-md p-2 bg-SeaGreen">
                            <FaUser className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                className="bg-transparent outline-none w-full"
                                placeholder="Full Name"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2">Email Address</label>
                        <div className="flex items-center border rounded-md p-2 bg-SeaGreen">
                            <FaEnvelope className="text-gray-500 mr-2" />
                            <input
                                type="email"
                                className="bg-transparent outline-none w-full border-SeaGreen"
                                placeholder="Email Address"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2">Message</label>
                        <div className="flex items-start border rounded-md p-2 bg-SeaGreen">
                            <FaCommentDots className="text-gray-500 mt-2 mr-2" />
                            <textarea
                                className="bg-transparent outline-none w-full"
                                placeholder="Message"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-BleuDe text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                    >
                        Send Message <span className="ml-2">→</span>
                    </button>

                    <p className="text-gray-500 text-sm mt-4">
                        *Any details shared through this form shall remain private to Bigdoor Solutions and will not be disclosed to any third party or external company.
                    </p>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
