
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

const EnrollForm = () => {
    return (
        <>
            <form action="#" method="POST" className="mt-8">
                <div className="space-y-5 border rounded-md p-4">
                    <div className=" text-center">
                    <h1 className='text-[28px] lg:text-[40px] xl:text-[44px] font-sora
                     font-semibold  leading-tight lg:leading-[54px]'>
                        Enroll Now!
                    </h1>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="" className="text-base font-medium text-gray-900">

                                Frist name
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Frist name"
                                ></input>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className="text-base font-medium text-gray-900">

                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Last name"
                                ></input>
                            </div>
                        </div>


                    </div>
                    <div>
                        <label htmlFor="" className="text-base font-medium text-gray-900">

                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="email"
                                placeholder="Email"
                            ></input>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="" className="text-base font-medium text-gray-900">

                                Phone
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type=""
                                placeholder="Phone"
                            ></input>
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="inline-flex w-full items-center justify-center rounded-md
                             bg-[#FF6636] px-3.5 py-2.5 font-semibold leading-7 text-white
                              hover:bg-blue-600"
                        >
                            Get started
                        </button>
                    </div>
                    <div className="px-8 space-y-4">
                        <div className="flex justify-between">
                            <h2 className="flex items-center w-1/2 font-semibold">
                                <FaRegClock className='text-customGreen mr-3' /> Course Duration
                            </h2>
                            <h3> 6 months</h3>
                        </div>
                        <div className="flex justify-between">
                            <span className="flex items-center w-1/2 font-semibold">
                                <GiNetworkBars className='text-customGreen mr-3' /> Course Level
                            </span>
                            <h3>Intermidiate</h3>
                        </div>
                    </div>


                    
                </div>
            </form>

        </>
    )
}

export default EnrollForm;