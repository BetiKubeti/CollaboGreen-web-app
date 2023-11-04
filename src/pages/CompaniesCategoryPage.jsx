import React from 'react'; // Import React module
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

// Import Font Awesome Icons and Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CompanyRegisterQuestion from '../components/CompanyRegisterQuestion'
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar'


export default function DiscoverCompanies() {

    const [user] = useAuthState(auth);

    return (
        <>
            <section className='discover-companies-header'>
                <div className='discover-companies-header-container'>
                    <div className='title'>
                        <h2>Best in =category= !</h2>
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
                    <h2>Companies (=numer-of-companies=)</h2>
                </div>

                <div className='company-by-category-container'>

                    <div className='company-by-category-card'>
                        <div className='company-info-container'>
                            <div className='company-logo'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            </div>
                            <div className='company-name'>
                                <h3>=companyName=</h3>
                            </div>
                            <div className='reviews'>
                                <div className='review-card-rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                </div>
                                <div className='trust-score'>
                                    <p>Trust Score: 4.70</p>
                                </div>
                                <div className='reviews'>
                                    <p>Reviews: 1,602,332</p>
                                </div>
                            </div>
                            <div className='location'>
                                <p>Location: Aarhus, Denmark</p>
                            </div>
                            <div className='company-type'>
                                <p>Type of company: =categoryofcompany=</p>
                            </div>
                        </div>
                        <div className='connections'>
                            <div className='social-media'>
                                <p>See more:</p>
                            </div>
                            <div className='website'>
                                <p>Website: =websiteURL=</p>
                            </div>
                            <div className='read-reviews'>
                                <a href="">Read Reviews <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g transform="rotate(90 128 128)"><path fill="currentColor" d="M236.78 211.81A24.34 24.34 0 0 1 215.45 224H40.55a24.34 24.34 0 0 1-21.33-12.19a23.51 23.51 0 0 1 0-23.72l87.43-151.87a24.76 24.76 0 0 1 42.7 0l87.45 151.87a23.51 23.51 0 0 1-.02 23.72Z" /></g></svg></a>
                            </div>
                        </div>
                    </div>
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
