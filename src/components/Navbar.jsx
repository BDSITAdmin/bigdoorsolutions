import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="flex px-5 py-2">
      <div className="w-1/2 bg-white">
      <Link to='/'  className='cursor-pointer'> <img src={Logo} alt="Logo" /></Link>
       
      </div>
      <div className="w-1/2 flex items-center justify-end gap-10 font-inter text-[16px] bg-white">
        <Link to="/it-solutions" className="cursor-pointer">
          IT Solutions
        </Link>
        <Link to="/internship-programs" className="cursor-pointer">
          Internship Programs
        </Link>
        <Link to="/AboutUs" className="cursor-pointer">
          About Us
        </Link>
        <Link to="/contact-us" className="cursor-pointer">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
