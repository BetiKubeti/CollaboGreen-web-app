// Import React and useState from the 'react' module
import React from 'react';
import AboutCollaboGreenGif from '../assets/About-CollaboGreen-gif.gif'; // Importing the AboutCollaboGreenGif image

// Functional component for the AboutCollaboGreen section
export default function AboutCollaboGreen() {
    return (
        // About CollaboGreen section
        <section className='about-collabo-green'>
            <div className='about-collabo-green-container'>
                {/* Image for About CollaboGreen */}
                <div className='about-collabo-green-image'>
                    <img src={AboutCollaboGreenGif} alt="About CollaboGreen Gif" />
                </div>
                {/* Text content for About CollaboGreen */}
                <div className='about-collabo-green-text'>
                    <p>
                        {/* Description of CollaboGreen */}
                        CollaboGreen is an inclusive review platform where each company with a profile can participate.
                        {/* Highlighting key points */}
                        <span> Share your experiences</span> to empower others in making informed decisions and <span>inspire companies</span> to elevate their performance.
                    </p>
                </div>
            </div>
        </section>
    );
}
