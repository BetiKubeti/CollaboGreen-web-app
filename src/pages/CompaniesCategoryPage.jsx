import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase';
import { collection, getDocs, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CompanyRegisterQuestion from '../components/CompanyRegisterQuestion';
import Footer from '../components/Footer';

import LogoExample from '../assets/Logo-Image-Example.jpg'

export default function CompaniesCategoryPage() {
    const [user] = useAuthState(auth);
    const [companies, setCompanies] = useState([]);
    const [fetched, setFetched] = useState(false);
    const { category } = useParams();
    const [activeRating, setActiveRating] = useState('All'); // State for active rating filter
    const [selectedLocation, setSelectedLocation] = useState(''); // State for selected location
    const locations = ["Denmark", "Germany", "USA", "Poland"]

    console.log('Searching for:', category);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'companies'));

                const companyData = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.category === category && (activeRating === 'All' || data.rating === parseInt(activeRating))) {
                        companyData.push(data);
                    }
                });

                setCompanies(companyData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (category !== '') {
            fetchCompanies();
        }
    }, [category, activeRating]);

    // Function to handle rating filter button click
    const handleRatingFilterClick = (rating) => {
        setActiveRating(rating);
    };

    return (
        <>
            <section className='discover-companies-header'>
                <div className='discover-companies-header-container'>
                    <div className='title'>
                        <h2>Best in {category}!</h2>
                    </div>
                    <div className='search-bar-container'>
                        <p>
                            Compare the best companies in this category.
                            Sort them by rating and location.
                            Connect the best for your business.
                        </p>
                    </div>
                </div>
            </section>

            <section className='category-lists'>
                
                <div className='filters-container'>
                    <div className='filter-by-rating filter'>
                        <h3>Rating</h3>
                        <div className='rating-filter'>
                            <button
                                className={activeRating === 'All' ? 'active-rating-button' : ''}
                                onClick={() => handleRatingFilterClick('All')}
                            >
                                Any <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                            </button>
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <button
                                    key={rating}
                                    className={activeRating === rating.toString() ? 'active-rating-button' : ''}
                                    onClick={() => handleRatingFilterClick(rating.toString())}
                                >
                                    {<svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>}
                                    {rating}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='filter-by-location filter'>
                        <h3>Location</h3>
                        <div className='locations-filter'>
                            <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                                <option value="" disabled hidden selected>Select a location</option>
                                {locations.map((location) => (
                                    <option key={location} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className='company-list-container'>
                    <div className='title'>
                        <h2>Companies ({companies.length})</h2>
                    </div>
                    <div className='company-by-category-container'>
                        {companies.length === 0 ? (
                            <div className='no-matches'>
                                <p>No matches found for {category}</p>
                            </div>
                        ) : (
                            companies.map((company, index) => (
                                <div className='company-by-category-card' key={index}>
                                    <div className='company-info-container'>
                                        <div className='company-logo'>
                                            <img src={LogoExample} alt="Company Logo" />
                                        </div>
                                        <div className='company-info'>
                                            <div className='company-name'>
                                                <h3>{company.companyName}</h3>
                                            </div>
                                            <div className='company-rating'>
                                                <div className='star-rating'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                                </div>
                                                <div className='trust-score'>
                                                    <p>Trust Score: 4.12</p>
                                                </div>
                                                <div className='reviews-number'>
                                                    <p>Reviews: 12,102,123</p>
                                                </div>
                                            </div>
                                            <div className='location'>
                                                <p>Location: Aarhus, Denmark</p>
                                            </div>
                                            <div className='company-type'>
                                                <p>Type of company: {category}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='connections'>
                                        <div className='social-media'>
                                            <p>See more:</p>
                                        </div>
                                        <div className='website'>
                                            <p>Website: <a href={company.websiteURL} target='_blank'>{company.websiteURL}</a></p>
                                        </div>
                                        <div className='more-reviews'>
                                            <a href="#">Read Reviews</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {user && <div></div>}
            {!user && <CompanyRegisterQuestion />}

            <Footer />
        </>
    );
}