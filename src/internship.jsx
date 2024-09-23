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
import EligibilitySection from './components/EligibilitySection';

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

  return (<>
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-sm text-AliceBlue font-semibold tracking-wide uppercase">Program Details</h2>
        <h1 className="mt-2 text-3xl font-bold text-BlackTie sm:text-4xl">Why You Should <span className="text-[#3E93E7]">Take This Opportunity</span></h1>
        <p className="mt-4 max-w-6xl text-sm text-[#000000] mx-auto">Our Bootcamp offers a structured, industry-validated curriculum with over 800 hours of hands-on learning, real-world projects, and expert-led sessions to elevate your IT career.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {iconImages.map((item, index) => (
            <div key={index} className="flex p-2 bg-white shadow rounded-lg">
              <img src={item.src} alt={item.text} className="h-12 w-12 mr-4" />
              <span className="text-[#B4835A] text-sm font-medium">{item.number}</span>
              <span className="text-gray-800 text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Pathway/>
    <EligibilitySection/>
    </>
  );
};

export default ProgramDetails;
