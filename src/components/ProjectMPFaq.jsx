import React, { useState } from 'react';

const ProjectMPFaq = () => {
    // FAQ Data
    const faqs = [
        {
            question: "What are the roles and responsibilities of a Project Management Professional?",
            answer:
                "Project managers take the lead in project planning, project execution, project monitoring, control, and closure. Project Manager responsibilities include the entire project scope including the project team, resources, budget, and the overall success of the project.",
        },
        {
            question: "How to become a PMP-certified Professional?",
            answer:
                "To become a PMP certified Professional, your first step is to confirm your eligibility to take the PMP exam. You are required to complete 35 hours of training from an Authorized Training Partner of PMI. The PMP preparation time will depend on your background in project management. Once you are ready, you can take the exam, and clear it to get certified as a PMP Professional.",
        },
        {
            question: "What is the PMP certification all about?",
            answer:
                "The Project Management Institute (PMI) offers the PMP, or Project Management Professional certification for project managers. The most coveted and widely recognized professional qualification for project management is called Project Management Professional certification which is the gold standard in project management.",
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

export default ProjectMPFaq;
