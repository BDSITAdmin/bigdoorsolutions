import React from 'react';
import CheckCircle from '../assets/CheckCircle.png';
import Frame01 from '../assets/Frame01.png';
import Frame02 from '../assets/Frame02.png';
import Frame03 from '../assets/Frame03.png';

const PathwayToSuccess = () => {
    return (
        <section className="bg-white py-8 sm:py-12 md:py-16 flex justify-center items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white">
                    <h3 className="font-poppins text-sm sm:text-base font-semibold leading-6 tracking-wide text-[#1F5E9E]">TIME IS MONEY</h3>
                    <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl font-semibold leading-[40px] sm:leading-[45px] md:leading-[50px] tracking-tight mt-2 mb-4 sm:mb-6">3 step pathway to success</h2>
                    <div className="border shadow-md hover:border-blue-500 rounded-md p-4 mb-4">
                        <div className="flex items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex justify-center items-center">
                                <img src={Frame01} alt="Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-base sm:text-lg font-medium">0-3 Months Live & Self-paced Learning</h4>
                            </div>
                        </div>
                    </div>
                    <div className="border shadow-md border-gray-300 hover:border-blue-500 rounded-md p-4 mb-4">
                        <div className="flex items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex justify-center items-center">
                                <img src={Frame02} alt="Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-base sm:text-lg font-medium">4-6 Months Paid Internship</h4>
                            </div>
                        </div>
                    </div>
                    <div className="border shadow-md border-gray-300 hover:border-blue-500 rounded-md p-4 mb-4">
                        <div className="flex items-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex justify-center items-center">
                                <img src={Frame03} alt="Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-base sm:text-lg font-medium">7-9 Months Placement Assistance</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#EBEBFF] border border-[#564FFD] p-6 sm:p-8 rounded-lg">
                    <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold leading-6 sm:leading-7 mb-4 text-[#392761]">What you’ll get?</h2>
                    <p className="text-sm sm:text-base font-light text-[#000000] mb-4">
                        <strong className=' text-base font-semibold leading-6 tracking-tight'>Wi-Fi Reimbursement:</strong> Enroll in live and self-paced courses without worrying about data charges—we reimburse your Wi-Fi up to ₹500.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span><img src={CheckCircle} alt="Check Icon" /></span>
                            <span className="font-inter text-base sm:text-lg leading-tight test-[#1D2939] ml-2">Career Roadmap Development</span>
                        </li>
                        <li className="flex items-start">
                            <span><img src={CheckCircle} alt="Check Icon" /></span>
                            <span className="font-inter text-base sm:text-lg leading-tight test-[#1D2939] ml-2">Expert-led live classes</span>
                        </li>
                        <li className="flex items-start">
                            <span><img src={CheckCircle} alt="Check Icon" /></span>
                            <span className="font-inter text-base sm:text-lg leading-tight test-[#1D2939] ml-2">Pre-recorded study material</span>
                        </li>
                        <li className="flex items-start">
                            <span><img src={CheckCircle} alt="Check Icon" /></span>
                            <span className="font-inter text-base sm:text-lg leading-tight test-[#1D2939] ml-2">Basic course + Advance training</span>
                        </li>
                        <li className="flex items-start">
                            <span><img src={CheckCircle} alt="Check Icon" /></span>
                            <span className="font-inter text-base sm:text-lg leading-tight test-[#1D2939] ml-2">Lifecycle Training on Latest technologies</span>
                        </li>
                        <li className="flex items-start">
                            <span><img src={CheckCircle} alt="Check Icon" /></span>
                            <span className="font-inter text-base sm:text-lg leading-tight test-[#1D2939] ml-2">Lifetime Access to portal</span>
                        </li>
                        <li className="flex items-start">
                            <span><img src={CheckCircle} alt="Check Icon" /></span>
                            <span className="font-inter text-base sm:text-lg leading-tight test-[#1D2939] ml-2">Q&A sessions</span>
                        </li>
                        <li className="flex items-start">
                            <span><img src={CheckCircle} alt="Check Icon" /></span>
                            <span className="font-inter text-base sm:text-lg leading-tight test-[#1D2939] ml-2">Mentorship: 1:1 and Group Sessions</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PathwayToSuccess;
