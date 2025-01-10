import React, { useState } from 'react';

const BusinesswritingFaq = () => {
    // FAQ Data
    const faqs = [
        {
            question: " Who should attend this course?",
            answer:
                "Anyone who wants to develop a clear business case for decision-making can pursue this training. This skills-intensive course is ideal for business analysts, product managers, product planners, marketing managers, directors and corporate officers who regularly develop and present budgets, business plans and recommendations.",
        },
        {
            question: "What are the eligibility criteria for this course?",
            answer:
                "There are no prerequisites for attending this course, but basic management knowledge is preferred.",
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

export default BusinesswritingFaq;
