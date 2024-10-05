import React from "react";
import EnrollForm from "./components/enrollForm";
import Trailerimg from "./assets/Trailer.png"
import ProgramDetails from "./components/programDetails";

import Welearn from './components/Welearn';
import Faq from './components/Faq';
import Feedback from './components/Feedback';



const CourseDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">

                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
                    <div className="">

                        <div class="bg-white p-4 flex items-center flex-wrap">
                            <ul class="flex items-center">
                                <li class="inline-flex items-center">
                                    <a href="#" class="text-gray-600 hover:text-blue-500">
                                        <svg class="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" /></svg>
                                    </a>

                                    <svg class="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                                </li>

                                <li class="inline-flex items-center">
                                    <a href="#" class="text-gray-600 hover:text-blue-500">
                                        Page 1
                                    </a>

                                    <svg class="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                                </li>

                                <li class="inline-flex items-center">
                                    <a href="#" class="text-gray-600 hover:text-blue-500">
                                        Page 2
                                    </a>

                                    <svg class="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                                </li>

                                <li class="inline-flex items-center">
                                    <a href="#" class="text-gray-600 hover:text-blue-500">
                                        Page 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        Full Stack Web Devlopments
                    </h1>
                    <p>
                        This beginner-friendly Full-Stack Web Development Bootcamp  is your chance to prepare
                        for the world of work as a Full-Stack Developer in a product-based company, compile a
                        job-ready project portfolio, and become a self-sufficient, versatile
                        software developer with all the critical skills for a long and healthy career in tech.
                    </p>
                    <img src={Trailerimg} alt=" pic" className="w-full h-auto" />
                    <div className="block lg:hidden">
                        <EnrollForm />
                    </div>
                    <div className="pt-3">
                        <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl  font-semibold">Program Details</h2>
                        <ProgramDetails />
                    </div>

                    <Welearn />
                    <Faq />
                    <Feedback></Feedback>

                </div>
                <div className="hidden lg:block">
                    <EnrollForm />
                </div>

            </div>
        </>
    )
}

export default CourseDetails;