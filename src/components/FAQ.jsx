import React, { useState } from 'react';

export default function FAQ() {
    const faqData = [
        {
            question: 'How will CollabGreen benefit companies?',
            answer:
                "CollaboGreen is designed to benefit companies in several ways. It helps companies by streamlining operations, offering data-driven insights, enhancing collaboration, reducing costs, and ensuring scalability. It also provides valuable information for companies ESG (Environmental, Social, and Governance) performanc. CollaboGreen aligns businesses with sustainability expectations and facilitating more informed decision-making.",
        },
        {
            question: 'What I need to do to be allowed to post a review?',
            answer:
                "To write a review on other companies, you need to establish a contract or partnership with them. When you create your profile, you'll need to upload essential information about your business relationships. Your profile information will be reviewed and confirmed by the CollabGreen team before you can post a review about a company you have partnered with. This procedure seeks to preserve the integrity of reviews and promote openness on the site.",
        },
        {
            question: 'What is ESG and why its important?',
            answer:
                "ESG (Environmental, Social, and Governance) is significant because it represents a commitment to long-term sustainability, accountability, and ethical business practices. It is more than simply a collection of standards; it is a representation of a company's environmental, social, and corporate governance effect.In a more conscious and interconnected world, prioritizing ESG helps firms generate good change, acquire trust, and secure long-term success.",
        },
    ];

    const [openCollapsible, setOpenCollapsible] = useState(-1);

    const handleCollapsibleClick = (index) => {
        if (openCollapsible === index) {
            setOpenCollapsible(-1);
        } else {
            setOpenCollapsible(index);
        }
    };

    return (
        <section className='faq'>
            <div className="faq-container">
                <div className='title'>
                    <h2>FAQ</h2>
                </div>
                <div className='faq-questions'>
                    {faqData.map((item, index) => (
                        <div key={index}>
                            <button
                                type="button"
                                className={`faq-collapsible ${openCollapsible === index ? 'active' : ''}`}
                                onClick={() => handleCollapsibleClick(index)}
                            >
                                {item.question}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={`arrow-icon ${openCollapsible === index ? 'open' : ''}`}>
                                    <path fill="currentColor" d="M236.78 211.81A24.34 24.34 0 0 1 215.45 224H40.55a24.34 24.34 0 0 1-21.33-12.19a23.51 23.51 0 0 1 0-23.72l87.43-151.87a24.76 24.76 0 0 1 42.7 0l87.45 151.87a23.51 23.51 0 0 1-.02 23.72Z" />
                                </svg>
                            </button>
                            <div className={`faq-content ${openCollapsible === index ? 'open' : ''}`}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
