import React from 'react'; // Import React module

// Import Font Awesome Icons and Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CompanyRegisterQuestion from '../components/CompanyRegisterQuestion'
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar'


export default function SignUpLogInPage() {

    return (
        <>
            <section className='discover-companies-header'>
                <div className='discover-companies-header-container'>
                    <div className='title'>
                        <h2>What are you searching for?</h2>
                    </div>
                    <div className='search-bar-container'>
                        <SearchBar />
                    </div>
                </div>
            </section>

            <CompanyRegisterQuestion />

            <Footer />
        </>
    );
}
