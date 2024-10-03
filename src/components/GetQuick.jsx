import React from 'react';

const GetQuick = () => {
    return (
        <section className="bg-[#272A33] text-white py-12">
            <div className="container p-4 mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8  md:mb-0 w-2/4">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 ">Not sure what’s up in the tech market?.</h2>
                </div>
                <div className="flex space-x-12">
                    <div className="text-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg transition-all">
                        Get a quick call →
                        </button>
                    </div>
                    <div className="text-center">
                        <button className=" hover:text-white text-[#2E89E5] py-2 transition-all">
                        Explore Courses →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetQuick;
