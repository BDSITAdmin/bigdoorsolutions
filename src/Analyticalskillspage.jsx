import React from "react";
import EnrollForm from "./components/enrollForm";
import Trailerimg from "./assets/Trailer.png"
import ProgramDetails from "./components/programDetails";
import Feedback from './components/Feedback';
import ScrollToTop from "./components/TopArrow";
import WhatsAppButton from './components/whatsapp';
import AnalyticskillsFaq from "./components/AnalyticalskillsFaq";
import AnalyticskillsWelearn from "./components/AnalyticalskillsWelearn";


const AnalyticskillsDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">
                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        Analytic Skills
                    </h1>
                    <p>
                        Analytic skills are the ability to systematically and critically assess information,
                        identify patterns, solve problems, and make informed decisions based on logical
                        reasoning and data-driven insights. These skills involve gathering, interpreting,
                        and evaluating complex information from various sources, breaking it down into
                        manageable components, and using this understanding to develop effective solutions
                        or conclusions. Analytic skills are foundational in decision-making processes across
                        personal, academic, and professional contexts and are highly valued in
                        problem-solving and strategy-oriented roles.


                    </p>
                    <img src={Trailerimg} alt=" pic" className="w-full h-auto" />
                    <div className="block lg:hidden">
                        <EnrollForm />
                    </div>
                    <div className="pt-3">
                        <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl  font-semibold">Program Details</h2>
                        <ProgramDetails />
                    </div>

                    <AnalyticskillsWelearn />
                    <AnalyticskillsFaq />
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

export default AnalyticskillsDetails;