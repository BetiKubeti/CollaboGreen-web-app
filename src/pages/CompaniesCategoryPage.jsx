import React, { useState, useEffect } from 'react'; // Import React module
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase';
import { collection, getDocs, where } from 'firebase/firestore'; // Import Firestore functions
import { useParams } from 'react-router-dom';


// Import Font Awesome Icons and Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CompanyRegisterQuestion from '../components/CompanyRegisterQuestion'
import Footer from '../components/Footer';

export default function CompaniesCategoryPage() {
    const [user] = useAuthState(auth);
    const [companies, setCompanies] = useState([]);
    const [fetched, setFetched] = useState(false);
    const { category } = useParams(); // Get the category from the URL parameters
    console.log(category);

    console.log('Searching for:', category);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const querySnapshot = await getDocs(
                    collection(firestore, 'companies'),
                    where('category', '==', category)
                );

                const companyData = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    console.log('Found:', data.category);
                    companyData.push(data);
                });

                setCompanies(companyData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (category !== '' && !fetched) {
            fetchCompanies();
        }

        setFetched(false);
    }, [category, fetched]);

    return (
        <>
            <section className='discover-companies-header'>
                <div className='discover-companies-header-container'>
                    <div className='title'>
                        <h2>Best in {category} !</h2>
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
                    {companies.map((company, index) => (
                        <div className='company-by-category-card' key={index}>
                            <div className='company-info-container'>
                                <div className='company-logo'>
                                    {/* Your logo */}
                                </div>
                                <div className='company-name'>
                                    <h3>{company.companyName}</h3>
                                </div>
                                {/* Other company information */}
                            </div>
                            <div className='connections'>
                                <div className='social-media'>
                                    <p>See more:</p>
                                </div>
                                <div className='website'>
                                    <p>Website: {company.websiteURL}</p>
                                </div>
                                {/* Other connection information */}
                            </div>
                        </div>
                    ))}
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