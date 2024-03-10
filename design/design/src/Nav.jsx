import logo_1 from './images/logo_1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Nav = () => {

    const theme = createTheme({
        palette: {
            primary: {
            main: '#fbbf24',
            },
            secondary: {
            main: '#fbbf24', 
            },
        },
    });

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0 mb-5" >
            <div className="container">
                
                <a href='/' className='navbar-brand mb-0 h1 pt-3'>
                    <img src={logo_1} alt="Logo" width="40"/>
                        <p>NextBook.</p>
                </a>
            
                <Button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>

                <div className="collapse navbar-collapse nav-collapse" id="navbarNav">                
                    
                    <div className="container d-flex justify-content-center">

                        <ul className="navbar-nav">
                            
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

                        <form action="/" className="d-flex justify-content-center">
                            <ThemeProvider theme={theme}>
                            <Button  size='secondary' variant='contained' color="primary" href='/SignIn'>SignIn</Button>
                            </ThemeProvider>
                        </form>
                </div>

            </div>

        </nav>
    );
}

export default Nav;