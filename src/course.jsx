import React from "react";
import SoftSkillTec from "./components/SoftSkill"
import TechCourses from "./components/TechCourses"
import ProcessTrainings from "./components/ProcessTraining"
import ExploreCourse from "./components/Courese";
import CertificationsTec from "./components/certifications";
import ScrollToTop from "./components/TopArrow";
import WhatsAppButton from "./components/whatsapp";


const Course = () => {
    return(
        <>
        <ExploreCourse/>
        <div className=" lg:px-[100px]">
        <TechCourses/>
        <CertificationsTec/>
        <ScrollToTop />
        <WhatsAppButton/>

        <ProcessTrainings/>
        <SoftSkillTec/>
        
        </div>
        
        
        </>
    )
}
export default Course;