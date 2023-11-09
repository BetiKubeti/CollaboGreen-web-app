// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CompanyRegisterQuestion from '../components/CompanyRegisterQuestion';
import Footer from '../components/Footer';

import LogoExample from '../assets/Logo-Image-Example.jpg'

// Define the main functional component for the Companies Category Page
export default function CompaniesCategoryPage() {
    // State hooks to manage user, companies, category, and filters
    const [user] = useAuthState(auth);
    const [companies, setCompanies] = useState([]);
    const { category } = useParams();
    const [activeRating, setActiveRating] = useState('All'); // State for active rating filter
    const [selectedLocation, setSelectedLocation] = useState('All'); // State for selected location

    // State hooks for contact and location information
    const [contactLinkedIn, setContactLinkedIn] = useState('');
    const [contactFacebook, setContactFacebook] = useState('');
    const [contactInstagram, setContactInstagram] = useState('');
    const [locationCity, setLocationCity] = useState('');
    const [locationCountry, setLocationCountry] = useState('');
    const [locations, setLocations] = useState([]);

    // Threshold for sticky header on scroll
    const scrollThreshold = 117;

    // Log the category being searched for
    console.log('Searching for:', category);

    // Function to fetch unique locations from Firestore
    const fetchUniqueLocations = async () => {
        const locationsSet = new Set();
        const querySnapshot = await getDocs(collection(firestore, 'companies'));

        // Iterate through documents to extract unique location countries
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const locationCountry = data.locationCountry;

            if (locationCountry) {
                locationsSet.add(locationCountry);
            }
        });

        // Convert set to array and update the locations state
        const locationsArray = Array.from(locationsSet);
        setLocations(locationsArray);
    };

    // Effect hook to fetch unique locations on component mount
    useEffect(() => {
        fetchUniqueLocations();
    }, []);

    // Effect hook to fetch companies based on category, rating, and location filters
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                // Create a Firestore query based on selected filters
                let q;
                if (selectedLocation === 'All') {
                    q = query(collection(firestore, 'companies'));
                } else {
                    q = query(collection(firestore, 'companies'), where('locationCountry', '==', selectedLocation));
                }

                // Execute the query and update the companies state
                const querySnapshot = await getDocs(q);
                const companyData = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const hasCategory = data.category === category || data.companyName === category || data.locationCountry === category;
                    const hasSubcategory = data.subcategories && data.subcategories.includes(category);

                    // Check if the company matches the category or has the subcategory, and if the rating filter is satisfied
                    if ((hasCategory || hasSubcategory) && (activeRating === 'All' || data.rating === parseInt(activeRating))) {
                        companyData.push(data);
                    }
                });

                setCompanies(companyData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch companies only if category or location filters are applied
        if (category !== '' || selectedLocation !== 'All') {
            fetchCompanies();
        }
    }, [category, activeRating, selectedLocation]);

    // Function to handle rating filter button click
    const handleRatingFilterClick = (rating) => {
        setActiveRating(rating);
    };

    // Function to generate category header based on the selected category
    function getCategoryHeader(category) {
        if (category) {
            // Check if 'category' matches a company name or location, return appropriate header
            const isCompany = companies.some(company => company.companyName === category);
            const isLocation = companies.some(company => company.locationCountry === category);

            if (isCompany) {
                return `Companies matching the name "${category}"`;
            } else if (isLocation) {
                return `Companies matching the location "${category}"`;
            } else {
                return `Best in the ${category} category!`;
            }
        }
    }

    // Effect hook to handle the sticky header on scroll
    useEffect(() => {
        const filtersContainer = document.querySelector('.filters-container');
        const initialTopOffset = filtersContainer.offsetTop;

        // Scroll event listener to add or remove 'sticky' class based on scroll position
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY >= initialTopOffset - scrollThreshold) {
                filtersContainer.classList.add('sticky');
            } else {
                filtersContainer.classList.remove('sticky');
            }

            // Calculate the position of the closest element that should trigger the stop
            const elementsToStopAt = document.querySelectorAll('.element-to-stop-at');
            let closestElement = null;

            // Iterate through elements to find the closest one to the filters container
            elementsToStopAt.forEach((element) => {
                if (element.offsetTop > filtersContainer.offsetTop && element.offsetTop <= scrollY + filtersContainer.offsetHeight + 80) {
                    if (!closestElement || element.offsetTop < closestElement.offsetTop) {
                        closestElement = element;
                    }
                }
            });

            // Calculate the new top offset for the filters container based on the closest element
            const newTopOffset = closestElement ? closestElement.offsetTop - filtersContainer.offsetHeight - 30 : scrollThreshold;

            // Update the top offset of the filters container
            filtersContainer.style.top = `${newTopOffset}px`;
        };

        // Add scroll event listener on component mount
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Header section for discovering companies */}
            <section className='discover-companies-header'>
                <div className='discover-companies-header-container'>
                    <div className='title'>
                        {/* Display the category header if available */}
                        <h2>{category && getCategoryHeader(category)}</h2>
                    </div>
                    <div className='description'>
                        {/* Description of the page */}
                        <p>
                            Compare the best companies.
                            Sort them by rating and location.
                            Connect with the best for your business.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section containing the list of companies */}
            <section className='company-lists'>
                
                {/* Outer container for filters */}
                <div className='filters-outer-container'>
                    <div className={`filters-container ${selectedLocation ? 'with-location' : ''}`}>
                        
                        {/* Rating filter section */}
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

                        {/* Location filter section */}
                        <div className='filter-by-location filter'>
                            <h3>Location by Country</h3>
                            <div className='locations-filter'>
                                <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                                    <option value="All" selected>Any location</option>
                                    {locations.map((location) => (
                                        <option key={location} value={location}>
                                            {location}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Container for the list of companies */}
                <div className='company-list-container'>
                    <div className='title'>
                        {/* Display the total number of companies */}
                        <h2>Companies ({companies.length})</h2>
                    </div>
                    <div className='company-by-category-container'>
                        {/* Check if there are companies to display and if there is map through companies and display each company card*/}
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
                                                    <p><strong>Trust Score:</strong> 4.12</p>
                                                </div>
                                                <div className='reviews-number'>
                                                    <p><strong>Reviews:</strong> 12,102,123</p>
                                                </div>
                                            </div>
                                            <div className='location'>
                                                <p><strong>Location:</strong> <br /></p>
                                                <p>
                                                    {company.locationCity && company.locationCountry
                                                        ? `${company.locationCity}, ${company.locationCountry}`
                                                        : company.locationCity || company.locationCountry
                                                    }
                                                </p>
                                            </div>
                                            <div className='company-type'>
                                                <p>
                                                    <strong>Type of company:</strong>
                                                    {company.category && company.subcategories
                                                        ? `${company.category}, ${company.subcategories.join(', ')}`
                                                        : company.category || company.subcategories
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='connections'>
                                        <div className='social-media'>
                                            <p>
                                                <strong>See more:</strong>
                                                {company.contactLinkedIn && (
                                                    <div className='linked-in contact'>
                                                        <a href={company.contactLinkedIn} target='_blank'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60" /><rect width="256" height="256" fill="#0A66C2" rx="60" /><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z" /></g></svg>
                                                        </a>
                                                    </div>
                                                )}
                                                {company.contactFacebook && (
                                                    <div className='facebook contact'>
                                                        <a href={company.contactFacebook} target='_blank'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53" /><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z" /></svg>
                                                        </a>
                                                    </div>
                                                )}
                                                {company.contactInstagram && (
                                                    <div className='instagram contact'>
                                                        <a href={company.contactInstagram} target='_blank'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" /><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" /><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z" /><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5" /><stop offset=".1" stop-color="#FD5" /><stop offset=".5" stop-color="#FF543E" /><stop offset="1" stop-color="#C837AB" /></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8" /><stop offset=".128" stop-color="#3771C8" /><stop offset="1" stop-color="#60F" stop-opacity="0" /></radialGradient></defs></g></svg>
                                                        </a>
                                                    </div>
                                                )}
                                            </p>
                                        </div>
                                        <div className='website'>
                                            <p><strong>Website:</strong> <a href={company.websiteURL} target='_blank'>{company.websiteURL}</a></p>
                                        </div>
                                        <div className='more-reviews'>
                                            <a href="#"><strong>Read Reviews</strong> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g transform="rotate(90 128 128)"><path fill="currentColor" d="M236.78 211.81A24.34 24.34 0 0 1 215.45 224H40.55a24.34 24.34 0 0 1-21.33-12.19a23.51 23.51 0 0 1 0-23.72l87.43-151.87a24.76 24.76 0 0 1 42.7 0l87.45 151.87a23.51 23.51 0 0 1-.02 23.72Z" /></g></svg></a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Display different content based on user authentication status */}
            {user && <div></div>}
            {!user && <CompanyRegisterQuestion />}

            <Footer />
        </>
    );
}

