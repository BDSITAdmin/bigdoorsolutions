import React from 'react';
import { useNavigate } from 'react-router-dom';



const FooterSection = () => {
  const navigate = useNavigate();
const handleNavigation = () => {
navigate('./ContactUs'); // Replace '/new-page' with the actual path you want
};
  return (
    <section className="bg-[#272A33] text-white py-12">
      <div className="container flex flex-col items-center justify-between p-4 mx-auto md:flex-row">
        <div className="mb-8 md:mb-0">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Let’s build something great together.</h2>
          <button className="px-6 py-2 text-white transition-all bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
          onClick={handleNavigation}
           >
            Get in touch →
          </button>
        </div>
        <div className="flex space-x-12">
          <div className="text-center">
            <h3 className="text-4xl font-bold">22</h3>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">18</h3>
            <p className="text-gray-400">Projects completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">38+</h3>
            <p className="text-gray-400">Skilled experts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
