import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, app } from '../../firebase'

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Add state for error message

    const handleRegistration = async (e) => {
        e.preventDefault();
        const auth = getAuth();

        if (password.length < 6) {
            setErrorMessage('Password should be at least 6 characters');
            return; // Do not proceed with registration
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Registration successful');
            // Handle successful registration, e.g., redirect the user
        } catch (error) {
            // Handle registration error, e.g., display an error message
            console.error('Registration error:', error);
            setErrorMessage('Registration error: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleRegistration}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {errorMessage && (
                    <div style={{ color: 'red' }}>{errorMessage}</div>
                )}
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
