import React from "react";
import EnrollForm from "../components/enrollForm";
import Trailerimg from "../assets/SAF-image.jpeg"
import ProgramDetails from "../components/programDetails";
import Feedback from '../components/Feedback';
import ScrollToTop from "../components/TopArrow";
import WhatsAppButton from '../components/whatsapp';
import ScaledAFFaq from "../components/ScaledAFFaq";
import ScaledAFWelearn from "../components/ScaledAFWelearn";


const ScaledAFDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">
                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        Scaled Agile Framework
                    </h1>
                    <p>
                        The Scaled Agile Framework (SAFe) is a structured and flexible methodology that helps
                        organizations implement agile practices at an enterprise scale, enabling them to
                        develop, deliver, and maintain large and complex products or systems effectively.
                    </p>
                    <img src={Trailerimg} alt=" pic" className="w-full h-auto" />
                    <div className="block lg:hidden">
                        <EnrollForm />
                    </div>
                    <div className="pt-3">
                        <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl  font-semibold">Program Details</h2>
                        <ProgramDetails />
                    </div>

                    <ScaledAFWelearn />
                    <ScaledAFFaq />
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

export default ScaledAFDetails;