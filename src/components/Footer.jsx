import React from 'react';
import { Link } from 'react-router-dom';
import BigdoorLogo from '../assets/logo 417.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Left Section: Logo and Social Media */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left">

            <Link to="/" className="block w-32 mb-4  lg:mx-0">

              <img src={BigdoorLogo} alt="BigDoor Logo" />
            </Link>
            <p className="text-gray-400 mb-4">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.
            </p>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.facebook.com/YourFacebookPage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/YourInstagramProfile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/YourLinkedInProfile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.twitter.com/YourTwitterProfile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/YourYouTubeProfile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">SERVICES</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">IT Training & Services Program</a></li>
                <li><a href="#" className="hover:text-white">Enterprise App Development (Mobile & Web)</a></li>
                <li><a href="#" className="hover:text-white">Process Training & Certifications</a></li>
                <li><a href="#" className="hover:text-white">Business Consulting</a></li>
              </ul>
            </div>

            {/* Internship Program */}
            <div>
              <h4 className="text-lg font-semibold mb-4">INTERNSHIP PROGRAM</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Full Stack Web Development</a></li>
                <li><a href="#" className="hover:text-white">DevOps</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Career</a></li>
              </ul>
            </div>

            {/* Other Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">OTHER LINKS</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500">
          © 2024 - BigDoor Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
