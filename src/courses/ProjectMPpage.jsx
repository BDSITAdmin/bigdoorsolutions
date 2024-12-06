import React from "react";
import EnrollForm from "../components/enrollForm";
import Trailerimg from "../assets/Trailer.png"
import ProgramDetails from "../components/programDetails";
import Feedback from '../components/Feedback';
import ScrollToTop from "../components/TopArrow";
import WhatsAppButton from '../components/whatsapp';
import ProjectMPFaq from "../components/ProjectMPFaq";
import ProjectMPWelearn from "../components/ProjectMPWelearn";


const ProjectMPDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">
                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        Project Management Professional
                    </h1>
                    <p>
                        The PMP certification equips professionals with the skills, knowledge, and recognition
                        needed to excel in managing complex projects and driving successful outcomes across diverse
                        organizational contexts. It validates an individual's ability to apply advanced project
                        management principles and lead projects to successful completion, making it a valuable
                        credential for career advancement in the field.
                    </p>
                    <img src={Trailerimg} alt=" pic" className="w-full h-auto" />
                    <div className="block lg:hidden">
                        <EnrollForm />
                    </div>
                    <div className="pt-3">
                        <h2 className="my-4 text-2xl md:text-3xl lg:text-4xl  font-semibold">Program Details</h2>
                        <ProgramDetails />
                    </div>

                    <ProjectMPWelearn />
                    <ProjectMPFaq />
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

export default ProjectMPDetails;