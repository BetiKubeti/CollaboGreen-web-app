import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { NavLink, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom

import SignUpLogInButton from './SignUpLogInButton';
import ProfileButton from './ProfileButton'; // Import the ProfileButton component

const Nav = () => {
    const [user] = useAuthState(auth);
    const location = useLocation(); // Get the current location using useLocation

    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <NavLink to="/">
                        <span>Collabo</span>Green
                    </NavLink>
                </div>
                <div className='contents'>
                    <NavLink to="/" className={location.pathname === '/' ? 'active-navbar-link' : ''}>Home</NavLink>
                    <NavLink to="/discover-companies" className={location.pathname === '/discover-companies' ? 'active-navbar-link' : ''}>Discover Businesses</NavLink>
                    {user && <ProfileButton />} {/* Only render ProfileButton when the user is signed in */}
                    {!user && (
                        <NavLink to="/enterprofile">
                            <SignUpLogInButton />
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
