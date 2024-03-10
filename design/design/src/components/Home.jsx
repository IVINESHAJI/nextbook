import Box from '@mui/material/Box';
import TypeIt from 'typeit-react';
import { Button } from '@mui/material';
import { ReactTyped } from 'react-typed';
import pic_1 from '../images/slider-images/1.png';
import pic_2 from '../images/slider-images/2.png';
import pic_3 from '../images/slider-images/3.png';
import pic_4 from '../images/slider-images/4.png';
import pic_5 from '../images/slider-images/5.png';
import pic_6 from '../images/slider-images/6.png';
import pic_7 from '../images/slider-images/7.png';

const Home = () => {
    return (
        <main>
            <div className="container d-flex flex-row justify-content-around">
                <Box className="home-butt-1" sx={{ backgroundImage: 'linear-gradient(45deg, #0c58cb, #008ff4, #00b9d5, #00d983, #a8eb12);', borderRadius: '2.5rem', height: '30rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color : 'white', fontSize: '2rem', flexDirection:'column',boxShadow: 20 }}>
                    <div>
                       <ReactTyped strings={[ "Welcome to,", "आपका स्वागत है,", "Bienvenido a,", "Bienvenue à,"]} typeSpeed = {300} backDelay={ 1000 } backSpeed={200} loop />
                    </div>
                    <div>
                        NextBook.
                    </div>
                </Box>
                <div className="container d-flex flex-column slider-button">
                    <Box className="home-butt-2" sx={{ backgroundImage: 'linear-gradient(to right top, #6b77d1, #008fde, #00a2d6, #00afbf, #00b9a0, #3dbe8a, #64c170, #8ac256, #aac34f, #c7c24f, #e2c154, #fbbf5f)', display: 'flex', alignItems : 'center', height: '14.5rem', borderRadius: '2.5rem', color: 'white', mb : '0.5rem', boxShadow: 20 }}>
                        <div className='slider-div'>
                            <div className='slider'>
                                <img src={ pic_1 } alt="No" width="100"/>
                                <img src={ pic_2 } alt="No" width="100"/>
                                <img src={ pic_3 } alt="No" width="100"/>
                                <img src={ pic_4 } alt="No" width="100"/>
                                <img src={ pic_5 } alt="No" width="100"/>
                                <img src={ pic_6 } alt="No" width="65"/>
                                <img src={ pic_7 } alt="No" width="65"/>
                            </div>
                            <div className='slider'>
                                <img src={ pic_1 } alt="No" width="100"/>
                                <img src={ pic_2 } alt="No" width="100"/>
                                <img src={ pic_3 } alt="No" width="100"/>
                                <img src={ pic_4 } alt="No" width="100"/>
                                <img src={ pic_5 } alt="No" width="100"/>
                                <img src={ pic_6 } alt="No" width="65"/>
                                <img src={ pic_7 } alt="No" width="65"/>
                            </div>
                        </div>
                    </Box>
                    <Button className="home-butt-3" sx={{ fontSize: '3rem', backgroundImage: 'linear-gradient(to right top, #d16ba5, #e76c7f, #e57b58, #cf923b, #a9a836, #91b74c, #74c469, #4cd08b, #47dba6, #47e6c1, #4ff1da, #5ffbf1)', height: '14.5rem', borderRadius: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', boxShadow: 20 }}>
                        Sign Up
                    </Button>
                </div>
            </div>

            <Box className="div-body mt-5" sx={ { fontWeight : 'bold', textAlign : 'center', pt : 4 , px : 10 }}>
                <TypeIt
                    options={{ 
                        strings : ["\"People say the longest sentence to ever be printed in literature belongs to Victor Hugo. The claim is that in Les Misérables there is a sentence which is 823 words long.\""],
                        speed : 60,
                        waitUntilVisible : true,
                        loop : false,
                     }}
                />
            </Box>

            <div className='container mt-5 d-flex text-white justify-content-around div-2'>

                    <Button className='button-down' href="/" sx={{ width : 250, height : 300 , backgroundImage :"linear-gradient(274deg, rgba(34,193,195,1) 0%, rgba(45,253,72,1) 100%)", textAlign: "center", borderRadius : "5%", cursor : "pointer", boxShadow: 20, fontSize: 22, color: "white" }}>Browse a Book</Button>
                    <Button className='button-down' href="/" sx={{ width : 250, height : 300, backgroundImage :"linear-gradient(274deg, rgba(34,193,195,1) 0%, rgba(45,112,253,1) 100%)", textAlign: "center", borderRadius : "5%", cursor : "pointer", boxShadow: 20, fontSize: 22, color: "white" }}>See Requested Books</Button>
                    <Button className='button-down' href="/" sx={{ width : 250, height : 300, backgroundImage :"linear-gradient(274deg, rgba(34,193,195,1) 0%, rgba(244,45,253,1) 100%)", textAlign: "center",borderRadius : "5%", cursor : "pointer", boxShadow: 20, fontSize: 22, color: "white" }}>Rate And Comment</Button>

            </div>
        </main>
    );
}

export default Home;