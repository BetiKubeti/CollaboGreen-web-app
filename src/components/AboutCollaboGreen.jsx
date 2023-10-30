import React, { useState } from 'react'; // Import React module
import AboutCollaboGreenGif from '../assets/About-CollaboGreen-gif.gif'

export default function AboutCollaboGreen() {
    // This is the functional component for the navigation bar

    return (
        <section className='about-collabo-green'>
            <div className='about-collabo-green-container'>
                <div className='about-collabo-green-image'>
                    <img src={AboutCollaboGreenGif} alt="About CollaboGreen Gif" />
                </div>
                <div className='about-collabo-green-text'>
                    <p>
                        CollaboGreen is an inclusive review platform where each company with profile can participate. 
                        <span>Share your experiences</span> to empower others in making informed decisions and <span>inspire companies</span> to elevate their performance."
                    </p>
                </div>
            </div>
        </section>
    );
}