import React from "react";
import { Certifications } from '../lib/certifications';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const CertificationsTec = () => {
    const navigate = useNavigate();
  
    const handleNavigation = (path) => {
      navigate(path); // Navigate to the dynamic path
    };
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center flex-wrap space-x-4">
          <h2 className="font-sora text-[30px] font-semibold leading-[50.4px] tracking-[-0.01em] text-[#5A5A5A]">
          Value added certifications
          </h2>
          <p className="text-Azure md:w-[50%]">
          our unique Value-Added Training Certificates provide an  advantage  in your career by combining essential tech skills with industry-recognized skills. We make each of the above tech course a power package for you by including  these free Certifications. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {Certifications.map((Certifications) => (
            <div key={Certifications.id} className="bg-white overflow-hidden">
              <img src={Certifications.image} alt={Certifications.title} className="w-full h-48 object-cover" />
              <div className="pt-6">
                <div className="flex justify-between items-center">
                  <span className="bg-[#E1F7E3] text-[#15711F] text-xs px-2 py-1 inline-block uppercase font-semibold tracking-wide">
                    {Certifications.badge}
                  </span>
                  <div className="text-gray-500 text-sm flex items-center">


                    <img src={Certifications.image1} alt="image" />
                    {Certifications.duration}
                  </div>
                </div>

                <h3 className="mt-4 font-sora text-[20px] font-semibold leading-[22px] text-[##1D2026]">{Certifications.title}</h3>
                <p className="mt-2 text-[#333333] font-inter text-[14px] font-normal leading-[24px]">
                  {Certifications.description}
                </p>
                <button className="flex items-center justify-center mt-4 w-full bg-white border-[1px] 
                border-[#2E89E5] text-[#2E89E5] font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 
                hover:text-white transition duration-200"
                onClick={() => handleNavigation(course.path)}>
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

export default CertificationsTec;
