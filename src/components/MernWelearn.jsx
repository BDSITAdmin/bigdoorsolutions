import React from 'react';
import BoxImage from '../assets/CheckCircle.png'


const MernWelearn = () => {
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
                                    </span> MongoDB (Database Layer)</h3>
                                <p className="ml-8 text-gray-700">Learn to stores data in a flexible, JSON-like format, making it ideal for handling unstructured data and scalable applications.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Express.js (Backend Framework)</h3>
                                <p className="ml-8 text-gray-700">Learn to build robust backend applications and APIs with minimal effort.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    React (Frontend Framework)</h3>
                                <p className="ml-8 text-gray-700">The JavaScript library for building dynamic, interactive user interfaces using reusable components and a virtual DOM for efficient rendering.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] "><span><img src={BoxImage} className="inline-block mr-2" /></span> Node.js (Backend Runtime Environment)</h3>
                                <p className="ml-8 text-gray-700">It enables server-side programming, offering scalability and performance for building fast, efficient backend applications.</p>
                            </li>
                            {/* <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    How the MERN Stack Works Together</h3>
                                <p className="ml-8 text-gray-700">In-depth knowledge of testing, principles, phases, automation, and more.</p>
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
                                    Projects You Build in MERN Stack</h3>
                                <p className="ml-8 text-gray-700">Working in a Linux (bash) environment, key commands, workflows, and techniques.</p>
                            </li> */}
                            {/* <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                     HTML5 and CSS3</h3>
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



export default MernWelearn;
