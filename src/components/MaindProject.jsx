import React from 'react';

const MaindProject = () => {
    return (
        <section className="bg-[#272A33] text-white py-12">
            <div className="container p-4 mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8  md:mb-0 w-2/4">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 ">Have a project in mind?.</h2>
                </div>
                <div className="flex space-x-12">
                    <div className="text-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-lg transition-all">
                        Get a FREE consultation call →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaindProject;
