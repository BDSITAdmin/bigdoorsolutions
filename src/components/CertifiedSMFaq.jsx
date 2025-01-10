import React, { useState } from 'react';

const CertifiedSMFaq = () => {
    // FAQ Data
    const faqs = [
        {
            question: "Do you provide any training material for CSM certification?",
            answer:
                "We provide the hard copy of the courseware for our classroom participants. ",
        },
        {
            question: "Is this a live CSM training, or will I watch pre-recorded videos?",
            answer:
                "Our CSM training is live and is available in both Live Instructor-Led Virtual and Classroom Training formats. The batches at BigDoor Solutions are guaranteed to run, so you can enroll in the earliest available batch easily.",
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

export default CertifiedSMFaq;
