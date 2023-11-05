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

    console.log('Searching for:', category);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'companies'));

                const companyData = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.category === category) {
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
    }, [category]);

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

                                            </div>
                                            <div className='trust-score'>
                                                <p>Trust Score: 4.12</p>
                                            </div>
                                            <div className='reviews-number'>
                                                <p>Reviews: 12,102,123</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='connections'>
                                    <div className='social-media'>
                                        <p>See more:</p>
                                    </div>
                                    <div className='website'>
                                        <p>Website: {company.websiteURL}</p>
                                    </div>
                                    <div className='more-reviews'>
                                        <a href="#">Read Reviews</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {user && <div></div>}
            {!user && (
                <CompanyRegisterQuestion />
            )}

            <Footer />
        </>
    );
}
