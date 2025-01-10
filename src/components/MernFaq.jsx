import React, { useState } from 'react';

const MernFaq = () => {
    // FAQ Data
    const faqs = [
        {
            question: "Who is a Mern Stack Developer?",
            answer:
                "A MERN Stack Developer is a skilled programmer who specializes in building web applications using four key technologies: MongoDB, Express, React, and Node.js. These technologies work together to create both the front-end (what the user sees and interacts with) and back-end (the server-side logic that powers the application) of a website.",
        },
        {
            question: "Difference between MEAN Stack and MERN Stack",
            answer:
                "TMEAN Stack uses Angular for a structured, two-way data binding approach, while MERN Stack uses React for flexibility and faster, one-way data binding.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className='container max-w-4xl  py-8 mx-auto mb-12'>
                <h2 className="mb-6 text-2xl font-bold text-left">Frequently Asked Questions</h2>
                <div className="container max-w-4xl px-12 py-8 mx-auto  mb-12 border border-gray-300 rounded-lg shadow-sm">

                    {faqs.map((faq, index) => (
                        <div key={index} className="py-4 border-b border-gray-300 ">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => toggleFaq(index)}
                            >
                                <h4 className="text-lg font-semibold">Q. {faq.question}</h4>
                                <span
                                    className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                        }`}
                                >
                                    ▼
                                </span>
                            </div>
                            <div className={`mt-2 text-gray-600 transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
};

export default MernFaq;
