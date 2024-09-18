import Homepic from './assets/home.png';
import Homepic1 from './assets/Group 85.png';
import Homepic2 from './assets/Union.png';
import Homepic3 from './assets/Group 501.png';
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Card from './components/cardbox';
import cardData from './lib/carddata';


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
          <div className=" flex flex-wrap gap-4">
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
        <div className="py-10 px-[120px] flex bg-doggerblue/5 ">
          <div className="w-7/12">
            <div className="relative h-[652px] w-[530px]">
              <img src={Homepic1} alt='homepic' />
              <div className="absolute h-[622px] w-[500px] top-14 left-3">
                <img src={Homepic2} alt='homepic'/>
              </div>
            </div>

          </div>
          <div className=" w-6/12 ml-10">
            <h3 className='font-inter text-[16px] text-blue-600 font-semibold'
            >ABOUT US</h3>
            <h1 className='text-[40px] text-DavyGrey font-semibold font-sora'>
              Reasons to choose us
            </h1>
            <p className='font-inter text-[14px] '>
              Choosing the right partner for your digital needs can make all the difference.
              At our company, we combine technical expertise with innovative
              strategies to deliver solutions that are tailored to your business goals.
            </p>
            <div className="flex bg-white p-4 rounded mt-8">
              <div className=""><FaCheckCircle className='text-green-600 h-6 w-6 mt-1 mr-3' /></div>
              <div className="">
                <h3 className='font-sora text-[16px] font-medium text-black'>
                  Teamwork and Collaboration
                </h3>
                <p className='font-inter text-[14px] text-lightblack ' >
                  Teamwork and collaboration form the cornerstone of daily operations.
                  We Foster an inclusive environment and design a collective process.
                </p>
              </div>
            </div>

            <div className="flex bg-white p-4 rounded mt-5">
              <div className=""><FaCheckCircle className='text-green-600 h-6 w-6 mt-1 mr-3' /></div>
              <div className="">
                <h3 className='font-sora text-[16px] font-medium text-black'>
                  Supportive Network
                </h3>
                <p className='font-inter text-[14px] text-lightblack ' >
                  We create space for expanding professional networks within
                  the workplace, embrace ideas and innovations that can inspire
                </p>
              </div>
            </div>

            <div className="flex bg-white p-4 rounded mt-5">
              <div className=""><FaCheckCircle className='text-green-600 h-6 w-6 mt-1 mr-3' /></div>
              <div className="">
                <h3 className='font-sora text-[16px] font-medium text-black'>
                  Growth Mindset
                </h3>
                <p className='font-inter text-[14px] text-lightblack ' >
                 Growth mindset entails diligently pursuing learning opportunities
                 and growth prospects. Abilities and intelligence can evolve through
                  dedication, practice, and learning. Acquainting with emerging tools and technologies broadens
                 your horizons and also ensures adaptability in the tech landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[40px] px-[120px] flex">
          <div className="flex items-center">
            <div className=" w-[540px] h-[360px]">
           <h3 className='font-inter text-[16px] text-blue-600 font-semibold'
            >INTERNSHIP PROGRAM
            </h3>
            <h1 className='text-[44px] font-sora font-semibold text-DavyGrey leading-[54px]'>
            Learn what your college can’t teach</h1>
            <p className='mt-[38px] text-DavyGrey text-[14px]'
            >We aim to create a space where curiosity about technology grows without
              the fear of staying behind in race. With our expertise, we are dedicated to analyzing
              upcoming trends and embracing new technologies with agility.</p>
            <button
              type="button"
              className="inline-flex items-center mt-7 rounded bg-doggerblue px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/80"
            >
              Get Started
              <FaArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          </div>
          
          <div className=" px-[60px]">
            <img src={Homepic3} alt='home'/>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home;
