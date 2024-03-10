import logo_1 from '../images/logo_1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import axios from 'axios';

const SignedInHome = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [profile, setProfile] = useState(false);

    const [search, setSearch] = useState(false);

    const toggleSearch = () => {
        
        setSearch(!search);

    }

    const toggleDrawer = (newOpen) => () => {
        setIsDrawerOpen(newOpen);
    }

    const handleProfile = (profile) => () => {
        setProfile(profile);
    }

    const [ selected, setSelected ] = useState({
        action: false,
        adventure: false,
        comedy: false,
        crime : false,
        death : false,
        fantasy : false,
        historical : false,
        horror : false
    });

    const handleChange = (event) => {
        setSelected({
            ...selected, 
            [event.target.name]: event.target.checked,
        });
    };

    const { action, adventure, comedy, crime, death, fantasy ,historical ,horror  } = selected;
    
    const [searchValue, setSearchValue] = useState([]);

    function handleBookList (value) {
        let search = value.split(" ");
        setSearchValue(search);
    }

    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const updatedGenre = Object.entries(selected)
            .filter(([select, bool]) => bool)
            .map(([select]) => select);
        setGenre(updatedGenre);
    }, [selected]);

    const [books, setBooks] = useState([]);

    useEffect(() => {

            let url;

            url = `https://www.googleapis.com/books/v1/volumes?q=`;

            if (genre.length > 0) {
                genre.forEach((value) => url += `${value}+`);
            }

            if (searchValue.length > 0) {
                searchValue.forEach((value) => url += `${value}+`);
            }

            else {
                url += 'keynes';
            }

            url += `&key=${process.env.REACT_APP_API_KEY}&maxResults=21`;

            console.log(url);

            axios.get(url)
                .then(res => setBooks(res.data.items))
                .catch(err => console.log(err));

            displayBooks(books);

    }, [search, searchValue, genre, books]);

    function displayBooks(books) {

        if (!Array.isArray(books) || books.length === 0) {
        return <div>No books to display</div>;
    }

    else {
        const bookList = Object.entries(books).map((book) => {
                        const thumbnail = book[1].volumeInfo.imageLinks.smallThumbnail;
                        return (
                            <div className="book-div" key={book[0]}>
                                 <img src={thumbnail} alt="No img" className='book-image'/>
                                <div className="bottom">
                                    <h4 className="title">
                                       Title : {book[1].volumeInfo.title}
                                    </h4>
                                </div>
                            </div>
                        )
                    });
    
        return (<ul>{ bookList }</ul>)

    }


        }

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0 mb-5" >
                
                <Button onClick={toggleDrawer(true)}>
                    <MenuIcon sx={{ color: 'white', fontSize: 50 }}></MenuIcon>
                </Button>

                    <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
                        <Box sx={{ width : 250, display: 'flex'}}>
                            <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
                                <FormLabel sx={{ fontFamily: 'sans-serif', fontWeight: 'bold',fontSize: '1.35rem'}} disabled={ true }> 
                                    Choose Favourite Genres
                                </FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={action} onChange={handleChange} name="action"/>
                                        }
                                        label="Action"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={adventure} onChange={handleChange} name="adventure"/>
                                        }
                                        label="Adventure"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={comedy} onChange={handleChange} name="comedy"/>
                                        }
                                        label="Comedy"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={crime} onChange={handleChange} name='crime'/>
                                        }
                                        label="Crime"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={death} onChange={handleChange} name='death'/>
                                        }
                                        label="Death"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={fantasy} onChange={handleChange} name='fantasy'/>
                                        }
                                        label="Fantasy"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={historical} onChange={handleChange} name='historical'/>
                                        }
                                        label="Historical"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={horror} onChange={handleChange} name='horror'/>
                                        }
                                        label="Horror"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Box>
                    </Drawer>
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

                            <Button className="d-flex justify-content-center" onClick={ handleProfile(true) }>
                                <Avatar sx={{ bgcolor : deepOrange[500] }}>V</Avatar>
                            </Button>

                            <Drawer open={ profile } onClose={ handleProfile(false) } anchor='right'>
                                <Box sx={{ width: 250, display: 'flex' }}>
                                        <AccountBoxIcon></AccountBoxIcon>
                                </Box>
                            </Drawer>
                    </div>
                </div>
            </nav>

            <main>
                <div className='container'>
                    <Box sx={{ bgcolor: "red", color: 'white', width : 500, mb: 2, p: 2 }}>
                        If casually searching for books, just search for titles.
                        If any specific author start with <b>"inauthor:"</b> 
                    </Box>
                    <div className="search">
                        <Input placeholder='Search' sx= {{ width : '80%', pl: 2 }} variant="standard" value={Input.value} onChange={(event) => handleBookList(event.target.value)}/>
                        <Button>
                            <SearchIcon sx={{ color: 'black', fontSize: 50 }} onClick={ (E) => toggleSearch() }></SearchIcon>
                        </Button>
                    </div>

                    <div className="container books-large-div">
                        {displayBooks(books)}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SignedInHome;