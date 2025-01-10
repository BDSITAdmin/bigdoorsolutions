import React from 'react';
import CreateBuild from './lib/CreateBuild';
import Group from './assets/Group 503.png'
import BuildImage1 from './assets/image a29.jpg';
import BuildImage2 from './assets/image a30.jpg';
import BuildImage3 from './assets/image a28.jpg';


const WebDevelopmentSection = () => {

    const projectImages = [BuildImage1, BuildImage2, BuildImage3, BuildImage3, BuildImage2, BuildImage1];

    return (
        <>
            <div className="bg-blue-50">
                <div className="container flex flex-col items-center px-4 py-16 mx-auto md:flex-row">
                    <div className="space-y-4 md:w-1/2">
                        <h1 className="text-lg font-semibold leading-6 tracking-wider uppercase font-poppins text-[#1F5E9E]">
                            website development
                        </h1>
                        <h1 className="text-4xl font-bold text-[#333333]">
                            We Build Creative Websites
                        </h1>
                        <p className="font-inter text-sm font-light leading-5 text-[#333333]">
                            We open the door to future technologies to forward-thinking businesses with creative web development services to grow your business with innovation and agility.
                        </p>
                        <button className="px-6 py-2 text-white transition-all duration-300 bg-[#3E93E7]  shadow-Buildshadow hover:bg-blue-600">
                            Request Service
                        </button>
                    </div>
                    <div className="mt-8 md:w-1/2 md:mt-0">
                        <img
                            src="https://ik.imagekit.io/bigdoorsolutions/Bigdoor_websiteImages/Rectangle%20327.png?updatedAt=1727675529625"
                            alt="Website Development"
                            className="transition-transform duration-300 transform rounded-lg shadow-lg hover:scale-105"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-12 md:w ">
                <div className="max-w-4xl p-6 text-xl italic font-medium leading-9 text-gray-800 bg-[#F6F6F7] border-l-4 border-blue-500 rounded-lg shadow-md">
                    <p>
                        “We build websites that touch the hearts and minds of your audience. Whether you are an industry leader or an ambitious start-up, the websites we build will make a connection with your users, compelling them to take action.”
                    </p>
                </div>
            </div>
            <div className="container py-16 mx-auto bg-white">
                <h2 className="mb-4 font-sora text-4xl font-semibold leading-[50.4px] text-center text-[#333333];">
                    Create.   <span className="text-[#3E93E7]">Build.</span>Deploy
                </h2>
                <p className="mb-12 text-center font-inter text-2xl font-normal leading-9 text-[#333333]">
                    We Work On 6 Step Process To Deliver You Quick Results
                    <div className="mt-2">
                        <hr className="h-1 mx-auto bg-[#2E89E5] border-none w-[70px]" />
                    </div>
                </p>

                <div className="container mx-auto ">
                    <div className="flex flex-col items-center">
                        <img src={Group} alt="Group" className='md:w-[1200px] md:h-[600px]' />

                    </div>
                </div>
            </div>
            <div className="container py-16 mx-auto bg-white">
                <h2 className="mb-12 font-sora text-4xl font-semibold leading-[50.4px]  text-center text-[#333333];">
                    How we help <span className="text-[#3E93E7]"> your business grow?</span>
                </h2>
                <div className="container mx-auto ">
                    <div className="flex flex-col items-center">
                        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                            {CreateBuild.map((CreateBuild, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-start text-start p-4 border-l-2 border-[#B4835A]
                                    bg-white  transition-transform transform hover:scale-105 hover:bg-blue-100" 
                                >
                                    <img src={CreateBuild.icon} alt={CreateBuild.title} className="mb-4 w-21 h-21" />
                                    <h3 className="mb-2 text-xl font-semibold leading-5 font-sora">{CreateBuild.title}</h3>
                                    <p className='font-sans text-base font-normal leading-6 tracking-tightest'>{CreateBuild.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-12 ">
                <div className="mb-8 text-center">
                    <h2 className="font-sora text-4xl font-semibold leading-[50.4px]">
                        What we have <span className="text-[#2E89E5]">delivered so far?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
                    {projectImages.map((image, index) => (
                        <div
                            key={index}
                            className="p-8 transition-transform transform bg-[#EFF5FF] rounded-lg shadow-md hover:scale-105 hover:shadow-lg"
                        >
                            <img
                                src={image}
                                alt={`Project ${index + 1}`}
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};



export default WebDevelopmentSection;
