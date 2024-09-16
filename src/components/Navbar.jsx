import Logo from '../assets/logo.png';

const Navbar = ()=>{
    return(
        <>
        <navbar className="flex px-5 py-2 ">
            <div className="w-1/2 bg-white">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="w-1/2 flex  items-center justify-end gap-10 font-inter text-[16px] bg-white">
              <div className="cursor-pointer">
                It Solutions
                </div>
              <div className="cursor-pointe">
                Internship Programs
                </div>
              <div className="cursor-pointe">
                About Us
                </div>
              <div className="cursor-pointe">
                Contact Us
                </div>
            </div>
        </navbar>
        </>
    )
}
export default Navbar;