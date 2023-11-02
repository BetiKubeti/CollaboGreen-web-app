import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { NavLink } from 'react-router-dom';

import SignUpLogInButton from './SignUpLogInButton';
import ProfileButton from './ProfileButton';

const Nav = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = async () => {
        try {
            await auth.signOut(); // Sign the user out
        } catch (error) {
            console.error('Log out error:', error);
        }
    };

    const renderProfileButton = () => {
        if (user) {
            // If the user is authenticated, show a "Log Out" button
            return (
                <>
                    <ProfileButton />
                </>
            );
        } else {
            // If the user is not authenticated, show a "Sign In" button
            return (
                <NavLink to="/enterprofile">
                    <SignUpLogInButton />
                </NavLink>
            );
        }
    };

    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <NavLink to="/">
                        <span>Collabo</span>Green
                    </NavLink>
                </div>
                <div className='contents'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">Discover Businesses</NavLink>
                    {renderProfileButton()}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
