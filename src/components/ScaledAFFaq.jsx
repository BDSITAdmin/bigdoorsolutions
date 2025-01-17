import React, { useState } from 'react';

const ScaledAFFaq = () => {
    // FAQ Data
    const faqs = [
        {
            question: "Why do organizations adopt SAFe?",
            answer:
                "Organizations adopt SAFe to improve collaboration among teams, enhance productivity, align work with strategic goals, deliver customer value faster, and adapt to changing business needs.",
        },
        {
            question: "What is a Program Increment (PI)?",
            answer:
                "A Program Increment (PI) is a time-boxed period (usually 8–12 weeks) during which teams in an ART deliver incremental value through planned iterations.",
        },
        {
            question: "Is SAFe only for IT or software development teams?",
            answer:
                "No. While SAFe is widely used in IT and software, its principles can be applied to various domains, including marketing, HR, and operations, to improve efficiency and alignment.",
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

export default ScaledAFFaq;
