import React from 'react'; // Import React module
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

// Import an image
import banner_gif from '../assets/Banner-gif.gif'; 
import BAA_Logo from '../assets/Business-Academy-Aarhus-Logo.jpg'
import Grundfos_Logo from '../assets/Grundfos-Logo.png'
import McDonalds_Logo from '../assets/McDonalds-Logo.png'
import JavaRoast_Logo from '../assets/JavaRoast-Logo.jpg'

// Import Font Awesome Icons and Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CompanyRegisterQuestion from '../components/CompanyRegisterQuestion'
import SearchBar from '../components/SearchBar'
import AboutCollaboGreen from '../components/AboutCollaboGreen'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function HomePage() {
    // This is the functional component for the HomePage

    const [user] = useAuthState(auth);

    return (
        <>
            <section className="banner" id="banner">
                {/* The main section with a 'banner' class and 'banner' id */}
                <div className="banner-container">
                    {/* The container for banner content */}
                    <div className="banner-content-container">
                        {/* Container for the content within the banner */}
                        <div className="banner-text">
                            {/* Container for the banner text */}
                            <p>Discover businesses and <span>collaborate</span>.</p>
                            <p>Read and write reviews. Keep in mind <span>sustainability</span>.</p>
                            {/* Text content within the banner */}
                        </div>
                        <div className="banner-search-bar">
                            {/* Container for the search bar */}
                            <SearchBar />
                            {/* Include the SearchBar component here */}
                        </div>
                    </div>
                    <div className="banner-gif">
                        {/* Container for the banner GIF */}
                        <img src={banner_gif} alt="banner gif" />
                        {/* Display the banner GIF with specified alt text */}
                    </div>
                </div>
            </section>

            {/* Section for displaying categories on the homepage*/}
            <section className='homepage-categories' id='homepage-categories'>
                {/* Container for homepage categories */}
                <div className='homepage-categories-container'>
                    {/* Title for the homepage categories section */}
                    <div className='title'>
                        <h2>Select categories and explore companies</h2>
                    </div>
                    {/* Container for individual category cards */}
                    <div className='categories-card-container'>
                        {/* Link to navigate to the Software & Technology category */}
                        <Link to="/companies-category/Software & Technology">
                            {/* Individual category card for Software & Technology */}
                            <div className='categories-card'>
                                {/* Image representing the Software & Technology category */}
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 168h-8V72a24 24 0 0 0-24-24H56a24 24 0 0 0-24 24v96h-8a8 8 0 0 0-8 8v16a24 24 0 0 0 24 24h176a24 24 0 0 0 24-24v-16a8 8 0 0 0-8-8ZM48 72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v96H48Zm176 120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-8h192ZM152 88a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z" /></svg>
                                </div>
                                {/* Text description of the Software & Technology category */}
                                <p>Software & Technology</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Home & Garden">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" /></svg>                                
                                </div>
                                <p>Home & Garden</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Marketing & Advertising">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"><path fill="currentColor" d="M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.22 1.22 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.27 1.27 0 0 0 .47.09a1.29 1.29 0 0 0 .7-.22a1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03zm-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.29 2.29 0 0 0 7 9V5.7a2.26 2.26 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5z" /></svg>                                
                                </div>
                                <p>Marketing & Advertising</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Healthcare & Medical services">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m18 20l3.824-3.824a.6.6 0 0 0 .176-.424V10.5A1.5 1.5 0 0 0 20.5 9v0a1.5 1.5 0 0 0-1.5 1.5V15" /><path d="m18 16l.858-.858a.484.484 0 0 0 .142-.343v0a.485.485 0 0 0-.268-.433l-.443-.221a2 2 0 0 0-2.308.374l-.895.895a2 2 0 0 0-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 0 1 2 15.752V10.5A1.5 1.5 0 0 1 3.5 9v0A1.5 1.5 0 0 1 5 10.5V15" /><path d="m6 16l-.858-.858A.485.485 0 0 1 5 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 0 1 2.308.374l.895.895a2 2 0 0 1 .586 1.414V20m4.167-8h-3.334V9.667H8V6.333h2.333V4h3.334v2.333H16v3.334h-2.333V12Z" /></g></svg>                                
                                </div>
                                <p>Healthcare & Medical services</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Hospitality and Travel">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="m6.85 17.15l-2.5-1.375q-.275-.15-.312-.437t.162-.488l.3-.3q.1-.1.238-.138T5 14.4l2.2.3l3.9-3.9l-6.8-3.7q-.375-.2-.437-.625T4.1 5.75l.25-.25q.175-.175.388-.225t.437 0L14.25 7.6l3.925-3.875Q18.6 3.3 19.238 3.3t1.062.425q.425.425.425 1.063T20.3 5.85l-3.9 3.9l2.325 9.025q.05.25-.013.488t-.237.412l-.125.125q-.35.35-.813.275t-.687-.5L13.2 12.9l-3.9 3.9l.3 2.15q.025.175-.025.325t-.175.275l-.125.125q-.25.25-.6.212t-.525-.362l-1.3-2.375Z" /></svg>                                
                                </div>
                                <p>Hospitality and Travel</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Enivironmental & Sustainability">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 22v-2s5-2 10-2s10 2 10 2v2H2m9.3-12.9c-1.2-3.9-7.3-3-7.3-3s.2 7.8 5.9 6.6C9.5 9.8 8 9 8 9c2.8 0 3 3.4 3 3.4V17h2v-4.2s0-3.9 3-4.9c0 0-2 3-2 5c7 .7 7-8.9 7-8.9s-8.9-1-9.7 5.1Z" /></svg>
                                </div>
                                <p>Enivironmental & Sustainability</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Legal Services">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"><path fill="currentColor" d="M14.63 7L13 3h1V2H9V1H8v1H3v1h1L2.38 7H2v1h.15c.156.498.473.93.9 1.23a2.47 2.47 0 0 0 2.9 0A2.44 2.44 0 0 0 6.86 8H7V7h-.45L4.88 3H8v8H6l-.39.18l-2 2.51l.39.81h9l.39-.81l-2-2.51L11 11H9V3h3.13l-1.67 4H10v1h.15a2.48 2.48 0 0 0 4.71 0H15V7h-.37zM5.22 8.51a1.52 1.52 0 0 1-.72.19a1.45 1.45 0 0 1-.71-.19A1.47 1.47 0 0 1 3.25 8h2.5a1.52 1.52 0 0 1-.53.51zM5.47 7h-2l1-2.4l1 2.4zm5.29 5L12 13.5H5L6.24 12h4.52zm1.78-7.38l1 2.4h-2l1-2.4zm.68 3.91a1.41 1.41 0 0 1-.72.19a1.35 1.35 0 0 1-.71-.19a1.55 1.55 0 0 1-.54-.53h2.5a1.37 1.37 0 0 1-.53.53z" /></svg>
                                </div>
                                <p>Legal Services</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Financial Services">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M11.5 3a4.502 4.502 0 0 1 4.336 3.292l.052.205l1.87-.467a1 1 0 0 1 1.233.84L19 7v1.81a6.517 6.517 0 0 1 1.364 1.882l.138.308H21a1 1 0 0 1 .993.883L22 12v3a1 1 0 0 1-.445.832l-.108.062l-1.168.585a6.525 6.525 0 0 1-2.02 2.325l-.259.174V20a1 1 0 0 1-.883.993L17 21h-3a1 1 0 0 1-.993-.883L13 20h-1a1 1 0 0 1-.883.993L11 21H8a1 1 0 0 1-.993-.883L7 20v-1.022a6.508 6.508 0 0 1-2.854-4.101a3.002 3.002 0 0 1-2.14-2.693L2 12v-.5a1 1 0 0 1 1.993-.117L4 11.5v.5c0 .148.032.289.09.415a6.504 6.504 0 0 1 2.938-4.411A4.5 4.5 0 0 1 11.5 3ZM17 8.28l-2.758.69l-.12.023L14 9h-3.5a4.5 4.5 0 0 0-2.045 8.51a1 1 0 0 1 .537.766L9 18.4v.6h1a1 1 0 0 1 .883-.993L11 18h3a1 1 0 0 1 .993.883L15 19h1v-.6a1 1 0 0 1 .545-.89a4.523 4.523 0 0 0 2.068-2.18a.999.999 0 0 1 .347-.417l.119-.07l.921-.461V13h-.207a1 1 0 0 1-.962-.728a4.504 4.504 0 0 0-1.468-2.244a1 1 0 0 1-.355-.644L17 9.257v-.976ZM16 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-4.5-6a2.5 2.5 0 0 0-2.478 2.169A6.52 6.52 0 0 1 10.5 7h3.377l.07-.017A2.5 2.5 0 0 0 11.5 5Z" /></g></svg>
                                </div>
                                <p>Financial Services</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Automotive & Transportation">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M42 8H20a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM4 34h14V20h-7l-7 6.462V34Z" /><path stroke-linecap="round" d="M18 36a4 4 0 0 1-8 0m30 0a4 4 0 0 1-8 0" /></g></svg>
                                </div>
                                <p>Automotive & Transportation</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Fitness & Wellness">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M11.879 5.5c-.955.117-1.86.456-2.242.77c-2.228 1.842-3.486 4.277-4.139 6.4a13.779 13.779 0 0 0-.562 2.763c-.034.383-.065.784-.007 1.167c.383.434.925.749 1.428 1.019c1.051.565 2.63 1.151 4.753 1.387c1.202.134 2.72.21 4.12.098c1.453-.117 2.567-.422 3.145-.885c.974-.779 1.22-1.688 1.131-2.484c-.095-.856-.576-1.58-1.06-1.903c-.835-.556-1.775-.612-2.661-.38c-.912.24-1.661.76-2.015 1.186a1 1 0 0 1-1.477.069c-.55-.55-1.485-.71-2.738.125a1 1 0 0 1-1.536-.636c-.286-1.434-.137-2.958.127-4.215c.266-1.259.666-2.342.96-2.928a1 1 0 0 1 1.788 0c.203.404.574.766 1.006.918c.335-.211.626-.506.862-.821c.434-.578.579-1.125.386-1.608c-.392-.14-.867-.091-1.27-.042Zm1.483-1.964c.484.093 1.191.335 1.532 1.017c.747 1.494.13 2.914-.532 3.797c-.432.576-.988 1.118-1.635 1.45c-.135.07-.41.2-.727.2c-.591 0-1.17-.269-1.645-.605c-.09.306-.177.642-.252.998a10.597 10.597 0 0 0-.24 2.078c1.053-.34 2.13-.304 3.058.22a6.467 6.467 0 0 1 2.357-1.173c1.3-.341 2.86-.294 4.277.65c1.015.677 1.784 1.952 1.939 3.347c.162 1.454-.343 3.044-1.87 4.266c-1.078.862-2.721 1.195-4.233 1.316c-1.565.126-3.218.04-4.502-.103c-2.377-.264-4.202-.928-5.478-1.613c-.838-.45-1.983-1.072-2.346-2.025c-.245-.646-.181-1.43-.121-2.102c.08-.881.276-1.981.643-3.173c.732-2.379 2.165-5.194 4.776-7.352c.803-.664 2.147-1.076 3.272-1.214c.58-.071 1.19-.081 1.727.021Z" /></g></svg>
                                </div>
                                <p>Fitness & Wellness</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Education & Training">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32"><path fill="currentColor" d="M26 30h-2v-3a5.006 5.006 0 0 0-5-5h-6a5.006 5.006 0 0 0-5 5v3H6v-3a7.008 7.008 0 0 1 7-7h6a7.008 7.008 0 0 1 7 7zM5 6a1 1 0 0 0-1 1v9h2V7a1 1 0 0 0-1-1z" /><path fill="currentColor" d="M4 2v2h5v7a7 7 0 0 0 14 0V4h5V2Zm7 2h10v3H11Zm5 12a5 5 0 0 1-5-5V9h10v2a5 5 0 0 1-5 5Z" /></svg>
                                </div>
                                <p>Education & Training</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Professional Services">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M11 10h2c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v6c0-1.414 0-2.121.44-2.56C16.878 16 17.585 16 19 16c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v3H2c0-1.414 0-2.121.44-2.56C2.878 19 3.585 19 5 19c1.414 0 2.121 0 2.56.44C8 19.878 8 20.585 8 22v-9c0-1.414 0-2.121.44-2.56C8.878 10 9.585 10 11 10Zm.146-6.977C11.526 2.34 11.716 2 12 2c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532c.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354c-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.175-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136c-.104 0-.202.046-.399.136l-.178.082c-.691.318-1.037.478-1.267.303c-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438c-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354l.098-.176Z" /></svg>
                                </div>
                                <p>Professional Services</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Retail & E-commerce">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"><path fill="currentColor" d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8A2.37 2.37 0 0 1 8 7.083A2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0a1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0a.5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" /></svg>
                                </div>
                                <p>Retail & E-commerce</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Entertainment & Media">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32"><path fill="currentColor" d="M13 15v8l7-4l-7-4z" /><path fill="currentColor" d="M26 28H6a2.002 2.002 0 0 1-2-2V12a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v14a2.002 2.002 0 0 1-2 2zM6 12v14h20V12zm0-6h20v2H6zm2-4h16v2H8z" /></svg>
                                </div>
                                <p>Entertainment & Media</p>
                            </div>
                        </Link>

                        <Link to="/companies-category/Manufacturing & Industrial">
                            <div className='categories-card'>
                                <div className='categories-card-image'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19h4.6L2.62 8.64C2.23 8 2 7.29 2 6.5a3.999 3.999 0 0 1 7.87-1H14V3c0-1.1.9-2 2-2v2.59L17.59 2H22v2h-3.59L16 6.41v.18L18.41 9H22v2h-4.41L16 9.41V12a2 2 0 0 1-2-2V7.5H9.87c-.1.39-.26.76-.46 1.1l6 10.4H20a2 2 0 0 1 2 2v1H2v-1c0-1.1.9-2 2-2m3.91-9c-.56.32-1.21.5-1.91.5l4.91 8.5h2.19l-5.19-9M6 4.5a2 2 0 0 0-2 2c0 1.11.89 2 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2Z" /></svg>
                                </div>
                                <p>Manufacturing & Industrial</p>
                            </div>
                        </Link>

                    </div>
                    
                    <div className='categories-button'>
                        <Link to="/discover-companies">Discover Businesses <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g transform="rotate(90 128 128)"><path fill="currentColor" d="M236.78 211.81A24.34 24.34 0 0 1 215.45 224H40.55a24.34 24.34 0 0 1-21.33-12.19a23.51 23.51 0 0 1 0-23.72l87.43-151.87a24.76 24.76 0 0 1 42.7 0l87.45 151.87a23.51 23.51 0 0 1-.02 23.72Z" /></g></svg></Link>
                    </div>
                </div>
            </section>

            {user && <div></div>}
            {!user && (
                <CompanyRegisterQuestion />
            )}

            {/* Section for displaying fresh reviews */}
            <section className='fresh-reviews'>
                {/* Container for fresh reviews */}
                <div className='fresh-reviews-container'>
                    {/* Title for the fresh reviews section */}
                    <div className='title'>
                        <h2>Fresh Reviews</h2>
                    </div>
                    {/* Container for individual review cards */}
                    <div className='review-card-container'>
                        {/* Individual review card */}
                        <div className='review-card'>
                            {/* Header of the review card, including company image and rating */}
                            <div className='review-card-header'>
                                {/* Image of the reviewed company (e.g., McDonald's logo) */}
                                <div className='review-card-image'>
                                    <img src={McDonalds_Logo} alt="McDonalds logo" />
                                </div>
                                {/* Star rating for the review */}
                                <div className='review-card-rating'>
                                    {/* Five green stars representing the rating */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    {/* Additional stars can be added for a more detailed rating */}
                                </div>
                            </div>
                            {/* Title of the review card, indicating the reviewed company and the reviewing platform */}
                            <div className='review-card-title'>
                                <h3>McDonalds <span>reviewed</span> Wolt</h3>
                            </div>
                            {/* Comment section containing the detailed review */}
                            <div className='review-comment'>
                                <p>
                                    {/* Detailed review comment provided by the user */}
                                    Our partnership with Wolt has greatly improved our food delivery experience.
                                    Their platform streamlines the process, ensuring our employees have access to a wide variety of options.
                                    Wolt's reliability and extensive restaurant network have been a significant asset to our corporate dining services.
                                    We look forward to continuing this partnership.
                                </p>
                            </div>
                        </div>

                        <div className='review-card'>
                            <div className='review-card-header'>
                                <div className='review-card-image'>
                                    <img src={BAA_Logo} alt="Business Academy Aarhus logo" />
                                </div>
                                <div className='review-card-rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                </div>
                            </div>
                            <div className='review-card-title'><h3>BAA <span>reviewed</span> Kampa</h3></div>
                            <div className='review-comment'>
                                <p>
                                    The collaboration with Kampa had its challenges. 
                                    We experienced miscommunication, delays, and differing expectations. 
                                    There's definite room for improvement to make future collaborations more successful.
                                </p>
                            </div>
                        </div>

                        <div className='review-card'>
                            <div className='review-card-header'>
                                <div className='review-card-image'>
                                    <img src={Grundfos_Logo} alt="Grundfos logo" />
                                </div>
                                <div className='review-card-rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                </div>
                            </div>
                            <div className='review-card-title'><h3>Grundfos <span>reviewed</span> CleanDan</h3></div>
                            <div className='review-comment'>
                                <p>
                                    I must say, I am thoroughly disappointed. The service I received fell far below my expectations.
                                    The cleaning job was incomplete, and there were noticeable areas left untouched. 
                                    The team's attention to detail was lacking, and it felt as though corners were cut in their work. 
                                    Overall, my experience with CleanDan was far from satisfactory. 
                                    I would not recommend their services and am left with a sense of dissatisfaction.
                                </p>
                            </div>
                        </div>

                        <div className='review-card'>
                            <div className='review-card-header'>
                                <div className='review-card-image'>
                                    <img src={JavaRoast_Logo} alt="JavaRoast logo" />
                                </div>
                                <div className='review-card-rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='green-star' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" /></svg>
                                </div>
                            </div>
                            <div className='review-card-title'><h3>JavaRoast <span>reviewed</span> Starbucks</h3></div>
                            <div className='review-comment'>
                                <p>
                                    Our collaboration with Starbucks has been outstanding. 
                                    Their commitment to excellence, professionalism, and quality are truly commendable. 
                                    The knowledge-sharing and mutual respect have led to innovative solutions. 
                                    We look forward to a long and prosperous partnership with Starbucks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AboutCollaboGreen />

            <FAQ />

            <Footer />
        </>
    );
}
