import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../firebase';
import { doc, setDoc, getFirestore, collection, addDoc } from 'firebase/firestore';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        const auth = getAuth();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Handle successful sign-in, e.g., redirect the user
        } catch (error) {
            // Handle sign-in error, e.g., display an error message
            console.error('Sign-in error:', error);
        }
    };

    return (
        <section className='signin-page'>
            <div className='signin-page-wrap'>
                <div className='registration-page-container'>
                    <h2>Sign In</h2>
                    <form onSubmit={handleSignIn}>
                        <div className='input-container'>
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='input-container'>
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='input-container'>
                            <button type="submit">Sign In</button>
                        </div>
                    </form>
                    <div className='change-option'>
                        <p>You already have a CollaboGreen Account?</p>
                        <a href="/signup">Sign Up here!</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignInForm;
