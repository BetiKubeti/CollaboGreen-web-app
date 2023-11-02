import React, { useState } from 'react'; // Import React module
import { NavLink } from "react-router-dom"; // Import NavLink component for routing

export default function ProfileButton() {
    // This is the functional component for the navigation bar

    // Get the profile button and dropdown elements
    const profileButton = document.getElementById("profileButton");
    const profileButtonToggle = document.getElementById("profileButtonToggle");

    // Toggle the dropdown when the button is clicked
    profileButtonToggle.addEventListener("click", () => {
        profileButton.classList.toggle("active");
    });

    // Close the dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!profileButton.contains(event.target)) {
            profileButton.classList.remove("active");
        }
    });


    return (
        <div class="profile-button" id="profileButton">
            <button id="profileButtonToggle">Profile</button>
            <div class="profile-dropdown" id="profileDropdown">
                <NavLink to="/profile">Profile</NavLink>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </div>

    );
}