import React from "react";
import EnrollForm from "../components/enrollForm";
import Trailerimg from "../assets/Bwriting-image.webp"
import ProgramDetails from "../components/programDetails";
import Feedback from '../components/Feedback';
import ScrollToTop from "../components/TopArrow";
import WhatsAppButton from '../components/whatsapp';
import BusinesswritingFaq from "../components/BusinesswritingFaq";
import BusinesswritingWelearn from "../components/BusinesswritingWelearn";


const BusinesswritingDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">
                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        Business Writing
                    </h1>
                    <p>
                        Business writing refers to the process of creating clear, concise, and professional
                        written communication tailored to meet the needs of businesses and their stakeholders.
                        It is a specialized form of writing designed to convey information effectively and efficiently
                        in a corporate or organizational context, ensuring that the intended message is understood
                        and actionable. Business writing encompasses various formats and styles, depending on the
                        purpose, audience, and medium, and it plays a critical role in maintaining effective
                        communication within and outside an organization.


                    </p>
                    <img src={Trailerimg} alt=" pic" className="w-full h-auto" />
                    <div className="block lg:hidden">
                        <EnrollForm />
                    </div>
                    <div className="pt-3">
                        <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl  font-semibold">Program Details</h2>
                        <ProgramDetails />
                    </div>

                    <BusinesswritingWelearn />
                    <BusinesswritingFaq />
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

export default BusinesswritingDetails;