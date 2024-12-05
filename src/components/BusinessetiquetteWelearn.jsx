import React from 'react';
import BoxImage from '../assets/CheckCircle.png'


const BusinessetiqueeteWelearn = () => {
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
                                    </span> Communication Skills</h3>
                                <p className="ml-8 text-gray-700">Learn to convey information clearly and effectively, both verbally and non-verbally, to ensure understanding and foster positive interactions.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Workplace Behavior</h3>
                                <p className="ml-8 text-gray-700">The actions, attitudes, and interactions that employees exhibit in a professional environment, influencing productivity, teamwork, and organizational culture.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Meeting Etiquette</h3>
                                <p className="ml-8 text-gray-700">Set of professional behaviors and practices that ensure meetings are productive, respectful, and efficient for all participants.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] "><span><img src={BoxImage} className="inline-block mr-2" /></span> Dress Code and Grooming</h3>
                                <p className="ml-8 text-gray-700">Enhance personal hygiene that reflect professionalism, respect for the workplace culture</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Email and Digital Etiquette</h3>
                                <p className="ml-8 text-gray-700">Set of polite, professional, and respectful behaviors and communication practices used in email and online interactions.</p>
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
                                    Networking and Relationship Building</h3>
                                <p className="ml-8 text-gray-700">Creating and nurturing professional connections to foster collaboration, support, and mutual growth in both personal and career development.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Dining Etiquette</h3>
                                <p className="ml-8 text-gray-700">Set of formal manners and behaviors observed while eating, ensuring a respectful and pleasant dining experience for everyone involved.</p>
                            </li>
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Cross-Cultural Etiquette</h3>
                                <p className="ml-8 text-gray-700">understanding and respecting the social norms, behaviors, and communication styles of different cultures </p>
                            </li>
                            {/* <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2" />
                                    </span>
                                    Conflict Resolution and Professionalism</h3>
                                <p className="ml-8 text-gray-700">NoSQL database design and implementation with MongoDB, CRUD operations.</p>
                            </li> */}
                            <li>
                                <h3 className="font-inter text-[16px] font-semibold leading-[22px] ">
                                <span>
                                        <img src={BoxImage} alt="CheckCircle" className="inline-block mr-2 " />
                                    </span>
                                    Ethics and Integrity</h3>
                                <p className="ml-8 text-gray-700">The principles of honesty, fairness, and moral uprightness.</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default BusinessetiqueeteWelearn;
