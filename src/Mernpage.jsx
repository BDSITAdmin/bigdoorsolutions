import React from "react";
import EnrollForm from "./components/enrollForm";
import Trailerimg from "./assets/Trailer.png"
import ProgramDetails from "./components/programDetails";
import Feedback from './components/Feedback';
import ScrollToTop from "./components/TopArrow";
import WhatsAppButton from './components/whatsapp';
import MernFaq from "./components/MernFaq";
import MernWelearn from "./components/Mernwelearn";


const MernDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">
                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        MERN Stack
                    </h1>
                    <p>
                        The MERN Stack is a comprehensive, JavaScript-based technology stack designed to streamline the
                        development of modern web applications, particularly single-page and dynamic applications.
                        It consists of four powerful technologies that work together seamlessly to handle front-end,
                        back-end, and database operations, providing an end-to-end development solution.
                    </p>
                    <img src={Trailerimg} alt=" pic" className="w-full h-auto" />
                    <div className="block lg:hidden">
                        <EnrollForm />
                    </div>
                    <div className="pt-3">
                        <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl  font-semibold">Program Details</h2>
                        <ProgramDetails />
                    </div>

                    <MernWelearn />
                    <MernFaq />
                    <Feedback />

                </div>
                <div className="hidden lg:block">
                    <EnrollForm />
                </div>
                <WhatsAppButton />
                <ScrollToTop />
            </div>
        </>
    )
}

export default MernDetails;