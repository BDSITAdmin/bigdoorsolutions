import React from 'react';
import calllogo from './assets/call.png';
import location from './assets/location.png';
import mailbox from './assets/mailbox.png';
import ContactForm from './components/contactForm';
import ScrollToTop from './components/TopArrow';
import WhatsAppButton from './components/whatsapp';

const ContactSection = () => {
    return (
        <>
            <div className="sm:relative">
                <section className="py-8 sm:py-12 bg-Cyanblue px-4 md:px-[70px] xl:px-[120px] text-foreground">
                    <div className="max-w-4xl text-left mt-4 md:mt-8">
                        <h2 className="text-sm md:text-[16px] xl:text-xl font-semibold font-inter text-blue-700 uppercase tracking-wide mb-2">CONTACT US</h2>
                        <h1 className="text-2xl md:text-[27px] lg:text-[40px] xl:text-5xl font-semibold font-sora leading-[1.4] tracking-tight text-DavyGrey mt-2 mb-4">
                            We’re here for you
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 font-inter leading-relaxed">
                            Do you have a question? Simply drop us a message, and we’ll get back to you within 24 hours.
                        </p>
                        <span className="block w-14 h-[2px] bg-hexadecimal mt-4"></span>
                    </div>
                </section>

                <section className="sm:absolute w-full md:w-6/12 lg:w-5/12 top-[50px] md:top-6 sm:right-10 px-4 sm:px-0">
                    <div className="bg-white p-6 rounded-lg shadow-custom">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-DavyGrey mb-4 leading-snug">
                            Get in touch
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 font-inter leading-relaxed mb-4">
                            Have an idea? Fill in the details below, and we’ll get in touch with you at the earliest.
                        </p>
                        <ContactForm />
                    </div>
                </section>

                <section className="py-8 sm:py-12 bg-background px-4 md:px-[70px] xl:px-[120px]">
                    <div className="max-w-4xl">
                        <div className="flex flex-col">
                            <div className="flex items-center mb-6">
                                <h2 className="text-xl md:text-[27px] lg:text-[40px] xl:text-5xl font-semibold font-sora text-DavyGrey mr-2">
                                    Bengaluru
                                </h2>
                                <span className="flex-grow h-[1px] bg-hexadecimal"></span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center mb-6">
                                <div className="bg-brown-500 text-white rounded-full p-1 sm:p-2 flex-shrink-0">
                                    <img src={location} alt="Location Icon" className="w-8 h-8 md:w-12 md:h-12 " />
                                </div>
                                <p className="text-sm md:text-base text-gray-600 font-inter ml-2 sm:ml-4 w-96 p-4">
                                    No. #1078, Ground floor, 6th Cross, Venkatadri Layout, J.P Nagar 4th Phase, Bangalore - 76
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center mb-6">
                                <div className="bg-brown-500 text-white rounded-full p-1 sm:p-2 flex-shrink-0">
                                    <img src={calllogo} alt="Phone Icon" className="w-8 h-8 md:w-12 md:h-12" />
                                </div>
                                <p className="text-sm md:text-base text-gray-600 font-inter ml-2 sm:ml-4">
                                    +91 95902 19966
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center mb-6">
                                <div className="bg-brown-500 text-white rounded-full p-1 sm:p-2 flex-shrink-0">
                                    <img src={mailbox} alt="Mailbox Icon" className="w-8 h-8 md:w-12 md:h-12" />
                                </div>
                                <p className="text-sm md:text-base text-gray-600 font-inter ml-2 sm:ml-4">
                                    info@bigdoorsolutions.com
                                </p>
                            </div>

                            <div className="flex items-center mb-6">
                                <h2 className="text-xl md:text-[27px] lg:text-[40px] xl:text-5xl font-semibold font-sora text-DavyGrey mr-2">
                                    Lucknow
                                </h2>
                                <span className="flex-grow h-[1px] bg-hexadecimal"></span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center mb-6">
                                <div className="bg-brown-500 text-white rounded-full p-1 sm:p-2 flex-shrink-0">
                                    <img src={location} alt="Location Icon" className="w-8 h-8 md:w-12 md:h-12" />
                                </div>
                                <p className="text-sm md:text-base text-gray-600 font-inter ml-2 sm:ml-4  w-80 p-4">
                                    2nd Floor, Yousuf Apartment Cantt Road, Burlington Chauraha, Near HP Petrol Pump, Lucknow (UP) - 226001
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="bg-brown-500 text-white rounded-full p-1 sm:p-2 flex-shrink-0">
                                    <img src={calllogo} alt="Phone Icon" className="w-8 h-8 md:w-12 md:h-12" />
                                </div>
                                <p className="text-sm md:text-base text-gray-600 font-inter ml-2 sm:ml-4">
                                    +91 84006 02601
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ScrollToTop/>
            <WhatsAppButton/>
        </>
    );
};

export default ContactSection;
