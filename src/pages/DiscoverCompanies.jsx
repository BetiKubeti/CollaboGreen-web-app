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
                            <Link to='/'>Software Development</Link>
                            <Link to='/'>Cybersecurity Solutions</Link>
                            <Link to='/'>Cloud Computing</Link>
                            <Link to='/'>Mobile App Development</Link>
                            <Link to='/'>Web Development</Link>
                            <Link to='/'>Tech Support and Maintenance</Link>
                            <Link to='/'>Data Analytics and BI</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Environmental & Sustainability</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Investment Banking</Link>
                            <Link to='/'>Wealth Management</Link>
                            <Link to='/'>Insurance Services</Link>
                            <Link to='/'>Payment Processing</Link>
                            <Link to='/'>Asset Management</Link>
                            <Link to='/'>Credit Unions</Link>
                            <Link to='/'>Tax and Accounting Services</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Education and Training </h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Dental Clinics</Link>
                            <Link to='/'>Pharmaceutical Manufacturing</Link>
                            <Link to='/'>Telehealth Services</Link>
                            <Link to='/'>Medical Imaging Centers </Link>
                            <Link to='/'>Biotechnology Research</Link>
                            <Link to='/'>Healthcare Equipment Suppliers</Link>
                            <Link to='/'>Rehabilitation Centers</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Home and Garden</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Furniture Retailers</Link>
                            <Link to='/'>Gardening Supplies</Link>
                            <Link to='/'>Interior Design Services</Link>
                            <Link to='/'>Home Improvement Stores</Link>
                            <Link to='/'>Kitchen and Bath Fixtures</Link>
                            <Link to='/'>Outdoor Living</Link>
                            <Link to='/'>Home Security Services</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Legal Services</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Law Firms</Link>
                            <Link to='/'>Litigation Services</Link>
                            <Link to='/'>Corporate Legal</Link>
                            <Link to='/'>Intellectual Property</Link>
                            <Link to='/'>Family Law</Link>
                            <Link to='/'>Immigration Law</Link>
                            <Link to='/'>Criminal Defense</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Professional Services</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>HR and Recruitment</Link>
                            <Link to='/'>Management Consulting</Link>
                            <Link to='/'>Financial Advisory</Link>
                            <Link to='/'>Marketing Consulting</Link>
                            <Link to='/'>IT Consulting</Link>
                            <Link to='/'>Environmental Consulting</Link>
                            <Link to='/'>Executive Search</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Marketing & Advertising</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Digital Marketing</Link>
                            <Link to='/'>Advertising Agencies</Link>
                            <Link to='/'>Social Media Marketing</Link>
                            <Link to='/'>Content Marketing</Link>
                            <Link to='/'>Public Relations</Link>
                            <Link to='/'>Branding and Design</Link>
                            <Link to='/'>Market Research</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Financial Services</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Investment Banking</Link>
                            <Link to='/'>Wealth Management</Link>
                            <Link to='/'>Insurance Services</Link>
                            <Link to='/'>Payment Processing</Link>
                            <Link to='/'>Asset Management</Link>
                            <Link to='/'>Credit Unions</Link>
                            <Link to='/'>Tax and Accounting Services</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Healthcare & Medical Services</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Hospitals and Clinics</Link>
                            <Link to='/'>Pharmaceutical Companies</Link>
                            <Link to='/'>Telehealth Services</Link>
                            <Link to='/'>Medical Imaging Centers</Link>
                            <Link to='/'>Biotechnology Research</Link>
                            <Link to='/'>Healthcare Equipment Suppliers</Link>
                            <Link to='/'>Mental Health Services</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Retail & E-commerce</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Fashion and Apparel</Link>
                            <Link to='/'>Electronics and Gadgets</Link>
                            <Link to='/'>Home Decor</Link>
                            <Link to='/'>Pet Supplies</Link>
                            <Link to='/'>Sporting Goods</Link>
                            <Link to='/'>Luxury Brands</Link>
                            <Link to='/'>Bookstores and Publishing</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Automotive & Transportation</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Car Dealerships</Link>
                            <Link to='/'>Transportation Services</Link>
                            <Link to='/'>Automotive Manufacturers</Link>
                            <Link to='/'>Auto Repair and Maintenance</Link>
                            <Link to='/'>Fleet Management</Link>
                            <Link to='/'>Logistics and Supply Chain</Link>
                            <Link to='/'>Electric Vehicle (EV) Companies</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Entertainment and Media</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Film and Television Production</Link>
                            <Link to='/'>Music and Recording Industry</Link>
                            <Link to='/'>Video Game Development</Link>
                            <Link to='/'>Streaming Services</Link>
                            <Link to='/'>Publishing and Printing</Link>
                            <Link to='/'>Public Relations and Media Relations</Link>
                            <Link to='/'>Event Management and Promotion</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Hospitality and Travel </h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Hotels and Accommodations</Link>
                            <Link to='/'>Airlines and Aviation</Link>
                            <Link to='/'>Travel Agencies</Link>
                            <Link to='/'>Tour Operators</Link>
                            <Link to='/'>Cruise Lines</Link>
                            <Link to='/'>Restaurants and Dining</Link>
                            <Link to='/'>Tourism Services</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Fitness and Wellness</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Gyms and Fitness Centers</Link>
                            <Link to='/'>Yoga Studios</Link>
                            <Link to='/'>Wellness Spas</Link>
                            <Link to='/'>Personal Trainers</Link>
                            <Link to='/'>Nutrition and Diet Services</Link>
                            <Link to='/'>Sports and Recreation</Link>
                            <Link to='/'>Mental Health and Wellness Services</Link>
                        </div>
                    </div>

                    <div className='category-list-card'>
                        <div className='title-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                            <h3>Manufacturing & Industrial</h3>
                        </div>
                        <div className='sub-categories'>
                            <Link to='/'>Automotive Manufacturing</Link>
                            <Link to='/'>Aerospace and Defense</Link>
                            <Link to='/'>Textile and Apparel Production</Link>
                            <Link to='/'>Metals and Alloys</Link>
                            <Link to='/'>Chemical Manufacturing</Link>
                            <Link to='/'>Electronic Component Manufacturing</Link>
                            <Link to='/'>Machinery and Equipment Production</Link>
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
