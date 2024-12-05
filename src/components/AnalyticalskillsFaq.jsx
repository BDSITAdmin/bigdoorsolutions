import React, { useState } from 'react';

const AnalyticskillsFaq = () => {
    // FAQ Data
    const faqs = [
        {
            question: "How do you break down complex problems to find a solution?",
            answer:
                "When faced with a complex problem, I first gather all relevant information to fully understand the situation. Then, I break the problem into smaller, more manageable parts, prioritize them based on urgency or impact, and address each one systematically. For example, when managing a project deadline issue, I split tasks into urgent and non-urgent and focused resources on the most critical ones first.",
        },
        {
            question: "How do you prioritize tasks when handling multiple projects that require analysis?",
            answer:
                " First you have to prioritize tasks based on their impact and deadlines. Then assess which projects have the most significant effect on overall business goals and address those first. For example, when handling multiple reports, You should start with the ones that are time-sensitive and high-impact, followed by tasks that are important but less urgent.",
        },
        {
            question: "What tools or techniques do you use to analyze data?",
            answer:
                " Have to use a range of tools depending on the task at hand. For data analysis, you should have proficient in Excel for basic data manipulation and visualization. For more complex data, you use tools like SQL and Power BI. Additionally, you apply statistical techniques such as regression analysis and A/B testing when necessary.",
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

export default AnalyticskillsFaq;
