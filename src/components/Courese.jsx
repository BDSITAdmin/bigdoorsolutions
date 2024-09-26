import React from 'react';
import 'animate.css';
import backgroundImage from '../assets/image 1.png';

const ExploreCourse = () => {
  return (
    <section
      className="relative bg-cover bg-center md:h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center animate__animated animate__fadeIn animate__slow">
        <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl animate__animated animate__fadeInDown animate__delay-1s">
          Explore Course
        </h1>
        <p className="max-w-sm mx-auto mb-6 text-gray-300 sm:max-w-md md:max-w-lg sm:mb-8 animate__animated animate__fadeInUp animate__delay-1s">
          Discover the trending courses designed by industry leaders enabled with the latest tools and technologies. 
          Our unique course structure ensures you gain the skills most desired by top IT employers.
        </p>
        <div className="mt-4 animate__animated animate__fadeInUp animate__delay-3s">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 mx-auto text-white transition duration-300 sm:w-8 sm:h-8 hover:text-blue-500 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourse;
