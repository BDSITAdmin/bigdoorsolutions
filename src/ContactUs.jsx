import React from 'react';
import calllogo from './assets/call.png';
import location from './assets/location.png';
import mailbox from './assets/mailbox.png';
import ContactForm from './components/contactForm';
import ScrollToTop from "./components/TopArrow";
import WhatsAppButton from './components/whatsapp';
const ContactSection = () => {
    return (
        <>
            <div className="sm:relative ">
                <section className="py-12 bg-Cyanblue md:pl-[70px] xl:pl-[120px] text-foreground sm:h-[318px] px-4">
                    <div className="max-w-4xl  text-left mt-8">
                        <h2 className="mb-2 text-[16px] font-inter xl:text-xl font-semibold text-blue-700 uppercase leading-6 tracking-wider">CONTACT US</h2>
                        <h1 className="mb-4 text-[27px]   lg:text-[40px] xl:mt-5 xl:text-5xl font-semibold font-sora leading-[40px] sm:leading-[48px] tracking-tight mt-4 text-DavyGrey">
                            We’re here for you
                        </h1>
                        <div className="md:w-6/12 lg:w-7/12"><p className="text-[14px] md:text-xs lg:text-sm xl:text-base text-left font-inter  text-gray-600 sm:w-auto">
                            Do you have a question? Simply drop us a message, and we’ll get back to you within 24 hours.
                        </p></div>

                        <span className="block w-14 h-[2px] bg-hexadecimal mt-2 ml-0"></span>
                    </div>
                </section>
                <section className="sm:absolute w-full md:w-6/12 lg:w-5/12 md:pl-[70px]  top-[50px] md:top-6 sm:right-10 px-4 sm:px-0">
                    <div className="w-full  bg-white p-6 rounded-lg  shadow-custom">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-DavyGrey mb-4 leading-[40px] sm:leading-[45px]">Get in touch</h2>
                        <p className="text-[14px] md:text-xs lg:text-sm xl:text-base text-left font-inter  text-gray-600 sm:w-auto mb-4">
                            Have an idea? Fill in the details below, and we’ll get in touch with you at the earliest.
                        </p>

                        <ContactForm />
                    </div>
                </section>
                <section className="py-12 bg-background md:pl-[70px] xl:pl-[120px] text-foreground px-4">
                    <div className="max-w-4xl  text-left">
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center mb-6">
                                <h2 className="mb-4 text-[27px]   lg:text-[40px] xl:mt-5 xl:text-5xl font-semibold font-sora leading-[40px] sm:leading-[48px] tracking-tight mt-4 text-DavyGrey mr-2">Bengaluru</h2>
                                <span className="w-full sm:w-[202px] h-[1px] bg-hexadecimal mt-2"></span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start mb-4">
                                <div className="bg-brown-500 text-white rounded-full p-2">
                                    <img src={location} alt="Location Icon" />
                                </div>
                                <div className="ml-6 mt-2 w-full sm:w-96">
                                    <p className="text-[14px] md:text-xs lg:text-sm xl:text-base text-left font-inter  text-gray-600 sm:w-auto">
                                        No. #1078, Ground floor, 6th Cross, Venkatadri Layout, J.P Nagar 4th Phase, Bangalore - 76
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center sm:flex-row  mb-4">
                                <div className="bg-brown-500 text-white rounded-full p-2">
                                    <img src={calllogo} alt="Phone Icon" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-[14px] md:text-xs lg:text-sm xl:text-base text-left font-inter  text-gray-600 sm:w-auto">
                                        <span>+91 95902 19966</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start">
                                <div className="bg-brown-500 text-white rounded-full p-2">
                                    <img src={mailbox} alt="Mailbox Icon" />
                                </div>
                                <div className="ml-4 mt-4">
                                    <p className="text-[14px] md:text-xs lg:text-sm xl:text-base text-left font-inter  text-gray-600 sm:w-auto">info@bigdoorsolutions.com</p>
                                </div>
                            </div>

                            <div className="flex items-center my-6">
                                <h2 className="mb-4 text-[27px]   lg:text-[40px] xl:mt-5 xl:text-5xl font-semibold font-sora leading-[40px] sm:leading-[48px] tracking-tight mt-4 text-DavyGrey">Lucknow</h2>
                                <span className="w-full sm:w-[202px] h-[1px] bg-hexadecimal mt-2"></span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start mb-4">
                                <div className="bg-brown-500 text-white rounded-full p-2">
                                    <img src={location} alt="Location Icon" />
                                </div>
                                <div className="ml-6 mt-2 w-full sm:w-96">
                                    <p className="text-[14px] md:text-xs lg:text-sm xl:text-base text-left font-inter  text-gray-600 sm:w-auto">
                                        2nd Floor, Yousuf Apartment
                                        Cantt Road, Burlington Chauraha,
                                        Near HP Petrol Pump,
                                        Lucknow (UP) - 226001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <WhatsAppButton />
                <ScrollToTop />
            </div>
        </>
    );
};

export default ContactSection;
