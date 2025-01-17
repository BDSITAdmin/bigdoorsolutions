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
    <footer className="py-10 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
          <div className="mb-8 text-center lg:mb-0 lg:text-left">

            <Link to="/" className="block w-32 mb-4 lg:mx-0">

              <img src={BigdoorLogo} alt="BigDoor Logo" />
            </Link>
            <p className="mb-4 text-gray-400 w-[250px]">
            #1078 , Ground floor , 6th Cross, Venkatadri Layout , J.P Nagar 4th Phase Bangalore-560076
            </p>
            <div className="flex justify-center space-x-4 lg:justify-start">
              <a className='hover:bg-[#1F5E9E]'>
                <img  src={Social} alt="Social"
 
                target="blank"
                rel="noopener noreferrer"/>
              </a>
              <a href="https://www.facebook.com/bigdooritsolutions?mibextid=LQQJ4d" className='hover:bg-[#1F5E9E]'>
                <img src={Social1} alt="Social1"
                target="blank"
                rel="noopener noreferrer"/>
              </a>
              <a href='https://www.instagram.com/bigdooritsolutions?igsh=dWEwbzR4aHUxeTdu' className='hover:bg-[#1F5E9E]'>
                <img src={Social2} alt="Social2"
                target="blank"
                rel="noopener noreferrer"/>
              </a>
              <a className='hover:bg-[#1F5E9E]'>
                <img src={Social3} alt="Social3"
                target="_blank"
                rel="noopener noreferrer"/>
              </a>
              <a href='https://www.linkedin.com/company/bigdoor-solutions-in/' class="w-[46px] h-[46px]  bg-[#363B4754] text-center flex items-center justify-center hover:bg-[#1F5E9E]">
                <img src={Social4} alt="Social4"
                target="blank"
                rel="noopener noreferrer"/>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
            <div>
              <h4 className="mb-4 text-lg font-semibold">SERVICES</h4>
              <ul className="space-y-2 text-[#8C94A3]">
                <li><a href="#" className="hover:text-white">IT Training & Services Program</a></li>
                <li><a href="#" className="hover:text-white">Enterprise App Development (Mobile & Web)</a></li>
                <li><a href="#" className="hover:text-white">Process Training & Certifications</a></li>
                <li><a href="#" className="hover:text-white">Business Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">INTERNSHIP PROGRAM</h4>
              <ul className="space-y-2 text-[#8C94A3]">
                <li><a href="#" className="hover:text-white">Full Stack Web Development</a></li>
                <li><a href="#" className="hover:text-white">DevOps</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Career</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">OTHER LINKS</h4>
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
