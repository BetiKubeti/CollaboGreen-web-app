import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firestore } from '../../firebase'; // Import firestore from your 'firebase.js' file
import { collection, getDocs } from 'firebase/firestore';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false); // State to control visibility of suggestions

    useEffect(() => {
        if (searchTerm) {
            const query = searchTerm.toLowerCase();
            const results = [];

            // Use the 'firestore' instance from your 'firebase.js' file
            getDocs(collection(firestore, 'companies'))
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        if (data && data.companyName && data.category) {
                            // Check if the company name or category matches the query
                            if (
                                data.companyName.toLowerCase().includes(query) ||
                                data.category.toLowerCase().includes(query)
                            ) {
                                results.push(data.companyName);
                            }
                        }
                    });

                    setSearchResults(results);
                    setShowSuggestions(true); // Show suggestions when there are search results
                })
                .catch((error) => {
                    console.error('Error fetching companies:', error);
                });
        } else {
            setSearchResults([]); // Clear the recommendations when the search term is empty
            setShowSuggestions(false); // Hide suggestions when there are no search results
        }
    }, [searchTerm]);

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
        // Implement your search logic here
    };

    return (
        <div className="search-bar-container">
            <form className={`search-bar search-bar-container ${showSuggestions ? 'active' : ''}`} action="">
                <input
                    type="text"
                    placeholder="Search for a company, category, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={showSuggestions ? 'active' : ''}
                />
                <button onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="feSearch0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                            <g id="feSearch1" fill="currentColor">
                                <path
                                    id="feSearch2"
                                    d="m16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426ZM10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"
                                />
                            </g>
                        </g>
                    </svg>
                </button>
            </form>
            {searchTerm && searchResults.length === 0 && (
                <div className="no-matches">No matches</div>
            )}
            {showSuggestions && searchResults.length > 0 && (
                <ul className="search-results">
                    {searchResults.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
