import React from "react";
import ourservices from '../assets/ourservices.png';
import ourservices1 from '../assets/ourservices1.png';
import ourservices2 from '../assets/ourservices2.png';
import ourservices3 from '../assets/ourservices3.png';
import ourservices4 from '../assets/ourservices4.png';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const OurService = ({ imgsrc, text }) => {
    const ourservicesdata = [
        {
            text: 'Website Development',
            imgsrc: ourservices
        },
        {
            text: 'Mobile App Development',
            imgsrc: ourservices1
        },
        {
            text: 'Web Application Development',
            imgsrc: ourservices2
        },
        {
            text: 'Product Engineering',
            imgsrc: ourservices3
        },
        {
            text: 'Cloud Computing',
            imgsrc: ourservices4
        },
        {
            text: 'Technology Consultant',
            imgsrc: ourservices4
        },

    ];
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('ServicesLanding');
    };

    return (
        <>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {ourservicesdata.map((ourservice, index) => (
                    <div key={index} className="">

                        <div className="border rounded-lg  group-hover:shadow-md w-full">

                            <img src={ourservice.imgsrc} alt="hhlloo"></img>
                        </div>

                        <div className="border rounded-b-lg flex justify-between p-2  w-full
                                  hover:shadow-md transition-transform transform hover:scale-105 group">
                            <h3 className="flex items-center font-sora text-md font-bold ">
                                {ourservice.text}
                            </h3>
                            <button
                                type="button"
                                className="flex h-10 w-10 items-center border border-blue-500
                invisible justify-center rounded-full bg-[#2E89E51A]/10
                py-2 text-sm font-semibold text-black group-hover:visible"
                                onClick={handleNavigate} // Add click handler here
                            >
                                <FaArrowRight className="text-blue-500 h-4 w-4" />
                            </button>

                        </div>

                    </div>
                ))}
            </div>
        </>
    )
};

export default OurService;