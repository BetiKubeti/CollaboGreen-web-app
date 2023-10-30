import React, { useState } from 'react';

export default function FAQ() {
    const [activeCollapsible, setActiveCollapsible] = useState(null);

    const handleCollapsibleClick = (index) => {
        if (activeCollapsible === index) {
            setActiveCollapsible(null);
        } else {
            setActiveCollapsible(index);
        }
    };

    const faqData = [
        {
            question: 'Open Section 1',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            question: 'Open Section 2',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            question: 'Open Section 3',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ];

    return (
        <section className='faq'>
            <div className="faq-container">
                <h2>FAQ</h2>
                {faqData.map((item, index) => (
                    <div key={index}>
                        <button
                            type="button"
                            className={`collapsible ${activeCollapsible === index ? 'active' : ''}`}
                            onClick={() => handleCollapsibleClick(index)}
                        >
                            {item.question}
                        </button>
                        <div className={`content ${activeCollapsible === index ? 'open' : ''}`}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}