import React from 'react';
import BoxImage from '../assets/CheckCircle.png'


const CertifiedSMWelearn = () => {
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
                                    </span> Scrum Theory</h3>
                                <p className="ml-8 text-gray-700">Understand the definition of Scrum, its values and pillars. Learn about the benefits of an iterative approach and the dangers of partial</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    The Scrum Team</h3>
                                <p className="ml-8 text-gray-700">Illustrate the interaction between the Product Owner, Developers, and Scrum Master in delivering Increments within a Sprint.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Scrum Events and Activities</h3>
                                <p className="ml-8 text-gray-700">Understand the benefits of timeboxing, sprint purpose and duration, key Scrum events and Product Backlog refinement.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] "><span><img src={BoxImage} className="inline-block mr-2" /></span> Scrum Artifacts and Commitments</h3>
                                <p className="ml-8 text-gray-700">Learn about Agile artifacts (Backlog, Sprint Backlog, Increment) and their roles in iterative development, goal setting.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    The Team</h3>
                                <p className="ml-8 text-gray-700">Understand the three Scrum Roles: development team builds, PO owns backlog (prioritizes), Scrum Master coaches and protects process.</p>
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
                                    Scrum Events and Activities</h3>
                                <p className="ml-8 text-gray-700">Learn to plan sprints, review work, reflect and adapt. Delve into daily Scrum Events/Practices and Definition of Done (DoD).</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Scrum Master Core Competencies</h3>
                                <p className="ml-8 text-gray-700">Learn the role of the Scrum Master in facilitating the needs of the Scrum Team and organization, including facilitating group decision-making.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Service to the Team, PO, and Org</h3>
                                <p className="ml-8 text-gray-700">Identify the Scrum Master's role in leading the Scrum Team, managing technical debt, supporting the Product Owner and more.</p>
                            </li>
                            {/* <li>
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



export default CertifiedSMWelearn;
