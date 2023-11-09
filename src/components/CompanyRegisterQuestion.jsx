// Import React and useState from the 'react' module
import React from 'react';
import SignInSignUpButton from './SignUpLogInButton'; // Importing the SignUpLogInButton component

// Functional component for the Company Register Question section
export default function CompanyRegisterQuestion() {
    // This is the functional component for the navigation bar

    return (
        // Company Register Question section
        <section className='are-you-a-company'>
            {/* Title for the Company Register Question section */}
            <div className='title'><h2>Are you a company?</h2></div>
            {/* Button to navigate to the enter profile page */}
            <div className='button'>
                <a href="/enterprofile">
                    {/* Using the SignInSignUpButton component */}
                    <SignInSignUpButton />
                </a>
            </div>
        </section>
    );
}
