// RegistrationPage.jsx
import React, { useState } from 'react';
import RegistrationForm from '../components/RegistrationForm'; // Import your RegistrationForm component

const RegistrationPage = () => {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    return (
        <div>
            <h1>Registration Page</h1>
            <button onClick={handleButtonClick}>Register</button>

            {showForm && <RegistrationForm />}
        </div>
    );
};

export default RegistrationPage;
