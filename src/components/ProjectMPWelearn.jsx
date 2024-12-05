import React from 'react';
import BoxImage from '../assets/CheckCircle.png'


const ProjectMPWelearn = () => {
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
                                    </span> Team Building</h3>
                                <p className="ml-8 text-gray-700">Define team ground rules, build a shared understanding, engage, and support virtual teams, and more.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Negotiating Project Agreements</h3>
                                <p className="ml-8 text-gray-700">Learn how to empower team members and stakeholders by negotiating project agreements.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Managing Conflict</h3>
                                <p className="ml-8 text-gray-700">Learn how to manage compliances and achieve project benefits and value using PMP methodologies.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] "><span><img src={BoxImage} className="inline-block mr-2" /></span> Choosing the Right Project</h3>
                                <p className="ml-8 text-gray-700">Learn the best approach for project completion, and plan and manage scope, budget and resources.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Managing Risks</h3>
                                <p className="ml-8 text-gray-700">Learn how to manage and plan scope, analyze and manage risk, and more.</p>
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
                                    Project Governance</h3>
                                <p className="ml-8 text-gray-700">Learn to handle project changes, choose the right methods, practices, project governance, and more.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Delivering Business Value</h3>
                                <p className="ml-8 text-gray-700">Learn to manage communications, risks and stakeholders while executing projects.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Managing Compliances</h3>
                                <p className="ml-8 text-gray-700">Learn to manage compliances and deliver project benefits and value using PMP methodologies.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Continuous Process Improvement</h3>
                                <p className="ml-8 text-gray-700">Assess and respond to changes in the internal and external business environment.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Project Continuity</h3>
                                <p className="ml-8 text-gray-700">Manage project challenges and adjustments, as well as knowledge transfer.</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default ProjectMPWelearn;
