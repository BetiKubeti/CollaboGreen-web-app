import React, { useState } from 'react'; // Import React module
import { NavLink } from "react-router-dom"; // Import NavLink component for routing
import SignInSignUpButton from './SignUpLogInButton'

export default function Nav() {
    // This is the functional component for the navigation bar

    return (
        <section className='are-you-a-company'>
            <div className='title'><h2>Are you a company?</h2></div>
            <div className='button'>
                <SignInSignUpButton />
            </div>
        </section>
    );
}