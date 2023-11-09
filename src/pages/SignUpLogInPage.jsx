import React from 'react'; // Import React module

// Import an image
import Are_You_A_Company_Gif from '../assets/Are-You-A-Company-Gif.gif'

// Import Font Awesome Icons and Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AboutCollaboGreen from '../components/AboutCollaboGreen'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer';

export default function SignUpLogInPage() {

    return (
        <>
            {/* Signup and Login Choice section */}
            <section className='signup-login-choice'>
                <div className='signup-login-choice-container'>
                    {/* Content for Signup and Login Choice */}
                    <div className='signup-login-choice-content'>
                        {/* Title for Signup and Login Choice */}
                        <div className='signup-login-choice-title'>
                            <h2>Are you a Company?</h2>
                        </div>
                        {/* Question for Signup and Login Choice */}
                        <div className='signup-login-choice-question'>
                            <p>Set up your business account on CollaboGreent for free</p>
                        </div>
                        {/* Buttons for Signup and Login Choice */}
                        <div className='signup-login-choice-buttons'>
                            <a href="/signup">Sign Up</a>
                            <a href="/login">Log In</a>
                        </div>
                    </div>
                    {/* Image for Signup and Login Choice */}
                    <div className='signup-login-choice-image'>
                        <img src={Are_You_A_Company_Gif} alt="Are You A Company Gif" />
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions component */}
            <FAQ />

            {/* About CollaboGreen component */}
            <AboutCollaboGreen />

            {/* Footer component */}
            <Footer />
        </>

    );
}
