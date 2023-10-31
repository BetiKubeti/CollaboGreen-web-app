import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../firebase';
import { doc, setDoc, getFirestore, collection, addDoc } from 'firebase/firestore';

// Define the categories array
const categories = ["Category 1", "Category 2", "Category 3"]; // Replace with your actual category data

const RegistrationForm = () => {
    const [companyName, setCompanyName] = useState('');
    const [websiteURL, setWebsiteURL] = useState('');
    const [category, setCategory] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();

        // Validation checks (e.g., password matching, email validation) should be performed here.
        const companyData = {
            companyName,
            websiteURL,
            category,
            email,
            // You can add other fields here.
        };

        try {
            await createUserWithEmailAndPassword(auth, email, password);

            // Create a Firestore document for the company with an auto-generated unique ID
            const docRef = await addDoc(collection(firestore, 'companies'), companyData);

            console.log('Registration and document creation successful. Document ID:', docRef.id);
            // Handle successful registration, e.g., redirect the user.
        } catch (error) {
            // Handle registration error, e.g., display an error message.
            console.error('Registration error:', error);
        }
    };

    return (
        <section className='registration-page'>
            <div className='registration-page-wrap'>
                <div className='registration-page-container'>
                    <h2>Company Registration</h2>
                    <form onSubmit={handleRegistration}>
                        <p>Company Information:</p>
                        <div className='input-container'>
                            <input type="text" placeholder='Company Name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </div>
                        <div className='input-container'>
                            <input type="url" placeholder='Website URL: https://example.com' value={websiteURL} onChange={(e) => setWebsiteURL(e.target.value)} />
                        </div>
                        <div className='input-container'>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Select a category</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='input-container'>
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <p>Password:</p>
                        <div className='input-container'>
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='input-container'>
                            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div>
                            {errorMessage && (
                                <div style={{ color: 'red' }}>{errorMessage}</div>
                            )}
                        </div>
                        <div className='input-container'>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
