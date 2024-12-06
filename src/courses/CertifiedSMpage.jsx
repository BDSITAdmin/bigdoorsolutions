import React from "react";
import EnrollForm from "../components/enrollForm";
import Trailerimg from "../assets/Trailer.png"
import ProgramDetails from "../components/programDetails";
import Feedback from '../components/Feedback';
import ScrollToTop from "../components/TopArrow";
import WhatsAppButton from '../components/whatsapp';
import CertifiedSMFaq from "../components/CertifiedSMFaq";
import CertifiedSMWelearn from "../components/CertifiedsMWelearn";


const CertifiedSMDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">
                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        Certified Scrum Master
                    </h1>
                    <p>
                        The Certified ScrumMaster (CSM) is a globally recognized certification offered by the
                        Scrum Alliance that validates an individual’s knowledge, skills, and expertise in the
                        Scrum framework and their ability to facilitate, coach, and support Scrum teams to
                        ensure successful adoption and execution of Agile principles. The CSM certification
                        is designed for professionals who aspire to take on the role of a Scrum Master in
                        an Agile environment, helping teams and organizations optimize their performance
                        while adhering to Scrum’s core values and principles.
                    </p>
                    <img src={Trailerimg} alt=" pic" className="w-full h-auto" />
                    <div className="block lg:hidden">
                        <EnrollForm />
                    </div>
                    <div className="pt-3">
                        <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl  font-semibold">Program Details</h2>
                        <ProgramDetails />
                    </div>

                    <CertifiedSMWelearn />
                    <CertifiedSMFaq />
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

export default CertifiedSMDetails;