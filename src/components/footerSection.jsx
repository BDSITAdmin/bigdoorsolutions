import React from 'react';

const FooterSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12">

      


      <div className="container p-4 mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Heading and Button */}
        <div className="mb-8  md:mb-0">


          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let’s build something great together.</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg transition-all">
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
