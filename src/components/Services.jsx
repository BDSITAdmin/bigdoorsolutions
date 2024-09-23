import React from 'react';
import Vector1 from '../assets/Vector1.png';
import Vector2 from '../assets/Vector2.png';
import Vector3 from '../assets/Vector3.png';

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
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border-l-4 border-blue-500 bg-white shadow-md transition-transform transform hover:scale-105 hover:bg-blue-100" // Change background color on hover
            >
              <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
