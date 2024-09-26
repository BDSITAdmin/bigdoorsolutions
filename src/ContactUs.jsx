import React from 'react';
import calllogo from './assets/call.png';
import location from './assets/location.png';
import mailbox from './assets/mailbox.png';
import ContactForm from './components/contactForm';

const ContactSection = () => {
    return (
        <>
            <div className="sm:relative">
                <section className="py-12 bg-Cyanblue text-foreground sm:h-[318px] px-4">
                    <div className="max-w-4xl mx-auto text-left mt-8">
                        <h2 className="text-base font-semibold leading-6 tracking-wider text-AliceBlue">CONTACT US</h2>
                        <h1 className="text-3xl sm:text-4xl font-semibold leading-[40px] sm:leading-[48px] tracking-tight mt-4 text-DavyGrey">
                            We’re here for you
                        </h1>
                        <p className="font-inter text-sm font-normal leading-[21px] tracking-wide mt-2 text-muted-foreground sm:w-[544px]">
                            Do you have a question? Simply drop us a message, and we’ll get back to you within 24 hours.
                        </p>
                        <span className="block w-14 h-[2px] bg-hexadecimal mt-2 ml-0"></span>
                    </div>
                </section>
                <section className="sm:absolute top-[90px] sm:right-16 px-4 sm:px-0">
                    <div className="w-full sm:w-[538px] bg-white p-6 rounded-lg  shadow-custom">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-DavyGrey mb-4 leading-[40px] sm:leading-[45px]">Get in touch</h2>
                        <p className="text-Olive mb-6 text-[14px] font-normal leading-[21px]">
                            Have an idea? Fill in the details below, and we’ll get in touch with you at the earliest.
                        </p>

                        <ContactForm/>
                    </div>
                </section>
                <section className="py-12 bg-background text-foreground px-4">
                    <div className="max-w-4xl mx-auto text-left">
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center mb-6">
                                <h2 className="font-sora text-[20px] sm:text-[24px] font-semibold leading-[22px] mr-2">Bengaluru</h2>
                                <span className="w-full sm:w-[202px] h-[1px] bg-hexadecimal mt-2"></span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start mb-4">
                                <div className="bg-brown-500 text-white rounded-full p-2">
                                    <img src={location} alt="Location Icon" />
                                </div>
                                <div className="ml-6 mt-2 w-full sm:w-96">
                                    <p className="text-gray-600">
                                        No. #1078, Ground floor, 6th Cross, Venkatadri Layout, J.P Nagar 4th Phase, Bangalore - 76
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start mb-4">
                                <div className="bg-brown-500 text-white rounded-full p-2">
                                    <img src={calllogo} alt="Phone Icon" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-600">
                                        <span>+91 95902 19966</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start">
                                <div className="bg-brown-500 text-white rounded-full p-2">
                                    <img src={mailbox} alt="Mailbox Icon" />
                                </div>
                                <div className="ml-4 mt-4">
                                    <p className="text-gray-600">info@bigdoorsolutions.com</p>
                                </div>
                            </div>

                            <div className="flex bg-white shadow-lg rounded-lg w-full sm:w-[316px] h-auto p-4 mt-12">
                                <div>
                                    <h1 className="text-xl font-semibold">Lucknow</h1>
                                    <p className="text-gray-500">Coming Soon..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContactSection;
