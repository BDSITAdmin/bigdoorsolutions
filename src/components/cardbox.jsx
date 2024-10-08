import { FaArrowRight } from "react-icons/fa";

const Card = ({ imgSrc, heading, paragraph, bgColor }) => {
    return (
        <div
            className={`w-full flex flex-col p-4 ${bgColor}  items-center`}
        >
            <img src={imgSrc} alt="" />
            <h3 className='text-[16px] md:text-[14px] lg:text-[16px] font-semibold font-inter py-3'>
                {heading}
            </h3>
            <p className='text-[14px] text-center'>
                {paragraph}
            </p>
            <button
                type="button"
                className="inline-flex items-center mt-4 rounded bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-black/80 hover:text-white"
            >
                Learn more
                <FaArrowRight className="ml-2 h-4 w-4" />
            </button>
        </div>
    );
};

export default Card;
