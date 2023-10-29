import React, { useState } from 'react'; // Import React module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Import FontAwesomeIcon component

export default function SearchBar() {
    // This is the functional component for the SearchBar

    const [searchTerm, setSearchTerm] = useState(''); // Initialize a state variable to store user input

    const handleSearch = () => {
        // Function to handle the search action
        // You can implement your search logic here, e.g., sending a request to the server
        // The 'searchTerm' state variable holds the user's input
        console.log('Searching for:', searchTerm); // Log the search term to the console
    };

    return (
        <div className="input-container">
            {/* Container for the entire search bar */}
            <form className="search-bar" action="">
                {/* Form element with 'search-bar' class */}
                <input
                    type="text"
                    placeholder="Search for a company, category, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Input field for user input */}
                <button onClick={handleSearch}>
                    {/* Button that triggers the search action */}
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    {/* Include a magnifying glass icon */}
                </button>
            </form>
        </div>
    );
}
