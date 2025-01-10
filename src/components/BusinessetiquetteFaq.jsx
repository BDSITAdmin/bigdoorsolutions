import React, { useState } from 'react';

const BusinessetiquetteFaq = () => {
    // FAQ Data
    const faqs = [
        {
            question: "What is the value of business etiquette?",
            answer:
                "Business etiquette is valuable because it helps create a positive and professional work environment. It fosters good relationships, improves communication, and builds trust among colleagues and clients. For example, using polite language and proper greetings can make others feel respected and valued, which can lead to better teamwork and collaboration.",
        },
        {
            question: "Is business etiquette a skill?",
            answer:
                "Yes, business etiquette is a skill. It involves understanding and practicing appropriate behaviors in professional settings. Like any skill, it can be learned and improved over time. For instance, learning how to properly introduce people at a meeting or how to write a professional email are parts of mastering business etiquette.",
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

export default BusinessetiquetteFaq;
