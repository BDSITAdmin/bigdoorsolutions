import React from 'react';
import BoxImage from '../assets/CheckCircle.png'


const OopsWelearn = () => {
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
                                    </span> Key Concepts of OOP</h3>
                                <p className="ml-8 text-gray-700">Learn encapsulation, inheritance, polymorphism, and abstraction, which collectively enable modular, reusable, and efficient object-oriented programming.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    OOP Principles (SOLID)</h3>
                                <p className="ml-8 text-gray-700">Learns five design guidelines that promote scalable, maintainable, and robust object-oriented software design.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Other Important Concepts</h3>
                                <p className="ml-8 text-gray-700">Also learns error handling, design patterns, version control, and testing, which ensure code reliability, maintainability, and collaboration efficiency.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] "><span><img src={BoxImage} className="inline-block mr-2" /></span> Why Learn OOP?</h3>
                                <p className="ml-8 text-gray-700">To enhances code organization, reusability, and maintainability, making it easier to manage complex systems and collaborate in software development.</p>
                            </li>
                            {/* <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Software Testing</h3>
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
                                     Linux Essentials</h3>
                                <p className="ml-8 text-gray-700">Working in a Linux (bash) environment, key commands, workflows, and techniques.</p>
                            </li>
                            <li>
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



export default OopsWelearn;
