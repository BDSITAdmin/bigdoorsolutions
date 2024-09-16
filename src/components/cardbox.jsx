import Cardimg1 from '../assets/Frame 145.png';
import { FaArrowRight } from "react-icons/fa";

const Card = () =>{
    return(
        <>
        <div className=" h-[322px] w-[424px] p-5 mt-[40px] bg-slate-400 flex flex-col items-center">
            <img src={Cardimg1}alt=""/>
            <h3 className='text-[16px] font-medium font-inter py-3'>
                IT Training & Internship Programs </h3>
            <p className='text-[14px]  text-justify'>
                We aim to create a space where curiosity about technology
                 grows without the fear of staying behind in race. With our expertise, we are dedicated to 
                analyzing upcoming trends and embracing new technologies with agility.</p>
                <button
              type="button"
              className="inline-flex items-center mt-4 rounded bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-black/80 hover:text-white"
            >
              Learn more
              <FaArrowRight className="ml-2 h-4 w-4" />
            </button>
        </div>
        </>
    )
}

export default Card;