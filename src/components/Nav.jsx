import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <NavLink to="/"><span>Collabo</span>Green</NavLink>
                </div>
                <div className='contents'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">Discover Businesses</NavLink>
                    <NavLink to="/signup">Sign Up/Log In</NavLink>
                </div>
            </div>
        </nav>
    );
}