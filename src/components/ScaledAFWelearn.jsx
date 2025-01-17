import React from 'react';
import BoxImage from '../assets/CheckCircle.png'


const ScaledAFWelearn = () => {
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
                                    </span> Agile Principles at Scale</h3>
                                <p className="ml-8 text-gray-700">Applying Agile values and principles across teams, programs, and portfolios in large organizations.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Lean Thinking</h3>
                                <p className="ml-8 text-gray-700">Emphasizing flow, value delivery, and waste reduction to improve efficiency and outcomes.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Business Agility</h3>
                                <p className="ml-8 text-gray-700">Enabling organizations to quickly adapt to market changes and customer demands.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] "><span><img src={BoxImage} className="inline-block mr-2" /></span> SAFe Framework Levels</h3>
                                <p className="ml-8 text-gray-700">BStructuring work into Team, Program, Large Solution, and Portfolio levels for scalability and alignment.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Agile Release Trains (ARTs)</h3>
                                <p className="ml-8 text-gray-700">Coordinated groups of Agile teams delivering incremental value through collaborative effort.</p>
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
                                    Customer-Centricity</h3>
                                <p className="ml-8 text-gray-700">Prioritizing customer needs to design and deliver impactful solutions.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Value Streams</h3>
                                <p className="ml-8 text-gray-700">Optimizing the flow of value from ideation to delivery across the organization.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Continuous Delivery Pipeline</h3>
                                <p className="ml-8 text-gray-700">Automating and streamlining the flow of work to deliver solutions continuously.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Lean Portfolio Management</h3>
                                <p className="ml-8 text-gray-700">Aligning investments and work with strategic organizational goals.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Leadership in SAFe</h3>
                                <p className="ml-8 text-gray-700">Driving cultural and organizational change through Lean-Agile leadership.</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default ScaledAFWelearn;
