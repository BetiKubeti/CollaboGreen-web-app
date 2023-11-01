import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../firebase';
import { doc, setDoc, getFirestore, collection, addDoc } from 'firebase/firestore';
import Footer from '../components/Footer'

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        const auth = getAuth();

        // Reset any previous error messages.
        setEmailError('');
        setPasswordError('');

        let hasErrors = false;

        if (!email) {
            setEmailError('Please enter your email');
            hasErrors = true;
        }

        if (!password) {
            setPasswordError('Please enter your password');
            hasErrors = true;
        }

        if (hasErrors) {
            // If there are errors, do not proceed with sign-in.
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Handle successful sign-in, e.g., redirect the user
        } catch (error) {
            // Handle sign-in error, e.g., display an error message
            console.error('Sign-in error:', error);
            // You can set a specific error message based on the error code.
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                setEmailError('Invalid email or password');
                setPasswordError('Invalid email or password');
            }
        }
    };

    return (
        <><section className='signin-page'>
            <div className='signin-page-wrap'>
                <div className='registration-page-container'>
                    <h2>Sign In</h2>
                    <form onSubmit={handleSignIn}>
                        <div className='input-container'>
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='error-message'>
                            {emailError && <p>{emailError}</p>}
                        </div>
                        <div className='input-container'>
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='error-message'>
                            {passwordError && <p>{passwordError}</p>}
                        </div>
                        <div className='input-container'>
                            <button type="submit">Sign In</button>
                        </div>
                    </form>
                    <div className='change-option'>
                        <p>You don't have a CollaboGreen Account?</p>
                        <a href="/signup">Sign Up here!</a>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        
        </>
    );
};

export default SignInForm;
