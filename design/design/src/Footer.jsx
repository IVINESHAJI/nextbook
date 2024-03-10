import logo_1 from './images/logo_1.jpg';

const Footer = () => {

    var today = new Date();


    return(
        <footer className=" p-0 mt-5 navbar-dark bg-dark">
            <div className="container">

                <div className="d-flex justify-content-around">
                    <a href='/' className='navbar-brand mb-0 h1 pt-5'>
                        <img src={logo_1} alt="Logo" width="40"/>
                        <p>NextBook.</p>
                    </a>
                    <div className="d-flex flex-column">

                            <ul className="navbar-nav pt-3">
                                
                                <li className="nav-item">
                                    <a href="/" className="nav-link nav-link-1">
                                        Home
                                    </a>
                                </li>
                            
                                <li className="nav-item">
                                    <a href="/" className="nav-link nav-link-2">
                                        About
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a href="/" className="nav-link nav-link-3">
                                        Contact
                                    </a>
                                </li>
                            
                            </ul>

                    </div>
                </div>
                <div className="d-flex justify-content-center text-white">
                    Copyright © {today.getFullYear()} NEXTBOOK. 
                </div>
            </div>
        </footer>
    );
};

export default Footer;