import Homepic from './assets/home.png';
import { FaArrowRight } from "react-icons/fa";
import Card from './components/cardbox';
import cardData from './lib/carddata';

function Home() {
  return (
    <>
      <div className="">
        <div className="relative">
          <img src={Homepic} alt="Home pic" className="w-full h-auto" />
          <div className="absolute w-full sm:w-[540px] h-auto sm:h-[328px] top-[70px] left-[10px] sm:left-[100px] p-4 sm:p-0">
            <h1 className='text-[32px] sm:text-[54px] font-sora font-semibold text-white leading-tight sm:leading-[54px]'>
              IT Solutions that drive success
            </h1>
            <p className='mt-[20px] sm:mt-[38px] text-white text-sm sm:text-base'>
              We aim to create a space where curiosity about technology grows without
              the fear of staying behind in race. With our expertise, we are dedicated to analyzing
              upcoming trends and embracing new technologies with agility.
            </p>
            <button
              type="button"
              className="inline-flex items-center mt-5 sm:mt-7 rounded bg-Vividyellow px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-white hover:bg-black/80"
            >
              Get Started
              <FaArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="py-[20px] sm:py-[40px] px-[20px] sm:px-[120px]">
          <div className="flex flex-col items-center">
            <h3 className='text-[14px] sm:text-[16px] font-semibold text-blue-700'>
              IT SOLUTIONS
            </h3>
            <h1 className='text-[24px] sm:text-[40px] text-DavyGrey font-semibold font-sora'>
              What we offer
            </h1>
            <p className='text-[12px] sm:text-[14px] text-center'>
              Our comprehensive range of services includes web design, mobile app development, SEO,
              social media marketing, and more. Whether you're a 
              startup or an established enterprise, our experts will craft solutions that drive results.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {cardData.map((card, index) => (
              <Card
                key={index}
                imgSrc={card.imgSrc}
                heading={card.heading}
                paragraph={card.paragraph}
                bgColor={card.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
