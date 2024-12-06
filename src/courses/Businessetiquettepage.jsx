import React from "react";
import EnrollForm from "../components/enrollForm";
import Trailerimg from "../assets/Trailer.png"
import ProgramDetails from "../components/programDetails";
import Feedback from '../components/Feedback';
import ScrollToTop from "../components/TopArrow";
import WhatsAppButton from '../components/whatsapp';
import BusinessetiquetteFaq from "../components/BusinessetiquetteFaq";
import BusinessetiqueeteWelearn from "../components/BusinessetiquetteWelearn";


const BusinessetiquetteDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">
                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        Business Writing
                    </h1>
                    <p>
                        Business etiquette is the set of established norms, customs, and professional behaviors
                        that guide individuals in conducting themselves appropriately and respectfully in business
                        environments. It encompasses the principles of courtesy, respect, and professionalism that
                        promote effective communication, positive relationships, and mutual understanding among
                        colleagues, clients, and stakeholders. Business etiquette varies across cultures, industries,
                        and organizations but universally emphasizes building trust, demonstrating competence, and
                        fostering a positive impression.


                    </p>
                    <img src={Trailerimg} alt=" pic" className="w-full h-auto" />
                    <div className="block lg:hidden">
                        <EnrollForm />
                    </div>
                    <div className="pt-3">
                        <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl  font-semibold">Program Details</h2>
                        <ProgramDetails />
                    </div>

                    <BusinessetiqueeteWelearn />
                    <BusinessetiquetteFaq />
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

export default BusinessetiquetteDetails;