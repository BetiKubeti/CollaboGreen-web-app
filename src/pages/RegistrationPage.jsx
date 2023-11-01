import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, firestore } from '../../firebase';
import { doc, setDoc, getFirestore, collection, addDoc } from 'firebase/firestore';
import Modal from 'react-modal';
import Footer from '../components/Footer';

const categories = ["Software & Technology", "Environmental & Sustainability", "Education and Training ", "Home and Garden", "Legal Services", "Professional Services", "Marketing & Advertising", "Financial Services", "Healthcare & Medical Services", "Retail & E-commerceg", "Automotive & Transportation", "Entertainment and Media", "Hospitality and Travel", "Fitness and Wellness", "Manufacturing & Industrial"];

const RegistrationForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [websiteURL, setWebsiteURL] = useState('');
    const [category, setCategory] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [companyNameError, setCompanyNameError] = useState('');
    const [websiteURLError, setWebsiteURLError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [isEmailConfirmationModalOpen, setEmailConfirmationModalOpen] = useState(false);

    const handleRegistration = async (e) => {
        e.preventDefault();

        // Reset any previous error messages.
        setCompanyNameError('');
        setWebsiteURLError('');
        setCategoryError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');

        let hasErrors = false;

        if (!companyName) {
            setCompanyNameError('Please enter your company name');
            hasErrors = true;
        }

        if (!websiteURL) {
            setWebsiteURLError('Please enter your website URL');
            hasErrors = true;
        }

        if (!category) {
            setCategoryError('Choose a category');
            hasErrors = true;
        }

        if (!email) {
            setEmailError('Please enter your email');
            hasErrors = true;
        }

        if (!password) {
            setPasswordError('Please enter a password');
            hasErrors = true;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Password does not match');
            hasErrors = true;
        }

        if (hasErrors) {
            // If there are errors, do not proceed with registration.
            return;
        }

        // Proceed with registration.
        const companyData = {
            companyName,
            websiteURL,
            category,
            email,
        };

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Email verification is no longer sent here

            // Your other registration code here

            // Show the email confirmation modal
            setEmailConfirmationModalOpen(true);
        } catch (error) {
            console.error('Registration error:', error);
            // Handle registration error, e.g., display an error message.
        }
    };

    const requestEmailVerification = async () => {
        try {
            await sendEmailVerification(auth.currentUser);
            setEmailConfirmationModalOpen(true);
        } catch (error) {
            console.error('Email verification request error:', error);
            // Handle the error, e.g., display an error message.
        }
    };

    return (
        <>
            <section className='registration-page'>
                <div className='registration-page-wrap'>
                    <div className='registration-page-container'>
                        <h2>Create a free account</h2>
                        <form onSubmit={handleRegistration}>
                            <p>Company Information:</p>
                            <div className='input-container'>
                                <input type="text" placeholder='Company Name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            </div>
                            <div className='error-message'>
                                {companyNameError && <p>{companyNameError}</p>}
                            </div>
                            <div className='input-container'>
                                <input type="url" placeholder='Website URL: https://example.com' value={websiteURL} onChange={(e) => setWebsiteURL(e.target.value)} />
                            </div>
                            <div className='error-message'>
                                {websiteURLError && <p>{websiteURLError}</p>}
                            </div>
                            <div className='input-container'>
                                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="" disabled hidden defaultValue>Select a category</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='error-message'>
                                {categoryError && <p>{categoryError}</p>}
                            </div>
                            <div className='input-container'>
                                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='error-message'>
                                {emailError && <p>{emailError}</p>}
                            </div>
                            <p>Password:</p>
                            <div className='input-container'>
                                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='error-message'>
                                {passwordError && <p>{passwordError}</p>}
                            </div>
                            <div className='input-container'>
                                <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <div className='error-message'>
                                {confirmPasswordError && <p>{confirmPasswordError}</p>}
                            </div>
                            <div className='input-container'>
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                        <div className='change-option'>
                            <p>You already have a CollaboGreen Account?</p>
                            <a href="/login">Log In here!</a>
                        </div>
                    </div>
                </div>
        </section >

        <Modal
            isOpen={isEmailConfirmationModalOpen}
            contentLabel="Email Confirmation Modal"
        >
            <h2>Check Your Email</h2>
            <p>An email has been sent to you for confirmation. Please verify your email to complete the registration.</p>
            <button onClick={() => setEmailConfirmationModalOpen(false)}>Close</button>
            <button type="button" onClick={requestEmailVerification}>Resend Confirmation Email</button>
        </Modal>

        <Footer />
    </>
 );
};

export default RegistrationForm;
