import React from "react";
import EnrollForm from "./components/enrollForm";
import Trailerimg from "./assets/Trailer.png"
import ProgramDetails from "./components/programDetails";
import Feedback from './components/Feedback';
import ScrollToTop from "./components/TopArrow";
import WhatsAppButton from './components/whatsapp';
import OopsFaq from "./components/OopsFaq";
import OopsWelearn from "./components/OopsWelearn";


const OopsDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">
                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        Oops
                    </h1>
                    <p>
                        Object-Oriented Programming (OOP) is a programming paradigm centered around the
                        concept of "objects," which can represent real-world entities. It organizes software
                        design by bundling data (attributes) and methods (functions) that operate on the
                        data into objects. Introduced to make programming more modular, reusable, and
                        maintainable, OOP became a cornerstone of modern software development.
                    </p>
                    <img src={Trailerimg} alt=" pic" className="w-full h-auto" />
                    <div className="block lg:hidden">
                        <EnrollForm />
                    </div>
                    <div className="pt-3">
                        <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl  font-semibold">Program Details</h2>
                        <ProgramDetails />
                    </div>

                    <OopsWelearn />
                    <OopsFaq />
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

export default OopsDetails;