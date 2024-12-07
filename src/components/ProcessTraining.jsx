import React from "react";
import { ProcessTrainings } from '../lib/ProcessTraining';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

 const ProcessTraining = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
      navigate(path); // Navigate to the dynamic path
    };
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center flex-wrap space-x-4">
          <h2 className="font-sora text-[30px] font-semibold leading-[50.4px] tracking-[-0.01em] text-[#5A5A5A]">
          Process Trainings
          </h2>
          <p className="text-Azure md:w-[50%]">
          Our comprehensive process training courses provide a  deep understanding of industry-standard processes equipping you with the methodologies and frameworks to improve efficiency in your projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {ProcessTrainings.map((ProcessTrainings) => (
            <div key={ProcessTrainings.id} className="bg-white overflow-hidden">
              <img src={ProcessTrainings.image} alt={ProcessTrainings.title} className="w-full h-48 object-cover" />
              <div className="pt-6">
                <div className="flex justify-between items-center">
                  <span className="bg-[#E1F7E3] text-[#15711F] text-xs px-2 py-1 inline-block uppercase font-semibold tracking-wide">
                    {ProcessTrainings.badge}
                  </span>
                  <div className="text-gray-500 text-sm flex items-center">


                   <img src={ProcessTrainings.image1}  alt="image" className="" />

                    {ProcessTrainings.duration}
                  </div>
                </div>

                <h3 className="mt-4 font-sora text-[20px] font-semibold leading-[22px] text-[##1D2026]">{ProcessTraining.title}</h3>
                <p className="mt-2 text-[#333333] font-inter text-[14px] font-normal leading-[24px]">
                  {ProcessTrainings.description}
                </p>
                <button className="flex items-center justify-center mt-4 w-full
                 bg-white border-[1px] border-[#2E89E5] text-[#2E89E5] 
                 font-semibold py-2 px-4 rounded-lg hover:bg-blue-500
                  hover:text-white transition duration-200"
                  onClick={() => handleNavigation(ProcessTrainings.path)}>
                  View Details <FaArrowRight className="ml-4 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTraining;
