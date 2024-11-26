import React from "react";
import EnrollForm from "./components/enrollForm";
import Trailerimg from "./assets/Trailer.png"
import ProgramDetails from "./components/programDetails";
import Feedback from './components/Feedback';
import ScrollToTop from "./components/TopArrow";
import WhatsAppButton from './components/whatsapp';
import CloudFaq from "./components/CloudFaq";
import CloudWelearn from "./components/CloudWelearn";

const CloudDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">
                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
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

                    <CloudWelearn />
                    <CloudFaq />
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

export default CloudDetails;