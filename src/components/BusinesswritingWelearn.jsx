import React from 'react';
import BoxImage from '../assets/CheckCircle.png'


const BusinesswritingWelearn = () => {
    return (
        <div className="flex items-center justify-center min-h-screen py-4">
            <div className="w-full max-w-6xl p-6 bg-[#E1F7E366] rounded-lg shadow-lg">
                <h1 className="mb-6 font-semibold text-left font-sora text-[24px] leading-32px tracking">What you will learn in this course</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <ul className="space-y-6 list-none">
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                    <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span> Introduction</h3>
                                <p className="ml-8 text-gray-700">Get introduced to business case writing and its importance in corporate strategy.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Business Models</h3>
                                <p className="ml-8 text-gray-700">Understand where a business case fits in an organization’s business model.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Business Case Principles</h3>
                                <p className="ml-8 text-gray-700">Learn about the different principles of writing a strong and robust business case.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] "><span><img src={BoxImage} className="inline-block mr-2" /></span> Planning your Business Case</h3>
                                <p className="ml-8 text-gray-700">Get a summarized view of how to plan your business case to meet business objectives.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Stakeholder Requirements</h3>
                                <p className="ml-8 text-gray-700">Learn to identify stakeholders’ needs and align your business case with strategic requirements.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-6 list-none">
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Competitors and Market Share</h3>
                                <p className="ml-8 text-gray-700">Identify market potential and compare market ratings of competitors.</p>
                            </li>
                            {/* <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Competitors and Market Share</h3>
                                <p className="ml-8 text-gray-700">Learn responsive websites with HTML5 and CSS3, key APIs and use cases.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                     React</h3>
                                <p className="ml-8 text-gray-700">Learn Hooks API, SSR, testable components, global state management, and more.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Mongo DB</h3>
                                <p className="ml-8 text-gray-700">NoSQL database design and implementation with MongoDB, CRUD operations.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                     Agile and Scrum</h3>
                                <p className="ml-8 text-gray-700">Deep dive into Agile, project management framework, and Scrum's building blocks.</p>
                            </li> */}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default BusinesswritingWelearn;
