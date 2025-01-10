import React from 'react';
import BoxImage from '../assets/CheckCircle.png'


const CprogWelearn = () => {
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
                                    </span> Introduction to C</h3>
                                <p className="ml-8 text-gray-700">C is a powerful, procedural programming language used for system-level and application development.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Syntax and Structure</h3>
                                <p className="ml-8 text-gray-700">C programs have a structured format with a main() function as the entry point.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Compiling and Running</h3>
                                <p className="ml-8 text-gray-700">C programs are compiled into machine code using compilers like GCC for execution..</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] "><span><img src={BoxImage} className="inline-block mr-2" /></span> Variables</h3>
                                <p className="ml-8 text-gray-700"> Variables store data of specific types like int, float, and char.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Input and Output</h3>
                                <p className="ml-8 text-gray-700">Use printf() for output and scanf() for input in a C program.</p>
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
                                    Operators</h3>
                                <p className="ml-8 text-gray-700">Operators like +, -, *, and / perform arithmetic or logical operations.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Control Structures</h3>
                                <p className="ml-8 text-gray-700">Conditional statements (if, switch) and loops (for, while) control the flow of execution.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Functions</h3>
                                <p className="ml-8 text-gray-700">Functions allow modular and reusable code by encapsulating specific tasks.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Pointers</h3>
                                <p className="ml-8 text-gray-700">Pointers store memory addresses, enabling dynamic memory and efficient data manipulation.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    File Handlings</h3>
                                <p className="ml-8 text-gray-700">C supports reading and writing files for persistent data storage.</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default CprogWelearn;
