
import React from 'react';
import calllogo from './assets/call.png';
import location from './assets/location.png';
import mailbox from './assets/mailbox.png';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import ProgramDetails from './internship';


const ContactSection = () => {
    return (
        <>
            <div className="sm:relative">
                <section className="py-12 bg-Cyanblue text-foreground sm:h-[318px] ">
                    <div className="max-w-4xl mx-auto text-left mt-8">
                        <h2 className="text-base font-semibold leading-6 tracking-wider  text-AliceBlue">CONTACT US</h2>
                        <h1 className="text-4xl font-semibold leading-[48px] tracking-tight text-left mt-4 text-DavyGrey">We’re here for you</h1>
                        <p className="font-inter text-sm font-normal leading-[21px] tracking-wide mt-2 text-muted-foreground sm:w-[544px]">
                            Do you have a question? Simply drop us a message, and we’ll get back to you within 24 hours.
                        </p>
                        <span className="block w-14 h-[2px] bg-hexadecimal mt-2 ml-0"></span>
                    </div>
                </section>
                <section className=" sm:absolute top-[90px] right-16 ">
                    <div className=" sm:w-[538px] h-auto bg-white p-6 rounded-lg shadow-lg w-full max-w-md shadow-custom ">
                        <h2 className="text-3xl font-semibold text-DavyGrey mb-4 leading-[45px]">Get in touch</h2>
                        <p className="text-Olive mb-6 text-[14px] font-normal leading-[21px] tracking-[.03em]">
                            Have an idea? Fill the details in the below form and we’ll get in touch with you at the earliest.
                        </p>

                        <form>
                            <div className="mb-4">
                                <div className="flex items-center border rounded-md p-2 bg-SeaGreen">
                                    <FaUser className="text-Azure mr-2 " />
                                    <input
                                        type="text"
                                        className="bg-transparent outline-none w-full border-SeaGreen"
                                        placeholder="Full Name"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center border rounded-md p-2 bg-SeaGreen">
                                    <FaEnvelope className="text-Azure mr-2" />
                                    <input
                                        type="email"
                                        className="bg-transparent outline-none w-full border-SeaGreen"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-start border rounded-md p-2 bg-SeaGreen">
                                    <FaCommentDots className="text-Azure mt-2 mr-2" />
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

                            <p className="text-gray-500 text-[12px] font-normal mt-4">
                                *Any details shared through this form shall remain private to Bigdoor Solutions and will not be disclosed to any third party or external company.
                            </p>
                        </form>
                    </div>
                </section>
                <section className="py-12 bg-background text-foreground">
                    <div className="max-w-4xl mx-auto text-left">

                        <div className="flex flex-col justify-center">
                            <div className="flex items-center mb-6">
                                <h2 className="font-sora text-[24px] font-semibold leading-[22px] mr-2">Bengaluru</h2>
                                <span className="w-[202px] h-[1px] bg-hexadecimal mt-2"></span>
                            </div>

                            <div className="flex items-start mb-4">
                                <div className="bg-brown-500 text-white rounded-full p-2">
                                    <img src={location} />
                                </div>
                                <div className="ml-6 mt-2 w-96">
                                    <p className="text-gray-600 ">
                                        No. #1078, Ground floor, 6th Cross, Venkatadri Layout, J.P Nagar 4th Phase, Bangalore - 76
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start mb-4">
                                <div className="bg-brown-500 text-white rounded-full p-2">
                                    <img src={calllogo} />
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-600">
                                        <div>
                                            <span></span>
                                            <span>+91 95902 19966</span>
                                        </div>
                                        <div>
                                            <span>+91 95902 19966</span>
                                        </div>
                                        <div>
                                            <span>+91 95902 19966</span>
                                        </div>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-brown-500 text-white rounded-full p-2">
                                    <img src={mailbox} />
                                </div>
                                <div className="ml-4 mt-4">
                                    <p className="text-gray-600">info@bigdoorsolutions.com</p>
                                </div>
                            </div>
                            <div className="flex  min-h-auto  bg-white">
                                <div className=" flex items-center mt-12 bg-white shadow-lg  rounded-lg w-[316px] h-[116px] ">
                                    <div className='pl-6'>
                                        <h1 className="text-xl font-semibold">Lucknow</h1>
                                        <p className="text-gray-500">Coming Soon..</p>
                                    </div>
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
