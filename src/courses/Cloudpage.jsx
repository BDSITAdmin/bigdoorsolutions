import React from "react";
import EnrollForm from "../components/enrollForm";
import Trailerimg from "../assets/Cloud-image.jpg"
import ProgramDetails from "../components/programDetails";
import Feedback from '../components/Feedback';
import ScrollToTop from "../components/TopArrow";
import WhatsAppButton from '../components/whatsapp';
import CloudFaq from "../components/CloudFaq";
import CloudWelearn from "../components/CloudWelearn";

const CloudDetails = () => {

    return (
        <>
            <div className="flex space-x-8 px-5 md:px-[30px] lg:px-[100px]">
                <div className="w-full lg:w-8/12 space-y-5 pt-5 ">
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        Cloud Computing
                    </h1>
                    <p>
                        Cloud computing is a revolutionary paradigm in the world of technology, fundamentally changing
                        how computing resources are utilized, managed, and delivered. It refers to the on-demand
                        delivery of IT resources and services—such as servers, storage, databases, networking,
                        software, analytics, and intelligence—over the internet, often called "the cloud." By
                        eliminating the need for physical hardware and infrastructure, cloud computing has
                        democratized access to powerful technologies, enabling businesses and individuals to
                        innovate and operate more efficiently.
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