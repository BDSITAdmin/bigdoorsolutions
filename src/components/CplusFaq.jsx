import React, { useState } from 'react';

const CplusFaq = () => {
    // FAQ Data
    const faqs = [
        {
            question: "What are the major differences between C and C++?",
            answer:
                "C++ is a superset of C language. This means C++ has all the functionality of C and much more. C is a procedural programming language whereas C++ can perform both procedural and object-oriented programming.",
        },
        // {
        //     question: "How will this bootcamp help me to get a Job?",
        //     answer:
        //         "The bootcamp provides in-depth technical training, industry-relevant projects, and career coaching to prepare participants for job opportunities in the tech industry.",
        // },
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

export default CplusFaq;
