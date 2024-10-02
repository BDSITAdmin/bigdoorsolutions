import React from "react";
import SoftSkillTec from "./components/SoftSkill"
import TechCourses from "./components/TechCourses"
import ProcessTrainings from "./components/ProcessTraining"
import ExploreCourse from "./components/Courese";
import CertificationsTec from "./components/certifications";


const Course = () => {
    return(
        <>
        <ExploreCourse/>
        <div className=" lg:px-[100px]">
        <TechCourses/>
        <CertificationsTec/>
        <ProcessTrainings/>
        <SoftSkillTec/>
        
        </div>
        
        
        </>
    )
}
export default Course;