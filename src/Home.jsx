import Homepic from './assets/home.png';
import { FaArrowRight } from


"react-icons/fa";
import Card from './components/cardbox';


function Home() {


  return (
    <>
      <div className="">
        <div className=" relative">
          <img src={Homepic} alt="Home pic" />
          <div className="absolute w-[540px]  h-[328px] top-[70px] left-[100px]">
            <h1 className='text-[54px] font-sora font-semibold text-white leading-[54px]'>
              IT Solutions that drive success</h1>
            <p className='mt-[38px] text-white'
            >We aim to create a space where curiosity about technology grows without
              the fear of staying behind in race. With our expertise, we are dedicated to analyzing
              upcoming trends and embracing new technologies with agility.</p>
            <button
              type="button"
              className="inline-flex items-center mt-7 rounded bg-Vividyellow px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/80"
            >
              Get Started
              <FaArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="py-[40px] px-[120px]  ">
          <div className="flex flex-col items-center">
            <h3 className='text-[16px] font-semibold text-blue-700'>
              IT SOLUTIONS</h3>
            <h1 className='text-[40px] text-DavyGrey font-semibold font-sora'
            >What we offer</h1>
            <p className='text-[14px] text-center'>Our comprehensive range of services includes web design, mobile app development, SEO,
               social media marketing, and more. Whether you're a 
              startup or an established enterprise, our experts will craft solutions that drive results.</p>
          </div>
          <div className="">
            <Card/>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home;
