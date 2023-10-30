import React, { useState } from 'react'; // Import React module
import SignInSignUpButton from './SignUpLogInButton'

export default function CompanyRegisterQuestion() {
    // This is the functional component for the navigation bar

    return (
        <section className='are-you-a-company'>
            <div className='title'><h2>Are you a company?</h2></div>
            <div className='button'>
                <a href="/signup">
                    <SignInSignUpButton />
                </a>
            </div>
        </section>
    );
}