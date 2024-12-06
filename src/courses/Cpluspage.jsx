import React from "react";
import EnrollForm from "../components/enrollForm";
import Trailerimg from "../assets/Trailer.png"
import ProgramDetails from "../components/programDetails";
import Feedback from '../components/Feedback';
import ScrollToTop from "../components/TopArrow";
import WhatsAppButton from '../components/whatsapp';
import CplusFaq from "../components/CplusFaq";
import CplusWelearn from "../components/CplusWelearn";

const CplusDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">
                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        C++
                    </h1>
                    <p>
                        C++ is a versatile, powerful language that balances performance with abstraction,
                        enabling developers to build efficient, scalable, and maintainable software.
                        Its combination of low-level programming features with high-level abstractions
                        has made it a cornerstone of modern computing, influencing many subsequent
                        programming languages and shaping the software industry for decades.
                    </p>
                    <img src={Trailerimg} alt=" pic" className="w-full h-auto" />
                    <div className="block lg:hidden">
                        <EnrollForm />
                    </div>
                    <div className="pt-3">
                        <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl  font-semibold">Program Details</h2>
                        <ProgramDetails />
                    </div>

                    <CplusWelearn />
                    <CplusFaq />
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

export default CplusDetails;