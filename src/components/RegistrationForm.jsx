import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();
        const auth = getAuth();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Handle successful registration, e.g., redirect the user
        } catch (error) {
            // Handle registration error, e.g., display an error message
            console.error('Registration error:', error);
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
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
