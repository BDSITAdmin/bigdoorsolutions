import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md px-5 py-2">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className="cursor-pointer">
            <img src={Logo} alt="Logo" className="w-24" />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-10 font-inter text-[16px]">
          <Link to="/it-solutions" className="cursor-pointer hover:text-blue-600">
            IT Solutions
          </Link>
          <Link to="/internship-programs" className="cursor-pointer hover:text-blue-600">
            Internship Programs
          </Link>
          <Link to="/AboutUs" className="cursor-pointer hover:text-blue-600">
            About Us
          </Link>
          <Link to="/contact-us" className="cursor-pointer hover:text-blue-600">
            Contact Us
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 font-inter text-[16px] text-center">
          <Link to="/it-solutions" onClick={toggleMenu} className="block cursor-pointer hover:text-blue-600">
            IT Solutions
          </Link>
          <Link to="/internship-programs" onClick={toggleMenu} className="block cursor-pointer hover:text-blue-600">
            Internship Programs
          </Link>
          <Link to="/AboutUs" onClick={toggleMenu} className="block cursor-pointer hover:text-blue-600">
            About Us
          </Link>
          <Link to="/contact-us" onClick={toggleMenu} className="block cursor-pointer hover:text-blue-600">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
