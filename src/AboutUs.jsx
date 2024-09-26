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
      <section className="bg-blue-50 py-12 px-4 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {aboutData.map((item) => (
            <div key={item.id} className="md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
              <h2 className="text-blue-600 text-sm font-semibold mb-2">{item.title}</h2>
              <h1 className="text-DavyGrey text-3xl md:text-4xl font-bold mb-4">
                {item.heading}
              </h1>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          ))}
          <div className="md:w-1/3 lg:w-2/4 flex justify-center">
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


      <section className="bg-blue-500 text-white py-10 px-6 rounded-lg mx-4 md:mx-12 lg:mx-24 my-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-5xl md:text-6xl font-bold flex items-center mb-6 md:mb-0">
            <span className=' font-sora font-extrabold sm:text-[128px] text-[60px] sm:leading-[161.28px]'>18+</span>
            <span className="ml-3 font-inter sm:text-4xl text-3xl font-normal leading-[48px] tracking-[0.01em] text-left text-cackclour sm:w-[300px]">Years of experience in IT</span>
          </div>
          <div className="text-sm md:text-base max-w-md text-center md:text-left">
            <p>
              The IT services that we are running can be segmented by the type of skills employed to deliver the service
              (design, build, run). Technically, these fall into three main categories: business process services,
              application services, and infrastructure services.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-decoration-white py-12 px-4 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 lg:w-1/2 mb-8 md:mb-0">
            <h2 className="text-AliceBlue text-sm font-semibold mb-2">MEET OUR FOUNDER</h2>
            <h1 className="text-DavyGrey text-3xl md:text-4xl font-bold mb-4">
              Smita Srivastava – CEO, Founder
            </h1>
            <p className="text-soldcolour  font-normal leading-6 text-base">
              Smt. Smita Srivastava, the founder and CEO of BigDoor IT Solutions, is a dedicated social worker and a
              certified public speaker, known for her leadership and commitment goals to achieve societal betterment, has
              conducted various social initiatives, including Covid-19 relief efforts. With over a decade of experience,
              she has trained 10,000 children in participatory programs. Also a mentor at Hungama Times News, Smita is
              actively advocating for social causes such as cultural programs, awareness campaigns, environmental
              conservation, and women empowerment.
            </p>
          </div>
          <div className="md:w-1/3 lg:w-1/2 flex justify-center">
            <img
              src={FounderImage}
              alt="Smita Srivastava - CEO, Founder"
              className=" sm:ml-[100px] sm:w-[460px] h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <div className="bg-blue-50 py-16 px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className=" text-Azure font-sora text-4xl font-semibold leading-[50.4px]">
            Our values make us <span className="text-doggerblue">rise above all</span>
          </h2>
          <p className="mt-4 text-soldcolour font-inter text-sm font-normal leading-[16.94px]">
            At BigDoor IT Solutions, 12+ industry leaders with expertise in areas like Content Management,
            Cloud Computing, DevOps Engineering, Program Management, and People Management will lead you on your path to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <img src={Mission} alt="Mission Icon" className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold text-CetaceanBlue mb-4 ">Mission</h3>
            <p className="text-CetaceanBlue text-sm	">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod
              vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <img src={Vision} alt="Vision Icon" className="h-12 w-12 " />
            </div>
            <h3 className="text-xl font-bold text-CetaceanBlue mb-4">Vision</h3>
            <p className="text-CetaceanBlue text-sm	 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod
              vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <img src={Vision} alt="Values Icon" className="h-12 w-12 " />
            </div>
            <h3 className="text-xl font-bold text-CetaceanBlue mb-4 ">Values</h3>
            <p className="text-CetaceanBlue text-sm	">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod
              vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.
            </p>
          </div>
        </div>
      </div>
      <TeamMember />

    </>
  );
};

export default AboutUs;
