import React, { useState } from 'react';

export default function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Implement your search logic here, e.g., send a request to the server.
        // You can use 'searchTerm' to get the user's input.
        console.log('Searching for:', searchTerm);
    };

    return (
        <section className="banner" id="banner">
            <div className="banner-container">
                <div className="banner-content-container">
                    <div className="banner-text">
                        <p>
                            Discover businesses and <span>collaborate</span>. Read and write reviews.
                            Keep in mind <span>sustainability</span>.
                        </p>
                    </div>
                    <div className="banner-search-bar">
                        <input
                            type="text"
                            placeholder="Search for a company, category or location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
                <div className="image"></div>
            </div>
        </section>
    );
}
