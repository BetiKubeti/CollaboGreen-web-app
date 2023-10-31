import React, { useState } from 'react'; // Import React module
import { NavLink } from "react-router-dom"; // Import NavLink component for routing
import SignInSignUpButton from './SignUpLogInButton'

export default function Nav() {
    // This is the functional component for the navigation bar

    return (
        <nav>
            {/* Navigation section, typically used for site navigation */}
            <div className='nav-container'>
                {/* Container for the navigation bar */}
                <div className='logo'>
                    {/* Logo section */}
                    <NavLink to="/">
                        {/* NavLink component for internal links */}
                        <span>Collabo</span>Green
                    </NavLink>
                    {/* Link to the home page with "CollaboGreen" */}
                </div>
                <div className='contents'>
                    {/* Navigation contents section */}
                    <NavLink to="/">
                        {/* Link to the home page */}
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        {/* Link to the "Discover Businesses" page */}
                        Discover Businesses
                    </NavLink>
                    <NavLink to="/enterprofile">
                        <SignInSignUpButton />
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
