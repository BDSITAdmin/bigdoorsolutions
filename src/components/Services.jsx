import React from 'react';
import Vector1 from '../assets/Vector1.png';
import Vector2 from '../assets/Vector2.png';
import Vector3 from '../assets/Vector3.png';
import Vector4 from '../assets/Vector4.png';
import Vector5 from '../assets/Vector5.png';
import Vector6 from '../assets/Vector6.png';

const Services = () => {
  const services = [
    {
      title: 'Poor User Experience',
      description: 'Improve user satisfaction with a seamless and intuitive interface.',
      icon: Vector1
    },
    {
      title: 'Scalability Issues',
      description: 'Ensure your application can handle growth and increased traffic.',
      icon: Vector2
    },
    {
      title: 'Security Vulnerabilities',
      description: 'Protect your data and users with robust security measures.',
      icon: Vector3
    },
    {
      title: 'Lack of Innovation',
      description: 'We timely innovate  in your digital products so you don t fall behind competition, struggling to attract customers and  stand out in a competitive market.',
      icon: Vector4
    },
    {
      title: 'Limited Resource',
      description: 'Our diverse team of experts supports your internal resources, providing the skills and knowledge needed to lead your projects.',
      icon: Vector5
    },
    {
      title: 'Inefficient Processes',
      description: 'Our team seamlessly integrate new technologies with your existing systems, ensuring smooth transitions and minimal disruptions.',
      icon: Vector6
    }
  ];

  return (
    <div className="container mx-auto ">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-start p-4 border-l-4 border-[#B4835A]
               bg-white shadow-md transition-transform transform hover:scale-105 hover:bg-blue-100" // Change background color on hover
            >
              <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className='text-sm'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
