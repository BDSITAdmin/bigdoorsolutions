import Homepic from './assets/home.png';
import Homepic4 from './assets/Frame 320.png';
import Homepic5 from './assets/Group 502.png';
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Card from './components/cardbox';
import cardData from './lib/carddata';
import FooterSection from './components/footerSection';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from "./components/TopArrow";


function Home() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Welcome to Bigdoor IT Solutions!', 'Solution that drive succes',];
  useEffect(() => {

    const timeout = setTimeout(() => {
      let currentWord = words[index];
      if (!isDeleting) {
        setText(currentWord.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
      } else {

        setText(currentWord.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
      }

      if (!isDeleting && subIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
      else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, subIndex, isDeleting, index, words]);



  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/course'); // Replace '/new-page' with the actual path you want
  };

  return (
    <>

      <div>
        <div className="md:relative">
          <img src={Homepic} alt="Home pic" className="w-full h-auto" />
          <div className="md:absolute w-full md:w-6/12  h-auto sm:top-[20px]  xl:top-[70px] left-[10px] sm:left-[30px] xl:left-[100px]   xl:p-0">
            <h1 className='text-[28px] lg:text-[40px] pr-36 xl:text-[54px] font-sora font-semibold md:text-white tracking-[1.5px] leading-tight lg:leading-[54px]'>
              {text}
            </h1>
          </div>
          <div className="md:absolute w-full md:w-6/12  h-auto  xl:top-[70px] left-[10px] sm:left-[30px] xl:left-[100px] p-4 xl:p-0">
            <p className='mt-[20px] lg:mt-[28px]  md:text-white text-sm md:text-xs lg:text-sm xl:text-lg relative sm:top-28'>


              We aim to create a space where curiosity about technology grows without
              the fear of staying behind in race. With our expertise, we are dedicated to analyzing
              upcoming trends and embracing new technologies with agility.
            </p>
            <button
              type="button"
              className="inline-flex items-center mt-5 lg:mt-7 rounded bg-Vividyellow px-4 
              lg:px-5 py-2 lg:py-2.5 text-sm font-semibold relative top-32 hover:bg-white hover:text-black "
              onClick={handleNavigation}

            >
              Get Started
              <FaArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=9632880906&text=Welcome%20to%20Bigdoor%20IT%20Solutions!%20Redefine%20your%20career%20with%20us.%20We%20are%20excited%20to%20connect%20with%20you!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed flex items-center px-4 py-2 space-x-2 font-bold text-white transition-all duration-300 bg-green-500 rounded-full shadow-lg bottom-5 right-3 hover:bg-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6"
            fill="white"
          >
            <path d="M16.002 2.001c-7.727 0-13.997 6.271-13.997 13.998a13.94 13.94 0 0 0 2.177 7.448l-1.43 5.242 5.367-1.405a13.97 13.97 0 0 0 7.882 2.273c7.726 0 13.997-6.27 13.997-13.998C29.999 8.273 23.729 2 16.002 2.001zM16 26.483a10.455 10.455 0 0 1-5.68-1.656l-.408-.248-3.192.836.851-3.122-.27-.41a10.481 10.481 0 0 1-1.654-5.685c0-5.796 4.716-10.512 10.511-10.512 5.797 0 10.514 4.716 10.514 10.512 0 5.797-4.716 10.515-10.514 10.515zm6.17-7.905c-.337-.168-1.993-.985-2.301-1.098-.307-.113-.53-.169-.752.169-.223.337-.86 1.098-1.054 1.326-.195.228-.39.253-.728.084-.337-.17-1.424-.523-2.714-1.669-1.004-.896-1.68-2.003-1.876-2.34-.195-.337-.02-.52.149-.69.154-.153.338-.39.506-.585.169-.195.223-.337.337-.562.114-.225.057-.42-.028-.585-.085-.17-.752-1.81-1.03-2.48-.271-.651-.548-.563-.752-.563h-.647c-.195 0-.52.057-.792.282-.271.226-1.04 1.015-1.04 2.473 0 1.459 1.065 2.87 1.214 3.065.169.225 2.099 3.204 5.084 4.492.712.308 1.267.491 1.7.627.713.225 1.363.193 1.877.117.571-.084 1.993-.812 2.276-1.598.282-.78.282-1.452.197-1.598-.084-.146-.308-.225-.645-.392z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        <ScrollToTop />

        <div className="py-5 lg:py-[40px] px-5 lg:px-[40px] xl:px-[120px]">
          <div className="flex flex-col items-center">
            <h3 className='text-[16px] font-inter xl:text-xl font-semibold text-blue-700 underline'>IT SOLUTIONS</h3>
            <h1 className='text-[27px] mb-3  lg:text-[40px] xl:mt-5 xl:text-5xl text-DavyGrey font-semibold font-sora'>What we offer</h1>
            <p className='text-[14px] md:text-xs lg:text-sm xl:text-base text-center font-inter pb-6 px-0'>
              Our comprehensive range of services includes web design, mobile app development, SEO,
              social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="md:py-5 px-5 lg:px-[35px] xl:px-[120px] flex flex-wrap bg-doggerblue/5">
          <div className="w-full mb-5 md:w-6/12 lg:mb-0">
            <img src={Homepic4} alt='homepic' className="w-full h-auto" />
          </div>

          <div className="w-full ml-0 md:w-6/12 xl:pl-10 md:pl-4 ">
            <h3 className='font-inter mb-1 text-[16px] xl:text-xl  xl:mt-4 text-blue-600 font-semibold'>ABOUT US</h3>
            <h1 className='text-[27px] mb-3  lg:text-[40px] xl:mt-5 xl:text-5xl text-DavyGrey font-semibold font-sora'>
              Reasons to choose us
            </h1>
            <p className='font-inter text-[14px] xl:mt-5 md:text-xs lg:text-sm xl:text-base mb-8 xl:mb-10'>
              Choosing the right partner for your digital needs can make all the difference.
              At our company, we combine technical expertise with innovative
              strategies to deliver solutions that are tailored to your business goals.
            </p>
            {[
              {
                title: "Teamwork and Collaboration",
                text: "Teamwork and collaboration form the cornerstone of daily operations. We foster an inclusive environment and design a collective process."
              },
              {
                title: "Supportive Network",
                text: "We create space for expanding professional networks within the workplace, embracing ideas and innovations that can inspire."
              },
              {
                title: "Growth Mindset",
                text: "Growth mindset entails diligently pursuing learning opportunities and growth prospects. Abilities and intelligence can evolve through dedication, practice, and learning."
              }
            ].map((item, index) => (
              <div className="flex p-2 mt-4 bg-white rounded md:p-2 md:mt-2 lg:mt-4" key={index}>
                <div><FaCheckCircle className='w-auto h-5 mt-1 mr-3 text-green-600 xl:h-7 md:h-5' /></div>
                <div>
                  <h3 className='font-sora text-[14px] md:text-sm lg:text-base xl:text-lg font-medium text-black'>
                    {item.title}
                  </h3>
                  <p className='font-inter text-[12px] md:text-[10px] lg:text-xs xl:text-base text-lightblack'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-5 px-5 md:px-[40px] lg:px-[60px] xl:px-[120px] flex flex-wrap-reverse">
          <div className="flex items-center w-full mb-5 md:w-6/12 lg:mb-0">
            <div className="w-full lg:w-full">
              <h3 className='font-inter text-[16px] text-blue-600 mb-4 xl:text-xl xl:mb-6 font-semibold'>INTERNSHIP PROGRAM</h3>
              <h1 className='text-[28px] lg:text-4xl xl:text-5xl font-sora font-semibold text-DavyGrey leading-[34px]'>
                Learn what your college can’t teach
              </h1>
              <p className='font-inter mt-[18px] md:mt-4 xl:text-lg text-DavyGrey text-[14px]'>
                We aim to create a space where curiosity about technology grows without the fear of staying behind in race. With our expertise, we are dedicated to analyzing upcoming trends and embracing new technologies with agility.
              </p>
              <button
                type="button"
                className="inline-flex items-center mt-7 rounded bg-doggerblue px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/80"
                onClick={handleNavigation}
              >
                Get Started
                <FaArrowRight className="w-4 h-4 ml-2" />

              </button>
            </div>
          </div>

          <div className="relative w-full md:w-6/12">
            {/* <img src={Homepic3} alt='home pic' className="w-full h-auto p-10 ml-8 lg:w-11/12" />
            <div className="absolute top-16 left-0 flex border w-4.5/12 h-auto rounded-lg bg-[#f5f5f4] p-1">
              <img src={icons} alt='icon pic' className="" />
              <div className="mt-2 ">
                <h3 className='font-inter text-[20px] leading-5 font-bold'>36+ hours </h3>
                <p className='text-[16px]'
                >of career coachings</p>
              </div>
            </div>

            <div className="flex absolute bottom-8 right-1 border w-[270px] rounded-lg bg-[#f5f5f4] p-2">
              <img src={icons1} alt='icon pic' className="" />
              <div className="mt-2 ">
                <h3 className='font-inter text-[25px] leading-5 font-bold'>150+ hours </h3>
                <p>Instructor-led sessions</p>
              </div>
            </div>

            <div className=" absolute top-1 right-3 border w-[170px] rounded-lg bg-[#f5f5f4] p-2">
              <img src={icons2} alt='icon pic' className="" />
              <div className="mt-2 ">
                <h3 className='font-inter text-[25px] leading-5 font-bold'>267+ </h3>
                <p>Hands-on exercises</p>
              </div>
            </div> */}
            <img src={Homepic5} alt='home pic' className="w-full h-auto lg:w-11/12 lg:ml-8" />
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default Home;
