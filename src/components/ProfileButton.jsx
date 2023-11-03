import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase'; // Import the auth object from your Firebase configuration file


export default function ProfileButton() {
    // Use state to manage the dropdown visibility
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleLogOut = async () => {
        try {
            await auth.signOut(); // Sign the user out
        } catch (error) {
            console.error('Log out error:', error);
        }
    };

    // Toggle the dropdown when the button is clicked
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Close the dropdown when clicking outside
    const handleDocumentClick = (event) => {
        if (isDropdownOpen && !event.target.closest("#profileButton")) {
            setDropdownOpen(false);
        }
    };

    // Attach the document click event listener when the component mounts
    React.useEffect(() => {
        document.addEventListener("click", handleDocumentClick);
        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <div className="profile-button" id="profileButton">
            <div id="profileButtonToggle" onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2Z" /><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" /></g></svg>
            </div>
            {isDropdownOpen && (
                <div className="profile-dropdown" id="profileDropdown">
                    <NavLink className='dropdown-button' id='dropdown-button' to="/profile">Profile</NavLink>
                    <button className='dropdown-button' id='dropdown-button' onClick={handleLogOut}>Sign Out</button>
                </div>
            )}
        </div>
    );
}

function handleLogOut() {
    // Implement your logout logic here
}
