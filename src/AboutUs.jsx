import React from 'react';
import AboutImage from './assets/Rectangle 327.png';
import FounderImage from './assets/Group 81.png';
import TeamMember from './components/TeamMember';
import Vision from './assets/Vision.png'
import Mission from './assets/Mission.png'


const AboutUs = () => {

  const aboutData = [
    {
      id: 1,
      title: "ABOUT US",
      heading: "We work hard so your Success is Guaranteed",
      description: "BigDoor IT Solution is dedicated to bringing continuous innovation and agility in the IT industry. We offer customized career programs for aspiring IT professionals and innovative tech solutions for businesses.",
      imageUrl: AboutImage,
    },
  ];




  return (
    <>
      <section className="px-4 py-12 bg-blue-50 md:px-16 lg:px-24">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {aboutData.map((item) => (
            <div key={item.id} className="mb-8 md:w-1/2 lg:mr-8 md:mb-0">
              <h2 className="mb-2 text-[16px] font-inter xl:text-xl font-semibold text-blue-700 uppercase ">{item.title}</h2>
              <h1 className="mb-4 text-[27px]   lg:text-[40px] xl:mt-5 xl:text-5xl text-DavyGrey font-semibold font-sora ">
                {item.heading}
              </h1>
              <p className="text-[14px] md:text-xs lg:text-sm xl:text-base text-left font-inter  text-gray-600">{item.description}</p>
            </div>
          ))}
          <div className="flex justify-center md:w-1/3 lg:w-2/4">
            {aboutData.map((item) => (
              <img
                key={item.id}
                src={item.imageUrl}
                alt="About image"
                className="rounded-md shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>


      <section className="px-6 py-10 mx-4 my-10 text-white bg-blue-500 rounded-lg md:mx-12 lg:mx-24">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center mb-6 text-5xl font-bold md:text-6xl md:mb-0">
            <span className=' font-sora font-extrabold sm:text-[128px] text-[60px] sm:leading-[161.28px]'>18+</span>
            <span className="ml-3 font-inter sm:text-4xl text-3xl font-normal leading-[48px] tracking-[0.01em] text-left text-cackclour sm:w-[300px]">Years of experience in IT</span>
          </div>
          <div className="max-w-md  text-center  md:text-left">
            <p className='text-[14px] md:text-xs lg:text-sm xl:text-base  font-inter '>
              The IT services that we are running can be segmented by the type of skills employed to deliver the service
              (design, build, run). Technically, these fall into three main categories: business process services,
              application services, and infrastructure services.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 bg-decoration-white md:px-16 lg:px-24">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 md:w-2/3 lg:w-1/2 md:mb-0">
            <h2 className="mb-2 text-[16px] font-inter xl:text-xl font-semibold text-blue-700 uppercase">MEET OUR FOUNDER</h2>
            <h1 className="mb-4 text-[27px]   lg:text-[40px] xl:mt-5 xl:text-5xl text-DavyGrey font-semibold font-sora ">
              Smita Srivastava – CEO, Founder
            </h1>
            <p className="text-[14px] md:text-xs lg:text-sm xl:text-base text-justify font-inter  leading-6 text-soldcolour">
              Smt. Smita Srivastava, the founder and CEO of BigDoor IT Solutions, is a dedicated social worker and a
              certified public speaker, known for her leadership and commitment goals to achieve societal betterment, has
              conducted various social initiatives, including Covid-19 relief efforts. With over a decade of experience,
              she has trained 10,000 children in participatory programs. Also a mentor at Hungama Times News, Smita is
              actively advocating for social causes such as cultural programs, awareness campaigns, environmental
              conservation, and women empowerment.
            </p>
          </div>
          <div className="flex justify-center md:w-1/3 lg:w-1/2">
            <img
              src={FounderImage}
              alt="Smita Srivastava - CEO, Founder"
              className=" sm:ml-[100px] sm:w-[460px] h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <div className="px-4 py-36 bg-blue-50 ">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-[27px]   lg:text-[40px] xl:mt-5 xl:text-5xl text-DavyGrey font-semibold font-sora leading-[50.4px]">
            Our values make us <span className="text-doggerblue">rise above all</span>
          </h2>
          <p className="mt-4 text-lg font-normal leading-8 text-soldcolour font-inter">
            At BigDoor IT Solutions, 12+ industry leaders with expertise in areas like Content Management,
            Cloud Computing, DevOps Engineering, Program Management, and People Management will lead you on your path to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl md:h-[300px] mx-auto">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <img src={Mission} alt="Mission Icon" className="w-12 h-12" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-CetaceanBlue ">Mission</h3>
            <p className="text-[14px] md:text-xs lg:text-sm xl:text-base text-justify font-inter  leading-6 text-soldcolour ">
              To help individuals achieve their career bjectives with an affluent future by adding value to their training initiatives. We believe in building and delivering training experiences that help attain skills to transform participants to performers and make an honest impact where it matters.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <img src={Vision} alt="Vision Icon" className="w-12 h-12 " />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-CetaceanBlue">Vision</h3>
            <p className="text-[14px] md:text-xs lg:text-sm xl:text-base text-justify font-inter  leading-6 text-soldcolour">
              Our vision is to make Bigdoor Technologies a dynamic, vibrant and a value-driven organization to embrace exceptional skills with high quality, accessible training and professional development facilitated by motivated experts to help evolve qualified individuals into Professionals.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <img src={Vision} alt="Values Icon" className="w-12 h-12 " />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-CetaceanBlue ">Values</h3>
            <p className="text-[14px] md:text-xs lg:text-sm xl:text-base text-justify font-inter  leading-6 text-soldcolour ">
              <ul className="pl-5 list-disc">
                <li>Relentless Commitment</li>
                <li>Focus & Quality</li>
                <li>Integrity & Trust</li>
                <li>Sincere Gratitude</li>
                <li>Innovation</li>
                <li>Transparency</li>
              </ul>

            </p>
          </div>
        </div>
      </div>
      <TeamMember />

    </>
  );
};

export default AboutUs;
