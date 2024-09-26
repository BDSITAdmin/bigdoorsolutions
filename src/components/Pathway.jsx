import React from 'react';
import CheckCircle from '../assets/CheckCircle.png';
import Frame01 from '../assets/Frame01.png';
import Frame02 from '../assets/Frame02.png';
import Frame03 from '../assets/Frame03.png';

const PathwayToSuccess = () => {
    return (
        <section className="flex items-center justify-center py-8 bg-white sm:py-12 md:py-16">
            <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto sm:px-6 lg:px-8 md:grid-cols-2">
                <div className="bg-white">
                    <h3 className="font-poppins text-sm sm:text-base font-semibold leading-6 tracking-wide text-[#1F5E9E]">TIME IS MONEY</h3>
                    <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl font-semibold leading-[40px] sm:leading-[45px] md:leading-[50px] tracking-tight mt-2 ">3 step pathway to success</h2>
                        <hr className=" mb-4 sm:mb-6 h-1  bg-[#2E89E5] border-none w-[70px]" />
                    <div className="p-4 mb-4 border rounded-md shadow-box-shadow hover:border-[#564FFD]">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full sm:w-10 sm:h-10">
                                <img src={Frame01} alt="Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-base font-medium sm:text-lg">0-3 Months Live & Self-paced Learning</h4>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mb-4 border border-gray-300 rounded-md shadow-box-shadow hover:border-[#564FFD]">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full sm:w-10 sm:h-10">
                                <img src={Frame02} alt="Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-base font-medium sm:text-lg">4-6 Months Paid Internship</h4>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mb-4 border border-gray-300 rounded-md shadow-box-shadow hover:border-[#564FFD]">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full sm:w-10 sm:h-10">
                                <img src={Frame03} alt="Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-base font-medium sm:text-lg">7-9 Months Placement Assistance</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#EBEBFF] border border-[#564FFD] p-6 sm:p-8 rounded-lg">
                    <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-bold leading-6 sm:leading-7 mb-4 text-[#392761]">What you’ll get?</h2>
                    <p className="text-sm sm:text-base font-light text-[#000000] mb-4">
                        <strong className='text-base font-semibold leading-6 tracking-tight '>Wi-Fi Reimbursement:</strong> Enroll in live and self-paced courses without worrying about data charges—we reimburse your Wi-Fi up to ₹500.
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
