import React from 'react';
import BoxImage from '../assets/CheckCircle.png'


const AnalyticskillsWelearn = () => {
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
                                <p className="ml-8 text-gray-700">Learn ability to collect, interpret, and evaluate information to solve problems and make data-driven decisions.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Critical Thinking</h3>
                                <p className="ml-8 text-gray-700">Lear to analyze information objectively, evaluate evidence, and form reasoned judgments to solve problems effectively.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Data Analysis</h3>
                                <p className="ml-8 text-gray-700">The process of inspecting, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] "><span><img src={BoxImage} className="inline-block mr-2" /></span> Problem-Solving</h3>
                                <p className="ml-8 text-gray-700">The ability to identify, analyze, and resolve challenges or obstacles by applying critical thinking and creativity to find effective solutions.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Logical Reasoning</h3>
                                <p className="ml-8 text-gray-700">To analyze and evaluate information systematically to draw valid conclusions or solve problems through structured thinking and sound judgment.</p>
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
                                    Research Skills</h3>
                                <p className="ml-8 text-gray-700">Efficiently gather, evaluate, and analyze information from various sources to answer questions, solve problems, or generate new knowledge.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Quantitative and Qualitative Analysis</h3>
                                <p className="ml-8 text-gray-700">Use of numerical data and statistical methods to identify patterns,non-numerical insights, such as behaviors, opinions, and experiences,etc</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Communication of Insights</h3>
                                <p className="ml-8 text-gray-700"> Presenting complex data or findings in a clear, concise, and compelling way to inform decision-making and drive action.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Decision-Making</h3>
                                <p className="ml-8 text-gray-700">Best course of action from available alternatives based on analysis, judgment, and the desired outcomes.</p>
                            </li>

                            {/* <li>
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



export default AnalyticskillsWelearn;
