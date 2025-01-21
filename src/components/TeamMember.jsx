import React from 'react';
import CardImage from '../assets/priyanka.png'
import CardImage1 from '../assets/Alisha.png'
import CardImage2 from '../assets/Rajdeep.png'
import CardImage3 from '../assets/Swaroop.png'
import CardImage5 from '../assets/Mahadeo1.jpg'
import CardImage4 from '../assets/Sandhya.png'
import CardImage6 from '../assets/Monu.jpg'
import CardImage7 from '../assets/Renuka.jpg'
import CardImage8 from '../assets/Yogesh.png'
import CardImage9 from '../assets/Siddarth.jpg'
import CardImage10 from '../assets/Shrusti.jpg'

import Instagram  from '../assets/iicon.png';
import twitter from '../assets/xicon.png';
import linkedin from '../assets/licon.png';

const TeamMembers = () => {
  const members = [
    { id: 1, name: 'Priyanka Srivastava', title: 'Director & B D Manager', imgSrc: CardImage },
    { id: 2, name: 'Amisha Abhishek', title: 'Director & Human Resource', imgSrc:CardImage1 },
    { id: 3, name: 'Rajdeep Sinha', title: 'Director & Human Resource', imgSrc: CardImage2 },
    { id: 4, name: 'Swaroop Kuppa', title: 'Business Development Manager', imgSrc: CardImage3},
    { id: 5, name: 'Sandhya Wadla', title: 'Business Development Manager', imgSrc: CardImage4 },
    { id: 5, name: 'Mahadeo Kr', title: 'Sr. Frontend Developer', imgSrc: CardImage5, linkedin:"https://www.linkedin.com/in/mahadeo-tanti-82875431a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  },
    { id: 6, name: 'Monu Yadav', title: 'Sr. Frontend Developer', imgSrc:CardImage6,linkedin:"https://www.linkedin.com/in/monu-yadav-a4803223a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { id: 7, name: 'Renuka', title: 'Sr. UI/UX Designer', imgSrc: CardImage7 },
    { id: 8, name: 'Yogesh Mayekar', title: 'Technical Project Manager', imgSrc: CardImage8,linkedin:"https://www.linkedin.com/in/mayekaryogesh/"},
    { id: 9, name: 'Siddharth Tamse', title: 'Java & Python Developer', imgSrc:CardImage9,linkedin:"https://www.linkedin.com/in/siddharth-tamse-35a392262" },
    { id: 9, name: 'Srushti Patil', title: 'DevOps Engineer', imgSrc:CardImage10 ,linkedin:"https://www.linkedin.com/in/srushti-patil-655299347/"},
    // { id: 10, name: 'Renuka', title: 'Senior Graphic Designer', imgSrc: CardImage7 },
    // { id: 11, name: 'Swaroop Kuppa', title: 'Director & Human Rresource', imgSrc: CardImage3},
  ];

  return (
    <div className="px-4 py-8 text-center md:px-8 ">
      <h2 className="text-[27px]   lg:text-[40px] xl:mt-5 xl:text-5xl text-DavyGrey font-semibold font-sora leading-[50.4px] mb-4">Our Team <span className="text-doggerblue">Members</span> </h2>
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
            {/* <span className="block w-auto mt-12 h-[2px] bg-gradient-to-r from-transparent via-lightbrown to-transparent ">

            </span> */}


            <div className="flex justify-center gap-2 mt-4">
              
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className=" text-blue-500 rounded-full bg-BleuDe" aria-label={`Follow ${member.name} on Instagram`}>
                
                <img src={Instagram} alt="Instagram" className="w-[50px] h-[50px]" />
              </a>
              <a href="#" className=" text-blue-500 rounded-full bg-BleuDe" aria-label={`Follow ${member.name} on Twitter`}>
                <img src={twitter} alt="Twitter" className="w-[50px] h-[50px]" />
              </a>
              <a href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"className=" text-blue-500 rounded-full bg-BleuDe" aria-label={`Follow ${member.name} on LinkedIn`}>
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
