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
        <div className="search-bar-container">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="feSearch0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="feSearch1" fill="currentColor"><path id="feSearch2" d="m16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426ZM10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/></g></g></svg>
                    {/* Include a magnifying glass icon */}
                </button>
            </form>
        </div>
    );
}
