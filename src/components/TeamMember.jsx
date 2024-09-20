import React from 'react';
import CardImage from '../assets/Card.png'
import Instagram  from '../assets/iicon.png';
import twitter from '../assets/xicon.png';
import linkedin from '../assets/licon.png';

const TeamMembers = () => {
  const members = [
    { id: 1, name: 'John Smith', title: 'Co-Founder & CEO', imgSrc: CardImage },
    { id: 2, name: 'Jane Doe', title: 'Co-Founder & CEO', imgSrc:CardImage },
    { id: 3, name: 'Emily Johnson', title: 'Co-Founder & CEO', imgSrc: CardImage },
    { id: 4, name: 'Michael Brown', title: 'Co-Founder & CEO', imgSrc: CardImage},
  ];

  return (
    <div className="text-center px-4 py-8 md:px-8 lg:px-16">
      <h2 className="text-Azure font-sora text-4xl font-semibold leading-[50.4px] mb-4">Our Team <span className="text-doggerblue">Members</span> </h2>
      <p className="mb-8 text-center font-inter text-sm font-normal leading-[16.94px] text-soldcolour mx-auto w-3/4 ">
        At BigDoor IT Solutions, 12+ industry leaders with expertise in areas like Content Management, Cloud Computing, DevOps Engineering, Program Management, and People Management will lead you on your path to excellence.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {members.map(member => (
          <div key={member.id} className="bg-BleuDe text-white p-4 rounded-lg shadow-lg w-full sm:w-80 md:w-96 lg:w-1/5">
            <img 
              src={member.imgSrc} 
              alt={`Photo of ${member.name}`} 
              className="rounded-full w-24 h-24 mx-auto mb-4 object-cover" 
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <button 
              className="bg-customgradient  shadow-[1px_1px_0_0_white] custom-border-shadow text-custom-white  p-2 rounded-full w-full"
              onClick={() => alert(`More details about ${member.name}`)}
            >
              {member.title}
            </button>
            <div className="flex justify-center gap-2 mt-4">
              <a href="#" className="bg-BleuDe text-blue-500 p-2 rounded-full" aria-label={`Follow ${member.name} on Instagram`}>
                <img src={Instagram} alt="Instagram" className="w-[50px] h-[50px]" />
              </a>
              <a href="#" className="bg-BleuDe text-blue-500 p-2 rounded-full" aria-label={`Follow ${member.name} on Twitter`}>
                <img src={twitter} alt="Twitter" className="w-[50px] h-[50px]" />
              </a>
              <a href="#" className="bg-BleuDe text-blue-500 p-2 rounded-full" aria-label={`Follow ${member.name} on LinkedIn`}>
                <img src={linkedin} alt="LinkedIn" className="w-[50px] h-[50px]" />
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TeamMembers;
