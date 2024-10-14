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
    <div className="px-4 py-8 text-center md:px-8 ">
      <h2 className="text-Azure font-sora text-4xl font-semibold leading-[50.4px] mb-4">Our Team <span className="text-doggerblue">Members</span> </h2>
      <p className="mb-8 text-center font-inter text-lg font-normal leading-[30px] text-soldcolour mx-auto sm:w-3/4 ">
        At BigDoor IT Solutions, 12+ industry leaders with expertise in areas like Content Management, Cloud Computing, DevOps Engineering, Program Management, and People Management will lead you on your path to excellence.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map(member => (
          <div key={member.id} className="w-full p-4 text-white rounded-lg shadow-lg bg-BleuDe sm:w-80 md:w-96 lg:w-1/5">
            <img 
              src={member.imgSrc} 
              alt={`Photo of ${member.name}`} 
              className="object-cover w-24 h-24 mx-auto mb-4 rounded-full" 
            />
            <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
            <button 
              className="bg-customgradient  shadow-[1px_1px_0_0_white] custom-border-shadow text-custom-white  p-2 rounded-full w-full mt-4"
              onClick={() => alert(`More details about ${member.name}`)}
            >
              {member.title}
            </button>
            <span className="block w-auto mt-12 h-[2px] bg-gradient-to-r from-transparent via-lightbrown to-transparent "></span>


            <div className="flex justify-center gap-2 mt-4">
              
              <a href="#" className="p-2 text-blue-500 rounded-full bg-BleuDe" aria-label={`Follow ${member.name} on Instagram`}>
                
                <img src={Instagram} alt="Instagram" className="w-[50px] h-[50px]" />
              </a>
              <a href="#" className="p-2 text-blue-500 rounded-full bg-BleuDe" aria-label={`Follow ${member.name} on Twitter`}>
                <img src={twitter} alt="Twitter" className="w-[50px] h-[50px]" />
              </a>
              <a href="#" className="p-2 text-blue-500 rounded-full bg-BleuDe" aria-label={`Follow ${member.name} on LinkedIn`}>
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
