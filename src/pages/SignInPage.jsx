import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
