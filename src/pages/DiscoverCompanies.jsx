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

            <section className='category-lists'>
                <div className='title'>
                    <h2>Select categories and explore companies</h2>
                </div>

                <div className='category-lists-container'>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Software & Technology</h3>
                        </div>
                        <div className='sub-categories'>
                            <a href="#">Software Development</a>
                            <a href="#">Cybersecurity Solutions</a>
                            <a href="#">Cloud Computing</a>
                            <a href="#">Mobile App Development</a>
                            <a href="#">Web Development</a>
                            <a href="#">Tech Support and Maintenance</a>
                            <a href="#">Data Analytics and BI</a>
                        </div>
                    </div>

                </div>
            </section>

            <CompanyRegisterQuestion />

            <Footer />
        </>
    );
}
