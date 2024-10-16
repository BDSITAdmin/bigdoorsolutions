import React from 'react';
import image15 from '../assets/image 15.png';
import image16 from '../assets/image 16.png';
import image17 from '../assets/image 17.png';
import image18 from '../assets/image 18.png';
import image19 from '../assets/image 19.png';
import image20 from '../assets/image 20.png';


const EligibilitySection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-between px-8 py-16 sm:px-16 md:px-24 lg:px-32">
        <div className="w-full py-12 text-center bg-white">
          <div className="mb-4 text-[16px] font-inter xl:text-xl font-semibold text-blue-700 uppercase ">
            Eligibility
          </div>
          <h2 className="mb-4 text-[27px]   lg:text-[40px] xl:mt-5 xl:text-5xl text-DavyGrey font-semibold font-sora  leading-[50.4px]">
            Who Should Take <span className="text-[#3E93E7]">This Opportunity</span>
          </h2>
          <p className="mx-auto mb-10 text-[#000000] ">
            Our Bootcamp offers a structured, industry-validated curriculum with over 800 hours of hands-on learning, real-world projects, and expert-led sessions to elevate your IT career.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:px-[0px] md:px-[0px] gap-[60px] text-[#000033] mb-6">
          <div className="flex items-center item">
            <img src={image15} className="w-16 h-16" alt='holo'></img>
            <h3 className='ml-4 text-lg font-semibold font-sora'>Freshers/Beginners</h3>
          </div>
          <div className="flex items-center item">
            <img src={image16} className="w-16 h-16" alt='holo'></img>
            <h3 className='ml-4 text-lg font-semibold font-sora'>IT Professionals/Leaders</h3>
          </div>
          <div className="flex items-center item md:ml-4">
            <img src={image17} className="w-16 h-16" alt='holo'></img>
            <h3 className='ml-4 text-lg font-semibold font-sora'>Cloud Practitioners</h3>
          </div>
          <div className="flex items-center mt-4 item">
            <img src={image18} className="w-16 h-16" alt='holo'></img>
            <h3 className='ml-4 text-lg font-semibold font-sora'>DevOps Engineers</h3>
          </div>
          <div className="flex items-center mt-4 item">
            <img src={image19} className="w-16 h-16" alt='holo'></img>
            <h3 className='ml-4 text-lg font-semibold font-sora'>Developers</h3>
          </div>
          <div className="flex items-center mt-4 item md:ml-4">
            <img src={image20} className="w-16 h-16" alt='holo'></img>
            <h3 className='text-lg font-semibold ml- font-sora'>IT Operation Engineers</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default EligibilitySection;






