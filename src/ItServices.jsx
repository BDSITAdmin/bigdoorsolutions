import React from 'react';
import ourservices from './assets/ourservices.png';
import ourservices1 from './assets/ourservices1.png';
import ourservices2 from './assets/ourservices2.png';
import ourservices3 from './assets/ourservices3.png';
import ourservices4 from './assets/ourservices4.png';
import AboutImage from './assets/Rectangle 3278.png'
import Services from './components/Services';
import OurService from './components/ourServices';
import ContactForm from './components/contactForm';





const ItServices = () => {
  return (
    <>
       <section className="flex flex-col items-center justify-between px-8 py-16 bg-blue-500 md:px-8 lg:px-32 md:flex-row">
        <div className="max-w-lg text-white">
          <p className="mb-4 font-inter text-base font-semibold leading-[19.36px] tracking-[0.06em] uppercase">Internship Program</p>
          <h1 className="mb-6 font-sora text-4xl font-semibold leading-[50.4px] ">
            Learn what your college can’t teach
          </h1>
          <p className="mb-6 font-inter text-sm font-light leading-[21px] ">
            We know the biggest challenge isn’t finding a job—it’s having the right skills. At BigDoor, we break the roadblocks between academic learning and real-world demands. Get yourself industry-ready with our courses, combining technical knowledge, critical thinking, and communication skills in the right way to open doors to big opportunities.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="px-6 py-3 font-semibold text-black transition duration-300 bg-yellow-400 rounded-md hover:bg-yellow-500">
              Our Courses
            </button>
            <button className="px-6 py-3 font-semibold text-yellow-400 transition duration-300 border border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black">
              Book a call
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12">
          <img
            src={AboutImage}
            alt="Student studying"
            className=" shadow-lg rounded-xl"
          />
        </div>
      </section>



      <div className="p-4 md:p-6 lg:px-[120px]">
     
        



        <div className="flex flex-col py-5  items-center">
          <h3 className='text-[16px] font-semibold text-blue-700'>WHAT WE OFFER</h3>
          <div className="">
            <h1 className='text-[28px] lg:text-[40px] text-DavyGrey font-semibold font-sora'>Our
              <span className=' text-[#3E93E7] ml-2 '>Services</span> </h1>
          </div>

          <p className='text-[14px] text-center px-0'>
            Our comprehensive range of services includes web design, mobile app development, SEO,
            social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results.
          </p>
        </div>

        <div className="py-5">
          <OurService />
        </div>
        <div className=" py-5">
          <div className="flex flex-col  items-center">
            <div className="flex flex-row py-10 ">
              <h1 className='text-xl md:text-[28px] lg:text-[40px] text-DavyGrey font-semibold font-sora'>What we will
                <span className='text-[#3E93E7] ml-2'>help you with?</span> </h1>
            </div>
          </div>
          <Services />
        </div>
        <div className=" bg-[#E0ECFF80]/50 rounded-3xl flex flex-col md:flex-row md:p-8 mt-10 items-center ">
          <div className="w-full md:w-6/12 md:mr-8 ">
            <div className="w-9/12 ml-8 mt-5">
              <h3 className='text-[16px] font-semibold text-blue-700'>WHAT WE OFFER</h3>
              <div className="">
                <h1 className='text-[28px] lg:text-[40px] text-DavyGrey font-semibold font-sora'>Our
                  <span className=' text-[#3E93E7] ml-2 '>Services</span> </h1>
              </div>

              <p className='text-[14px] text-justify px-0'>
                Our comprehensive range of services includes web design, mobile app development, SEO,
                social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results.
              </p>
            </div>

          </div>

          <div className="w-full md:w-5/12  bg-white p-4 rounded-lg mt-8 shadow-custom">
            

            <ContactForm />
          </div>

        </div>




      </div>
    </>
  );
};

export default ItServices;