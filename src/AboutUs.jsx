import React from 'react';
import AboutImage from './assets/Rectangle 327.png';
import FounderImage from './assets/Founder.png';

const AboutUs = () => {
  return (
    <>
      <section className="bg-blue-50 py-12 px-4 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <h2 className="text-blue-600 text-sm font-semibold mb-2">ABOUT US</h2>
            <h1 className="text-DavyGrey text-3xl md:text-4xl font-bold mb-4">
              We work hard so your Success is Guaranteed
            </h1>
            <p className="text-gray-600 text-base">
              BigDoor IT Solution is dedicated to bringing continuous innovation
              and agility in the IT industry. We offer customized career programs
              for aspiring IT professionals and innovative tech solutions for
              businesses.
            </p>
          </div>
          <div className="md:w-1/2 lg:w-2/3 flex justify-center">
            <img
              src={AboutImage}
              alt="Laptop showing analytics dashboard"
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-500 text-white py-10 px-6 rounded-lg mx-4 md:mx-12 lg:mx-24 my-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-5xl md:text-6xl font-bold flex items-center mb-6 md:mb-0">
            <span>18+</span>
            <span className="ml-3 text-lg md:text-2xl">Years of experience in IT</span>
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
            <h2 className="text-blue-600 text-sm font-semibold mb-2">MEET OUR FOUNDER</h2>
            <h1 className="text-DavyGrey text-3xl md:text-4xl font-bold mb-4">
              Smita Srivastava – CEO, Founder
            </h1>
            <p className="text-gray-600 text-base">
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
              className=" w-80 h-80 object-cover"
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our values make us rise above all</h1>
        <p className="text-gray-700 mb-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus
          erat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-4">

            </div>
            <h2 className="text-2xl font-semibold mb-2">Mission</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus
              erat.
            </p>
          </div>
          <div
            className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-4">

            </div>
            <h2 className="text-2xl font-semibold mb-2">Vision</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus
              erat.
            </p>
          </div>

          <div
            className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-4">

            </div>
            <h2 className="text-2xl font-semibold mb-2">Values</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus
              erat.
            </p>
          </div>
        </div>

      </div>

    </>
  );
};

export default AboutUs;
