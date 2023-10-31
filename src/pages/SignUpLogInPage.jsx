import React from 'react'; // Import React module

// Import an image

// Import Font Awesome Icons and Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AboutCollaboGreen from '../components/AboutCollaboGreen'
import FAQ from '../components/FAQ'

export default function SignUpLogInPage() {

    return (
        <>
            <section className='signup-login-choice'>
                <div className='signup-login-choice-container'>
                    <div className='signup-login-choice-content'>
                        <div className='signup-login-choice-title'>
                            <h2>Are you a Company?</h2>
                        </div>
                        <div className='signup-login-choice-question'>
                            <p>Set up your business account on CollaboGreent for free</p>
                        </div>
                        <div className='signup-login-choice-buttons'>
                            <a href="/signup">Sign Up</a>
                            <a href="/login">Log In</a>
                        </div>
                    </div>
                    <div className='signup-login-choice-image'>
                        <img src="" alt="" />
                    </div>
                </div>
            </section>

            <FAQ />

            <AboutCollaboGreen />
        </>
    );
}
