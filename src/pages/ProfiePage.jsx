import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase';
import { collection, getDocs, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

import Footer from '../components/Footer';

import LogoExample from '../assets/Logo-Image-Example.jpg'

export default function ProfiePage() {
    


    return (
        <>
            <section className='profile'>
                <div className='profile-sidebar-container'>
                    <div className='profile-picture'>
                        <img src={LogoExample} alt="profile logo image" />
                    </div>
                    <div className='company-title-sidebar'>
                        <h2></h2>
                    </div>
                    <div className='company-sub-categories-sidebar'>
                        <p>We do:</p>
                    </div>
                    <div className='add-contact-information-sidebar'>
                        <p>Contact Us:</p>
                    </div>
                    <div className='company-website-sidebar'>
                        <p></p>
                    </div>
                    <div className='company-rating-sidebar'>
                        <p>Your Trust Score: 4.12</p>
                        <div className='star-rating'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

