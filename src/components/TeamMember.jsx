import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Smith",
      title: "Co-Founder & CEO",
      image: "https://via.placeholder.com/150",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#",
      }
    },
    {
      name: "John Smith",
      title: "Co-Founder & CEO",
      image: "https://via.placeholder.com/150",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#",
      }
    },
    {
      name: "John Smith",
      title: "Co-Founder & CEO",
      image: "https://via.placeholder.com/150",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#",
      }
    },
    // Add more team members if needed
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Our Team <span className="text-blue-600">Members</span>
        </h2>
        <p className="text-gray-500 mb-12">
          At BigDoor IT Solutions, 12+ industry leaders with expertise in areas like Content Management,
          Cloud Computing, DevOps Engineering, Program Management, and People Management will lead you on your path to excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-blue-500 rounded-lg shadow-lg p-6 text-white">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-200">{member.title}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href={member.social.instagram} className="text-white hover:text-blue-200">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={member.social.twitter} className="text-white hover:text-blue-200">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={member.social.linkedin} className="text-white hover:text-blue-200">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
