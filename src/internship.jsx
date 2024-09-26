import React from 'react';
import Frame1 from './assets/Frame 1000003599.png';
import Frame2 from './assets/Frame1.png';
import Frame3 from './assets/Frame2.png';
import Frame4 from './assets/Frame3.png';
import Frame5 from './assets/Frame4.png';
import Frame6 from './assets/Frame5.png';
import Frame7 from './assets/Frame6.png';
import Frame8 from './assets/Frame7.png';
import Frame9 from './assets/Frame8.png';
import Frame10 from './assets/Frame9.png';
import Pathway from './components/Pathway';
import ourservices from './assets/ourservices.png';
import ourservices1 from './assets/ourservices1.png';
import ourservices2 from './assets/ourservices2.png';
import ourservices3 from './assets/ourservices3.png';
import ourservices4 from './assets/ourservices4.png';
import CheckCircle from './assets/CheckCircle.png';
import AboutImage from './assets/Rectangle 327.png';
import EligibilitySection from './components/EligibilitySection';

const data = [
  {
    id: 1,
    title: 'Live & Self-paced Learning',
    description: ['Expert-led Trainings', 'Professional Mentoring', 'Teamwork and Collaboration'],
    imageUrl: ourservices,
    bgColor: "bg-[#E0ECFF]",
  },
  {
    id: 2,
    title: 'Internship Certificate',
    description: ['Training & Internship Certificate', 'Performance Assessment Certificate', 'Experience Certificate'],
    imageUrl: ourservices1,
    bgColor: 'bg-[#DCF2EF]',
  },
  {
    id: 3,
    title: 'Lifetime access',
    description: ['Life-time Course Access'],
    imageUrl: ourservices2,
    bgColor: 'bg-[#FFE8FE]',
  },
  {
    id: 4,
    title: 'Live Projects',
    description: ['Client-based Projects', 'Assignments & Assessments'],
    imageUrl: ourservices3,
    bgColor: 'bg-[#FFE6D4]',
  },
  {
    id: 5,
    title: 'Technical Support',
    description: ['24/7 Query Assistance', 'Project Support'],
    imageUrl: ourservices4,
    bgColor: 'bg-[#FFDEDE]',
  },
  {
    id: 6,
    title: 'Variable Program',
    description: ['0-9 Months Internship Program'],
    imageUrl: ourservices2,
    bgColor: 'bg-[#EEE8FF]',
  },
];

const ProgramDetails = () => {
  const iconImages = [
    { src: Frame1, number: '150+', text: '  hours Instructor-Led Session' },
    { src: Frame2, number: '60+', text: ' hours of self-paced videos' },
    { src: Frame3, number: '280+', text: ' hours Cloud labs-enabled learning' },
    { src: Frame4, number: '50+', text: ' Auto Graded Assessment' },
    { src: Frame5, number: 'Structured', text: ' Industry validated curriculum' },
    { src: Frame6, number: '70+ ', text: 'hours of problem-solving sessions' },
    { src: Frame7, number: '267+', text: ' Hands-on exercises' },
    { src: Frame8, number: '3', text: ' hackathons & 2 mock interviews' },
    { src: Frame9, number: '36+', text: ' hours of career coaching' },
    { src: Frame10, number: '20+', text: ' Real-world projects' },
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-between px-8 py-16 bg-blue-500 sm:px-16 md:px-24 lg:px-32 md:flex-row">
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
            className="md:h-[382px] md:w-[760px] shadow-lg rounded-xl"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-6 py-12 md:px-12 lg:px-16">
        <p className="mb-2 font-poppins text-base font-semibold leading-6 tracking-[0.06em] text-[#1F5E9E]">
          GETTING YOU READY FOR EVERCHANGING IT INDUSTRY
        </p>
        <h1 className="font-sora text-3xl font-semibold leading-[40.4px] ">
          We don't teach for exam results
        </h1>
        <h2 className="text-[#3E93E7] font-sora text-3xl font-semibold leading-[50.4px] ">
          We build you for a lifelong career
        </h2>
        <p className="font-inter text-base  leading-[19.36px] text-center">
          We are your <span className="font-semibold">'all-in-one solution'</span> — Skills, Experience, and Placement; all under one roof.
        </p>
        <div className="mt-2">
          <hr className="h-1 mx-auto bg-[#2E89E5] border-none w-[70px]" />
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div key={item.id} className={`${item.bgColor} shadow-lg rounded-lg overflow-hidden`}>
              <img src={item.imageUrl} alt={item.title} className="object-cover w-full h-48" />
              <div className={`p-4 `}>
                <h3 className="mb-2 text-xl font-semibold text-purple-900">{item.title}</h3>
                <ul className="text-gray-600">
                  {item.description.map((desc, index) => (
                    <li key={index} className="flex items-center">
                      <span><img src={CheckCircle} alt="" /></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-between px-8 py-16 bg-blue-50 sm:px-16 md:px-24 lg:px-32 md:flex-row">
        <div className="">
          <div className="px-4 mx-auto text-center max-w-7xl">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-AliceBlue">Program Details</h2>
            <h1 className="mt-2 text-3xl font-bold text-BlackTie sm:text-4xl">Why You Should <span className="text-[#3E93E7]">Take This Opportunity</span></h1>
            <p className="mt-4 max-w-6xl font-inter text-sm font-medium leading-[21px] text-[#000000] mx-auto">Our Bootcamp offers a structured, industry-validated curriculum with over 800 hours of hands-on learning, real-world projects, and expert-led sessions to elevate your IT career.</p>
            <div className="mt-2">
          <hr className="h-1 mx-auto bg-[#2E89E5] border-none w-[70px]" />
        </div>
            <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-5">
              {iconImages.map((item, index) => (
                <div key={index} className="flex p-2 bg-white rounded-lg shadow">
                  <img src={item.src} alt={item.text} className="w-12 h-12 mr-4" />
                  <span className="text-[#B4835A] text-[13px] font-medium">{item.number}</span>
                  <span className="font-inter  text-[11px] leading-[22px]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Pathway />
      <EligibilitySection />

    </>
  );
};

export default ProgramDetails;
