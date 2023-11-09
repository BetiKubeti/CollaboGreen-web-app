import React, { useState } from 'react';

// Functional component for the Frequently Asked Questions (FAQ) section
export default function FAQ() {
    // Array containing FAQ data
    const faqData = [
        {
            question: 'How will CollabGreen benefit companies?',
            answer: "CollaboGreen is designed to benefit companies in several ways. It helps companies by streamlining operations, offering data-driven insights, enhancing collaboration, reducing costs, and ensuring scalability. It also provides valuable information for companies ESG (Environmental, Social, and Governance) performance. CollaboGreen aligns businesses with sustainability expectations and facilitates more informed decision-making.",
        },
        {
            question: 'What I need to do to be allowed to post a review?',
            answer: "To write a review on other companies, you need to establish a contract or partnership with them. When you create your profile, you'll need to upload essential information about your business relationships. Your profile information will be reviewed and confirmed by the CollabGreen team before you can post a review about a company you have partnered with. This procedure seeks to preserve the integrity of reviews and promote openness on the site.",
        },
        {
            question: 'What is ESG and why it’s important?',
            answer: "ESG (Environmental, Social, and Governance) is significant because it represents a commitment to long-term sustainability, accountability, and ethical business practices. It is more than simply a collection of standards; it is a representation of a company's environmental, social, and corporate governance effect. In a more conscious and interconnected world, prioritizing ESG helps firms generate good change, acquire trust, and secure long-term success.",
        },
    ];

    // State to manage the open collapsible item
    const [openCollapsible, setOpenCollapsible] = useState(-1);

    // Function to handle collapsible click events
    const handleCollapsibleClick = (index) => {
        if (openCollapsible === index) {
            setOpenCollapsible(-1);
        } else {
            setOpenCollapsible(index);
        }
    };

    // Render the FAQ section
    return (
        <section className='faq'>
            {/* Container for the FAQ section */}
            <div className="faq-container">
                {/* Title for the FAQ section */}
                <div className='title'>
                    <h2>FAQs</h2>
                </div>
                {/* Container for FAQ questions and answers */}
                <div className='faq-questions'>
                    {/* Mapping through FAQ data to render each question and answer */}
                    {faqData.map((item, index) => (
                        <div key={index}>
                            {/* Button for each FAQ question with click event handler */}
                            <button
                                type="button"
                                className={`faq-collapsible ${openCollapsible === index ? 'active' : ''}`}
                                onClick={() => handleCollapsibleClick(index)}
                            >
                                {item.question}
                                {/* Arrow icon for indicating open or closed state */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={`arrow-icon ${openCollapsible === index ? 'open' : ''}`}>
                                    <path fill="currentColor" d="M236.78 211.81A24.34 24.34 0 0 1 215.45 224H40.55a24.34 24.34 0 0 1-21.33-12.19a23.51 23.51 0 0 1 0-23.72l87.43-151.87a24.76 24.76 0 0 1 42.7 0l87.45 151.87a23.51 23.51 0 0 1-.02 23.72Z" />
                                </svg>
                            </button>
                            {/* Content for each FAQ answer with open or closed state */}
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
