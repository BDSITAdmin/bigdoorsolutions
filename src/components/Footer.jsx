import React from 'react';
import { Link } from 'react-router-dom';
import BigdoorLogo from '../assets/logo 417.png';
import Social from '../assets/Social.png';
import Social1 from '../assets/Social1.png';
import  Social2 from '../assets/Social2.png';
import   Social3 from '../assets/Social3.png';
import   Social4  from '../assets/Social4.png';



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="mb-8 lg:mb-0 text-center lg:text-left">

            <Link to="/" className="block w-32 mb-4  lg:mx-0">

              <img src={BigdoorLogo} alt="BigDoor Logo" />
            </Link>
            <p className="text-gray-400 mb-4">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a className='hover:bg-[#1F5E9E]'>
                <img  src={Social} alt="Social"

                target="_blank"
                rel="noopener noreferrer"/>
              </a>
              <a href="https://google.com" className='hover:bg-[#1F5E9E]'>
                <img src={Social1} alt="Social1"
                target="_blank"
                rel="noopener noreferrer"/>
              </a>
              <a className='hover:bg-[#1F5E9E]'>
                <img src={Social2} alt="Social2"
                target="_blank"
                rel="noopener noreferrer"/>
              </a>
              <a className='hover:bg-[#1F5E9E]'>
                <img src={Social3} alt="Social3"
                target="_blank"
                rel="noopener noreferrer"/>
              </a>
              <a class="w-[46px] h-[46px]  bg-[#363B4754] text-center flex items-center justify-center hover:bg-[#1F5E9E]">
                <img src={Social4} alt="Social4"
                target="_blank"
                rel="noopener noreferrer"/>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">SERVICES</h4>
              <ul className="space-y-2 text-[#8C94A3]">
                <li><a href="#" className="hover:text-white">IT Training & Services Program</a></li>
                <li><a href="#" className="hover:text-white">Enterprise App Development (Mobile & Web)</a></li>
                <li><a href="#" className="hover:text-white">Process Training & Certifications</a></li>
                <li><a href="#" className="hover:text-white">Business Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">INTERNSHIP PROGRAM</h4>
              <ul className="space-y-2 text-[#8C94A3]">
                <li><a href="#" className="hover:text-white">Full Stack Web Development</a></li>
                <li><a href="#" className="hover:text-white">DevOps</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Career</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">OTHER LINKS</h4>
              <ul className="space-y-2 text-[#8C94A3]">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          © 2024 - BigDoor Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
