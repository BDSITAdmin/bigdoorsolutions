import Homepic from './assets/home.png';
import Homepic4 from './assets/Frame 320.png';
import Homepic5 from './assets/Group 502.png';
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Card from './components/cardbox';
import cardData from './lib/carddata';
import FooterSection from './components/footerSection'

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

import { useNavigate } from 'react-router-dom';

function Home() {
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
              lg:px-5 py-2 lg:py-2.5 text-sm font-semibold text-white hover:bg-black/80"
              onClick={handleNavigation}

            >
              Get Started
              <FaArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>




        <div className="py-5 lg:py-[40px] px-5 lg:px-[40px] xl:px-[120px]">
          <div className="flex flex-col items-center">
            <h3 className='text-[16px] font-semibold text-blue-700'>IT SOLUTIONS</h3>
            <h1 className='text-[28px] lg:text-[40px] text-DavyGrey font-semibold font-sora'>What we offer</h1>
            <p className='text-[14px] text-center px-0'>
              Our comprehensive range of services includes web design, mobile app development, SEO,
              social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <p className='mt-[18px] md:mt-4 xl:text-lg text-DavyGrey text-[14px]'>
                We aim to create a space where curiosity about technology grows without the fear of staying behind in race. With our expertise, we are dedicated to analyzing upcoming trends and embracing new technologies with agility.
              </p>
              <button
                type="button"
                className="inline-flex items-center mt-7 rounded bg-doggerblue px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/80"
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
      <FooterSection/>
    </>
  );
}

export default Home;
